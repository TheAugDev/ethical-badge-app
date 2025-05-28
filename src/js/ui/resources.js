// src/js/ui/resources.js
import { escapeHtml } from './uiUtils.js';

export function initializeResources(externalResourcesData, escapeHtmlFn) {
  const externalResourcesContainer = document.getElementById('externalResourcesList');

  if (externalResourcesContainer) {
    externalResourcesContainer.innerHTML = ''; // Clear previous
    externalResourcesData.forEach((resource) => {
      const listItem = `
                <li class="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 border border-slate-200 shadow-sm hover:shadow-md">
                    <a href="${escapeHtmlFn(resource.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50 rounded-sm">
                        ${escapeHtmlFn(resource.name)} 
                        <span class="text-xs text-slate-400 font-normal inline-block ml-1" aria-hidden="true">↗</span>
                    </a>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">${escapeHtmlFn(resource.description)}</p>
                </li>`;
      externalResourcesContainer.innerHTML += listItem;
    });
  }

  // Add event listener for the agency portal link if it exists (it's static in HTML)
  document.querySelectorAll('.agency-portal-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // In a real app, this might navigate to a different URL or trigger a specific action
      alert(
        'Agency Administration Portal link clicked. This feature would be part of a separate administrative interface.'
      );
    });
  });
}
