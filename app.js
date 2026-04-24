const SOURCE_FORM_URL = "https://forms.office.com/r/MpCyjJVcd7";
const POWER_AUTOMATE_URL = "https://default1445a1df842f4a6595a29237bdf735.c9.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/34e219f4726f4c679b11cffb903c4420/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NLraKrvx7AAEDwRrM5nTTlVNKDabbFnSvPBMVJzZT6o";
const ENDPOINT_STORAGE_KEY = "korea-dynamic-test-flow-url";
const ENDPOINT_LOCKED_STORAGE_KEY = "korea-dynamic-test-flow-url-locked";
const ANSWER_STORAGE_KEY = "korea-dynamic-test-answers";
const SHAREPOINT_LIST_TITLE = "KDTQ Survey Inbox";
const STRAVA_EMBED_SCRIPT_ID = "strava-embed-script";
const RATING_SCALE_VALUES = ["1", "2", "3", "4", "5"];
const KOREA_TIME_ZONE = "Asia/Seoul";
const START_SCREEN_TITLE = "Korea Dynamic Test Questionnaire";
const START_SCREEN_DATE = "Test Date : May 10th, 2026";
const SCALE_TONE_QUALITY = "quality";
const SCALE_TONE_IDEAL_CENTER = "ideal-center";

const SURVEY = {
  title: START_SCREEN_TITLE,
  description: "Product Testing Confidentiality Agreement\nFOR PRODUCT TESTERS\n\n I hereby agree to comply with the following terms regarding product testing for TKG Taekwang and Nike (hereinafter referred to as \"the Company\").\nAs part of my responsibilities as a product tester, I will soon receive confidential information and company-owned products related to the product. I acknowledge that all information and products related to the test are owned by the Company and are considered confidential.\n\nAll information related to the product that I receive (including technical or other information, UI, and other product photos and images) must always be treated as confidential. I am prohibited from disclosing this information to unauthorized third parties or in any other form, and failure to return the products or information constitutes a breach of the confidentiality agreement with the Company. This applies even if the materials are not explicitly marked as \"confidential.\"\n\nBy reading and signing this agreement, I confirm that I understand the information and products related to the test are confidential to the Company. I also acknowledge that unauthorized disclosure could cause irreparable harm to the Company and its business. I pledge to this confidentiality agreement and understand that any breach may result in civil and criminal liability under relevant laws, including the Unfair Competition Prevention and Trade Secret Protection Act.",
  screens: [
    {
      id: "start",
      type: "Start",
      title: START_SCREEN_TITLE,
      testDate: START_SCREEN_DATE,
      subtitle: "",
      choices: []
    },
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
      subtitle: "Seongjigok Reservoir candidate course (Busan Children's Grand Park, 295 Saessak-ro, Busanjin-gu, Busan)\n\nCandidate basis: Seongjigok Reservoir loop and nearby Busan Children's Grand Park / Baegyangsan trail entrance. The final public Strava route will be embedded here after the course is confirmed.",
      image: null,
      embed: {
        type: "StravaRoutePending",
        eyebrow: "STRAVA ROUTE PENDING",
        title: "Seongjigok Reservoir Candidate Course",
        location: "Busan Children's Grand Park, 295 Saessak-ro, Busanjin-gu, Busan",
        routeNote: "Reservoir loop + nearby park / Baegyangsan trail entrance",
        distanceNote: "Approx. 2.5 km reservoir loop reference; final test route TBD",
        stravaUrl: "https://www.strava.com/routes/new"
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
    scaleChoice("r59ead437294c42b49564b9eedb65d6d7", "What is a typical distance for a single trail running session?", ["5 km or less", "5-10 km", "10-15 km", "15-20 km", "20 km or more"]),
    {
      id: "r3d10b34d304b4cad916178bf6f6ac709",
      type: "Question.ColumnGroup",
      title: "First Impression",
      subtitle: "This survey aims to gather insights from your immediate experience on this terrain.\n\nBefore you begin the 1.5-2 mile run, please share your honest feedback on the initial step-in feel, as if you were testing the shoes right here at the trail.",
      image: null,
      choices: []
    },
    matrix("r16976ac35d7f49d99d8b0132ab661fd0", "Is the foot entry easy on and off without tugging?", null, "./assets/tugging.png", ["Very Difficult", "Moderately Difficult", "Somewhat Difficult", "Somewhat Easy", "Moderately Easy", "Very Easy"], [["r8f2a5c8845ce4fdda8e19cc52c7db96d", "OPTION A"], ["rce49158180f14ca78e86a27f128ee43a", "OPTION B"]], null, SCALE_TONE_QUALITY),
    matrix("r2744e21e248e4dccb3c4c2b5fca61579", "How securely does the lace stay tied?", null, "./assets/question-images/9.png", ["Very Insecure", "Moderately Insecure", "Somewhat Insecure", "Somewhat Secure", "Moderately Secure", "Very Secure"], [["ra83ab2913b2d4e65b3f02e84e5827d23", "OPTION A"], ["ra001992c51a14744ba59903010a402ab", "OPTION B"]], "Does the lace stay tied securely?", SCALE_TONE_QUALITY),
    matrix("r1e7b3f177eda44de86224bb54e973a40", "How do you feel about the shoe length?", null, "./assets/question-images/10.png", ["Very Short", "Moderately Short", "Somewhat Short", "Just Right", "Somewhat Long", "Moderately Long", "Very Long"], [["r8899cd5a7b2d42478ded61fa6c3055c4", "OPTION A"], ["r584ce29342424e6694710ec887da8d94", "OPTION B"]], null, SCALE_TONE_IDEAL_CENTER),
    matrix("r013287f922ba4e429bd5fe5b1c218304", "How do you feel about the upper comfort?", null, "./assets/question-images/11.png", ["Very Uncomfortable", "Moderately Uncomfortable", "Somewhat Uncomfortable", "Somewhat Comfortable", "Moderately Comfortable", "Very Comfortable"], [["re54897cc451c495ea72fa31cbeac7e20", "OPTION A"], ["ra952f436ea6b4a2792cb2812d9f12c38", "OPTION B"]], "Does the upper provide a right comfort without any irritation, discomfort or stiffness?", SCALE_TONE_QUALITY),
    matrix("r29dc41bb1b964699a1b8851c47d0cb17", "How do you feel about the upper breathability for your running purpose?", null, "./assets/question-images/12.png", ["Not Breathable", "Moderately Not Breathable", "Somewhat Not Breathable", "Somewhat Breathable", "Moderately Breathable", "Very Breathable"], [["r5707237fe19c4abcba536fa92fe94fdc", "OPTION A"], ["r86f2ab1c530a4f43a29b677e63d44f77", "OPTION B"]], "Does the upper provide a right breathability to meet your running purpose?", SCALE_TONE_QUALITY),
    matrix("r461f5e8e86af4f15839b89eb92655a42", "How do you feel about the upper security?", null, "./assets/question-images/13.png", ["Very Insecure", "Moderately Insecure", "Somewhat Insecure", "Somewhat Secure", "Moderately Secure", "Very Secure"], [["r68443dfa5b4848e6bf1269293c5de1b2", "OPTION A"], ["r8fe377c38e7a4996ae327a6c20b1afc7", "OPTION B"]], "Does the upper hug your foot securely without being too tight or loose?", SCALE_TONE_QUALITY),
    matrix("rd10683a1626d4f49bca7fe8d39fa1fc9", "How do you feel about the shoe weight?", null, "./assets/question-images/14.png", ["Very Heavy", "Moderately Heavy", "Somewhat Heavy", "Somewhat Light", "Moderately Light", "Very Light"], [["r9925678be167492c9a604fb1ff5c8b23", "OPTION A"], ["r91c84aa60c304e33bd7fac67363fbef6", "OPTION B"]], "Does the shoe have a right weight to meet your running purpose?", SCALE_TONE_QUALITY),
    { id: "rab281cb9c61242179a1b6a77c7b1f813", type: "Question.TextField", title: "Please share your thoughts about the most impressive aspects of initial step-in feel or areas that need improvement.", subtitle: null, image: null, choices: [] },
    {
      id: "r406205423cb14e10b0f46ceebebb7517",
      type: "Question.ColumnGroup",
      title: "Underfoot",
      subtitle: "We would like to understand your experience comparing the two shoe conditions after the initial step-in and a 1.5–2 mile run on this terrain.\n\nPlease provide detailed feedback on underfoot cushioning (heel & forefoot), energy return, protection and stability for each option.",
      image: null,
      choices: []
    },
    matrix("rae32dae17f8a478b8f720824f85d8da9", "How do you feel about the heel cushioning?", null, "./assets/question-images/17.png", ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"], [["rf7e4c5a6dae447be8d53dd14f9bd5ca6", "OPTION A"], ["r89f60ea45e704c338e504ba001a12d69", "OPTION B"]], "Does the heel provide a right cushioning without being too soft or firm?"),
    matrix("rf533f683c7fb4104b012d5d01cb3640d", "How do you like the heel cushioning?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/122f725f-40a2-4187-8ee0-922439c6366f", ["1", "2", "3", "4", "5"], [["r8a737a1f08ef4b009b13d746ef069de1", "OPTION A"], ["r425e5142dfbb423faec6173d2670ee09", "OPTION B"]]),
    matrix("rcfabeb2948a044c58c7786b542b4c9f4", "How do you feel about the forefoot cushioning?", null, "./assets/question-images/19.png", ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"], [["ra612c6af5d72492280ddc1a6ef39133d", "OPTION A"], ["r2a014b0a1d504d4e801c862ca6fdd1b3", "OPTION B"]], "Does the forefoot provide a right cushioning without being too soft or firm?"),
    matrix("r0a748c7cc2bd4162afc5705d7a969ccb", "How do you like the forefoot cushioning?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/fb983e99-9032-4413-aeb5-72847996fedc", ["1", "2", "3", "4", "5"], [["r2f0e9f3c7c974e8d830964ce8ca86c1e", "OPTION A"], ["r8df4825c475542d1ad4d15260869b928", "OPTION B"]]),
    matrix("rad0549bcfd794b02ad2d92ac7d105434", "How do you feel about the shoe's energy return?", null, "./assets/question-images/21.png", ["Very Dead", "Moderately Dead", "Somewhat Dead", "Somewhat Springy", "Moderately Springy", "Very Springy"], [["r7562e76f90e54ae7bfad32be55d9a20c", "OPTION A"], ["rc2dadc72b56243e0b8fa9bf3fc144a95", "OPTION B"]], "Does the midsole provide a right responsiveness without being flat and dead?", SCALE_TONE_QUALITY),
    matrix("r0441f8eeb105498cb4979a0e65354f59", "How do you like the energy return?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/8a7d9c41-fa6d-45c7-9c50-26b486302e0a", ["1", "2", "3", "4", "5"], [["rba7aff53824545938ad3e4f208c0525b", "OPTION A"], ["r0d1d4ef37ba04642b582b0862d69f580", "OPTION B"]], "How do you like the responsiveness?"),
    matrix("r9ed97752500a4c1fb1fe2895a59b1f18", "How do you feel about the stability at ground contact?", null, "./assets/question-images/23.png", ["Very Unstable", "Moderately Unstable", "Somewhat Unstable", "Somewhat Stable", "Moderately Stable", "Very Stable"], [["rc2b4c0008806493f801b12756d894925", "OPTION A"], ["r1c7ca7ffb61545c3b81d8f561fa805db", "OPTION B"]], null, SCALE_TONE_QUALITY),
    matrix("r5da4c7fd9702401ab5bebad50f5b78ff", "How do you like the stability?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/a36f43b1-6c3a-4c5e-b077-c8a650ac645a", ["1", "2", "3", "4", "5"], [["r7f4ae99bcc904d8caf5e8b6baf90c865", "OPTION A"], ["r36c7094964a944db81a5b042ad54a4b2", "OPTION B"]]),
    matrix("rb4ea1f79459140ec97027ad889f0ad28", "How do you feel about the underfoot protection when running on uneven terrain?", null, "./assets/question-images/25.png", ["Very Unprotective", "Moderately Unprotective", "Somewhat Unprotective", "Somewhat Protective", "Moderately Protective", "Very Protective"], [["r5cf7e6603c21479d9be3857b55ff9ab4", "OPTION A"], ["rb556f313b0eb4fffa3cc5ff6e5b99dcd", "OPTION B"]], null, SCALE_TONE_QUALITY),
    matrix("r6f49a0fd33294fb6b28d0c08ff099ab1", "How do you feel about the outsole's traction on uneven terrain?", null, "./assets/question-images/26.png", ["Very Slippery", "Moderately Slippery", "Somewhat Slippery", "Somewhat Grippy", "Moderately Grippy", "Very Grippy"], [["r36596c6ea4d841b6acb81b297c08a51f", "OPTION A"], ["r25a05d7025c947d5abced137cdd997a7", "OPTION B"]], null, SCALE_TONE_QUALITY),
    matrix("r5d4f3001bcd54a539e77baa293db2874", "How do you like the underfoot protection?", "*Please rate your level of liking on a scale of 1 to 5.", "https://hive.forms.usercontent.microsoft/images/1445a1df-842f-4a65-95a2-9237bdf735c9/fb8110f8-bbc0-451d-8b01-a3599e66edbd/TCPGC70FHWI40OA89A2VTOPGWU/0423aee4-7dd6-4b91-9532-887a19b75c95", ["1", "2", "3", "4", "5"], [["r2c8b417145544ee6b17696ba92b1aa38", "OPTION A"], ["r64941770173a4147a9659e2d55153870", "OPTION B"]]),
    { id: "r10ff47a33eec45f0a524c2b66cf3e4b1", type: "Question.TextField", title: "Please share your thoughts about the most impressive aspects of underfoot or areas that need improvement.", subtitle: null, image: null, choices: [] },
    { id: "submit", type: "Submit", title: "Submit Response", subtitle: null, image: null, choices: [] }
  ]
};

function matrix(id, title, subtitle, image, choices, rows, legacyTitle = null, scaleTone = "neutral") {
  return {
    id,
    type: "Question.MatrixChoiceGroup",
    title,
    legacyTitle,
    subtitle,
    image,
    choices,
    scaleTone,
    rows: rows.map(([rowId, rowTitle]) => ({ id: rowId, title: rowTitle }))
  };
}

function scaleChoice(id, title, choices, scaleTone = "neutral") {
  return {
    id,
    type: "Question.ScaleChoice",
    title,
    subtitle: null,
    image: null,
    choices,
    scaleTone
  };
}

const KO_COPY = {
  start: {
    title: "",
    testDate: "",
    subtitle: "동의서를 확인한 뒤 테스트 설문을 시작해 주세요."
  },
  agreement: {
    title: "제품 테스트 비밀유지 동의서",
    subtitle: "제품 테스트 비밀유지 동의서\n제품 테스트 참가자용\n\n본인은 TKG태광 및 Nike(이하 \"회사\")의 제품 테스트와 관련하여 아래 비밀유지 조건을 준수하는 데 동의합니다.\n제품 테스터로서 본인은 제품과 관련된 회사의 기밀 정보 및 회사 소유 제품을 제공받을 수 있습니다. 본인은 테스트와 관련된 모든 정보와 제품이 회사의 소유이며 비밀 정보로 취급되어야 함을 인정합니다.\n\n본인이 제공받는 제품 관련 모든 정보(기술 정보, UI, 제품 사진 및 이미지 등)는 항상 비밀로 취급되어야 합니다. 본인은 이 정보를 승인되지 않은 제3자에게 공개하거나 어떠한 형태로도 유출해서는 안 되며, 제품 또는 정보를 반환하지 않거나 본 비밀유지 의무를 위반하는 행위는 회사와의 비밀유지 계약 위반에 해당합니다. 이는 해당 자료에 \"confidential\" 표시가 명시되어 있지 않은 경우에도 동일하게 적용됩니다.\n\n본 동의서를 읽고 동의함으로써, 본인은 테스트 관련 정보와 제품이 회사의 비밀 정보임을 이해했음을 확인합니다. 또한 무단 공개가 회사와 회사의 사업에 회복하기 어려운 손해를 초래할 수 있음을 인정하며, 본 비밀유지 의무를 준수할 것을 확약합니다. 위반 시 부정경쟁방지 및 영업비밀보호에 관한 법률 등 관련 법령에 따라 민형사상 책임이 발생할 수 있음을 이해합니다."
  },
  r33e4738100594b8286086c8a7fafa1f9: {
    title: "코스 및 고도",
    subtitle: "성지곡수원지 코스 후보 (부산어린이대공원, 부산 부산진구 새싹로 295)\n\n코스 미정: 성지곡수원지 순환 산책로와 부산어린이대공원/백양산 초입 트레일을 기준으로 최종 Strava route 확정 후 교체 예정입니다."
  },
  r6054912e5d1e4572a039c018e3bd6a9a: {
    title: "테스터 정보",
    subtitle: "[개인정보 수집 및 처리 안내]\n\n본 설문을 통해 수집되는 모든 개인정보는 신발 연구 및 제품 개발 목적에 한해 사용됩니다.\n\n본 설문에 참여하는 경우, 개인정보 수집 및 처리에 동의한 것으로 간주됩니다."
  },
  ref10a028774947e4b02ebad4c50c8406: {
    title: "이름을 입력해 주세요."
  },
  r8cd399d5613b4743866237999b83cbc8: {
    title: "평소 사용하는 트레일 러닝화는 무엇인가요?"
  },
  r59ead437294c42b49564b9eedb65d6d7: {
    title: "평소 한 번의 트레일 러닝에서 주로 어느 정도 거리를 달리나요?"
  },
  r3d10b34d304b4cad916178bf6f6ac709: {
    title: "첫 인상",
    subtitle: "이 설문은 해당 지형에서의 첫 착화 경험을 바탕으로 의견을 수집하기 위한 것입니다.\n\n1.5-2마일(약 2.4-3.2km) 러닝을 시작하기 전에, 마치 트레일 현장에서 바로 신발을 테스트하는 상황이라고 생각하고 초기 착화감에 대한 솔직한 의견을 남겨 주세요."
  },
  r16976ac35d7f49d99d8b0132ab661fd0: {
    title: "억지로 당기거나 구기지 않고도 쉽게 신을 수 있나요?"
  },
  r2744e21e248e4dccb3c4c2b5fca61579: {
    title: "신끈의 매듭은 풀리지 않고 잘 고정되어 있나요?"
  },
  r1e7b3f177eda44de86224bb54e973a40: {
    title: "평소 신는 신발과 사이즈는 같다고 느끼시나요?"
  },
  r013287f922ba4e429bd5fe5b1c218304: {
    title: "이물감이나 불편함 없이 편안함을 제공하나요?"
  },
  r29dc41bb1b964699a1b8851c47d0cb17: {
    title: "달리기에 충분한 통기성을 제공하나요?"
  },
  r461f5e8e86af4f15839b89eb92655a42: {
    title: "발을 너무 조이거나 헐렁하지 않게 잘 잡아주나요?"
  },
  rd10683a1626d4f49bca7fe8d39fa1fc9: {
    title: "신발의 무게에 대해 어떻게 생각하시나요?"
  },
  rab281cb9c61242179a1b6a77c7b1f813: {
    title: "초기 착화감에서 가장 인상적이었던 점이나 개선이 필요한 부분을 적어 주세요."
  },
  r406205423cb14e10b0f46ceebebb7517: {
    title: "언더풋",
    subtitle: "초기 착화 후 해당 지형에서 1.5-2마일(약 2.4-3.2km)을 달린 뒤, 두 가지 신발 조건을 비교한 경험을 확인하고자 합니다.\n\n각 옵션에 대해 언더풋 쿠셔닝(뒤꿈치 및 앞발), 에너지 리턴, 보호감, 안정성에 대한 자세한 의견을 남겨 주세요."
  },
  rae32dae17f8a478b8f720824f85d8da9: {
    title: "힐 쿠셔닝에 대해 어떻게 생각하시나요?"
  },
  rf533f683c7fb4104b012d5d01cb3640d: {
    title: "뒤꿈치 쿠셔닝의 만족도는 어떤가요?",
    subtitle: "*1점부터 5점까지의 척도로 만족도를 평가해 주세요."
  },
  rcfabeb2948a044c58c7786b542b4c9f4: {
    title: "포풋 쿠셔닝에 대해 어떻게 생각하시나요?"
  },
  r0a748c7cc2bd4162afc5705d7a969ccb: {
    title: "앞발 쿠셔닝의 만족도는 어떤가요?",
    subtitle: "*1점부터 5점까지의 척도로 만족도를 평가해 주세요."
  },
  rad0549bcfd794b02ad2d92ac7d105434: {
    title: "신발의 에너지리턴(반발감)은 어떻게 생각하시나요?"
  },
  r0441f8eeb105498cb4979a0e65354f59: {
    title: "에너지 리턴의 만족도는 어떤가요?",
    subtitle: "*1점부터 5점까지의 척도로 만족도를 평가해 주세요."
  },
  r9ed97752500a4c1fb1fe2895a59b1f18: {
    title: "발이 지면에 닿을 때 알맞은 안정성을 제공하나요?"
  },
  r5da4c7fd9702401ab5bebad50f5b78ff: {
    title: "안정감의 만족도는 어떤가요?",
    subtitle: "*1점부터 5점까지의 척도로 만족도를 평가해 주세요."
  },
  rb4ea1f79459140ec97027ad889f0ad28: {
    title: "불규칙한 지형을 달릴 때 발을 보호해 주는 느낌은 어떤가요?"
  },
  r6f49a0fd33294fb6b28d0c08ff099ab1: {
    title: "불규칙한 지형에서 아웃솔 접지력은 어떤가요?"
  },
  r5d4f3001bcd54a539e77baa293db2874: {
    title: "언더풋 보호감의 만족도는 어떤가요?",
    subtitle: "*1점부터 5점까지의 척도로 만족도를 평가해 주세요."
  },
  r10ff47a33eec45f0a524c2b66cf3e4b1: {
    title: "언더풋에서 가장 인상적이었던 점이나 개선이 필요한 부분을 적어 주세요."
  },
  submit: {
    title: "응답 제출",
    subtitle: "준비가 되면 응답을 제출해 주세요."
  }
};

const KO_CHOICES = {
  "5 km or less": "5km 이하",
  "5-10 km": "5-10km",
  "10-15 km": "10-15km",
  "15-20 km": "15-20km",
  "20 km or more": "20km 이상",
  "Very Difficult": "매우 어려움",
  "Moderately Difficult": "다소 어려움",
  "Somewhat Difficult": "약간 어려움",
  "Somewhat Easy": "약간 쉬움",
  "Moderately Easy": "다소 쉬움",
  "Very Easy": "매우 쉬움",
  "Very Insecure": "매우 불안정",
  "Moderately Insecure": "다소 불안정",
  "Somewhat Insecure": "약간 불안정",
  "Somewhat Secure": "약간 안정적",
  "Moderately Secure": "다소 안정적",
  "Very Secure": "매우 안정적",
  "Very Short": "매우 짧음",
  "Moderately Short": "다소 짧음",
  "Somewhat Short": "약간 짧음",
  "Just Right": "적당함",
  "Somewhat Long": "약간 김",
  "Moderately Long": "다소 김",
  "Very Long": "매우 김",
  "Very Uncomfortable": "매우 불편함",
  "Moderately Uncomfortable": "다소 불편함",
  "Somewhat Uncomfortable": "약간 불편함",
  "Somewhat Comfortable": "약간 편안함",
  "Moderately Comfortable": "다소 편안함",
  "Very Comfortable": "매우 편안함",
  "Not Breathable": "통기성 부족",
  "Moderately Not Breathable": "다소 답답함",
  "Somewhat Not Breathable": "약간 답답함",
  "Somewhat Breathable": "약간 통기성 있음",
  "Moderately Breathable": "다소 통기성 좋음",
  "Very Breathable": "매우 통기성 좋음",
  "Very Heavy": "매우 무거움",
  "Moderately Heavy": "다소 무거움",
  "Somewhat Heavy": "약간 무거움",
  "Somewhat Light": "약간 가벼움",
  "Moderately Light": "다소 가벼움",
  "Very Light": "매우 가벼움",
  "Very Soft": "매우 부드러움",
  "Moderately Soft": "다소 부드러움",
  "Somewhat Soft": "약간 부드러움",
  "Somewhat Firm": "약간 단단함",
  "Moderately Firm": "다소 단단함",
  "Very Firm": "매우 단단함",
  "Very Dead": "매우 둔함",
  "Moderately Dead": "다소 둔함",
  "Somewhat Dead": "약간 둔함",
  "Somewhat Springy": "약간 탄성 있음",
  "Moderately Springy": "다소 탄성 있음",
  "Very Springy": "매우 탄성 있음",
  "Very Unstable": "매우 불안정",
  "Moderately Unstable": "다소 불안정",
  "Somewhat Unstable": "약간 불안정",
  "Somewhat Stable": "약간 안정적",
  "Moderately Stable": "다소 안정적",
  "Very Stable": "매우 안정적",
  "Very Unprotective": "전혀 보호해주지 않음",
  "Moderately Unprotective": "거의 보호해주지 않음",
  "Somewhat Unprotective": "보호가 약간 부족함",
  "Somewhat Protective": "약간 보호해줌",
  "Moderately Protective": "잘 보호해줌",
  "Very Protective": "매우 잘 보호해줌",
  "Very Slippery": "매우 미끄러움",
  "Moderately Slippery": "다소 미끄러움",
  "Somewhat Slippery": "약간 미끄러움",
  "Somewhat Grippy": "약간 접지됨",
  "Moderately Grippy": "다소 접지력 좋음",
  "Very Grippy": "매우 접지력 좋음"
};

const KO_ROWS = {
  "OPTION A": "옵션 A",
  "OPTION B": "옵션 B"
};

const state = {
  index: 0,
  answers: loadAnswers(),
  submitting: false,
  submitted: false,
  submitMessage: "",
  submitError: false,
  renderToken: 0
};

const els = {
  phone: document.querySelector(".phone"),
  kicker: document.getElementById("kicker"),
  title: document.getElementById("screenTitle"),
  meta: document.getElementById("screenMeta"),
  progress: document.getElementById("progressBar"),
  progressCount: document.getElementById("progressCount"),
  content: document.getElementById("content"),
  bottomNav: document.querySelector(".bottom-nav"),
  back: document.getElementById("backButton"),
  next: document.getElementById("nextButton"),
  navActions: document.querySelector(".nav-actions"),
  settingsButton: document.getElementById("settingsButton"),
  settingsDialog: document.getElementById("settingsDialog"),
  flowUrl: document.getElementById("flowUrl"),
  saveSettings: document.getElementById("saveSettings")
};

const NEXT_BUTTON_ICON = els.next.innerHTML;

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

function getLocalizedScreen(screen) {
  return KO_COPY[screen?.id] || {};
}

function getScreenTitleKo(screen) {
  return getLocalizedScreen(screen).title || "";
}

function getScreenDateKo(screen) {
  return getLocalizedScreen(screen).testDate || "";
}

function getRowTitleKo(title) {
  return KO_ROWS[normalizeCopyKey(title)] || "";
}

function getChoiceKo(choice) {
  const key = normalizeCopyKey(choice);
  return KO_CHOICES[choice] || KO_CHOICES[key] || "";
}

function normalizeCopyKey(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getAccessibleScreenLabel(screen) {
  const ko = getScreenTitleKo(screen);
  return ko ? `${ko} / ${screen.title}` : screen.title;
}

function setBilingualContent(element, ko, en, classes = {}) {
  element.replaceChildren();
  const koText = String(ko || "").trim();
  const enText = String(en || "").trim();
  if (koText) {
    const koNode = document.createElement("span");
    koNode.className = classes.koClass || "ko-line";
    appendLinkedText(koNode, koText);
    element.append(koNode);
  }
  if (enText && (!koText || normalizeCopyKey(enText) !== normalizeCopyKey(koText))) {
    const enNode = document.createElement("span");
    enNode.className = koText
      ? classes.enClass || "en-line"
      : classes.koClass || classes.enClass || "en-line";
    appendLinkedText(enNode, enText);
    element.append(enNode);
  }
}

function renderLocalizedText(screen, className) {
  const node = document.createElement("div");
  node.className = `${className} localized-copy`;
  const localized = getLocalizedScreen(screen);
  if (localized.subtitle) {
    const koBlock = document.createElement("div");
    koBlock.className = "copy-block copy-ko";
    appendLinkedText(koBlock, localized.subtitle);
    node.append(koBlock);
  }
  if (screen.subtitle) {
    const enBlock = document.createElement("div");
    enBlock.className = "copy-block copy-en";
    appendLinkedText(enBlock, screen.subtitle);
    node.append(enBlock);
  }
  return node;
}

function render() {
  const screen = currentScreen();
  const ratingScale = isRatingScaleScreen(screen);
  state.renderToken += 1;
  const totalSteps = SURVEY.screens.length - 1;
  const currentStep = screen.type === "Start" ? 0 : state.index;
  const progress = currentStep / totalSteps;
  els.phone.classList.toggle("has-page-background", usesBackgroundArt(screen));
  els.phone.classList.toggle("is-start", screen.type === "Start");
  els.phone.classList.toggle("is-agreement", screen.id === "agreement");
  els.kicker.hidden = true;
  els.kicker.textContent = "";
  setBilingualContent(els.title, getScreenTitleKo(screen), screen.title, {
    koClass: "screen-title-ko",
    enClass: "screen-title-en"
  });
  els.meta.hidden = !screen.testDate;
  if (screen.testDate) {
    setBilingualContent(els.meta, getScreenDateKo(screen), screen.testDate, {
      koClass: "screen-meta-ko",
      enClass: "screen-meta-en"
    });
  } else {
    els.meta.textContent = "";
  }
  els.progress.style.width = `${Math.max(4, Math.round(progress * 100))}%`;
  els.progressCount.textContent = `${Math.max(1, currentStep)}/${totalSteps}`;
  els.content.replaceChildren();
  resetContentScroll();

  if (screen.type === "Start") {
    renderStart();
  } else if (screen.image && !ratingScale) {
    renderSurveyImage(screen);
  }

  if (screen.type === "Question.ColumnGroup" && (screen.embed?.type === "StravaRoute" || screen.embed?.type === "StravaRoutePending")) {
    els.content.append(renderLocalizedText(screen, "question-copy intro route-copy"));
  }

  if (screen.embed?.type === "StravaRoute") {
    renderStravaRoute(screen.embed);
  } else if (screen.embed?.type === "StravaRoutePending") {
    renderStravaRoutePending(screen.embed);
  }

  if (screen.type === "Intro") {
    renderAgreement(screen);
  } else if (screen.type === "Question.ColumnGroup" && !screen.embed) {
    els.content.append(renderLocalizedText(screen, "question-copy intro"));
  } else if (screen.type === "Question.TextField") {
    renderTextField(screen);
  } else if (screen.type === "Question.ScaleChoice") {
    renderScaleChoice(screen);
  } else if (screen.type === "Question.MatrixChoiceGroup") {
    renderMatrix(screen);
  } else if (screen.type === "Submit") {
    renderSubmit();
  }

  updateNavigation(screen);
  resetContentScroll();
}

function renderStart() {
  const panel = document.createElement("div");
  panel.className = "start-panel";

  const copy = document.createElement("p");
  copy.className = "start-copy";
  setBilingualContent(copy, getLocalizedScreen(currentScreen()).subtitle, "Please start when you are ready to review the agreement and complete the test questionnaire.", {
    koClass: "copy-ko",
    enClass: "copy-en"
  });

  const button = makePrimaryAction("테스트 시작", "Start Test", () => {
    state.index = 1;
    render();
  });

  panel.append(copy, button);
  els.content.append(panel);
}

function renderAgreement(screen) {
  els.content.append(renderLocalizedText(screen, "question-copy intro agreement-copy"));
}

function makePrimaryAction(labelKo, labelEn, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "primary-action";
  setBilingualContent(button, labelKo, labelEn, {
    koClass: "button-ko",
    enClass: "button-en"
  });
  button.addEventListener("click", onClick);
  return button;
}

function resetContentScroll() {
  els.content.scrollTo({ top: 0, left: 0, behavior: "auto" });
  requestAnimationFrame(() => {
    els.content.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function renderSurveyImage(screen) {
  const frame = document.createElement("figure");
  frame.className = "survey-image-frame is-loading";

  const skeleton = document.createElement("div");
  skeleton.className = "image-skeleton";
  skeleton.setAttribute("aria-hidden", "true");

  const image = document.createElement("img");
  image.className = "survey-image";
  image.alt = getAccessibleScreenLabel(screen);
  image.decoding = "async";
  image.loading = "eager";
  image.addEventListener("load", () => {
    frame.classList.remove("is-loading");
    frame.classList.add("is-loaded");
  }, { once: true });
  image.addEventListener("error", () => {
    frame.classList.remove("is-loading");
    frame.classList.add("is-error");
    skeleton.textContent = "Image unavailable";
  }, { once: true });
  image.src = screen.image;

  if (image.complete && image.naturalWidth > 0) {
    frame.classList.remove("is-loading");
    frame.classList.add("is-loaded");
  }

  frame.append(skeleton, image);
  els.content.append(frame);
}

function usesBackgroundArt(screen) {
  return screen.type === "Start"
    || screen.type === "Intro"
    || screen.type === "Question.ColumnGroup"
    || screen.type === "Submit";
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

function renderStravaRoutePending(embed) {
  const card = document.createElement("article");
  card.className = "strava-pending-card";

  const badge = document.createElement("span");
  badge.className = "strava-pending-badge";
  badge.textContent = embed.eyebrow || "STRAVA ROUTE PENDING";

  const title = document.createElement("h2");
  title.textContent = embed.title || "Candidate Course";

  const location = document.createElement("p");
  location.className = "strava-pending-location";
  location.textContent = embed.location || "";

  const details = document.createElement("dl");
  details.className = "strava-pending-details";
  [
    ["Basis", embed.routeNote],
    ["Distance", embed.distanceNote]
  ].forEach(([label, value]) => {
    if (!value) {
      return;
    }
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const desc = document.createElement("dd");
    term.textContent = label;
    desc.textContent = value;
    item.append(term, desc);
    details.append(item);
  });

  const routeLine = document.createElement("div");
  routeLine.className = "strava-pending-route";
  routeLine.setAttribute("aria-hidden", "true");
  routeLine.innerHTML = "<span></span><i></i><span></span><i></i><span></span>";

  const link = document.createElement("a");
  link.className = "strava-pending-link";
  link.href = embed.stravaUrl || "https://www.strava.com/routes/new";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Open Strava Route Builder";

  card.append(badge, title, location, details, routeLine, link);
  els.content.append(card);
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
  field.setAttribute("aria-label", getAccessibleScreenLabel(screen));
  if (!longText) {
    field.type = "text";
  }
  field.addEventListener("input", () => {
    state.answers[screen.id] = field.value;
    saveAnswers();
  });
  els.content.append(field);
}

function renderScaleChoice(screen) {
  if (screen.subtitle) {
    els.content.append(renderLocalizedText(screen, "question-copy"));
  }

  const wrapper = document.createElement("div");
  wrapper.className = "single-scale";
  wrapper.append(createMarkerScale(screen, { id: screen.id, title: screen.title }, 0, []));
  els.content.append(wrapper);
}

function renderMatrix(screen) {
  if (screen.subtitle) {
    els.content.append(renderLocalizedText(screen, "question-copy"));
  }

  const wrapper = document.createElement("div");
  wrapper.className = "matrix";
  const rating = isRatingScaleScreen(screen);

  const rowEls = [];

  screen.rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("section");
    rowEl.className = `matrix-row${rating ? " is-liking-row" : " is-marker-row"}`;
    rowEl.dataset.rowId = row.id;

    const rowTitle = document.createElement("div");
    rowTitle.className = "row-title";
    setBilingualContent(rowTitle, getRowTitleKo(row.title), row.title, {
      koClass: "row-ko",
      enClass: "row-en"
    });

    const options = rating
      ? createLikingScale(screen, row, rowIndex, rowEls)
      : createMarkerScale(screen, row, rowIndex, rowEls);

    rowEl.append(rowTitle, options);
    wrapper.append(rowEl);
    rowEls.push(rowEl);
  });

  els.content.append(wrapper);
}

function createLikingScale(screen, row, rowIndex, rowEls) {
  const control = document.createElement("div");
  control.className = "liking-scale answer-scale";

  const readout = document.createElement("div");
  readout.className = "scale-readout";
  const valueText = document.createElement("strong");
  valueText.className = "scale-value";
  readout.append(valueText);

  const sliderControl = document.createElement("div");
  sliderControl.className = "liking-control";

  const range = document.createElement("input");
  range.className = "liking-range";
  range.type = "range";
  range.min = "0";
  range.max = String(screen.choices.length - 1);
  range.setAttribute("aria-label", `${getRowTitleKo(row.title)} / ${row.title} liking answer`);

  const slider = document.createElement("div");
  slider.className = "face-slider";
  slider.setAttribute("aria-hidden", "true");

  const rail = document.createElement("div");
  rail.className = "face-rail";

  const stops = document.createElement("div");
  stops.className = "face-stops";
  screen.choices.forEach(() => {
    stops.append(document.createElement("span"));
  });

  const thumb = createRatingFace("3", "thumb");

  slider.append(rail, stops, thumb);
  sliderControl.append(range, slider);

  const labels = document.createElement("div");
  labels.className = "scale-labels numeric";
  labels.append(makeChoiceLabel(screen, screen.choices[0]), makeChoiceLabel(screen, screen.choices[screen.choices.length - 1]));

  control.append(readout, sliderControl, labels);

  const selectedIndex = getChoiceIndex(screen.choices, state.answers[row.id]);
  const initialIndex = selectedIndex >= 0 ? selectedIndex : Math.floor((screen.choices.length - 1) / 2);
  updateLikingScale(control, screen.choices, initialIndex, selectedIndex >= 0);

  let lastAdvancedChoice = selectedIndex >= 0 ? screen.choices[selectedIndex] : null;
  const commit = (shouldAdvance) => {
    const choice = screen.choices[Number(range.value)];
    commitMatrixAnswer(row.id, choice);
    updateLikingScale(control, screen.choices, Number(range.value), true);
    updateNavigation(screen);
    if (shouldAdvance && lastAdvancedChoice !== choice) {
      lastAdvancedChoice = choice;
      advanceMatrixFlow(rowIndex, rowEls);
    }
  };

  range.addEventListener("input", () => commit(false));
  range.addEventListener("change", () => commit(true));
  range.addEventListener("pointerup", () => commit(true));
  range.addEventListener("keyup", (event) => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Enter", " "].includes(event.key)) {
      commit(event.key === "Enter" || event.key === " ");
    }
  });

  return control;
}

function updateLikingScale(control, choices, index, selected) {
  const safeIndex = Math.max(0, Math.min(index, choices.length - 1));
  const selectedValue = choices[safeIndex];
  const range = control.querySelector(".liking-range");
  const valueText = control.querySelector(".scale-value");
  const thumb = control.querySelector(".rating-face-thumb");
  const position = choices.length > 1 ? (safeIndex / (choices.length - 1)) * 100 : 0;

  control.classList.toggle("is-empty", !selected);
  control.style.setProperty("--pos", `${position}%`);
  if (range) {
    range.value = String(safeIndex);
  }
  if (valueText) {
    valueText.textContent = selectedValue;
  }
  if (thumb) {
    choices.forEach((choice) => thumb.classList.remove(`value-${choice}`));
    thumb.classList.add(`value-${selectedValue}`);
  }
}

function createMarkerScale(screen, row, rowIndex, rowEls) {
  const control = document.createElement("div");
  control.className = `marker-scale answer-scale${isColoredMarkerScale(screen) ? " is-quality-scale" : ""}`;
  control.dataset.scaleTone = screen.scaleTone || "neutral";

  const readout = document.createElement("div");
  readout.className = "scale-readout";
  const valueText = document.createElement("strong");
  valueText.className = "scale-value";
  readout.append(valueText);

  const rail = document.createElement("div");
  rail.className = "marker-rail";
  rail.style.setProperty("--count", String(screen.choices.length));
  rail.setAttribute("role", "radiogroup");
  rail.setAttribute("aria-label", `${getRowTitleKo(row.title)} / ${row.title} answer`);

  screen.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "marker-button";
    button.dataset.value = choice;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-label", `${getChoiceKo(choice)} / ${choice}`);
    button.addEventListener("click", () => {
      commitMatrixAnswer(row.id, choice);
      updateMarkerScale(control, screen.choices, choiceIndex);
      updateNavigation(screen);
      advanceMatrixFlow(rowIndex, rowEls);
    });
    rail.append(button);
  });

  const labels = document.createElement("div");
  labels.className = "scale-labels";
  labels.append(makeChoiceLabel(screen, screen.choices[0]), makeChoiceLabel(screen, screen.choices[screen.choices.length - 1]));

  control.append(readout, rail, labels);

  const selectedIndex = getChoiceIndex(screen.choices, getStoredChoiceAnswer(screen, row.id));
  updateMarkerScale(control, screen.choices, selectedIndex);

  return control;
}

function updateMarkerScale(control, choices, selectedIndex) {
  const safeIndex = selectedIndex >= 0 ? selectedIndex : -1;
  const valueText = control.querySelector(".scale-value");
  control.classList.toggle("is-empty", safeIndex < 0);
  if (safeIndex >= 0 && isColoredScaleTone(control.dataset.scaleTone)) {
    const tone = markerScaleColor(safeIndex, choices.length, control.dataset.scaleTone);
    control.style.setProperty("--marker-selected-color", tone.color);
    control.style.setProperty("--marker-selected-shadow", tone.shadow);
  } else {
    control.style.removeProperty("--marker-selected-color");
    control.style.removeProperty("--marker-selected-shadow");
  }
  if (valueText) {
    if (safeIndex >= 0) {
      setBilingualContent(valueText, getChoiceKo(choices[safeIndex]), choices[safeIndex], {
        koClass: "scale-value-ko",
        enClass: "scale-value-en"
      });
    } else {
      valueText.textContent = "";
    }
  }
  control.querySelectorAll(".marker-button").forEach((button, index) => {
    const selected = index === safeIndex;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-checked", selected ? "true" : "false");
  });
}

function makeLabel(text) {
  const label = document.createElement("span");
  label.textContent = text;
  return label;
}

function makeChoiceLabel(screen, choice) {
  const label = document.createElement("span");
  label.className = "choice-label";
  setBilingualContent(label, getChoiceKo(choice), choice, {
    koClass: "choice-label-ko",
    enClass: "choice-label-en"
  });
  return label;
}

function getChoiceIndex(choices, value) {
  return choices.findIndex((choice) => choice === value);
}

function getStoredChoiceAnswer(screen, answerId) {
  const answer = state.answers[answerId] || "";
  return screen?.choices?.includes(answer) ? answer : "";
}

function isColoredMarkerScale(screen) {
  return isColoredScaleTone(screen.scaleTone);
}

function isColoredScaleTone(scaleTone) {
  return scaleTone === SCALE_TONE_QUALITY || scaleTone === SCALE_TONE_IDEAL_CENTER;
}

function markerScaleColor(index, count, scaleTone) {
  return scaleTone === SCALE_TONE_IDEAL_CENTER
    ? idealCenterScaleColor(index, count)
    : qualityScaleColor(index, count);
}

function qualityScaleColor(index, count) {
  const palette = [
    ["#c84f43", "rgba(200, 79, 67, 0.22)"],
    ["#d8763d", "rgba(216, 118, 61, 0.2)"],
    ["#c39b38", "rgba(195, 155, 56, 0.19)"],
    ["#789f55", "rgba(120, 159, 85, 0.2)"],
    ["#338c66", "rgba(51, 140, 102, 0.21)"],
    ["#007070", "rgba(0, 112, 112, 0.22)"]
  ];
  if (count <= 1) {
    return { color: palette[palette.length - 1][0], shadow: palette[palette.length - 1][1] };
  }
  const paletteIndex = Math.round((index / (count - 1)) * (palette.length - 1));
  const [color, shadow] = palette[Math.max(0, Math.min(paletteIndex, palette.length - 1))];
  return { color, shadow };
}

function idealCenterScaleColor(index, count) {
  const palette = [
    ["#c84f43", "rgba(200, 79, 67, 0.22)"],
    ["#d8763d", "rgba(216, 118, 61, 0.2)"],
    ["#b99a3a", "rgba(185, 154, 58, 0.19)"],
    ["#007070", "rgba(0, 112, 112, 0.22)"],
    ["#b99a3a", "rgba(185, 154, 58, 0.19)"],
    ["#d8763d", "rgba(216, 118, 61, 0.2)"],
    ["#c84f43", "rgba(200, 79, 67, 0.22)"]
  ];
  if (count === palette.length) {
    const [color, shadow] = palette[Math.max(0, Math.min(index, palette.length - 1))];
    return { color, shadow };
  }
  const center = (count - 1) / 2;
  const distance = Math.abs(index - center) / Math.max(1, center);
  const paletteIndex = Math.round(distance * (palette.length / 2 - 1));
  const [color, shadow] = [palette[3 + paletteIndex]?.[0] || palette[0][0], palette[3 + paletteIndex]?.[1] || palette[0][1]];
  return { color, shadow };
}

function commitMatrixAnswer(rowId, choice) {
  state.answers[rowId] = choice;
  saveAnswers();
}

function advanceMatrixFlow(rowIndex, rowEls) {
  if (rowIndex < rowEls.length - 1) {
    scrollContentToElement(rowEls[rowIndex + 1]);
  } else {
    scrollContentToBottom();
  }
}

function scrollContentToElement(element) {
  const renderToken = state.renderToken;
  requestAnimationFrame(() => {
    if (renderToken !== state.renderToken) {
      return;
    }
    const containerRect = els.content.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const targetTop = els.content.scrollTop + elementRect.top - containerRect.top - 16;
    els.content.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  });
}

function scrollContentToBottom() {
  const renderToken = state.renderToken;
  requestAnimationFrame(() => {
    if (renderToken !== state.renderToken) {
      return;
    }
    els.content.scrollTo({ top: els.content.scrollHeight, behavior: "smooth" });
  });
}

function updateNavigation(screen = currentScreen()) {
  const isStart = screen.type === "Start";
  const isAgreement = screen.id === "agreement";
  els.bottomNav.hidden = isStart;
  els.bottomNav.classList.toggle("no-actions", false);
  els.navActions.hidden = isStart;
  if (isStart) {
    return;
  }
  setNextButtonMode(isAgreement ? "agreement" : "default");
  if (isAgreement) {
    els.back.disabled = true;
    els.next.disabled = false;
    els.next.setAttribute("aria-label", "동의합니다 / I Agree");
    return;
  }
  els.back.disabled = state.index <= 1 || state.submitting;
  els.next.disabled = state.submitting || (screen.type === "Submit" && state.submitted);
  els.next.setAttribute("aria-label", screen.type === "Submit" ? "제출 / Submit" : "Next");
}

function setNextButtonMode(mode) {
  const isAgreement = mode === "agreement";
  els.next.classList.toggle("agreement-confirm", isAgreement);
  if (isAgreement) {
    setBilingualContent(els.next, "동의합니다", "I Agree", {
      koClass: "button-ko",
      enClass: "button-en"
    });
  } else if (els.next.dataset.mode === "agreement") {
    els.next.innerHTML = NEXT_BUTTON_ICON;
  }
  els.next.dataset.mode = mode;
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
  setBilingualContent(copy, getLocalizedScreen(currentScreen()).subtitle, "Please submit your response when you are ready.", {
    koClass: "copy-ko",
    enClass: "copy-en"
  });

  const button = document.createElement("button");
  button.type = "button";
  button.className = `submit-button${state.submitting ? " is-submitting" : ""}${state.submitted ? " is-submitted" : ""}`;
  button.disabled = state.submitting || state.submitted;
  button.setAttribute("aria-busy", state.submitting ? "true" : "false");
  button.addEventListener("click", submitSurvey);

  const buttonLabel = document.createElement("span");
  buttonLabel.className = "submit-button-label";
  setBilingualContent(buttonLabel, state.submitting ? "제출 중..." : state.submitted ? "제출 완료" : "제출", state.submitting ? "Submitting..." : state.submitted ? "Submitted" : "Submit", {
    koClass: "button-ko",
    enClass: "button-en"
  });
  button.append(buttonLabel);

  const status = document.createElement("div");
  status.className = `submit-status${state.submitError ? " error" : ""}`;
  status.id = "submitStatus";
  status.setAttribute("aria-live", "polite");
  status.textContent = state.submitMessage;

  els.content.append(copy, button, status);
}

function renderText(text, className) {
  const node = document.createElement("p");
  node.className = className;
  appendLinkedText(node, text);
  return node;
}

function appendLinkedText(node, text) {
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
}

async function submitSurvey() {
  if (state.submitting || state.submitted) {
    return;
  }

  if (!canUseSharePointBackend() && !getEndpoint()) {
    updateSubmitStatus("현재 제출을 사용할 수 없습니다. 설문 관리자에게 문의해 주세요.\nSubmission is not available right now. Please contact the survey administrator.", true);
    return;
  }

  state.submitting = true;
  state.submitMessage = "응답을 제출하는 중입니다. 잠시만 기다려 주세요.\nSending your response. Please wait.";
  state.submitError = false;
  render();

  const payload = buildPayload();
  const body = JSON.stringify(payload);

  try {
    if (canUseSharePointBackend()) {
      await submitToSharePoint(payload);
      state.submitted = true;
      state.submitMessage = "응답이 제출되었습니다. 감사합니다.\nYour response has been submitted. Thank you.";
    } else {
      await submitToPowerAutomate(body);
      state.submitted = true;
      state.submitMessage = "응답이 제출되었습니다. 감사합니다.\nYour response has been submitted. Thank you.";
    }
    localStorage.removeItem(ANSWER_STORAGE_KEY);
  } catch (error) {
    const endpoint = getEndpoint();
    const sent = endpoint && navigator.sendBeacon
      ? navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain;charset=UTF-8" }))
      : false;
    if (sent) {
      state.submitted = true;
      state.submitMessage = "응답이 제출되었습니다. 감사합니다.\nYour response has been submitted. Thank you.";
      localStorage.removeItem(ANSWER_STORAGE_KEY);
    } else {
      state.submitError = true;
      state.submitMessage = `제출을 완료하지 못했습니다. 다시 시도해 주세요.\nSubmission could not be completed. Please try again. (${error.message})`;
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
  const submittedDate = new Date();
  const submittedAt = formatKoreaTimestamp(submittedDate);
  const submittedAtUtc = submittedDate.toISOString();
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

    if (screen.type === "Question.ScaleChoice") {
      const answer = getStoredChoiceAnswer(screen, screen.id);
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
      const storageTitle = screen.legacyTitle || screen.title;
      answersByQuestion[screen.id] = {
        questionId: screen.id,
        questionTitle: screen.title,
        rows: {}
      };
      screen.rows.forEach((row) => {
        const answer = getStoredChoiceAnswer(screen, row.id);
        answerColumnIndex += 1;
        surveyDbRow[columnHeader(answerColumnIndex, storageTitle, row.title)] = answer;
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
    submittedAtUtc,
    formTitle: SURVEY.title,
    sourceFormUrl: SOURCE_FORM_URL,
    answerRowCount: flatRows.length,
    answeredRowCount: flatRows.filter((row) => String(row.answer || "").trim()).length,
    tester: {
      name: state.answers.ref10a028774947e4b02ebad4c50c8406 || "",
      normalTrailShoe: state.answers.r8cd399d5613b4743866237999b83cbc8 || "",
      typicalDistance: getStoredChoiceAnswer(getScreenById("r59ead437294c42b49564b9eedb65d6d7"), "r59ead437294c42b49564b9eedb65d6d7")
    },
    answers: answersByQuestion,
    flatRows,
    surveyDbRow
  };
}

function getScreenById(id) {
  return SURVEY.screens.find((screen) => screen.id === id);
}

function formatKoreaTimestamp(date) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: KOREA_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });
  const parts = Object.fromEntries(
    formatter
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value])
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} KST`;
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
