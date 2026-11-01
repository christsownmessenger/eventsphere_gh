/* ============================================================
   EVENTSPHERE GH — CONFIG
   ============================================================ */
const CONFIG = {
  brand: 'EventSphere GH',
  tagline: 'Find · Book · Celebrate',
  whatsapp: '233550969447', // Your platform WhatsApp
  location: 'Ho, Volta Region',
};

const CATEGORIES = [
  { id: 'all', label: 'All Vendors', icon: 'star' },
  { id: 'dj', label: 'DJs & Music', icon: 'music' },
  { id: 'photo', label: 'Photography', icon: 'camera' },
  { id: 'decor', label: 'Decoration', icon: 'sparkle' },
  { id: 'catering', label: 'Catering', icon: 'utensils' },
  { id: 'mc', label: 'MCs & Hosts', icon: 'mic' },
];

const PACKAGES = [
  { id: 'dj1', category: 'dj', name: 'Wedding Full-Day DJ Set', duration: '8 hrs', price: 2500, desc: 'Premium sound, MC support, ceremony + reception music, full lighting rig.' },
  { id: 'dj2', category: 'dj', name: 'Birthday Party DJ Package', duration: '4 hrs', price: 1200, desc: 'Sound system, party lighting, curated playlist, live mixing.' },
  { id: 'dj3', category: 'dj', name: 'Corporate Event DJ', duration: '5 hrs', price: 1800, desc: 'Professional sound, background ambiance, announcement support.' },
  { id: 'ph1', category: 'photo', name: 'Wedding Photography + Video', duration: 'Full day', price: 4000, desc: 'Two photographers, one videographer, edited gallery, highlight reel.' },
  { id: 'ph2', category: 'photo', name: 'Event Photography (Half Day)', duration: '4 hrs', price: 1500, desc: 'One photographer, 200+ edited photos, online delivery.' },
  { id: 'ph3', category: 'photo', name: 'Graduation / Outdooring Shoot', duration: '2 hrs', price: 800, desc: 'One photographer, studio or outdoor, 100+ edited photos.' },
  { id: 'dc1', category: 'decor', name: 'Wedding Decor Package (200 guests)', duration: 'Setup + teardown', price: 6000, desc: 'Stage, aisle, floral arrangements, drapery, lighting, seating decor.' },
  { id: 'dc2', category: 'decor', name: 'Birthday Decor Package', duration: 'Setup + teardown', price: 1800, desc: 'Balloon arch, backdrop, table settings, themed styling.' },
  { id: 'dc3', category: 'decor', name: 'Corporate Event Decor', duration: 'Setup + teardown', price: 3500, desc: 'Branded backdrop, stage setup, professional lighting.' },
  { id: 'ct1', category: 'catering', name: 'Wedding Catering (100 guests)', duration: 'Full service', price: 8000, desc: '3-course meal, servers, plates, cutlery, setup, cleanup.' },
  { id: 'ct2', category: 'catering', name: 'Birthday Catering (50 guests)', duration: 'Full service', price: 3000, desc: 'Buffet, servers, disposable plates, setup, cleanup.' },
  { id: 'ct3', category: 'catering', name: 'Corporate Lunch Catering', duration: 'Per event', price: 1500, desc: 'Professional lunch boxes, drinks, delivery, servers.' },
  { id: 'mc1', category: 'mc', name: 'Wedding MC (Bilingual)', duration: 'Full event', price: 2000, desc: 'English + Ewe, coordinates flow, engages guests, ceremony + reception.' },
  { id: 'mc2', category: 'mc', name: 'Corporate Event MC', duration: 'Half day', price: 1500, desc: 'Professional hosting, agenda flow, guest introductions.' },
  { id: 'mc3', category: 'mc', name: 'Birthday Party Host', duration: '3 hrs', price: 700, desc: 'Games, entertainment, crowd engagement for kids and adults.' },
];

const VENDORS = [
  {
    id: 'vd1',
    name: 'DJ Saqcess Gh',
    role: 'Radio & Club DJ',
    rating: 4.9, reviews: 47,
    category: 'dj',
    location: 'Nfodzo Street, Ho',
    phone: '233548284804',
    img: 'https://images.unsplash.com/photo-1571266028243-d220c6a9a4e2?w=600',
    top: ['Wedding DJ','Club Sets','Mixtape Hosting']
  },
  {
    id: 'vd2',
    name: 'DJ Thosis Gh',
    role: 'Event & Party DJ',
    rating: 4.8, reviews: 32,
    category: 'dj',
    location: 'Ho, Volta Region',
    phone: '233243876001',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
    top: ['Private Parties','Clubs','Regional Events']
  },
  {
    id: 'vd3',
    name: 'Marvlous Dish',
    role: 'Catering & Event Management',
    rating: 4.9, reviews: 28,
    category: 'catering',
    location: 'Housing Junction, Ho',
    phone: '233242283679',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600',
    top: ['Event Catering', 'Buffet Service', 'Party Setup']
  },
  {
    id: 'vd4',
    name: 'Bels Rentals & Decor',
    role: 'Event Rentals & Styling',
    rating: 4.0, reviews: 4,
    category: 'decor',
    location: 'Sokode Accra Rd, Ho',
    phone: '233242062090',
    img: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600',
    top: ['Event Rentals','Logistics','Styling']
  },
  {
    id: 'vd5',
    name: 'Classic Photography GH',
    role: 'Wedding & Event Photographer',
    rating: 5.0, reviews: 2,
    category: 'photo',
    location: 'HTU Gate, Ho',
    phone: '233245116346', // Might be mixed up with Fatrock B
    img: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=600',
    top: ['Weddings','Engagements','Birthdays','Portraits']
  },
  {
    id: 'vd6',
    name: 'Emperor Events',
    role: 'Event Decor & Planner',
    rating: 4.7, reviews: 18,
    category: 'decor',
    location: 'Horseradish Street, Ho',
    phone: 'PLACEHOLDER', 
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
    top: ['Party Decor','Birthday Setups','Event Planning']
  },
  {
    id: 'vd7',
    name: 'Patony Events',
    role: 'Full-Service Event Planner',
    rating: 5.0, reviews: 8,
    category: 'decor',
    location: 'Ho · Keta · Accra · Tema',
    phone: 'PLACEHOLDER',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
    top: ['Decor','Catering','Custom Cakes']
  },
  {
    id: 'vd8',
    name: 'Jijor Yaa Queen',
    role: 'Event Host & MC',
    rating: 5.0, reviews: 24,
    category: 'mc',
    location: 'Ho, Volta Region',
    phone: 'PLACEHOLDER',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
    top: ['Traditional Protocols','Dignitary Events','Cultural Festivals']
  },
];

const REVIEWS = [
  { id: 'r1', name: 'Ama D.', role: 'Bride, Ho', category: 'dj', rating: 5, date: '2 weeks ago', text: 'DJ Saqcess made our wedding unforgettable. Perfect music for both the ceremony and reception. Our guests are still talking about it!' },
  { id: 'r2', name: 'Esi K.', role: 'Birthday Client, Ho', category: 'catering', rating: 5, date: '2 weeks ago', text: 'Marvlous Dish catered my mother\'s 60th birthday. The food was amazing and they handled the setup perfectly. Highly recommended!' },
  { id: 'r3', name: 'Kofi M.', role: 'Club Manager, Ho', category: 'dj', rating: 5, date: '1 week ago', text: 'DJ Thosis knows how to control a crowd. He played at our club opening and the energy was unmatched.' },
  { id: 'r4', name: 'Yaa A.', role: 'Party Host, Ho', category: 'decor', rating: 4, date: '3 weeks ago', text: 'Bels Rentals provided the chairs and tables for my outdooring. The setup was decent and they were reliable.' },
];

const EVENT_TYPES = ['Wedding', 'Birthday', 'Corporate', 'Outdooring', 'Funeral', 'Other'];

const PLANS = [
  { 
    name: 'Custom Booking Site', 
    price: 1200, 
    period: '/ one-time', 
    desc: 'Your own personal website with your packages, photos, and WhatsApp booking.', 
    features: ['Custom single-page site', 'WhatsApp booking integration', 'Mobile-friendly & fast', 'Hosting included for 1 year'], 
    cta: 'Get Started' 
  },
  { 
    name: 'Site + Custom Domain', 
    price: 1500, 
    period: '/ one-time', 
    desc: 'Everything in the Custom Site, plus your own web address (like yourname.com).', 
    features: ['Everything in Custom Site', 'Custom domain setup', 'Professional email address', 'Priority support'], 
    cta: 'Go Pro', 
    featured: true 
  },
  { 
    name: 'Monthly Maintenance', 
    price: 150, 
    period: '/ month', 
    desc: 'For clients who want me to handle all the updates for them.', 
    features: ['Hosting management', 'Up to 2 updates per month', 'Photo swaps & price changes', 'WhatsApp support'], 
    cta: 'Add Maintenance' 
  },
];

/* ============================================================ */

const ICONS = {
  star: '<path d="M12 2 9.5 9 2 9.5l6 5-2 7.5L12 18l6 4-2-7.5 6-5L14.5 9 12 2Z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  sparkle: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16 2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3Z"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>',
};

const iconSvg = (name, cls = 'w-4 h-4') => {
  const fill = ['star'].includes(name);
  return `<svg class="${cls}" ${fill ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2"'} viewBox="0 0 24 24">${ICONS[name]||ICONS.star}</svg>`;
};

const ghs = (n) => 'GH₵ ' + n.toLocaleString();

let activeCategory = 'all';
let selectedVendor = null;
let selectedPackage = null;
let selectedEventType = 'Wedding';
let currentStep = 1;

/* ============ RENDER: Category Tabs ============ */
function renderCategoryTabs() {
  document.getElementById('categoryTabs').innerHTML = CATEGORIES.map(c => `
    <button onclick="setCategory('${c.id}')" class="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeCategory===c.id ? 'bg-gradient-to-r from-slate-800 to-slate-800/90 text-white shadow-lg border border-slate-700 ring-1 ring-amber-500/20' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'}">
      <span class="${activeCategory===c.id?'text-amber-400':'text-slate-400'}">${iconSvg(c.icon)}</span>
      <span>${c.label}</span>
    </button>
  `).join('');
}

/* ============ RENDER: Category Pillars ============ */
function renderPillars() {
  const cats = CATEGORIES.filter(c => c.id !== 'all');
  document.getElementById('pillars').innerHTML = cats.map(c => `
    <div class="glass rounded-2xl p-6 card-hover">
      <div class="h-12 w-12 rounded-xl flex items-center justify-center text-amber-400 mb-4" style="background:rgba(245,158,11,.1); border:1px solid rgba(245,158,11,.2);">
        ${iconSvg(c.icon, 'w-6 h-6')}
      </div>
      <h3 class="text-lg font-bold text-white">${c.label}</h3>
      <p class="text-xs text-slate-400 mt-2 leading-relaxed">${categoryBlurb(c.id)}</p>
    </div>
  `).join('');
}

function categoryBlurb(id) {
  return {
    dj: 'Professional DJs, sound systems, and live bands for weddings and parties.',
    photo: 'Photographers and videographers to capture every moment beautifully.',
    decor: 'Event decorators creating stunning stage, floral, and venue setups.',
    catering: 'Caterers serving everything from local Ghanaian dishes to fine dining.',
    mc: 'Bilingual MCs and hosts to keep your event flowing perfectly.',
  }[id] || '';
}

/* ============ RENDER: Vendor Grid ============ */
function renderVendors() {
  const q = (document.getElementById('searchQuery')?.value || '').toLowerCase();
  const list = VENDORS.filter(v => {
    const matchesCat = activeCategory === 'all' || v.category === activeCategory;
    const matchesQ = !q || v.name.toLowerCase().includes(q) || v.role.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  document.getElementById('vendorGrid').innerHTML = list.map(v => `
    <div class="glass rounded-2xl overflow-hidden card-hover">
      <div class="relative h-52 overflow-hidden">
        <img src="${v.img}" alt="${v.name}" class="w-full h-full object-cover" />
        <div class="absolute inset-0" style="background:linear-gradient(to top, #0a0710, transparent);"></div>
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-300" style="background:rgba(10,7,16,.8); border:1px solid rgba(245,158,11,.3);">${v.role}</span>
        <div class="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-md text-xs" style="background:rgba(10,7,16,.8); border:1px solid rgba(255,255,255,.08);">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2 9.5 9 2 9.5l6 5-2 7.5L12 18l6 4-2-7.5 6-5L14.5 9 12 2Z"/></svg>
          <span class="font-bold text-white">${v.rating}</span>
          <span class="text-slate-400">(${v.reviews})</span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-bold text-white">${v.name}</h3>
        <p class="text-xs text-slate-400 mt-1 flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          ${v.location}
        </p>
        <div class="mt-4 pt-4 border-t border-white/5">
          <p class="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">Specialties:</p>
          <div class="flex flex-wrap gap-1.5">
            ${v.top.map(t => `<span class="px-2.5 py-1 rounded-md text-[11px] text-slate-300" style="background:rgba(26,18,38,.8);">${t}</span>`).join('')}
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <span class="inline-flex items-center text-[11px] text-emerald-400 font-medium">
            <span class="w-2 h-2 rounded-full bg-emerald-400 mr-1.5"></span>
            Available
          </span>
          <button onclick="openBooking('${v.id}')" class="px-4 py-2 brand-gradient rounded-lg text-xs font-semibold text-white shadow-md">
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  `).join('') || '<p class="col-span-full text-center text-slate-500 py-12">No vendors match your search.</p>';
}

/* ============ RENDER: Package Grid ============ */
function renderPackages() {
  const list = PACKAGES.filter(p => activeCategory === 'all' || p.category === activeCategory);
  document.getElementById('packageGrid').innerHTML = list.map(p => `
    <div class="glass rounded-xl p-6 card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-start justify-between">
          <div>
            <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase mb-2" style="background:rgba(168,85,247,.1); color:#d8b4fe; border:1px solid rgba(168,85,247,.2);">${p.category.toUpperCase()}</span>
            <h3 class="text-base font-bold text-white">${p.name}</h3>
          </div>
          <div class="text-right">
            <span class="text-xl font-extrabold text-white">${ghs(p.price)}</span>
            <span class="block text-[11px] text-slate-400 mt-0.5">${p.duration}</span>
          </div>
        </div>
        <p class="text-xs text-slate-400 mt-3 leading-relaxed">${p.desc}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-end">
        <button onclick="openBooking(null, '${p.id}')" class="px-4 py-2 rounded-lg text-xs font-semibold text-white flex items-center gap-1" style="background:rgba(45,31,61,.8); border:1px solid rgba(255,255,255,.08);">
          Inquire
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

/* ============ RENDER: Reviews ============ */
function renderReviews() {
  document.getElementById('reviewGrid').innerHTML = REVIEWS.map(r => `
    <div class="glass rounded-2xl p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex gap-1 text-amber-400">
          ${'★'.repeat(r.rating).split('').map(() => '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2 9.5 9 2 9.5l6 5-2 7.5L12 18l6 4-2-7.5 6-5L14.5 9 12 2Z"/></svg>').join('')}
        </div>
        <span class="text-[11px] text-slate-500">${r.date}</span>
      </div>
      <p class="text-xs text-slate-300 italic leading-relaxed">"${r.text}"</p>
      <div class="mt-6 pt-4 border-t border-white/5">
        <h4 class="text-xs font-bold text-white">${r.name}</h4>
        <span class="text-[10px] text-slate-400">${r.role}</span>
      </div>
    </div>
  `).join('');
}

/* ============ RENDER: Plans ============ */
function renderPlans() {
  // Your WhatsApp number for plan inquiries
  const myWhatsApp = '233550969447'; // REPLACE WITH YOUR REAL NUMBER
  
  document.getElementById('planGrid').innerHTML = PLANS.map((p, i) => {
    // Create the WhatsApp message for this specific plan
    const message = `Hello Shalom, I'm interested in the "${p.name}" plan for my business. Please send me more details.`;
    const waLink = `https://wa.me/${myWhatsApp}?text=${encodeURIComponent(message)}`;

    return `
    <div class="rounded-2xl p-6 flex flex-col justify-between shadow-xl relative ${p.featured ? 'border-2 border-amber-500/60' : 'glass border border-white/5'}" style="${p.featured ? 'background:linear-gradient(to bottom, rgba(18,12,28,.95), rgba(10,7,16,.95));' : ''}">
      ${p.featured ? '<span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 brand-gradient rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Most Popular</span>' : ''}
      <div>
        <span class="text-xs font-bold uppercase tracking-wider ${p.featured ? 'text-amber-400' : 'text-slate-400'}">${p.name}</span>
        <div class="mt-2 flex items-baseline gap-1">
          <span class="text-3xl font-extrabold text-white">${ghs(p.price)}</span>
          <span class="text-xs text-slate-400">${p.period}</span>
        </div>
        <p class="text-xs text-slate-400 mt-3">${p.desc}</p>
        <ul class="mt-6 space-y-3 text-xs text-slate-300">
          ${p.features.map(f => `<li class="flex items-center gap-2"><svg class="w-4 h-4 ${p.featured ? 'text-amber-400' : 'text-emerald-400'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7"/></svg>${f}</li>`).join('')}
        </ul>
      </div>
      <a href="${waLink}" target="_blank" class="mt-8 w-full py-3 rounded-xl font-semibold text-xs text-center block transition-all hover:brightness-110 ${p.featured ? 'brand-gradient text-black shadow-lg' : 'text-white hover:bg-slate-700'}" ${!p.featured ? 'style="background:rgba(45,31,61,.8);"' : ''}>
        ${p.cta}
      </a>
    </div>
  `}).join('');
}

/* ============ CATEGORY SWITCH ============ */
function setCategory(id) {
  activeCategory = id;
  renderCategoryTabs();
  renderVendors();
  renderPackages();
}

document.getElementById('searchQuery')?.addEventListener('input', renderVendors);

/* ============ BOOKING MODAL ============ */
function openBooking(vendorId = null, packageId = null) {
  if (vendorId) selectedVendor = VENDORS.find(v => v.id === vendorId);
  if (packageId) {
    selectedPackage = PACKAGES.find(p => p.id === packageId);
    if (!selectedVendor && selectedPackage) {
      selectedVendor = VENDORS.find(v => v.category === selectedPackage.category) || VENDORS[0];
    }
  }
  if (!selectedVendor) selectedVendor = VENDORS[0];
  if (!selectedPackage) selectedPackage = PACKAGES.find(p => p.category === selectedVendor.category) || PACKAGES[0];

  currentStep = 1;
  document.getElementById('successPanel').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('modalVendorName').textContent = selectedVendor.name;
  renderVendorSelector();
  renderEventTypes();
  updateStepLabels();
  document.getElementById('bookingModal').classList.remove('hidden');
  document.getElementById('bookingModal').classList.add('flex');
}

function closeBooking() {
  document.getElementById('bookingModal').classList.add('hidden');
  document.getElementById('bookingModal').classList.remove('flex');
}

function renderVendorSelector() {
  document.getElementById('vendorSelector').innerHTML = VENDORS.map(v => `
    <div onclick="selectVendor('${v.id}')" class="p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${selectedVendor?.id===v.id ? 'border-amber-500 bg-amber-500/10' : 'border-white/5 hover:border-white/20'}" style="${selectedVendor?.id!==v.id ? 'background:rgba(10,7,16,.8);' : ''}">
      <img src="${v.img}" class="w-10 h-10 rounded-full object-cover" alt="${v.name}" />
      <div class="overflow-hidden">
        <p class="text-xs font-bold text-white truncate">${v.name}</p>
        <span class="text-[10px] text-amber-400">★ ${v.rating}</span>
      </div>
    </div>
  `).join('');
}

function selectVendor(id) {
  selectedVendor = VENDORS.find(v => v.id === id);
  selectedPackage = PACKAGES.find(p => p.category === selectedVendor.category) || PACKAGES[0];
  document.getElementById('modalVendorName').textContent = selectedVendor.name;
  renderVendorSelector();
}

function renderEventTypes() {
  document.getElementById('eventTypes').innerHTML = EVENT_TYPES.map(t => `
    <button onclick="selectEventType('${t}')" class="py-2 rounded-lg text-xs font-semibold border transition-all ${selectedEventType===t ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'border-white/5 text-slate-400 hover:text-white'}" style="${selectedEventType!==t ? 'background:rgba(10,7,16,.8);' : ''}">
      ${t}
    </button>
  `).join('');
}

function selectEventType(t) {
  selectedEventType = t;
  renderEventTypes();
}

function goStep(n) {
  currentStep = n;
  document.getElementById('step1').classList.toggle('hidden', n !== 1);
  document.getElementById('step2').classList.toggle('hidden', n !== 2);
  document.getElementById('step3').classList.toggle('hidden', n !== 3);
  updateStepLabels();
  if (n === 3) populateReview();
}

function updateStepLabels() {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('stepLabel' + i);
    if (el) el.className = i === currentStep ? 'text-amber-400 font-bold' : '';
  }
}

function populateReview() {
  const dateVal = document.getElementById('eventDate').value || 'Not set';
  document.getElementById('rvVendor').textContent = selectedVendor.name;
  document.getElementById('rvPackage').textContent = selectedPackage.name;
  document.getElementById('rvDate').textContent = dateVal;
  document.getElementById('rvType').textContent = selectedEventType;
  document.getElementById('rvGuests').textContent = document.getElementById('guestCount').value;
  document.getElementById('rvLocation').textContent = document.getElementById('eventLocation').value;
  document.getElementById('rvPrice').textContent = ghs(selectedPackage.price);
}

function sendInquiry() {
  const name = document.getElementById('clientName').value || 'Client';
  const phone = document.getElementById('clientPhone').value || 'Not provided';
  const date = document.getElementById('eventDate').value || 'Not set';
  const guests = document.getElementById('guestCount').value;
  const loc = document.getElementById('eventLocation').value;

  const msg = `Hello ${selectedVendor.name},%0A%0AI found you on EventSphere GH and I'd like to inquire about your services.%0A%0A*Client:* ${encodeURIComponent(name)}%0A*My WhatsApp:* ${encodeURIComponent(phone)}%0A*Package:* ${encodeURIComponent(selectedPackage.name)}%0A*Event Type:* ${encodeURIComponent(selectedEventType)}%0A*Event Date:* ${encodeURIComponent(date)}%0A*Guests:* ${encodeURIComponent(guests)}%0A*Location:* ${encodeURIComponent(loc)}%0A%0AEstimated budget: ${ghs(selectedPackage.price)}.%0A%0APlease let me know availability and next steps. Thank you!`;

  const url = `https://wa.me/${selectedVendor.phone}?text=${msg}`;
  window.open(url, '_blank');

  document.getElementById('step1').classList.add('hidden');
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('successPanel').classList.remove('hidden');
}

/* ============ INIT ============ */
renderCategoryTabs();
renderPillars();
renderVendors();
renderPackages();
renderReviews();
renderPlans();
