// CPACC Preparation Course modular data loader.
// Assembles domain lesson files into the window.CPACC_COURSE_DATA shape.
(function () {
  var manifest = [
  {
    "title": "Domain 1 - Disability Models and Disability Experience",
    "description": "Disability models, lived experience, language, identity, and core accessibility thinking.",
    "lessons": [
      {
        "title": "Why Disability Models Matter",
        "file": "domain1/01-why-disability-models-matter.js",
        "varName": "CPACC_DOMAIN_1_LESSON_01"
      },
      {
        "title": "Medical Model Of Disability",
        "file": "domain1/02-medical-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_02"
      },
      {
        "title": "Social Model Of Disability",
        "file": "domain1/03-social-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_03"
      },
      {
        "title": "Human Rights Model Of Disability",
        "file": "domain1/04-human-rights-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_04"
      },
      {
        "title": "Charity Model Of Disability",
        "file": "domain1/05-charity-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_05"
      },
      {
        "title": "Economic Model Of Disability",
        "file": "domain1/06-economic-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_06"
      },
      {
        "title": "Functional Solutions Model",
        "file": "domain1/07-functional-solutions-model.js",
        "varName": "CPACC_DOMAIN_1_LESSON_07"
      },
      {
        "title": "Biopsychosocial Model Of Disability",
        "file": "domain1/08-biopsychosocial-model-of-disability.js",
        "varName": "CPACC_DOMAIN_1_LESSON_08"
      },
      {
        "title": "Disability Language and Identity",
        "file": "domain1/09-disability-language-and-identity.js",
        "varName": "CPACC_DOMAIN_1_LESSON_09"
      },
      {
        "title": "Domain 1 Review",
        "file": "domain1/10-domain-1-review.js",
        "varName": "CPACC_DOMAIN_1_LESSON_10"
      }
    ]
  },
  {
    "title": "Domain 2 - Disability Demographics and Diversity",
    "description": "A consolidated, in-depth study of disability demographics, disability experience, vision, hearing and communication, mobility, cognition, neurodiversity, chronic conditions, intersectionality, identity, education, employment, technology access, and ableism.",
    "lessons": [
      {
        "title": "Understanding Disability Demographics",
        "file": "domain2/01-understanding-disability-demographics.js",
        "varName": "CPACC_DOMAIN_2_LESSON_01"
      },
      {
        "title": "Understanding Disability Experiences",
        "file": "domain2/02-understanding-disability-experiences.js",
        "varName": "CPACC_DOMAIN_2_LESSON_02"
      },
      {
        "title": "Blindness, Low Vision, and Color Vision Deficiency",
        "file": "domain2/03-blindness-low-vision-and-color-vision-deficiency.js",
        "varName": "CPACC_DOMAIN_2_LESSON_03"
      },
      {
        "title": "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
        "file": "domain2/04-deaf-hard-of-hearing-deafblind-and-speech-disabilities.js",
        "varName": "CPACC_DOMAIN_2_LESSON_04"
      },
      {
        "title": "Mobility, Dexterity, and Physical Disabilities",
        "file": "domain2/05-mobility-dexterity-and-physical-disabilities.js",
        "varName": "CPACC_DOMAIN_2_LESSON_05"
      },
      {
        "title": "Cognitive, Intellectual, and Learning Disabilities",
        "file": "domain2/06-cognitive-intellectual-and-learning-disabilities.js",
        "varName": "CPACC_DOMAIN_2_LESSON_06"
      },
      {
        "title": "Neurodiversity",
        "file": "domain2/07-neurodiversity.js",
        "varName": "CPACC_DOMAIN_2_LESSON_07"
      },
      {
        "title": "Mental Health and Chronic Conditions",
        "file": "domain2/08-mental-health-and-chronic-conditions.js",
        "varName": "CPACC_DOMAIN_2_LESSON_08"
      },
      {
        "title": "Multiple Disabilities, Intersectionality, and Disability Identity",
        "file": "domain2/09-multiple-disabilities-intersectionality-and-disability-identity.js",
        "varName": "CPACC_DOMAIN_2_LESSON_09"
      },
      {
        "title": "Disability in Society",
        "file": "domain2/10-disability-in-society.js",
        "varName": "CPACC_DOMAIN_2_LESSON_10"
      },
      {
        "title": "Domain 2 Comprehensive Review",
        "file": "domain2/11-domain-2-comprehensive-review.js",
        "varName": "CPACC_DOMAIN_2_LESSON_11"
      }
    ]
  },
  {
    "title": "Domain 3 - Accessibility and Universal Design",
    "description": "Accessibility foundations, Universal Design, UDL, inclusive design, usability, and accessibility benefits.",
    "lessons": [
      {
        "title": "Accessibility Foundations",
        "file": "domain3/01-accessibility-foundations.js",
        "varName": "CPACC_DOMAIN_3_LESSON_01"
      },
      {
        "title": "Universal Design",
        "file": "domain3/02-universal-design.js",
        "varName": "CPACC_DOMAIN_3_LESSON_02"
      },
      {
        "title": "Universal Design For Learning",
        "file": "domain3/03-universal-design-for-learning.js",
        "varName": "CPACC_DOMAIN_3_LESSON_03"
      },
      {
        "title": "Inclusive Design and Usability",
        "file": "domain3/04-inclusive-design-and-usability.js",
        "varName": "CPACC_DOMAIN_3_LESSON_04"
      },
      {
        "title": "Digital, Physical, and Document Accessibility",
        "file": "domain3/05-digital-physical-and-document-accessibility.js",
        "varName": "CPACC_DOMAIN_3_LESSON_05"
      },
      {
        "title": "Accessible Documents and Information Design",
        "file": "domain3/06-accessible-documents-and-information-design.js",
        "varName": "CPACC_DOMAIN_3_LESSON_06"
      },
      {
        "title": "Domain 3 Review",
        "file": "domain3/07-domain-3-review.js",
        "varName": "CPACC_DOMAIN_3_LESSON_07"
      }
    ]
  },
  {
    "title": "Domain 4 - Assistive Technology and Adaptive Strategies",
    "description": "AT overview, screen readers, magnification, braille, voice input, alternative input, captions, cognitive support, and mobile tools.",
    "lessons": [
      {
        "title": "Assistive Technology Overview",
        "file": "domain4/01-assistive-technology-overview.js",
        "varName": "CPACC_DOMAIN_4_LESSON_01"
      },
      {
        "title": "Screen Readers",
        "file": "domain4/02-screen-readers.js",
        "varName": "CPACC_DOMAIN_4_LESSON_02"
      },
      {
        "title": "Magnification, Braille, and Alternative Input",
        "file": "domain4/03-magnification-braille-and-alternative-input.js",
        "varName": "CPACC_DOMAIN_4_LESSON_03"
      },
      {
        "title": "Captions, Transcripts, and Cognitive Supports",
        "file": "domain4/04-captions-transcripts-and-cognitive-supports.js",
        "varName": "CPACC_DOMAIN_4_LESSON_04"
      },
      {
        "title": "Domain 4 Review",
        "file": "domain4/05-domain-4-review.js",
        "varName": "CPACC_DOMAIN_4_LESSON_05"
      }
    ]
  },
  {
    "title": "Domain 5 - Accessibility Laws, Standards, and Management",
    "description": "Laws, standards, WCAG, procurement, organizational accessibility, and program management.",
    "lessons": [
      {
        "title": "Accessibility Laws and Organizational Responsibility Overview",
        "file": "domain5/01-accessibility-laws-overview.js",
        "varName": "CPACC_DOMAIN_5_LESSON_01"
      },
      {
        "title": "Major U.S. Accessibility Laws",
        "file": "domain5/02-us-accessibility-laws.js",
        "varName": "CPACC_DOMAIN_5_LESSON_02"
      },
      {
        "title": "International Accessibility and Disability Rights",
        "file": "domain5/03-international-accessibility-and-disability-rights.js",
        "varName": "CPACC_DOMAIN_5_LESSON_03"
      },
      {
        "title": "Accessibility Standards and Guidelines",
        "file": "domain5/04-accessibility-standards-and-guidelines.js",
        "varName": "CPACC_DOMAIN_5_LESSON_04"
      },
      {
        "title": "Organizational Accessibility and Procurement",
        "file": "domain5/05-organizational-accessibility-and-procurement.js",
        "varName": "CPACC_DOMAIN_5_LESSON_05"
      },
      {
        "title": "Domain 5 Review",
        "file": "domain5/06-domain-5-review.js",
        "varName": "CPACC_DOMAIN_5_LESSON_06"
      }
    ]
  }
];

  var domains = manifest.map(function (domain) {
    return {
      title: domain.title,
      description: domain.description,
      lessons: domain.lessons.map(function (lessonInfo) {
        var lesson = window[lessonInfo.varName];
        if (!lesson) {
          throw new Error('Missing CPACC lesson data: ' + lessonInfo.file);
        }
        return lesson;
      })
    };
  });

  window.CPACC_COURSE_DATA = {
    domains: domains,
    articles: [
  {
    "title": "Accessibility",
    "slug": "accessibility",
    "category": "Core Concept",
    "body": "Accessibility is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Digital Accessibility",
      "Physical Accessibility",
      "Document Accessibility",
      "Universal Design",
      "WCAG",
      "Organizational Accessibility"
    ],
    "relatedLessons": [
      "Social Model Of Disability",
      "Understanding Disability Demographics",
      "Accessibility Foundations",
      "Universal Design",
      "Domain 3 Review"
    ]
  },
  {
    "title": "Disability Models",
    "slug": "disability-models",
    "category": "Disability Model",
    "body": "Disability Models is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Medical Model",
      "Social Model",
      "Human Rights Model",
      "Charity Model",
      "Functional Solutions Model",
      "Biopsychosocial Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Medical Model Of Disability",
      "Social Model Of Disability",
      "Charity Model Of Disability",
      "Domain 1 Review"
    ]
  },
  {
    "title": "Medical Model",
    "slug": "medical-model",
    "category": "Disability Model",
    "body": "Medical Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Social Model",
      "Human Rights Model",
      "Charity Model",
      "Economic Model",
      "Functional Solutions Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Medical Model Of Disability",
      "Domain 1 Review"
    ]
  },
  {
    "title": "Social Model",
    "slug": "social-model",
    "category": "Disability Model",
    "body": "Social Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Human Rights Model",
      "Charity Model",
      "Economic Model",
      "Functional Solutions Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Medical Model Of Disability",
      "Social Model Of Disability",
      "Human Rights Model Of Disability",
      "Charity Model Of Disability",
      "Biopsychosocial Model Of Disability",
      "Domain 1 Review",
      "Disability in Society"
    ]
  },
  {
    "title": "Human Rights Model",
    "slug": "human-rights-model",
    "category": "Disability Model",
    "body": "Human Rights Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Social Model",
      "Charity Model",
      "Economic Model",
      "Functional Solutions Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Medical Model Of Disability",
      "Social Model Of Disability",
      "Human Rights Model Of Disability",
      "Charity Model Of Disability",
      "Economic Model Of Disability",
      "Domain 1 Review",
      "Understanding Disability Experiences",
      "Disability in Society",
      "Accessibility Laws and Organizational Responsibility Overview"
    ]
  },
  {
    "title": "Charity Model",
    "slug": "charity-model",
    "category": "Disability Model",
    "body": "Charity Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Social Model",
      "Human Rights Model",
      "Economic Model",
      "Functional Solutions Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Charity Model Of Disability",
      "Domain 1 Review"
    ]
  },
  {
    "title": "Economic Model",
    "slug": "economic-model",
    "category": "Disability Model",
    "body": "Economic Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Social Model",
      "Human Rights Model",
      "Charity Model",
      "Functional Solutions Model"
    ],
    "relatedLessons": [
      "Economic Model Of Disability"
    ]
  },
  {
    "title": "Functional Solutions Model",
    "slug": "functional-solutions-model",
    "category": "Disability Model",
    "body": "Functional Solutions Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Social Model",
      "Human Rights Model",
      "Charity Model",
      "Economic Model"
    ],
    "relatedLessons": [
      "Medical Model Of Disability",
      "Functional Solutions Model",
      "Biopsychosocial Model Of Disability",
      "Assistive Technology Foundations"
    ]
  },
  {
    "title": "Biopsychosocial Model",
    "slug": "biopsychosocial-model",
    "category": "Disability Model",
    "body": "Biopsychosocial Model is part of the framework CPACC learners use to understand how disability is explained, where responsibility is placed, and what kind of response is considered appropriate. The exam often tests whether the learner can recognize the assumption behind a scenario, not merely define a term.\n\nUse this topic to compare individual-focused explanations with barrier-focused, rights-focused, economic, functional, and interaction-based explanations. In professional practice, the strongest answer usually protects dignity while also improving the environment, policy, product, or service that created the barrier.\n\nWhen reviewing a scenario, ask who controls the barrier, whether the proposed solution depends on goodwill or individual effort, and whether the response prevents the same access problem from recurring.",
    "relatedTopics": [
      "Disability Models",
      "Medical Model",
      "Social Model",
      "Human Rights Model",
      "Charity Model",
      "Economic Model"
    ],
    "relatedLessons": [
      "Why Disability Models Matter",
      "Medical Model Of Disability",
      "Biopsychosocial Model Of Disability",
      "Domain 1 Review",
      "Mental Health and Chronic Conditions"
    ]
  },
  {
    "title": "Disability Language",
    "slug": "disability-language",
    "category": "Identity And Language",
    "body": "Disability Language concerns how disabled people are described, respected, represented, and included. CPACC does not treat language as decoration. Language reveals assumptions about power, dignity, independence, culture, and lived experience.\n\nUse the language a person or community chooses for itself when that preference is known. Avoid language that turns disabled people into objects of pity, inspiration, burden, defect, or exception. Some communities commonly use identity-first language, while some individuals prefer person-first language.\n\nFor exam reasoning, choose answers that respect autonomy, avoid stereotypes, and recognize that disability identity can intersect with culture, race, age, gender, language, class, geography, and access to services.",
    "relatedTopics": [
      "Identity First Language",
      "Person First Language",
      "Intersectionality",
      "Ableism"
    ],
    "relatedLessons": [
      "Charity Model Of Disability",
      "Disability Language and Identity",
      "Understanding Disability Demographics",
      "Understanding Disability Experiences",
      "Multiple Disabilities, Intersectionality, and Disability Identity"
    ]
  },
  {
    "title": "Identity First Language",
    "slug": "identity-first-language",
    "category": "Identity And Language",
    "body": "Identity First Language concerns how disabled people are described, respected, represented, and included. CPACC does not treat language as decoration. Language reveals assumptions about power, dignity, independence, culture, and lived experience.\n\nUse the language a person or community chooses for itself when that preference is known. Avoid language that turns disabled people into objects of pity, inspiration, burden, defect, or exception. Some communities commonly use identity-first language, while some individuals prefer person-first language.\n\nFor exam reasoning, choose answers that respect autonomy, avoid stereotypes, and recognize that disability identity can intersect with culture, race, age, gender, language, class, geography, and access to services.",
    "relatedTopics": [
      "Disability Language",
      "Person First Language",
      "Intersectionality",
      "Ableism"
    ],
    "relatedLessons": [
      "Disability Language and Identity",
      "Multiple Disabilities, Intersectionality, and Disability Identity"
    ]
  },
  {
    "title": "Person First Language",
    "slug": "person-first-language",
    "category": "Identity And Language",
    "body": "Person First Language concerns how disabled people are described, respected, represented, and included. CPACC does not treat language as decoration. Language reveals assumptions about power, dignity, independence, culture, and lived experience.\n\nUse the language a person or community chooses for itself when that preference is known. Avoid language that turns disabled people into objects of pity, inspiration, burden, defect, or exception. Some communities commonly use identity-first language, while some individuals prefer person-first language.\n\nFor exam reasoning, choose answers that respect autonomy, avoid stereotypes, and recognize that disability identity can intersect with culture, race, age, gender, language, class, geography, and access to services.",
    "relatedTopics": [
      "Disability Language",
      "Identity First Language",
      "Intersectionality",
      "Ableism"
    ],
    "relatedLessons": [
      "Disability Language and Identity",
      "Multiple Disabilities, Intersectionality, and Disability Identity"
    ]
  },
  {
    "title": "Disability Demographics",
    "slug": "disability-demographics",
    "category": "Disability Experience",
    "body": "Disability Demographics is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency",
      "Deaf"
    ],
    "relatedLessons": [
      "Understanding Disability Demographics",
      "Understanding Disability Experiences",
      "Domain 2 Comprehensive Review"
    ]
  },
  {
    "title": "Invisible Disabilities",
    "slug": "invisible-disabilities",
    "category": "Disability Experience",
    "body": "Invisible Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency",
      "Deaf"
    ],
    "relatedLessons": [
      "Biopsychosocial Model Of Disability",
      "Understanding Disability Demographics",
      "Understanding Disability Experiences",
      "Mental Health and Chronic Conditions"
    ]
  },
  {
    "title": "Vision Disabilities",
    "slug": "vision-disabilities",
    "category": "Disability Experience",
    "body": "Vision Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency",
      "Deaf"
    ],
    "relatedLessons": [
      "Blindness, Low Vision, and Color Vision Deficiency",
      "Domain 2 Comprehensive Review"
    ]
  },
  {
    "title": "Blindness",
    "slug": "blindness",
    "category": "Disability Experience",
    "body": "Blindness is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Low Vision",
      "Color Vision Deficiency",
      "Deaf"
    ],
    "relatedLessons": [
      "Blindness, Low Vision, and Color Vision Deficiency",
      "Visual Access Technologies"
    ]
  },
  {
    "title": "Low Vision",
    "slug": "low-vision",
    "category": "Disability Experience",
    "body": "Low Vision is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Color Vision Deficiency",
      "Deaf"
    ],
    "relatedLessons": [
      "Blindness, Low Vision, and Color Vision Deficiency",
      "Visual Access Technologies"
    ]
  },
  {
    "title": "Color Vision Deficiency",
    "slug": "color-vision-deficiency",
    "category": "Disability Experience",
    "body": "Color Vision Deficiency is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Deaf"
    ],
    "relatedLessons": [
      "Blindness, Low Vision, and Color Vision Deficiency"
    ]
  },
  {
    "title": "Deaf",
    "slug": "deaf",
    "category": "Disability Experience",
    "body": "Deaf is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Disability Language and Identity",
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Domain 2 Comprehensive Review",
      "Communication and Interaction Technologies"
    ]
  },
  {
    "title": "Hard of Hearing",
    "slug": "hard-of-hearing",
    "category": "Disability Experience",
    "body": "Hard of Hearing is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Communication and Interaction Technologies"
    ]
  },
  {
    "title": "DeafBlindness",
    "slug": "deafblindness",
    "category": "Disability Experience",
    "body": "DeafBlindness is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Multiple Disabilities, Intersectionality, and Disability Identity"
    ]
  },
  {
    "title": "Speech Disabilities",
    "slug": "speech-disabilities",
    "category": "Disability Experience",
    "body": "Speech Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Communication and Interaction Technologies"
    ]
  },
  {
    "title": "Mobility Disabilities",
    "slug": "mobility-disabilities",
    "category": "Disability Experience",
    "body": "Mobility Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Mobility, Dexterity, and Physical Disabilities",
      "Domain 2 Comprehensive Review"
    ]
  },
  {
    "title": "Dexterity Disabilities",
    "slug": "dexterity-disabilities",
    "category": "Disability Experience",
    "body": "Dexterity Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Mobility, Dexterity, and Physical Disabilities"
    ]
  },
  {
    "title": "Cognitive Disabilities",
    "slug": "cognitive-disabilities",
    "category": "Disability Experience",
    "body": "Cognitive Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Cognitive, Intellectual, and Learning Disabilities",
      "Neurodiversity",
      "Domain 2 Comprehensive Review"
    ]
  },
  {
    "title": "Learning Disabilities",
    "slug": "learning-disabilities",
    "category": "Disability Experience",
    "body": "Learning Disabilities is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Cognitive, Intellectual, and Learning Disabilities",
      "Neurodiversity"
    ]
  },
  {
    "title": "Neurodiversity",
    "slug": "neurodiversity",
    "category": "Disability Experience",
    "body": "Neurodiversity is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Neurodiversity"
    ]
  },
  {
    "title": "Mental Health",
    "slug": "mental-health",
    "category": "Disability Experience",
    "body": "Mental Health is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Biopsychosocial Model Of Disability",
      "Mental Health and Chronic Conditions"
    ]
  },
  {
    "title": "Chronic Conditions",
    "slug": "chronic-conditions",
    "category": "Disability Experience",
    "body": "Chronic Conditions is a disability experience topic. It helps learners understand that disability is diverse, contextual, and not always visible. The same label does not predict the same access need for every person.\n\nIn practice, accessibility professionals should identify the task, the barrier, the environment, and the support needed rather than assuming one fixed solution. Many people use combinations of assistive technology, accessibility features, environmental changes, plain language, alternative formats, or flexible processes.\n\nFor CPACC questions, avoid answers that overgeneralize. Prefer responses that support participation, privacy, independence, effective communication, and access to the same essential information or service.",
    "relatedTopics": [
      "Disability Demographics",
      "Invisible Disabilities",
      "Vision Disabilities",
      "Blindness",
      "Low Vision",
      "Color Vision Deficiency"
    ],
    "relatedLessons": [
      "Biopsychosocial Model Of Disability",
      "Mental Health and Chronic Conditions"
    ]
  },
  {
    "title": "Intersectionality",
    "slug": "intersectionality",
    "category": "Identity And Language",
    "body": "Intersectionality concerns how disabled people are described, respected, represented, and included. CPACC does not treat language as decoration. Language reveals assumptions about power, dignity, independence, culture, and lived experience.\n\nUse the language a person or community chooses for itself when that preference is known. Avoid language that turns disabled people into objects of pity, inspiration, burden, defect, or exception. Some communities commonly use identity-first language, while some individuals prefer person-first language.\n\nFor exam reasoning, choose answers that respect autonomy, avoid stereotypes, and recognize that disability identity can intersect with culture, race, age, gender, language, class, geography, and access to services.",
    "relatedTopics": [
      "Disability Language",
      "Identity First Language",
      "Person First Language",
      "Ableism"
    ],
    "relatedLessons": [
      "Disability Language and Identity",
      "Understanding Disability Demographics",
      "Understanding Disability Experiences",
      "Multiple Disabilities, Intersectionality, and Disability Identity",
      "Domain 2 Comprehensive Review"
    ]
  },
  {
    "title": "Ableism",
    "slug": "ableism",
    "category": "Identity And Language",
    "body": "Ableism concerns how disabled people are described, respected, represented, and included. CPACC does not treat language as decoration. Language reveals assumptions about power, dignity, independence, culture, and lived experience.\n\nUse the language a person or community chooses for itself when that preference is known. Avoid language that turns disabled people into objects of pity, inspiration, burden, defect, or exception. Some communities commonly use identity-first language, while some individuals prefer person-first language.\n\nFor exam reasoning, choose answers that respect autonomy, avoid stereotypes, and recognize that disability identity can intersect with culture, race, age, gender, language, class, geography, and access to services.",
    "relatedTopics": [
      "Disability Language",
      "Identity First Language",
      "Person First Language",
      "Intersectionality"
    ],
    "relatedLessons": [
      "Social Model Of Disability",
      "Charity Model Of Disability",
      "Disability Language and Identity",
      "Understanding Disability Experiences",
      "Multiple Disabilities, Intersectionality, and Disability Identity",
      "Disability in Society"
    ]
  },
  {
    "title": "Universal Design",
    "slug": "universal-design",
    "category": "Core Concept",
    "body": "Universal Design is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Accessibility",
      "Universal Design for Learning",
      "Inclusive Design",
      "Usability",
      "User Experience"
    ],
    "relatedLessons": [
      "Social Model Of Disability",
      "Functional Solutions Model",
      "Universal Design",
      "Inclusive Design and Usability",
      "Domain 3 Review"
    ]
  },
  {
    "title": "Universal Design for Learning",
    "slug": "universal-design-for-learning",
    "category": "Core Concept",
    "body": "Universal Design for Learning is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Accessibility",
      "Universal Design",
      "Inclusive Design",
      "Usability",
      "User Experience"
    ],
    "relatedLessons": [
      "Cognitive, Intellectual, and Learning Disabilities",
      "Universal Design For Learning",
      "Domain 3 Review"
    ]
  },
  {
    "title": "Inclusive Design",
    "slug": "inclusive-design",
    "category": "Core Concept",
    "body": "Inclusive Design is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Accessibility",
      "Universal Design",
      "Universal Design for Learning",
      "Usability",
      "User Experience"
    ],
    "relatedLessons": [
      "Neurodiversity",
      "Disability in Society",
      "Universal Design",
      "Universal Design For Learning",
      "Inclusive Design and Usability",
      "Domain 3 Review"
    ]
  },
  {
    "title": "Usability",
    "slug": "usability",
    "category": "Core Concept",
    "body": "Usability is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Accessibility",
      "Universal Design",
      "Universal Design for Learning",
      "Inclusive Design",
      "User Experience"
    ],
    "relatedLessons": [
      "Cognitive, Intellectual, and Learning Disabilities",
      "Universal Design",
      "Inclusive Design and Usability",
      "Domain 3 Review"
    ]
  },
  {
    "title": "User Experience",
    "slug": "user-experience",
    "category": "Core Concept",
    "body": "User Experience is a core accessibility concept. It helps learners connect disability experience, barrier removal, inclusive design, assistive technology, standards, laws, and organizational responsibility.\n\nUse this reference when a lesson asks you to move from memorizing vocabulary to recognizing professional patterns. Accessibility decisions should support participation, independence, dignity, privacy, safety, and equal opportunity.\n\nFor CPACC reasoning, identify the person, task, barrier, setting, and level of response needed.",
    "relatedTopics": [
      "Accessibility",
      "Universal Design",
      "Universal Design for Learning",
      "Inclusive Design",
      "Usability"
    ],
    "relatedLessons": [
      "Universal Design",
      "Inclusive Design and Usability"
    ]
  },
  {
    "title": "Digital Accessibility",
    "slug": "digital-accessibility",
    "category": "Environment",
    "body": "Digital Accessibility describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Physical Accessibility",
      "Document Accessibility",
      "Accessible Documents",
      "Accessible Media",
      "PDF Accessibility"
    ],
    "relatedLessons": [
      "Accessibility Foundations",
      "Digital, Physical, and Document Accessibility",
      "Assistive Technology Foundations"
    ]
  },
  {
    "title": "Physical Accessibility",
    "slug": "physical-accessibility",
    "category": "Environment",
    "body": "Physical Accessibility describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Digital Accessibility",
      "Document Accessibility",
      "Accessible Documents",
      "Accessible Media",
      "PDF Accessibility"
    ],
    "relatedLessons": [
      "Mobility, Dexterity, and Physical Disabilities",
      "Accessibility Foundations",
      "Universal Design",
      "Digital, Physical, and Document Accessibility"
    ]
  },
  {
    "title": "Document Accessibility",
    "slug": "document-accessibility",
    "category": "Environment",
    "body": "Document Accessibility describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Digital Accessibility",
      "Physical Accessibility",
      "Accessible Documents",
      "Accessible Media",
      "PDF Accessibility"
    ],
    "relatedLessons": [
      "Accessibility Foundations",
      "Digital, Physical, and Document Accessibility",
      "Accessible Documents and Information Design",
      "Domain 3 Review"
    ]
  },
  {
    "title": "Accessible Documents",
    "slug": "accessible-documents",
    "category": "Environment",
    "body": "Accessible Documents describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Digital Accessibility",
      "Physical Accessibility",
      "Document Accessibility",
      "Accessible Media",
      "PDF Accessibility"
    ],
    "relatedLessons": [
      "Universal Design For Learning",
      "Digital, Physical, and Document Accessibility",
      "Accessible Documents and Information Design"
    ]
  },
  {
    "title": "Assistive Technology",
    "slug": "assistive-technology",
    "category": "Assistive Technology",
    "body": "Assistive Technology belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Screen Readers",
      "Screen Magnification",
      "Refreshable Braille",
      "Alternative Input",
      "Captions",
      "Cognitive Supports"
    ],
    "relatedLessons": [
      "Functional Solutions Model",
      "Assistive Technology Foundations",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Screen Readers",
    "slug": "screen-readers",
    "category": "Assistive Technology",
    "body": "Screen Readers belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition",
      "Switch Access"
    ],
    "relatedLessons": [
      "Functional Solutions Model",
      "Blindness, Low Vision, and Color Vision Deficiency",
      "Visual Access Technologies",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Refreshable Braille",
    "slug": "refreshable-braille",
    "category": "Assistive Technology",
    "body": "Refreshable Braille belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition",
      "Switch Access"
    ],
    "relatedLessons": [
      "Visual Access Technologies",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Screen Magnification",
    "slug": "screen-magnification",
    "category": "Assistive Technology",
    "body": "Screen Magnification belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Alternative Input",
      "Speech Recognition",
      "Switch Access"
    ],
    "relatedLessons": [
      "Blindness, Low Vision, and Color Vision Deficiency",
      "Visual Access Technologies",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Alternative Input",
    "slug": "alternative-input",
    "category": "Assistive Technology",
    "body": "Alternative Input belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Speech Recognition",
      "Switch Access"
    ],
    "relatedLessons": [
      "Functional Solutions Model",
      "Mobility, Dexterity, and Physical Disabilities",
      "Assistive Technology Foundations",
      "Alternative Input, Cognitive Supports, and Emerging Technologies",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Speech Recognition",
    "slug": "speech-recognition",
    "category": "Assistive Technology",
    "body": "Speech Recognition belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Switch Access"
    ],
    "relatedLessons": [
      "Mobility, Dexterity, and Physical Disabilities",
      "Alternative Input, Cognitive Supports, and Emerging Technologies"
    ]
  },
  {
    "title": "Switch Access",
    "slug": "switch-access",
    "category": "Assistive Technology",
    "body": "Switch Access belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Mobility, Dexterity, and Physical Disabilities",
      "Alternative Input, Cognitive Supports, and Emerging Technologies"
    ]
  },
  {
    "title": "Eye Tracking",
    "slug": "eye-tracking",
    "category": "Assistive Technology",
    "body": "Eye Tracking belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Alternative Input, Cognitive Supports, and Emerging Technologies"
    ]
  },
  {
    "title": "Captions",
    "slug": "captions",
    "category": "Assistive Technology",
    "body": "Captions belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Universal Design For Learning",
      "Communication and Interaction Technologies",
      "Domain 4 Comprehensive Review"
    ]
  },
  {
    "title": "Transcripts",
    "slug": "transcripts",
    "category": "Assistive Technology",
    "body": "Transcripts belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Deaf, Hard of Hearing, DeafBlind, and Speech Disabilities",
      "Communication and Interaction Technologies"
    ]
  },
  {
    "title": "Cognitive Supports",
    "slug": "cognitive-supports",
    "category": "Assistive Technology",
    "body": "Cognitive Supports belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Functional Solutions Model",
      "Cognitive, Intellectual, and Learning Disabilities",
      "Neurodiversity",
      "Mental Health and Chronic Conditions",
      "Universal Design For Learning",
      "Assistive Technology Foundations",
      "Alternative Input, Cognitive Supports, and Emerging Technologies"
    ]
  },
  {
    "title": "AAC",
    "slug": "aac",
    "category": "Assistive Technology",
    "body": "AAC belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Communication and Interaction Technologies"
    ]
  },
  {
    "title": "Accessibility Laws",
    "slug": "accessibility-laws",
    "category": "Law And Policy",
    "body": "Accessibility Laws is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "ADA",
      "Section 504",
      "Section 508",
      "CRPD",
      "European Accessibility Act",
      "WCAG"
    ],
    "relatedLessons": [
      "Human Rights Model Of Disability",
      "Disability in Society",
      "Accessibility Laws and Organizational Responsibility Overview",
      "International Accessibility and Disability Rights",
      "Domain 5 Review"
    ]
  },
  {
    "title": "ADA",
    "slug": "ada",
    "category": "Law And Policy",
    "body": "ADA is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act",
      "Fair Housing Act"
    ],
    "relatedLessons": [
      "Human Rights Model Of Disability",
      "Major U.S. Accessibility Laws",
      "Domain 5 Review"
    ]
  },
  {
    "title": "Section 504",
    "slug": "section-504",
    "category": "Law And Policy",
    "body": "Section 504 is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act",
      "Fair Housing Act"
    ],
    "relatedLessons": [
      "Human Rights Model Of Disability",
      "Major U.S. Accessibility Laws"
    ]
  },
  {
    "title": "Section 508",
    "slug": "section-508",
    "category": "Law And Policy",
    "body": "Section 508 is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Rehabilitation Act",
      "Air Carrier Access Act",
      "Fair Housing Act"
    ],
    "relatedLessons": [
      "Major U.S. Accessibility Laws",
      "Accessibility Standards and Guidelines",
      "Domain 5 Review"
    ]
  },
  {
    "title": "Rehabilitation Act",
    "slug": "rehabilitation-act",
    "category": "Law And Policy",
    "body": "Rehabilitation Act is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Air Carrier Access Act",
      "Fair Housing Act"
    ],
    "relatedLessons": [
      "Major U.S. Accessibility Laws"
    ]
  },
  {
    "title": "Air Carrier Access Act",
    "slug": "air-carrier-access-act",
    "category": "Law And Policy",
    "body": "Air Carrier Access Act is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Fair Housing Act"
    ],
    "relatedLessons": [
      "Major U.S. Accessibility Laws"
    ]
  },
  {
    "title": "Fair Housing Act",
    "slug": "fair-housing-act",
    "category": "Law And Policy",
    "body": "Fair Housing Act is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act"
    ],
    "relatedLessons": [
      "Major U.S. Accessibility Laws"
    ]
  },
  {
    "title": "Telecommunications Act",
    "slug": "telecommunications-act",
    "category": "Law And Policy",
    "body": "Telecommunications Act is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act"
    ],
    "relatedLessons": []
  },
  {
    "title": "CRPD",
    "slug": "crpd",
    "category": "Law And Policy",
    "body": "CRPD is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act"
    ],
    "relatedLessons": [
      "Human Rights Model Of Disability",
      "International Accessibility and Disability Rights"
    ]
  },
  {
    "title": "European Accessibility Act",
    "slug": "european-accessibility-act",
    "category": "Law And Policy",
    "body": "European Accessibility Act is part of the legal, policy, and rights framework that shapes accessibility obligations. CPACC learners should understand the setting where the framework applies and the type of responsibility it creates.\n\nAccessibility law is not the same thing as a technical checklist. Laws and treaties establish duties, rights, protections, or policy commitments. Standards and guidelines often help organizations understand how to implement those duties in technology, communication, services, buildings, procurement, or programs.\n\nFor exam scenarios, first identify the setting, such as employment, public services, federal technology, air travel, housing, communications, education, or international rights. Then choose the answer that matches the scope of the situation.",
    "relatedTopics": [
      "Accessibility Laws",
      "ADA",
      "Section 504",
      "Section 508",
      "Rehabilitation Act",
      "Air Carrier Access Act"
    ],
    "relatedLessons": [
      "International Accessibility and Disability Rights"
    ]
  },
  {
    "title": "EN 301 549",
    "slug": "en-301-549",
    "category": "Standards",
    "body": "EN 301 549 is a standards or guidelines topic. Standards translate broad accessibility goals into more specific expectations for content, software, tools, documents, procurement, or technology compatibility.\n\nStandards are most useful when they are connected to real user tasks. A checklist cannot replace judgment, but it can give teams a shared way to evaluate whether people can perceive, operate, understand, and use technology with reliable support from assistive technologies.\n\nFor CPACC, remember the difference between a law and a standard. A law may require access. A standard may describe how access can be evaluated or implemented.",
    "relatedTopics": [
      "WCAG",
      "POUR",
      "ATAG",
      "UAAG"
    ],
    "relatedLessons": [
      "International Accessibility and Disability Rights",
      "Accessibility Standards and Guidelines"
    ]
  },
  {
    "title": "WCAG",
    "slug": "wcag",
    "category": "Standards",
    "body": "WCAG is a standards or guidelines topic. Standards translate broad accessibility goals into more specific expectations for content, software, tools, documents, procurement, or technology compatibility.\n\nStandards are most useful when they are connected to real user tasks. A checklist cannot replace judgment, but it can give teams a shared way to evaluate whether people can perceive, operate, understand, and use technology with reliable support from assistive technologies.\n\nFor CPACC, remember the difference between a law and a standard. A law may require access. A standard may describe how access can be evaluated or implemented.",
    "relatedTopics": [
      "POUR",
      "Digital Accessibility",
      "Keyboard Access",
      "Accessible Names",
      "Focus Management",
      "Accessibility Testing"
    ],
    "relatedLessons": [
      "Accessibility Foundations",
      "Accessibility Laws and Organizational Responsibility Overview",
      "International Accessibility and Disability Rights",
      "Accessibility Standards and Guidelines",
      "Domain 5 Review"
    ]
  },
  {
    "title": "POUR",
    "slug": "pour",
    "category": "Standards",
    "body": "POUR is a standards or guidelines topic. Standards translate broad accessibility goals into more specific expectations for content, software, tools, documents, procurement, or technology compatibility.\n\nStandards are most useful when they are connected to real user tasks. A checklist cannot replace judgment, but it can give teams a shared way to evaluate whether people can perceive, operate, understand, and use technology with reliable support from assistive technologies.\n\nFor CPACC, remember the difference between a law and a standard. A law may require access. A standard may describe how access can be evaluated or implemented.",
    "relatedTopics": [
      "EN 301 549",
      "WCAG",
      "ATAG",
      "UAAG"
    ],
    "relatedLessons": [
      "Accessibility Standards and Guidelines"
    ]
  },
  {
    "title": "ATAG",
    "slug": "atag",
    "category": "Standards",
    "body": "ATAG is a standards or guidelines topic. Standards translate broad accessibility goals into more specific expectations for content, software, tools, documents, procurement, or technology compatibility.\n\nStandards are most useful when they are connected to real user tasks. A checklist cannot replace judgment, but it can give teams a shared way to evaluate whether people can perceive, operate, understand, and use technology with reliable support from assistive technologies.\n\nFor CPACC, remember the difference between a law and a standard. A law may require access. A standard may describe how access can be evaluated or implemented.",
    "relatedTopics": [
      "EN 301 549",
      "WCAG",
      "POUR",
      "UAAG"
    ],
    "relatedLessons": [
      "Accessibility Standards and Guidelines"
    ]
  },
  {
    "title": "UAAG",
    "slug": "uaag",
    "category": "Standards",
    "body": "UAAG is a standards or guidelines topic. Standards translate broad accessibility goals into more specific expectations for content, software, tools, documents, procurement, or technology compatibility.\n\nStandards are most useful when they are connected to real user tasks. A checklist cannot replace judgment, but it can give teams a shared way to evaluate whether people can perceive, operate, understand, and use technology with reliable support from assistive technologies.\n\nFor CPACC, remember the difference between a law and a standard. A law may require access. A standard may describe how access can be evaluated or implemented.",
    "relatedTopics": [
      "EN 301 549",
      "WCAG",
      "POUR",
      "ATAG"
    ],
    "relatedLessons": [
      "Accessibility Standards and Guidelines"
    ]
  },
  {
    "title": "Organizational Accessibility",
    "slug": "organizational-accessibility",
    "category": "Organization",
    "body": "Organizational Accessibility is an organizational accessibility topic. It explains how accessibility becomes repeatable through ownership, planning, procurement, training, testing, remediation, documentation, vendor accountability, and leadership support.\n\nA one-time fix may remove a single barrier, but organizational accessibility prevents the same barrier from being created again. Mature programs define standards, assign roles, evaluate vendors, involve disabled users, track issues, and report progress.\n\nFor exam reasoning, look for whether the scenario describes one defect or a system failure. Repeated inaccessible documents, products, platforms, or services usually require governance, procurement controls, training, and quality assurance.",
    "relatedTopics": [
      "Procurement",
      "Accessibility Program Management",
      "Accessibility Conformance Report",
      "VPAT",
      "Accessibility Testing",
      "User Testing"
    ],
    "relatedLessons": [
      "Economic Model Of Disability",
      "Understanding Disability Demographics",
      "Mental Health and Chronic Conditions",
      "Disability in Society",
      "Accessibility Laws and Organizational Responsibility Overview",
      "Organizational Accessibility and Procurement"
    ]
  },
  {
    "title": "Procurement",
    "slug": "procurement",
    "category": "Organization",
    "body": "Procurement is an organizational accessibility topic. It explains how accessibility becomes repeatable through ownership, planning, procurement, training, testing, remediation, documentation, vendor accountability, and leadership support.\n\nA one-time fix may remove a single barrier, but organizational accessibility prevents the same barrier from being created again. Mature programs define standards, assign roles, evaluate vendors, involve disabled users, track issues, and report progress.\n\nFor exam reasoning, look for whether the scenario describes one defect or a system failure. Repeated inaccessible documents, products, platforms, or services usually require governance, procurement controls, training, and quality assurance.",
    "relatedTopics": [
      "Organizational Accessibility",
      "Accessibility Conformance Report",
      "VPAT",
      "Accessibility Program Management"
    ],
    "relatedLessons": [
      "Economic Model Of Disability",
      "Accessibility Laws and Organizational Responsibility Overview",
      "Organizational Accessibility and Procurement",
      "Domain 5 Review"
    ]
  },
  {
    "title": "Accessibility Conformance Report",
    "slug": "accessibility-conformance-report",
    "category": "Organization",
    "body": "Accessibility Conformance Report is an organizational accessibility topic. It explains how accessibility becomes repeatable through ownership, planning, procurement, training, testing, remediation, documentation, vendor accountability, and leadership support.\n\nA one-time fix may remove a single barrier, but organizational accessibility prevents the same barrier from being created again. Mature programs define standards, assign roles, evaluate vendors, involve disabled users, track issues, and report progress.\n\nFor exam reasoning, look for whether the scenario describes one defect or a system failure. Repeated inaccessible documents, products, platforms, or services usually require governance, procurement controls, training, and quality assurance.",
    "relatedTopics": [
      "Organizational Accessibility",
      "Procurement",
      "VPAT",
      "Accessibility Program Management"
    ],
    "relatedLessons": [
      "Organizational Accessibility and Procurement"
    ]
  },
  {
    "title": "VPAT",
    "slug": "vpat",
    "category": "Organization",
    "body": "VPAT is an organizational accessibility topic. It explains how accessibility becomes repeatable through ownership, planning, procurement, training, testing, remediation, documentation, vendor accountability, and leadership support.\n\nA one-time fix may remove a single barrier, but organizational accessibility prevents the same barrier from being created again. Mature programs define standards, assign roles, evaluate vendors, involve disabled users, track issues, and report progress.\n\nFor exam reasoning, look for whether the scenario describes one defect or a system failure. Repeated inaccessible documents, products, platforms, or services usually require governance, procurement controls, training, and quality assurance.",
    "relatedTopics": [
      "Organizational Accessibility",
      "Procurement",
      "Accessibility Conformance Report",
      "Accessibility Program Management"
    ],
    "relatedLessons": [
      "Organizational Accessibility and Procurement"
    ]
  },
  {
    "title": "Accessibility Program Management",
    "slug": "accessibility-program-management",
    "category": "Organization",
    "body": "Accessibility Program Management is an organizational accessibility topic. It explains how accessibility becomes repeatable through ownership, planning, procurement, training, testing, remediation, documentation, vendor accountability, and leadership support.\n\nA one-time fix may remove a single barrier, but organizational accessibility prevents the same barrier from being created again. Mature programs define standards, assign roles, evaluate vendors, involve disabled users, track issues, and report progress.\n\nFor exam reasoning, look for whether the scenario describes one defect or a system failure. Repeated inaccessible documents, products, platforms, or services usually require governance, procurement controls, training, and quality assurance.",
    "relatedTopics": [
      "Organizational Accessibility",
      "Procurement",
      "Accessibility Conformance Report",
      "VPAT"
    ],
    "relatedLessons": [
      "Economic Model Of Disability",
      "Accessibility Laws and Organizational Responsibility Overview",
      "Organizational Accessibility and Procurement",
      "Domain 5 Review"
    ]
  },
  {
    "title": "Plain Language",
    "slug": "plain-language",
    "category": "Practice",
    "body": "Plain Language is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Keyboard Access",
      "Accessible Names",
      "Focus Management",
      "Accessibility Testing",
      "User Testing"
    ],
    "relatedLessons": [
      "Cognitive, Intellectual, and Learning Disabilities",
      "Neurodiversity",
      "Universal Design For Learning",
      "Accessible Documents and Information Design",
      "Alternative Input, Cognitive Supports, and Emerging Technologies"
    ]
  },
  {
    "title": "Keyboard Access",
    "slug": "keyboard-access",
    "category": "Practice",
    "body": "Keyboard Access is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Plain Language",
      "Accessible Names",
      "Focus Management",
      "Accessibility Testing",
      "User Testing"
    ],
    "relatedLessons": [
      "Accessible Documents and Information Design"
    ]
  },
  {
    "title": "Accessible Names",
    "slug": "accessible-names",
    "category": "Practice",
    "body": "Accessible Names is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Plain Language",
      "Keyboard Access",
      "Focus Management",
      "Accessibility Testing",
      "User Testing"
    ],
    "relatedLessons": [
      "Accessible Documents and Information Design",
      "Visual Access Technologies"
    ]
  },
  {
    "title": "Focus Management",
    "slug": "focus-management",
    "category": "Practice",
    "body": "Focus Management is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Plain Language",
      "Keyboard Access",
      "Accessible Names",
      "Accessibility Testing",
      "User Testing"
    ],
    "relatedLessons": []
  },
  {
    "title": "Accessible Media",
    "slug": "accessible-media",
    "category": "Environment",
    "body": "Accessible Media describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Digital Accessibility",
      "Physical Accessibility",
      "Document Accessibility",
      "Accessible Documents",
      "PDF Accessibility"
    ],
    "relatedLessons": [
      "Digital, Physical, and Document Accessibility"
    ]
  },
  {
    "title": "PDF Accessibility",
    "slug": "pdf-accessibility",
    "category": "Environment",
    "body": "PDF Accessibility describes an environment where accessibility must be planned and maintained. Accessibility applies across websites, applications, documents, media, built spaces, communications, policies, and services.\n\nThe professional question is not only whether a person can technically get through once. The stronger question is whether access is reliable, efficient, private, understandable, and available as part of the ordinary experience.\n\nFor CPACC, connect the environment to the barrier and then choose the solution that improves participation rather than forcing the disabled person to solve the system's problem alone.",
    "relatedTopics": [
      "Digital Accessibility",
      "Physical Accessibility",
      "Document Accessibility",
      "Accessible Documents",
      "Accessible Media"
    ],
    "relatedLessons": [
      "Digital, Physical, and Document Accessibility",
      "Accessible Documents and Information Design"
    ]
  },
  {
    "title": "Accessibility Testing",
    "slug": "accessibility-testing",
    "category": "Practice",
    "body": "Accessibility Testing is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Plain Language",
      "Keyboard Access",
      "Accessible Names",
      "Focus Management",
      "User Testing"
    ],
    "relatedLessons": [
      "Inclusive Design and Usability",
      "Organizational Accessibility and Procurement"
    ]
  },
  {
    "title": "User Testing",
    "slug": "user-testing",
    "category": "Practice",
    "body": "User Testing is a practical accessibility technique or evaluation concept. It supports the larger goal of making information and interaction perceivable, operable, understandable, and robust.\n\nTechnique-level work matters because small defects can block major life activities. Missing accessible names, poor focus order, unclear language, keyboard traps, inaccessible PDFs, or untested workflows can prevent people from completing forms, learning, working, applying, buying, or communicating.\n\nFor exam scenarios, match the practice to the barrier. Do not choose a broad slogan when the question asks for a specific access requirement, and do not choose a narrow patch when the scenario describes a repeatable process failure.",
    "relatedTopics": [
      "Plain Language",
      "Keyboard Access",
      "Accessible Names",
      "Focus Management",
      "Accessibility Testing"
    ],
    "relatedLessons": [
      "Inclusive Design and Usability"
    ]
  },
  {
    "title": "Assistive Technology Compatibility",
    "slug": "assistive-technology-compatibility",
    "category": "Assistive Technology",
    "body": "Assistive Technology Compatibility belongs to the assistive technology and adaptive strategy landscape. Assistive technology helps people access information, communicate, navigate, work, learn, and participate when the design of an environment or product would otherwise create barriers.\n\nAssistive technology is not a substitute for accessible design. A screen reader, braille display, caption system, switch, magnifier, or speech recognition tool can only work well when content, controls, structure, timing, labels, focus behavior, and media alternatives are designed accessibly.\n\nFor exam reasoning, connect the technology to the task. Ask what the person is trying to do, what barrier blocks the task, and what design support or compatibility requirement is needed.",
    "relatedTopics": [
      "Assistive Technology",
      "Screen Readers",
      "Refreshable Braille",
      "Screen Magnification",
      "Alternative Input",
      "Speech Recognition"
    ],
    "relatedLessons": [
      "Accessibility Foundations",
      "Assistive Technology Foundations"
    ]
  }
],
    questions: {
  "reinforce": [
    [
      "Which model primarily focuses on diagnosis, treatment, cure, or rehabilitation?",
      [
        "Social Model",
        "Medical Model",
        "Human Rights Model",
        "Universal Design"
      ],
      1
    ],
    [
      "Which model focuses on barriers created by environments, products, policies, and attitudes?",
      [
        "Medical Model",
        "Charity Model",
        "Social Model",
        "Economic Model"
      ],
      2
    ],
    [
      "Which model connects accessibility to dignity, equality, and nondiscrimination?",
      [
        "Human Rights Model",
        "Economic Model",
        "Charity Model",
        "Functional Solutions Model"
      ],
      0
    ],
    [
      "Why can disability demographics be difficult to summarize with one statistic?",
      [
        "Because all studies use the same definition",
        "Because disability definitions and experiences vary",
        "Because invisible disabilities do not exist",
        "Because only permanent disabilities count"
      ],
      1
    ],
    [
      "Why do invisible disabilities matter for accessibility planning?",
      [
        "They are always easy to identify",
        "Access needs are not always visible or disclosed",
        "They only affect medical settings",
        "They do not affect digital access"
      ],
      1
    ],
    [
      "Dyslexia, dyscalculia, and dysgraphia are most commonly grouped under which broad category?",
      [
        "Learning disabilities",
        "Mobility disabilities",
        "Procurement standards",
        "Caption formats"
      ],
      0
    ],
    [
      "Which term recognizes natural variation in how people think, learn, communicate, and process information?",
      [
        "Neurodiversity",
        "Charity",
        "Procurement",
        "Rehabilitation"
      ],
      0
    ],
    [
      "Why do disability demographics matter to accessibility planning?",
      [
        "They show accessibility is a predictable need across populations",
        "They replace user testing",
        "They prove accommodations are unnecessary",
        "They only matter for healthcare"
      ],
      0
    ],
    [
      "Why can disability statistics vary across reports?",
      [
        "Different reports use different definitions and measurement methods",
        "Only one report can be correct",
        "Disability never changes",
        "Statistics do not include people"
      ],
      0
    ],
    [
      "Which statement best reflects global disability experience?",
      [
        "Disability is global, but access experiences vary by social, economic, legal, and cultural context",
        "All disabled people have the same tools",
        "Accessibility matters only in countries with disability laws",
        "Global statistics remove the need for local research"
      ],
      0
    ],
    [
      "Which disability category describes a condition present from birth?",
      [
        "Congenital disability",
        "Situational disability",
        "Temporary disability",
        "Disclosure disability"
      ],
      0
    ],
    [
      "Which disability category describes a condition that develops later in life?",
      [
        "Acquired disability",
        "Congenital disability",
        "Color-only disability",
        "Universal disability"
      ],
      0
    ],
    [
      "Which example best reflects a situational limitation?",
      [
        "A person cannot hear audio instructions in a noisy train station",
        "A person is born blind",
        "A person has a lifelong mobility disability",
        "A person has dyslexia"
      ],
      0
    ],
    [
      "Which example best reflects episodic disability?",
      [
        "Symptoms that flare or vary over time",
        "A website with no headings",
        "A one-time typo",
        "A button with a label"
      ],
      0
    ],
    [
      "Why should accessibility not depend on disability disclosure?",
      [
        "Many people do not disclose because of privacy, stigma, or safety concerns",
        "All users disclose disability immediately",
        "Disclosure replaces accessible design",
        "Privacy does not matter in accessibility"
      ],
      0
    ],
    [
      "What is a common barrier for blind screen reader users?",
      [
        "Unlabeled buttons",
        "Captions",
        "Large targets",
        "Plain language"
      ],
      0
    ],
    [
      "What is a common low vision accessibility need?",
      [
        "Text resizing and reflow",
        "Mouse-only controls",
        "Audio-only instructions",
        "Hidden focus"
      ],
      0
    ],
    [
      "Which feature supports Deaf and hard of hearing users?",
      [
        "Captions",
        "Color-only instructions",
        "Mouse gestures",
        "Unlabeled icons"
      ],
      0
    ],
    [
      "What is DeafBlindness?",
      [
        "Combined vision and hearing loss with diverse communication needs",
        "Only total blindness",
        "Only temporary hearing loss",
        "A learning disability"
      ],
      0
    ],
    [
      "Which design choice supports mobility and dexterity disabilities?",
      [
        "Keyboard access and large targets",
        "Drag-only controls",
        "Short timeouts",
        "Tiny click areas"
      ],
      0
    ],
    [
      "Which process creates a barrier for speech disabilities?",
      [
        "Phone-only customer support",
        "Text chat",
        "Email support",
        "Relay-compatible service"
      ],
      0
    ],
    [
      "Which feature supports cognitive accessibility?",
      [
        "Clear steps and saved progress",
        "Hidden errors",
        "Jargon-heavy instructions",
        "Unexpected timeouts"
      ],
      0
    ],
    [
      "Dyslexia most commonly affects which task area?",
      [
        "Reading and decoding",
        "Hearing volume",
        "Wheelchair access",
        "Color perception only"
      ],
      0
    ],
    [
      "Dysgraphia most commonly affects which task area?",
      [
        "Writing and written expression",
        "Hearing speech",
        "Walking distance",
        "Light sensitivity only"
      ],
      0
    ],
    [
      "Dyscalculia most commonly affects which task area?",
      [
        "Number sense and calculation",
        "Braille reading",
        "Caption timing",
        "Mouse pointer color"
      ],
      0
    ],
    [
      "Executive function challenges may affect what?",
      [
        "Planning, organization, time, and task completion",
        "Only visual acuity",
        "Only hearing",
        "Only physical reach"
      ],
      0
    ],
    [
      "What does neurodiversity recognize?",
      [
        "Natural variation in how people think, learn, communicate, and process information",
        "That all minds work identically",
        "That disability is never relevant",
        "That accessibility is only medical"
      ],
      0
    ],
    [
      "Which feature may support users with ADHD?",
      [
        "Chunked content and progress indicators",
        "Long unstructured pages",
        "Hidden next steps",
        "Constant distractions"
      ],
      0
    ],
    [
      "Which feature may support autistic users?",
      [
        "Predictable navigation and clear expectations",
        "Sudden layout changes",
        "Forced time pressure",
        "Uncontrolled animation"
      ],
      0
    ],
    [
      "Why can motion and flashing be accessibility issues?",
      [
        "They may trigger seizures, migraine, vestibular symptoms, or sensory overload",
        "They always improve usability",
        "They only affect color blind users",
        "They replace captions"
      ],
      0
    ],
    [
      "Which design pattern supports chronic pain or fatigue?",
      [
        "Saved progress and flexible timing",
        "Short timeouts",
        "Repeated data entry",
        "Mandatory long sessions"
      ],
      0
    ],
    [
      "What does intersectionality help explain?",
      [
        "How disability can interact with other identities and social conditions",
        "Why one disabled user represents everyone",
        "Why access is only technical",
        "Why demographics replace lived experience"
      ],
      0
    ],
    [
      "What is ableism?",
      [
        "Bias or discrimination that devalues disabled people",
        "A screen reader command",
        "A kind of caption",
        "A keyboard shortcut"
      ],
      0
    ]
  ],
  "practice": [
    [
      "A student cannot read a scanned PDF assignment with a screen reader. Which response best reflects the Social Model?",
      [
        "Tell the student to ask someone to read it",
        "Create an accessible document and fix the course material process",
        "Tell the student to use a different screen reader",
        "Remove the assignment"
      ],
      1
    ],
    [
      "A company says it has no disabled employees, so accessibility training is unnecessary. Which response is strongest?",
      [
        "Disability may be invisible, undisclosed, temporary, or future-facing",
        "Accessibility matters only after a formal request",
        "Only public websites need accessibility",
        "Training is optional if no one complains"
      ],
      0
    ],
    [
      "A procurement team is buying a learning platform. When should accessibility be considered?",
      [
        "After purchase",
        "Only after a complaint",
        "Before purchase and during vendor review",
        "Only if a disabled user asks"
      ],
      2
    ],
    [
      "A public agency posts emergency information as an image-only PDF. Why is this a human rights concern?",
      [
        "It affects equal access to safety information",
        "It only affects document style",
        "It is only a preference issue",
        "It matters only if someone files a complaint"
      ],
      0
    ],
    [
      "A learner with dyscalculia struggles with time estimates, numbers, and calculations in an online course. What is the best accessibility response?",
      [
        "Assume the learner is not trying",
        "Provide clearer steps, reduce unnecessary math load, and support alternative ways to complete tasks",
        "Remove all course content",
        "Require handwritten work"
      ],
      1
    ],
    [
      "A long form times out without warning and loses all entered information. Which users might be affected?",
      [
        "Only blind users",
        "Only mouse users",
        "People with cognitive, mobility, chronic, situational, and many other access needs",
        "No disabled users"
      ],
      2
    ],
    [
      "A company says accessibility is unnecessary because no employees have disclosed disability. What is the best response?",
      [
        "Disability may be undisclosed, invisible, temporary, or future-facing, so access should be planned proactively",
        "The company is correct if nobody complained",
        "Only visible disability should be considered",
        "Accessibility can wait until a lawsuit"
      ],
      0
    ],
    [
      "A user with low vision zooms to 200 percent and content overlaps. What is the most relevant accessibility concern?",
      [
        "The layout does not support reflow and magnification needs",
        "The user should not zoom",
        "Captions are missing",
        "The issue only affects blind users"
      ],
      0
    ],
    [
      "A video training has spoken instructions but no captions or transcript. Which users may be affected?",
      [
        "Deaf users, hard of hearing users, noisy-environment users, and people who process text better",
        "Only blind users",
        "Only mouse users",
        "Only people with dyscalculia"
      ],
      0
    ],
    [
      "A job application requires a phone call to request help with an inaccessible form. What is a privacy concern?",
      [
        "The applicant must disclose disability to complete a basic application task",
        "The form has too many colors",
        "The applicant has too many options",
        "The phone call removes all barriers"
      ],
      0
    ],
    [
      "A benefits form times out after 10 minutes and loses data. Which users may be affected?",
      [
        "Users with fatigue, cognitive disabilities, motor disabilities, anxiety, or interrupted access",
        "Only users who dislike forms",
        "Only users with perfect vision",
        "Only users without disabilities"
      ],
      0
    ],
    [
      "A university requires handwritten timed essay exams even when handwriting is not the skill being tested. Which disability may be directly affected?",
      [
        "Dysgraphia",
        "Color blindness only",
        "DeafBlindness only",
        "Situational glare only"
      ],
      0
    ],
    [
      "A payment page asks users to calculate totals manually and gives no confirmation. Which disability may be directly affected?",
      [
        "Dyscalculia",
        "Blindness only",
        "Speech disability only",
        "Temporary hearing loss only"
      ],
      0
    ],
    [
      "A site uses flashing animation to attract attention. Which concern is most serious?",
      [
        "It may create safety risks for users with photosensitive seizure conditions or migraine",
        "It makes text too plain",
        "It improves all access",
        "It replaces headings"
      ],
      0
    ],
    [
      "A manager describes a disabled employee as inspiring for completing ordinary job tasks. What is the concern?",
      [
        "The language may reflect ableist or pity-based assumptions",
        "The statement is always required",
        "It is a screen reader problem",
        "It is a captioning issue"
      ],
      0
    ],
    [
      "A rural disabled learner has an older phone, limited data, and no paid assistive technology. What should designers consider?",
      [
        "Technology access and socioeconomic factors shape practical accessibility",
        "Only desktop users matter",
        "Assistive technology is always expensive and available",
        "The learner should be excluded from online content"
      ],
      0
    ],
    [
      "A DeafBlind user relies on a refreshable braille display. Which digital feature is especially important?",
      [
        "Programmatic structure and accessible names",
        "Audio-only alerts",
        "Mouse-only menus",
        "Color-only instructions"
      ],
      0
    ],
    [
      "An autistic user struggles with sudden page changes and unclear expectations. What design support is most relevant?",
      [
        "Predictable navigation and clear instructions",
        "More surprise animations",
        "Shorter timeouts",
        "Phone-only help"
      ],
      0
    ],
    [
      "A user with ADHD loses track in a long application. What feature may help?",
      [
        "Progress indicators, clear next steps, and saved progress",
        "Hidden validation",
        "Long uninterrupted text",
        "Unlabeled buttons"
      ],
      0
    ],
    [
      "A person with a speech disability cannot pass voice-only account verification. What should the service provide?",
      [
        "A non-speech verification alternative",
        "Mandatory phone repetition",
        "No support",
        "Only visual color cues"
      ],
      0
    ],
    [
      "A training product was tested by one blind user and declared accessible for all disabled users. What is the problem?",
      [
        "One user cannot represent all disability experiences",
        "Blind users cannot test anything",
        "Testing is never useful",
        "Only automated testing is needed"
      ],
      0
    ]
  ],
  "challenge": [
    [
      "A help desk offers to complete an inaccessible form for a blind user. What is the stronger long-term accessibility goal?",
      [
        "Keep the helper process as the only method",
        "Fix the form so the user can complete it independently",
        "Ask the user to avoid the form",
        "Require medical proof before access"
      ],
      1
    ],
    [
      "Which statement best avoids reducing disabled people to statistics?",
      [
        "Numbers are useful, but lived experience and user involvement also matter",
        "Only numbers matter for accessibility",
        "Statistics prove all disabled people have the same needs",
        "Demographics replace user testing"
      ],
      0
    ],
    [
      "A video training course has no captions, no transcript, and no keyboard controls. What is the best professional response?",
      [
        "Wait for an accommodation request",
        "Make the course media accessible as part of the main training experience",
        "Tell learners to skip videos",
        "Require learners to use a phone process"
      ],
      1
    ],
    [
      "Which answer best describes intersectionality and disability?",
      [
        "All disabled people experience the same barriers",
        "Disability can interact with race, gender, language, income, age, and other factors",
        "Intersectionality only applies outside accessibility",
        "It means disability is always visible"
      ],
      1
    ],
    [
      "A training platform is visually busy, has moving banners, unclear progress, and long unstructured tasks. Which topic is most directly involved?",
      [
        "Cognitive accessibility",
        "Color branding only",
        "PDF tagging only",
        "Printer settings"
      ],
      0
    ],
    [
      "Why should accessibility guidance avoid requiring people to disclose a diagnosis before a system is usable?",
      [
        "Because privacy and dignity matter, and accessible design should support users without forcing disclosure",
        "Because invisible disabilities do not count",
        "Because diagnosis is always public",
        "Because accessibility only helps permanent disabilities"
      ],
      0
    ],
    [
      "A product manager asks which disability group should be considered first. What is the strongest accessibility answer?",
      [
        "Start by identifying barriers in the task and design flexible access for multiple user groups",
        "Choose only the largest disability category",
        "Wait for users to complain",
        "Design only for visible disabilities"
      ],
      0
    ],
    [
      "A public agency publishes emergency shelter information as an image-only flyer on social media. Which Domain 2 concept is most relevant?",
      [
        "Disability diversity means information must be available through multiple channels and not rely only on vision",
        "Only people with perfect vision need emergency information",
        "Image-only information is always accessible",
        "Social media removes public responsibility"
      ],
      0
    ],
    [
      "A designer says captions are unnecessary because the product is not for Deaf users. What is the best response?",
      [
        "Captions support Deaf users, hard of hearing users, language learners, noisy environments, and many other contexts",
        "Captions only help one group",
        "Captions replace keyboard access",
        "Captions are only decorative"
      ],
      0
    ],
    [
      "A candidate does not request accommodation during hiring but later reports the onboarding platform is inaccessible. What should the organization understand?",
      [
        "Lack of early disclosure does not prove lack of access needs",
        "The candidate caused the barrier by not disclosing sooner",
        "Accessibility only begins after disclosure",
        "The platform does not need review"
      ],
      0
    ],
    [
      "A course offers plain language summaries but removes the full detailed content. What is the concern?",
      [
        "Cognitive accessibility should improve clarity without unnecessarily reducing access to complete information",
        "Plain language is always childish",
        "Full content should always be hidden",
        "Summaries replace all accessibility"
      ],
      0
    ],
    [
      "A user with chronic illness can complete a task only if progress is saved between sessions. What design principle is most relevant?",
      [
        "Support variable energy and interruption through saved progress",
        "Require continuous completion",
        "Remove the task",
        "Assume the user is unmotivated"
      ],
      0
    ],
    [
      "A team wants to use a wheelchair icon as the only symbol for accessibility. What is the concern?",
      [
        "It may reinforce the misconception that disability is only mobility-related or visible",
        "It fully represents all disabilities",
        "It replaces captions",
        "It makes screen readers unnecessary"
      ],
      0
    ],
    [
      "A banking app requires voice interaction for every security step. Which users may be excluded?",
      [
        "People with speech disabilities, some Deaf users, some autistic users, and users in contexts where speech is not possible",
        "Only users with no bank account",
        "Only people with dyscalculia",
        "No disabled users"
      ],
      0
    ],
    [
      "A learner with dyslexia understands lectures but struggles with dense readings and timed text-only quizzes. What is the best access approach?",
      [
        "Provide structured text, text-to-speech compatibility, examples, and flexible timing",
        "Assume the learner lacks intelligence",
        "Remove all reading permanently",
        "Use more dense text"
      ],
      0
    ],
    [
      "An organization says it is accessible because it has an accommodation request form, but the form itself is inaccessible. What is the best analysis?",
      [
        "The access process creates its own barrier and should be accessible by default",
        "The form proves access is complete",
        "Users should call a helper only",
        "Accommodation forms do not need accessibility"
      ],
      0
    ]
  ]
}
  };
}());
