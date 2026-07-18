// CPACC Accessible Academy modular data loader.
// Assembles domain lesson files into the original window.CPACC_ACADEMY_DATA shape.
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

  window.CPACC_ACADEMY_DATA = {
    domains: domains,
    articles: [
  {
    "title": "Disability Models",
    "slug": "disability-models",
    "body": "Disability models are frameworks for understanding disability, responsibility, access, and participation. They influence whether people focus on treatment, barrier removal, rights, charity, economics, functional support, or the interaction between health and environment."
  },
  {
    "title": "Medical Model",
    "slug": "medical-model",
    "body": "The Medical Model focuses on disability as a condition located in the individual. It can support treatment, rehabilitation, and clinical care, but it is incomplete when used to explain inaccessible websites, documents, buildings, or services. Accessibility professionals need to recognize when medical support is useful and when barrier removal is required.",
    "sourceDocs": [
      "CPACC Domain 1 Academy content"
    ],
    "relatedLessons": [
      "Domain 1 - Medical Model Of Disability"
    ]
  },
  {
    "title": "Social Model",
    "slug": "social-model",
    "body": "The Social Model distinguishes impairment from disability. It explains that people are disabled by barriers in environments, products, services, documents, policies, and attitudes. For accessibility work, this model is central because it moves attention from blaming the user to identifying and removing barriers.",
    "sourceDocs": [
      "CPACC Domain 1 Academy content"
    ],
    "relatedLessons": [
      "Domain 1 - Social Model Of Disability"
    ]
  },
  {
    "title": "Human Rights Model",
    "slug": "human-rights-model",
    "body": "The Human Rights Model frames disabled people as rights holders. It connects accessibility to dignity, equality, nondiscrimination, independence, and participation. It helps explain why accessibility is not charity or convenience. It is part of equal access to society.",
    "sourceDocs": [
      "Laws and Charters/Charter of Fundamental Rights of the European Union.pdf",
      "CPACC Domain 1 Academy content"
    ],
    "relatedLessons": [
      "Domain 1 - Human Rights Model Of Disability"
    ]
  },
  {
    "title": "Charity Model",
    "slug": "charity-model",
    "body": "The Charity Model frames disabled people as recipients of help, sympathy, or generosity."
  },
  {
    "title": "Economic Model",
    "slug": "economic-model",
    "body": "The Economic Model focuses on disability in relation to work, productivity, costs, employment, and economic participation."
  },
  {
    "title": "Functional Solutions Model",
    "slug": "functional-solutions-model",
    "body": "The Functional Solutions Model focuses on practical supports that help a person complete tasks."
  },
  {
    "title": "Biopsychosocial Model",
    "slug": "biopsychosocial-model",
    "body": "The Biopsychosocial Model considers biological, psychological, and social factors together."
  },
  {
    "title": "Disability Demographics",
    "slug": "disability-demographics",
    "body": "Disability demographics help organizations understand the scale and diversity of disability. They support planning, budgeting, procurement, training, testing, and policy. Numbers are useful, but they never replace lived experience, user research, or direct involvement from disabled people.",
    "sourceDocs": [
      "CPACC Domain 2 Academy content",
      "Future source link: World Health Organization disability data",
      "Future source link: United Nations disability statistics"
    ],
    "externalResources": [
      {
        "label": "World Health Organization disability and health",
        "url": "https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
      },
      {
        "label": "United Nations disability and development",
        "url": "https://social.desa.un.org/issues/disability"
      }
    ],
    "relatedLessons": [
      "Domain 2 - Understanding Disability Demographics"
    ]
  },
  {
    "title": "Invisible Disabilities",
    "slug": "invisible-disabilities",
    "body": "Invisible disabilities are disabilities that may not be apparent to others. They may include chronic illness, mental health conditions, cognitive disabilities, learning disabilities, neurodivergence, chronic pain, fatigue, epilepsy, diabetes, hearing loss, low vision, and many others. Accessibility should not depend on whether a person discloses or appears disabled.",
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "relatedLessons": [
      "Domain 2 - Visible and Invisible Disabilities"
    ]
  },
  {
    "title": "Intersectionality",
    "slug": "intersectionality",
    "body": "Intersectionality recognizes that disability can interact with race, gender, language, income, age, geography, education, immigration status, culture, and technology access. It helps accessibility professionals avoid assuming that all disabled people experience barriers in the same way."
  },
  {
    "title": "Accessibility",
    "slug": "accessibility",
    "body": "Accessibility is the practice of designing products, services, environments, information, and experiences so disabled people can participate more equitably."
  },
  {
    "title": "Accommodation",
    "slug": "accommodation",
    "body": "An accommodation is an adjustment made to support an individual's participation."
  },
  {
    "title": "Barrier Removal",
    "slug": "barrier-removal",
    "body": "Barrier removal means identifying and correcting the thing that prevents participation."
  },
  {
    "title": "Universal Design",
    "slug": "universal-design",
    "body": "Universal Design is the design of products, environments, programs, and services to be usable by as many people as possible without needing adaptation or specialized design. It supports accessibility, usability, flexibility, and inclusion.",
    "sourceDocs": [
      "Universal Design/The 7 Principles of Universal Design.docx",
      "Universal Design/Benefits and Drivers of Universal Design.docx"
    ],
    "relatedLessons": [
      "Domain 3 - Accessibility and Universal Design"
    ]
  },
  {
    "title": "Universal Design For Learning",
    "slug": "universal-design-for-learning",
    "body": "UDL provides flexible learning through multiple means of engagement, representation, and expression."
  },
  {
    "title": "Inclusive Design",
    "slug": "inclusive-design",
    "body": "Inclusive Design considers human diversity and actively includes people with different needs and experiences."
  },
  {
    "title": "Assistive Technology",
    "slug": "assistive-technology",
    "body": "Assistive technology is technology used to increase, maintain, or improve functional capabilities for disabled people."
  },
  {
    "title": "Screen Readers",
    "slug": "screen-readers",
    "body": "Screen readers present digital content through speech, braille, or both."
  },
  {
    "title": "Captions",
    "slug": "captions",
    "body": "Captions provide text for spoken audio and important sound information."
  },
  {
    "title": "WCAG Overview",
    "slug": "wcag-overview",
    "body": "WCAG is the Web Content Accessibility Guidelines, organized around Perceivable, Operable, Understandable, and Robust."
  },
  {
    "title": "PDF Accessibility",
    "slug": "pdf-accessibility",
    "body": "PDF accessibility depends on tags, reading order, headings, lists, tables, links, forms, language, title, bookmarks, and correct handling of graphics."
  },
  {
    "title": "ADA",
    "slug": "ada",
    "body": "The Americans with Disabilities Act is a major U.S. civil rights law prohibiting disability discrimination."
  },
  {
    "title": "Section 504",
    "slug": "section-504",
    "body": "Section 504 prohibits disability discrimination in programs receiving federal financial assistance."
  },
  {
    "title": "Section 508",
    "slug": "section-508",
    "body": "Section 508 requires U.S. federal agencies to make electronic and information technology accessible."
  },
  {
    "title": "EN 301 549",
    "slug": "en-301-549",
    "body": "EN 301 549 is a European accessibility standard for ICT products and services. It is important for procurement and public sector accessibility because it defines accessibility requirements for technology in the European context.",
    "sourceDocs": [
      "Laws and Charters/301 549 - V3.2.1 - Accessibility requirements for ICT products and services.pdf"
    ],
    "relatedLessons": [
      "Domain 5 - Accessibility Laws, Standards, and Management"
    ]
  },
  {
    "title": "European Accessibility Act",
    "slug": "european-accessibility-act",
    "body": "The European Accessibility Act addresses accessibility requirements for certain products and services in the European Union."
  },
  {
    "title": "Accessible Procurement",
    "slug": "accessible-procurement",
    "body": "Accessible procurement means considering accessibility before an organization buys, licenses, or adopts technology, documents, platforms, or services. It reduces risk by asking vendors for accessibility evidence, testing results, remediation plans, and contract commitments before purchase.",
    "sourceDocs": [
      "WCAG Definitions and Resources/Blackboard Service Desk-VPAT.docx",
      "Laws and Charters/301 549 - V3.2.1 - Accessibility requirements for ICT products and services.pdf"
    ],
    "relatedLessons": [
      "Domain 5 - Accessibility Laws, Standards, and Management"
    ]
  },
  {
    "title": "Accessibility Program Management",
    "slug": "accessibility-program-management",
    "body": "Accessibility program management embeds accessibility into policies, training, procurement, testing, remediation, and governance."
  },
  {
    "title": "WCAG",
    "slug": "wcag",
    "body": "WCAG stands for Web Content Accessibility Guidelines. It provides internationally used guidance for making web content more perceivable, operable, understandable, and robust. WCAG is not itself a law, but many laws, policies, and contracts reference WCAG.",
    "sourceDocs": [
      "WCAG Definitions and Resources/WCAG 2.2 Understanding Docs.docx",
      "WCAG Definitions and Resources/WCAG guidelines.docx"
    ],
    "externalResources": [
      {
        "label": "W3C WCAG overview",
        "url": "https://www.w3.org/WAI/standards-guidelines/wcag/"
      }
    ],
    "relatedLessons": [
      "Domain 5 - Accessibility Laws, Standards, and Management"
    ]
  },
  {
    "title": "Document Accessibility",
    "slug": "document-accessibility",
    "body": "Document accessibility means creating Word, PDF, PowerPoint, Excel, and other documents so people using assistive technology can perceive, navigate, understand, and use the content. It includes headings, reading order, alt text, table structure, links, form labels, language, and export settings.",
    "sourceDocs": [
      "Document Accessibility/Word/1Creating an Accessible Microsoft Word Document.docx",
      "Document Accessibility/PDF/PDF Accessibility Overview.docx",
      "Document Accessibility/Power Point/1Make your PowerPoint presentations accessible to people with disabilities.docx",
      "Document Accessibility/Excel Folder/Make your Excel documents accessible to people with disabilities.docx"
    ],
    "relatedLessons": [
      "Future Document Accessibility Academy"
    ]
  },
  {
    "title": "Dyslexia",
    "slug": "dyslexia",
    "body": "Dyslexia is a learning disability that can affect reading fluency, decoding, spelling, and written language. Accessibility support may include clear headings, readable formatting, text-to-speech compatibility, plain language, enough time, and alternatives to dense text.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Dyscalculia",
    "slug": "dyscalculia",
    "body": "Dyscalculia is a learning disability that can affect number sense, calculation, estimation, time, measurement, money, and math-related reasoning. Accessibility support may include clear explanations, step-by-step instructions, nonvisual alternatives for charts, calculators when appropriate, and avoiding unnecessary mental math in user interfaces.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Dysgraphia",
    "slug": "dysgraphia",
    "body": "Dysgraphia is a learning disability that can affect handwriting, spelling, written expression, and organizing written output. Accessibility support may include keyboard input, speech-to-text, structured writing fields, clear labels, saved drafts, and alternatives to handwritten responses.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "ADHD",
    "slug": "adhd",
    "body": "ADHD can affect attention, impulse control, working memory, planning, time management, and task switching. Accessibility support may include clear structure, predictable navigation, reminders, reduced distractions, saved progress, and avoiding unnecessary time pressure.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Autism",
    "slug": "autism",
    "body": "Autism can involve differences in communication, sensory processing, social interaction, attention, routines, and information processing. Accessibility support may include predictable interfaces, plain instructions, sensory control, reduced motion, clear expectations, and flexible communication options.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Neurodiversity",
    "slug": "neurodiversity",
    "body": "Neurodiversity recognizes natural variation in how people think, learn, communicate, focus, and process information. It encourages design that supports different ways of interacting rather than treating one cognitive style as the only normal style.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Cognitive Disabilities",
    "slug": "cognitive-disabilities",
    "body": "Cognitive disabilities can affect memory, attention, comprehension, language, processing speed, problem solving, and executive functioning. Cognitive accessibility includes clear structure, plain language, consistent navigation, error prevention, reminders, and enough time.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Learning Disabilities",
    "slug": "learning-disabilities",
    "body": "Learning disabilities can affect reading, writing, math, language, memory, or processing. Dyslexia, dyscalculia, and dysgraphia are common examples. Accessibility focuses on reducing unnecessary barriers in how information is presented, completed, and assessed.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Mental Health Disabilities",
    "slug": "mental-health-disabilities",
    "body": "Mental health disabilities may affect mood, energy, attention, memory, stress response, and participation. Accessible experiences reduce unnecessary stress through clarity, privacy, predictable steps, flexible timing, and respectful support.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Chronic Conditions",
    "slug": "chronic-conditions",
    "body": "Chronic conditions may include pain, fatigue, diabetes, epilepsy, multiple sclerosis, migraine, autoimmune conditions, and other long-term or episodic health experiences. Accessibility should support fluctuating needs through flexibility, saved progress, clear recovery, and reduced load.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "DeafBlindness",
    "slug": "deafblindness",
    "body": "DeafBlindness involves combined hearing and vision loss. Access may involve tactile communication, braille, screen readers, captions, interpreters, accessible documents, and careful attention to redundant information that does not depend only on sight or sound.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Low Vision",
    "slug": "low-vision",
    "body": "Low vision can involve reduced acuity, contrast sensitivity, field loss, light sensitivity, or other visual differences. Accessibility support may include readable text, strong contrast, magnification support, reflow, keyboard access, and content that does not rely only on visual cues.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Executive Functioning",
    "slug": "executive-functioning",
    "body": "Executive functioning involves planning, organizing, remembering steps, managing time, starting tasks, shifting attention, and completing multi-step processes. Accessibility support includes clear workflows, progress indicators, reminders, saved work, and predictable navigation.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Plain Language",
    "slug": "plain-language",
    "body": "Plain language presents information so the intended audience can find, understand, and use it. It supports people with cognitive disabilities, learning disabilities, limited time, stress, low familiarity with the topic, and language differences.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
  },
  {
    "title": "Cognitive Accessibility",
    "slug": "cognitive-accessibility",
    "body": "Cognitive accessibility focuses on making information, tasks, navigation, and interactions easier to understand, remember, and complete. It includes plain language, consistency, error prevention, enough time, clear instructions, and reduced distractions.\n\nWhy It Matters\n\nThis topic matters because learners may encounter barriers that are not obvious from appearance or diagnosis. Accessibility planning should focus on functional access needs, privacy, participation, and flexible design.\n\nProfessional Application\n\nWhen reviewing a product, document, course, or service, ask whether the task can be understood, navigated, completed, paused, resumed, corrected, and reviewed by people with different sensory, cognitive, learning, mental health, mobility, and chronic health experiences.",
    "relatedLessons": [
      "Domain 2 - Disability Categories and Functional Impacts"
    ],
    "sourceDocs": [
      "CPACC Domain 2 Academy content"
    ],
    "externalResources": []
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
