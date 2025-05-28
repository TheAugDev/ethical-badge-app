// src/js/ui/texasLaw.js
import { escapeHtml, addExpandableCardListeners } from './uiUtils.js';

export function initializeTexasLaw(texasLawData, escapeHtmlFn) {
  const lawContainer = document.getElementById('texasLawContainer');
  const lawSearchInput = document.getElementById('lawSearchInput');

  function renderTexasLawItems(filter = '') {
    if (!lawContainer) return;
    lawContainer.innerHTML = ''; // Clear previous items
    const normalizedFilter = filter.toLowerCase().trim();
    const filteredData = texasLawData.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedFilter) ||
        (item.summary && item.summary.toLowerCase().includes(normalizedFilter)) ||
        (item.keywords && item.keywords.toLowerCase().includes(normalizedFilter)) ||
        item.id.toLowerCase().includes(normalizedFilter)
    );

    if (filteredData.length === 0) {
      lawContainer.innerHTML = `<p class="text-slate-500 p-4 text-center">No Texas statutes match your search criteria.</p>`;
      return;
    }

    filteredData.forEach((item) => {
      const cardId = `content-law-${item.id}`;
      const card = `
                <div id="${item.id.toLowerCase().replace(/\./g, '-')}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${cardId}">
                       <div>
                            <span class="font-semibold text-blue-700">${escapeHtmlFn(item.title)}</span>
                            <span class="text-xs text-slate-500 ml-2">(${escapeHtmlFn(item.category)})</span>
                       </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${cardId}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-2 text-sm text-slate-600 leading-relaxed">${escapeHtmlFn(item.summary)}</p>
                        <a href="${escapeHtmlFn(item.link)}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 mb-3 px-3 py-1.5 bg-sky-600 text-white text-xs font-medium rounded-md hover:bg-sky-700 transition-colors shadow-sm hover:shadow">
                            View Full Statute (statutes.capitol.texas.gov) 
                            <span class="ml-1" aria-hidden="true">↗</span>
                        </a>
                        ${item.content ? `<h5 class="text-xs font-semibold text-slate-500 mt-3 mb-1">Key Excerpt:</h5><pre class="py-2 whitespace-pre-wrap text-xs sm:text-sm leading-relaxed bg-slate-50 p-3 rounded-md border border-slate-200">${escapeHtmlFn(item.content)}</pre>` : ''}
                    </div>
                </div>`;
      lawContainer.innerHTML += card;
    });
    addExpandableCardListeners();
  }

  if (lawSearchInput) {
    lawSearchInput.addEventListener('input', (e) => renderTexasLawItems(e.target.value));
  }
  renderTexasLawItems(); // Initial render
}
