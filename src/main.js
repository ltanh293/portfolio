import './style.css'

// HTML content has been moved to index.html for better organization
// This file now only handles CSS imports and any future JavaScript functionality 

// Work History Data
const workData = [
  {
    id: 'nestle-1',
    company: 'NESTLÉ VIETNAM LTD',
    logo: './images/nestle/nestle-logo.svg',
    background: './images/nestle/milo_a2.png',
    tags: ['#FMCG', '#InnovationPipeline', '#CapabilityBuilding',],
    position: 'Innovation & Renovation (I&R) Lead',
    department: '',
    period: '03/2024 to now',
    description: 'Co-lead and drive the innovation pipeline for 5 Business Units in Nestlé Vietnam',
    modalId: 'modal-nestle-1'
  },
  {
    id: 'vinamilk',
    company: 'VIETNAM DAIRY PRODUCTSJOINT STOCKCOMPANY',
    logo: './images/vinamilk/vinamilk-logo.svg',
    background: './images/vinamilk/maxresdefault.jpg',
    tags: ['#FMCG', '#Dairy', '#DrinkingYogurt', '#JuicyMilk', '#Kids',],
    position: 'Brand Manager - SuSu Hero',
    department: '',
    period: '06/2023 to 3/2024',
    description: 'Led brand strategic planning, marketing initiatives and business performance tracking for SuSu Hero product line.',
    modalId: 'modal-vinamilk-1'
  },
  {
    id: 'fonterra',
    company: 'FONTERRA BRANDS (VIETNAM)',
    logo: './images/fonterra/fonterra-logo.svg',
    background: './images/fonterra/anlene2.jpeg',
    tags: ['#FMCG', '#Dairy', '#AdultMilkPowder', '#Innovation'],
    position: 'Brand Manager',
    department: 'Anlene (core Consumer Business)',
    period: '08/2021 to 06/2023',
    description: 'Lead all the brand initiatives & business performance for 3 product lines of Anlene: Anlene Gold 3X (core), Anlene Gold 5X (future core), Anlene Total 10 (innovation).',
    modalId: 'modal-fonterra-1'
  },
  {
    id: 'masan-1',
    company: 'MASAN CONSUMER HOLDINGS',
    logo: './images/masan/Masan_consumer.svg',
    background: './images/masan/joins.webp',
    tags: ['#FMCG', '#Seasoning', '#Homecare', '#Innovation'],
    position: 'Brand Manager',
    department: 'Joins detergent',
    period: '12/2020 to 08/2021',
    description: 'Successfully launched Joins detergent with 2% market share after 3 months.',
    modalId: 'modal-masan-1'
  },
  {
    id: 'masan-2',
    company: 'MASAN CONSUMER HOLDINGS',
    logo: './images/masan/Masan_consumer.svg',
    background: './images/masan/chinsu-1.jpeg',
    tags: ['#FMCG', '#Seasoning', '#Homecare', '#Innovation'],
    position: 'Senior Assistant Brand Manager',
    department: 'Consumer Business',
    period: '07/2018 to 12/2020',
    description: 'Supported brand management and marketing strategies.',
    modalId: 'modal-masan-2'
  },
  {
    id: 'masan-3',
    company: 'MASAN CONSUMER HOLDINGS',
    logo: './images/masan/Masan_consumer.svg',
    background: './images/masan/chinsu-1.jpeg',
    tags: ['#FMCG', '#Seasoning', '#Homecare', '#Innovation'],
    position: 'Masan Young Entrepreneur',
    department: 'Leadership Program',
    period: '06/2016 to 07/2018',
    description: 'Participated in leadership development and business innovation program.',
    modalId: 'modal-masan-3'
  }
];

// Pagination settings
const itemsPerPage = 4;
let currentPage = 1;

// Render work card template
function renderWorkCard(work) {
  return `
    <div class="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between relative overflow-hidden group work-card">
      <!-- Background Image with Right Half Display -->
      <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style="background-image: url('${work.background}'); background-size: cover; background-position: right center; background-repeat: no-repeat;">
      </div>
      
      <!-- Gradient overlay for left side -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      <!-- Content (relative to show above background) -->
      <div class="relative z-10 flex w-full">
        <img src="${work.logo}" alt="Company"
          class="w-20 h-20 object-contain rounded-lg mr-4 mb-4 md:mb-0 bg-white p-2 work-logo animate-stagger" />
        <div class="flex-1 work-content">
          <div class="font-semibold text-lg work-company animate-stagger">${work.company}</div>
          <div class="flex flex-wrap gap-2 work-tags">
            ${work.tags.map((tag, index) => `<span class="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium mb-1 work-tag animate-stagger" style="animation-delay: ${0.1 + index * 0.05}s">${tag}</span>`).join('')}
          </div>
          <div class="flex items-center gap-2 mb-2 work-position animate-stagger">
            <div class="text-gray-500 text-sm">
              <div>${work.position}</div>
              <div>${work.department}</div>
            </div>
            <div class="text-gray-400">|</div>
            <div class="text-gray-400 text-xs">${work.period}</div>
          </div>
          <div class="text-gray-600 text-sm work-description animate-stagger">${work.description}</div>
        </div>
      </div>
      
      <!-- View More Button - Overlay on content when hover -->
      <div class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button onclick="openModal('${work.modalId}')"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium text-sm flex items-center gap-2">
          View More
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Render pagination
function renderPagination() {
  const totalPages = Math.ceil(workData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, workData.length);

  // Update page info
  // document.getElementById('page-info').innerHTML = `Showing ${start + 1}-${end} of ${workData.length} work experiences`;

  // Build pagination buttons
  let paginationHTML = '';

  // Previous button
  paginationHTML += `
    <button onclick="changePage(${currentPage - 1})" 
      class="px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" 
      ${currentPage === 1 ? 'disabled' : ''}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
  `;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button onclick="changePage(${i})" 
          class="px-3 py-2 ${i === currentPage ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'} rounded-lg font-medium text-sm transition-colors duration-200">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += `<span class="px-2 text-gray-400">...</span>`;
    }
  }

  // Next button
  paginationHTML += `
    <button onclick="changePage(${currentPage + 1})" 
      class="px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" 
      ${currentPage === totalPages ? 'disabled' : ''}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  `;

  document.getElementById('pagination').innerHTML = paginationHTML;
}

// Change page function
function changePage(page) {
  const totalPages = Math.ceil(workData.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  renderWorkCards();
  renderPagination();
}

// Render work cards for current page
function renderWorkCards() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentPageData = workData.slice(start, end);

  const cardsHTML = currentPageData.map(work => renderWorkCard(work)).join('');
  document.getElementById('work-cards-container').innerHTML = cardsHTML;
  
  // Add animation observer for newly rendered work cards
  setTimeout(() => {
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      card.classList.add('animate-in');
    });
  }, 100);
}

// Modal functions
function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  renderWorkCards();
  renderPagination();
  setupScrollAnimations();
  setupSmoothScroll();
});

// Export functions to global scope for HTML onclick handlers
window.changePage = changePage;
window.openModal = openModal;
window.closeModal = closeModal;

// Scroll Animation Setup
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Observe all sections that should animate
  const sectionsToAnimate = document.querySelectorAll('section');
  sectionsToAnimate.forEach(section => {
    section.classList.add('scroll-animate');
    observer.observe(section);
  });

  // Observe specific elements for staggered animations
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(element => {
    element.classList.add('scroll-animate');
    observer.observe(element);
  });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
} 