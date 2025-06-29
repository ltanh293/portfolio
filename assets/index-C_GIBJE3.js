(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();console.log("main.js loaded successfully");const l=[{id:"nestle-1",company:"NESTLÉ VIETNAM LTD",logo:"images/nestle/nestle-logo.svg",background:"images/nestle/milo_a2.png",tags:["#FMCG","#InnovationPipeline","#CapabilityBuilding"],position:"Innovation & Renovation (I&R) Lead",department:"Innovation & Renovation",period:"03/2024 to now",description:"Co-lead and drive the innovation pipeline for 5 Business Units in Nestlé Vietnam",achievements:["Led 15+ innovation projects across 5 Business Units","Increased innovation pipeline value by 40% in 6 months","Built capability for 50+ team members across functions"],responsibilities:["Develop and execute innovation strategies","Manage cross-functional project teams","Drive capability building initiatives","Coordinate with regional and global teams"],skills:["Strategic Planning","Project Management","Team Leadership","Stakeholder Management"],teamSize:"15-20 people",budget:"$2M+ annually",modalId:"modal-nestle-1"},{id:"vinamilk",company:"VIETNAM DAIRY PRODUCTS JOINT STOCK COMPANY",logo:"images/vinamilk/vinamilk-logo.svg",background:"images/vinamilk/maxresdefault.jpg",tags:["#FMCG","#Dairy","#DrinkingYogurt","#JuicyMilk","#Kids"],position:"Brand Manager - SuSu Hero",department:"Marketing",period:"06/2023 to 3/2024",description:"Led brand strategic planning, marketing initiatives and business performance tracking for SuSu Hero product line.",achievements:["Achieved 120% of sales target in first 6 months","Launched 3 new product variants successfully","Increased market share by 15% in target segment"],responsibilities:["Develop brand strategy and marketing plans","Manage P&L and budget allocation","Lead creative and media campaigns","Monitor market performance and competition"],skills:["Brand Management","Marketing Strategy","P&L Management","Campaign Planning"],teamSize:"8-12 people",budget:"$1.5M annually",modalId:"modal-vinamilk-1"},{id:"fonterra",company:"FONTERRA BRANDS (VIETNAM)",logo:"images/fonterra/fonterra-logo.svg",background:"images/fonterra/anlene2.jpeg",tags:["#FMCG","#Dairy","#AdultMilkPowder","#Innovation"],position:"Brand Manager",department:"Anlene (core Consumer Business)",period:"08/2021 to 06/2023",description:"Lead all the brand initiatives & business performance for 3 product lines of Anlene: Anlene Gold 3X (core), Anlene Gold 5X (future core), Anlene Total 10 (innovation).",achievements:["Grew Anlene market share from 25% to 32%","Launched Anlene Total 10 with 5% market penetration","Improved brand awareness by 40% through integrated campaigns"],responsibilities:["Manage 3 product lines with different life cycles","Develop and execute marketing campaigns","Work with agencies and creative teams","Analyze market data and consumer insights"],skills:["Product Portfolio Management","Consumer Insights","Media Planning","Data Analysis"],teamSize:"10-15 people",budget:"$3M annually",modalId:"modal-fonterra-1"},{id:"masan-1",company:"MASAN CONSUMER HOLDINGS",logo:"images/masan/Masan_consumer.svg",background:"images/masan/joins.webp",tags:["#FMCG","#Seasoning","#Homecare","#Innovation"],position:"Brand Manager",department:"Joins detergent",period:"12/2020 to 08/2021",description:"Successfully launched Joins detergent with 2% market share after 3 months.",achievements:["Achieved 2% market share within 3 months of launch","Exceeded first-year sales target by 25%","Established distribution in 15,000+ retail outlets"],responsibilities:["Lead new product launch strategy","Manage distribution and trade marketing","Coordinate with R&D and supply chain","Monitor launch performance and KPIs"],skills:["New Product Launch","Trade Marketing","Distribution Management","Launch Strategy"],teamSize:"6-10 people",budget:"$800K annually",modalId:"modal-masan-1"},{id:"masan-2",company:"MASAN CONSUMER HOLDINGS",logo:"images/masan/Masan_consumer.svg",background:"images/masan/chinsu-1.jpeg",tags:["#FMCG","#Seasoning","#Homecare","#Innovation"],position:"Senior Assistant Brand Manager",department:"Consumer Business",period:"07/2018 to 12/2020",description:"Supported brand management and marketing strategies.",achievements:["Supported 5 major brand campaigns","Improved campaign ROI by 20% through optimization","Managed relationships with 10+ agency partners"],responsibilities:["Support brand manager in strategy development","Manage campaign execution and monitoring","Coordinate with internal and external stakeholders","Analyze campaign performance and provide insights"],skills:["Campaign Management","Agency Management","Performance Analysis","Stakeholder Coordination"],teamSize:"4-8 people",budget:"$500K annually",modalId:"modal-masan-2"},{id:"masan-3",company:"MASAN CONSUMER HOLDINGS",logo:"images/masan/Masan_consumer.svg",background:"images/masan/chinsu-1.jpeg",tags:["#FMCG","#Seasoning","#Homecare","#Innovation"],position:"Masan Young Entrepreneur",department:"Leadership Program",period:"06/2016 to 07/2018",description:"Participated in leadership development and business innovation program.",achievements:["Completed leadership development program","Led 3 innovation projects during program","Received recognition for outstanding performance"],responsibilities:["Participate in leadership training sessions","Work on cross-functional innovation projects","Learn business operations and strategy","Develop leadership and management skills"],skills:["Leadership Development","Innovation Management","Business Strategy","Cross-functional Collaboration"],teamSize:"20+ program participants",budget:"Training program",modalId:"modal-masan-3"}],d=4;let i=1;function u(e){return`
    <div class="bg-white rounded-xl shadow p-4 md:p-5 flex flex-col relative overflow-hidden group work-card">
      <!-- Background Image with Right Half Display -->
      <div class="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style="background-image: url('${e.background}'); background-size: cover; background-position: right center; background-repeat: no-repeat;">
      </div>
      
      <!-- Gradient overlay for left side -->
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      <!-- Main Content -->
      <div class="relative z-10 flex w-full mb-4">
        <img src="${e.logo}" alt="Company"
          class="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg mr-3 md:mr-4 mb-4 md:mb-0 bg-white p-2 work-logo animate-stagger shadow-sm" />
        <div class="flex-1 work-content">
          <div class="font-semibold text-base md:text-lg work-company animate-stagger mb-2">${e.company}</div>
          <div class="flex flex-wrap gap-1 md:gap-2 work-tags mb-3">
            ${e.tags.map((t,n)=>`<span class="bg-gray-100 px-2 md:px-3 py-1 rounded-full text-xs font-medium work-tag animate-stagger" style="animation-delay: ${.1+n*.05}s">${t}</span>`).join("")}
          </div>
          <div class="flex items-center gap-2 mb-2 work-position animate-stagger">
            <div class="text-gray-500 text-xs md:text-sm">
              <div class="font-medium">${e.position}</div>
              ${e.department?`<div class="text-gray-400">${e.department}</div>`:""}
            </div>
            <div class="text-gray-400">|</div>
            <div class="text-gray-400 text-xs">${e.period}</div>
          </div>
          <div class="text-gray-600 text-xs md:text-sm work-description animate-stagger">${e.description}</div>
        </div>
      </div>
      
      <!-- Hover to Show Details -->
      <div class="relative bg-gradient-to-br from-blue-50 to-indigo-50 expanded-details rounded-lg border border-blue-200 shadow-sm">
        <div class="space-y-4 md:space-y-6 p-4 md:p-6">
          <!-- Header Section -->
          <div class="text-center border-b border-blue-200 pb-3 md:pb-4">
            <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">${e.company}</h3>
            <div class="text-base md:text-lg font-semibold text-blue-600 mb-1">${e.position}</div>
            ${e.department?`<div class="text-gray-600 text-sm mb-2">${e.department}</div>`:""}
            <div class="text-sm text-gray-500">${e.period}</div>
          </div>
          
          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div class="bg-white p-3 rounded-lg shadow-sm border border-blue-100">
              <div class="font-semibold text-blue-700 text-xs md:text-sm">Team Size</div>
              <div class="text-gray-600 font-medium text-sm md:text-base">${e.teamSize}</div>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm border border-green-100">
              <div class="font-semibold text-green-700 text-xs md:text-sm">Budget</div>
              <div class="text-gray-600 font-medium text-sm md:text-base">${e.budget}</div>
            </div>
          </div>
          
          <!-- Achievements -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-green-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-green-700">Key Achievements</h4>
            <ul class="text-xs md:text-sm text-gray-700 space-y-2">
              ${e.achievements.map(t=>`<li class="flex items-start">
                <span class="text-green-500 mr-2 md:mr-3 mt-1 text-base md:text-lg">•</span>
                <span>${t}</span>
              </li>`).join("")}
            </ul>
          </div>
          
          <!-- Responsibilities -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-blue-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-blue-700">Key Responsibilities</h4>
            <ul class="text-xs md:text-sm text-gray-700 space-y-2">
              ${e.responsibilities.map(t=>`<li class="flex items-start">
                <span class="text-blue-500 mr-2 md:mr-3 mt-1 text-base md:text-lg">•</span>
                <span>${t}</span>
              </li>`).join("")}
            </ul>
          </div>
          
          <!-- Skills -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-purple-100">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-purple-700">Skills & Expertise</h4>
            <div class="flex flex-wrap justify-center gap-1 md:gap-2">
              ${e.skills.map(t=>`<span class="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">${t}</span>`).join("")}
            </div>
          </div>
          
          <!-- Tags -->
          <div class="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200">
            <h4 class="font-semibold text-gray-800 mb-3 text-center text-xs md:text-sm uppercase tracking-wide text-gray-600">Categories</h4>
            <div class="flex flex-wrap justify-center gap-1 md:gap-2">
              ${e.tags.map(t=>`<span class="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium">${t}</span>`).join("")}
            </div>
          </div>
          
          <!-- Action Button -->
          <div class="text-center pt-2">
            <button onclick="openModal('${e.modalId}')"
              class="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-xs md:text-sm shadow-md hover:shadow-lg transform hover:scale-105">
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function m(){const e=Math.ceil(l.length/d);let t="";t+=`
    <button onclick="changePage(${i-1})" 
      class="px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 ${i===1?"opacity-50 cursor-not-allowed":""}" 
      ${i===1?"disabled":""}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
  `;for(let n=1;n<=e;n++)n===1||n===e||n>=i-1&&n<=i+1?t+=`
        <button onclick="changePage(${n})" 
          class="px-3 py-2 ${n===i?"bg-blue-600 text-white":"text-gray-600 hover:text-blue-600 hover:bg-gray-100"} rounded-lg font-medium text-sm transition-colors duration-200">
          ${n}
        </button>
      `:(n===i-2||n===i+2)&&(t+='<span class="px-2 text-gray-400">...</span>');t+=`
    <button onclick="changePage(${i+1})" 
      class="px-3 py-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 ${i===e?"opacity-50 cursor-not-allowed":""}" 
      ${i===e?"disabled":""}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  `,document.getElementById("pagination").innerHTML=t}function v(e){const t=Math.ceil(l.length/d);e<1||e>t||(i=e,g(),m())}function g(){const e=document.getElementById("work-cards-container");e.children.length>0?(e.classList.add("fade-out"),setTimeout(()=>{c(),e.classList.remove("fade-out")},250)):c()}function c(){console.log("actuallyRenderWorkCards called");const e=(i-1)*d,t=e+d,n=l.slice(e,t);console.log("Current page data:",n);const o=n.map(s=>u(s)).join("");console.log("Generated HTML length:",o.length);const a=document.getElementById("work-cards-container");a.innerHTML=o,console.log("HTML inserted into container"),setTimeout(()=>{const s=document.querySelectorAll(".work-card");console.log("Found work cards after rendering:",s.length),s.forEach((r,p)=>{r.style.animationDelay=`${p*.2}s`,r.classList.add("animate-in")})},100)}function h(e){document.getElementById(e).classList.remove("hidden")}function b(e){document.getElementById(e).classList.add("hidden")}document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded, initializing..."),document.querySelectorAll("section").forEach(n=>{n.style.opacity="1",n.style.transform="translateY(0)",n.classList.remove("scroll-animate"),console.log("Section made visible:",n.className)});const t=document.getElementById("work-cards-container");console.log("Looking for work container:",t),t?(console.log("Work container found, rendering cards..."),console.log("Work data length:",l.length),console.log("Current page:",i),console.log("Items per page:",d),g(),m(),setTimeout(()=>{const n=document.querySelectorAll(".work-card");console.log("Rendered work cards:",n.length),n.length===0&&(console.error("No work cards were rendered!"),t.innerHTML=`
          <div class="bg-white rounded-xl shadow p-4 md:p-5 flex flex-col relative overflow-hidden group work-card">
            <div class="font-semibold text-base md:text-lg mb-2">TEST CARD</div>
            <div class="text-gray-600 text-sm">This is a test card to verify rendering works.</div>
          </div>
        `)},500)):console.error("Work container not found!"),f(),x(),y(),console.log("Initialization complete")});window.changePage=v;window.openModal=h;window.closeModal=b;function f(){console.log("Setting up scroll animations...");const e={threshold:.1,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(a.target.classList.add("animate-in"),t.unobserve(a.target))})},e);document.querySelectorAll(".animate-on-scroll, .work-card, .skill-tag").forEach(o=>{o.classList.add("scroll-animate"),t.observe(o),console.log("Observing element for animation:",o.className)})}function x(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();const o=t.getAttribute("href"),a=document.querySelector(o);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})})}function y(){const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e&&t&&(e.addEventListener("click",function(){t.classList.toggle("hidden"),t.classList.toggle("flex");const o=e.querySelector("svg");t.classList.contains("flex")?o.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>':o.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'}),t.querySelectorAll("a").forEach(o=>{o.addEventListener("click",function(){t.classList.add("hidden"),t.classList.remove("flex");const a=e.querySelector("svg");a.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'})}),document.addEventListener("click",function(o){if(!e.contains(o.target)&&!t.contains(o.target)){t.classList.add("hidden"),t.classList.remove("flex");const a=e.querySelector("svg");a.innerHTML='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'}}))}
