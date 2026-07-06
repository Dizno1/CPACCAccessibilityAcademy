// Compatibility entry point for existing pages that load data/cpacc-course-data.js.
// The original monolithic data object has been replaced by individual lesson files plus course-loader.js.
(function () {
  var files = [
  "domain1/01-why-disability-models-matter.js",
  "domain1/02-medical-model-of-disability.js",
  "domain1/03-social-model-of-disability.js",
  "domain1/04-human-rights-model-of-disability.js",
  "domain1/05-charity-model-of-disability.js",
  "domain1/06-economic-model-of-disability.js",
  "domain1/07-functional-solutions-model.js",
  "domain1/08-biopsychosocial-model-of-disability.js",
  "domain1/09-disability-language-and-identity.js",
  "domain1/10-domain-1-review.js",
  "domain2/01-understanding-disability-demographics.js",
  "domain2/02-understanding-disability-experiences.js",
  "domain2/03-blindness-low-vision-and-color-vision-deficiency.js",
  "domain2/04-deaf-hard-of-hearing-deafblind-and-speech-disabilities.js",
  "domain2/05-mobility-dexterity-and-physical-disabilities.js",
  "domain2/06-cognitive-intellectual-and-learning-disabilities.js",
  "domain2/07-neurodiversity.js",
  "domain2/08-mental-health-and-chronic-conditions.js",
  "domain2/09-multiple-disabilities-intersectionality-and-disability-identity.js",
  "domain2/10-disability-in-society.js",
  "domain2/11-domain-2-comprehensive-review.js",
  "domain3/01-accessibility-foundations.js",
  "domain3/02-universal-design.js",
  "domain3/03-universal-design-for-learning.js",
  "domain3/04-inclusive-design-and-usability.js",
  "domain3/05-digital-physical-and-document-accessibility.js",
  "domain3/06-accessible-documents-and-information-design.js",
  "domain3/07-domain-3-review.js",
  "domain4/01-assistive-technology-overview.js",
  "domain4/02-screen-readers.js",
  "domain4/03-magnification-braille-and-alternative-input.js",
  "domain4/04-captions-transcripts-and-cognitive-supports.js",
  "domain4/05-domain-4-review.js",
  "domain5/01-accessibility-laws-overview.js",
  "domain5/02-us-accessibility-laws.js",
  "domain5/03-international-accessibility-and-disability-rights.js",
  "domain5/04-accessibility-standards-and-guidelines.js",
  "domain5/05-organizational-accessibility-and-procurement.js",
  "domain5/06-domain-5-review.js",
  "course-loader.js"
];
  var current = document.currentScript && document.currentScript.src ? document.currentScript.src : '';
  var base = current ? current.slice(0, current.lastIndexOf('/') + 1) : 'data/';
  files.forEach(function (file) {
    document.write('<script src="' + base + file + '"><\/script>');
  });
}());
