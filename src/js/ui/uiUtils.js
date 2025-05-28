// Utility functions for UI (escapeHtml, modal handlers, etc.)

export function escapeHtml(str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[tag]
  );
}

// Add more UI utilities as needed

// Example modal handler (can be expanded as needed)
export function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal-inactive');
    modal.classList.add('modal-active');
  }
}

export function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal-active');
    modal.classList.add('modal-inactive');
  }
}

// Modal utility functions
export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal-inactive');
    modal.classList.add('modal-active');
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('modal-active');
    modal.classList.add('modal-inactive');
  }
}

// Show a loading spinner on a button
export function showButtonLoading(button) {
  if (!button) return;
  button.disabled = true;
  let spinner = button.querySelector('.loading-spinner');
  if (!spinner) {
    spinner = document.createElement('span');
    spinner.className = 'loading-spinner ml-2';
    spinner.innerHTML = `<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>`;
    button.appendChild(spinner);
  }
  spinner.style.display = 'inline-block';
}

// Hide the loading spinner on a button
export function hideButtonLoading(button) {
  if (!button) return;
  button.disabled = false;
  const spinner = button.querySelector('.loading-spinner');
  if (spinner) spinner.style.display = 'none';
}

// Add expandable card listeners for ethical principles
export function addExpandableCardListeners() {
  document.querySelectorAll('.expandable-card').forEach((card) => {
    const button = card.querySelector('button');
    const content = card.querySelector('.expandable-content');
    if (button && content) {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        content.classList.toggle('card-collapsed');
        content.classList.toggle('card-expanded');
      });
    }
  });
}
