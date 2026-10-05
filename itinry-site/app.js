// =====================================================================
// Configuração do site
// =====================================================================
// Troque pelo endereço do Instagram do Itinry (ex.: 'https://www.instagram.com/seuperfil')
const INSTAGRAM_URL = 'https://www.instagram.com/';

// =====================================================================
// Textos em inglês. O português fica direto no HTML.
// =====================================================================
const EN = {
  'skip': 'Skip to content',
  'nav.how': 'How it works', 'nav.features': 'Features', 'nav.pricing': 'Pricing', 'nav.faq': 'FAQ',
  'nav.login': 'Log in', 'nav.start': 'Start free',
  'hero.title': 'Travel like you’ve been there before',
  'hero.lead': 'Itinry builds your itinerary with AI, based on tips from travelers who have visited more than 50 countries. See what to do, what it costs, where to eat and how to get around, and carry the whole trip in your pocket.',
  'hero.cta': 'Create my first itinerary', 'hero.secondary': 'See how it works',
  'hero.fine': 'Free to start. Works on desktop and mobile, nothing to download.',
  'demo.day': 'Day 3', 'demo.title': 'Lisbon: Belém and the Tagus', 'demo.cost': 'Estimated spend: €35 to 50 per person',
  'demo.i1': 'Jerónimos Monastery', 'demo.book': 'Book ahead', 'demo.w1': '🚶 6 min walk',
  'demo.i2': 'Pastéis de Belém', 'demo.tip': '💡 The line moves fast; eat at the counter.', 'demo.w2': '🚶 9 min walk',
  'demo.i3': 'Belém Tower and the riverside', 'demo.free': 'Free', 'demo.w3': '🚇 18 min by train',
  'demo.i4': 'Sunset at Senhora do Monte viewpoint', 'demo.curator': 'Curator’s tip: go late afternoon, the light is different.',
  'how.title': 'From destination to the last day, in three steps',
  'how.s1t': 'Choose where to go', 'how.s1': 'Search any city, island or country. See the guide with photos, things to do, where to eat and where to stay, and save what you like.',
  'how.s2t': 'AI builds your itinerary', 'how.s2': 'One or several destinations, up to 30 days. It decides how long to stay in each place and organizes every day by proximity, with prices and free options.',
  'how.s3t': 'Travel with everything in your pocket', 'how.s3': 'Live flight status, stays, tickets, documents and your day-by-day plan in one place, with alerts on your phone.',
  'feat.title': 'Everything your trip needs',
  'feat.f1t': 'Itineraries that adapt to you', 'feat.f1': 'Reorder cities, move activities between days, search for something different each day or ask for more options. The map shows the route and how long it takes on foot, by transit or by car.',
  'feat.f2t': 'Chat with Cami', 'feat.f2': 'Cami is Itinry’s AI assistant. She knows your itinerary and bookings, answers questions and, when you ask, saves notes, adds activities and completes your document checklist.',
  'feat.chat1': 'Add a dinner with a view on day 3', 'feat.chat2': 'Done! I added a restaurant at São Pedro viewpoint at 8 pm. Book ahead: it fills up on weekends.', 'feat.chat3': '✓ Added to day 3',
  'feat.f3t': 'Your trip, organized and live', 'feat.f3': 'Add flights, trains, hotels and tours with tickets attached. Itinry tracks delays, gates and baggage belts and alerts you on your phone. Everything shows up on your calendar.',
  'feat.gate': 'Boarding: gate B12',
  'feat.f4t': 'Where to eat, for real', 'feat.f4': 'Local dishes, street food, markets, cafés, vegetarian and great-value spots in every city, with what to order and what it costs. Tap to see Google reviews and photos.',
  'feat.food1': '🍲 Local dishes', 'feat.food2': '🌭 Street food', 'feat.food3': '🧺 Markets', 'feat.food4': '☕ Cafés', 'feat.food5': '🥗 Vegetarian', 'feat.food6': '💰 Great value',
  'cur.title': 'Made by travelers who have visited more than 50 countries',
  'cur.text': 'Itinry was born from the travels of a couple who turned years on the road into practical tips: when to arrive, which dish is worth the line, the best area to stay. The AI uses this curation as the starting point for your itinerary.',
  'cur.cta': 'Follow on Instagram',
  'price.title': 'Start for free', 'price.free': 'Free', 'price.freeprice': 'US$ 0',
  'price.f1': '1 AI itinerary per month', 'price.f2': 'Destination and food guides', 'price.f3': 'My trips, bookings and documents', 'price.f4': '30 messages a month with Cami',
  'price.freecta': 'Create a free account', 'price.proprice': 'US$ 7.99', 'price.month': ' per month',
  'price.p1': 'Unlimited itineraries, up to 30 days and multiple destinations', 'price.p2': 'Live flight status and phone alerts',
  'price.p3': 'Travel times between each stop of the day', 'price.p4': 'All points and miles deals', 'price.p5': 'Unlimited Cami and exclusive curated itineraries',
  'price.procta': 'Try 7 days free', 'price.note': 'Launch pricing. Cancel anytime.',
  'faq.title': 'Frequently asked questions',
  'faq.q1': 'Do I need to download an app?', 'faq.a1': 'No. Itinry works in your desktop and mobile browser. If you like, add it to your home screen: it opens like an app, works offline and sends alerts.',
  'faq.q2': 'Are prices and information reliable?', 'faq.a2': 'Itineraries start from curated, real places, and prices are approximate ranges. Hours and rules change, so we always recommend checking the official website before you go.',
  'faq.q3': 'Is Cami a real person?', 'faq.a3': 'No. Cami is an AI assistant inspired by Itinry’s curation. She can make mistakes, so double-check important information.',
  'faq.q4': 'Does it work for travelers from Brazil and the US?', 'faq.a4': 'Yes. Tell us your passport and Itinry adjusts documents, currency and points deals for your country.',
  'faq.q5': 'How does Itinry make money?', 'faq.a5': 'Through the Premium plan and commissions from partners such as hotel and tour sites. You don’t pay anything extra for booking through our links.',
  'final.title': 'Where to next?', 'final.cta': 'Create my free itinerary',
  'foot.app': 'Open the app', 'foot.privacy': 'Privacy', 'foot.terms': 'Terms of use',
  'foot.copy': '© 2026 Itinry. Some links are from partners and may earn us a commission, at no extra cost to you.',
};

// =====================================================================
// Troca de idioma: guarda o texto em português e aplica o inglês
// =====================================================================
const nodes = [...document.querySelectorAll('[data-i18n]')];
nodes.forEach((n) => { n.dataset.pt = n.textContent; });
const toggle = document.querySelector('[data-lang-toggle]');

function setLang(lang) {
  const en = lang === 'en';
  nodes.forEach((n) => { const t = en ? EN[n.dataset.i18n] : n.dataset.pt; if (t) n.textContent = t; });
  document.documentElement.lang = en ? 'en' : 'pt-BR';
  if (toggle) { toggle.textContent = en ? 'PT' : 'EN'; toggle.setAttribute('aria-label', en ? 'Mudar para português' : 'Switch to English'); }
  try { localStorage.setItem('itinry-lang', lang); } catch (e) { /* navegador sem armazenamento */ }
}

let saved = null;
try { saved = localStorage.getItem('itinry-lang'); } catch (e) { /* ignora */ }
// Idioma inicial: o que a pessoa escolheu antes ou, na primeira visita, o idioma do navegador
const initial = saved || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en');
if (initial === 'en') setLang('en');
toggle?.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en'));

document.querySelectorAll('[data-instagram]').forEach((a) => { a.href = INSTAGRAM_URL; a.target = '_blank'; a.rel = 'noopener'; });
