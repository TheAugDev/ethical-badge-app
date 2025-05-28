// src/js/ui/dashboard.js
import { escapeHtml, showButtonLoading, hideButtonLoading } from './uiUtils.js';

let tcoleProgressChartInstance = null;

export function initializeDashboard(
  officerData,
  legalUpdatesData,
  dilemmaOfTheWeekData,
  callGeminiAPI,
  navigateToSectionFn
) {
  const officerNameEl = document.getElementById('officerNamePlaceholder');
  const tcoleUnitDatesEl = document.getElementById('tcoleUnitDates');
  const completedHoursEl = document.getElementById('completedHours');
  const requiredHoursEl = document.getElementById('requiredHours');
  const legalUpdatesFeedContainer = document.getElementById('legalUpdatesFeed');
  const dilemmaTextEl = document.getElementById('dilemmaOfTheWeekText');
  const dilemmaOptionsEl = document.getElementById('dilemmaOptions');
  const analyzeDilemmaButton = document.getElementById('analyzeDilemmaButton');
  const dilemmaAiAnalysisContainer = document.getElementById('dilemmaAiAnalysisContainer');
  const dilemmaAiAnalysisContentEl = document.getElementById('dilemmaAiAnalysisContent');
  const dilemmaAiLoadingEl = document.getElementById('dilemmaAiLoading');
  const tcoleProgressChartCanvas = document.getElementById('tcoleProgressChart');

  if (officerNameEl) officerNameEl.textContent = escapeHtml(officerData.name);
  if (tcoleUnitDatesEl)
    tcoleUnitDatesEl.textContent = `${escapeHtml(officerData.currentUnit.start)} - ${escapeHtml(officerData.currentUnit.end)}`;

  updateDashboardTcoleProgress(
    officerData,
    tcoleProgressChartCanvas,
    completedHoursEl,
    requiredHoursEl
  );

  // Populate Legal Updates Feed
  if (legalUpdatesFeedContainer) {
    legalUpdatesFeedContainer.innerHTML = ''; // Clear previous
    legalUpdatesData.slice(0, 4).forEach((update) => {
      const item = `
                <div class="p-3.5 bg-white rounded-lg shadow border border-slate-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer" role="article" tabindex="0" aria-labelledby="update-title-${update.date.replace(/\s+/g, '-')}" 
                     onclick="window.openUpdateModal(this)" 
                     data-fulltext="${escapeHtml(update.fullText || update.summary)}" 
                     data-title="${escapeHtml(update.title)}">
                    <span class="text-xs font-semibold ${update.category === 'Legislation' ? 'text-green-700 bg-green-100' : update.category === 'AG Opinion' ? 'text-purple-700 bg-purple-100' : update.category === 'Case Law' ? 'text-red-700 bg-red-100' : 'text-sky-700 bg-sky-100'} px-2 py-0.5 rounded-full">${escapeHtml(update.category)}</span>
                    <h4 id="update-title-${update.date.replace(/\s+/g, '-')}" class="font-medium text-slate-800 text-sm mt-1.5 mb-0.5">${escapeHtml(update.title)}</h4>
                    <p class="text-xs text-slate-500 mb-1">${escapeHtml(update.date)}</p>
                    <p class="text-xs text-slate-600 leading-relaxed">${escapeHtml(update.summary.substring(0, 120))}...</p>
                </div>`;
      legalUpdatesFeedContainer.innerHTML += item;
    });
  }

  // Populate Dilemma of the Week
  if (dilemmaTextEl) dilemmaTextEl.textContent = dilemmaOfTheWeekData.text;
  if (dilemmaOptionsEl) {
    dilemmaOptionsEl.innerHTML = ''; // Clear previous
    dilemmaOfTheWeekData.options.forEach((opt) => {
      dilemmaOptionsEl.innerHTML += `<li class="pb-0.5">${escapeHtml(opt)}</li>`;
    });
  }

  if (analyzeDilemmaButton) {
    analyzeDilemmaButton.addEventListener('click', async () => {
      showButtonLoading(analyzeDilemmaButton, 'Analyzing...');
      if (dilemmaAiAnalysisContentEl) dilemmaAiAnalysisContentEl.innerHTML = '';
      if (dilemmaAiAnalysisContainer) dilemmaAiAnalysisContainer.classList.remove('hidden');
      // No need to manage dilemmaAiLoadingEl separately if showButtonLoading handles it.
      // if (dilemmaAiLoadingEl) dilemmaAiLoadingEl.classList.remove('hidden');

      const prompt = `You are an AI assistant for Texas Law Enforcement Officers. Analyze the following ethical dilemma and provide concise discussion points, key ethical considerations, potential frameworks or questions an officer might ask themselves, and broader implications of choices. Dilemma: "${dilemmaOfTheWeekData.text}" Options provided were: ${dilemmaOfTheWeekData.options.join(', ')}. Focus on practical advice and Texas context where applicable. Format your response with clear headings for each section (e.g., Key Ethical Principles, Potential Considerations, Broader Implications). Use bullet points for lists.`;
      const analysis = await callGeminiAPI(prompt);

      if (dilemmaAiAnalysisContentEl) dilemmaAiAnalysisContentEl.innerHTML = analysis; // analysis is HTML formatted
      // if (dilemmaAiLoadingEl) dilemmaAiLoadingEl.classList.add('hidden');
      hideButtonLoading(analyzeDilemmaButton);
    });
  }
}

export function updateDashboardTcoleProgress(officerData, canvasElement, completedEl, requiredEl) {
  if (!canvasElement || !completedEl || !requiredEl) return;

  const completedHours = officerData.completedHours || 0;
  const requiredHours = officerData.currentUnit.requiredHours || 40;

  completedEl.textContent = completedHours;
  requiredEl.textContent = requiredHours;

  if (tcoleProgressChartInstance) {
    tcoleProgressChartInstance.destroy();
  }
  tcoleProgressChartInstance = new Chart(canvasElement.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Completed Hours', 'Remaining Hours'],
      datasets: [
        {
          label: 'TCOLE Hours',
          data: [completedHours, Math.max(0, requiredHours - completedHours)],
          backgroundColor: ['#2563eb', '#e5e7eb'], // blue-600, gray-200
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
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw} hours`;
            },
          },
        },
      },
    },
  });
}
