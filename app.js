/* PK Hosting Application.
   Prices verified live on pkhosting.com/pricing/ on 11 November 2026.
   Black Friday first-year prices; renewals are the full price.
   No data leaves the browser. Cart and quotes use localStorage only.
*/
"use strict";

/* ---------- Verified price data (11 Nov 2026) ---------- */
var PLANS = [
  { id: "shared-personal", cat: "shared", name: "Personal", tagline: "For students, hobbyists and individuals", badge: "Economical", first: 4490, renew: 6990, discount: 36,
    features: ["1 website", "5 GB SSD storage", "Unmetered bandwidth (fair use)", "5 email accounts", "Free .com with a 3-year term", "Free SSL certificate", "Daily backups, 1-day retention", "WordPress setup help", "Free migration"],
    spec: { Websites: "1", Storage: "5 GB SSD", "Email accounts": "5", Backups: "Daily, 1-day retention", "Free .com": "Yes, with 3-year term", SSL: "Free", "Control panel": "Hestia" } },
  { id: "shared-business", cat: "shared", name: "Business", tagline: "For growing businesses and teams", badge: "Most Popular", first: 11990, renew: 19990, discount: 40,
    features: ["5 websites", "25 GB SSD storage", "Unmetered bandwidth (fair use)", "25 email accounts", "Free .com with a 3-year term", "Free SSL certificate", "Daily backups, 3-day retention", "Priority setup", "Free migration"],
    spec: { Websites: "5", Storage: "25 GB SSD", "Email accounts": "25", Backups: "Daily, 3-day retention", "Free .com": "Yes, with 3-year term", SSL: "Free", "Control panel": "Hestia" } },
  { id: "shared-professional", cat: "shared", name: "Professional", tagline: "For software houses and corporates", badge: "Best Value", first: 23990, renew: 39990, discount: 40,
    features: ["10 websites", "50 GB SSD storage", "Unmetered bandwidth (fair use)", "50 email accounts", "Free .com with a 3-year term", "Free SSL certificate", "Daily backups, 5-day retention", "Staging tools", "Priority support", "Free migration"],
    spec: { Websites: "10", Storage: "50 GB SSD", "Email accounts": "50", Backups: "Daily, 5-day retention", "Free .com": "Yes, with 3-year term", SSL: "Free", "Control panel": "Hestia" } },

  { id: "wp-starter", cat: "wordpress", name: "WP Starter", tagline: "For a single WordPress site", badge: "Economical", first: 5990, renew: 9999, discount: 40,
    features: ["1 WordPress website", "7 GB SSD storage", "Unmetered bandwidth (fair use)", "Free SSL certificate", "Daily backups", "1-click WordPress install", "Free migration"],
    spec: { Websites: "1", Storage: "7 GB SSD", "Email accounts": "Email and database support", Backups: "Daily", "Free .com": "No", SSL: "Free", "Control panel": "Hestia" } },
  { id: "wp-business", cat: "wordpress", name: "WP Business", tagline: "For growing sites and small agencies", badge: "Most Popular", first: 12990, renew: 19999, discount: 35,
    features: ["3 WordPress websites", "20 GB SSD storage", "Unmetered bandwidth (fair use)", "Free SSL certificate", "Daily backups", "1-click WordPress install", "Priority setup and support", "Free migration"],
    spec: { Websites: "3", Storage: "20 GB SSD", "Email accounts": "Email and database support", Backups: "Daily", "Free .com": "No", SSL: "Free", "Control panel": "Hestia" } },
  { id: "wp-pro", cat: "wordpress", name: "WP Pro", tagline: "For studios running many WP sites", badge: "Best Value", first: 24990, renew: 39999, discount: 38,
    features: ["10 WordPress websites", "30 GB SSD storage", "Unmetered bandwidth (fair use)", "Free SSL certificate", "Daily backups", "1-click WordPress install", "Priority support", "Free migration"],
    spec: { Websites: "10", Storage: "30 GB SSD", "Email accounts": "Email and database support", Backups: "Daily", "Free .com": "No", SSL: "Free", "Control panel": "Hestia" } },

  { id: "reseller-r1", cat: "reseller", name: "Reseller R1", tagline: "Launch your hosting brand", badge: "Starter", first: 11990, renew: 14990, discount: 20,
    features: ["25 GB SSD storage", "Unmetered bandwidth (fair use)", "Managed hosting platform", "Client dashboard", "Private nameservers", "Free SSL for all accounts", "Free migration"],
    spec: { Websites: "Your client accounts", Storage: "25 GB SSD", "Email accounts": "Per client account", Backups: "Managed platform", "Free .com": "No", SSL: "Free for all accounts", "Control panel": "Hestia" } },
  { id: "reseller-r2", cat: "reseller", name: "Reseller R2", tagline: "Best storage-to-price fit for a growing client list", badge: "Most Popular", first: 23990, renew: 29990, discount: 20,
    features: ["60 GB SSD storage", "Unmetered bandwidth (fair use)", "Managed hosting platform", "Client dashboard", "Private nameservers", "Free SSL for all accounts", "Priority support", "Free migration"],
    spec: { Websites: "Your client accounts", Storage: "60 GB SSD", "Email accounts": "Per client account", Backups: "Managed platform", "Free .com": "No", SSL: "Free for all accounts", "Control panel": "Hestia" } },
  { id: "reseller-r3", cat: "reseller", name: "Reseller R3", tagline: "Highest reseller capacity for established agencies", badge: "High Capacity", first: 39990, renew: 49990, discount: 20,
    features: ["120 GB SSD storage", "Unmetered bandwidth (fair use)", "Managed hosting platform", "Client dashboard", "Private nameservers", "Free SSL for all accounts", "Dedicated IP on request", "Free migration"],
    spec: { Websites: "Your client accounts", Storage: "120 GB SSD", "Email accounts": "Per client account", Backups: "Managed platform", "Free .com": "No", SSL: "Free for all accounts", "Control panel": "Hestia" } },

  { id: "cloud-starter", cat: "cloud_vps", name: "Cloud VPS Starter", tagline: "Best-value entry VPS, Europe", badge: "Best Value", first: 32990, renew: 38490, discount: 14, vps: "cloud",
    features: ["4 vCPU", "8 GB RAM", "100 GB SSD storage (upgradable)", "200 Mbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "100 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 999/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "4 vCPU", RAM: "8 GB", Location: "Germany, Nuremberg" } },
  { id: "cloud-business", cat: "cloud_vps", name: "Cloud VPS Business", tagline: "Production workloads, Europe", badge: "Most Popular", first: 49490, renew: 54990, discount: 10, vps: "cloud",
    features: ["6 vCPU", "12 GB RAM", "200 GB SSD storage (upgradable)", "300 Mbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "200 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 1,499/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "6 vCPU", RAM: "12 GB", Location: "Germany, Nuremberg" } },
  { id: "cloud-pro", cat: "cloud_vps", name: "Cloud VPS Pro", tagline: "High-memory applications, Europe", badge: "High Memory", first: 76990, renew: 87990, discount: 13, vps: "cloud",
    features: ["8 vCPU", "24 GB RAM", "300 GB SSD storage (upgradable)", "600 Mbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "300 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 1,999/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "8 vCPU", RAM: "24 GB", Location: "Germany, Nuremberg" } },
  { id: "cloud-elite", cat: "cloud_vps", name: "Cloud VPS Elite", tagline: "Heavy workloads, Europe", badge: "Power", first: 137490, renew: 153990, discount: 11, vps: "cloud",
    features: ["12 vCPU", "48 GB RAM", "400 GB SSD storage (upgradable)", "800 Mbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "400 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 2,799/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "12 vCPU", RAM: "48 GB", Location: "Germany, Nuremberg" } },
  { id: "cloud-max", cat: "cloud_vps", name: "Cloud VPS Max", tagline: "Large-scale applications, Europe", badge: "Power", first: 197990, renew: 219990, discount: 10, vps: "cloud",
    features: ["16 vCPU", "64 GB RAM", "500 GB SSD storage (upgradable)", "1 Gbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "500 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 3,499/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "16 vCPU", RAM: "64 GB", Location: "Germany, Nuremberg" } },
  { id: "cloud-ultra", cat: "cloud_vps", name: "Cloud VPS Ultra", tagline: "Maximum performance, Europe", badge: "Maximum", first: 263990, renew: 296990, discount: 11, vps: "cloud",
    features: ["18 vCPU", "96 GB RAM", "600 GB SSD storage (upgradable)", "1 Gbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "IPv4 + IPv6 included", "Germany, Nuremberg", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "600 GB SSD", "Email accounts": "Your server", Backups: "Paid add-on from Rs 3,999/mo", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "18 vCPU", RAM: "96 GB", Location: "Germany, Nuremberg" } },

  { id: "premium-nano", cat: "premium_vps", name: "Premium VPS Nano", tagline: "Small apps on premium US network", badge: "Entry", first: 29690, renew: 32990, discount: 10, vps: "premium",
    features: ["2 vCPU", "4 GB RAM", "40 GB NVMe storage", "500 Mbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "Daily provider snapshot included", "Virginia, United States", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "40 GB NVMe", "Email accounts": "Your server", Backups: "Daily snapshot included", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "2 vCPU", RAM: "4 GB", Location: "Virginia, US" } },
  { id: "premium-starter", cat: "premium_vps", name: "Premium VPS Starter", tagline: "Premium 8 GB US network", badge: "Premium", first: 43990, renew: 49490, discount: 11, vps: "premium",
    features: ["4 vCPU", "8 GB RAM", "75 GB NVMe storage", "1 Gbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "Daily provider snapshot included", "Virginia, United States", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "75 GB NVMe", "Email accounts": "Your server", Backups: "Daily snapshot included", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "4 vCPU", RAM: "8 GB", Location: "Virginia, US" } },
  { id: "premium-pro", cat: "premium_vps", name: "Premium VPS Pro", tagline: "Premium 12 GB US network", badge: "Premium", first: 60490, renew: 65990, discount: 8, vps: "premium",
    features: ["6 vCPU", "12 GB RAM", "100 GB NVMe storage", "2 Gbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "Daily provider snapshot included", "Virginia, United States", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "100 GB NVMe", "Email accounts": "Your server", Backups: "Daily snapshot included", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "6 vCPU", RAM: "12 GB", Location: "Virginia, US" } },
  { id: "premium-max", cat: "premium_vps", name: "Premium VPS Max", tagline: "Premium 24 GB US network", badge: "Premium", first: 115489, renew: 126489, discount: 9, vps: "premium",
    features: ["8 vCPU", "24 GB RAM", "200 GB NVMe storage", "3 Gbit/s port", "Unmetered transfer (no GB quota)", "Root / SSH included", "Daily provider snapshot included", "Virginia, United States", "Free migration"],
    spec: { Websites: "Unlimited (your server)", Storage: "200 GB NVMe", "Email accounts": "Your server", Backups: "Daily snapshot included", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "8 vCPU", RAM: "24 GB", Location: "Virginia, US" } },

  { id: "dedicated-entry", cat: "dedicated", name: "Dedicated Entry", tagline: "Bare-metal starter, exact chassis confirmed before payment", badge: "Europe", first: 224991, renew: 249990, discount: 10,
    features: ["Typical minimum: 4 physical cores", "32 GB RAM", "2x480 GB SSD", "1 Gbps network", "1 IPv4, Germany (Nuremberg)", "Root / SSH included", "Linux; Windows by license", "Managed option available"],
    spec: { Websites: "Unlimited (your server)", Storage: "2x480 GB SSD (typical minimum)", "Email accounts": "Your server", Backups: "On the quote", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "4 cores (typical minimum)", RAM: "32 GB (typical minimum)", Location: "Germany, Nuremberg" } },
  { id: "dedicated-business", cat: "dedicated", name: "Dedicated Business", tagline: "Heavier production workloads", badge: "Popular", first: 251991, renew: 279990, discount: 10,
    features: ["Typical minimum: 8 physical cores", "64 GB RAM", "2x960 GB NVMe", "1 Gbps network", "1 IPv4, Germany (Nuremberg)", "Root / SSH included", "Linux; Windows by license", "Managed option available"],
    spec: { Websites: "Unlimited (your server)", Storage: "2x960 GB NVMe (typical minimum)", "Email accounts": "Your server", Backups: "On the quote", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "8 cores (typical minimum)", RAM: "64 GB (typical minimum)", Location: "Germany, Nuremberg" } },
  { id: "dedicated-enterprise", cat: "dedicated", name: "Dedicated Enterprise", tagline: "For larger production workloads", badge: "Europe", first: 404991, renew: 449990, discount: 10,
    features: ["Typical minimum: 16 physical cores", "128 GB RAM", "2x1.92 TB NVMe", "1 Gbps+ network", "1 IPv4, Germany (Nuremberg)", "Root / SSH included", "Linux; Windows by license", "Managed option: priority"],
    spec: { Websites: "Unlimited (your server)", Storage: "2x1.92 TB NVMe (typical minimum)", "Email accounts": "Your server", Backups: "On the quote", "Free .com": "No", SSL: "Free with your setup", "Control panel": "Root / SSH", CPU: "16 cores (typical minimum)", RAM: "128 GB (typical minimum)", Location: "Germany, Nuremberg" } },

  { id: "retainer-launch", cat: "retainers", name: "Launch", tagline: "A clear business site we build and hand over", badge: "Start", first: 90000, renew: 90000, discount: 10,
    features: ["Up to 8-page business website", "Mobile-first design + SSL", "Contact form and WhatsApp CTA", "Basic on-page SEO", "A written scope and project contact before payment"],
    spec: { Websites: "Up to 8 pages", Storage: "Website build", "Email accounts": "Not included", Backups: "On the quote", "Free .com": "No", SSL: "Included", "Control panel": "Handed over" } },
  { id: "retainer-growth", cat: "retainers", name: "Growth", tagline: "Mid-size site plus business email", badge: "Most Popular", first: 270000, renew: 270000, discount: 10,
    features: ["Mid-size website (up to 15 pages)", "Business email setup on your domain", "Contact, WhatsApp and lead capture", "Social media setup for the business", "Monthly content refresh on WhatsApp brief"],
    spec: { Websites: "Up to 15 pages", Storage: "Website build", "Email accounts": "Business email setup", Backups: "On the quote", "Free .com": "No", SSL: "Included", "Control panel": "Handed over" } },
  { id: "retainer-brand", cat: "retainers", name: "Brand", tagline: "A fuller product with a blog and ongoing social", badge: "Full service", first: 450000, renew: 450000, discount: 10,
    features: ["Larger site + blog you can keep adding to", "Richer content, galleries and service pages", "Business email + social media management", "Quarterly content and ranking review", "WhatsApp project channel from day one"],
    spec: { Websites: "Larger site + blog", Storage: "Website build", "Email accounts": "Business email included", Backups: "On the quote", "Free .com": "No", SSL: "Included", "Control panel": "Handed over" } }
];

var CATEGORY_NOTES = {
  shared: "Shared hosting on the managed PK Hosting stack. Free migration, free SSL and daily backups on every plan. Shared hosting runs on the Hestia panel.",
  wordpress: "Tuned for WordPress: one-click install, free SSL and daily backups. No free .com on WordPress plans.",
  reseller: "For agencies and developers who need branded hosting accounts with managed setup support. Private nameservers on every plan.",
  cloud_vps: "Cloud VPS in Europe (Germany, Nuremberg) with fast SSD storage. Windows and backup are optional add-ons priced per plan. Root / SSH included.",
  premium_vps: "Premium VPS in Virginia, US with NVMe storage and a daily provider snapshot included. Windows licensing is optional and priced per plan.",
  dedicated: "Starting budgets only. Exact CPU, RAM, drives and location are confirmed in writing before payment.",
  retainers: "Website retainers: PK Hosting builds the site and you talk to them on WhatsApp. Indicative annual budgets; hosting and domains are quoted separately."
};

/* VPS add-ons, monthly prices verified live 11 Nov 2026 */
var VPS_ADDONS = {
  cloud: {
    windows: { Starter: 4500, Business: 4999, Pro: 5499, Elite: 6499, Max: 7499, Ultra: 8499 },
    backup: { Starter: 999, Business: 1499, Pro: 1999, Elite: 2799, Max: 3499, Ultra: 3999 }
  },
  premium: {
    windows: { Nano: 3999, Starter: 4999, Pro: 5999, Max: 7499 },
    backup: { Nano: 799, Starter: 999, Pro: 1299, Max: 1799 }
  }
};
var SHARED_EXTRAS = [
  { key: "ipv4", label: "Additional IPv4", monthly: 1499 },
  { key: "storage", label: "Extra storage 250 GB", monthly: 1299 },
  { key: "network", label: "Private network (VPC)", monthly: 999 }
];

/* Domains: registration, renewal, term in years. Verified live 11 Nov 2026. */
var DOMAINS = [
  { tld: ".com", reg: 3299, renew: 3762, term: 1 },
  { tld: ".pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".com.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".net", reg: 4265, renew: 4265, term: 1 },
  { tld: ".org", reg: 3956, renew: 4028, term: 1 },
  { tld: ".co", reg: 5394, renew: 10788, term: 1 },
  { tld: ".io", reg: 17981, renew: 17981, term: 1 },
  { tld: ".store", reg: 14449, renew: 14449, term: 1 },
  { tld: ".online", reg: 9889, renew: 9961, term: 1 },
  { tld: ".shop", reg: 543, renew: 10860, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".site", reg: 9961, renew: 9961, term: 1 },
  { tld: ".info", reg: 9599, renew: 9999, term: 1 },
  { tld: ".xyz", reg: 1102, renew: 4855, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".app", reg: 4999, renew: 4999, term: 1 },
  { tld: ".tech", reg: 17693, renew: 17693, term: 1 },
  { tld: ".biz", reg: 6545, renew: 6545, term: 1 },
  { tld: ".me", reg: 4906, renew: 5883, term: 1 },
  { tld: ".cloud", reg: 7264, renew: 7264, term: 1 },
  { tld: ".website", reg: 7264, renew: 7264, term: 1 },
  { tld: ".org.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".net.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".edu.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".biz.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".web.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".ac.pk", reg: 3899, renew: 5460, term: 2 },
  { tld: ".uk", reg: 1967, renew: 1967, term: 1 },
  { tld: ".asia", reg: 1384, renew: 4028, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".digital", reg: 1739, renew: 11580, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".agency", reg: 2209, renew: 9422, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".business", reg: 1739, renew: 5466, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".company", reg: 1739, renew: 5826, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".design", reg: 16255, renew: 16255, term: 1 },
  { tld: ".blog", reg: 1202, renew: 7264, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" },
  { tld: ".email", reg: 4147, renew: 8703, term: 1, note: "Black Friday, supplier offer ends 31 Dec 2026" }
];

/* ---------- Helpers ---------- */
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
function fmt(n) { return "Rs " + n.toLocaleString("en-PK"); }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function planById(id) { for (var i = 0; i < PLANS.length; i++) { if (PLANS[i].id === id) return PLANS[i]; } return null; }
function domainByTld(tld) { for (var i = 0; i < DOMAINS.length; i++) { if (DOMAINS[i].tld === tld) return DOMAINS[i]; } return null; }

var toastTimer = null;
function toast(msg) {
  var t = $("#toast");
  t.textContent = msg;
  t.hidden = false;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.hidden = true; }, 2600);
}

/* ---------- State (localStorage) ---------- */
var store = {
  get: function (key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  },
  set: function (key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage full or blocked */ }
  }
};
var cart = store.get("pkhosting_quote_v1", []);
var compareIds = store.get("pkhosting_compare_v1", []);
var currentCategory = "shared";
var currentBilling = "first";
var planSearch = "";
var domainShowAll = false;

/* ---------- Plan browser ---------- */
function monthlyEquivalent(annual) { return Math.round(annual * 1.2 / 12); }

function renderPlans() {
  var grid = $("#plan-grid");
  var note = $("#category-note");
  note.textContent = CATEGORY_NOTES[currentCategory] || "";
  var q = planSearch.trim().toLowerCase();
  var shown = 0;
  var html = "";
  PLANS.forEach(function (p) {
    if (p.cat !== currentCategory) return;
    if (q) {
      var hay = (p.name + " " + p.tagline + " " + p.features.join(" ")).toLowerCase();
      if (hay.indexOf(q) === -1) return;
    }
    shown++;
    var price = currentBilling === "first" ? p.first : p.renew;
    var other = currentBilling === "first" ? p.renew : p.first;
    var otherLabel = currentBilling === "first" ? "Renews at" : "First year";
    var inCompare = compareIds.indexOf(p.id) !== -1;
    var inCart = cart.some(function (it) { return it.id === p.id; });
    html += '<article class="plan-card' + (p.badge === "Most Popular" || p.badge === "Best Value" ? " popular" : "") + '">' +
      '<span class="plan-badge">' + esc(p.badge) + "</span>" +
      "<h3>" + esc(p.name) + "</h3>" +
      '<p class="plan-tagline">' + esc(p.tagline) + "</p>" +
      '<div class="plan-price">' +
        (currentBilling === "first" && p.discount ? '<span class="old-price">' + fmt(p.renew) + "</span>" : "") +
        '<span class="price">' + fmt(price) + '</span> <span class="per">/yr</span>' +
      "</div>" +
      (currentBilling === "first" && p.discount ? '<span class="plan-discount">Black Friday ' + p.discount + "% off first year</span>" : "") +
      '<p class="plan-renew">' + otherLabel + " " + fmt(other) + " /yr" +
        (p.cat === "dedicated" ? " (starting budget)" : p.cat === "retainers" ? " (indicative annual budget)" : "") + "</p>" +
      '<p class="plan-renew">About ' + fmt(monthlyEquivalent(price)) + " /month if billed monthly</p>" +
      '<ul class="plan-features">' + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<div class="plan-actions">' +
        '<button class="btn btn-primary btn-small" data-add-plan="' + p.id + '" type="button">' + (inCart ? "Added to quote" : "Add to quote") + "</button>" +
        '<label class="compare-check"><input type="checkbox" data-compare-plan="' + p.id + '"' + (inCompare ? " checked" : "") + "> Compare</label>" +
      "</div></article>";
  });
  grid.innerHTML = html;
  $("#plans-empty").hidden = shown > 0;
}

/* ---------- Compare ---------- */
function saveCompare() { store.set("pkhosting_compare_v1", compareIds); }
function updateCompareUI() {
  var count = compareIds.length;
  var navCount = $("#compare-nav-count");
  navCount.textContent = count;
  navCount.hidden = count === 0;
  var tray = $("#compare-tray");
  tray.hidden = count === 0;
  document.body.classList.toggle("has-tray", count > 0);
  $("#compare-tray-text").textContent = count === 1 ? "1 plan selected for comparison" : count + " plans selected for comparison";
  var empty = $("#compare-empty");
  var wrap = $("#compare-table-wrap");
  if (count === 0) { empty.hidden = false; wrap.hidden = true; return; }
  empty.hidden = true;
  wrap.hidden = false;
  var rows = ["Websites", "Storage", "Email accounts", "Backups", "Free .com", "SSL", "Control panel", "CPU", "RAM", "Location"];
  var plans = compareIds.map(planById).filter(Boolean);
  var html = "<thead><tr><th></th>";
  plans.forEach(function (p) {
    html += '<th><div class="plan-head">' + esc(p.name) + '</div><div>' + fmt(p.first) + " /yr first year</div><div>Renews at " + fmt(p.renew) + " /yr</div>" +
      '<button class="btn btn-ghost btn-small remove-col" data-remove-compare="' + p.id + '" type="button">Remove</button></th>';
  });
  html += "</tr></thead><tbody>";
  rows.forEach(function (row) {
    var vals = plans.map(function (p) { return p.spec[row] || "-"; });
    var allSame = vals.every(function (v) { return v === vals[0]; });
    html += "<tr><th>" + esc(row) + "</th>";
    vals.forEach(function (v) {
      html += '<td class="' + ((!allSame && v !== "-") ? "best" : "") + '">' + esc(v) + "</td>";
    });
    html += "</tr>";
  });
  html += "</tbody>";
  $("#compare-table").innerHTML = html;
}

function toggleCompare(id, on) {
  if (on) {
    if (compareIds.indexOf(id) === -1) {
      if (compareIds.length >= 3) { toast("You can compare up to 3 plans. Remove one first."); return false; }
      compareIds.push(id);
    }
  } else {
    compareIds = compareIds.filter(function (x) { return x !== id; });
  }
  saveCompare();
  updateCompareUI();
  return true;
}

/* ---------- Quote / cart ---------- */
function saveCart() { store.set("pkhosting_quote_v1", cart); }

function vpsAddonPrices(plan) {
  var short = plan.name.replace("Cloud VPS ", "").replace("Premium VPS ", "");
  var kind = plan.vps;
  var out = {};
  if (VPS_ADDONS[kind]) {
    out.windows = VPS_ADDONS[kind].windows[short];
    out.backup = VPS_ADDONS[kind].backup[short];
  }
  return out;
}

function itemFirstYear(it) {
  if (it.kind === "domain") return it.first;
  var plan = planById(it.id);
  var total = plan.first + (it.years - 1) * plan.renew;
  total += addonYearly(it);
  return total;
}
function itemRenewYear(it) {
  if (it.kind === "domain") return it.renew;
  var plan = planById(it.id);
  return plan.renew + addonYearly(it);
}
function addonYearly(it) {
  if (it.kind !== "plan") return 0;
  var plan = planById(it.id);
  if (!plan || !plan.vps) return 0;
  var prices = vpsAddonPrices(plan);
  var total = 0;
  if (it.addons.windows && prices.windows) total += prices.windows * 12;
  if (it.addons.backup && prices.backup) total += prices.backup * 12;
  if (it.addons.ipv4) total += 1499 * 12;
  if (it.addons.storage) total += 1299 * 12;
  if (it.addons.network) total += 999 * 12;
  return total;
}

function addPlanToCart(id) {
  if (cart.some(function (it) { return it.id === id; })) { toast("That plan is already in your quote."); return; }
  var p = planById(id);
  cart.push({ kind: "plan", id: id, name: p.name, first: p.first, renew: p.renew, years: 1, addons: { windows: false, backup: false, ipv4: false, storage: false, network: false } });
  saveCart();
  renderCart();
  renderPlans();
  toast(p.name + " added to your quote.");
}

function addDomainToCart(full, tld) {
  var d = domainByTld(tld);
  var id = "domain-" + full.toLowerCase();
  if (cart.some(function (it) { return it.id === id; })) { toast("That domain is already in your quote."); return; }
  cart.push({ kind: "domain", id: id, name: full.toLowerCase(), first: d.reg, renew: d.renew, years: 1, addons: {} });
  saveCart();
  renderCart();
  toast(full + " added to your quote.");
}

function removeCartItem(id) {
  cart = cart.filter(function (it) { return it.id !== id; });
  saveCart();
  renderCart();
  renderPlans();
}

function renderCart() {
  var count = cart.length;
  $("#cart-count").textContent = count;
  var itemsEl = $("#quote-items");
  var emptyEl = $("#quote-empty");
  var totalsEl = $("#quote-totals");
  var formWrap = $("#quote-form-wrap");
  if (count === 0) {
    itemsEl.innerHTML = "";
    emptyEl.hidden = false;
    totalsEl.hidden = true;
    formWrap.hidden = true;
    return;
  }
  emptyEl.hidden = true;
  totalsEl.hidden = false;
  formWrap.hidden = false;
  var html = "";
  cart.forEach(function (it) {
    var first = itemFirstYear(it);
    var renew = itemRenewYear(it);
    html += '<div class="quote-item">' +
      '<div class="quote-item-head"><h3>' + esc(it.name) + '</h3><span class="quote-item-price">' + fmt(first) + ' first year</span></div>' +
      '<p class="quote-item-sub">' + (it.kind === "domain" ? "Domain registration, " + (domainByTld(it.name.slice(it.name.lastIndexOf("."))) || { term: 1 }).term + "-year term. Renews at " + fmt(renew) + "." : "Hosting plan. Renews at " + fmt(renew) + " /yr.") + "</p>" +
      '<div class="quote-item-controls">';
    if (it.kind === "plan") {
      html += '<label>Term <select data-term="' + it.id + '">' +
        [1, 2, 3].map(function (y) { return '<option value="' + y + '"' + (it.years === y ? " selected" : "") + ">" + y + " year" + (y > 1 ? "s" : "") + "</option>"; }).join("") +
        "</select></label>";
    }
    html += '<button class="btn btn-ghost btn-small" data-remove-item="' + it.id + '" type="button">Remove</button></div>';
    if (it.kind === "plan") {
      var plan = planById(it.id);
      if (plan && plan.vps) {
        var prices = vpsAddonPrices(plan);
        html += '<div class="addons"><span style="font-weight:700;font-size:0.92rem">Add-ons (monthly, billed yearly):</span>';
        if (prices.windows) html += '<label><input type="checkbox" data-addon="' + it.id + '|windows"' + (it.addons.windows ? " checked" : "") + "> Windows licence " + fmt(prices.windows) + "/mo</label>";
        if (prices.backup) html += '<label><input type="checkbox" data-addon="' + it.id + '|backup"' + (it.addons.backup ? " checked" : "") + "> Daily backup " + fmt(prices.backup) + "/mo</label>";
        html += '<label><input type="checkbox" data-addon="' + it.id + '|ipv4"' + (it.addons.ipv4 ? " checked" : "") + "> Extra IPv4 " + fmt(1499) + "/mo</label>";
        html += '<label><input type="checkbox" data-addon="' + it.id + '|storage"' + (it.addons.storage ? " checked" : "") + "> Extra storage 250 GB " + fmt(1299) + "/mo</label>";
        html += '<label><input type="checkbox" data-addon="' + it.id + '|network"' + (it.addons.network ? " checked" : "") + "> Private network " + fmt(999) + "/mo</label>";
        html += "</div>";
      }
    }
    html += "</div>";
  });
  itemsEl.innerHTML = html;
  var totalFirst = 0, totalRenew = 0;
  cart.forEach(function (it) { totalFirst += itemFirstYear(it); totalRenew += itemRenewYear(it); });
  $("#total-first").textContent = fmt(totalFirst);
  $("#total-renew").textContent = fmt(totalRenew);
}

/* ---------- Quote request form ---------- */
function quoteText(ref, name, email, phone, notes) {
  var lines = [];
  lines.push("PK HOSTING QUOTE " + ref);
  lines.push("Prepared 11 November 2026. Prices from pkhosting.com/pricing/ on 11 November 2026.");
  lines.push("");
  lines.push("Name: " + name);
  lines.push("Email: " + email);
  if (phone) lines.push("Phone: " + phone);
  if (notes) lines.push("Notes: " + notes);
  lines.push("");
  var totalFirst = 0, totalRenew = 0;
  cart.forEach(function (it) {
    var f = itemFirstYear(it), r = itemRenewYear(it);
    totalFirst += f; totalRenew += r;
    lines.push("- " + it.name + ": " + fmt(f) + " first year, renews at " + fmt(r) + (it.kind === "plan" && it.years > 1 ? " (" + it.years + "-year term)" : ""));
    if (it.kind === "plan" && it.addons) {
      var on = [];
      if (it.addons.windows) on.push("Windows licence");
      if (it.addons.backup) on.push("Daily backup");
      if (it.addons.ipv4) on.push("Extra IPv4");
      if (it.addons.storage) on.push("Extra storage 250 GB");
      if (it.addons.network) on.push("Private network");
      if (on.length) lines.push("  Add-ons: " + on.join(", "));
    }
  });
  lines.push("");
  lines.push("Due for the first year: " + fmt(totalFirst));
  lines.push("Renews at, per year after that: " + fmt(totalRenew));
  lines.push("");
  lines.push("Demo quote only. Nothing is charged and no order is placed with PK Hosting. Add-ons and taxes extra. Dedicated servers are starting budgets; the exact hardware, scope and renewal are confirmed in writing by PK Hosting before payment.");
  return lines.join("\n");
}

function submitQuoteForm(e) {
  e.preventDefault();
  var name = $("#q-name").value.trim();
  var email = $("#q-email").value.trim();
  var phone = $("#q-phone").value.trim();
  var notes = $("#q-notes").value.trim();
  var err = $("#quote-form-error");
  if (!name) { err.textContent = "Please enter your name."; err.hidden = false; return; }
  if (!email || email.indexOf("@") === -1 || email.indexOf(".") === -1) { err.textContent = "Please enter a valid email address."; err.hidden = false; return; }
  err.hidden = true;
  var ref = "PKQ-20261111-" + String(Math.floor(1000 + Math.random() * 9000));
  var totalFirst = 0, totalRenew = 0;
  cart.forEach(function (it) { totalFirst += itemFirstYear(it); totalRenew += itemRenewYear(it); });
  var text = quoteText(ref, name, email, phone, notes);
  var confirmEl = $("#quote-confirm");
  confirmEl.innerHTML = "<h3>Quote ready</h3>" +
    '<p>Your quote reference is</p><p class="ref">' + ref + "</p>" +
    "<p><strong>" + esc(name) + "</strong> (" + esc(email) + ")" + (phone ? ", " + esc(phone) : "") + "</p>" +
    "<p>First year total: <strong>" + fmt(totalFirst) + "</strong>. Renews at <strong>" + fmt(totalRenew) + "</strong> per year after that.</p>" +
    "<p>Send this reference to PK Hosting at support@pkhosting.com or call (042) 35692952, Mon-Fri 9am-6pm PKT, and they will confirm the order and the final price in writing.</p>" +
    '<div class="confirm-actions">' +
    '<button class="btn btn-primary btn-small" id="confirm-copy" type="button">Copy quote text</button>' +
    '<button class="btn btn-secondary btn-small" id="confirm-print" type="button">Print quote</button>' +
    '<button class="btn btn-secondary btn-small" id="confirm-download" type="button">Download quote (.txt)</button>' +
    "</div>";
  confirmEl.hidden = false;
  confirmEl.scrollIntoView({ behavior: "smooth", block: "center" });
  var saved = store.get("pkhosting_quotes_v1", []);
  saved.unshift({ ref: ref, date: new Date().toISOString().slice(0, 10), total: totalFirst, text: text });
  store.set("pkhosting_quotes_v1", saved.slice(0, 10));
  renderSavedQuotes();
  $("#confirm-copy").addEventListener("click", function () { copyText(text, "Quote text copied."); });
  $("#confirm-print").addEventListener("click", function () { window.print(); });
  $("#confirm-download").addEventListener("click", function () { downloadText(ref + ".txt", text); });
  toast("Quote " + ref + " generated.");
}

function copyText(text, msg) {
  var done = false;
  function finish() { if (!done) { done = true; toast(msg); } }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var settled = false;
    navigator.clipboard.writeText(text).then(
      function () { settled = true; finish(); },
      function () { settled = true; fallbackCopy(text); finish(); }
    );
    /* Headless browsers can leave the clipboard promise hanging; fall back after 600 ms. */
    setTimeout(function () { if (!settled) { fallbackCopy(text); finish(); } }, 600);
  } else {
    fallbackCopy(text);
    finish();
  }
}
function fallbackCopy(text) {
  var ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* clipboard unavailable */ }
  document.body.removeChild(ta);
}
function downloadText(filename, text) {
  var blob = new Blob([text], { type: "text/plain" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

function renderSavedQuotes() {
  var saved = store.get("pkhosting_quotes_v1", []);
  var wrap = $("#saved-quotes");
  if (!saved.length) { wrap.hidden = true; return; }
  wrap.hidden = false;
  $("#saved-quotes-list").innerHTML = saved.map(function (q, i) {
    return "<li><span><strong>" + esc(q.ref) + "</strong> - " + esc(q.date) + " - " + fmt(q.total) + " first year</span>" +
      '<button class="btn btn-ghost btn-small" data-view-quote="' + i + '" type="button">View</button></li>';
  }).join("");
}

/* ---------- Domain search ---------- */
function hashString(s) {
  var h = 0;
  for (var i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) >>> 0; }
  return h;
}
var TAKEN_NAMES = ["pkhosting", "google", "facebook", "youtube", "travel", "hosting", "amazon", "apple", "microsoft", "netflix"];
function checkDomain(name, tld) {
  var clean = name.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "");
  if (clean.indexOf(".") !== -1) {
    var parts = clean.split(".");
    var last = parts[parts.length - 1];
    var known = DOMAINS.some(function (d) { return d.tld === "." + last; });
    if (known) { tld = "." + last; clean = parts.slice(0, -1).join("."); }
  }
  if (!clean) return { error: "Type a domain name first, for example mybusiness." };
  if (!/^[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(clean) && !/^[a-z0-9]$/.test(clean)) return { error: "Use letters, numbers and hyphens only, starting and ending with a letter or number." };
  if (TAKEN_NAMES.indexOf(clean) !== -1) return { name: clean, tld: tld, available: false };
  var available = hashString(clean + tld) % 10 < 7;
  return { name: clean, tld: tld, available: available };
}

function renderDomainTable() {
  var tbody = $("#domain-table tbody");
  var list = domainShowAll ? DOMAINS : DOMAINS.slice(0, 12);
  tbody.innerHTML = list.map(function (d) {
    return "<tr><td><strong>" + esc(d.tld) + "</strong>" + (d.note ? "<br><small>" + esc(d.note) + "</small>" : "") + "</td>" +
      '<td><span class="price">' + fmt(d.reg) + "</span>" + (d.term === 2 ? " /2yr" : " /yr") + "</td>" +
      '<td><span class="price">' + fmt(d.renew) + "</span>" + (d.term === 2 ? " /2yr" : " /yr") + "</td>" +
      "<td>" + (d.term === 2 ? "2 years minimum" : "1 year") + "</td>" +
      '<td><button class="btn btn-ghost btn-small" data-domain-pick="' + esc(d.tld) + '" type="button">Check a name</button></td></tr>';
  }).join("");
  $("#domain-show-more").textContent = domainShowAll ? "Show fewer extensions" : "Show all extensions (" + DOMAINS.length + ")";
}

function showDomainResult(res) {
  var el = $("#domain-result");
  var d = domainByTld(res.tld);
  var full = res.name + res.tld;
  var termText = d.term === 2 ? "2-year term" : "1-year term";
  if (res.available) {
    el.className = "domain-result available";
    el.innerHTML = '<span class="demo-label">Demo check only, not a real registry lookup</span>' +
      "<h3>" + esc(full) + " looks available in this demo</h3>" +
      "<p>This demo check cannot confirm real availability. PK Hosting confirms availability and activation before registration.</p>" +
      '<p class="domain-price">' + fmt(d.reg) + " registration (" + termText + ")</p>" +
      "<p>Renews at " + fmt(d.renew) + (d.term === 2 ? " /2 years" : " /yr") + (d.note ? ". " + esc(d.note) : "") + ".</p>" +
      '<div class="domain-actions"><button class="btn btn-primary btn-small" id="domain-add" type="button">Add to quote</button>' +
      '<button class="btn btn-ghost btn-small" id="domain-search-again" type="button">Check another name</button></div>';
  } else {
    el.className = "domain-result taken";
    el.innerHTML = '<span class="demo-label">Demo check only, not a real registry lookup</span>' +
      "<h3>" + esc(full) + " looks taken in this demo</h3>" +
      "<p>Try a different name, add a word, or try another extension. The price for " + esc(res.tld) + " is " + fmt(d.reg) + " registration and " + fmt(d.renew) + " renewal.</p>" +
      '<div class="domain-actions"><button class="btn btn-ghost btn-small" id="domain-search-again" type="button">Try another name</button></div>';
  }
  el.hidden = false;
  var addBtn = $("#domain-add");
  if (addBtn) addBtn.addEventListener("click", function () { addDomainToCart(full, res.tld); });
  var againBtn = $("#domain-search-again");
  if (againBtn) againBtn.addEventListener("click", function () { el.hidden = true; $("#domain-name").focus(); });
}

/* ---------- Plan finder quiz ---------- */
var QUIZ = [
  { q: "What are you hosting?", options: [
    { label: "A personal site or blog", v: "personal" },
    { label: "A business website", v: "business" },
    { label: "An online store", v: "store" },
    { label: "A WordPress site", v: "wordpress" },
    { label: "Websites for my clients", v: "reseller" },
    { label: "An app or custom server", v: "vps" },
    { label: "A big production workload", v: "dedicated" } ] },
  { q: "How many websites do you need to host?", options: [
    { label: "Just 1", v: "1" },
    { label: "2 to 5", v: "2-5" },
    { label: "6 to 10", v: "6-10" },
    { label: "More than 10", v: "10+" } ] },
  { q: "Roughly how many visitors per month?", options: [
    { label: "Under 5,000", v: "low" },
    { label: "5,000 to 25,000", v: "medium" },
    { label: "25,000 to 100,000", v: "high" },
    { label: "Over 100,000", v: "veryhigh" } ] },
  { q: "Do you need full server control (root access)?", options: [
    { label: "No, I want it managed", v: "no" },
    { label: "Yes, I need root access", v: "yes" } ] }
];
var quizStep = 0;
var quizAnswers = {};

function renderQuiz() {
  var result = $("#quiz-result");
  result.hidden = true;
  if (quizStep >= QUIZ.length) return;
  var step = QUIZ[quizStep];
  $("#quiz-step-label").textContent = "Question " + (quizStep + 1) + " of " + QUIZ.length;
  $("#quiz-bar-fill").style.width = ((quizStep + 1) / QUIZ.length * 100) + "%";
  $("#quiz-question").textContent = step.q;
  $("#quiz-options").innerHTML = step.options.map(function (o) {
    return '<button class="quiz-option" data-quiz-answer="' + esc(o.v) + '" type="button">' + esc(o.label) + "</button>";
  }).join("");
  $("#quiz-back").disabled = quizStep === 0;
}

function quizRecommend() {
  var a = quizAnswers;
  var planId, reason;
  if (a.q3 === "veryhigh" && a.q4 === "yes") { planId = "dedicated-entry"; reason = "Very high traffic with full server control points to a dedicated server. Dedicated Entry is the starting budget; the exact hardware is confirmed in writing before payment."; }
  else if (a.q4 === "yes") { planId = a.q3 === "high" ? "cloud-business" : "cloud-starter"; reason = "You need root access, so a VPS is the right fit. Cloud VPS runs in Germany with SSD storage and unmetered transfer."; }
  else if (a.q1 === "dedicated") { planId = "dedicated-entry"; reason = "A big production workload belongs on a dedicated server. Dedicated Entry is the starting budget."; }
  else if (a.q1 === "vps") { planId = "cloud-starter"; reason = "For an app or custom server, Cloud VPS Starter gives you root access with 4 vCPU and 8 GB RAM."; }
  else if (a.q1 === "reseller") { planId = a.q2 === "10+" ? "reseller-r3" : a.q2 === "6-10" || a.q2 === "2-5" ? "reseller-r2" : "reseller-r1"; reason = "For client websites, a reseller plan gives you private nameservers and a client dashboard under your own brand."; }
  else if (a.q1 === "wordpress") { planId = a.q2 === "6-10" || a.q2 === "10+" ? "wp-pro" : a.q2 === "2-5" ? "wp-business" : "wp-starter"; reason = "WordPress plans come tuned for WordPress with one-click install, free SSL and daily backups."; }
  else if (a.q2 === "6-10" || a.q2 === "10+" || a.q3 === "high") { planId = "shared-professional"; reason = "Several websites or high traffic needs the bigger shared plan: 10 websites, 50 GB SSD and 5-day backup retention."; }
  else if (a.q2 === "2-5" || a.q3 === "medium") { planId = "shared-business"; reason = "A growing business site fits the Business plan: 5 websites, 25 GB SSD and 3-day backup retention."; }
  else { planId = "shared-personal"; reason = "For a single site with modest traffic, Personal is the right start. You can upgrade later as you grow."; }
  return { plan: planById(planId), reason: reason };
}

function showQuizResult() {
  var rec = quizRecommend();
  var p = rec.plan;
  $("#quiz-question").textContent = "Your recommended plan";
  $("#quiz-options").innerHTML = "";
  $("#quiz-step-label").textContent = "Done";
  $("#quiz-bar-fill").style.width = "100%";
  var result = $("#quiz-result");
  result.innerHTML = "<h3>" + esc(p.name) + "</h3>" +
    '<p class="rec-price">' + fmt(p.first) + " /yr first year</p>" +
    "<p>Renews at " + fmt(p.renew) + " /yr. " + esc(rec.reason) + "</p>" +
    '<div class="rec-actions">' +
    '<button class="btn btn-primary" id="quiz-add" type="button">Add ' + esc(p.name) + ' to my quote</button>' +
    '<button class="btn btn-secondary" id="quiz-browse" type="button">Browse all plans</button></div>';
  result.hidden = false;
  $("#quiz-add").addEventListener("click", function () { addPlanToCart(p.id); document.getElementById("quote-section").scrollIntoView({ behavior: "smooth" }); });
  $("#quiz-browse").addEventListener("click", function () { document.getElementById("plans-section").scrollIntoView({ behavior: "smooth" }); });
}

/* ---------- Navigation ---------- */
function goToSection(id) {
  var el = document.getElementById(id + "-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
  $all(".nav-btn").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-section") === id); });
  $("#main-nav").classList.remove("open");
  $("#menu-toggle").setAttribute("aria-expanded", "false");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", function () {
  /* Nav */
  $all(".nav-btn").forEach(function (b) {
    b.addEventListener("click", function () { goToSection(b.getAttribute("data-section")); });
  });
  $("#menu-toggle").addEventListener("click", function () {
    var nav = $("#main-nav");
    var open = nav.classList.toggle("open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $("#brand-home").addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  $("#hero-find-plan").addEventListener("click", function () { document.getElementById("finder-section").scrollIntoView({ behavior: "smooth" }); });
  $("#hero-browse-plans").addEventListener("click", function () { goToSection("plans"); });

  /* Category tabs and billing */
  $all(".cat-tab").forEach(function (t) {
    t.addEventListener("click", function () {
      currentCategory = t.getAttribute("data-category");
      $all(".cat-tab").forEach(function (x) { x.classList.toggle("active", x === t); });
      renderPlans();
    });
  });
  $all(".billing-btn").forEach(function (b) {
    b.addEventListener("click", function () {
      currentBilling = b.getAttribute("data-billing");
      $all(".billing-btn").forEach(function (x) { x.classList.toggle("active", x === b); });
      renderPlans();
    });
  });
  $("#plan-search").addEventListener("input", function () { planSearch = this.value; renderPlans(); });
  $("#plan-search-clear").addEventListener("click", function () { planSearch = ""; $("#plan-search").value = ""; renderPlans(); });

  /* Plan grid clicks (delegated) */
  $("#plan-grid").addEventListener("click", function (e) {
    var addBtn = e.target.closest("[data-add-plan]");
    if (addBtn) { addPlanToCart(addBtn.getAttribute("data-add-plan")); return; }
  });
  $("#plan-grid").addEventListener("change", function (e) {
    var cb = e.target.closest("[data-compare-plan]");
    if (!cb) return;
    var ok = toggleCompare(cb.getAttribute("data-compare-plan"), cb.checked);
    if (!ok) cb.checked = false;
  });

  /* Compare */
  $("#compare-clear").addEventListener("click", function () { compareIds = []; saveCompare(); updateCompareUI(); renderPlans(); });
  $("#compare-tray-go").addEventListener("click", function () { goToSection("compare"); });
  $("#compare-tray-clear").addEventListener("click", function () { compareIds = []; saveCompare(); updateCompareUI(); renderPlans(); });
  $("#compare-table-wrap").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-remove-compare]");
    if (!btn) return;
    toggleCompare(btn.getAttribute("data-remove-compare"), false);
    renderPlans();
  });

  /* Cart (delegated) */
  $("#quote-items").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-remove-item]");
    if (btn) removeCartItem(btn.getAttribute("data-remove-item"));
  });
  $("#quote-items").addEventListener("change", function (e) {
    var term = e.target.closest("[data-term]");
    if (term) {
      var it = cart.find(function (x) { return x.id === term.getAttribute("data-term"); });
      if (it) { it.years = parseInt(term.value, 10); saveCart(); renderCart(); }
      return;
    }
    var ad = e.target.closest("[data-addon]");
    if (ad) {
      var parts = ad.getAttribute("data-addon").split("|");
      var item = cart.find(function (x) { return x.id === parts[0]; });
      if (item) { item.addons[parts[1]] = ad.checked; saveCart(); renderCart(); }
    }
  });
  $("#quote-clear").addEventListener("click", function () {
    cart = []; saveCart(); renderCart(); renderPlans();
    $("#quote-confirm").hidden = true;
    toast("Quote cleared.");
  });
  $("#quote-print").addEventListener("click", function () { window.print(); });
  $("#quote-download").addEventListener("click", function () {
    if (!cart.length) return;
    var ref = "PKQ-20261111-" + String(Math.floor(1000 + Math.random() * 9000));
    downloadText(ref + ".txt", quoteText(ref, "Quote", "", "", ""));
    toast("Quote downloaded.");
  });
  $("#quote-form").addEventListener("submit", submitQuoteForm);
  $("#saved-quotes-clear").addEventListener("click", function () { store.set("pkhosting_quotes_v1", []); renderSavedQuotes(); });
  $("#saved-quotes-list").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-view-quote]");
    if (!btn) return;
    var saved = store.get("pkhosting_quotes_v1", []);
    var q = saved[parseInt(btn.getAttribute("data-view-quote"), 10)];
    if (!q) return;
    var el = $("#quote-confirm");
    el.innerHTML = "<h3>Saved quote " + esc(q.ref) + "</h3><pre style=\"white-space:pre-wrap;font-family:inherit\">" + esc(q.text) + "</pre>";
    el.hidden = false;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* Domains */
  var tldSel = $("#domain-tld");
  tldSel.innerHTML = DOMAINS.map(function (d) { return '<option value="' + esc(d.tld) + '">' + esc(d.tld) + " - " + fmt(d.reg) + (d.term === 2 ? " /2yr" : " /yr") + "</option>"; }).join("");
  $("#domain-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var err = $("#domain-error");
    var res = checkDomain($("#domain-name").value, tldSel.value);
    if (res.error) { err.textContent = res.error; err.hidden = false; $("#domain-result").hidden = true; return; }
    err.hidden = true;
    showDomainResult(res);
  });
  $("#domain-clear").addEventListener("click", function () {
    $("#domain-name").value = "";
    $("#domain-result").hidden = true;
    $("#domain-error").hidden = true;
    $("#domain-name").focus();
  });
  $("#domain-show-more").addEventListener("click", function () { domainShowAll = !domainShowAll; renderDomainTable(); });
  $("#domain-table").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-domain-pick]");
    if (!btn) return;
    tldSel.value = btn.getAttribute("data-domain-pick");
    $("#domain-name").focus();
    document.getElementById("domains-section").scrollIntoView({ behavior: "smooth" });
  });

  /* Quiz */
  renderQuiz();
  $("#quiz-options").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-quiz-answer]");
    if (!btn) return;
    quizAnswers["q" + (quizStep + 1)] = btn.getAttribute("data-quiz-answer");
    quizStep++;
    if (quizStep >= QUIZ.length) showQuizResult(); else renderQuiz();
  });
  $("#quiz-back").addEventListener("click", function () {
    if (quizStep > 0) { quizStep--; delete quizAnswers["q" + (quizStep + 1)]; renderQuiz(); }
  });
  $("#quiz-restart").addEventListener("click", function () { quizStep = 0; quizAnswers = {}; renderQuiz(); });

  /* FAQ */
  $all(".faq-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var open = q.getAttribute("aria-expanded") === "true";
      $all(".faq-q").forEach(function (x) { x.setAttribute("aria-expanded", "false"); });
      $all(".faq-a").forEach(function (a) { a.hidden = true; });
      if (!open) {
        q.setAttribute("aria-expanded", "true");
        q.parentElement.querySelector(".faq-a").hidden = false;
      }
    });
  });

  /* First render */
  renderPlans();
  renderDomainTable();
  updateCompareUI();
  renderCart();
  renderSavedQuotes();
});
