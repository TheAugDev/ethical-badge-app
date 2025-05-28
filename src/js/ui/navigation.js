// Navigation UI logic
export function initNavigation() {
  // Implement navigation logic here
  console.log('Navigation initialized');
}
// src/js/ui/navigation.js
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content-section');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIconOpen = mobileMenuButton?.querySelector('.menu-icon-open');
const menuIconClose = mobileMenuButton?.querySelector('.menu-icon-close');
const headerEl = document.querySelector('header'); // For calculating offset
const logoutButton = document.getElementById('logoutButton');
const mobileLogoutButton = document.getElementById('mobileLogoutButton');
const headerOfficerNameEl = document.getElementById('headerOfficerName');

export function initializeNavigation(authInstance) {
  // Pass authInstance if needed for logout
  if (mobileMenuButton && mobileMenu && menuIconOpen && menuIconClose) {
    mobileMenuButton.addEventListener('click', () => {
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('menu-open');
      if (headerEl) {
        // Ensure headerEl is defined
        mobileMenu.style.top = `${headerEl.offsetHeight}px`;
      }
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });
  }

  document.querySelectorAll('#mobileMenu a, header nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('menu-open')) {
        mobileMenuButton.click(); // Close mobile menu
      }
      // Smooth scroll is handled by CSS scroll-behavior: smooth and href="#"
    });
  });

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Initial call

  function performLogout() {
    signOut(authInstance).catch((error) => console.error('Logout error:', error));
  }

  if (logoutButton) logoutButton.addEventListener('click', performLogout);
  if (mobileLogoutButton) mobileLogoutButton.addEventListener('click', performLogout);
}

export function updateActiveLink() {
  if (!sections || sections.length === 0 || !navItems || navItems.length === 0) return;

  let currentSectionId = 'home'; // Default to home
  let minDistance = Infinity;
  const headerHeight = headerEl ? headerEl.offsetHeight + 20 : 100; // Add a little buffer

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // A section is considered "current" if its top is within a certain range of the viewport top
    // or if it's the one most visible in the viewport.
    const distanceToTop = Math.abs(rect.top - headerHeight);

    // Check if section is significantly in viewport
    const isInViewport =
      rect.top < window.innerHeight - rect.height / 2 &&
      rect.bottom > headerHeight + rect.height / 2;

    if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
      // Section is at the top of viewport
      currentSectionId = section.id;
      minDistance = 0; // Exact match
      return; // Found the best match
    }

    if (isInViewport && distanceToTop < minDistance) {
      minDistance = distanceToTop;
      currentSectionId = section.id;
    }
  });

  // If scrolled to the very bottom, make the last nav item active
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    // 50px buffer
    const lastSection = sections[sections.length - 1];
    if (lastSection) currentSectionId = lastSection.id;
  }

  navItems.forEach((item) => {
    item.classList.remove('nav-link-active', 'font-semibold');
    // For desktop nav items, ensure text color resets correctly
    if (!item.closest('#mobileMenu')) {
      item.classList.add('text-blue-100');
      item.classList.remove('text-white');
    }

    if (item.getAttribute('href') === `#${currentSectionId}`) {
      item.classList.add('nav-link-active', 'font-semibold');
      if (!item.closest('#mobileMenu')) {
        item.classList.add('text-white');
        item.classList.remove('text-blue-100');
      }
    }
  });
}

export function navigateToSection(sectionId, subId = null) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    // Calculate offset based on header height
    const headerOffset = headerEl ? headerEl.offsetHeight : 80; // Default offset if header not found
    const elementPosition = sectionElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (subId) {
      setTimeout(() => {
        const subElementAnchorId = subId.toLowerCase().replace(/\./g, '-').replace(/\s+/g, '-');
        const subElementAnchor = document.getElementById(subElementAnchorId);
        const subElementDirect = document.getElementById(subId);
        const targetSubElement = subElementAnchor || subElementDirect;

        if (targetSubElement) {
          const expandableCard = targetSubElement.closest('.expandable-card');
          if (expandableCard) {
            const button = expandableCard.querySelector('button');
            const content = button.nextElementSibling;
            if (content && content.classList.contains('card-collapsed')) {
              button.click();
            }
            expandableCard.classList.add(
              'ring-2',
              'ring-amber-400',
              'ring-offset-2',
              'ring-offset-white',
              'transition-all',
              'duration-300'
            );
            // Scroll the card into view if it's part of a larger section
            setTimeout(() => {
              // Allow card to expand before scrolling
              expandableCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500); // Adjust timeout if expansion animation is longer
            setTimeout(
              () =>
                expandableCard.classList.remove(
                  'ring-2',
                  'ring-amber-400',
                  'ring-offset-2',
                  'ring-offset-white'
                ),
              3500
            );
          } else {
            targetSubElement.classList.add(
              'ring-2',
              'ring-amber-400',
              'ring-offset-2',
              'ring-offset-white',
              'transition-all',
              'duration-300'
            );
            targetSubElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(
              () =>
                targetSubElement.classList.remove(
                  'ring-2',
                  'ring-amber-400',
                  'ring-offset-2',
                  'ring-offset-white'
                ),
              3500
            );
          }
        }
      }, 750);
    }
  } else {
    console.warn(`Section with ID '${sectionId}' not found.`);
  }
}

export function updateHeaderOfficerName(name) {
  if (headerOfficerNameEl) {
    if (name && name !== 'Officer') {
      headerOfficerNameEl.textContent = `Officer ${name.split(' ').pop()}`;
      headerOfficerNameEl.classList.remove('hidden');
    } else {
      headerOfficerNameEl.classList.add('hidden');
    }
  }
}
