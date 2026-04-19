const SOURCE_FORM_URL = "https://forms.office.com/r/MpCyjJVcd7";
const POWER_AUTOMATE_URL = "https://default1445a1df842f4a6595a29237bdf735.c9.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/34e219f4726f4c679b11cffb903c4420/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NLraKrvx7AAEDwRrM5nTTlVNKDabbFnSvPBMVJzZT6o";
const ENDPOINT_STORAGE_KEY = "korea-dynamic-test-flow-url";
const ENDPOINT_LOCKED_STORAGE_KEY = "korea-dynamic-test-flow-url-locked";
const ANSWER_STORAGE_KEY = "korea-dynamic-test-answers";
const SHAREPOINT_LIST_TITLE = "KDTQ Survey Inbox";
const STRAVA_EMBED_SCRIPT_ID = "strava-embed-script";
const RATING_SCALE_VALUES = ["1", "2", "3", "4", "5"];

const SURVEY = {
  title: "[May 10th] Korea Dynamic Test Questionnaire",
  description: "Product Testing Confidentiality Agreement\nFOR PRODUCT TESTERS\n\n I hereby agree to comply with the following terms regarding product testing for TKG Taekwang and Nike (hereinafter referred to as \"the Company\").\nAs part of my responsibilities as a product tester, I will soon receive confidential information and company-owned products related to the product. I acknowledge that all information and products related to the test are owned by the Company and are considered confidential.\n\nAll information related to the product that I receive (including technical or other information, UI, and other product photos and images) must always be treated as confidential. I am prohibited from disclosing this information to unauthorized third parties or in any other form, and failure to return the products or information constitutes a breach of the confidentiality agreement with the Company. This applies even if the materials are not explicitly marked as \"confidential.\"\n\nBy reading and signing this agreement, I confirm that I understand the information and products related to the test are confidential to the Company. I also acknowledge that unauthorized disclosure could cause irreparable harm to the Company and its business. I pledge to this confidentiality agreement and understand that any breach may result in civil and criminal liability under relevant laws, including the Unfair Competition Prevention and Trade Secret Protection Act.",
  screens: [
    {
      id: "agreement",
      type: "Intro",
      title: "Product Testing Confidentiality Agreement",
      subtitle: "Product Testing Confidentiality Agreement\nFOR PRODUCT TESTERS\n\n I hereby agree to comply with the following terms regarding product testing for TKG Taekwang and Nike (hereinafter referred to as \"the Company\").\nAs part of my responsibilities as a product tester, I will soon receive confidential information and company-owned products related to the product. I acknowledge that all information and products related to the test are owned by the Company and are considered confidential.\n\nAll information related to the product that I receive (including technical or other information, UI, and other product photos and images) must always be treated as confidential. I am prohibited from disclosing this information to unauthorized third parties or in any other form, and failure to return the products or information constitutes a breach of the confidentiality agreement with the Company. This applies even if the materials are not explicitly marked as \"confidential.\"\n\nBy reading and signing this agreement, I confirm that I understand the information and products related to the test are confidential to the Company. I also acknowledge that unauthorized disclosure could cause irreparable harm to the Company and its business. I pledge to this confidentiality agreement and understand that any breach may result in civil and criminal liability under relevant laws, including the Unfair Competition Prevention and Trade Secret Protection Act."
    },
    {
      id: "r33e4738100594b8286086c8a7fafa1f9",
      type: "Question.ColumnGroup",
      title: "Route & Elevation",
      subtitle: "Bongdaesan Mountain (Dongbaek Station, 522 Haeun-daero, Haeundae-gu, Busan)\n\nhttps://www.strava.com/routes/3479194418174308720\n",
      image: null,
      embed: {
        type: "StravaRoute",
        id: "3479194418174308720",
        mapHash: "14.55/35.16442/129.14981",
        token: "Pgiz2sILlD00G6xlxKNaiBuoMi0qxRIDvj64GD4lwl0"
      },
      choices: []
    },
    {
      id: "r6054912e5d1e4572a039c018e3bd6a9a",
      type: "Question.ColumnGroup",
      title: "Tester's Information",
      subtitle: "[Personal Information Collection and Processing Notice]\n\nAll personal information collected through this survey will be used solely for footwear research and product development purposes.\n\nBy participating in this survey, you are deemed to have consented to such collection and processing of personal information.",
      image: null,
      choices: []
    },
    { id: "ref10a028774947e4b02ebad4c50c8406", type: "Question.TextField", title: "Please enter your name.", subtitle: null, image: null, choices: [] },
    { id: "r8cd399d5613b4743866237999b83cbc8", type: "Question.TextField", title: "Which trail shoe do you normally use?", subtitle: null, image: null, choices: [] },
    { id: "r59ead437294c42b49564b9eedb65d6d7", type: "Question.TextField", title: "What is a typical distance for a single trail running session?", subtitle: null, image: null, choices: [] },
    {
      id: "r3d10b34d304b4cad916178bf6f6ac709",
      type: "Question.ColumnGroup",
      title: "First Impression",
      subtitle: "This survey aims to gather insights from your immediate experience on this terrain.\n\nBefore you begin the 1.5-2 mile run, please share your honest feedback on the initial step-in feel, as if you were testing the shoes right here at the trail.",
      image: null,
      choices: []
    },
    matrix("r16976ac35d7f49d99d8b0132ab661fd0", "Is the foot entry easy on and off without tugging?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/c6370e2b-88f9-48eb-a183-2038612629d1", ["Very Difficult", "Moderately Difficult", "Somewhat Difficult", "Somewhat Easy", "Moderately Easy", "Very Easy"], [["r8f2a5c8845ce4fdda8e19cc52c7db96d", "OPTION A"], ["rce49158180f14ca78e86a27f128ee43a", "OPTION B"]]),
    matrix("r2744e21e248e4dccb3c4c2b5fca61579", "Does the lace stay tied securely?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/add69936-2c47-410d-95cf-f862eab377dc", ["Very Unsecure", "Moderately Unsecure", "Somewhat Unsecure", "Somewhat Secure", "Moderately Secure", "Very Secure"], [["ra83ab2913b2d4e65b3f02e84e5827d23", "OPTION A"], ["ra001992c51a14744ba59903010a402ab", "OPTION B"]]),
    matrix("r1e7b3f177eda44de86224bb54e973a40", "Do you feel the shoe is a right size in the length?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/b831bfc1-f144-47db-b50c-77d4a56f1cf1", ["Very Short", "Moderately Short", "Somewhat Short", "Just Right", "Somewhat Long", "Moderately Long", "Very Long"], [["r8899cd5a7b2d42478ded61fa6c3055c4", "OPTION A"], ["r584ce29342424e6694710ec887da8d94", "OPTION B"]]),
    matrix("r013287f922ba4e429bd5fe5b1c218304", "Does the upper provide a right comfort without any irritation, discomfort or stiffness?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/e27147ba-2d52-4450-875f-3d04ea3967aa", ["Very Uncomfortable", "Moderately Uncomfortable", "Somewhat Uncomfortable", "Somewhat Comfortable", "Moderately Comfortable", "Very Comfortable"], [["re54897cc451c495ea72fa31cbeac7e20", "OPTION A"], ["ra952f436ea6b4a2792cb2812d9f12c38", "OPTION B"]]),
    matrix("r29dc41bb1b964699a1b8851c47d0cb17", "Does the upper provide a right breathability to meet your running purpose?\n", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/500d41cd-6e5a-46f3-acbf-8ba2fa7dcab4", ["Not Breathable", "Moderately Not Breathable", "Somewhat Not Breathable", "Somewhat Breathable", "Moderately Breathable", "Very Breathable"], [["r5707237fe19c4abcba536fa92fe94fdc", "OPTION A"], ["r86f2ab1c530a4f43a29b677e63d44f77", "OPTION B"]]),
    matrix("r461f5e8e86af4f15839b89eb92655a42", "Does the upper hug your foot securely without being too tight or loose?\n\n", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/71a63305-4b19-416d-9bfa-62e552b6bb78", ["Very Unsecure", "Moderately Unsecure", "Somewhat Unsecure", "Somewhat Secure", "Moderately Secure", "Very Secure"], [["r68443dfa5b4848e6bf1269293c5de1b2", "OPTION A"], ["r8fe377c38e7a4996ae327a6c20b1afc7", "OPTION B"]]),
    matrix("rd10683a1626d4f49bca7fe8d39fa1fc9", "Does the shoe have a right weight to meet your running purpose?\n", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/dc22a5aa-ab80-4baa-b660-92ec9c431589", ["Very Heavy", "Moderately Heavy", "Somewhat  Right", "Somewhat Light", "Moderately Light", "Very Light"], [["r9925678be167492c9a604fb1ff5c8b23", "OPTION A"], ["r91c84aa60c304e33bd7fac67363fbef6", "OPTION B"]]),
    { id: "rab281cb9c61242179a1b6a77c7b1f813", type: "Question.TextField", title: "Please share your thoughts about the most impressive aspects of initial step-in feel or areas that need improvement.", subtitle: null, image: null, choices: [] },
    {
      id: "r406205423cb14e10b0f46ceebebb7517",
      type: "Question.ColumnGroup",
      title: "Underfoot",
      subtitle: "We would like to understand your experience comparing the two midsole conditions after the initial step-in and a 1.5–2 mile run on this terrain.\n\nPlease provide detailed feedback on underfoot cushioning (heel & forefoot), enery return, protection and stability for each option.",
      image: null,
      choices: []
    },
    matrix("rae32dae17f8a478b8f720824f85d8da9", "Does the heel provide a right cushioning without being too soft or firm?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/ac74acb0-74e9-46d2-895f-884f7412c962", ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"], [["rf7e4c5a6dae447be8d53dd14f9bd5ca6", "OPTION A"], ["r89f60ea45e704c338e504ba001a12d69", "OPTION B"]]),
    matrix("rf533f683c7fb4104b012d5d01cb3640d", "How do you like the heel cushioning?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/122f725f-40a2-4187-8ee0-922439c6366f", ["1", "2", "3", "4", "5"], [["r8a737a1f08ef4b009b13d746ef069de1", "OPTION A"], ["r425e5142dfbb423faec6173d2670ee09", "OPTION B"]]),
    matrix("rcfabeb2948a044c58c7786b542b4c9f4", "Does the forefoot provide a right cushioning without being too soft or firm?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/e08de02e-f779-424e-8ad1-bfd3ed642b9c", ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"], [["ra612c6af5d72492280ddc1a6ef39133d", "OPTION A"], ["r2a014b0a1d504d4e801c862ca6fdd1b3", "OPTION B"]]),
    matrix("r0a748c7cc2bd4162afc5705d7a969ccb", "How do you like the forefoot cushioning?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/fb983e99-9032-4413-aeb5-72847996fedc", ["1", "2", "3", "4", "5"], [["r2f0e9f3c7c974e8d830964ce8ca86c1e", "OPTION A"], ["r8df4825c475542d1ad4d15260869b928", "OPTION B"]]),
    matrix("rad0549bcfd794b02ad2d92ac7d105434", "Does the midsole provide a right responsiveness without being flat and dead?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/35920349-3618-4228-9dd1-9ce4e00af5a8", ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"], [["r7562e76f90e54ae7bfad32be55d9a20c", "OPTION A"], ["rc2dadc72b56243e0b8fa9bf3fc144a95", "OPTION B"]]),
    matrix("r0441f8eeb105498cb4979a0e65354f59", "How do you like the responsiveness?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/8a7d9c41-fa6d-45c7-9c50-26b486302e0a", ["1", "2", "3", "4", "5"], [["rba7aff53824545938ad3e4f208c0525b", "OPTION A"], ["r0d1d4ef37ba04642b582b0862d69f580", "OPTION B"]]),
    matrix("r9ed97752500a4c1fb1fe2895a59b1f18", "How do you feel about the stability at ground contact?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/3ca0d492-2057-414c-acb1-68394581a2da", ["Very Unstable", "Moderately Unstable", "Somewhat Unstable", "Somewhat Stable", "Moderately Stable", "Very Stable"], [["rc2b4c0008806493f801b12756d894925", "OPTION A"], ["r1c7ca7ffb61545c3b81d8f561fa805db", "OPTION B"]]),
    matrix("r5da4c7fd9702401ab5bebad50f5b78ff", "How do you like the stability?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/a36f43b1-6c3a-4c5e-b077-c8a650ac645a", ["1", "2", "3", "4", "5"], [["r7f4ae99bcc904d8caf5e8b6baf90c865", "OPTION A"], ["r36c7094964a944db81a5b042ad54a4b2", "OPTION B"]]),
    matrix("rb4ea1f79459140ec97027ad889f0ad28", "How do you feel about the underfoot protection when running on uneven terrain?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/263af8e4-a742-4bf0-8ac0-496a148a8820", ["Very Unprotective", "Moderately Unprotective", "Somewhat Unprotective", "Somewhat Protective", "Moderately Protective", "Very Protective"], [["r5cf7e6603c21479d9be3857b55ff9ab4", "OPTION A"], ["rb556f313b0eb4fffa3cc5ff6e5b99dcd", "OPTION B"]]),
    matrix("r6f49a0fd33294fb6b28d0c08ff099ab1", "How do you feel about the outsole's traction on uneven terrain?", null, "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/2b6393af-8dd4-493e-9c2b-e66f45d3d9ae", ["Very Slippery", "Moderately Slippery", "Somewhat Slippery", "Somewhat Secure", "Moderately Secure", "Very Secure"], [["r36596c6ea4d841b6acb81b297c08a51f", "OPTION A"], ["r25a05d7025c947d5abced137cdd997a7", "OPTION B"]]),
    matrix("r5d4f3001bcd54a539e77baa293db2874", "How do you like the underfoot protection?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/0423aee4-7dd6-4b91-9532-887a19b75c95", ["1", "2", "3", "4", "5"], [["r2c8b417145544ee6b17696ba92b1aa38", "OPTION A"], ["r64941770173a4147a9659e2d55153870", "OPTION B"]]),
    { id: "r10ff47a33eec45f0a524c2b66cf3e4b1", type: "Question.TextField", title: "Please share your thoughts about the most impressive aspects of underfoot or areas that need improvement.", subtitle: null, image: null, choices: [] },
    { id: "submit", type: "Submit", title: "Submit Response", subtitle: null, image: null, choices: [] }
  ]
};

function matrix(id, title, subtitle, image, choices, rows) {
  return {
    id,
    type: "Question.MatrixChoiceGroup",
    title,
    subtitle,
    image,
    choices,
    rows: rows.map(([rowId, rowTitle]) => ({ id: rowId, title: rowTitle }))
  };
}

const state = {
  index: 0,
  answers: loadAnswers(),
  submitting: false,
  submitted: false,
  submitMessage: "",
  submitError: false
};

const els = {
  kicker: document.getElementById("kicker"),
  title: document.getElementById("screenTitle"),
  progress: document.getElementById("progressBar"),
  progressCount: document.getElementById("progressCount"),
  content: document.getElementById("content"),
  back: document.getElementById("backButton"),
  next: document.getElementById("nextButton"),
  navActions: document.querySelector(".nav-actions"),
  settingsButton: document.getElementById("settingsButton"),
  settingsDialog: document.getElementById("settingsDialog"),
  flowUrl: document.getElementById("flowUrl"),
  saveSettings: document.getElementById("saveSettings")
};

bootstrapEndpointFromHash();
syncSettingsVisibility();
render();

els.back.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    render();
  }
});

els.next.addEventListener("click", () => {
  const screen = currentScreen();
  if (screen.type === "Submit") {
    submitSurvey();
    return;
  }
  if (state.index < SURVEY.screens.length - 1) {
    state.index += 1;
    render();
  }
});

els.settingsButton.addEventListener("click", () => {
  els.flowUrl.value = getEndpoint();
  if (typeof els.settingsDialog.showModal === "function") {
    els.settingsDialog.showModal();
  }
});

els.saveSettings.addEventListener("click", () => {
  const value = els.flowUrl.value.trim();
  if (value) {
    localStorage.setItem(ENDPOINT_STORAGE_KEY, value);
    localStorage.removeItem(ENDPOINT_LOCKED_STORAGE_KEY);
  } else {
    localStorage.removeItem(ENDPOINT_STORAGE_KEY);
    localStorage.removeItem(ENDPOINT_LOCKED_STORAGE_KEY);
  }
  syncSettingsVisibility();
  els.settingsDialog.close();
});

function currentScreen() {
  return SURVEY.screens[state.index];
}

function render() {
  const screen = currentScreen();
  const ratingScale = isRatingScaleScreen(screen);
  const currentStep = state.index + 1;
  const totalSteps = SURVEY.screens.length;
  const progress = currentStep / totalSteps;
  els.kicker.textContent = "Korea Dynamic Test Questionnaire";
  els.title.textContent = screen.title;
  els.progress.style.width = `${Math.max(4, Math.round(progress * 100))}%`;
  els.progressCount.textContent = `${currentStep}/${totalSteps}`;
  els.content.replaceChildren();
  els.content.scrollTop = 0;

  if (screen.image && !ratingScale) {
    const image = document.createElement("img");
    image.className = "survey-image";
    image.src = screen.image;
    image.alt = screen.title;
    els.content.append(image);
  }

  if (screen.embed?.type === "StravaRoute") {
    renderStravaRoute(screen.embed);
  }

  if (screen.type === "Intro" || screen.type === "Question.ColumnGroup") {
    els.content.append(renderText(screen.subtitle || "", "question-copy intro"));
  } else if (screen.type === "Question.TextField") {
    renderTextField(screen);
  } else if (screen.type === "Question.MatrixChoiceGroup") {
    renderMatrix(screen);
  } else if (screen.type === "Submit") {
    renderSubmit();
  }

  updateNavigation(screen);
}

function renderStravaRoute(embed) {
  const wrapper = document.createElement("div");
  wrapper.className = "strava-route-card";

  const placeholder = document.createElement("div");
  placeholder.className = "strava-embed-placeholder";
  placeholder.dataset.embedType = "route";
  placeholder.dataset.embedId = embed.id;
  placeholder.dataset.fullWidth = "true";
  placeholder.dataset.style = "standard";
  placeholder.dataset.mapHash = embed.mapHash;
  placeholder.dataset.fromEmbed = "false";
  placeholder.dataset.token = embed.token;

  wrapper.append(placeholder);
  els.content.append(wrapper);
  loadStravaEmbed();
}

function loadStravaEmbed() {
  if (window.__STRAVA_EMBED_BOOTSTRAP__) {
    requestAnimationFrame(() => window.__STRAVA_EMBED_BOOTSTRAP__());
    return;
  }

  if (document.getElementById(STRAVA_EMBED_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = STRAVA_EMBED_SCRIPT_ID;
  script.src = "https://strava-embeds.com/embed.js";
  script.async = true;
  script.onload = () => window.__STRAVA_EMBED_BOOTSTRAP__?.();
  document.body.append(script);
}

function renderTextField(screen) {
  const longText = /thoughts|impressive|improvement/i.test(screen.title);
  const field = document.createElement(longText ? "textarea" : "input");
  field.className = "text-answer";
  field.value = state.answers[screen.id] || "";
  field.setAttribute("aria-label", screen.title);
  if (!longText) {
    field.type = "text";
  }
  field.addEventListener("input", () => {
    state.answers[screen.id] = field.value;
    saveAnswers();
  });
  els.content.append(field);
}

function renderMatrix(screen) {
  if (screen.subtitle) {
    els.content.append(renderText(screen.subtitle, "question-copy"));
  }

  const wrapper = document.createElement("div");
  wrapper.className = "matrix";
  const rating = isRatingScaleScreen(screen);

  const rowEls = [];

  screen.rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("section");
    rowEl.className = "matrix-row";
    rowEl.dataset.rowId = row.id;

    const rowTitle = document.createElement("div");
    rowTitle.className = "row-title";
    rowTitle.textContent = row.title;

    const options = document.createElement("div");
    options.className = `matrix-options${rating ? " rating" : ""}`;

    screen.choices.forEach((choice) => {
      const button = makeChoiceButton(choice, state.answers[row.id] === choice, rating);
      button.addEventListener("click", () => {
        state.answers[row.id] = choice;
        saveAnswers();
        updateChoiceGroup(options, choice);
        updateNavigation(screen);
        if (rowIndex < rowEls.length - 1) {
          scrollContentToElement(rowEls[rowIndex + 1]);
        } else {
          scrollContentToBottom();
        }
      });
      options.append(button);
    });

    rowEl.append(rowTitle, options);
    wrapper.append(rowEl);
    rowEls.push(rowEl);
  });

  els.content.append(wrapper);
}

function updateChoiceGroup(options, selectedChoice) {
  options.querySelectorAll(".choice").forEach((button) => {
    const selected = (button.dataset.value || button.textContent) === selectedChoice;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", selected ? "true" : "false");
  });
}

function scrollContentToElement(element) {
  requestAnimationFrame(() => {
    const containerRect = els.content.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const targetTop = els.content.scrollTop + elementRect.top - containerRect.top - 16;
    els.content.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  });
}

function scrollContentToBottom() {
  requestAnimationFrame(() => {
    els.content.scrollTo({ top: els.content.scrollHeight, behavior: "smooth" });
  });
}

function updateNavigation(screen = currentScreen()) {
  const matrixIncomplete = screen.type === "Question.MatrixChoiceGroup" && !isScreenComplete(screen);
  els.navActions.hidden = false;
  els.back.disabled = state.index === 0 || state.submitting;
  els.next.disabled = matrixIncomplete || state.submitting || (screen.type === "Submit" && state.submitted);
  els.next.setAttribute("aria-label", screen.type === "Submit" ? "Submit" : "Next");
}

function isScreenComplete(screen) {
  if (screen.type !== "Question.MatrixChoiceGroup") {
    return true;
  }
  return screen.rows.every((row) => Boolean(state.answers[row.id]));
}

function isRatingScaleScreen(screen) {
  return screen.type === "Question.MatrixChoiceGroup"
    && screen.image
    && RATING_SCALE_VALUES.every((choice, index) => screen.choices[index] === choice);
}

function createRatingFace(value, size) {
  const face = document.createElement("span");
  face.className = `rating-face rating-face-${size} value-${value}`;
  face.setAttribute("aria-hidden", "true");

  const mouth = document.createElement("span");
  mouth.className = "rating-mouth";
  face.append(mouth);

  return face;
}

function makeChoiceButton(label, selected, rating = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `choice${rating ? ` rating-choice value-${label}` : ""}${selected ? " is-selected" : ""}`;
  button.dataset.value = label;
  if (rating) {
    const number = document.createElement("span");
    number.className = "rating-choice-number";
    number.textContent = label;
    button.setAttribute("aria-label", `Liking ${label}`);
    button.append(createRatingFace(label, "mini"), number);
  } else {
    button.textContent = label;
  }
  button.setAttribute("aria-pressed", selected ? "true" : "false");
  return button;
}

function renderSubmit() {
  const copy = document.createElement("p");
  copy.className = "submit-copy";
  copy.textContent = "Your response will be saved automatically to the Excel Online response table.";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "submit-button";
  button.textContent = state.submitting ? "Submitting..." : state.submitted ? "Submitted" : "Submit";
  button.disabled = state.submitting || state.submitted;
  button.addEventListener("click", submitSurvey);

  const status = document.createElement("div");
  status.className = `submit-status${state.submitError ? " error" : ""}`;
  status.id = "submitStatus";
  status.textContent = state.submitMessage;

  els.content.append(copy, button, status);
}

function renderText(text, className) {
  const node = document.createElement("p");
  node.className = className;
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  parts.forEach((part) => {
    if (/^https?:\/\//.test(part)) {
      const link = document.createElement("a");
      link.href = part;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = part;
      node.append(link);
    } else {
      node.append(document.createTextNode(part));
    }
  });
  return node;
}

async function submitSurvey() {
  if (state.submitting || state.submitted) {
    return;
  }

  if (!canUseSharePointBackend() && !getEndpoint()) {
    updateSubmitStatus("Submission is not connected yet. Please contact the survey administrator.", true);
    return;
  }

  state.submitting = true;
  state.submitMessage = "";
  state.submitError = false;
  render();

  const payload = buildPayload();
  const body = JSON.stringify(payload);

  try {
    if (canUseSharePointBackend()) {
      await submitToSharePoint(payload);
      state.submitted = true;
      state.submitMessage = "Submitted. Thank you.";
    } else {
      await submitToPowerAutomate(body);
      state.submitted = true;
      state.submitMessage = "Submitted. Thank you.";
    }
    localStorage.removeItem(ANSWER_STORAGE_KEY);
  } catch (error) {
    const endpoint = getEndpoint();
    const sent = endpoint && navigator.sendBeacon
      ? navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain;charset=UTF-8" }))
      : false;
    if (sent) {
      state.submitted = true;
      state.submitMessage = "Submitted. Thank you.";
      localStorage.removeItem(ANSWER_STORAGE_KEY);
    } else {
      state.submitError = true;
      state.submitMessage = `Submit failed: ${error.message}`;
    }
  } finally {
    state.submitting = false;
    render();
  }
}

async function submitToPowerAutomate(body) {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
}

async function submitToSharePoint(payload) {
  const siteUrl = getSharePointSiteUrl();
  const digest = await getSharePointDigest(siteUrl);
  const response = await fetch(`${siteUrl}/_api/web/lists/getbytitle('${escapeODataString(SHAREPOINT_LIST_TITLE)}')/items`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json;odata=nometadata",
      "Content-Type": "application/json;odata=nometadata",
      "X-RequestDigest": digest
    },
    body: JSON.stringify({
      Title: payload.responseId,
      ResponseId: payload.responseId,
      SubmittedAtText: payload.submittedAt,
      FormTitle: payload.formTitle,
      SourceFormUrl: payload.sourceFormUrl,
      TesterName: payload.tester.name,
      NormalTrailShoe: payload.tester.normalTrailShoe,
      TypicalDistance: payload.tester.typicalDistance,
      PayloadJson: JSON.stringify(payload)
    })
  });
  if (!response.ok) {
    throw new Error(`SharePoint ${response.status}`);
  }
}

async function getSharePointDigest(siteUrl) {
  const response = await fetch(`${siteUrl}/_api/contextinfo`, {
    method: "POST",
    credentials: "same-origin",
    headers: { Accept: "application/json;odata=nometadata" }
  });
  if (!response.ok) {
    throw new Error(`SharePoint digest ${response.status}`);
  }
  const data = await response.json();
  return data.FormDigestValue || data.d?.GetContextWebInformation?.FormDigestValue;
}

function canUseSharePointBackend() {
  return location.hostname.toLowerCase().includes(".sharepoint.com");
}

function getSharePointSiteUrl() {
  const sitePath = location.pathname.match(/^\/(?:sites|teams)\/[^/]+/i);
  return sitePath ? `${location.origin}${sitePath[0]}` : location.origin;
}

function escapeODataString(value) {
  return value.replace(/'/g, "''");
}

function updateSubmitStatus(message, isError) {
  state.submitMessage = message;
  state.submitError = Boolean(isError);
  render();
}

function buildPayload() {
  const submittedAt = new Date().toISOString();
  const responseId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const flatRows = [];
  const answersByQuestion = {};
  const surveyDbRow = {
    ResponseId: responseId,
    SubmittedAt: submittedAt
  };
  let answerColumnIndex = 0;

  SURVEY.screens.forEach((screen) => {
    if (screen.type === "Question.TextField") {
      const answer = state.answers[screen.id] || "";
      answerColumnIndex += 1;
      surveyDbRow[columnHeader(answerColumnIndex, screen.title)] = answer;
      answersByQuestion[screen.id] = {
        questionId: screen.id,
        questionTitle: screen.title,
        answer
      };
      flatRows.push({
        responseId,
        submittedAt,
        questionId: screen.id,
        questionTitle: screen.title,
        rowId: "",
        rowTitle: "",
        answer
      });
    }

    if (screen.type === "Question.MatrixChoiceGroup") {
      answersByQuestion[screen.id] = {
        questionId: screen.id,
        questionTitle: screen.title,
        rows: {}
      };
      screen.rows.forEach((row) => {
        const answer = state.answers[row.id] || "";
        answerColumnIndex += 1;
        surveyDbRow[columnHeader(answerColumnIndex, screen.title, row.title)] = answer;
        answersByQuestion[screen.id].rows[row.id] = {
          rowId: row.id,
          rowTitle: row.title,
          answer
        };
        flatRows.push({
          responseId,
          submittedAt,
          questionId: screen.id,
          questionTitle: screen.title,
          rowId: row.id,
          rowTitle: row.title,
          answer
        });
      });
    }
  });

  return {
    schemaVersion: "2026-04-18.1",
    responseId,
    submittedAt,
    formTitle: SURVEY.title,
    sourceFormUrl: SOURCE_FORM_URL,
    answerRowCount: flatRows.length,
    answeredRowCount: flatRows.filter((row) => String(row.answer || "").trim()).length,
    tester: {
      name: state.answers.ref10a028774947e4b02ebad4c50c8406 || "",
      normalTrailShoe: state.answers.r8cd399d5613b4743866237999b83cbc8 || "",
      typicalDistance: state.answers.r59ead437294c42b49564b9eedb65d6d7 || ""
    },
    answers: answersByQuestion,
    flatRows,
    surveyDbRow
  };
}

function cleanHeader(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\[/g, "(")
    .replace(/\]/g, ")")
    .trim();
}

function columnHeader(index, questionTitle, rowTitle = "") {
  const number = String(index).padStart(2, "0");
  const title = cleanHeader(questionTitle);
  const header = rowTitle
    ? `Q${number} ${rowTitle} - ${title}`
    : `Q${number} ${title}`;
  return header.slice(0, 240);
}

function getEndpoint() {
  return localStorage.getItem(ENDPOINT_STORAGE_KEY) || POWER_AUTOMATE_URL;
}

function bootstrapEndpointFromHash() {
  if (!location.hash) {
    return;
  }

  const params = new URLSearchParams(location.hash.slice(1));
  const encodedEndpoint = params.get("flow");
  if (!encodedEndpoint) {
    return;
  }

  try {
    const endpoint = decodeBase64Url(encodedEndpoint);
    if (!/^https:\/\/.+powerautomate.+sig=/.test(endpoint)) {
      throw new Error("Invalid endpoint");
    }
    localStorage.setItem(ENDPOINT_STORAGE_KEY, endpoint);
    localStorage.setItem(ENDPOINT_LOCKED_STORAGE_KEY, "1");
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  } catch {
    localStorage.removeItem(ENDPOINT_STORAGE_KEY);
    localStorage.removeItem(ENDPOINT_LOCKED_STORAGE_KEY);
  }
}

function decodeBase64Url(value) {
  const padded = `${value}${"=".repeat((4 - value.length % 4) % 4)}`;
  return atob(padded.replace(/-/g, "+").replace(/_/g, "/"));
}

function syncSettingsVisibility() {
  els.settingsButton.hidden = true;
  els.settingsDialog.hidden = true;
}

function loadAnswers() {
  try {
    return JSON.parse(localStorage.getItem(ANSWER_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveAnswers() {
  localStorage.setItem(ANSWER_STORAGE_KEY, JSON.stringify(state.answers));
}
