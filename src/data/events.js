import { IMAGES } from '../lib/images.js';

export const schoolEvents = [
  // ── FESTIVALS & TRADITIONS ───────────────────────────────────────
  {
    id: "fest-01",
    category: "festivals",
    title_en: "Dahi Handi Celebration",
    title_mr: "गोपाळकाला (दहीहंडी)",
    desc_en: "Students celebrating the spirit of unity and joy during the Dahi Handi festival.",
    desc_mr: "शाळेत गोपाळकाला व दहीहंडी सण मोठ्या उत्साहात साजरा केला जातो.",
    imageId: IMAGES.festivals?.dahiHandi || "pkmv/festivals/dahi-handi",
  },
  {
    id: "fest-02",
    category: "festivals",
    title_en: "Diwali Festivities",
    title_mr: "दिवाळी",
    desc_en: "Celebrating the festival of lights, bringing vibrant energy to our campus.",
    desc_mr: "शाळेत दिवाळी सण आनंदाने आणि उत्साहाने साजरा केला जातो.",
    imageId: IMAGES.festivals?.diwali || "pkmv/festivals/diwali",
  },
  {
    id: "fest-03",
    category: "festivals",
    title_en: "Bhondla Celebration",
    title_mr: "भोंडला",
    desc_en: "Cultural songs and traditional dances performed by the students.",
    desc_mr: "शाळेत भोंडला हा पारंपारिक सण साजरा केला जातो.",
    imageId: IMAGES.festivals?.bhondla || "pkmv/festivals/bhondla",
  },
  {
    id: "fest-04",
    category: "festivals",
    title_en: "Ashadi Ekadashi",
    title_mr: "आषाढी एकादशी",
    desc_en: "Spiritual walks and traditional attire to mark the holy day of Ashadi Ekadashi.",
    desc_mr: "आषाढी एकादशी निमित्त विद्यार्थी पारंपारिक वेशभूषेत सहभागी होतात.",
    imageId: IMAGES.festivals?.ashadiEkadashi || "pkmv/festivals/ashadi-ekadashi",
  },

  // ── SPORTS & ATHLETICS ───────────────────────────────────────────
  {
    id: "sport-01",
    category: "sports",
    title_en: "State-Level Sports 2025",
    title_mr: "राज्यस्तरीय क्रीडा स्पर्धा २०२५",
    desc_en: "Our athletes actively participate in district and state-level competitions. Notably, Vaibhav Dubey represented the school at the 2025 State-Level competition in Nagpur.",
    desc_mr: "विद्यार्थी तालुका, जिल्हा व राज्यस्तरीय क्रीडा स्पर्धेमध्ये भाग घेतात. २०२५ या वर्षी नागपूर येथे राज्यस्तरीय स्पर्धेमध्ये शाळेतील वैभव दुबे या विद्यार्थ्यांने सहभाग घेतला.",
    imageId: IMAGES.bento?.sports || "pkmv/sports/state-level",
  },
  {
    id: "sport-02",
    category: "sports",
    title_en: "World Disability Day Sports Meet",
    title_mr: "वार्षिक क्रिडा महोत्सव",
    desc_en: "Annual district-level sports festival organized on December 3rd to mark World Disability Day.",
    desc_mr: "३ डिसेंबर जागतिक दिव्यांग दिनानिमित्त जिल्हास्तरीय क्रीडा महोत्सवाचे आयोजन केले जाते.",
    imageId: IMAGES.bento?.sportsMeet || "pkmv/sports/annual-meet",
  },

  // ── ECO & PROJECT-BASED LEARNING ─────────────────────────────────
  {
    id: "eco-01",
    category: "eco",
    title_en: "Tree Plantation Drives",
    title_mr: "वृक्षारोपन प्रकल्प",
    desc_en: "Students connect with nature by planting and nurturing fruit-bearing trees like mango, coconut, and guava on the school premises.",
    desc_mr: "विद्यार्थ्यांना वृक्षारोपन, फळभाज्या, फळझाडे यांचे शिक्षण देवून गेल्या ५ वर्षात शाळेच्या आवारातील सिताफळ, पेरू, आंबा, नारळ इ. झाडे लावली आहेत.",
    imageId: IMAGES.bento?.projectLearning || "pkmv/eco/tree-plantation",
  },

  // ── SKILLS & VOCATIONAL TRAINING ─────────────────────────────────
  {
    id: "skill-01",
    category: "skills",
    title_en: "Computer & Technical Training",
    title_mr: "संगणक प्रशिक्षण",
    desc_en: "Equipping students with essential computer skills for a self-reliant future in the digital age.",
    desc_mr: "विद्यार्थ्यांना संगणक प्रशिक्षण दिले जाते ज्यामुळे ते तंत्रज्ञानाशी जोडले जातात.",
    imageId: IMAGES.bento?.skillDevelopment || "pkmv/skills/computer",
  },
  {
    id: "skill-02",
    category: "skills",
    title_en: "Handicrafts & Tailoring",
    title_mr: "हस्तकला आणि शिवणकला",
    desc_en: "Vocational training in handicrafts, art, and sewing to foster independence and creativity.",
    desc_mr: "हस्तकला कलाकुसर वर्ग व शिवणकला प्रशिक्षण दिले जाते.",
    imageId: IMAGES.bento?.tailoring || "pkmv/skills/tailoring",
  },
  {
    id: "misc-03",
    category: "skills",
    title_en: "Art Exhibition & Handicraft Sales",
    title_mr: "कलाप्रदर्शन व विक्रीकर मेळावा",
    desc_en: "Taluka and District-level exhibitions where students proudly showcase and sell the crafts they have created.",
    desc_mr: "तालुका व जिल्हास्तरीय दिव्यांग विक्रीकर मेळावा मध्ये विद्यार्थ्यांनी बनवलेल्या विविध वस्तूंचे प्रदर्शन मांडले जाते.",
    imageId: IMAGES.bento?.exhibition || "pkmv/skills/art-exhibition",
  },

  // ── EXCURSIONS & TRIPS ───────────────────────────────────────────
  {
    id: "trip-01",
    category: "trips",
    title_en: "Educational Excursions",
    title_mr: "शैक्षणिक सहल",
    desc_en: "Expanding horizons beyond the classroom with trips to Monteria Village, Sonya Village, and various historical sites.",
    desc_mr: "विद्यार्थ्यांना ऐतिहासिक स्थळे, उद्योगांना भेटी देण्यासाठी तसेच MONTERIA VILLAGE आणि सोन्या विलेज येथे शैक्षणिक सहल आयोजन केले जाते.",
    imageId: IMAGES.bento?.excursions || "pkmv/trips/monteria",
  },

  // ── HEALTH & TECHNOLOGY ──────────────────────────────────────────
  {
    id: "misc-01",
    category: "health",
    title_en: "Biometric Attendance System",
    title_mr: "बायोमेट्रीक हजेरी",
    desc_en: "Ensuring student safety and regular attendance through state-of-the-art biometric technology.",
    desc_mr: "शिक्षक व विद्यार्थी यांच्यासाठी आधुनिक बायोमेट्रीक हजेरी प्रणाली.",
    imageId: IMAGES.holistic?.classroom || "pkmv/tech/biometric",
  },
  {
    id: "misc-02",
    category: "health",
    title_en: "Biannual Medical Checkups",
    title_mr: "आरोग्य तपासणी",
    desc_en: "Regular health and medical evaluations conducted twice a year by expert doctors.",
    desc_mr: "उल्हासनगर महानगरपालिका तर्फे तज्ञ डॉक्टरांकडून, वर्षातून दोनदा वैद्यकीय/आरोग्य तपासणी केली जाते.",
    imageId: IMAGES.bento?.healthTech || "pkmv/health/medical-camp",
  }
];