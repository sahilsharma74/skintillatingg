const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

const coreRoutes = [
  { path: '/', expectedStatus: [200], name: 'Home Page' },
  { path: '/treatments', expectedStatus: [200], name: 'Treatments Listing' },
  { path: '/technology', expectedStatus: [200], name: 'Technology Page' },
  { path: '/team', expectedStatus: [200], name: 'Team Page' },
  { path: '/journey', expectedStatus: [200], name: 'Patient Journey Page' },
  { path: '/training', expectedStatus: [200], name: 'Training Page' },
  { path: '/gallery', expectedStatus: [200], name: 'Clinical Gallery' },
  { path: '/insights', expectedStatus: [200], name: 'Insights / Blog' },
  { path: '/insights-design', expectedStatus: [200], name: 'Insights Design' },
  { path: '/career', expectedStatus: [200], name: 'Careers Page' },
  { path: '/contact', expectedStatus: [200], name: 'Contact Page' },
  { path: '/book-consultation', expectedStatus: [200], name: 'Consultation Booking' },
  { path: '/admin/login', expectedStatus: [200], name: 'Admin Login' },
  { path: '/admin', expectedStatus: [200, 307, 302], name: 'Admin Dashboard (Protected)' },
  { path: '/api/admin/auth/session', expectedStatus: [200, 401], name: 'Admin Session API' },
];

// Extract treatment slugs directly from data file
function getTreatmentSlugs() {
  try {
    const treatmentsFilePath = path.join(__dirname, 'src', 'data', 'treatments.ts');
    const content = fs.readFileSync(treatmentsFilePath, 'utf8');
    const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)];
    const slugs = [...new Set(slugMatches.map(m => m[1]))];
    return slugs;
  } catch (err) {
    console.warn('Could not read treatments.ts directly:', err.message);
    return ['laser-hair-reduction'];
  }
}

async function fetchRoute(testItem) {
  const { path: routePath, expectedStatus, name } = testItem;
  return new Promise((resolve) => {
    const url = `${BASE_URL}${routePath}`;
    const start = Date.now();
    const req = http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const duration = Date.now() - start;
        const isExpected = expectedStatus.includes(res.statusCode);
        resolve({
          name: name || routePath,
          path: routePath,
          statusCode: res.statusCode,
          duration,
          bodyLength: data.length,
          passed: isExpected,
          errorSnippet: !isExpected ? data.slice(0, 300) : null
        });
      });
    });

    req.on('error', (err) => {
      const duration = Date.now() - start;
      resolve({
        name: name || routePath,
        path: routePath,
        statusCode: 'ERR',
        duration,
        passed: false,
        errorSnippet: err.message
      });
    });

    req.setTimeout(8000, () => {
      req.destroy();
      resolve({
        name: name || routePath,
        path: routePath,
        statusCode: 'TIMEOUT',
        duration: 8000,
        passed: false,
        errorSnippet: 'Request timed out after 8s'
      });
    });
  });
}

async function runAllAutomatedTests() {
  console.log('\n======================================================');
  console.log('   DR. AKSHAYA JAIN CLINIC - AUTOMATED TEST SUITE    ');
  console.log('======================================================\n');

  let passedCount = 0;
  let failedCount = 0;

  console.log('--- [1/2] Testing Core Pages and API Endpoints ---');
  for (const item of coreRoutes) {
    const res = await fetchRoute(item);
    if (res.passed) {
      console.log(`✓ [PASS] [${res.statusCode}] ${res.name.padEnd(30)} ${res.path.padEnd(25)} (${res.duration}ms, ${res.bodyLength} bytes)`);
      passedCount++;
    } else {
      console.error(`✗ [FAIL] [${res.statusCode}] ${res.name.padEnd(30)} ${res.path.padEnd(25)} - ${res.errorSnippet || ''}`);
      failedCount++;
    }
  }

  console.log('\n--- [2/2] Testing Dynamic Treatment Detail Pages ---');
  const slugs = getTreatmentSlugs();
  console.log(`Found ${slugs.length} dynamic treatment slugs to verify.`);

  for (const slug of slugs) {
    const item = {
      path: `/treatments/${slug}`,
      expectedStatus: [200],
      name: `Treatment: ${slug}`
    };
    const res = await fetchRoute(item);
    if (res.passed) {
      console.log(`✓ [PASS] [${res.statusCode}] ${res.name.padEnd(45)} (${res.duration}ms, ${res.bodyLength} bytes)`);
      passedCount++;
    } else {
      console.error(`✗ [FAIL] [${res.statusCode}] ${res.name.padEnd(45)} - ${res.errorSnippet || ''}`);
      failedCount++;
    }
  }

  console.log('\n======================================================');
  console.log(`   AUTOMATED TEST RUN COMPLETED                       `);
  console.log(`   Total Tests: ${passedCount + failedCount} | Passed: ${passedCount} | Failed: ${failedCount} `);
  console.log('======================================================\n');
}

runAllAutomatedTests();
