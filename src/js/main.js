// src/js/main.js

// Firebase SDK Core (auth and db are initialized in firebaseConfig.js)
import { auth, db } from './config/firebaseConfig.js';

// Services
import { initializeAuth } from './services/authService.js';
import { loadUserDataFromFirestore, getOfficerData } from './services/firestoreService.js'; // saveUserDataToFirestore and saveTrainingLogToFirestore are used within other modules
import { callGeminiAPI } from './services/geminiService.js';

// Static Data
import * as StaticData from './data/staticData.js';

// UI Modules
import {
  initializeNavigation,
  updateActiveLink,
  navigateToSection,
  updateHeaderOfficerName,
} from './ui/navigation.js';
import { initializeDashboard, updateDashboardTcoleProgress } from './ui/dashboard.js';
import {
  initializeTcoleHub,
  updateTcoleProgressDisplay as updateTcoleHubProgressDisplay,
  renderTcoleMandates as renderTcoleHubMandates,
} from './ui/tcoleHub.js';
import { initializeEthicalCore } from './ui/ethicalCore.js';
import { initializeTexasLaw } from './ui/texasLaw.js';
import { initializeFieldToolkit } from './ui/fieldToolkit.js';
import { initializeOfficerWellness } from './ui/officerWellness.js';
import { initializeResources } from './ui/resources.js';
import { escapeHtml } from './ui/uiUtils.js'; // Common utilities

// This function will be called by authService after successful login/state change
// It ensures that UI components that depend on user data are initialized or updated.
async function loadInitialAppData() {
  try {
    console.log('loadInitialAppData called. Current Firebase user:', auth.currentUser);
    const currentOfficerData = getOfficerData();
    if (document.getElementById('currentYear')) {
      document.getElementById('currentYear').textContent = new Date().getFullYear();
    }
    initializeDashboard(
      currentOfficerData,
      StaticData.legalUpdatesData,
      StaticData.dilemmaOfTheWeekData,
      callGeminiAPI,
      navigateToSection
    );
    initializeTcoleHub(currentOfficerData, StaticData.tcoleMandatesData, db, escapeHtml);
    initializeEthicalCore(
      StaticData.ethicalPrinciplesData,
      StaticData.caseStudiesData,
      callGeminiAPI,
      escapeHtml
    );
    initializeTexasLaw(StaticData.texasLawData, escapeHtml);
    initializeFieldToolkit(
      StaticData.interactiveScenariosData,
      StaticData.fieldGuidesData,
      callGeminiAPI,
      escapeHtml
    );
    initializeOfficerWellness(StaticData.wellnessResourcesData, escapeHtml);
    initializeResources(StaticData.externalResourcesData, escapeHtml);
    updateHeaderOfficerName(currentOfficerData.name);
    if (auth.currentUser) {
      updateActiveLink();
    }
  } catch (err) {
    alert('An error occurred while loading your data. Please try again or contact support.');
    console.error('Error in loadInitialAppData:', err);
  }
}

// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Firebase Auth State Listener.
  // It will call loadInitialAppData upon successful authentication and data load.
  initializeAuth(
    auth,
    db,
    async (user) => {
      // onLogin callback from authService
      console.log('Main.js: User logged in, loading app data...');
      await loadInitialAppData(); // Load data and initialize UI for the logged-in user
    },
    () => {
      // onLogout callback from authService
      console.log('Main.js: User logged out.');
      // UI is handled by authService on logout (showing login overlay etc.)
    },
    async () => {
      // onAppReady callback (called after initial auth check AND data load)
      console.log('Main.js: App is ready after initial auth and data load.');
      // This is a good place for any final setup that depends on everything being loaded.
    }
  );

  // Make navigateToSection globally available if called from HTML onclick (e.g. quick links)
  window.navigateToSection = navigateToSection;
  window.openUpdateModal = (element) => {
    // For legal updates modal
    const modal = document.getElementById('caseStudyModal');
    const modalTitleEl = document.getElementById('modalTitle');
    const modalBodyEl = document.getElementById('modalBody');
    const closeModalButton = document.getElementById('closeModalButton');
    const aiSection = modal.querySelector('#modalAiAnalysisSection');

    const fullText = element.dataset.fulltext;
    const title = element.dataset.title;
    if (modal && modalTitleEl && modalBodyEl) {
      modalTitleEl.innerHTML = title;
      modalBodyEl.innerHTML = `<div class="prose prose-sm sm:prose-base max-w-none">${fullText.replace(/\n/g, '<br><br>')}</div>`;
      modal.classList.remove('modal-inactive');
      modal.classList.add('modal-active');
      if (closeModalButton) closeModalButton.focus();
      if (aiSection) aiSection.classList.add('hidden'); // Hide AI section for simple updates
    }
  };
});
