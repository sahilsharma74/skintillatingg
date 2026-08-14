export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: "Treatments" | "Technology" | "Education" | "Training" | "Career";
  excerpt: string;
  fullDescription: string[];
  keyBenefits: string[];
  idealCandidates: string[];
  procedureOverview: {
    duration: string;
    downtime: string;
    sessionsRecommended: string;
    anesthesia: string;
  };
  image: string;
}

export const INSIGHT_CATEGORIES = [
  "All",
  "Treatments",
  "Technology",
  "Education",
  "Training",
  "Career",
] as const;

export const TREATMENTS_DATA: Treatment[] = [
  // ROW 1
  {
    id: "laser-hair-reduction",
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Treatments",
    excerpt:
      "A clinically guided approach to reducing unwanted hair with advanced laser technology, designed for smoother skin and long-term hair reduction.",
    fullDescription: [
      "Laser Hair Reduction is a non-invasive, precision clinical therapy that targets hair follicles with concentrated light energy. The laser wavelength is selectively absorbed by melanin in the hair shaft, converting to thermal energy that safely disables the follicle's growth mechanism.",
      "At Skintillatingg, Dr. Akshaya Jain utilizes state-of-the-art medical laser systems equipped with active contact cooling. This ensures maximum protection for the surrounding skin barrier while delivering comfortable, highly effective treatments across all skin phototypes.",
      "Over a structured course of sessions timed according to natural hair growth cycles (anagen phase), clients experience progressive reduction in hair density, smoother skin texture, and complete relief from ingrown hairs and razor irritation."
    ],
    keyBenefits: [
      "Long-term reduction in hair density across target treatment areas",
      "Eliminates ingrown hairs, folliculitis, and shaving razor burns",
      "Precision targeting of coarse hair without damaging surrounding dermal tissue",
      "Integrated contact cooling for enhanced patient comfort and safety"
    ],
    idealCandidates: [
      "Individuals seeking a long-term solution for unwanted facial or body hair",
      "Patients prone to recurrent ingrown hairs or skin irritation from shaving/waxing",
      "All skin phototypes seeking safe, dermatologist-guided laser care"
    ],
    procedureOverview: {
      duration: "30 – 60 minutes (depending on area)",
      downtime: "Zero to minimal (mild redness resolving within hours)",
      sessionsRecommended: "6 – 8 sessions spaced 4 to 6 weeks apart",
      anesthesia: "None required (integrated sapphire chill tip)"
    },
    image: "/images/treatments/laser-hair-reduction.jpg"
  },
  {
    id: "lipolysis",
    slug: "lipolysis",
    title: "Lipolysis",
    category: "Treatments",
    excerpt:
      "A non-surgical body-contouring approach designed to target unwanted localized fat deposits and support a more defined appearance.",
    fullDescription: [
      "Lipolysis represents a targeted, minimally invasive therapeutic protocol designed to address localized adiposity resistant to diet and exercise. Through precise micro-injections of biocompatible fat-dissolving compounds, targeted fat cell membranes are gently disrupted.",
      "Once cell integrity is compromised, the body's lymphatic system naturally metabolizes and excretes the broken-down lipid droplets over several weeks, leading to a visible reduction in localized volume.",
      "Formulated and performed personally by Dr. Akshaya Jain, lipolysis is ideal for refining contours around the submental chin region, abdomen, thighs, and flank areas while upholding patient safety and subtle, natural symmetry."
    ],
    keyBenefits: [
      "Targeted reduction of stubborn localized fat pockets without surgery",
      "Refines and sculpts natural anatomical contours and jawlines",
      "Non-surgical approach with minimal recovery time",
      "Gradual, natural-looking results that harmonize with body proportions"
    ],
    idealCandidates: [
      "Clients at or near ideal body weight with stubborn localized fat deposits",
      "Patients seeking chin contouring (double chin reduction) or flank refinement",
      "Individuals desiring a non-surgical alternative to liposuction"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "2 – 4 days of mild localized swelling or tenderness",
      sessionsRecommended: "2 – 4 sessions spaced 4 weeks apart",
      anesthesia: "Topical numbing cream applied prior to procedure"
    },
    image: "/images/treatments/lipolysis.jpg"
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "Treatments",
    excerpt:
      "Advanced injectable treatments designed to restore volume, soften the appearance of lines and enhance facial contours while maintaining natural-looking results.",
    fullDescription: [
      "Dermal Filler therapy at Skintillatingg is rooted in anatomical precision and subtle facial harmonization. Utilizing premium, FDA-approved Hyaluronic Acid (HA) gel formulations, Dr. Akshaya Jain restores lost mid-face volume, enhances lip definition, and refines jawline architecture.",
      "Hyaluronic acid is a naturally occurring sugar molecule in human skin responsible for retaining moisture and structural support. When introduced micro-precisely into targeted dermal planes, it replaces age-related bone and soft-tissue resorption.",
      "The hallmark of Dr. Akshaya Jain's technique is restraint—enhancing natural beauty and structural balance while completely avoiding over-filled or unnatural aesthetics."
    ],
    keyBenefits: [
      "Immediate restoration of lost facial volume and structural support",
      "Enhances lip contour, cheek definition, and tear-trough hollows",
      "Softens deep nasolabial folds and marionette lines",
      "Biocompatible, reversible formulations with natural-looking longevity"
    ],
    idealCandidates: [
      "Patients noticing age-related volume loss or deepening facial folds",
      "Individuals seeking lip enhancement, chin elongation, or cheek sculpt",
      "Clients prioritizing natural, refreshed facial aesthetics"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "1 – 2 days (mild localized swelling or pinpoint bruising)",
      sessionsRecommended: "1 session (touch-up at 12–18 months)",
      anesthesia: "Topical anesthetic cream & lidocaine-infused gel"
    },
    image: "/images/treatments/dermal-fillers.jpg"
  },

  // ROW 2
  {
    id: "microdermabrasion",
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    category: "Treatments",
    excerpt:
      "A non-invasive exfoliation treatment designed to improve skin texture, tone and overall appearance while supporting skin renewal.",
    fullDescription: [
      "Microdermabrasion is a cornerstone clinical skin-renewing treatment that mechanically exfoliates the outermost layer of dead skin cells (stratum corneum). Using medical-grade diamond micro-crystals and adjustable vacuum suction, it gently polishes the epidermal surface.",
      "This double-action mechanical resurfacing clears clogged pores, stimulates micro-vascular circulation, and triggers accelerated cellular turnover. It also dramatically improves the dermal absorption of medical-grade active serums.",
      "Suitable for all skin types, Dr. Akshaya Jain customizes every session with soothing post-exfoliation barrier repair serums, leaving the skin instantly radiant, smooth, and deeply hydrated."
    ],
    keyBenefits: [
      "Instantly polishes rough skin texture and brightens dull complexions",
      "Unclogs congested pores and reduces superficial blackheads",
      "Enhances penetration of therapeutic serums and active skincare",
      "Gentle, non-chemical resurfacing with immediate glow and zero downtime"
    ],
    idealCandidates: [
      "Individuals dealing with dullness, uneven texture, or superficial congestion",
      "Patients seeking a skin refresh prior to events or as routine maintenance",
      "Clients sensitive to chemical peels seeking mechanical exfoliation"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "Zero (immediate healthy radiance)",
      sessionsRecommended: "Monthly routine skin maintenance",
      anesthesia: "None required (gentle relaxing therapy)"
    },
    image: "/images/treatments/microdermabrasion.jpg"
  },
  {
    id: "co2-laser",
    slug: "co2-laser",
    title: "CO₂ Laser",
    category: "Treatments",
    excerpt:
      "An advanced skin-resurfacing treatment designed to address skin texture, wrinkles, scars and other visible signs of skin damage.",
    fullDescription: [
      "Fractional CO₂ (Carbon Dioxide) Laser resurfacing is the gold standard clinical procedure for dramatic dermal remodeling, deep acne scar revision, and structural photo-aging repair.",
      "The laser delivers microscopic columns of 10,600nm wavelength thermal energy into the deep dermis, leaving intervening tissue bridges untouched. This controlled micro-injury triggers a robust neocollagenesis cascade—stimulating the production of fresh collagen and elastin fibers over several months.",
      "Supervised by Dr. Akshaya Jain with individualized energy parameters and post-laser barrier repair protocols, CO₂ laser therapy provides unparalleled skin tightening, scar softening, and complete dermal renovation."
    ],
    keyBenefits: [
      "Gold-standard reduction of deep acne scars and surgical scarring",
      "Dramatically tightens lax skin and smooths stubborn perioral/fine wrinkles",
      "Erases sun damage, age spots, and uneven hyperpigmentation",
      "Long-lasting structural skin transformation through new collagen formation"
    ],
    idealCandidates: [
      "Patients with persistent acne scars, enlarged pores, or texture irregularities",
      "Individuals seeking significant rejuvenation for photo-aged skin and wrinkles",
      "Clients prepared for structured post-procedure downtime for maximum clinical results"
    ],
    procedureOverview: {
      duration: "60 – 90 minutes",
      downtime: "5 – 7 days of peeling and healing",
      sessionsRecommended: "1 – 3 sessions spaced 8 to 12 weeks apart",
      anesthesia: "Topical prescription numbing cream"
    },
    image: "/images/treatments/co2-laser.jpg"
  },
  {
    id: "acne-and-scars",
    slug: "acne-and-scars",
    title: "Acne & Scars",
    category: "Treatments",
    excerpt:
      "Targeted aesthetic treatments designed to improve active acne, acne scars, uneven texture and visible skin imperfections.",
    fullDescription: [
      "Acne and post-inflammatory acne scarring require a multi-modal, clinical diagnostic approach. Dr. Akshaya Jain combines targeted sebaceous-gland regulation with subcision, TCA cross, and fractional laser resurfacing based on scar morphology (icepick, boxcar, rolling scars).",
      "By soothing active inflammatory acne breakouts while simultaneously targeting dermal fibrotic bands, patients experience progressive reduction in scar depth and significant improvement in overall skin clarity.",
      "Customized post-procedure skincare protocols preserve the epidermal moisture barrier and prevent post-inflammatory hyperpigmentation (PIH)."
    ],
    keyBenefits: [
      "Targeted reduction of inflammatory acne lesions and active comedones",
      "Smooths rolling, boxcar, and icepick acne scars",
      "Refines pore size and regulates sebum production",
      "Custom clinical protocols for acne-prone skin types"
    ],
    idealCandidates: [
      "Patients struggling with persistent active acne breakouts",
      "Individuals seeking scar revision for post-acne indentation marks",
      "Clients seeking comprehensive skin smoothing and texture refinement"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "2 – 4 days depending on protocol intensity",
      sessionsRecommended: "4 – 6 sessions spaced 3 to 4 weeks apart",
      anesthesia: "Topical anesthetic cream"
    },
    image: "/images/treatments/acne-and-scars.jpg"
  },

  // ROW 3
  {
    id: "chemical-peel",
    slug: "chemical-peel",
    title: "Chemical Peel",
    category: "Treatments",
    excerpt:
      "A controlled skin-renewal treatment designed to improve pigmentation, texture, uneven tone and other visible signs of skin ageing.",
    fullDescription: [
      "Medical chemical peeling involves the controlled application of clinical-grade chemo-exfoliants (such as Glycolic, Salicylic, Lactic, and Mandelic acids) to dissolve intercellular desmosomes.",
      "This initiates shedding of damaged epidermal layers, unclogging pores, lightening melasma or sun spots, and revealing fresh, luminous underlying skin.",
      "Formulated specifically for Indian skin phototypes by Dr. Akshaya Jain, our chemical peels balance high efficacy with deep hydration and safety."
    ],
    keyBenefits: [
      "Fades stubborn hyperpigmentation, melasma, and sun damage",
      "Accelerates epidermal turnover for radiant, refined skin",
      "Reduces fine lines, mild acne, and superficial congestion",
      "Tailored acid blends for delicate skin sensitivities"
    ],
    idealCandidates: [
      "Patients dealing with hyperpigmentation, sun spots, or dull skin tone",
      "Individuals seeking targeted chemical exfoliation for acne or fine lines",
      "Clients prioritizing fast, reliable skin radiance"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "1 – 3 days of mild flaking",
      sessionsRecommended: "3 – 5 sessions spaced 2 to 3 weeks apart",
      anesthesia: "None required (cooling fan applied during peel)"
    },
    image: "/images/treatments/chemical-peel.jpg"
  },
  {
    id: "prp",
    slug: "prp",
    title: "PRP",
    category: "Treatments",
    excerpt:
      "Platelet-rich plasma therapy designed to support natural skin and hair rejuvenation using growth factors derived from the patient's own blood.",
    fullDescription: [
      "Platelet-Rich Plasma (PRP) therapy is an autologous regenerative treatment that harnesses the body's natural healing bio-proteins. A small sample of blood is centrifuged to isolate a concentrated plasma layer rich in platelets and growth factors.",
      "When micro-injected into the scalp or facial skin tissue, PRP stimulates angiogenesis (new micro-blood vessel formation), activates dormant stem cells, and accelerates collagen synthesis.",
      "It is an exceptional non-surgical solution for early hair thinning, alopecia, under-eye dark circles, and overall dermal skin revitalization."
    ],
    keyBenefits: [
      "100% natural, autologous treatment with zero risk of allergic reaction",
      "Stimulates hair follicle thickness and prolongs growth phase",
      "Enhances facial collagen, skin elasticity, and radiant texture",
      "Synergistic when combined with microneedling or hair restoration"
    ],
    idealCandidates: [
      "Patients experiencing hair thinning or early-stage hair loss",
      "Clients seeking natural skin rejuvenation without synthetic fillers",
      "Individuals looking for eye contour revitalization"
    ],
    procedureOverview: {
      duration: "60 minutes",
      downtime: "1 day (mild scalp/skin redness)",
      sessionsRecommended: "4 – 6 sessions spaced 4 weeks apart",
      anesthesia: "Topical numbing cream"
    },
    image: "/images/treatments/prp.jpg"
  },
  {
    id: "medi-facial",
    slug: "medi-facial",
    title: "Medi Facial",
    category: "Treatments",
    excerpt:
      "A clinically guided facial treatment combining advanced skincare techniques to cleanse, hydrate, rejuvenate and improve overall skin appearance.",
    fullDescription: [
      "Unlike standard cosmetic salon facials, a Medi Facial at Skintillatingg is a customized medical-grade procedure tailored by Dr. Akshaya Jain following a detailed diagnostic skin assessment.",
      "Combining deep ultrasonic cleansing, targeted enzymatic exfoliation, needle-free electroporation of high-potency serums, and LED phototherapy, Medi Facials nourish the skin at a cellular level.",
      "Ideal for pre-event illumination, environmental pollution detox, and routine skin health maintenance."
    ],
    keyBenefits: [
      "Deep pore purification and lymphatic fluid drainage",
      "Infuses clinical-grade antioxidants, hyaluronic acid, and peptides",
      "Restores damaged skin barrier and calms redness/sensitivity",
      "Instant, luminous glow with zero recovery time"
    ],
    idealCandidates: [
      "Anyone seeking medical-grade facial care tailored to their skin type",
      "Patients preparing for weddings, celebrations, or media appearances",
      "Clients maintaining monthly skin health and hydration balance"
    ],
    procedureOverview: {
      duration: "60 – 75 minutes",
      downtime: "Zero (immediate glowing complexion)",
      sessionsRecommended: "Monthly ongoing skin maintenance",
      anesthesia: "None required (soothing relaxing facial)"
    },
    image: "/images/treatments/medi-facial.jpg"
  },

  // ROW 4
  {
    id: "lip-filler",
    slug: "lip-filler",
    title: "Lip Filler",
    category: "Treatments",
    excerpt:
      "Advanced lip enhancement designed to restore or add subtle volume, improve lip definition and create balanced, natural-looking results.",
    fullDescription: [
      "Lip Filler therapy with Dr. Akshaya Jain focuses on creating harmonized, supple lip architecture tailored to individual facial proportions.",
      "Using micro-cannula techniques and soft Hyaluronic Acid gels, lip border definition (vermilion border), cupid's bow balance, and hydrated volume are sculpted micro-precisely.",
      "The result is natural movement, smooth lip texture, and complete avoidance of over-projected or unnatural lip contours."
    ],
    keyBenefits: [
      "Restores youthful lip volume and smooths perioral smoker's lines",
      "Defines lip borders, cupid's bow, and subtle symmetry",
      "Deeply hydrates lip tissue for a naturally soft appearance",
      "Reversible HA formulations customized to client preferences"
    ],
    idealCandidates: [
      "Patients with naturally thin lips or age-related lip volume loss",
      "Individuals seeking subtle lip shape correction or hydration",
      "Clients seeking natural, elegant lip enhancements"
    ],
    procedureOverview: {
      duration: "45 minutes",
      downtime: "1 – 2 days of mild swelling",
      sessionsRecommended: "1 session (maintains 9 – 12 months)",
      anesthesia: "Topical prescription numbing cream & lidocaine"
    },
    image: "/images/treatments/lip-filler.jpg"
  },
  {
    id: "hifu",
    slug: "hifu",
    title: "HIFU",
    category: "Treatments",
    excerpt:
      "A non-invasive focused ultrasound treatment designed to support skin tightening, contouring and a firmer, more youthful appearance.",
    fullDescription: [
      "High-Intensity Focused Ultrasound (HIFU) delivers focused acoustic energy deep into the SMAS (Superficial Muscular Aponeurotic System) layer—the exact anatomical layer addressed in surgical facelifts.",
      "By creating precise micro-coagulation zones deep beneath the epidermis, HIFU triggers tissue contraction and activates long-term collagen remodeling without breaking the skin surface.",
      "HIFU effectively lifts sagging jowels, tightens submental chin laxity, and refines cheekbone definition with zero surgical incisions or downtime."
    ],
    keyBenefits: [
      "Non-surgical lifting and tightening of jawline, neck, and brow",
      "Targets deep SMAS layer for structural collagen synthesis",
      "Zero needle incisions, zero bleeding, and zero social downtime",
      "Progressive improvements peaking over 2 to 3 months post-treatment"
    ],
    idealCandidates: [
      "Clients noticing early-to-moderate skin laxity or sagging jawlines",
      "Patients seeking non-invasive facial contouring and neck tightening",
      "Individuals preferring non-surgical alternatives to facelifts"
    ],
    procedureOverview: {
      duration: "60 – 90 minutes",
      downtime: "Zero (mild tenderness resolving in days)",
      sessionsRecommended: "1 session annually",
      anesthesia: "Topical numbing cream"
    },
    image: "/images/treatments/hifu.jpg"
  },
  {
    id: "microneedling",
    slug: "microneedling",
    title: "Microneedling",
    category: "Treatments",
    excerpt:
      "A skin-renewal treatment that stimulates natural collagen production to improve texture, pores, scars and overall skin quality.",
    fullDescription: [
      "Microneedling (Collagen Induction Therapy) utilizes an automated, medical-grade motor device containing ultra-fine sterile needles to create controlled micro-channels in the skin.",
      "This stimulates the natural wound-healing cascade, unleashing growth factors that synthesize fresh collagen and elastin fibers while dramatically boosting trans-dermal serum absorption.",
      "Dr. Akshaya Jain pairs microneedling with customized bio-active serum infusions (such as HA, Vitamin C, or growth factors) for deep structural skin renewal."
    ],
    keyBenefits: [
      "Smooths acne scarring, enlarged pores, and fine lines",
      "Improves overall skin firmness, resilience, and elasticity",
      "Enhances therapeutic serum absorption by up to 80%",
      "Safe across all skin tones with minimal downtime"
    ],
    idealCandidates: [
      "Patients seeking reduction of acne scars, fine lines, or wide pores",
      "Individuals wanting overall skin texture and firmness enhancement",
      "Clients desiring safe collagen stimulation therapy"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "1 – 2 days of mild pinkness",
      sessionsRecommended: "3 – 5 sessions spaced 4 weeks apart",
      anesthesia: "Topical prescription numbing cream"
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeuYA1GF05n9uuu-1_BTr9TKdSirqrkGRMAQ8FOSyf4yY4LVuCJpsRgx9_YTPxf7kJ6ytZ_e9UxC4V9iHLyJ5AGPku0PUjJ1MOmkAOIOwQUlySJNhwTSdv6aCdDth2Up7nabq94N24Li5tbOmdrBxCTSmwzQLIYkj7OkB2cRBrbm_4Pjz__Z8cJPNJ-yQ0_ENmSZV5r0zL2yVbQfd9Sr76njbJYzdDIwsNgeNoBfiU1KnZvVHV8_8"
  },

  // ROW 5
  {
    id: "q-switch",
    slug: "q-switch",
    title: "Q Switch",
    category: "Treatments",
    excerpt:
      "Advanced laser technology designed to target pigmentation, uneven skin tone, spots and selected unwanted pigmentation concerns.",
    fullDescription: [
      "Q-Switched Nd:YAG Laser therapy delivers high-energy laser light pulses in nanosecond durations. This ultra-short energy burst shatter dermal and epidermal melanin deposits into microscopic particles through a photo-acoustic effect.",
      "Once fragmented, the body's natural macrophage cells clear away the pigment, leaving skin visibly brighter, clearer, and more uniform in tone.",
      "It is an exceptional treatment for freckles, sun spots, post-acne hyperpigmentation, and medical laser skin toning."
    ],
    keyBenefits: [
      "Shatters stubborn dark spots, freckles, and hyperpigmentation",
      "Provides luminous laser skin toning with zero skin peeling",
      "Stimulates mild dermal collagen for refined skin texture",
      "Safe, painless procedure with no recovery downtime required"
    ],
    idealCandidates: [
      "Patients seeking relief from freckles, sun damage, or dark spots",
      "Individuals desiring overall skin whitening, brightening, and toning",
      "Clients looking for pain-free laser pigment correction"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "Zero (immediate skin clarity)",
      sessionsRecommended: "4 – 6 sessions spaced 2 to 3 weeks apart",
      anesthesia: "None required"
    },
    image: "/images/treatments/q-switch.jpg"
  },
  {
    id: "permanent-makeup",
    slug: "permanent-makeup",
    title: "Permanent Makeup",
    category: "Treatments",
    excerpt:
      "Precision cosmetic enhancement designed to define and enhance features such as brows and lips with a polished, long-lasting appearance.",
    fullDescription: [
      "Permanent Makeup (Micropigmentation) at Skintillatingg combines artistic aesthetic precision with clinical hygiene standards. Using organic, medical-grade bio-pigments, Dr. Akshaya Jain creates micro-strokes for fuller brows (Microblading) or subtle lip blushing.",
      "The treatment restores symmetry, enhances facial framing, and provides a naturally polished look that saves daily makeup preparation time.",
      "Performed in a sterile clinical environment, pigments age gracefully and naturally over time."
    ],
    keyBenefits: [
      "Defines sparse eyebrows with hyper-realistic hair-like strokes",
      "Restores lip border definition and natural youthful lip color",
      "Long-lasting result (18 to 24 months) using safe bio-pigments",
      "Saves daily makeup routine time with waterproof elegance"
    ],
    idealCandidates: [
      "Patients with sparse, asymmetric, or over-tweezed eyebrows",
      "Individuals seeking lip blushing or permanent feature definition",
      "Busy professionals prioritizing long-lasting effortless grooming"
    ],
    procedureOverview: {
      duration: "90 – 120 minutes",
      downtime: "3 – 5 days of light pigment healing",
      sessionsRecommended: "1 session + 1 touch-up at 4 weeks",
      anesthesia: "Topical anesthetic gel"
    },
    image: "/images/treatments/permanent-makeup.jpg"
  },
  {
    id: "tattoo-removal",
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    category: "Treatments",
    excerpt:
      "Laser-based treatment designed to progressively break down unwanted tattoo pigment while supporting the skin's natural healing process.",
    fullDescription: [
      "Laser Tattoo Removal utilizes high-intensity Q-Switched laser energy to shatter tattoo ink particles embedded in the dermis without harming surrounding tissue.",
      "The laser light targets specific ink colors, fragmenting large pigment crystals into micro-particles that are safely eliminated through the body's natural lymphatic immune system over consecutive weeks.",
      "Guided by Dr. Akshaya Jain with customizable laser energy wavelengths, tattoo removal is achieved with maximum skin preservation and minimal scarring risk."
    ],
    keyBenefits: [
      "Progressive, complete fading of unwanted dark and colored tattoo ink",
      "Preserves surrounding healthy skin barrier without scarring",
      "Precision laser targeting tailored to tattoo age and ink density",
      "Clinical oversight ensuring optimal post-laser skin recovery"
    ],
    idealCandidates: [
      "Patients seeking complete removal or fading of old unwanted tattoos",
      "Individuals needing tattoo cover-up preparation",
      "Clients prioritizing safe, dermatologist-led laser care"
    ],
    procedureOverview: {
      duration: "30 – 60 minutes",
      downtime: "3 – 5 days of skin healing",
      sessionsRecommended: "6 – 10 sessions spaced 6 to 8 weeks apart",
      anesthesia: "Topical numbing cream & cooling air"
    },
    image: "/images/treatments/tattoo-removal.jpg"
  }
];
