// src/js/config/firebaseConfig.js

// Firebase SDK imports (npm version)
// These allow direct use of Firebase functions after initialization.
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// Optionally import other Firebase SDKs as needed
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// --- Firebase Configuration & Initialization ---
// Use environment variables for Firebase config
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyCOrGrejZ1wWDnmUjGF62pYHYddJ4DGUXE',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'ethicalbadgeapp.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'ethicalbadgeapp',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'ethicalbadgeapp.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '73453178206',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:73453178206:web:c5e32acdf519899cb493cf',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-04NG6ESJNV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Optionally export auth and db if needed
// export const auth = getAuth(app);
// export const db = getFirestore(app);
