// src/js/ui/ethicalCore.js
import {
  escapeHtml,
  addExpandableCardListeners,
  openModal,
  closeModal as closeModalUtil,
  showButtonLoading,
  hideButtonLoading,
} from './uiUtils.js';

let currentCaseStudyForAI = null;

export function initializeEthicalCore(
  ethicalPrinciplesData,
  caseStudiesData,
  callGeminiAPI,
  escapeHtmlFn
) {
  const principlesContainer = document.getElementById('principlesContainer');
  const caseStudiesContainer = document.getElementById('caseStudiesContainer');
  const modal = document.getElementById('caseStudyModal');
  const modalTitleEl = document.getElementById('modalTitle');
  const modalBodyEl = document.getElementById('modalBody');
  const closeModalButton = document.getElementById('closeModalButton');
  const closeModalButtonFooter = document.getElementById('closeModalButtonFooter');
  const analyzeCaseStudyButton = document.getElementById('analyzeCaseStudyButton');
  const caseStudyAiAnalysisContainer = document.getElementById('caseStudyAiAnalysisContainer');
  const caseStudyAiAnalysisContentEl = document.getElementById('caseStudyAiAnalysisContent');
  const caseStudyAiButtonSpinner = document.getElementById('caseStudyAiButtonSpinner');

  // Populate Ethical Principles
  if (principlesContainer) {
    principlesContainer.innerHTML = ''; // Clear previous
    ethicalPrinciplesData.forEach((principle) => {
      const card = `
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false">
                        <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${escapeHtmlFn(principle.name)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${escapeHtmlFn(principle.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-4 text-sm sm:text-base leading-relaxed">${principle.details.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>`;
      principlesContainer.innerHTML += card;
    });
  }

  // Populate Case Studies
  if (caseStudiesContainer && modal && modalTitleEl && modalBodyEl && analyzeCaseStudyButton) {
    caseStudiesContainer.innerHTML = ''; // Clear previous
    caseStudiesData.forEach((cs) => {
      const item = `
                <button data-id="${cs.id}" class="case-study-item block w-full h-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white flex flex-col justify-between" aria-label="View details for case study: ${escapeHtmlFn(cs.title)}">
                    <div>
                        <h4 class="font-semibold text-md sm:text-lg text-blue-700 mb-1.5">${escapeHtmlFn(cs.title)}</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">${escapeHtmlFn(cs.summary)}</p>
                    </div>
                    <span class="text-xs text-blue-500 mt-3 inline-block font-medium">View Details &raquo;</span>
                </button>`;
      caseStudiesContainer.innerHTML += item;
    });

    document.querySelectorAll('.case-study-item').forEach((button) => {
      button.addEventListener('click', () => {
        const caseId = button.dataset.id;
        currentCaseStudyForAI = caseStudiesData.find((c) => c.id === caseId);
        if (currentCaseStudyForAI) {
          openCaseStudyModal(
            currentCaseStudyForAI,
            modal,
            modalTitleEl,
            modalBodyEl,
            caseStudyAiAnalysisContainer,
            caseStudyAiAnalysisContentEl,
            escapeHtmlFn
          );
        }
      });
    });

    analyzeCaseStudyButton.addEventListener('click', async () => {
      if (!currentCaseStudyForAI) return;

      showButtonLoading(analyzeCaseStudyButton, 'Analyzing...');
      const caseStudyAiLoadingEl = document.getElementById('caseStudyAiLoading'); // Get it here

      if (caseStudyAiAnalysisContentEl) caseStudyAiAnalysisContentEl.innerHTML = '';
      if (caseStudyAiAnalysisContainer) caseStudyAiAnalysisContainer.classList.remove('hidden');
      if (caseStudyAiLoadingEl) caseStudyAiLoadingEl.classList.remove('hidden');

      const prompt = `You are an AI assistant for Texas Law Enforcement Officers. Analyze the following case study and provide a concise analysis. Focus on identifying key ethical principles involved, potential courses of action and their ethical implications, and any relevant Texas legal considerations or best practices. Case Study Title: "${currentCaseStudyForAI.title}". Case Details: "${currentCaseStudyForAI.detailsRaw}". Original Discussion Points: "${currentCaseStudyForAI.discussionPointsHTML.replace(/<[^>]+>/g, ' ')}". Provide your analysis in a structured way using Markdown for headings (e.g., ### Heading), bold, italics, and bullet points.`;
      const analysis = await callGeminiAPI(prompt);

      if (caseStudyAiAnalysisContentEl) caseStudyAiAnalysisContentEl.innerHTML = analysis; // analysis is HTML formatted
      if (caseStudyAiLoadingEl) caseStudyAiLoadingEl.classList.add('hidden');
      hideButtonLoading(analyzeCaseStudyButton);
      // Ensure the original button text is restored, including the icon
      analyzeCaseStudyButton.innerHTML = `<span class="mr-2">✨</span>Analyze with AI`;
    });
  }

  if (closeModalButton) closeModalButton.addEventListener('click', () => closeModalUtil(modal));
  if (closeModalButtonFooter)
    closeModalButtonFooter.addEventListener('click', () => closeModalUtil(modal));
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModalUtil(modal);
      }
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && modal.classList.contains('modal-active')) {
      closeModalUtil(modal);
    }
  });

  addExpandableCardListeners(); // For principle cards
}

export function openCaseStudyModal(
  caseData,
  modalEl,
  titleEl,
  bodyEl,
  aiContainerEl,
  aiContentEl,
  escapeFn
) {
  if (!caseData || !modalEl || !titleEl || !bodyEl) return;

  titleEl.innerHTML = escapeFn(caseData.title);
  bodyEl.innerHTML = `<div class="prose prose-sm sm:prose-base max-w-none">${caseData.detailsRaw.replace(/\n/g, '<br><br>')}<br><br>${caseData.discussionPointsHTML}</div>`;

  const aiSection = modalEl.querySelector('#modalAiAnalysisSection');
  if (aiSection) aiSection.classList.remove('hidden');

  if (aiContainerEl) aiContainerEl.classList.add('hidden');
  if (aiContentEl) aiContentEl.innerHTML = '';

  openModal(modalEl);
}
