# PRD & Knowledge Base: Pragnya Karuna Mook Badhir Vidyalaya

## 1. Project Overview & Agent Directives
* **Goal:** Build a production-ready, desktop-first educational website using React, Vite, Tailwind CSS, and Lucide React.
* **Agent Execution Rules:** * Prioritize CSS Grid for complex layouts (Bento Grid).
  * Use Framer Motion for scroll reveals and hover scale effects.
  * After completing a component, use the Browser agent to launch the app, take a screenshot artifact, and verify the layout against these requirements.
  * Do NOT use placeholder text or generic data; strictly use the data provided in Section 3.

## 2. Design System & UI Architecture
* **Theme:** Teal (`#0F766E`) for primary elements; Sunrise Orange (`#F97316`) for CTAs/Highlights. Backgrounds alternate between White and Soft Mint (`#F0FDF4`).
* **Typography:** Serif (Merriweather) for Headings; Sans-Serif (Inter) for Body.
* **Global Components:**
  * **Header:** Sticky, glassmorphism (`backdrop-blur-md bg-white/80`). Must include navigation links and an "EN | मराठी" language toggle button.
  * **Footer:** Dark Slate background. Must include Trust Signals and Contact Info (see Section 3).

## 3. Verified Institutional Data (Strict Implementation)
* **School Name:** Pragnya Karuna Mook Badhir Vidyalaya
* **Established:** 1981
* **Operating Trust:** Samishra Apang Punarvasan Shikshan Prasarak Sanstha
* **Registration:** Societies Reg No. MAHARASHTRA / 873 / THANE | Public Trust No. F-79
* **Address:** Kurla-Camp Road, Certified School Near, Ulhasnagar - 411004, Dist. Thane
* **Phone:** 0251-2524901

## 4. Homepage Layout Sequence
1. **Hero Section:** Soft teal gradient background. H1: "Empowering Voices Since 1981". CTA Button: "Discover Our Programs" (Orange).
2. **Stats Bar:** Flex row overlapping the Hero bottom. 3 points: "40 Approved Students", "228+ Successful Alumni", "Balvarg to 7th Standard".
3. **Campus Life Bento Grid:** `grid-cols-1 md:grid-cols-3 lg:grid-cols-4`. Cards must have `rounded-2xl` and a hover scale effect.
   * **Card 1 (Span 2x2):** "Specialized Classrooms" (Audiology, Speech Therapy, Cochlear Implant BT1).
   * **Card 2 (Span 2x1):** "Vibrant Traditions" (Dahi Handi, Diwali, Bhondla, Ashadi Ekadashi).
   * **Card 3 (Span 1x2):** "State-Level Athletics" (Running, Long Jump, Shot put, Swimming).
   * **Card 4 (Span 1x1):** "Project-Based Learning" (Tree plantation: Mango, Coconut).
   * **Card 5 (Span 1x1):** "Skill Development" (Computer Training, Handicrafts, Tailoring).
   * **Card 6 (Span 2x1):** "Health & Tech" (Biometric Attendance, Medical Checkups).