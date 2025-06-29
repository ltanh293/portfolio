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
    tags: ['#FMCG', '#InnovationPipeline', '#CapabilityBuilding'],
    position: 'Innovation & Renovation (I&R) Lead',
    department: 'Innovation & Renovation',
    period: '03/2024 to now',
    description: 'Co-lead and drive the innovation pipeline for 5 Business Units in Nestlé Vietnam',
    achievements: [
      'Led 15+ innovation projects across 5 Business Units',
      'Increased innovation pipeline value by 40% in 6 months',
      'Built capability for 50+ team members across functions'
    ],
    responsibilities: [
      'Develop and execute innovation strategies',
      'Manage cross-functional project teams',
      'Drive capability building initiatives',
      'Coordinate with regional and global teams'
    ],
    skills: ['Strategic Planning', 'Project Management', 'Team Leadership', 'Stakeholder Management'],
    teamSize: '15-20 people',
    budget: '$2M+ annually',
    modalId: 'modal-nestle-1'
  },
  {
    id: 'vinamilk',
    company: 'VIETNAM DAIRY PRODUCTS JOINT STOCK COMPANY',
    logo: './images/vinamilk/vinamilk-logo.svg',
    background: './images/vinamilk/maxresdefault.jpg',
    tags: ['#FMCG', '#Dairy', '#DrinkingYogurt', '#JuicyMilk', '#Kids'],
    position: 'Brand Manager - SuSu Hero',
    department: 'Marketing',
    period: '06/2023 to 3/2024',
    description: 'Led brand strategic planning, marketing initiatives and business performance tracking for SuSu Hero product line.',
    achievements: [
      'Achieved 120% of sales target in first 6 months',
      'Launched 3 new product variants successfully',
      'Increased market share by 15% in target segment'
    ],
    responsibilities: [
      'Develop brand strategy and marketing plans',
      'Manage P&L and budget allocation',
      'Lead creative and media campaigns',
      'Monitor market performance and competition'
    ],
    skills: ['Brand Management', 'Marketing Strategy', 'P&L Management', 'Campaign Planning'],
    teamSize: '8-12 people',
    budget: '$1.5M annually',
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
    achievements: [
      'Grew Anlene market share from 25% to 32%',
      'Launched Anlene Total 10 with 5% market penetration',
      'Improved brand awareness by 40% through integrated campaigns'
    ],
    responsibilities: [
      'Manage 3 product lines with different life cycles',
      'Develop and execute marketing campaigns',
      'Work with agencies and creative teams',
      'Analyze market data and consumer insights'
    ],
    skills: ['Product Portfolio Management', 'Consumer Insights', 'Media Planning', 'Data Analysis'],
    teamSize: '10-15 people',
    budget: '$3M annually',
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
    achievements: [
      'Achieved 2% market share within 3 months of launch',
      'Exceeded first-year sales target by 25%',
      'Established distribution in 15,000+ retail outlets'
    ],
    responsibilities: [
      'Lead new product launch strategy',
      'Manage distribution and trade marketing',
      'Coordinate with R&D and supply chain',
      'Monitor launch performance and KPIs'
    ],
    skills: ['New Product Launch', 'Trade Marketing', 'Distribution Management', 'Launch Strategy'],
    teamSize: '6-10 people',
    budget: '$800K annually',
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
    achievements: [
      'Supported 5 major brand campaigns',
      'Improved campaign ROI by 20% through optimization',
      'Managed relationships with 10+ agency partners'
    ],
    responsibilities: [
      'Support brand manager in strategy development',
      'Manage campaign execution and monitoring',
      'Coordinate with internal and external stakeholders',
      'Analyze campaign performance and provide insights'
    ],
    skills: ['Campaign Management', 'Agency Management', 'Performance Analysis', 'Stakeholder Coordination'],
    teamSize: '4-8 people',
    budget: '$500K annually',
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
    achievements: [
      'Completed leadership development program',
      'Led 3 innovation projects during program',
      'Received recognition for outstanding performance'
    ],
    responsibilities: [
      'Participate in leadership training sessions',
      'Work on cross-functional innovation projects',
      'Learn business operations and strategy',
      'Develop leadership and management skills'
    ],
    skills: ['Leadership Development', 'Innovation Management', 'Business Strategy', 'Cross-functional Collaboration'],
    teamSize: '20+ program participants',
    budget: 'Training program',
    modalId: 'modal-masan-3'
  }
];

// Pagination settings
const itemsPerPage = 4;
let currentPage = 1;

// Render work card template
function renderWorkCard(work) {
  return `
    <div class="bg-white rounded-xl shadow p-4 md:p-5 flex flex-col relative overflow-hidden group work-card">
      <!-- Background Image with Right Half Display -->
      <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style="background-image: url('${work.background}'); background-size: cover; background-position: right center; background-repeat: no-repeat;">
      </div>
      
      <!-- Gradient overlay for left side -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      <!-- Main Content -->
      <div class="relative z-10 flex w-full mb-4">
        <img src="${work.logo}" alt="Company"
          class="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg mr-3 md:mr-4 mb-4 md:mb-0 bg-white p-2 work-logo animate-stagger shadow-sm" />
        <div class="flex-1 work-content">
          <div class="font-semibold text-base md:text-lg work-company animate-stagger mb-2">${work.company}</div>
          <div class="flex flex-wrap gap-1 md:gap-2 work-tags mb-3">
            ${work.tags.map((tag, index) => `<span class="bg-gray-100 px-2 md:px-3 py-1 rounded-full text-xs font-medium work-tag animate-stagger" style="animation-delay: ${0.1 + index * 0.05}s">${tag}</span>`).join('')}
          </div>
          <div class="flex items-center gap-2 mb-2 work-position animate-stagger">
            <div class="text-gray-500 text-xs md:text-sm">
              <div class="font-medium">${work.position}</div>
              ${work.department ? `<div class="text-gray-400">${work.department}</div>` : ''}
            </div>
            <div class="text-gray-400">|</div>
            <div class="text-gray-400 text-xs">${work.period}</div>
          </div>
          <div class="text-gray-600 text-xs md:text-sm work-description animate-stagger">${work.description}</div>
        </div>
      </div>
      
      <!-- Expanded Details - Show on hover with expandable height -->
      <div class="relative bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-4 md:p-6 expanded-details rounded-lg border border-blue-200 shadow-sm">
        <div class="space-y-4 md:space-y-6">
          <!-- Header Section -->
          <div class="text-center border-b border-blue-200 pb-3 md:pb-4">
            <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">${work.company}</h3>
            <div class="text-base md:text-lg font-semibold text-blue-600 mb-1">${work.position}</div>
            ${work.department ? `<div class="text-gray-600 text-sm mb-2">${work.department}</div>` : ''}
            <div class="text-sm text-gray-500">${work.period}</div>
          </div>
          
          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div class="bg-white p-3 rounded-lg shadow-sm border border-blue-100">
              <div class="font-semibold text-blue-700 text-xs md:text-sm">Team Size</div>
              <div class="text-gray-600 font-medium text-sm md:text-base">${work.teamSize}</div>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm border border-green-100">
              <div class="font-semibold text-green-700 text-xs md:text-sm">Budget</div>
              <div class="text-gray-600 font-medium text-sm md:text-base">${work.budget}</div>
            </div>
          </div>
          
          <!-- Achievements -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-green-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-green-700">Key Achievements</h4>
            <ul class="text-xs md:text-sm text-gray-700 space-y-2">
              ${work.achievements.map(achievement => `<li class="flex items-start">
                <span class="text-green-500 mr-2 md:mr-3 mt-1 text-base md:text-lg">•</span>
                <span>${achievement}</span>
              </li>`).join('')}
            </ul>
          </div>
          
          <!-- Responsibilities -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-blue-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-blue-700">Key Responsibilities</h4>
            <ul class="text-xs md:text-sm text-gray-700 space-y-2">
              ${work.responsibilities.map(responsibility => `<li class="flex items-start">
                <span class="text-blue-500 mr-2 md:mr-3 mt-1 text-base md:text-lg">•</span>
                <span>${responsibility}</span>
              </li>`).join('')}
            </ul>
          </div>
          
          <!-- Skills -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-purple-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-purple-700">Skills & Expertise</h4>
            <div class="flex flex-wrap justify-center gap-1 md:gap-2">
              ${work.skills.map(skill => `<span class="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">${skill}</span>`).join('')}
            </div>
          </div>
          
          <!-- Tags -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-gray-600">Categories</h4>
            <div class="flex flex-wrap justify-center gap-1 md:gap-2">
              ${work.tags.map(tag => `<span class="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">${tag}</span>`).join('')}
            </div>
          </div>
          
          <!-- Action Button -->
          <div class="text-center pt-2">
            <button onclick="openModal('${work.modalId}')"
              class="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-xs md:text-sm shadow-md hover:shadow-lg transform hover:scale-105">
              View Full Details
            </button>
          </div>
        </div>
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
  const container = document.getElementById('work-cards-container');
  // Fade out old cards
  if (container.children.length > 0) {
    container.classList.add('fade-out');
    setTimeout(() => {
      actuallyRenderWorkCards();
      container.classList.remove('fade-out');
    }, 250);
  } else {
    actuallyRenderWorkCards();
  }
}

function actuallyRenderWorkCards() {
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