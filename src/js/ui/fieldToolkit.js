// src/js/ui/fieldToolkit.js
import {
  escapeHtml,
  addExpandableCardListeners,
  showButtonLoading,
  hideButtonLoading,
} from './uiUtils.js';

let currentScore = 0;

export function initializeFieldToolkit(
  interactiveScenariosData,
  fieldGuidesData,
  callGeminiAPI,
  escapeHtmlFn
) {
  const scenariosContainer = document.getElementById('interactiveScenariosContainer');
  const scenarioScoreEl = document.getElementById('scenarioScore');
  const fieldGuidesContainer = document.getElementById('fieldGuidesContainer');
  const generateAiScenarioButton = document.getElementById('generateAiScenarioButton');
  const aiGeneratedScenarioContainer = document.getElementById('aiGeneratedScenarioContainer');
  const aiGeneratedScenarioContentEl = document.getElementById('aiGeneratedScenarioContent');
  const aiScenarioLoadingEl = document.getElementById('aiScenarioLoading');

  // Initialize Interactive Scenarios
  if (scenariosContainer && scenarioScoreEl) {
    scenariosContainer.innerHTML = ''; // Clear previous
    interactiveScenariosData.forEach((scenario) => {
      let choicesHtml = '';
      scenario.choices.forEach((choice) => {
        choicesHtml += `<button data-points="${choice.points}" data-feedback="${escapeHtmlFn(choice.feedback)}" class="scenario-choice block w-full md:w-auto md:inline-block mt-2 md:mt-0 md:mr-2 px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-200 shadow-md hover:shadow-lg">${escapeHtmlFn(choice.text)}</button>`;
      });

      const scenarioDiv = `
                <div class="scenario p-5 sm:p-6 border border-slate-300 rounded-xl bg-slate-50 shadow-lg" id="scenario-${scenario.id}" role="region" aria-labelledby="scenario-title-${scenario.id}">
                    <h4 id="scenario-title-${scenario.id}" class="text-lg sm:text-xl font-semibold text-blue-800 mb-3">${escapeHtmlFn(scenario.title)}</h4>
                    <p class="text-slate-600 mb-4 text-sm leading-relaxed">${escapeHtmlFn(scenario.description)}</p>
                    <div class="choices mb-4 space-y-2 sm:space-y-0 sm:space-x-2"> ${choicesHtml} </div>
                    <div class="feedback-area hidden mt-3" role="alert"></div>
                </div>`;
      scenariosContainer.innerHTML += scenarioDiv;
    });

    document.querySelectorAll('.scenario-choice').forEach((button) => {
      button.addEventListener('click', function () {
        const points = parseInt(this.dataset.points);
        const feedbackText = this.dataset.feedback; // Already escaped
        const feedbackArea = this.closest('.scenario').querySelector('.feedback-area');

        currentScore += points;
        scenarioScoreEl.textContent = currentScore;

        let feedbackClass = 'feedback-neutral';
        if (points > 20) feedbackClass = 'feedback-correct';
        else if (points <= 10) feedbackClass = 'feedback-incorrect';

        feedbackArea.innerHTML = `<div class="${feedbackClass} scenario-feedback text-sm"><p class="font-semibold mb-1">Feedback (+${points} pts):</p><p>${feedbackText}</p></div>`;
        feedbackArea.classList.remove('hidden');

        this.closest('.choices')
          .querySelectorAll('button')
          .forEach((btn) => {
            btn.disabled = true;
            btn.classList.add('opacity-60', 'cursor-not-allowed');
          });
        this.classList.remove('opacity-60', 'cursor-not-allowed');
        this.classList.add('ring-2', 'ring-amber-400', 'ring-offset-2', 'ring-offset-slate-50');
      });
    });
  }

  // Initialize AI Scenario Generator
  if (generateAiScenarioButton) {
    generateAiScenarioButton.addEventListener('click', async () => {
      showButtonLoading(generateAiScenarioButton, 'Generating...');
      if (aiGeneratedScenarioContentEl) aiGeneratedScenarioContentEl.innerHTML = '';
      if (aiGeneratedScenarioContainer) aiGeneratedScenarioContainer.classList.remove('hidden');
      if (aiScenarioLoadingEl) aiScenarioLoadingEl.classList.remove('hidden'); // Show main loading for this section

      const prompt =
        "You are an AI assistant for Texas Law Enforcement Officers. Generate a new, concise ethical scenario relevant to daily patrol duties in Texas. The scenario should present a clear ethical challenge. After the scenario description, provide 3-4 plausible but distinct courses of action an officer might consider (without indicating which is 'correct'). Finally, provide a brief 'AI Ethical Considerations' section discussing the key ethical principles at play in the scenario you generated. Keep the scenario and choices brief and to the point. Format your response using Markdown for headings (e.g., ### Scenario), bold, italics, and bullet points for choices and considerations.";
      const aiResponse = await callGeminiAPI(prompt);

      if (aiGeneratedScenarioContentEl) aiGeneratedScenarioContentEl.innerHTML = aiResponse; // aiResponse is already HTML formatted
      if (aiScenarioLoadingEl) aiScenarioLoadingEl.classList.add('hidden');
      hideButtonLoading(generateAiScenarioButton);
      generateAiScenarioButton.innerHTML = `<span class="mr-2 text-base">✨</span>Generate New AI Scenario`;
    });
  }

  // Populate Field Guides
  if (fieldGuidesContainer) {
    fieldGuidesContainer.innerHTML = ''; // Clear previous
    fieldGuidesData.forEach((guide) => {
      const cardId = `content-guide-${guide.id}`;
      const card = `
                <div id="${guide.id.toLowerCase().replace(/\s+/g, '-')}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${cardId}">
                        <span class="font-semibold text-blue-700">${escapeHtmlFn(guide.title)} <span class="text-xs text-slate-500">(${escapeHtmlFn(guide.category)})</span></span>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${cardId}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${guide.content}</div>
                    </div>
                </div>`;
      fieldGuidesContainer.innerHTML += card;
    });
  }
  addExpandableCardListeners(); // For field guide cards
}
