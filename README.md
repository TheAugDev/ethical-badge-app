# Ethical Badge - Texas LEO Professional Development Hub

## Project Description

Ethical Badge is a single-page web application (SPA) designed as a comprehensive professional development hub for Law Enforcement Officers (LEOs) in Texas. It aims to provide easy access to TCOLE compliance tracking (manual for MVP), ethical principles, case studies with AI-powered analysis, Texas legal references, practical field toolkit items (including interactive and AI-generated scenarios), and officer wellness resources.

This MVP (Minimum Viable Product) is built with HTML, Tailwind CSS, and vanilla JavaScript, with a conceptual integration path for a Firebase backend (Authentication and Firestore).

## Features

* **Officer Dashboard:** Quick overview of TCOLE compliance, latest legal updates, and a "Dilemma of the Week" with AI discussion points.
* **TCOLE Hub:** Manual logging of completed training hours and tracking against TCOLE mandates.
* **Ethical Core:** Access to fundamental ethical principles and in-depth Texas-specific case studies with optional AI analysis.
* **Texas Law & Policy:** Searchable summaries of key Texas statutes with direct links to official sources.
* **Field Toolkit:** Interactive ethical scenarios with scoring, AI-generated scenarios for novel challenges, and quick field guides (SFST, Miranda, Use of Force).
* **Officer Wellness:** Resources for stress management and resilience.
* **External Resources:** Links to relevant LEO organizations and further reading.
* **AI Integration (Gemini API):**
    * AI analysis for case studies.
    * AI discussion points for the "Dilemma of the Week."
    * AI generation of new ethical scenarios.
* **Mobile-First Responsive Design:** Optimized for use on various devices.
* **Firebase Ready:** Structured for future integration with Firebase Authentication and Firestore for user data persistence and a scalable backend.

## Tech Stack (MVP)

* **Frontend:** HTML, Tailwind CSS, Vanilla JavaScript (ES Modules)
* **Libraries:** Chart.js (for TCOLE progress chart)
* **APIs:** Google Gemini API (for AI features)
* **Conceptual Backend:** Google Firebase (Authentication, Firestore) - *Actual implementation of Firebase backend is a next step.*

## Project Structure

```
ethical-badge-app/
├── index.html                 // Main HTML file
├── README.md                  // This file
├── .gitignore                 // Specifies intentionally untracked files
└── src/
    ├── css/
    │   └── style.css          // Custom CSS and Tailwind directives
    ├── js/
    │   ├── main.js            // Main JavaScript entry point
    │   ├── config/
    │   │   └── firebaseConfig.js // Firebase initialization
    │   ├── services/
    │   │   ├── authService.js   // Firebase Auth logic
    │   │   ├── firestoreService.js // Firestore interaction
    │   │   └── geminiService.js // Gemini API calls
    │   ├── ui/                  // Modules for rendering UI sections
    │   │   ├── navigation.js
    │   │   ├── dashboard.js
    │   │   ├── tcoleHub.js
    │   │   ├── ethicalCore.js
    │   │   ├── texasLaw.js
    │   │   ├── fieldToolkit.js
    │   │   ├── officerWellness.js
    │   │   ├── resources.js
    │   │   └── uiUtils.js       // Common UI helper functions
    │   └── data/
    │       └── staticData.js    // Static content arrays
    └── assets/
        └── icons/               // Placeholder for future image/SVG assets
```

## Setup and Running

1.  **Clone the repository (if applicable) or create the files locally based on the provided structure.**
2.  **Firebase Setup (Future Step for Full Backend):**
    * Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    * Enable Authentication (Email/Password, Google Sign-In).
    * Set up Firestore database.
    * Get your Firebase project configuration (apiKey, authDomain, etc.) and update it in `src/js/config/firebaseConfig.js`.
    * Define Firestore security rules.
3.  **API Keys:**
    * **Gemini API:** You will need a Gemini API key. This is currently hardcoded as an empty string in `src/js/services/geminiService.js` and relies on the Canvas environment to provide it. For local development outside Canvas, you'd need to insert your key there or use a secure method to provide it.
4.  **Open `index.html` in a modern web browser.**
    * Due to the use of ES Modules (`type="module"` in script tags), you might need to serve the files through a local web server for them to work correctly (e.g., using VS Code Live Server extension, Python's `http.server`, or `npx serve`). Simply opening `index.html` directly from the file system might lead to CORS issues with module loading.

## Development Notes

* The current version simulates login and Firebase interactions with `console.log` and local data management for demonstration within a single-file context.
* To make it fully production-ready with data persistence, the Firebase backend integration needs to be completed in `authService.js` and `firestoreService.js`.
* The `__firebase_config` and `__app_id` global variables are placeholders for an environment (like the Canvas) that might provide these. For local development, you'll need to manage your Firebase config directly in `firebaseConfig.js`.

## Production Build & Deployment

### 1. Environment Variables
- Copy `.env.example` to `.env` and fill in your production Firebase and API values.
- **Never commit your real `.env` to version control.**

### 2. Build for Production
```
npx vite build
```
- The optimized static site will be output to the `dist/` directory.

### 3. Deploy
- Deploy the contents of `dist/` to your preferred static hosting provider:
  - [Vercel](https://vercel.com/)
  - [Netlify](https://www.netlify.com/)
  - [Firebase Hosting](https://firebase.google.com/docs/hosting)
  - [GitHub Pages](https://pages.github.com/)
  - Or your own web server

### 4. Testing
- Run all unit tests:
  ```
  npx vitest run
  ```
- Run all end-to-end (E2E) browser tests:
  ```
  npx playwright test
  ```

### 5. Linting & Formatting
- Check code style:
  ```
  npx eslint src/js/**/*.js
  ```
- Format code:
  ```
  npx prettier --write "src/js/**/*.js"
  ```

### 6. Troubleshooting
- If you see any errors, check the browser console and server logs.
- For Firebase or API issues, verify your `.env` values.

---

## Security & Best Practices
- Never expose API keys or secrets in the frontend code or public repos.
- Sanitize all user input and output.
- Monitor for errors in production (consider a service like Sentry).

---

## Contact & Support
For questions or support, open an issue or contact the project maintainer.
