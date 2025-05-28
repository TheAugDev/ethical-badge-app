// src/js/ui/officerWellness.js
import { escapeHtml, addExpandableCardListeners } from './uiUtils.js';

export function initializeOfficerWellness(wellnessResourcesData, escapeHtmlFn) {
  const wellnessContainer = document.getElementById('wellnessResourcesContainer');

  if (wellnessContainer) {
    wellnessContainer.innerHTML = ''; // Clear previous
    wellnessResourcesData.forEach((resource) => {
      const cardId = `content-wellness-${resource.id}`;
      const card = `
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${cardId}">
                         <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${escapeHtmlFn(resource.title)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${escapeHtmlFn(resource.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${cardId}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${resource.details.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>`;
      wellnessContainer.innerHTML += card;
    });
    addExpandableCardListeners();
  }
}
