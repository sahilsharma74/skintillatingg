export type TreatmentSubcategory =
  | "ALL"
  | "ANTI-AGEING"
  | "ACNE & SCARS"
  | "SKIN"
  | "HAIRCARE"
  | "HAIR"
  | "BODY"
  | "INJECTABLES"
  | "LASER"
  | "AESTHETICS";

export const TREATMENT_CATEGORIES: TreatmentSubcategory[] = [
  "ALL",
  "ANTI-AGEING",
  "ACNE & SCARS",
  "SKIN",
  "HAIRCARE",
  "HAIR",
  "BODY",
  "INJECTABLES",
  "LASER",
  "AESTHETICS",
];

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: "Treatments" | "Technology" | "Education" | "Training" | "Career";
  subcategories: TreatmentSubcategory[];
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
  focusAreas?: string[];
  faqs?: { question: string; answer: string }[];
}

export const INSIGHT_CATEGORIES = [
  "All",
  "Education",
] as const;

export const TREATMENTS_DATA: Treatment[] = [
  // ROW 1
  {
    id: "laser-hair-reduction",
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Treatments",
    subcategories: ["ALL", "LASER", "BODY"],
    focusAreas: ["Face & Chin", "Underarms & Arms", "Full Legs", "Bikini & Body"],
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
    image: "/images/treatments/laser-hair-reduction.jpg",
    faqs: [
      {
        question: "Is laser hair reduction permanent?",
        answer: "Laser hair reduction results in long-lasting, permanent hair reduction of up to 85-90%. Any occasional fine regrowth is light and easily maintained with annual touch-ups."
      },
      {
        question: "Is the treatment painful?",
        answer: "Our medical-grade lasers feature active contact cooling, which cools the skin before and during every laser pulse, making the experience virtually painless."
      }
    ]
  },
  {
    id: "lipolysis",
    slug: "lipolysis",
    title: "Lipolysis",
    category: "Treatments",
    subcategories: ["ALL", "BODY", "INJECTABLES"],
    focusAreas: ["Submental Chin", "Abdomen", "Flanks & Love Handles", "Thighs"],
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
    image: "/images/treatments/lipolysis.jpg",
    faqs: [
      {
        question: "How long until I see results from lipolysis?",
        answer: "Initial fat reduction begins within 3 to 4 weeks as your body naturally clears metabolized lipids, with peak results visible around 6 to 8 weeks post-treatment."
      }
    ]
  },
  {
    id: "dermal-fillers",
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: "Treatments",
    subcategories: ["ALL", "INJECTABLES", "ANTI-AGEING", "AESTHETICS"],
    focusAreas: ["Cheeks & Mid-Face", "Nasolabial Folds", "Marionette Lines", "Jawline & Chin"],
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
    image: "/images/treatments/dermal-fillers.jpg",
    faqs: [
      {
        question: "How long do dermal fillers last?",
        answer: "Premium Hyaluronic Acid fillers typically last between 12 to 18 months depending on the treatment area and individual metabolism."
      }
    ]
  },

  // ROW 2
  {
    id: "microdermabrasion",
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    category: "Treatments",
    subcategories: ["ALL", "SKIN", "AESTHETICS"],
    focusAreas: ["Uneven Texture", "Clogged Pores", "Superficial Blackheads", "Dullness"],
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
    subcategories: ["ALL", "LASER", "ACNE & SCARS", "ANTI-AGEING"],
    focusAreas: ["Deep Acne Scars", "Photo-Aging & Wrinkles", "Skin Laxity", "Enlarged Pores"],
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
    subcategories: ["ALL", "ACNE & SCARS", "SKIN"],
    focusAreas: ["Active Comedones", "Post-Acne Indentations", "Redness & PIH", "Rough Texture"],
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
    subcategories: ["ALL", "SKIN", "ACNE & SCARS", "ANTI-AGEING"],
    focusAreas: ["Hyperpigmentation", "Melasma", "Acne Marks", "Dull Complexion"],
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
    subcategories: ["ALL", "HAIR", "SKIN", "INJECTABLES", "ANTI-AGEING"],
    focusAreas: ["Scalp & Hair Follicles", "Under-Eye Hollows", "Facial Rejuvenation"],
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
    subcategories: ["ALL", "SKIN", "AESTHETICS"],
    focusAreas: ["Deep Cleansing", "Cellular Hydration", "Pre-Event Radiance", "Environmental Detox"],
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
    subcategories: ["ALL", "INJECTABLES", "AESTHETICS"],
    focusAreas: ["Lip Definition", "Vermilion Border", "Cupid's Bow", "Hydrated Volume"],
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
    subcategories: ["ALL", "ANTI-AGEING", "SKIN", "AESTHETICS"],
    focusAreas: ["SMAS Layer Lifting", "Jawline Definition", "Double Chin Tightening", "Brow Elevation"],
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
    subcategories: ["ALL", "SKIN", "ACNE & SCARS", "ANTI-AGEING"],
    focusAreas: ["Collagen Induction", "Acne Scar Smoothing", "Enlarged Pores", "Skin Elasticity"],
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
    image: "/images/treatments/microneedling.jpg"
  },

  // ROW 5
  {
    id: "q-switch",
    slug: "q-switch",
    title: "Q Switch",
    category: "Treatments",
    subcategories: ["ALL", "LASER", "SKIN", "ACNE & SCARS"],
    focusAreas: ["Dark Spots & Freckles", "Laser Skin Toning", "Post-Acne PIH", "Melanin Shattering"],
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
    subcategories: ["ALL", "AESTHETICS"],
    focusAreas: ["Microblading Eyebrows", "Lip Blushing & Definition", "Sterile Bio-Pigments"],
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
    subcategories: ["ALL", "LASER", "SKIN"],
    focusAreas: ["Dark & Colored Tattoo Fading", "Lymphatic Ink Elimination", "Skin Barrier Protection"],
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
  },

  // ROW 6: HAIRCARE TREATMENTS
  {
    id: "hair-prp",
    slug: "hair-prp",
    title: "HAIR PRP",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Scalp Crown", "Hairline", "Thinning Regions"],
    excerpt:
      "A targeted hair and scalp treatment using concentrated growth factors derived from autologous plasma to support hair density and follicle vitality.",
    fullDescription: [
      "Hair PRP (Platelet-Rich Plasma) therapy is a specialized scalp revitalization treatment that utilizes autologous plasma concentrated with natural growth factors.",
      "The procedure involves preparing a refined plasma sample from the client's own blood and administering precise micro-applications across target areas of the scalp.",
      "Designed to nourish the hair root micro-environment, Hair PRP supports scalp health, improves hair strand quality, and complements personalized hair care routines."
    ],
    keyBenefits: [
      "Supports scalp nourishment and follicle environment health",
      "Utilizes autologous growth factors derived from client's own plasma",
      "Complements comprehensive, dermatologist-guided hair care plans",
      "Minimal downtime with a smooth, comfortable procedure experience"
    ],
    idealCandidates: [
      "Individuals experiencing early signs of hair thinning or weakened hair quality",
      "Clients seeking natural, plasma-derived scalp nourishment",
      "Anyone looking to maintain scalp wellness as part of routine care"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "Minimal (mild scalp sensitivity for a few hours)",
      sessionsRecommended: "4 – 6 sessions spaced 4 weeks apart",
      anesthesia: "Topical anesthetic or cooling spray as needed"
    },
    image: "/images/treatments/haircare/hair-prp.webp",
    faqs: [
      {
        question: "What is Hair PRP?",
        answer: "Hair PRP involves using concentrated platelet-rich plasma to deliver essential nutrients and natural growth factors to the scalp."
      },
      {
        question: "Is there downtime after the session?",
        answer: "Downtime is minimal. Most clients resume daily activities immediately following their appointment."
      }
    ]
  },
  {
    id: "hair-transplant",
    slug: "hair-transplant",
    title: "HAIR TRANSPLANT",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Frontal Hairline", "Crown Region", "Temporal Recess"],
    excerpt:
      "An advanced hair restoration technique designed to relocate healthy hair follicles to areas requiring increased density and refined coverage.",
    fullDescription: [
      "Hair Transplant procedure is a clinical hair restoration solution that redistributes healthy, permanent hair follicles from donor regions to areas experiencing thinning or receded hair lines.",
      "Using modern Follicular Unit Extraction (FUE) protocols, individual follicular units are carefully harvested and strategically implanted to mirror natural growth angles and hairline aesthetics.",
      "Each procedure is tailored to individual facial symmetry and personal restoration goals, emphasizing natural-looking density and seamless integration with existing hair."
    ],
    keyBenefits: [
      "Provides long-lasting, structural hair redistribution and hairline framing",
      "Employs modern micro-harvesting techniques for natural aesthetic results",
      "Personalized planning aligned with individual hair density goals",
      "Minimally invasive donor harvesting with structured recovery guidelines"
    ],
    idealCandidates: [
      "Individuals with localized thinning or receded hairlines seeking structural restoration",
      "Candidates with adequate donor hair density",
      "Clients looking for a defined, personalized hairline design"
    ],
    procedureOverview: {
      duration: "4 – 8 hours (depending on graft count)",
      downtime: "5 – 7 days for initial healing",
      sessionsRecommended: "1 session (or planned stage sessions as evaluated)",
      anesthesia: "Local anesthesia"
    },
    image: "/images/treatments/haircare/hair-transplant.webp",
    faqs: [
      {
        question: "How is a Hair Transplant performed?",
        answer: "Individual hair follicles are harvested from donor zones and positioned in recipient areas according to your natural hair growth pattern."
      },
      {
        question: "What is the typical recovery period?",
        answer: "Initial recovery and scab shedding usually occur within 7 to 10 days, after which normal non-strenuous activities can resume."
      }
    ]
  },
  {
    id: "hairfall",
    slug: "hairfall",
    title: "HAIRFALL",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Diffused Shedding", "Scalp Health", "Hair Root Strength"],
    excerpt:
      "A comprehensive, multi-modal diagnostic and therapeutic protocol designed to evaluate and address excessive hair shedding and scalp concerns.",
    fullDescription: [
      "Our Hairfall protocol focuses on identifying potential contributing factors to excessive hair shedding through thorough clinical evaluation and personalized scalp assessments.",
      "Management strategies integrate targeted topical treatments, scalp nutrition, barrier protection, and evidence-guided therapeutic modalities tailored to specific hair loss patterns.",
      "By addressing underlying scalp health and supporting follicle resilience, the protocol aims to reduce shedding and foster a favorable environment for hair wellness."
    ],
    keyBenefits: [
      "Comprehensive diagnostic assessment of hair shedding triggers",
      "Tailored multi-disciplinary care plans combining topical and procedural therapies",
      "Focuses on scalp barrier repair and follicular environment stabilization",
      "Ongoing monitoring to track progress and adjust supportive care"
    ],
    idealCandidates: [
      "Individuals noticing increased daily hair shedding or reduced hair volume",
      "Clients seeking professional guidance for acute or chronic hair loss concerns",
      "Anyone wanting a structured approach to scalp and hair retention"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "Zero downtime",
      sessionsRecommended: "Customized care plan (typically monthly reviews)",
      anesthesia: "None required"
    },
    image: "/images/treatments/haircare/hairfall.webp",
    faqs: [
      {
        question: "What causes excessive hairfall?",
        answer: "Hairfall can be influenced by multiple factors including genetics, stress, nutritional changes, and scalp health. A professional assessment helps clarify individual causes."
      },
      {
        question: "How quickly can I expect results?",
        answer: "Hair growth cycles take time. Most clients begin noticing improvements in scalp condition and shedding reduction over a 3 to 6 month period."
      }
    ]
  },
  {
    id: "mesotherapy",
    slug: "mesotherapy",
    title: "MESOTHERAPY",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Full Scalp Coverage", "Hair Roots", "Crown Thinning"],
    excerpt:
      "A specialized micro-infusion technique delivering vital nutrients, peptides, and amino acids directly to the scalp layer to nourish hair roots.",
    fullDescription: [
      "Mesotherapy for hair involves micro-injections of nutrient-rich solutions containing vitamins, minerals, coenzymes, and amino acids into the superficial dermal layer of the scalp.",
      "This targeted delivery system supplies essential nutrients directly where hair follicles reside, bypassing the digestive system for localized scalp nourishment.",
      "The micro-stimulations also encourage micro-circulation, supporting healthier-looking, revitalized hair strands."
    ],
    keyBenefits: [
      "Direct micro-delivery of essential vitamins and scalp nutrients",
      "Enhances scalp micro-circulation and follicular hydration",
      "Non-surgical treatment with quick in-clinic application",
      "Can be safely combined with other hair wellness programs"
    ],
    idealCandidates: [
      "Clients with dull, brittle, or thinning hair needing nutritional boost",
      "Individuals experiencing environmental stress affecting hair quality",
      "Anyone looking for a gentle, supportive scalp infusion procedure"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "Minimal (slight scalp redness for a few hours)",
      sessionsRecommended: "6 – 8 sessions spaced 2 to 3 weeks apart",
      anesthesia: "Topical anesthetic as needed"
    },
    image: "/images/treatments/haircare/mesotherapy.webp",
    faqs: [
      {
        question: "What is in a Mesotherapy solution?",
        answer: "Solutions typically contain a customized blend of vitamins, amino acids, minerals, and hyaluronic acid formulated for scalp care."
      },
      {
        question: "Is Mesotherapy painful?",
        answer: "Micro-needles are extremely fine, making the procedure well-tolerated. Topical numbing can be applied for comfort."
      }
    ]
  },
  {
    id: "gfc-hair",
    slug: "gfc-hair",
    title: "GFC HAIR",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Scalp Vertex", "Hairlines", "Diffused Thinning Zones"],
    excerpt:
      "An advanced Growth Factor Concentrate therapy utilizing highly purified autologous factors to promote scalp wellness and hair restoration goals.",
    fullDescription: [
      "GFC (Growth Factor Concentrate) Hair therapy is a next-generation autologous scalp treatment designed to isolate and concentrate essential growth factors from a client's own blood sample.",
      "Through a specialized preparation process, a cell-free growth factor solution is obtained and precisely administered into target scalp regions.",
      "GFC delivers high concentrations of active bio-factors, offering a clean, acellular formulation aimed at nourishing follicles and supporting hair thickness."
    ],
    keyBenefits: [
      "High concentration of purified growth factors in a cell-free solution",
      "100% autologous preparation minimizing sensitivity risks",
      "Supports follicle nourishment and hair shaft vigor",
      "Comfortable administration with zero social downtime"
    ],
    idealCandidates: [
      "Individuals seeking an advanced, highly concentrated growth factor treatment",
      "Clients experiencing early thinning or hair quality degradation",
      "Anyone preferring a clean, cell-free autologous therapy"
    ],
    procedureOverview: {
      duration: "45 minutes",
      downtime: "Zero to minimal",
      sessionsRecommended: "3 – 4 sessions spaced 4 weeks apart",
      anesthesia: "Topical cooling or light numbing"
    },
    image: "/images/treatments/haircare/gfc-hair.webp",
    faqs: [
      {
        question: "How does GFC differ from standard PRP?",
        answer: "GFC is an acellular, highly purified concentrate of growth factors extracted from blood, offering high stability and minimal post-procedure inflammation."
      },
      {
        question: "When can I resume hair washing after GFC?",
        answer: "You can generally wash your hair gently 12 to 24 hours after the procedure."
      }
    ]
  },
  {
    id: "derma-roller",
    slug: "derma-roller",
    title: "DERMA ROLLER",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Scalp Surface", "Thinning Areas", "Product Absorption Zones"],
    excerpt:
      "A controlled scalp microneedling procedure designed to enhance topical product absorption and stimulate natural scalp micro-circulation.",
    fullDescription: [
      "Derma Roller treatment for hair utilizes a sterile micro-needling device to create controlled micro-channels across the scalp surface.",
      "This physical micro-stimulation encourages localized blood circulation while significantly boosting the penetration of specialized scalp serums and active topical solutions.",
      "When performed under clinical supervision, Derma Roller sessions help optimize the scalp surface environment for enhanced product efficacy."
    ],
    keyBenefits: [
      "Enhances topical scalp serum absorption by up to 80%",
      "Stimulates natural micro-vascular circulation in scalp tissue",
      "Complements home care serums and professional hair protocols",
      "Non-invasive and quick treatment cycle"
    ],
    idealCandidates: [
      "Clients using topical hair growth serums seeking enhanced absorption",
      "Individuals looking for controlled scalp micro-stimulation",
      "Anyone maintaining routine preventative hair care"
    ],
    procedureOverview: {
      duration: "30 minutes",
      downtime: "24 hours (mild scalp redness)",
      sessionsRecommended: "4 – 6 sessions spaced 2 to 3 weeks apart",
      anesthesia: "Topical numbing cream"
    },
    image: "/images/treatments/haircare/derma-roller.webp",
    faqs: [
      {
        question: "How does a clinical Derma Roller session differ from home rolling?",
        answer: "In-clinic sessions utilize sterile, medical-grade needles at controlled depths tailored to your scalp thickness under hygienic protocols."
      },
      {
        question: "Is there any special aftercare required?",
        answer: "Avoid direct sun exposure, heavy sweating, and harsh chemicals for 24-48 hours after treatment."
      }
    ]
  },
  {
    id: "hair-laser",
    slug: "hair-laser",
    title: "HAIR LASER",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Entire Scalp", "Hair Line", "Crown"],
    excerpt:
      "Low-level light therapy designed to stimulate scalp cellular activity, support hair root energy, and promote healthy hair growth conditions.",
    fullDescription: [
      "Hair Laser therapy, also known as Low-Level Light Therapy (LLLT), delivers gentle, non-thermal light energy at specific wavelengths to the scalp.",
      "The photons of light are absorbed by cellular mitochondria within hair follicles, supporting cellular respiration and ATP energy production.",
      "This non-invasive procedure is completely painless, comfortable, and provides a gentle way to maintain scalp health and support hair follicle activity."
    ],
    keyBenefits: [
      "Painless, non-thermal, and non-invasive light technology",
      "Supports mitochondrial energy production in scalp cells",
      "Zero downtime with a relaxing treatment experience",
      "Suitable as a standalone or supportive therapy alongside other hair treatments"
    ],
    idealCandidates: [
      "Individuals looking for a gentle, non-invasive hair maintenance option",
      "Clients seeking a comfortable, needle-free scalp therapy",
      "Anyone wishing to enhance overall hair density and strand vitality"
    ],
    procedureOverview: {
      duration: "20 – 30 minutes",
      downtime: "Zero downtime",
      sessionsRecommended: "8 – 12 sessions spaced weekly or bi-weekly",
      anesthesia: "None required"
    },
    image: "/images/treatments/haircare/hair-laser.webp",
    faqs: [
      {
        question: "Does Low-Level Hair Laser produce heat or pain?",
        answer: "No. LLLT is a cool laser light technology that produces no heat, burning sensation, or discomfort."
      },
      {
        question: "Can I read or relax during the treatment?",
        answer: "Yes, the session is completely comfortable and allows you to sit back and relax."
      }
    ]
  },
  {
    id: "hair-oxigenation",
    slug: "hair-oxigenation",
    title: "HAIR OXIGENATION",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Scalp Pores", "Hair Follicle Openings", "Scalp Barrier"],
    excerpt:
      "A deeply detoxifying scalp treatment using pressurized oxygen and specialized solutions to cleanse pores, refresh the scalp, and nourish roots.",
    fullDescription: [
      "Hair Oxigenation is a specialized scalp rejuvenation protocol that utilizes hyperbaric oxygen delivery to deeply cleanse and detoxify the scalp micro-environment.",
      "High-pressure oxygen stream gently removes buildup, excess sebum, and impurities from hair follicles while infusing concentrated botanical and peptide solutions.",
      "This invigorating procedure leaves the scalp feeling thoroughly refreshed, hydrated, and optimized for hair strand growth."
    ],
    keyBenefits: [
      "Purifies scalp pores from sebum buildup, pollution, and product residue",
      "Delivers pressurized oxygen and nutrient hydration directly to follicles",
      "Improves scalp micro-circulation and environmental clarity",
      "Instantly refreshing with zero irritation or recovery time"
    ],
    idealCandidates: [
      "Individuals with flaky, oily, or congested scalp conditions",
      "Clients looking for a deep scalp detox before active hair therapies",
      "Anyone experiencing scalp dullness or product buildup"
    ],
    procedureOverview: {
      duration: "30 – 45 minutes",
      downtime: "Zero downtime",
      sessionsRecommended: "Monthly maintenance or initial 3-session series",
      anesthesia: "None required"
    },
    image: "/images/treatments/haircare/hair-oxygenation.webp",
    faqs: [
      {
        question: "What does Hair Oxigenation feel like?",
        answer: "It feels like a cool, refreshing breeze on the scalp as pressurized oxygen and nutrients are applied."
      },
      {
        question: "Is this suitable for sensitive scalps?",
        answer: "Yes, oxygenation is gentle, non-irritating, and soothing for sensitive scalps."
      }
    ]
  },
  {
    id: "cocktail-therapy",
    slug: "cocktail-therapy",
    title: "COCKTAIL THERAPY",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Targeted Scalp Zones", "Weakened Strands", "Hair Density Areas"],
    excerpt:
      "A customized combination therapy blending vitamins, growth peptides, and hydrating active agents tailored to unique scalp requirements.",
    fullDescription: [
      "Cocktail Therapy for hair is a bespoke treatment formulation designed by combining multiple therapeutic agents tailored to your specific scalp diagnostic profile.",
      "By blending hair growth peptides, essential micronutrients, antioxidant complexes, and moisture-binding molecules, this multi-targeted approach addresses several scalp concerns simultaneously.",
      "Delivered via gentle micro-infusions, Cocktail Therapy offers a holistic, personalized strategy for comprehensive hair and scalp care."
    ],
    keyBenefits: [
      "Bespoke formulation tailored to individual scalp diagnostics",
      "Combines multiple bio-active ingredients for synergistic support",
      "Addresses hair strand strength, scalp hydration, and follicle care",
      "Flexible therapy adaptable to changing seasonal or scalp needs"
    ],
    idealCandidates: [
      "Clients with complex or multiple scalp concerns requiring customized care",
      "Individuals seeking a personalized, multi-ingredient hair infusion",
      "Anyone looking for targeted scalp nourishment"
    ],
    procedureOverview: {
      duration: "45 minutes",
      downtime: "Minimal (mild sensitivity for a few hours)",
      sessionsRecommended: "4 – 6 sessions spaced 3 weeks apart",
      anesthesia: "Topical numbing cream"
    },
    image: "/images/treatments/haircare/cocktail-therapy.webp",
    faqs: [
      {
        question: "How is the Cocktail formulation chosen?",
        answer: "The formulation is customized based on a clinical consultation and scalp assessment."
      },
      {
        question: "Can Cocktail Therapy be combined with PRP or GFC?",
        answer: "Yes, it can be strategically paired with autologous growth factor treatments for enhanced comprehensive care."
      }
    ]
  },
  {
    id: "qr-678",
    slug: "qr-678",
    title: "QR 678",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Frontal & Vertex Scalp", "Hairline", "Sparse Regions"],
    excerpt:
      "A proprietary bio-engineered factor formulation designed to support hair follicle health and assist hair management plans.",
    fullDescription: [
      "QR 678 is a specialized, bio-engineered regulatory factor formulation developed to target hair follicle signaling pathways.",
      "The mixture consists of bio-identical peptides and growth factors that mimic natural signal molecules involved in the hair growth cycle.",
      "Administered through precise scalp micro-injections, QR 678 offers a standardized, ready-to-use therapy designed to support hair retention and density goals."
    ],
    keyBenefits: [
      "Bio-engineered formulation containing standardized regulatory peptides",
      "Designed specifically for targeted scalp application",
      "Minimal risk of inflammation with structured application protocols",
      "Quick, comfortable in-office procedure"
    ],
    idealCandidates: [
      "Individuals seeking an advanced bio-engineered peptide treatment",
      "Clients experiencing pattern hair thinning or shedding",
      "Anyone looking for a reliable, standardized hair protocol"
    ],
    procedureOverview: {
      duration: "30 minutes",
      downtime: "Minimal to zero",
      sessionsRecommended: "6 – 8 sessions spaced 3 weeks apart",
      anesthesia: "Topical numbing"
    },
    image: "/images/treatments/haircare/qr-678.webp",
    faqs: [
      {
        question: "What is QR 678?",
        answer: "QR 678 is a patented blend of bio-identical growth factors designed to support hair follicle function."
      },
      {
        question: "Are the injections uncomfortable?",
        answer: "Injections use ultra-fine needles, and topical numbing cream is applied to ensure comfort."
      }
    ]
  },
  {
    id: "exosome-therapy",
    slug: "exosome-therapy",
    title: "EXOSOME THERAPY",
    category: "Treatments",
    subcategories: ["ALL", "HAIRCARE"],
    focusAreas: ["Crown & Vertex", "Receding Hairline", "Overall Scalp Matrix"],
    excerpt:
      "A cutting-edge regenerative scalp procedure utilizing extracellular vesicles to support intercellular communication and follicle renewal.",
    fullDescription: [
      "Exosome Therapy for hair represents a modern advancement in regenerative scalp aesthetics. Exosomes are microscopic extracellular vesicles responsible for facilitating intercellular communication and signal transfer.",
      "Loaded with signaling lipids, mRNA, microRNA, and growth proteins, exosomes deliver potent biological instructions directly to scalp target cells.",
      "This non-cellular therapy supports cellular renewal, calms scalp inflammation, and creates an optimal biological foundation for healthy-looking hair."
    ],
    keyBenefits: [
      "Advanced extracellular vesicle technology for cellular messaging",
      "Rich in biological signaling proteins, lipids, and microRNA",
      "Supports scalp renewal and follicle environment balance",
      "Acellular formulation providing precise, high-potency scalp support"
    ],
    idealCandidates: [
      "Clients seeking state-of-the-art regenerative hair and scalp care",
      "Individuals with stubborn thinning or scalp health concerns",
      "Anyone desiring a high-potency bio-signal scalp infusion"
    ],
    procedureOverview: {
      duration: "45 – 60 minutes",
      downtime: "Minimal (mild redness for a few hours)",
      sessionsRecommended: "3 – 5 sessions spaced 4 weeks apart",
      anesthesia: "Topical numbing cream"
    },
    image: "/images/treatments/haircare/exosome-therapy.webp",
    faqs: [
      {
        question: "What are exosomes?",
        answer: "Exosomes are microscopic bio-vesicles that carry growth signals and peptides between cells to encourage cellular repair and health."
      },
      {
        question: "Is Exosome Therapy safe?",
        answer: "Yes, when performed in a controlled clinical environment using certified exosome formulations."
      }
    ]
  }
];
