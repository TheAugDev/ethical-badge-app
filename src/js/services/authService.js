import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithCustomToken,
} from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';
import { Timestamp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';
import {
  saveUserDataToFirestore,
  loadUserDataFromFirestore,
  getOfficerData,
  updateLocalOfficerData,
} from './firestoreService.js';
import { initializeOfficerDashboard } from '../ui/dashboard.js';
import { initializeTcoleHub } from '../ui/tcoleHub.js';
import { updateActiveLink } from '../ui/navigation.js';

let currentUser = null;

export function getCurrentUser() {
  return currentUser;
}

export function initializeAuth(authInstance, dbInstance, onLogin, onLogout, onAppReady) {
  const loginOverlay = document.getElementById('loginOverlay');
  const headerEl = document.querySelector('header');
  const mainContentEl = document.querySelector('main');
  const loginNameInput = document.getElementById('loginName');
  const loginEmailInput = document.getElementById('loginEmail');
  const loginPasswordInput = document.getElementById('loginPassword');
  const authMessageEl = document.getElementById('authMessage');
  const registerButton = document.getElementById('registerButton');
  const loginButton = document.getElementById('loginButton');
  const logoutButton = document.getElementById('logoutButton');
  const mobileLogoutButton = document.getElementById('mobileLogoutButton');
  const headerOfficerNameEl = document.getElementById('headerOfficerName');

  onAuthStateChanged(authInstance, async (user) => {
    if (user) {
      currentUser = user;
      const localOfficerData = getOfficerData();
      localOfficerData.uid = user.uid;
      localOfficerData.email = user.email;
      localOfficerData.name =
        user.displayName ||
        (loginNameInput && loginNameInput.value.trim() ? loginNameInput.value.trim() : 'Officer');
      updateLocalOfficerData(localOfficerData); // Update the shared state

      if (loginOverlay) loginOverlay.classList.add('hidden');
      if (headerEl) headerEl.classList.remove('hidden');
      if (mainContentEl) mainContentEl.classList.remove('hidden');
      if (headerOfficerNameEl) {
        headerOfficerNameEl.textContent = `Officer ${localOfficerData.name.split(' ').pop()}`;
        headerOfficerNameEl.classList.remove('hidden');
      }

      await loadUserDataFromFirestore(dbInstance, user.uid); // Load user-specific data
      onAppReady(); // Call to initialize all UI components that depend on user data
      console.log('User logged in:', user.email, 'UID:', user.uid);
    } else {
      currentUser = null;
      const localOfficerData = getOfficerData();
      localOfficerData.uid = null;
      localOfficerData.email = null;
      localOfficerData.name = 'Officer';
      localOfficerData.completedHours = 0;
      localOfficerData.manuallyLoggedTrainings = [];
      updateLocalOfficerData(localOfficerData);

      if (loginOverlay) loginOverlay.classList.remove('hidden'); // Show login overlay
      if (headerEl) headerEl.classList.add('hidden');
      if (mainContentEl) mainContentEl.classList.add('hidden');
      if (headerOfficerNameEl) headerOfficerNameEl.classList.add('hidden');
      if (authMessageEl) authMessageEl.textContent = '';
      if (loginEmailInput) loginEmailInput.value = '';
      if (loginPasswordInput) loginPasswordInput.value = '';
      if (loginNameInput) loginNameInput.value = '';
      console.log('User logged out.');
      if (loginOverlay) loginOverlay.style.display = 'flex'; // Ensure login is visible on logout
    }
  });

  // Attempt to sign in with custom token or anonymously on load
  (async () => {
    try {
      const userToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
      if (userToken) {
        console.log('Attempting to sign in with custom token...');
        await signInWithCustomToken(authInstance, userToken);
        // onAuthStateChanged will handle the rest
      } else {
        console.log('No initial auth token. User needs to login/register.');
        if (loginOverlay) loginOverlay.style.display = 'flex';
      }
    } catch (error) {
      console.error('Error during initial auth:', error);
      if (loginOverlay) loginOverlay.style.display = 'flex';
    }
  })();

  if (registerButton) {
    registerButton.addEventListener('click', async () => {
      const email = loginEmailInput.value;
      const password = loginPasswordInput.value;
      const name = loginNameInput.value.trim();
      if (!email || !password || !name) {
        if (authMessageEl) {
          authMessageEl.textContent = 'Please fill in all fields.';
          authMessageEl.className = 'form-message error';
        }
        return;
      }
      if (password.length < 6) {
        if (authMessageEl) {
          authMessageEl.textContent = 'Password should be at least 6 characters.';
          authMessageEl.className = 'form-message error';
        }
        return;
      }
      if (authMessageEl) authMessageEl.textContent = 'Registering...';
      authMessageEl.className = 'form-message';
      try {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        await updateProfile(userCredential.user, { displayName: name });

        const officerDataDefaults = getOfficerData(); // Get defaults
        await saveUserDataToFirestore(dbInstance, userCredential.user.uid, {
          name: name,
          email: email,
          tcolePID: officerDataDefaults.tcolePID,
          manuallyLoggedTrainings: [],
          currentUnit: officerDataDefaults.currentUnit,
          createdAt: Timestamp.now(),
        });
        if (authMessageEl) {
          authMessageEl.textContent = 'Registration successful! Logging in...';
          authMessageEl.className = 'form-message success';
        }
        // onAuthStateChanged will handle UI update by calling handleUserLogin
      } catch (error) {
        console.error('Registration error:', error);
        if (authMessageEl) {
          authMessageEl.textContent = `Registration failed: ${error.message}`;
          authMessageEl.className = 'form-message error';
        }
      }
    });
  }

  if (loginButton) {
    loginButton.addEventListener('click', async () => {
      const email = loginEmailInput.value;
      const password = loginPasswordInput.value;
      if (!email || !password) {
        if (authMessageEl) {
          authMessageEl.textContent = 'Please enter email and password.';
          authMessageEl.className = 'form-message error';
        }
        return;
      }
      if (authMessageEl) authMessageEl.textContent = 'Logging in...';
      authMessageEl.className = 'form-message';
      try {
        await signInWithEmailAndPassword(authInstance, email, password);
        if (authMessageEl) authMessageEl.textContent = '';
        // onAuthStateChanged will handle UI update by calling handleUserLogin
      } catch (error) {
        console.error('Login error:', error);
        if (authMessageEl) {
          authMessageEl.textContent = `Login failed: ${error.message}`;
          authMessageEl.className = 'form-message error';
        }
      }
    });
  }

  function performLogout() {
    signOut(authInstance).catch((error) => console.error('Logout error:', error));
  }
  if (logoutButton) logoutButton.addEventListener('click', performLogout);
  if (mobileLogoutButton) mobileLogoutButton.addEventListener('click', performLogout);
}
