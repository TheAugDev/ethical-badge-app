// src/js/ui/tcoleHub.js
import { escapeHtml } from './uiUtils.js';
import { getOfficerData, updateLocalOfficerData } from '../services/firestoreService.js'; // Assuming these exist to manage local state

let localTcoleMandatesData = []; // Declare here, initialize in the function

export function initializeTcoleHub(
  officerDataState,
  staticTcoleMandates,
  saveTrainingLogFn,
  escapeHtmlFn
) {
  console.log('[tcoleHub] initializeTcoleHub entered. staticTcoleMandates:', staticTcoleMandates); // Log 1

  try {
    // Initialize localTcoleMandatesData here, inside the function
    if (staticTcoleMandates && Array.isArray(staticTcoleMandates)) {
      localTcoleMandatesData = JSON.parse(JSON.stringify(staticTcoleMandates));
    } else {
      console.warn('[tcoleHub] initializeTcoleHub: staticTcoleMandates is not a valid array. Defaulting to empty array. Received:', staticTcoleMandates);
      localTcoleMandatesData = [];
    }
    console.log('[tcoleHub] initializeTcoleHub: localTcoleMandatesData after assignment:', JSON.parse(JSON.stringify(localTcoleMandatesData))); // Log 2 - stringify/parse for clean logging of array content
  } catch (e) {
    console.error('[tcoleHub] initializeTcoleHub: Error during localTcoleMandatesData assignment:', e);
    localTcoleMandatesData = []; // Fallback to empty array on error
    console.log('[tcoleHub] initializeTcoleHub: localTcoleMandatesData after CATCHING error:', localTcoleMandatesData);
  }

  const tcoleHubUnitDatesEl = document.getElementById('tcoleHubUnitDates');
  const tcoleHubRequiredHoursEl = document.getElementById('tcoleHubRequiredHours');
  const logTcoleTrainingButton = document.getElementById('logTcoleTrainingButton');
  const tcoleCourseNameInput = document.getElementById('tcoleCourseName');
  const tcoleCourseHoursInput = document.getElementById('tcoleCourseHours');

  if (tcoleHubUnitDatesEl)
    tcoleHubUnitDatesEl.textContent = `${escapeHtmlFn(officerDataState.currentUnit.start)} - ${escapeHtmlFn(officerDataState.currentUnit.end)}`;
  if (tcoleHubRequiredHoursEl)
    tcoleHubRequiredHoursEl.textContent = officerDataState.currentUnit.requiredHours;

  updateTcoleProgressDisplay(officerDataState); // Initial display based on current officerData
  // Pass the mandates data directly to renderTcoleMandates
  renderTcoleMandates(officerDataState, saveTrainingLogFn, escapeHtmlFn, localTcoleMandatesData);

  if (logTcoleTrainingButton && tcoleCourseNameInput && tcoleCourseHoursInput) {
    logTcoleTrainingButton.addEventListener('click', async () => {
      const courseName = tcoleCourseNameInput.value.trim();
      const courseHours = parseInt(tcoleCourseHoursInput.value.trim());

      if (courseName && !isNaN(courseHours) && courseHours > 0) {
        const newLogEntry = {
          id: `custom-${Date.now()}`, // Unique ID for custom entries
          name: courseName,
          hours: courseHours,
          dateLogged: new Date().toISOString(), // Using ISO string for simplicity
        };

        // Update local officerData state first
        const currentOfficerData = getOfficerData();
        const updatedTrainings = [...currentOfficerData.manuallyLoggedTrainings, newLogEntry];
        const updatedCompletedHours = currentOfficerData.completedHours + courseHours;
        updateLocalOfficerData({
          manuallyLoggedTrainings: updatedTrainings,
          completedHours: updatedCompletedHours,
        });

        // Then attempt to save to Firestore
        await saveTrainingLogFn(newLogEntry); // This function should handle Firestore saving

        // Re-render UI based on updated local state
        updateTcoleProgressDisplay(getOfficerData()); // Pass the latest state
        // Pass the module-scoped localTcoleMandatesData here
        renderTcoleMandates(getOfficerData(), saveTrainingLogFn, escapeHtmlFn, localTcoleMandatesData);

        tcoleCourseNameInput.value = '';
        tcoleCourseHoursInput.value = '';
        // Consider a more subtle success message than alert() for better UX
        const successMessageEl = document.createElement('p');
        successMessageEl.textContent = 'Training logged successfully!';
        successMessageEl.className = 'text-green-600 text-xs mt-2';
        logTcoleTrainingButton.insertAdjacentElement('afterend', successMessageEl);
        setTimeout(() => successMessageEl.remove(), 3000);
      } else {
        alert('Please enter a valid course name and hours.');
      }
    });
  }
}

export function updateTcoleProgressDisplay(officerDataState) {
  const tcoleHubLoggedHoursEl = document.getElementById('tcoleHubLoggedHours');
  const tcoleHubProgressBar = document.getElementById('tcoleHubProgressBar');
  const completedHoursElDashboard = document.getElementById('completedHours'); // For dashboard chart
  const tcoleProgressChartCanvas = document.getElementById('tcoleProgressChart');

  const completedHours = officerDataState.completedHours || 0;
  const requiredHours = officerDataState.currentUnit.requiredHours || 40;

  if (tcoleHubLoggedHoursEl) tcoleHubLoggedHoursEl.textContent = completedHours;
  if (tcoleHubProgressBar) {
    const percent = requiredHours > 0 ? (completedHours / requiredHours) * 100 : 0;
    const displayPercent = Math.min(100, Math.round(percent));
    tcoleHubProgressBar.style.width = `${displayPercent}%`;
    tcoleHubProgressBar.textContent = `${displayPercent}%`;
    tcoleHubProgressBar.setAttribute('aria-valuenow', String(displayPercent));
  }

  // Update dashboard chart as well
  if (completedHoursElDashboard) completedHoursElDashboard.textContent = completedHours;
  if (document.getElementById('requiredHours'))
    document.getElementById('requiredHours').textContent = requiredHours;

  if (tcoleProgressChartCanvas) {
    let chartStatus = Chart.getChart('tcoleProgressChart');
    if (chartStatus) {
      chartStatus.destroy();
    }
    new Chart(tcoleProgressChartCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Completed Hours', 'Remaining Hours'],
        datasets: [
          {
            label: 'TCOLE Hours',
            data: [completedHours, Math.max(0, requiredHours - completedHours)],
            backgroundColor: ['#2563eb', '#e5e7eb'],
            borderColor: ['#ffffff', '#ffffff'],
            borderWidth: 3,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true, callbacks: { label: (c) => `${c.label}: ${c.raw} hours` } },
        },
      },
    });
  }
}

// Modify renderTcoleMandates to accept mandatesData as a parameter
export function renderTcoleMandates(officerDataState, saveTrainingLogFn, escapeHtmlFn, mandatesToRender) {
  console.log('[tcoleHub] renderTcoleMandates entered. localTcoleMandatesData at start:', JSON.parse(JSON.stringify(localTcoleMandatesData))); // Log 3 - stringify/parse for clean logging

  const tcoleMandatesContainer = document.getElementById('tcoleMandatesList');
  if (!tcoleMandatesContainer) {
    console.warn('[tcoleHub] renderTcoleMandates: tcoleMandatesContainer not found. Skipping render.');
    return;
  }

  // Ensure mandatesToRender is an array before using forEach
  if (!Array.isArray(mandatesToRender)) {
    console.error('renderTcoleMandates: mandatesToRender is not an array!', mandatesToRender);
    tcoleMandatesContainer.innerHTML = '<p class="text-red-500">Error: Could not load TCOLE mandates data.</p>';
    return;
  }

  tcoleMandatesContainer.innerHTML = '';
  mandatesToRender.forEach((mandate) => { // Use the passed parameter
    const isCompleted = officerDataState.manuallyLoggedTrainings.some(
      (log) => log.id === mandate.id
    );
    const statusText = isCompleted ? 'Completed (Logged)' : 'Pending';
    const statusColor = isCompleted
      ? 'text-green-600 bg-green-100 border-green-300'
      : 'text-amber-600 bg-amber-50 border-amber-300';

    const item = `
            <div class="p-4 border border-slate-200 rounded-lg bg-slate-50">
                <div class="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                    <h4 class="font-semibold text-blue-700 text-base mb-1 sm:mb-0">${escapeHtmlFn(mandate.name)}</h4>
                    <span class="text-xs font-medium ${statusColor} px-2.5 py-1 rounded-full border">${escapeHtmlFn(statusText)}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">Cycle: ${escapeHtmlFn(mandate.cycle)} | Hours: ${mandate.hours}</p>
                <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">${escapeHtmlFn(mandate.details)}</p>
                ${!isCompleted ? `<button data-mandate-id="${mandate.id}" data-mandate-hours="${mandate.hours}" data-mandate-name="${escapeHtmlFn(mandate.name)}" class="mark-tcole-complete-btn mt-3 px-4 py-1.5 bg-sky-500 text-white text-xs font-medium rounded-md hover:bg-sky-600 transition-colors">Mark as Completed</button>` : ''}
            </div>`;
    tcoleMandatesContainer.innerHTML += item;
  });
  // Pass saveTrainingLogFn and escapeHtmlFn, and also localTcoleMandatesData for consistency if addMarkCompleteListeners internally calls renderTcoleMandates again
  addMarkCompleteListeners(saveTrainingLogFn, escapeHtmlFn, localTcoleMandatesData);
}

// Modify addMarkCompleteListeners to accept and pass mandatesData
function addMarkCompleteListeners(saveTrainingLogFn, escapeHtmlFn, mandatesData) {
  document.querySelectorAll('.mark-tcole-complete-btn').forEach((button) => {
    if (button.dataset.listenerAttached === 'true') return;
    button.dataset.listenerAttached = 'true';
    button.addEventListener('click', async function () {
      const mandateId = this.dataset.mandateId;
      const mandateHours = parseInt(this.dataset.mandateHours);
      const mandateName = this.dataset.mandateName; // Already escaped during render

      const currentOfficerData = getOfficerData();
      if (!currentOfficerData.manuallyLoggedTrainings.some((log) => log.id === mandateId)) {
        const newEntry = {
          id: mandateId,
          hours: mandateHours,
          name: mandateName,
          dateLogged: new Date().toISOString(),
        };

        // Update local state first
        const updatedTrainings = [...currentOfficerData.manuallyLoggedTrainings, newEntry];
        const updatedCompletedHours = currentOfficerData.completedHours + mandateHours;
        updateLocalOfficerData({
          manuallyLoggedTrainings: updatedTrainings,
          completedHours: updatedCompletedHours,
        });

        // Attempt to save to Firestore
        await saveTrainingLogFn(newEntry); // This should be the firestoreService.saveTrainingLogToFirestore

        // Re-render UI based on updated local state
        updateTcoleProgressDisplay(getOfficerData());
        // Pass mandatesData (which is localTcoleMandatesData from the caller)
        renderTcoleMandates(getOfficerData(), saveTrainingLogFn, escapeHtmlFn, mandatesData);
      }
    });
  });
}
