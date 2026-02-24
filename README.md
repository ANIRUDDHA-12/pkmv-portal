# 🏫 Pragnya Karuna Mook Badhir Vidyalaya — School Portal

> Official website for **Pragnya Karuna Mook Badhir Vidyalaya**, a specialized school for hearing and speech impaired children in Ulhasnagar, Maharashtra. Run by *Samishra Apang Punarvasan Shikshan Prasarak Sanstha* since **1981**.

---

## 🌐 Live Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/about` | About Us |
| `/academics` | Academics & Therapies |
| `/therapies` | Therapies (legacy) |
| `/student-life` | Student Life & Gallery |
| `/contact` | Contact Us |

---

## ✨ Key Features

### 🔀 Fully Bilingual (EN / मराठी)
- Global `LanguageContext` wraps the entire app
- **English is the default** — one click toggles to Marathi
- Every page, card, tab, modal, and form field is translated via a centralized `translations.js` dictionary
- Safe `t(section, key)` helper with dot-notation support (`t('studentLife.tabs', 'all')`) and fallback to key name on missing translations

### 🏠 Homepage
- **Hero Section** — school banner with Cloudinary image, animated CTA
- **Stats Strip** — key numbers (students, alumni, years of service)
- **Holistic Development** — overview section
- **Bento Grid** — 7 interactive cards (Classrooms, Skills, Festivals, Eco, Sports, Health, Excursions) each linking to the relevant gallery tab

### 📖 About Us (`/about`)
- Legacy hero banner with trust badges (Society Reg + Public Trust No.)
- Philosophy & Methodology two-column split
- Leadership Matrix — 9 management members with bilingual names/roles ; prefix-aware `getInitials()` strips Indian honorifics
- Faculty Directory — 6 staff members with department colour badges

### 🎓 Academics & Therapies (`/academics`)
- 3-section zig-zag layout (text ↔ image alternating columns)
- Sections: Educational Approach · Speech & Audiology · Vocational Training
- Real Cloudinary images for each section

### 🎭 Student Life (`/student-life`)
- 7-tab gallery (All, Festivals, Sports, Skills, Eco, Excursions, Health)
- URL-synced filtering (`?category=sports`) — shareable and bookmarkable
- **Deep-dive modal** — click any card to see full image + description in active language only
- Smooth `AnimatePresence` tab transitions + body scroll lock

### 📞 Contact Us (`/contact`)
- Split layout: info cards (Address, Phone, Hours) + Google Maps embed
- Bilingual contact form with controlled state, validation, and success flash

### 🔗 Header & Footer
- Sticky glass-morphism header with `backdrop-blur`
- Active-page highlight on all 6 nav links
- Footer quick links are real `<Link>` components with bilingual labels
- Language toggle shows **EN | मराठी** with active language in bold

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 5 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Images | Cloudinary (`@cloudinary/react`) |
| i18n | Custom `LanguageContext` + `translations.js` |

---

## 📁 Project Structure

```
src/
├── context/
│   └── LanguageContext.jsx     # Global EN/MR toggle, t() helper
├── locales/
│   └── translations.js         # Single source of truth for all UI text
├── data/
│   ├── about.js                # Management & staff bilingual data
│   └── events.js               # School events with Cloudinary image IDs
├── lib/
│   ├── cloudinary.js           # Cloudinary SDK init
│   └── images.js               # Cloudinary public ID registry
├── components/
│   ├── Header.jsx              # Sticky nav with language toggle
│   ├── Footer.jsx              # Contact info + quick links
│   ├── HeroSection.jsx
│   ├── StatsStrip.jsx
│   ├── HolisticDevelopment.jsx
│   ├── BentoGrid.jsx           # 7-card interactive grid
│   └── CloudinaryImage.jsx     # Optimised image wrapper
├── pages/
│   ├── AboutUs.jsx
│   ├── Academics.jsx
│   ├── ContactUs.jsx
│   ├── StudentLife.jsx         # Gallery + modal
│   └── Therapies.jsx
├── App.jsx                     # Homepage layout
└── router.jsx                  # Routes + LanguageProvider wrapper
```

---

## ⚡ Getting Started

```bash
# Install dependencies
npm install

# Copy env template and add your Cloudinary cloud name
cp .env.example .env

# Start dev server
npm run dev
```

The app runs at **`http://localhost:5173`** by default.

### Environment Variables

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

---

## 🌩 Cloudinary Setup

All images are served through Cloudinary for automatic optimisation and responsive delivery.

1. Upload your images to Cloudinary
2. Copy the **Public ID** of each image
3. Update `src/lib/images.js` with the correct public IDs

```js
// src/lib/images.js
export const IMAGES = {
  hero:     { illustration: 'your-public-id' },
  holistic: { classroom:    'your-public-id' },
  therapies:{ audiology:    'your-public-id' },
  // ...
};
```

---

## 🌍 Adding a New Translation Key

1. Open `src/locales/translations.js`
2. Add the key to **both** `en` and `mr` objects under the appropriate section
3. Use `t('section', 'key')` in any component after calling `const { t } = useLanguage()`

```js
// translations.js
en: { contact: { newKey: "English text" } }
mr: { contact: { newKey: "मराठी मजकूर" } }

// Component
const { t } = useLanguage();
<p>{t('contact', 'newKey')}</p>
```

---

## 📜 License

© 2026 Pragnya Karuna Mook Badhir Vidyalaya. All rights reserved.

*Built by Aniruddha P for the students and staff of PKMV, Ulhasnagar.*
