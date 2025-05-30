// Use npm Firebase SDK imports for Vite/production build only
import {
  doc,
  setDoc,
  getDoc,
  Timestamp,
} from 'firebase/firestore';

// Remove appId import and use a static or env value for Firestore path
// import { appId } from '../config/firebaseConfig.js';
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID || '1:73453178206:web:c5e32acdf519899cb493cf';

// Local state for officer data, mirroring what would be in Firestore
let officerDataStore = {
  name: 'Officer',
  email: null,
  uid: null,
  tcolePID: '123456',
  currentUnit: { start: 'Sept 1, 2023', end: 'Aug 31, 2025', requiredHours: 40 },
  completedHours: 0,
  manuallyLoggedTrainings: [],
};

export function getOfficerData() {
  return { ...officerDataStore }; // Return a copy to prevent direct mutation
}

export function updateLocalOfficerData(newData) {
  officerDataStore = { ...officerDataStore, ...newData };
}

export async function loadUserDataFromFirestore(db, userId) {
  if (!userId) {
    console.warn('loadUserDataFromFirestore: No userId provided.');
    return;
  }
  const userDocRef = doc(db, `artifacts/${APP_ID}/users/${userId}/profile`, 'data');
  try {
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      // Update local officerDataStore with fetched data
      officerDataStore.name = data.name || officerDataStore.name; // Keep local if Firestore is empty for name
      officerDataStore.email = data.email || officerDataStore.email;
      officerDataStore.tcolePID = data.tcolePID || officerDataStore.tcolePID;
      officerDataStore.manuallyLoggedTrainings = data.manuallyLoggedTrainings || [];
      officerDataStore.currentUnit = data.currentUnit || officerDataStore.currentUnit;

      officerDataStore.completedHours = 0;
      officerDataStore.manuallyLoggedTrainings.forEach((log) => {
        if (typeof log.hours === 'number') {
          officerDataStore.completedHours += log.hours;
        }
      });
      console.log('User data loaded from Firestore into officerDataStore:', officerDataStore);
    } else {
      console.log(
        'No user profile data found in Firestore for UID:',
        userId,
        '. Using defaults or creating new.'
      );
      // If no profile, ensure local officerDataStore reflects this (it's already default)
      // And save a default profile if it's a truly new user (usually after registration)
      // This part might be better handled in authService after registration success.
      // For now, we assume a profile might be created by authService.
    }
  } catch (error) {
    console.error('Error loading user data from Firestore:', error);
  }
}

export async function saveUserDataToFirestore(db, userId, dataToSave) {
  if (!userId) {
    console.warn('saveUserDataToFirestore: No userId provided.');
    return;
  }
  const userDocRef = doc(db, `artifacts/${APP_ID}/users/${userId}/profile`, 'data');
  try {
    await setDoc(userDocRef, dataToSave, { merge: true });
    console.log('User data saved to Firestore for UID:', userId);
    // Update local store after successful save
    officerDataStore = { ...officerDataStore, ...dataToSave };
    // Recalculate completed hours if trainings were part of the save
    if (dataToSave.manuallyLoggedTrainings) {
      officerDataStore.completedHours = 0;
      officerDataStore.manuallyLoggedTrainings.forEach((log) => {
        if (typeof log.hours === 'number') {
          officerDataStore.completedHours += log.hours;
        }
      });
    }
  } catch (error) {
    console.error('Error saving user data to Firestore:', error);
  }
}

export async function saveTrainingLogToFirestore(db, userId, trainingEntry) {
  if (!userId) {
    console.warn('saveTrainingLogToFirestore: No userId provided.');
    return;
  }
  const currentTrainings = Array.isArray(officerDataStore.manuallyLoggedTrainings)
    ? [...officerDataStore.manuallyLoggedTrainings]
    : [];

  const existingEntryIndex = currentTrainings.findIndex(
    (log) => log.id === trainingEntry.id && !trainingEntry.id.startsWith('custom-')
  );

  if (existingEntryIndex !== -1 && trainingEntry.id.startsWith('tmd')) {
    console.log('Training mandate already logged, not adding duplicate:', trainingEntry.id);
  } else {
    currentTrainings.push(trainingEntry);
  }

  // Update Firestore
  await saveUserDataToFirestore(db, userId, { manuallyLoggedTrainings: currentTrainings });

  // Update local officerDataStore directly after successful save concept
  officerDataStore.manuallyLoggedTrainings = currentTrainings;
  officerDataStore.completedHours = 0;
  officerDataStore.manuallyLoggedTrainings.forEach((log) => {
    if (typeof log.hours === 'number') {
      officerDataStore.completedHours += log.hours;
    }
  });
  // UI update will be triggered by the calling function (e.g., in tcoleHub.js)
}
