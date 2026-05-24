const STORAGE_KEY = "tux-studio-os-prototype-v2";

const orderStatuses = [
  "Missing",
  "Unprocessed",
  "Ready",
  "Fitting",
  "At Tailor",
  "Ready for collection",
  "Collected",
  "Cancelled",
];

const DEMO_TODAY = "2026-05-01";
const FINANCE_PASSWORD = "owner2026";
const STOCK_ALLOCATION_MONTHS = 3;

const seedState = {
  currentView: "dashboard",
  selectedCustomerId: "c1",
  search: "",
  calendarMode: "day",
  calendarDate: "2026-05-01",
  invoiceYear: 2026,
  financeUnlocked: false,
  staffMembers: ["Sam", "Ayaan", "Leah", "Maya"],
  staffUsers: [
    { id: "u1", name: "Sam", role: "Senior staff", financeAccess: true, status: "Active" },
    { id: "u2", name: "Ayaan", role: "Staff", financeAccess: false, status: "Active" },
    { id: "u3", name: "Leah", role: "Staff", financeAccess: false, status: "Active" },
    { id: "u4", name: "Maya", role: "Staff", financeAccess: false, status: "Active" },
  ],
  settings: {
    theme: "Apple clean",
    bookingWindowDays: 14,
    stockAllocationDay: "Tuesday",
    stockAllocationMonths: 3,
    fittingPaymentTarget: 50,
    defaultReminder: "Day before",
    financeAccess: "Owner only",
    invoicePassword: FINANCE_PASSWORD,
  },
  activeStaff: "",
  clockedInDate: "",
  staffClock: {
    date: DEMO_TODAY,
    senior: { name: "", time: "" },
    staff: { name: "", time: "" },
  },
  toast: "",
  modal: null,
  customComms: [],
  quotations: [],
  communicationTemplates: [
    {
      id: "tpl-booking-confirmation",
      name: "Booking confirmation",
      channel: "Email + text",
      body: "Hi {name}, your appointment at Tux Studio OS is confirmed for {date} at {time}. Reply if you need to rearrange.",
    },
    {
      id: "tpl-appointment-reminder",
      name: "Appointment reminder",
      channel: "Email + text",
      body: "Hi {name}, reminder for your Tux Studio OS appointment tomorrow. We look forward to seeing you.",
    },
    {
      id: "tpl-deposit-reminder",
      name: "50% deposit reminder",
      channel: "Email + text",
      body: "Hi {name}, your order needs to reach the required 50% payment before fitting. Please contact us to make a payment.",
    },
    {
      id: "tpl-no-sale-follow-up",
      name: "No-sale follow-up",
      channel: "Email + text",
      body: "Hi {name}, thanks for visiting Tux Studio OS. Let us know if you would like help finalising your formalwear order.",
    },
  ],
  blockedSlots: [
    {
      id: "b1",
      date: "2026-05-03",
      time: "12:00",
      reason: "Staff lunch block",
    },
    {
      id: "b2",
      date: "2026-05-05",
      time: "15:00",
      reason: "Private event prep",
    },
  ],
  followUps: [
    {
      id: "f1",
      customerId: "c4",
      name: "Adam Farah",
      due: "2026-05-04",
      channel: "Email + text",
      reason: "No purchase after consultation",
      status: "Scheduled",
    },
  ],
  customers: [
    {
      id: "c1",
      name: "Omar Hassan",
      phone: "07700 900112",
      email: "omar.hassan@example.com",
      address: "14 Kings Road, London",
      event: "Wedding - 22 Jun 2026",
      lastVisit: "2026-04-29",
      notes: "Groom. Prefers peak lapel, matte black finish.",
      measurements: {
        chest: "40",
        waist: "34",
        hips: "39",
        inseam: "31",
        sleeve: "25",
        neck: "15.5",
        shoulder: "18",
        height: "5 ft 10",
      },
    },
    {
      id: "c2",
      name: "Daniel Price",
      phone: "07700 900221",
      email: "daniel.price@example.com",
      address: "8 Market Street, London",
      event: "Black tie gala - 16 May 2026",
      lastVisit: "2026-04-28",
      notes: "Needs slim fit dinner jacket and patent shoes.",
      measurements: {
        chest: "42",
        waist: "36",
        hips: "40",
        inseam: "32",
        sleeve: "26",
        neck: "16",
        shoulder: "19",
        height: "6 ft 0",
      },
    },
    {
      id: "c3",
      name: "Ryan Mitchell",
      phone: "07700 900332",
      email: "ryan.mitchell@example.com",
      address: "22 Clifton Lane, London",
      event: "Prom - 06 Jul 2026",
      lastVisit: "2026-04-30",
      notes: "First fitting complete. Awaiting trouser taper.",
      measurements: {
        chest: "38",
        waist: "32",
        hips: "38",
        inseam: "30",
        sleeve: "24.5",
        neck: "15",
        shoulder: "17.5",
        height: "5 ft 8",
      },
    },
    {
      id: "c4",
      name: "Adam Farah",
      phone: "07700 900445",
      email: "adam.farah@example.com",
      address: "5 Highfield Avenue, London",
      event: "Wedding guest - 31 May 2026",
      lastVisit: "2026-04-26",
      notes: "Collects after final press. Check cuff buttons.",
      measurements: {
        chest: "44",
        waist: "38",
        hips: "42",
        inseam: "31",
        sleeve: "25.5",
        neck: "16.5",
        shoulder: "19.5",
        height: "5 ft 11",
      },
    },
  ],
  appointments: [
    {
      id: "a1",
      customerId: "c1",
      name: "Omar Hassan",
      type: "Wedding consultation",
      date: "2026-05-01",
      time: "10:30",
      staff: "Sam",
      status: "Confirmed",
      notes: "Choose cloth and confirm groomsmen count.",
      confirmationStatus: "Email + text sent",
      reminderStatus: "Reminder sent",
      reminderDate: "2026-04-30",
    },
    {
      id: "a2",
      customerId: "c3",
      name: "Ryan Mitchell",
      type: "Alteration fitting",
      date: "2026-05-01",
      time: "13:00",
      staff: "Ayaan",
      status: "Confirmed",
      notes: "Trouser taper check.",
      confirmationStatus: "Email + text sent",
      reminderStatus: "Reminder sent",
      reminderDate: "2026-04-30",
    },
    {
      id: "a3",
      customerId: "c2",
      name: "Daniel Price",
      type: "Collection",
      date: "2026-05-02",
      time: "15:45",
      staff: "Sam",
      status: "Pending",
      notes: "Balance due before release.",
      confirmationStatus: "Email + text sent",
      reminderStatus: "Scheduled",
      reminderDate: "2026-05-01",
    },
  ],
  orders: [
    {
      id: "o1",
      number: "ORD-1048",
      customerId: "c1",
      item: "Custom black peak lapel tuxedo",
      due: "2026-06-10",
      status: "Unprocessed",
      tailor: "Not sent",
      total: 1195,
      paid: 400,
      fittingDate: "2026-05-15",
      fittingTime: "11:30",
      measurements: {
        chest: "40",
        waist: "34",
        hips: "39",
        inseam: "31",
        sleeve: "25",
        neck: "15.5",
        shoulder: "18",
        height: "5 ft 10",
      },
      updated: "2026-04-29",
      notes: "Awaiting waistcoat fabric approval.",
      history: ["Booked 24 Apr", "Unprocessed 29 Apr"],
    },
    {
      id: "o2",
      number: "ORD-1049",
      customerId: "c2",
      item: "Dinner jacket hire package",
      due: "2026-05-12",
      status: "Ready",
      tailor: "Returned",
      total: 345,
      paid: 345,
      fittingDate: "2026-04-27",
      fittingTime: "15:00",
      collectionDate: "2026-05-02",
      measurements: {
        chest: "42",
        waist: "36",
        hips: "40",
        inseam: "32",
        sleeve: "26",
        neck: "16",
        shoulder: "19",
        height: "6 ft 0",
      },
      updated: "2026-04-30",
      notes: "Steam and bag before collection.",
      history: ["Booked 20 Apr", "Ready for collection 30 Apr"],
    },
    {
      id: "o3",
      number: "ORD-1050",
      customerId: "c3",
      item: "Prom tux with trouser taper",
      due: "2026-06-24",
      status: "At Tailor",
      tailor: "Aziz Tailoring",
      total: 525,
      paid: 200,
      fittingDate: "2026-05-06",
      fittingTime: "13:00",
      measurements: {
        chest: "38",
        waist: "32",
        hips: "38",
        inseam: "30",
        sleeve: "24.5",
        neck: "15",
        shoulder: "17.5",
        height: "5 ft 8",
      },
      updated: "2026-04-30",
      notes: "Taper trousers and shorten sleeves.",
      fittingRecord: {
        jacketSleeveLength: true,
        trouserTaper: true,
        notes: "Sleeves and trouser taper need checking before tailor pickup.",
        additionalNotes: "Call customer once tailor confirms turnaround.",
        priority: true,
        priorityDue: "2026-05-03",
        updated: "2026-05-01",
        updatedBy: "Ayaan",
      },
      history: ["Unprocessed 28 Apr", "At Tailor 30 Apr"],
    },
    {
      id: "o4",
      number: "ORD-1051",
      customerId: "c4",
      item: "Navy tux hire with shirt and shoes",
      due: "2026-05-27",
      status: "Fitting",
      tailor: "Not sent",
      total: 420,
      paid: 150,
      fittingDate: "2026-05-08",
      fittingTime: "12:30",
      measurements: {
        chest: "44",
        waist: "38",
        hips: "42",
        inseam: "31",
        sleeve: "25.5",
        neck: "16.5",
        shoulder: "19.5",
        height: "5 ft 11",
      },
      updated: "2026-04-26",
      notes: "Shoes size 10 reserved.",
      history: ["Booked 26 Apr", "Fitting 26 Apr"],
    },
  ],
  inventory: [
    {
      id: "i1",
      item: "Black tux jacket",
      category: "Jackets",
      size: "40R",
      color: "Black",
      qty: 3,
      alert: 2,
      committed: 1,
      price: 220,
    },
    {
      id: "i2",
      item: "Navy tux jacket",
      category: "Jackets",
      size: "44R",
      color: "Navy",
      qty: 1,
      alert: 2,
      committed: 1,
      price: 240,
    },
    {
      id: "i3",
      item: "Dress shirt",
      category: "Shirts",
      size: "16",
      color: "White",
      qty: 8,
      alert: 4,
      committed: 3,
      price: 55,
    },
    {
      id: "i4",
      item: "Patent oxford shoes",
      category: "Shoes",
      size: "10",
      color: "Black",
      qty: 2,
      alert: 2,
      committed: 1,
      price: 75,
    },
    {
      id: "i5",
      item: "Black bow tie",
      category: "Accessories",
      size: "One size",
      color: "Black",
      qty: 12,
      alert: 5,
      committed: 4,
      price: 25,
    },
  ],
  invoices: [
    {
      id: "inv1",
      number: "INV-3021",
      customerId: "c1",
      orderId: "o1",
      total: 1195,
      paid: 400,
      dueDate: "2026-06-10",
      method: "Card deposit",
    },
    {
      id: "inv2",
      number: "INV-3022",
      customerId: "c2",
      orderId: "o2",
      total: 345,
      paid: 345,
      dueDate: "2026-05-12",
      method: "Paid in full",
    },
    {
      id: "inv3",
      number: "INV-3023",
      customerId: "c3",
      orderId: "o3",
      total: 525,
      paid: 200,
      dueDate: "2026-06-24",
      method: "Bank transfer",
    },
    {
      id: "inv4",
      number: "INV-3024",
      customerId: "c4",
      orderId: "o4",
      total: 420,
      paid: 150,
      dueDate: "2026-05-27",
      method: "Cash deposit",
    },
  ],
};

let state = normaliseInventoryState(loadState());
let renderRecoveryAttempted = false;
allocateAllStock({ addHistory: false });

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "bookings", label: "Bookings", icon: "calendar" },
  { id: "customers", label: "Customers", icon: "users" },
  { id: "orders", label: "Orders", icon: "package" },
  { id: "communications", label: "Communication", icon: "message" },
  { id: "inventory", label: "Inventory", icon: "ruler" },
  { id: "invoices", label: "Invoices", icon: "invoice" },
  { id: "rota", label: "Staff metrics", icon: "users" },
  { id: "settings", label: "Settings", icon: "settings" },
];

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneData(seedState);
    return { ...cloneData(seedState), ...JSON.parse(saved), financeUnlocked: false, toast: "", modal: null };
  } catch {
    return cloneData(seedState);
  }
}

function cloneData(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function selectorEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

function normaliseInventoryState(sourceState) {
  const nextState = { ...sourceState };
  nextState.settings = { ...cloneData(seedState.settings), ...(sourceState.settings || {}) };
  nextState.staffUsers = Array.isArray(sourceState.staffUsers)
    ? sourceState.staffUsers
    : staffMembersFromSource(sourceState).map((name, index) => ({
        id: `u${index + 1}`,
        name,
        role: index === 0 ? "Senior staff" : "Staff",
        financeAccess: index === 0,
        status: "Active",
      }));
  nextState.orders = (sourceState.orders || []).map((order) => ({
    ...order,
    status: normaliseOrderStatus(order.status),
    history: Array.isArray(order.history)
      ? order.history.map((entry) =>
          String(entry)
            .replace(/\bMeasured\b/g, "Unprocessed")
            .replace(/\bOrdered\b/g, "Fitting"),
        )
      : [],
  }));
  nextState.quotations = (sourceState.quotations || []).map((quote) => ({
    ...quote,
    lines: Array.isArray(quote.lines) ? quote.lines : [],
    status: quote.status || "Quoted",
  }));
  if (!sourceState.dashboardPriorityDemoSeeded && !nextState.orders.some((order) => order.fittingRecord?.priority)) {
    const demoPriorityOrder = nextState.orders.find((order) => order.id === "o3") || nextState.orders.find((order) => order.fittingDate);
    if (demoPriorityOrder) {
      demoPriorityOrder.fittingRecord = {
        ...(demoPriorityOrder.fittingRecord || {}),
        jacketSleeveLength: true,
        trouserTaper: true,
        notes: demoPriorityOrder.fittingRecord?.notes || "Sleeves and trouser taper need checking before tailor pickup.",
        additionalNotes: demoPriorityOrder.fittingRecord?.additionalNotes || "Call customer once tailor confirms turnaround.",
        priority: true,
        priorityDue: demoPriorityOrder.fittingRecord?.priorityDue || "2026-05-03",
        updated: demoPriorityOrder.fittingRecord?.updated || DEMO_TODAY,
        updatedBy: demoPriorityOrder.fittingRecord?.updatedBy || "Ayaan",
      };
      nextState.dashboardPriorityDemoSeeded = true;
    }
  }
  nextState.inventory = (sourceState.inventory || []).flatMap((item) => {
    if (item.parentItem || item.variationType || !String(item.size || "").includes(",")) {
      return {
        ...item,
        parentItem: item.parentItem || item.item,
        variationType: item.variationType || (item.size && item.size !== "-" ? "Size" : "Colour"),
        variationValue: item.variationValue || (item.size && item.size !== "-" ? item.size : item.color || "-"),
        material: item.material || item.style || "",
        price: Number(item.price || 0),
      };
    }
    return String(item.size)
      .split(",")
      .map((size) => size.trim())
      .filter(Boolean)
      .map((size) => ({
        ...item,
        id: `${item.id}-${size.replace(/[^a-z0-9]/gi, "").toLowerCase()}`,
        item: `${item.item} - Size ${size}`,
        parentItem: item.item,
        variationType: "Size",
        variationValue: size,
        size,
        material: item.material || item.style || "",
        price: Number(item.price || 0),
      }));
  });
  return nextState;
}

function staffMembersFromSource(sourceState) {
  return [...new Set([...(sourceState.staffMembers || []), ...((sourceState.appointments || []).map((appointment) => appointment.staff).filter(Boolean)), "Sam", "Ayaan"])].filter(Boolean);
}

function appSetting(key, fallback) {
  return state.settings?.[key] ?? seedState.settings[key] ?? fallback;
}

function normaliseOrderStatus(status) {
  if (status === "Measured" || status === "Booked") return "Unprocessed";
  if (status === "Ordered") return "Fitting";
  return orderStatuses.includes(status) ? status : "Unprocessed";
}

function saveState() {
  const toSave = { ...state, toast: "" };
  delete toSave.financeUnlocked;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch {
    // Some embedded browsers restrict file:// localStorage. The prototype should still run.
  }
}

function staffMembers() {
  const fromState = Array.isArray(state.staffMembers) ? state.staffMembers : [];
  const fromUsers = Array.isArray(state.staffUsers) ? state.staffUsers.map((user) => user.name).filter(Boolean) : [];
  const fromAppointments = (state.appointments || []).map((appointment) => appointment.staff).filter(Boolean);
  return [...new Set([...fromUsers, ...fromState, ...fromAppointments, "Sam", "Ayaan"])].filter((name) => name !== "Unassigned");
}

function currentStaffName() {
  return seniorStaffName() || "Unassigned";
}

function activeStaffName() {
  return seniorStaffName();
}

function seniorStaffName() {
  return dailyStaffClock().senior.name || state.activeStaff || "";
}

function dailyStaffClock() {
  const clock = state.staffClock && typeof state.staffClock === "object" ? state.staffClock : {};
  return {
    date: clock.date || state.clockedInDate || DEMO_TODAY,
    senior: {
      name: clock.senior?.name || state.activeStaff || "",
      time: clock.senior?.time || "",
    },
    staff: {
      name: clock.staff?.name || "",
      time: clock.staff?.time || "",
    },
  };
}

function render() {
  const app = document.querySelector("#app");
  try {
    if (state.currentView === "bookingPortal") {
      app.innerHTML = renderBookingPortal();
    } else {
      app.innerHTML = `
        <div class="app-shell">
          ${renderSidebar()}
          <main class="main">
          ${renderTopbar()}
          ${renderView()}
          </main>
        </div>
        ${renderMobileTabbar()}
        ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
        ${renderModal()}
        ${renderStaffLoginModal()}
      `;
    }
    try {
      bindEvents();
      centerActiveOrderStageTab();
    } catch (bindError) {
      console.error("Tux Studio OS interaction setup error", bindError);
    }
    renderRecoveryAttempted = false;
  } catch (error) {
    console.error("Tux Studio OS render error", error);
    state = cloneData(seedState);
    saveState();
    if (!renderRecoveryAttempted) {
      renderRecoveryAttempted = true;
      render();
      return;
    }
    app.innerHTML = `
      <div class="load-error">
        <h1>Tux Studio OS</h1>
        <p>The preview reset itself because old demo data was blocking the in-app browser.</p>
        <p class="meta">${escapeHtml(error?.message || "Unknown render error")}</p>
        <button class="button gold" onclick="location.reload()">Reload prototype</button>
      </div>
    `;
  }
}

function centerActiveOrderStageTab() {
  const activeTab = document.querySelector(".order-stage-tabs button.active");
  if (!activeTab) return;
  const run = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (callback) => setTimeout(callback, 0);
  run(() => {
    activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
}

function renderSidebar() {
  const openOrders = state.orders.filter((order) => !["Collected", "Cancelled"].includes(order.status)).length;
  const moreItems = [
    ...navItems.filter((item) => !["dashboard", "bookings"].includes(item.id)),
    { id: "bookingPortal", label: "Booking page", icon: "external" },
  ];
  const moreActive = moreItems.some((item) => item.id === state.currentView);
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">${tuxMark()}</div>
        <div>
          <h1 class="brand-title">Tux Studio OS</h1>
          <p class="brand-subtitle">CRM, bookings, orders, stock</p>
        </div>
      </div>
      <div class="nav-section staff-nav">
        <span class="nav-label">Staff workspace</span>
        ${navItems
          .map(
            (item) => `
              <button class="nav-button ${state.currentView === item.id ? "active" : ""} ${["dashboard", "bookings"].includes(item.id) ? "primary-mobile-nav" : "more-mobile-nav"}" data-view="${item.id}" title="${item.label}">
                <span class="icon">${icon(item.icon)}</span>
                <span>${item.label}</span>
                ${item.id === "orders" ? `<span class="badge">${openOrders}</span>` : ""}
              </button>
            `,
          )
          .join("")}
        <details class="mobile-more-nav">
          <summary class="nav-button ${moreActive ? "active" : ""}">
            <span class="icon">${icon("more")}</span>
            <span>More</span>
            ${openOrders ? `<span class="badge">${openOrders}</span>` : ""}
          </summary>
          <div class="mobile-more-menu">
            ${moreItems
              .map(
                (item) => `
                  <button class="nav-button ${state.currentView === item.id ? "active" : ""}" data-view="${item.id}" title="${item.label}">
                    <span class="icon">${icon(item.icon)}</span>
                    <span>${item.label}</span>
                    ${item.id === "orders" ? `<span class="badge">${openOrders}</span>` : ""}
                  </button>
                `,
              )
              .join("")}
          </div>
        </details>
      </div>
      <div class="nav-section customer-nav">
        <span class="nav-label">Customer access</span>
        <button class="nav-button more-mobile-nav ${state.currentView === "bookingPortal" ? "active" : ""}" data-view="bookingPortal" title="Public booking page">
          <span class="icon">${icon("external")}</span>
          <span>Booking page</span>
        </button>
      </div>
      <div class="sidebar-note">
        <strong>Prototype mode</strong>
        <span>Use the sample data freely. Changes are saved in this browser and can be reset any time.</span>
      </div>
    </aside>
  `;
}

function renderMobileTabbar() {
  const openOrders = state.orders.filter((order) => !["Collected", "Cancelled"].includes(order.status)).length;
  const moreItems = [
    ...navItems.filter((item) => !["dashboard", "bookings"].includes(item.id)),
    { id: "bookingPortal", label: "Booking page", icon: "external" },
  ];
  const moreActive = moreItems.some((item) => item.id === state.currentView);
  return `
    <nav class="mobile-tabbar" aria-label="Main navigation">
      <button class="mobile-tab ${state.currentView === "dashboard" ? "active" : ""}" data-view="dashboard">
        <span class="icon">${icon("dashboard")}</span>
        <span>Dashboard</span>
      </button>
      <button class="mobile-tab ${state.currentView === "bookings" ? "active" : ""}" data-view="bookings">
        <span class="icon">${icon("calendar")}</span>
        <span>Bookings</span>
      </button>
      <details class="mobile-tab-more">
        <summary class="mobile-tab ${moreActive ? "active" : ""}">
          <span class="icon">${icon("more")}</span>
          <span>More</span>
          ${openOrders ? `<span class="badge">${openOrders}</span>` : ""}
        </summary>
        <div class="mobile-tab-menu">
          ${moreItems
            .map(
              (item) => `
                <button class="nav-button ${state.currentView === item.id ? "active" : ""}" data-view="${item.id}" title="${item.label}">
                  <span class="icon">${icon(item.icon)}</span>
                  <span>${item.label}</span>
                  ${item.id === "orders" ? `<span class="badge">${openOrders}</span>` : ""}
                </button>
              `,
            )
            .join("")}
        </div>
      </details>
    </nav>
  `;
}

function renderTopbar() {
  const titles = {
    dashboard: ["Today at the shop", "A quick glance at today's bookings and the few things that need staff attention."],
    bookings: ["Bookings", "Manage staff appointments and view the customer self-booking flow."],
    customers: ["Customers", "Customer profiles, measurements, order history, and notes in one place."],
    orders: ["Order tracker", "Move tux orders from booking through tailoring, ready, and collection."],
    communications: ["Communication", "View customer emails and texts, templates, and send custom messages."],
    inventory: ["Inventory", "Track stock, committed items, and low-stock pressure before it becomes a problem."],
    invoices: ["Invoices and payments", "See balances, paid invoices, and record simple payment updates."],
    rota: ["Staff metrics", "See staff schedules, clock-ins, sales made, order value, and payment activity."],
    settings: ["Settings", "Manage users, access, booking rules, finance controls, themes, and shop defaults."],
  };
  const [title, copy] = titles[state.currentView] || titles.dashboard;
  return `
    <header class="topbar">
      <div>
        <p class="page-kicker">Men's formalwear operations</p>
        <h2 class="page-title">${title}</h2>
        <p class="page-copy">${copy}</p>
      </div>
      <div class="top-actions">
        <button class="ghost-button" data-action="reset">${icon("refresh")} Reset demo</button>
        <button class="ghost-button top-booking-button" data-action="new-staff-booking">${icon("calendar")} New booking</button>
        <button class="button gold" data-action="new-order">${icon("plus")} New order</button>
      </div>
    </header>
  `;
}

function renderStaffClockIn() {
  const staff = staffMembers();
  const clock = dailyStaffClock();
  const dropdownRole = state.staffDropdownRole || "senior";
  return `
    <div class="staff-clock">
      <label>Clocked in</label>
      <div class="staff-clock-controls">
        <span>Senior</span>
        <input id="clock-in-senior" data-action="open-staff-dropdown" data-role="senior" data-staff-clock-select="senior" value="${escapeAttribute(clock.senior.name)}" placeholder="Senior staff" autocomplete="off" />
        <button class="ghost-button compact-button" data-action="clock-in-staff" data-role="senior">${clock.senior.name ? "Switch" : "Clock in"}</button>
        ${clock.senior.time ? `<small>${clock.senior.time}</small>` : ""}
      </div>
      <div class="staff-clock-controls">
        <span>Staff</span>
        <input id="clock-in-staff" data-action="open-staff-dropdown" data-role="staff" data-staff-clock-select="staff" value="${escapeAttribute(clock.staff.name)}" placeholder="Staff name" autocomplete="off" />
        <button class="ghost-button compact-button" data-action="clock-in-staff" data-role="staff">${clock.staff.name ? "Switch" : "Clock in"}</button>
        ${clock.staff.time ? `<small>${clock.staff.time}</small>` : ""}
      </div>
      ${
        state.staffDropdownOpen
          ? `<div class="staff-dropdown ${dropdownRole === "staff" ? "staff-role" : ""}">
              ${staff
                .map(
                  (name) => `
                    <button type="button" data-action="select-staff" data-id="${name}" data-role="${dropdownRole}">
                      ${name}
                    </button>
                  `,
                )
                .join("")}
            </div>`
          : ""
      }
    </div>
  `;
}

function renderStaffLoginModal() {
  if (state.currentView === "bookingPortal" || seniorStaffName()) return "";
  return `
    <div class="modal-backdrop staff-login-backdrop" role="presentation">
      <section class="modal-card staff-login-card" role="dialog" aria-modal="true" aria-labelledby="staff-login-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Staff check-in</p>
            <h3 id="staff-login-title" class="modal-title">Who's opening Tux Studio OS?</h3>
            <p class="panel-subtitle">Choose your name once. The app records your clock-in for today.</p>
          </div>
        </div>
        <form id="staff-login-form" class="form-grid">
          <div class="field full">
            <label for="staff-login-name">Staff member</label>
            <select id="staff-login-name" name="staffName" required>
              ${staffSelectOptions()}
            </select>
          </div>
          <div class="form-actions">
            <button class="button gold" type="submit">${icon("check")} Start shift</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderView() {
  switch (state.currentView) {
    case "bookings":
      return renderBookings();
    case "customers":
      return renderCustomers();
    case "orders":
      return renderOrders();
    case "communications":
      return renderCommunications();
    case "inventory":
      return renderInventory();
    case "invoices":
      return renderInvoices();
    case "rota":
      return renderRota();
    case "settings":
      return renderSettings();
    default:
      return renderDashboard();
  }
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal.type === "order") return renderNewOrderModal();
  if (state.modal.type === "customer") return renderCustomerModal();
  if (state.modal.type === "invoice-month") return renderInvoiceMonthModal();
  if (state.modal.type === "invoice-pdf") return renderInvoicePdfModal();
  if (state.modal.type === "staff-booking") return renderStaffBookingModal();
  if (state.modal.type === "inventory") return renderInventoryModal();
  if (state.modal.type === "dashboard-metric") return renderDashboardMetricModal();
  if (state.modal.type === "dashboard-attention") return renderDashboardAttentionModal();
  if (state.modal.type === "appointment-detail") return renderAppointmentDetailModal();
  if (state.modal.type === "order-detail") return renderOrderDetailModal();
  if (state.modal.type === "order-stage") return renderOrderStageModal();
  return "";
}

function renderNewOrderModal() {
  const quote = state.modal.quoteId ? (state.quotations || []).find((item) => item.id === state.modal.quoteId) : null;
  const selectedCustomerId = state.modal.customerId || quote?.customerId || "";
  const selectedCustomer = selectedCustomerId ? state.customers.find((customer) => customer.id === selectedCustomerId) : null;
  const customerValue = selectedCustomer ? selectedCustomer.id : "new";
  const quoteItemIds = quote?.lines?.map((line) => line.id).filter(Boolean) || [];
  const quoteTotal = Number(quote?.total || 650);
  const quoteDiscount = Number(quote?.discount || 0);
  const quoteDue = quote?.dueDate || "2026-06-30";
  const customQuoteLine = quote?.lines?.find((line) => line.id === "__custom");
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card wide order-invoice-modal" role="dialog" aria-modal="true" aria-labelledby="new-order-title">
        <div class="modal-header invoice-modal-header">
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
          <div>
            <h3 id="new-order-title" class="modal-title">Quote to invoice</h3>
            <p class="panel-subtitle">Measure the customer, prepare a quote, then create the invoice if they proceed.</p>
          </div>
        </div>
        <form id="new-order-form" class="invoice-composer">
          <div class="invoice-scroll-body">
            <section class="invoice-section" data-quote-step="quote">
            <div class="invoice-section-head">
              <h4>Step 1: Customer and measurements</h4>
            </div>
            <div class="invoice-customer-card">
              <div class="field full">
                <label for="order-customer">Customer</label>
                <select id="order-customer" name="customerId" data-input="order-customer">
                  <option value="new" ${customerValue === "new" ? "selected" : ""}>New customer</option>
                  ${state.customers
                    .map(
                      (customer) => `
                        <option value="${customer.id}" ${customer.id === customerValue ? "selected" : ""}>
                          ${customer.name} - ${customer.phone}
                        </option>
                      `,
                    )
                    .join("")}
                </select>
              </div>
              <div class="invoice-compact-grid">
                <div class="field">
                  <label for="order-customer-name">Customer name</label>
                  <input id="order-customer-name" name="name" required value="${escapeAttribute(selectedCustomer?.name || "")}" placeholder="Full name" />
                </div>
                <div class="field">
                  <label for="order-customer-phone">Phone</label>
                  <input id="order-customer-phone" name="phone" required value="${escapeAttribute(selectedCustomer?.phone || "")}" placeholder="Mobile number" />
                </div>
                <div class="field">
                  <label for="order-customer-email">Email</label>
                  <input id="order-customer-email" name="email" type="email" value="${escapeAttribute(selectedCustomer?.email || "")}" placeholder="Email address" />
                </div>
                <div class="field">
                  <label for="order-event">Event</label>
                  <input id="order-event" name="eventName" value="${escapeAttribute(quote?.eventDate || selectedCustomer?.event || "")}" placeholder="Wedding - 22 Jun 2026" />
                </div>
              </div>
              <div class="field full">
                <label for="order-address">Home address</label>
                <textarea id="order-address" name="address" required placeholder="Customer home address">${escapeHtml(selectedCustomer?.address || "")}</textarea>
              </div>
            </div>
            </section>
            <section class="invoice-section" data-quote-step="quote">
            <div class="row wrap">
              <div>
                <h4 class="panel-title">Measurements</h4>
                <p class="panel-subtitle">These save back to the customer profile.</p>
              </div>
            </div>
            <div class="measurement-grid compact">
              ${["chest", "waist", "hips", "inseam", "sleeve", "neck", "shoulder", "height"]
                .map(
                  (measure) => `
                    <div class="field">
                      <label for="order-${measure}">${titleCase(measure)}</label>
                      <input id="order-${measure}" name="${measure}" value="${escapeAttribute(selectedCustomer?.measurements?.[measure] || "")}" placeholder="-" />
                    </div>
                  `,
                )
                .join("")}
            </div>
            </section>
            <section class="invoice-section" data-quote-step="quote">
            <div class="invoice-section-head">
              <h4>Build quote</h4>
              <span class="meta">Search, add items, adjust the description, then show the quote preview.</span>
            </div>
            <div class="field full">
              <label for="order-item-search">Search items</label>
              <input id="order-item-search" type="search" data-order-item-search placeholder="Type jacket, shirt, shoes, size, colour..." autocomplete="off" />
            </div>
            <div class="invoice-item-picker" data-input="order-item" data-loaded-quote="${escapeAttribute(state.modal.quoteId || "")}">
              ${renderOrderItemPicker(quoteItemIds)}
            </div>
          <div class="field full" data-custom-order-field hidden>
            <label for="order-custom-item">Custom order details</label>
            <input id="order-custom-item" name="customItem" value="${escapeAttribute(customQuoteLine?.label || "")}" placeholder="Custom black peak lapel tuxedo, special cloth, bespoke request..." />
          </div>
          <div class="field full">
            <div class="selection-summary" data-order-selection-summary>
              <p class="meta">No items selected yet.</p>
            </div>
          </div>
            <div class="invoice-compact-grid">
              <div class="field">
                <label for="order-due">Due date</label>
                <input id="order-due" name="due" type="date" required value="${escapeAttribute(quoteDue)}" />
              </div>
              <div class="field">
                <label for="order-total">Invoice total</label>
                <input id="order-total" name="total" type="number" min="0" step="1" required value="${quoteTotal}" data-order-total />
              </div>
              <div class="field">
                <label for="order-discount">Discount</label>
                <input id="order-discount" name="discount" type="number" min="0" step="1" value="${quoteDiscount}" data-order-discount />
              </div>
            </div>
            <div class="quote-preview-card quote-document-preview">
              <div class="quote-doc-paper">
                <div class="quote-doc-head">
                  <span>QUOTE PREVIEW</span>
                  <strong>Tux Studio OS</strong>
                </div>
                <div class="quote-doc-customer">
                  <p><span>Customer</span><strong data-quote-customer>${escapeHtml(selectedCustomer?.name || "New customer")}</strong></p>
                  <p><span>Event date</span><strong data-quote-event>${escapeHtml(quote?.eventDate || selectedCustomer?.event || "Not set")}</strong></p>
                  <p><span>Due date</span><strong data-quote-due>${formatDate(quoteDue)}</strong></p>
                </div>
                <div class="quote-doc-lines" data-quote-lines>
                  <p>No items selected.</p>
                </div>
                <div class="quote-preview-lines">
                  <p><span>Inventory total</span><strong data-quote-inventory>${money(0)}</strong></p>
                  <p><span>Discount</span><strong data-quote-discount>${money(quoteDiscount)}</strong></p>
                  <p><span>Quote total</span><strong data-quote-total>${money(quoteTotal)}</strong></p>
                </div>
              </div>
            </div>
            </section>
            <section class="invoice-section" data-quote-step="invoice" hidden>
            <div>
              <h4 class="panel-title">Step 2: Create invoice and take deposit</h4>
              <p class="panel-subtitle">If the customer is happy to proceed, record the deposit and send the full invoice PDF.</p>
            </div>
            <div class="invoice-compact-grid">
              <div class="field">
                <label for="order-paid">Deposit / paid today</label>
                <input id="order-paid" name="paid" type="number" min="0" step="1" value="0" data-order-paid />
              </div>
              <div class="field">
                <label for="order-payment-method">Payment method</label>
                <select id="order-payment-method" name="method">
                  <option>Not paid</option>
                  <option>Card deposit</option>
                  <option>Bank transfer</option>
                  <option>Cash deposit</option>
                  <option>Paid in full</option>
                </select>
              </div>
            </div>
            </section>
            <section class="invoice-section" data-quote-step="invoice" hidden>
            <div>
              <h4 class="panel-title">Book their fitting</h4>
              <p class="panel-subtitle">This creates the next appointment and sends the same confirmation/reminder flow.</p>
            </div>
            <div class="form-grid">
              <div class="field">
                <label for="order-fitting-date">Fitting date</label>
                <input id="order-fitting-date" name="fittingDate" type="date" value="2026-05-10" />
              </div>
              <div class="field">
                <label for="order-fitting-time">Fitting time</label>
                <input id="order-fitting-time" name="fittingTime" type="time" value="12:00" />
              </div>
            </div>
            </section>
            <section class="invoice-section" data-quote-step="invoice" hidden>
            <div class="field full">
              <label for="order-notes">Order notes</label>
              <textarea id="order-notes" name="notes" placeholder="Alterations, fit preference, fabric, collection notes"></textarea>
            </div>
            <div>
              <h4 class="panel-title">Approval</h4>
            </div>
            <div class="form-grid">
              <div class="field">
                <label for="order-sale-staff">Sale made by</label>
                <select id="order-sale-staff" name="saleStaff" required>
                  <option value="">Select staff member</option>
                  ${staffSelectOptions()}
                </select>
              </div>
              <div class="field">
                <label for="order-signature-name">Customer signature / typed name</label>
                <input id="order-signature-name" name="signatureName" required placeholder="Customer full name" />
              </div>
              <label class="check-field" for="order-signature-approved">
                <input id="order-signature-approved" name="signatureApproved" type="checkbox" required />
                <span>Customer has signed and approved this order.</span>
              </label>
            </div>
            </section>
          </div>
          <div class="invoice-save-bar">
            <div data-quote-step="quote">
              <span>Quote total</span>
              <strong data-quote-footer-total>${money(quoteTotal)}</strong>
            </div>
            <div data-quote-step="invoice" hidden>
              <span>Amount due</span>
              <strong data-amount-due>${money(quoteTotal)}</strong>
            </div>
            <button class="ghost-button" type="button" data-action="save-quote" data-quote-step="quote">Save quote</button>
            <button class="button gold" type="button" data-action="show-invoice-step" data-quote-step="quote">${icon("invoice")} Create invoice</button>
            <button class="ghost-button" type="button" data-action="show-quote-step" data-quote-step="invoice" hidden>Back to quote</button>
            <button class="button gold" type="submit" data-quote-step="invoice" hidden>${icon("invoice")} Create and email invoice</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function inventoryOrderOptions() {
  const items = Array.isArray(state.inventory) ? state.inventory : [];
  return items
    .map((item) => {
      const available = inventoryAvailable(item);
      const label = `${inventoryOrderLabel(item)} • ${money(inventoryPrice(item))} (${available} available${available <= 0 ? " - missing order" : ""})`;
      return `<option value="${escapeAttribute(item.id)}">${label}</option>`;
    })
    .join("");
}

function renderOrderItemPicker(selectedValues = []) {
  const items = Array.isArray(state.inventory) ? state.inventory : [];
  const selectedSet = new Set(selectedValues);
  return `
    <div class="invoice-item-list">
      ${items
        .map((item) => {
          const available = inventoryAvailable(item);
          return `
            <label class="invoice-item-row" for="order-item-${item.id}" data-item-search-text="${escapeAttribute(`${inventoryOrderLabel(item)} ${item.category || ""} ${item.color || ""} ${item.size || ""} ${item.material || ""} ${item.description || ""}`.toLowerCase())}" hidden>
              <input id="order-item-${item.id}" name="items" type="checkbox" value="${escapeAttribute(item.id)}" data-order-item-choice ${selectedSet.has(item.id) ? "checked" : ""} />
              <span class="invoice-item-icon">${icon("invoice")}</span>
              <span>
                <strong>${inventoryParentName(item)}</strong>
                <em>${inventoryVariationLabel(item)}${item.color ? ` • ${item.color}` : ""}</em>
                ${item.description ? `<small>${escapeHtml(item.description)}</small>` : ""}
                <small>${available} available${available <= 0 ? " • Missing order" : ""}</small>
              </span>
              <b>${money(inventoryPrice(item))}</b>
            </label>
          `;
        })
        .join("")}
      <label class="invoice-item-row" for="order-item-custom" data-item-search-text="custom order bespoke manual special cloth" hidden>
        <input id="order-item-custom" name="items" type="checkbox" value="__custom" data-order-item-choice ${selectedSet.has("__custom") ? "checked" : ""} />
        <span class="invoice-item-icon">${icon("plus")}</span>
        <span>
          <strong>Custom order</strong>
          <em>Special cloth, bespoke item, or manual invoice line</em>
        </span>
        <b>Manual</b>
      </label>
      <p class="meta invoice-item-empty" data-item-search-empty>Start typing to find inventory items.</p>
    </div>
  `;
}

function staffSelectOptions() {
  return staffMembers()
    .map((name) => `<option value="${escapeAttribute(name)}">${name}</option>`)
    .join("");
}

function renderCustomerModal() {
  const customer = getCustomer(state.modal.customerId);
  const orders = state.orders.filter((order) => order.customerId === customer.id);
  const invoices = state.invoices.filter((invoice) => invoice.customerId === customer.id);
  const quotations = customerQuotations(customer.id);
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card wide" role="dialog" aria-modal="true" aria-labelledby="customer-order-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Customer order file</p>
            <h3 id="customer-order-title" class="modal-title">${customer.name}</h3>
            <p class="panel-subtitle">${customer.event} • ${customer.phone} • ${customer.email}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <div class="three-column">
          <div class="item-card">
            <p class="meta">Open orders</p>
            <p class="stat-value">${orders.length}</p>
          </div>
          <div class="item-card">
            <p class="meta">Balance due</p>
            <p class="stat-value">${money(invoices.reduce((sum, invoice) => sum + Math.max(invoice.total - invoice.paid, 0), 0))}</p>
          </div>
          <div class="item-card">
            <p class="meta">Last visit</p>
            <p class="stat-value small-date">${formatDate(customer.lastVisit)}</p>
          </div>
        </div>
        ${renderCustomerCommunicationHistory(customer, orders)}
        <section class="modal-grid">
          <div>
            <div class="row wrap modal-section-head">
              <h4 class="panel-title">Orders</h4>
              <button class="ghost-button" data-action="new-order-for-customer" data-id="${customer.id}">${icon("plus")} New order</button>
            </div>
            <div class="list">
              ${orders.map((order) => orderCard(order, true, { expandable: true })).join("") || emptyState("No orders for this customer yet.")}
            </div>
          </div>
          <div>
            <h4 class="panel-title modal-section-head">Invoices</h4>
            <div class="list">
              ${invoices.map((invoice) => invoiceCard(invoice)).join("") || emptyState("No invoices for this customer yet.")}
            </div>
          </div>
          <div>
            <h4 class="panel-title modal-section-head">Quotations</h4>
            <div class="list">
              ${quotations.map(quotationCard).join("") || emptyState("No saved quotations for this customer yet.")}
            </div>
          </div>
        </section>
      </section>
    </div>
  `;
}

function renderCustomerCommunicationHistory(customer, orders) {
  const events = customerCommunicationEvents(customer.id, orders);
  return `
    <section class="customer-comms">
      <div class="row wrap modal-section-head">
        <div>
          <h4 class="panel-title">Communication history</h4>
          <p class="panel-subtitle">Booking confirmations, reminders, follow-ups, and payment nudges for this customer.</p>
        </div>
      </div>
      <div class="communication-history-list">
        ${
          events
            .map(
              (event) => `
                <article class="communication-history-item">
                  <div>
                    <p class="name">${event.title}</p>
                    <p class="meta">${event.detail}</p>
                    <p class="meta">${event.channel} • ${formatDate(event.date)}${event.staff ? ` • Staff: ${event.staff}` : ""}</p>
                  </div>
                  <strong class="delivery-state ${event.className}">${event.status}</strong>
                </article>
              `,
            )
            .join("") || emptyState("No communication recorded for this customer yet.")
        }
      </div>
    </section>
  `;
}

function customerCommunicationEvents(customerId, orders = []) {
  const appointmentEvents = state.appointments
    .filter((appt) => appt.customerId === customerId)
    .flatMap((appt) => {
      const comms = appointmentComms(appt);
      const confirmation = deliveryState(comms.confirmationStatus);
      const reminder = deliveryState(comms.reminderStatus);
      const appointmentDetail = `${appt.type} on ${formatDate(appt.date)} at ${appt.time}`;
      return [
        {
          date: appt.confirmationDate || appt.date,
          title: "Booking confirmation",
          detail: appointmentDetail,
          channel: "Email + text",
          status: confirmation.label,
          className: confirmation.className,
          staff: appt.staff,
        },
        {
          date: comms.reminderDate,
          title: String(comms.reminderStatus || "").toLowerCase().includes("manual") ? "Manual appointment reminder" : "Appointment reminder",
          detail: appointmentDetail,
          channel: "Email + text",
          status: reminder.label,
          className: reminder.className,
          staff: appt.staff,
        },
      ];
    });

  const followUpEvents = (state.followUps || [])
    .filter((followUp) => followUp.customerId === customerId)
    .map((followUp) => ({
      date: followUp.due,
      title: "No sale follow-up",
      detail: followUp.reason,
      channel: followUp.channel,
      status: followUp.status || "Scheduled",
      className: String(followUp.status || "").toLowerCase().includes("sent") ? "sent" : "pending",
      staff: "",
    }));

  const depositEvents = orders
    .map((order) => ({ order, reminder: depositReminderInfo(order) }))
    .filter((item) => item.reminder)
    .map(({ order, reminder }) => ({
      date: reminder.date,
      title: "50% deposit reminder",
      detail: `${order.number} • ${state.financeUnlocked ? reminder.message : "Balance reminder about reaching the required 50% deposit."}`,
      channel: "Email + text",
      status: reminder.status,
      className: reminder.className,
      staff: order.createdBy || order.saleBy || "",
    }));

  return [...appointmentEvents, ...followUpEvents, ...depositEvents].sort((a, b) => {
    const dateSort = String(b.date || "").localeCompare(String(a.date || ""));
    if (dateSort !== 0) return dateSort;
    return String(b.title || "").localeCompare(String(a.title || ""));
  });
}

function allCommunicationEvents() {
  const automatedEvents = state.customers.flatMap((customer) => {
    const orders = state.orders.filter((order) => order.customerId === customer.id);
    return customerCommunicationEvents(customer.id, orders).map((event) => ({
      ...event,
      customerId: customer.id,
      customerName: customer.name,
      direction: "Outbound",
    }));
  });
  const customEvents = (state.customComms || []).map((event) => {
    const customer = getCustomer(event.customerId);
    return {
      date: event.date,
      title: event.direction === "Inbound" ? "Customer message" : "Custom message",
      detail: event.message,
      channel: event.channel,
      status: "Sent",
      className: "sent",
      staff: event.staff,
      customerId: customer.id,
      customerName: customer.name,
      direction: event.direction,
    };
  });
  return [...customEvents, ...automatedEvents].sort((a, b) => {
    const dateSort = String(b.date || "").localeCompare(String(a.date || ""));
    if (dateSort !== 0) return dateSort;
    return String(b.title || "").localeCompare(String(a.title || ""));
  });
}

function renderInvoiceMonthModal() {
  const key = state.modal.monthKey;
  const detailType = state.modal.detailType;
  const selectedMethod = state.modal.paymentMethod || "";
  const invoices = state.invoices.filter((invoice) => monthKey(invoice.dueDate) === key);
  const outstandingInvoices = invoices.filter((invoice) => invoice.total > invoice.paid);
  const payments = invoices.flatMap((invoice) =>
    invoicePayments(invoice)
      .filter((payment) => monthKey(payment.date) === key)
      .map((payment) => ({ ...payment, invoice })),
  );
  const visiblePayments = selectedMethod ? payments.filter((payment) => payment.method === selectedMethod) : payments;
  const methodTotals = paymentMethodTotals(payments);
  const modalKicker =
    detailType === "paid" ? "Payments collected" : detailType === "outstanding" ? "Outstanding invoices" : "Invoices issued";
  const modalSubtitle =
    detailType === "paid"
      ? selectedMethod
        ? `${selectedMethod} payments collected in this month.`
        : "Payments collected this month, grouped by method."
      : detailType === "outstanding"
        ? "Invoices with unpaid balances in this month."
        : "Invoices due in this month.";
  const displayInvoices = detailType === "outstanding" ? outstandingInvoices : invoices;
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card wide" role="dialog" aria-modal="true" aria-labelledby="invoice-month-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">${modalKicker}</p>
            <h3 id="invoice-month-title" class="modal-title">${monthLabel(key)}</h3>
            <p class="panel-subtitle">${modalSubtitle}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        ${
          detailType === "paid"
            ? `<div class="row wrap payment-filter-actions">
                <button class="chip ${selectedMethod ? "" : "active"}" data-action="clear-payment-method">All methods</button>
              </div>
              <div class="three-column">
                ${methodTotals
                  .map(
                    (method) => `
                      <button class="measure payment-method-card ${selectedMethod === method.method ? "active" : ""}" data-action="filter-payment-method" data-id="${method.method}">
                        <span>${method.method}</span>
                        <strong>${money(method.total)}</strong>
                        <small>${method.count} payment${method.count === 1 ? "" : "s"}</small>
                      </button>
                    `,
                  )
                  .join("") || emptyState("No payments collected this month.")}
              </div>
              <div class="table-wrap" style="margin-top: 16px;">
                <table>
                  <thead><tr><th>Invoice</th><th>Customer</th><th>Date</th><th>Method</th><th>Staff</th><th>Amount</th></tr></thead>
                  <tbody>
                    ${visiblePayments
                      .map(
                        (payment) => `
                          <tr>
                            <td><strong>${payment.invoice.number}</strong></td>
                            <td>${getCustomer(payment.invoice.customerId).name}</td>
                            <td>${formatDate(payment.date)}</td>
                            <td>${payment.method}</td>
                            <td>${payment.createdBy || payment.invoice.createdBy || "Unassigned"}</td>
                            <td class="amount">${money(payment.amount)}</td>
                          </tr>
                        `,
                      )
                      .join("") || `<tr><td colspan="6">No payments match this view.</td></tr>`}
                  </tbody>
                </table>
              </div>`
            : `<div class="table-wrap">
                <table>
                  <thead><tr><th>Invoice</th><th>Customer</th><th>Order</th><th>Staff</th><th>Status</th><th>Total</th><th>Paid</th><th>Balance</th></tr></thead>
                  <tbody>
                    ${displayInvoices
                      .map((invoice) => {
                        const order = state.orders.find((item) => item.id === invoice.orderId);
                        const status = invoiceStatus(invoice);
                        return `
                          <tr>
                            <td><strong>${invoice.number}</strong><br><span class="meta">Due ${formatDate(invoice.dueDate)}</span></td>
                            <td>${getCustomer(invoice.customerId).name}</td>
                            <td>${order ? order.number : "No order"}</td>
                            <td>${invoice.createdBy || order?.createdBy || "Unassigned"}</td>
                            <td><span class="status ${status.className}">${status.label}</span></td>
                            <td class="amount">${money(invoice.total)}</td>
                            <td class="amount">${money(invoice.paid)}</td>
                            <td class="amount">${money(invoice.total - invoice.paid)}</td>
                          </tr>
                        `;
                      })
                      .join("") || `<tr><td colspan="8">No invoices match this view.</td></tr>`}
                  </tbody>
                </table>
              </div>`
        }
      </section>
    </div>
  `;
}

function renderInvoicePdfModal() {
  const invoice = state.invoices.find((item) => item.id === state.modal.invoiceId);
  const order = state.orders.find((item) => item.id === state.modal.orderId);
  if (!invoice || !order) return "";
  const customer = getCustomer(invoice.customerId);
  const balance = Math.max(invoice.total - invoice.paid, 0);
  const payments = invoicePayments(invoice);
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card wide pdf-modal" role="dialog" aria-modal="true" aria-labelledby="invoice-pdf-title">
        <div class="modal-header no-print">
          <div>
            <p class="page-kicker">PDF invoice preview</p>
            <h3 id="invoice-pdf-title" class="modal-title">${invoice.number}</h3>
            <p class="panel-subtitle">Use Print / save PDF to create the PDF for the customer.</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <div class="invoice-document">
          <div class="invoice-doc-header">
            <div>
              <p class="page-kicker">MSS</p>
              <h2>My Suit Shop</h2>
              <p>143 High Street<br>London EN5 5UZ<br>02034887463<br>info@mysuitshop.co.uk</p>
            </div>
            <strong>My Suit Shop</strong>
          </div>
          <div class="invoice-doc-box">
            <div>
              <span>Bill to</span>
              <strong>${customer.name}</strong>
              <p>${customer.email}<br>${customer.phone}<br>${customer.address || "Address not collected"}</p>
            </div>
            <div>
              <span>Invoice</span>
              <strong>${invoice.number}</strong>
              <p>Issued ${formatDate("2026-05-01")}<br>Due ${formatDate(invoice.dueDate)}<br>Sale by ${invoice.createdBy || "Unassigned"}</p>
            </div>
          </div>
          <table class="invoice-doc-table">
            <thead>
              <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Amount</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>${order.item}</strong>
                  <p>Size: custom</p>
                  <p>${measurementSummary(orderMeasurements(order))}</p>
                  <p>${order.notes || ""}</p>
                </td>
                <td>${money(invoice.total)}</td>
                <td>1</td>
                <td>${money(invoice.total)}</td>
              </tr>
            </tbody>
          </table>
          <div class="invoice-doc-totals">
            <div>
              <h4>Payment instruction</h4>
              <p>IMSS GROUP LTD<br>SORT CODE: 04-00-03<br>ACCOUNT NUMBER: 98972536</p>
            </div>
            <div>
              <p><span>Subtotal</span><strong>${money(invoice.total)}</strong></p>
              <p><span>Paid</span><strong>${money(invoice.paid)}</strong></p>
              <p><span>Amount due</span><strong>${money(balance)}</strong></p>
              <small>${payments.map((payment) => `${payment.method} ${money(payment.amount)}`).join(", ") || "No payment recorded"}</small>
            </div>
          </div>
          <div class="invoice-doc-terms">
            <h3>Terms And Conditions</h3>
            <ol>
              <li>Once merchandise is removed from MySuitShop we are no longer responsible for the care or condition of the items.</li>
              <li>Unless agreed prior, alteration services are a separate cost and worked by appointment only.</li>
              <li>All sales are final. There are no returns, cancellation, exchanges, refunds or transferred credits.</li>
              <li>A 50% deposit is required before your suit is ordered into the store.</li>
              <li>Your suit will be shipped or ready for pickup within 4-6 weeks of collection date.</li>
              <li>All deposits are non refundable.</li>
              <li>By placing an order, the customer agrees to all terms and conditions outlined by the store.</li>
            </ol>
          </div>
          <div class="invoice-doc-signature">
            <span>Customer signature</span>
            <strong>${order.signature?.name || customer.name}</strong>
            <p>Approved ${formatDate(order.signature?.date || "2026-05-01")}</p>
          </div>
        </div>
        <div class="modal-actions no-print">
          <button class="ghost-button" data-action="open-customer" data-id="${customer.id}">${icon("users")} View profile</button>
          <button class="button gold" data-action="print-invoice">${icon("invoice")} Print / save PDF</button>
        </div>
      </section>
    </div>
  `;
}

function renderStaffBookingModal() {
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="staff-booking-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Staff booking</p>
            <h3 id="staff-booking-title" class="modal-title">Create staff booking</h3>
            <p class="panel-subtitle">For walk-ins, phone calls, or customers already in the CRM.</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        ${bookingForm("staff-booking-form")}
      </section>
    </div>
  `;
}

function renderInventoryModal() {
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="inventory-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Inventory</p>
            <h3 id="inventory-title" class="modal-title">Add inventory</h3>
            <p class="panel-subtitle">Add the main style first, then choose how the stock varies.</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <form id="inventory-form" class="form-grid">
          <div class="field">
            <label for="inventory-item">Main style / item</label>
            <input id="inventory-item" name="item" required placeholder="Black double breasted with cuff" />
          </div>
          <div class="field">
            <label for="inventory-category">Category</label>
            <select id="inventory-category" name="category" required>
              <option>Suits</option>
              <option>Trousers</option>
              <option>Shirts</option>
              <option>Accessories</option>
            </select>
          </div>
          <div class="field">
            <label for="inventory-price">Price</label>
            <input id="inventory-price" name="price" type="number" min="0" step="1" required value="0" />
          </div>
          <div class="field">
            <label for="inventory-variation-type">Variation by</label>
            <select id="inventory-variation-type" name="variationType" required>
              <option value="Size">Size</option>
              <option value="Colour">Colour</option>
              <option value="Material">Material</option>
              <option value="Style">Style detail</option>
            </select>
          </div>
          <div class="field">
            <label for="inventory-variation-values">Variation values</label>
            <input id="inventory-variation-values" name="variationValues" required placeholder="44, 46, 48 or black, navy" />
          </div>
          <div class="field">
            <label for="inventory-colour">Colour</label>
            <input id="inventory-colour" name="color" placeholder="Black" />
          </div>
          <div class="field">
            <label for="inventory-material">Material / detail</label>
            <input id="inventory-material" name="material" placeholder="Suede shawl lapel, satin trim..." />
          </div>
          <div class="field full">
            <label for="inventory-description">Default description</label>
            <textarea id="inventory-description" name="description" placeholder="Default invoice description for this item. You can edit it per invoice later."></textarea>
          </div>
          <div class="field">
            <label for="inventory-qty">Quantity</label>
            <input id="inventory-qty" name="qty" type="number" min="0" step="1" required value="1" />
          </div>
          <div class="field">
            <label for="inventory-alert">Low stock alert</label>
            <input id="inventory-alert" name="alert" type="number" min="0" step="1" required value="2" />
          </div>
          <div class="field">
            <label for="inventory-committed">Already committed</label>
            <input id="inventory-committed" name="committed" type="number" min="0" step="1" value="0" />
          </div>
          <div class="modal-actions full">
            <button type="button" class="ghost-button" data-action="close-modal">Cancel</button>
            <button class="button gold" type="submit">Add inventory</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderDashboardMetricModal() {
  const metric = state.modal.metric;
  const todaysAppointments = state.appointments.filter((appt) => appt.date === DEMO_TODAY);
  const activeOrders = state.orders.filter((order) => !["Collected", "Cancelled"].includes(order.status)).sort(sortByClosestDueDate);
  const missingOrders = priorityMissingOrders();
  const dueSoonOrders = upcomingOrdersDueSoon();
  const unpaidInvoices = state.invoices.filter((invoice) => invoice.total > invoice.paid);
  const config = {
    appointments: {
      kicker: "Today's appointments",
      title: `${todaysAppointments.length} appointment${todaysAppointments.length === 1 ? "" : "s"} today`,
      subtitle: "Quick view of bookings due today.",
      actionView: "bookings",
      actionLabel: "Open bookings",
      body: todaysAppointments.map((appt) => appointmentCard(appt, true)).join("") || emptyState("No appointments today."),
    },
    orders: {
      kicker: "Missing orders",
      title: `${missingOrders.length} missing order${missingOrders.length === 1 ? "" : "s"}`,
      subtitle: "Stock gaps sorted by earliest due date first.",
      actionView: "orders",
      actionLabel: "Open orders",
      body: missingOrders.map((order) => orderCard(order, true, { expandable: true, compactCollapsed: true })).join("") || emptyState("No missing stock orders."),
    },
    balance: {
      kicker: "Balance due",
      title: state.financeUnlocked ? money(unpaidInvoices.reduce((sum, invoice) => sum + Math.max(invoice.total - invoice.paid, 0), 0)) : "Finance locked",
      subtitle: state.financeUnlocked ? "Outstanding balances across open invoices." : "Unlock invoices to view full reporting.",
      actionView: "invoices",
      actionLabel: state.financeUnlocked ? "Open invoices" : "Unlock invoices",
      body: state.financeUnlocked
        ? unpaidInvoices.map(invoiceCard).join("") || emptyState("No unpaid invoices.")
        : emptyState("Financial reports are password protected. Staff can still see balances inside customer and order files."),
    },
    dueSoon: {
      kicker: "Due in 2 weeks",
      title: `${dueSoonOrders.length} order${dueSoonOrders.length === 1 ? "" : "s"} due soon`,
      subtitle: `Orders due from ${formatDate(DEMO_TODAY)} to ${formatDate(addDays(DEMO_TODAY, 14))}.`,
      actionView: "orders",
      actionLabel: "Open orders",
      body: dueSoonOrders.map((order) => orderCard(order, true, { expandable: true, compactCollapsed: true })).join("") || emptyState("No orders due in the next 2 weeks."),
    },
  }[metric] || {};
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card dashboard-metric-modal" role="dialog" aria-modal="true" aria-labelledby="dashboard-metric-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">${config.kicker || "Dashboard"}</p>
            <h3 id="dashboard-metric-title" class="modal-title">${config.title || "Dashboard summary"}</h3>
            <p class="panel-subtitle">${config.subtitle || ""}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <div class="list">
          ${config.body || emptyState("Nothing to show.")}
        </div>
        <div class="modal-actions">
          <button class="ghost-button" data-action="close-modal">Close</button>
          ${config.actionView ? `<button class="button gold" data-view="${config.actionView}">${config.actionLabel}</button>` : ""}
        </div>
      </section>
    </div>
  `;
}

function renderDashboardAttentionModal() {
  const category = state.modal.category || "";
  const config = dashboardAttentionCategory(category);
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card dashboard-metric-modal" role="dialog" aria-modal="true" aria-labelledby="dashboard-attention-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Needs attention</p>
            <h3 id="dashboard-attention-title" class="modal-title">${config.title}</h3>
            <p class="panel-subtitle">${config.subtitle}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <div class="list">
          ${config.body || emptyState(config.empty)}
        </div>
        <div class="modal-actions">
          <button class="ghost-button" data-action="close-modal">Close</button>
          ${config.actionView ? `<button class="button gold" data-view="${config.actionView}">${config.actionLabel}</button>` : ""}
        </div>
      </section>
    </div>
  `;
}

function dashboardAttentionCategory(category) {
  const priorityNotes = dashboardPriorityNotes();
  const missingOrders = priorityMissingOrders();
  const fittingPayments = dashboardFittingPaymentOrders();
  const dueSoonOrders = upcomingOrdersDueSoon();
  const lowStock = state.inventory.filter((item) => item.qty <= item.alert).sort((a, b) => inventoryAvailable(a) - inventoryAvailable(b));
  const configs = {
    "priority-notes": {
      title: `Priority fitting notes (${priorityNotes.length})`,
      subtitle: "Fitting notes marked as priority, sorted by priority due date.",
      actionView: "orders",
      actionLabel: "Open orders",
      empty: "No priority fitting notes.",
      body: priorityNotes.map(priorityNoteAttentionCard).join(""),
    },
    "missing-stock": {
      title: `Missing stock (${missingOrders.length})`,
      subtitle: "Orders waiting for stock allocation, sorted by earliest due date.",
      actionView: "orders",
      actionLabel: "Open orders",
      empty: "No missing stock orders.",
      body: missingOrders.map((order) => orderCard(order, true, { compactCollapsed: true, popupOnOpen: true })).join(""),
    },
    "fitting-payment": {
      title: `Overdue deposits (${fittingPayments.length})`,
      subtitle: "Orders with fittings that have not reached the required deposit target.",
      actionView: "orders",
      actionLabel: "Open orders",
      empty: "No overdue deposits need attention.",
      body: fittingPayments.map((order) => orderCard(order, true, { compactCollapsed: true, popupOnOpen: true })).join(""),
    },
    "due-soon": {
      title: `Due in 2 weeks (${dueSoonOrders.length})`,
      subtitle: `Orders due from ${formatDate(DEMO_TODAY)} to ${formatDate(addDays(DEMO_TODAY, 14))}.`,
      actionView: "orders",
      actionLabel: "Open orders",
      empty: "No orders due in the next 2 weeks.",
      body: dueSoonOrders.map((order) => orderCard(order, true, { compactCollapsed: true, popupOnOpen: true })).join(""),
    },
    "low-stock": {
      title: `Low stock (${lowStock.length})`,
      subtitle: "Inventory items at or below their low-stock alert.",
      actionView: "inventory",
      actionLabel: "Open inventory",
      empty: "No low-stock items.",
      body: lowStock.map(lowStockAttentionCard).join(""),
    },
  };
  return configs[category] || {
    title: "Needs attention",
    subtitle: "Items that need staff review.",
    empty: "Nothing to show.",
    body: "",
  };
}

function dashboardFittingPaymentOrders() {
  return state.orders
    .filter((order) => order.fittingDate && order.fittingDate >= DEMO_TODAY && Math.max(Math.ceil(order.total / 2) - order.paid, 0) > 0)
    .sort((a, b) => `${a.fittingDate} ${a.fittingTime || ""}`.localeCompare(`${b.fittingDate} ${b.fittingTime || ""}`));
}

function priorityNoteAttentionCard({ order, customer, record }) {
  return `
    <article class="item-card clickable-card" data-action="open-order-detail" data-id="${order.id}" tabindex="0" role="button" aria-label="Open ${order.number} details">
      <div class="row wrap">
        <div>
          <p class="name">${customer.name}</p>
          <p class="meta">${order.number} • ${record.priorityDue ? `Priority due ${formatDate(record.priorityDue)}` : "Priority due date not set"} • Order due ${formatDate(order.due)}</p>
        </div>
        <span class="overdue-badge">Priority</span>
      </div>
      <p class="meta">${escapeHtml(record.additionalNotes || record.notes || "Priority note marked with no note text.")}</p>
    </article>
  `;
}

function lowStockAttentionCard(item) {
  return `
    <article class="item-card">
      <div class="row wrap">
        <div>
          <p class="name">${inventoryParentName(item)}</p>
          <p class="meta">${inventoryVariationLabel(item)}${item.color ? ` • ${item.color}` : ""}</p>
        </div>
        <span class="status unpaid">Low stock</span>
      </div>
      <div class="row wrap">
        <p class="meta">Qty ${item.qty} • Alert ${item.alert} • ${inventoryAvailable(item)} available</p>
        <strong>${money(inventoryPrice(item))}</strong>
      </div>
    </article>
  `;
}

function renderAppointmentDetailModal() {
  const appt = state.appointments.find((appointment) => appointment.id === state.modal.appointmentId);
  if (!appt) return "";
  const customer = getCustomer(appt.customerId);
  const comms = appointmentComms(appt);
  const confirmationDelivery = deliveryState(comms.confirmationStatus);
  const reminderDelivery = deliveryState(comms.reminderStatus);
  const typeTag = appointmentTypeTag(appt.type);
  const isSalesAppointment = /consultation|measurements/i.test(appt.type);
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card appointment-detail-modal" role="dialog" aria-modal="true" aria-labelledby="appointment-detail-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">${typeTag.label} appointment</p>
            <h3 id="appointment-detail-title" class="modal-title">${appt.time} • ${appt.name}</h3>
            <p class="panel-subtitle">${formatDate(appt.date)} with ${appt.staff}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <div class="appointment-detail-grid">
          <div class="detail-list">
            <p><span>Customer</span><strong>${customer.name}</strong></p>
            <p><span>Phone</span><strong>${customer.phone}</strong></p>
            <p><span>Email</span><strong>${customer.email}</strong></p>
            <p><span>Event</span><strong>${customer.event}</strong></p>
            <p><span>Status</span><strong>${appt.status}</strong></p>
          </div>
          <div class="appointment-note-box">
            <span>Appointment notes</span>
            <p>${escapeHtml(appt.notes || "No appointment notes added.")}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="panel-header compact-modal-header">
          <div>
            <h3 class="panel-title">Communication made</h3>
            <p class="panel-subtitle">Confirmation and reminder records for this appointment.</p>
          </div>
        </div>
        <div class="communication-row appointment-detail-comms">
          <span class="communication-status">
            <span>Email + text confirmation</span>
            <strong class="delivery-state ${confirmationDelivery.className}">${comms.confirmationStatus}</strong>
          </span>
          <span class="communication-status">
            <span>Reminder</span>
            <strong class="delivery-state ${reminderDelivery.className}">${comms.reminderStatus}</strong>
            <small>${formatDate(comms.reminderDate)}</small>
          </span>
        </div>
        ${
          isSalesAppointment
            ? `<div class="appointment-next-step">
                <p class="meta">If the client attends and wants to proceed: measure them, prepare the quote, create the invoice, then take the deposit.</p>
                <div class="appointment-actions">
                  <button class="ghost-button" data-action="no-sale-follow-up" data-id="${appt.id}">${icon("external")} No-sale follow-up</button>
                  <button class="button gold" data-action="sale-from-appointment" data-id="${appt.customerId}" data-appointment="${appt.id}">${icon("invoice")} Create quote/invoice</button>
                </div>
              </div>`
            : ""
        }
      </section>
    </div>
  `;
}

function renderDashboard() {
  const todaysAppointments = state.appointments.filter((appt) => appt.date === DEMO_TODAY).sort((a, b) => a.time.localeCompare(b.time));
  const missingOrders = priorityMissingOrders();
  const closestMissingOrder = missingOrders[0];
  const dueSoonOrders = upcomingOrdersDueSoon();
  const lowStock = state.inventory.filter((item) => item.qty <= item.alert);
  const priorityNotes = dashboardPriorityNotes();
  const attentionItems = dashboardAttentionItems({ missingOrders, dueSoonOrders, priorityNotes, lowStock });

  return `
    <section class="dashboard-main-grid" id="today-bookings">
      <div class="panel dashboard-bookings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">${todaysAppointments.length} booking${todaysAppointments.length === 1 ? "" : "s"} today</h3>
            <p class="panel-subtitle">Tap a booking to see appointment details and communication history.</p>
          </div>
          <button class="ghost-button" data-view="bookings">${icon("calendar")} Open calendar</button>
        </div>
        <div class="dashboard-appointment-list">
          ${todaysAppointments.map(dashboardAppointmentCard).join("") || emptyState("No appointments today.")}
        </div>
      </div>
      <div class="panel dashboard-attention-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Needs attention</h3>
            <p class="panel-subtitle">Only the things staff may need to act on today.</p>
          </div>
        </div>
        <div class="attention-list">
          ${attentionItems.map(dashboardAttentionCard).join("") || emptyState("Nothing urgent right now.")}
        </div>
      </div>
    </section>
  `;
}

function dashboardAppointmentCard(appt) {
  const typeTag = appointmentTypeTag(appt.type);
  const statusMeta = appointmentStatusMeta(appt.status);
  const comms = appointmentComms(appt);
  const customer = getCustomer(appt.customerId);
  return `
    <button class="dashboard-appointment-card appointment-type-card-${typeTag.className}" type="button" data-action="open-appointment-detail" data-id="${appt.id}">
      <span class="appointment-time">${appt.time}</span>
      <span class="appointment-main">
        <strong>${appt.name}</strong>
        <small>${typeTag.label} • ${appt.staff}</small>
      </span>
      <span class="appointment-side">
        <span class="appointment-status-text ${statusMeta.className}">
          ${statusMeta.mark ? `<span class="appointment-status-mark">${statusMeta.mark}</span>` : ""}
          ${appt.status}
        </span>
        <small>${customer.phone}</small>
      </span>
      <span class="appointment-comms-pill">${deliveryState(comms.confirmationStatus).label} / ${deliveryState(comms.reminderStatus).label}</span>
    </button>
  `;
}

function dashboardAttentionItems({ missingOrders, dueSoonOrders, priorityNotes, lowStock }) {
  const fittingPayments = dashboardFittingPaymentOrders();
  return [
    ...priorityNotes.slice(0, 3).map(({ order, customer, record }) => ({
      label: "Priority fitting note",
      value: "!",
      note: `${customer.name} • ${order.number}${record.priorityDue ? ` • Due ${formatDate(record.priorityDue)}` : ""}`,
      detail: record.additionalNotes || record.notes || "Priority note marked with no note text.",
      category: "priority-notes",
    })),
    missingOrders.length
      ? {
          label: "Missing stock",
          value: missingOrders.length,
          note: `${missingOrders[0].number} due ${formatDate(missingOrders[0].due)}`,
          category: "missing-stock",
        }
      : null,
    fittingPayments.length
      ? {
          label: "Overdue deposits",
          value: fittingPayments.length,
          note: `${getCustomer(fittingPayments[0].customerId).name} needs ${money(Math.max(Math.ceil(fittingPayments[0].total / 2) - fittingPayments[0].paid, 0))} to reach 50%`,
          category: "fitting-payment",
        }
      : null,
    priorityNotes.length > 3
      ? {
          label: "More priority notes",
          value: priorityNotes.length - 3,
          note: `${priorityNotes.length - 3} more fitting note${priorityNotes.length - 3 === 1 ? "" : "s"} need review`,
          category: "priority-notes",
        }
      : null,
    dueSoonOrders.length
      ? {
          label: "Due in 2 weeks",
          value: dueSoonOrders.length,
          note: `${dueSoonOrders[0].number} due ${formatDate(dueSoonOrders[0].due)}`,
          category: "due-soon",
        }
      : null,
    lowStock.length
      ? {
          label: "Low stock",
          value: lowStock.length,
          note: closestLowStockNote(lowStock),
          category: "low-stock",
        }
      : null,
  ].filter(Boolean);
}

function closestLowStockNote(items) {
  const item = items[0];
  return `${item.item} • ${item.qty} left`;
}

function dashboardAttentionCard(item) {
  return `
    <button class="attention-card" type="button" data-action="open-dashboard-attention" data-id="${item.category}">
      <span>
        <strong>${item.label}</strong>
        <small>${item.note}</small>
        ${item.detail ? `<em>${escapeHtml(item.detail)}</em>` : ""}
      </span>
      <b>${item.value}</b>
    </button>
  `;
}

function dashboardPriorityNotes() {
  return state.orders
    .filter((order) => order.fittingRecord?.priority)
    .map((order) => ({
      order,
      customer: getCustomer(order.customerId),
      record: order.fittingRecord,
    }))
    .sort((a, b) => (a.record.priorityDue || a.order.due || "9999-12-31").localeCompare(b.record.priorityDue || b.order.due || "9999-12-31"));
}

function dashboardUpcomingWeekLabel() {
  const dates = weekDates(DEMO_TODAY);
  return `${formatDate(dates[0])} to ${formatDate(dates[6])}`;
}

function priorityMissingOrders() {
  return state.orders
    .filter(
      (order) =>
        !["Collected", "Cancelled"].includes(order.status) &&
        (order.status === "Missing" || order.stockStatus === "Missing"),
    )
    .sort(sortByClosestDueDate);
}

function dashboardUpcomingOrders() {
  const [weekStart, , , , , , weekEnd] = weekDates(DEMO_TODAY);
  return state.orders
    .filter((order) => {
      if (["Collected", "Cancelled"].includes(order.status)) return false;
      const dueThisWeek = order.due && order.due >= weekStart && order.due <= weekEnd;
      const fittingThisWeek = order.fittingDate && order.fittingDate >= weekStart && order.fittingDate <= weekEnd;
      return dueThisWeek || fittingThisWeek;
    })
    .sort(sortByDashboardUpcomingDate);
}

function dashboardUpcomingDate(order) {
  const [weekStart, , , , , , weekEnd] = weekDates(DEMO_TODAY);
  const dates = [order.due, order.fittingDate].filter((date) => date && date >= weekStart && date <= weekEnd);
  return dates.sort()[0] || order.due || order.fittingDate || "9999-12-31";
}

function sortByDashboardUpcomingDate(a, b) {
  const dateCompare = dashboardUpcomingDate(a).localeCompare(dashboardUpcomingDate(b));
  if (dateCompare !== 0) return dateCompare;
  return sortByClosestDueDate(a, b);
}

function upcomingOrdersDueSoon() {
  const dueBy = addDays(DEMO_TODAY, 14);
  return state.orders
    .filter(
      (order) =>
        !["Collected", "Cancelled"].includes(order.status) &&
        order.due &&
        order.due >= DEMO_TODAY &&
        order.due <= dueBy,
    )
    .sort(sortByClosestDueDate);
}

function renderBookings() {
  const calendarDate = state.calendarDate || "2026-05-01";
  const calendarMode = state.calendarMode || "day";
  const visibleAppointments = appointmentsForCalendar(calendarDate, calendarMode);
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Calendar</h3>
          <p class="panel-subtitle">Switch between daily, weekly, and monthly booking views.</p>
        </div>
        <div class="row compact-actions calendar-actions">
          <button class="ghost-button" data-view="bookingPortal">${icon("external")} Public page</button>
          <button class="button gold" data-action="new-staff-booking">${icon("calendar")} Create staff booking</button>
        </div>
      </div>
      <div class="calendar-toolbar">
        <div class="segmented-control" role="tablist" aria-label="Calendar view">
          ${["day", "week", "month"]
            .map(
              (mode) => `
                <button class="${calendarMode === mode ? "active" : ""}" data-calendar-mode="${mode}" type="button">
                  ${titleCase(mode)}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="calendar-date-control">
          <button class="icon-button" data-action="calendar-prev" title="Previous">${icon("back")}</button>
          <input type="date" value="${calendarDate}" data-calendar-date aria-label="Calendar date" />
          <button class="icon-button" data-action="calendar-next" title="Next">${icon("external")}</button>
        </div>
      </div>
      ${
        calendarMode === "day"
          ? `<div class="calendar-agenda-inline">
              <div class="panel-header compact-panel-header">
                <div>
                  <h3 class="panel-title">${calendarRangeTitle(calendarDate, calendarMode)}</h3>
                  <p class="panel-subtitle">${visibleAppointments.length} appointment${visibleAppointments.length === 1 ? "" : "s"} in this ${calendarMode} view.</p>
                </div>
              </div>
              <div class="list">
                ${groupedAppointmentAgenda(visibleAppointments) || emptyState("No appointments in this view.")}
              </div>
            </div>`
          : `<div class="calendar-shell">
        ${renderCalendar(calendarDate, calendarMode)}
      </div>`
      }
    </section>
  `;
}

function workflowResultTitle(filter) {
  if (filter === "bought" || filter === "wants-to-buy") return "Bought";
  return "Follow-ups";
}

function workflowResultSubtitle(filter) {
  if (filter === "bought" || filter === "wants-to-buy") return "Customers who bought and now have an active quotation/order, sorted by due date.";
  return "Customers who attended but did not buy, sorted by follow-up date.";
}

function renderWorkflowResults(filter) {
  if (filter === "bought" || filter === "wants-to-buy") return renderBoughtWorkflowResults();
  return renderFollowUpWorkflowResults();
}

function renderFollowUpWorkflowResults() {
  const followUps = (state.followUps || []).slice().sort((a, b) => a.due.localeCompare(b.due));
  return followUps
    .map((followUp) => {
      const customer = getCustomer(followUp.customerId);
      return `
        <article class="item-card">
          <div class="row wrap">
            <div>
              <p class="name">${followUp.name}</p>
              <p class="meta">${formatDate(followUp.due)} • ${followUp.reason}</p>
              <p class="meta">${customer.phone} • ${followUp.channel}</p>
            </div>
            <span class="status ordered">${followUp.status}</span>
          </div>
          <div class="row wrap">
            <button class="ghost-button" data-action="open-customer" data-id="${followUp.customerId}">${icon("users")} View profile</button>
          </div>
        </article>
      `;
    })
    .join("") || emptyState("No follow-ups scheduled.");
}

function renderBoughtWorkflowResults() {
  const activeOrders = state.orders
    .filter((order) => !["Collected", "Cancelled", "Ready for collection"].includes(order.status))
    .slice()
    .sort(sortByClosestDueDate);
  return activeOrders
    .map((order) => {
      const customer = getCustomer(order.customerId);
      const paidPercent = Math.round((order.paid / order.total) * 100);
      return `
        <article class="item-card">
          <div class="row wrap">
            <div>
              <p class="name">${order.number} • ${customer.name}</p>
              <p class="meta">${order.item}</p>
              <p class="meta">Due ${formatDate(order.due)} • ${paidPercent}% paid • Sale by ${order.saleBy || "Unassigned"}</p>
            </div>
            <span class="status ${statusClass(order.status)}">${order.status}</span>
          </div>
          <div class="row wrap">
            <strong>${money(Math.max(order.total - order.paid, 0))} due</strong>
            <button class="ghost-button" data-action="open-customer" data-id="${order.customerId}">${icon("users")} View profile</button>
          </div>
        </article>
      `;
    })
    .join("") || emptyState("No customers are waiting for quotation/order.");
}

function renderFittingWorkflowResults() {
  const fittingOrders = state.orders
    .filter((order) => order.fittingDate)
    .slice()
    .sort((a, b) => `${a.fittingDate} ${a.fittingTime || ""}`.localeCompare(`${b.fittingDate} ${b.fittingTime || ""}`));
  return fittingOrders
    .map((order) => {
      const customer = getCustomer(order.customerId);
      const requiredHalf = Math.ceil(order.total * 0.5);
      const amountToHalf = Math.max(requiredHalf - order.paid, 0);
      const paidPercent = Math.round((order.paid / order.total) * 100);
      return `
        <article class="item-card">
          <div class="row wrap">
            <div>
              <p class="name">${formatDate(order.fittingDate)} ${order.fittingTime || ""} • ${customer.name}</p>
              <p class="meta">${order.number} • ${order.item}</p>
              <p class="meta">${paidPercent}% paid • ${amountToHalf ? `${money(amountToHalf)} needed to reach 50%` : "50% reached"}</p>
            </div>
            <span class="status ${amountToHalf ? "partial" : "ready"}">${amountToHalf ? "Payment due" : "50% reached"}</span>
          </div>
          <div class="row wrap">
            <button class="ghost-button" data-action="collect-half" data-id="${order.id}">${icon("invoice")} Collect</button>
            <button class="ghost-button" data-action="open-customer" data-id="${order.customerId}">${icon("users")} View profile</button>
          </div>
        </article>
      `;
    })
    .join("") || emptyState("No fitting appointments are waiting.");
}

function renderCustomers() {
  const filtered = state.customers.filter((customer) => {
    const haystack = `${customer.name} ${customer.phone} ${customer.email} ${customer.event}`.toLowerCase();
    return haystack.includes(state.search.toLowerCase());
  });
  const selected = state.customers.find((customer) => customer.id === state.selectedCustomerId) || filtered[0] || state.customers[0];
  const orders = state.orders.filter((order) => order.customerId === selected.id);
  const invoices = state.invoices.filter((invoice) => invoice.customerId === selected.id);
  const quotations = customerQuotations(selected.id);

  return `
    <section class="content-grid">
      <div class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Customer list</h3>
            <p class="panel-subtitle">Search by name, phone, email, or event. Tap a customer to open their orders.</p>
          </div>
        </div>
        <div class="field">
          <label for="customer-search">Search</label>
          <input id="customer-search" data-input="customer-search" type="search" value="${escapeAttribute(state.search)}" placeholder="Search customers" />
        </div>
        <div class="customer-list list" style="margin-top: 12px;">
          ${filtered
            .map(
              (customer) => `
                <button class="customer-button ${customer.id === selected.id ? "active" : ""}" data-customer="${customer.id}">
                  <span class="row">
                    <strong>${customer.name}</strong>
                    <span class="status ${statusClass(primaryOrderStatus(customer.id))}">${primaryOrderStatus(customer.id)}</span>
                  </span>
                  <span class="meta">${customer.event}</span>
                  <span class="meta">${customer.phone}</span>
                </button>
              `,
            )
            .join("") || emptyState("No matching customers.")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">${selected.name}</h3>
            <p class="panel-subtitle">${selected.event} • Last visit ${formatDate(selected.lastVisit)}</p>
          </div>
          <button class="ghost-button" data-action="book-selected" data-id="${selected.id}">${icon("calendar")} Book</button>
        </div>
        <div class="three-column">
          <div class="item-card">
            <p class="meta">Phone</p>
            <p class="name">${selected.phone}</p>
          </div>
          <div class="item-card">
            <p class="meta">Email</p>
            <p class="name">${selected.email}</p>
          </div>
          <div class="item-card">
            <p class="meta">Address</p>
            <p class="name">${selected.address}</p>
          </div>
        </div>
        <div class="divider"></div>
        <h3 class="panel-title">Measurements</h3>
        <div class="measurement-grid" style="margin-top: 12px;">
          ${Object.entries(selected.measurements)
            .map(
              ([label, value]) => `
                <div class="measure">
                  <span>${titleCase(label)}</span>
                  <strong>${value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="divider"></div>
        <section class="two-column">
          <div>
            <h3 class="panel-title">Orders</h3>
            <div class="list" style="margin-top: 10px;">
              ${orders.map((order) => orderCard(order, true)).join("") || emptyState("No orders yet.")}
            </div>
          </div>
          <div>
            <h3 class="panel-title">Invoices</h3>
            <div class="list" style="margin-top: 10px;">
              ${invoices.map((invoice) => invoiceCard(invoice)).join("") || emptyState("No invoices yet.")}
            </div>
          </div>
        </section>
        <div class="divider"></div>
        <h3 class="panel-title">Quotations</h3>
        <div class="list" style="margin-top: 10px;">
          ${quotations.map(quotationCard).join("") || emptyState("No saved quotations yet.")}
        </div>
        <div class="divider"></div>
        ${renderCustomerFittings(selected, orders)}
        <div class="divider"></div>
        <h3 class="panel-title">Staff notes</h3>
        <p class="page-copy">${selected.notes}</p>
      </div>
    </section>
  `;
}

function renderCustomerFittings(customer, orders) {
  const fittingOrders = orders
    .filter((order) => !["Collected", "Cancelled"].includes(order.status))
    .sort(sortByClosestDueDate);
  return `
    <section class="customer-fitting-section">
      <div class="panel-header compact-panel-header">
        <div>
          <h3 class="panel-title">Fitting</h3>
          <p class="panel-subtitle">Record what was checked or altered at each fitting.</p>
        </div>
      </div>
      <div class="list">
        ${
          fittingOrders
            .map((order) => renderFittingForm(customer, order))
            .join("") || emptyState("No active orders need fitting notes yet.")
        }
      </div>
    </section>
  `;
}

function renderFittingForm(customer, order) {
  const record = order.fittingRecord || {};
  return `
    <form class="item-card fitting-record-card" data-fitting-form="${order.id}">
      <div class="row wrap">
        <div>
          <p class="name">${order.number} • ${order.item}</p>
          <p class="meta">${customer.name} • Due ${formatDate(order.due)}${order.fittingDate ? ` • Fitting ${formatDate(order.fittingDate)}` : ""}</p>
        </div>
        <span class="status ${statusClass(order.status)}">${order.status}</span>
      </div>
      <div class="fitting-checklist">
        ${fittingChecklistSections()
          .map(
            (section) => `
              <fieldset class="fitting-check-group">
                <legend>${section.label}</legend>
                ${section.items
                  .map(
                    (item) => `
                      <label class="check-field" for="${order.id}-${item.id}">
                        <input id="${order.id}-${item.id}" name="${item.id}" type="checkbox" ${record[item.id] ? "checked" : ""} />
                        <span>${item.label}</span>
                      </label>
                    `,
                  )
                  .join("")}
              </fieldset>
            `,
          )
          .join("")}
      </div>
      <div class="field full">
        <label for="${order.id}-fitting-notes">Fitting notes</label>
        <textarea id="${order.id}-fitting-notes" name="notes" placeholder="Record what was done, what still needs adjusting, and next action.">${escapeHtml(record.notes || "")}</textarea>
      </div>
      <div class="field full">
        <label for="${order.id}-additional-notes">Additional notes</label>
        <textarea id="${order.id}-additional-notes" name="additionalNotes" placeholder="Add any extra instruction, issue, or staff handover note.">${escapeHtml(record.additionalNotes || "")}</textarea>
      </div>
      <div class="priority-note-controls">
        <label class="check-field priority-check" for="${order.id}-priority-note">
          <input id="${order.id}-priority-note" name="priority" type="checkbox" data-fitting-priority="${order.id}" ${record.priority ? "checked" : ""} />
          <span>Mark as priority</span>
        </label>
        <div class="field priority-due-field" data-fitting-priority-due="${order.id}" ${record.priority ? "" : "hidden"}>
          <label for="${order.id}-priority-due">Priority due date</label>
          <input id="${order.id}-priority-due" name="priorityDue" type="date" value="${record.priorityDue || ""}" ${record.priority ? "required" : "disabled"} />
        </div>
      </div>
      <div class="row wrap">
        <p class="meta">${record.updated ? `Last saved ${formatDate(record.updated)} by ${record.updatedBy || "Staff"}` : "No fitting notes saved yet."}</p>
        <button class="button gold" type="submit">${icon("check")} Save fitting</button>
      </div>
    </form>
  `;
}

function fittingChecklistSections() {
  return [
    {
      label: "Jacket",
      items: [
        { id: "jacketSleeveLength", label: "Sleeve length" },
        { id: "jacketSleeveTaper", label: "Sleeve taper" },
        { id: "jacketWaistTaper", label: "Waist taper" },
        { id: "jacketLength", label: "Jacket length" },
      ],
    },
    {
      label: "Trousers",
      items: [
        { id: "trouserLength", label: "Length" },
        { id: "trouserTaper", label: "Taper" },
        { id: "trouserWaist", label: "Waist" },
      ],
    },
    {
      label: "Shirt",
      items: [
        { id: "shirtWaistTaper", label: "Waist taper" },
        { id: "shirtSleeveLength", label: "Sleeve length" },
      ],
    },
  ];
}

function renderOrders() {
  const columns = ["Missing", "Unprocessed", "Ready", "Fitting", "At Tailor", "Ready for collection", "Collected"];
  const orderPeriod = state.orderPeriod || "all";
  const filteredOrders = ordersForPeriod(orderPeriod);
  const activeStage = columns.includes(state.orderStageView) ? state.orderStageView : "home";
  return `
    <section class="panel order-view-panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Order views</h3>
          <p class="panel-subtitle">Choose Home for the full overview, or open one stage at a time.</p>
        </div>
      </div>
      <div class="order-stage-tabs" role="tablist" aria-label="Order stage views">
        <button class="${activeStage === "home" ? "active" : ""}" data-order-stage-view="home" type="button">
          Home
          <span>${filteredOrders.length}</span>
        </button>
        ${columns
          .map((status) => {
            const count = filteredOrders.filter((order) => order.status === status).length;
            return `
              <button class="${activeStage === status ? "active" : ""}" data-order-stage-view="${escapeAttribute(status)}" type="button">
                ${status}
                <span>${count}</span>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="order-filter-bar">
        <div class="segmented-control" role="tablist" aria-label="Order date filter">
          ${["week", "month", "year", "all"]
            .map(
              (period) => `
                <button class="${orderPeriod === period ? "active" : ""}" data-order-period="${period}" type="button">
                  ${orderPeriodTabLabel(period)}
                </button>
              `,
            )
            .join("")}
        </div>
        <p class="meta">${filteredOrders.length} ${filteredOrders.length === 1 ? "order" : "orders"} shown by due date.</p>
      </div>
    </section>
    ${
      activeStage === "home"
        ? renderOrdersHome(columns, filteredOrders, orderPeriod)
        : `<section class="order-stage-detail-grid single-stage-view">
            ${orderStageDetailCard(activeStage, filteredOrders)}
          </section>`
    }
    ${activeStage === "home" ? renderWeeklyAlterationTotals() : ""}
  `;
}

function renderOrdersHome(columns, filteredOrders, orderPeriod) {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Order overview</h3>
          <p class="panel-subtitle">Quick stage totals for ${orderPeriodLabel(orderPeriod)}. Tap a stage to jump to its order card below.</p>
        </div>
        <button class="button gold" data-action="new-order">${icon("plus")} Create order</button>
      </div>
      <div class="order-stat-grid">
        ${columns
          .map((status) => {
            const config = orderStageConfig(status);
            const orders = filteredOrders.filter((order) => order.status === status).sort((a, b) => sortOrdersForStage(a, b, status));
            return `
              <button class="stage-summary-card order-stat-card ${status === "Missing" ? "urgent-stat" : ""}" data-action="scroll-order-stage" data-id="${escapeAttribute(status)}">
                <span>${status}</span>
                <strong>${orders.length}</strong>
                <small>${config.description || (orders.length === 1 ? "order in this stage" : "orders in this stage")}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
    <section class="order-stage-detail-grid">
      ${columns.map((status) => orderStageDetailCard(status, filteredOrders)).join("")}
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">All orders</h3>
          <p class="panel-subtitle">Tap an order to expand its full details, balance, dates, and measurements.</p>
        </div>
      </div>
      <label class="stage-search">
        <span class="visually-hidden">Search all orders</span>
        <input type="search" data-stage-search="all-orders" placeholder="Search customers or orders" autocomplete="off" />
      </label>
      <div class="list" data-stage-list="all-orders">
        ${filteredOrders
          .slice()
          .sort(sortByClosestDueDate)
          .map((order) =>
            orderCard(order, true, {
              expandable: true,
              compactCollapsed: true,
              action: "toggle-all-order",
              expandedOrderId: state.allOrdersExpandedOrderId,
            }),
          )
          .join("")}
      </div>
    </section>
  `;
}

function orderStageDetailCard(status, sourceOrders = state.orders) {
  const config = orderStageConfig(status);
  const orders = sourceOrders.filter((order) => order.status === status).sort((a, b) => sortOrdersForStage(a, b, status));
  return `
    <section class="panel order-stage-detail-card ${status === "Missing" ? "urgent-column" : ""}" id="${orderStageElementId(status)}">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">${status}</h3>
          <p class="panel-subtitle">${orders.length} ${orders.length === 1 ? "order" : "orders"} ${config.sortLabel || "sorted by earliest due date"}.</p>
        </div>
        <span class="status ${statusClass(status)}">${orders.length}</span>
      </div>
      <label class="stage-search">
        <span class="visually-hidden">Search ${status} orders</span>
        <input type="search" data-stage-search="${escapeAttribute(status)}" placeholder="Search customers" autocomplete="off" />
      </label>
      <div class="list" data-stage-list="${escapeAttribute(status)}">
        ${orders.map((order) => orderCard(order, true, { compactCollapsed: true, popupOnOpen: true })).join("") || emptyState("No orders")}
      </div>
    </section>
  `;
}

function orderStageElementId(status) {
  return `order-stage-${String(status || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function ordersForPeriod(period = "all") {
  return state.orders.filter((order) => orderInPeriod(order, period));
}

function orderInPeriod(order, period = "all") {
  if (period === "all") return true;
  const due = order.due || "";
  if (!due) return false;
  if (period === "week") {
    const dates = weekDates(DEMO_TODAY);
    return due >= dates[0] && due <= dates[6];
  }
  if (period === "month") return due.slice(0, 7) === DEMO_TODAY.slice(0, 7);
  if (period === "year") return due.slice(0, 4) === DEMO_TODAY.slice(0, 4);
  return true;
}

function orderPeriodTabLabel(period) {
  return {
    week: "Week",
    month: "Month",
    year: "Year",
    all: "All",
  }[period] || "All";
}

function orderPeriodLabel(period) {
  if (period === "week") {
    const dates = weekDates(DEMO_TODAY);
    return `${formatDate(dates[0])} to ${formatDate(dates[6])}`;
  }
  if (period === "month") return monthLabel(DEMO_TODAY.slice(0, 7));
  if (period === "year") return DEMO_TODAY.slice(0, 4);
  return "all due dates";
}

function renderOrderStageModal() {
  const status = state.modal.status || "Orders";
  const config = orderStageConfig(status);
  const orders = state.orders.filter((order) => order.status === status).sort((a, b) => sortOrdersForStage(a, b, status));
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card dashboard-metric-modal" role="dialog" aria-modal="true" aria-labelledby="order-stage-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Order stage</p>
            <h3 id="order-stage-title" class="modal-title">${status}</h3>
            <p class="panel-subtitle">${orders.length} ${orders.length === 1 ? "order" : "orders"} ${config.sortLabel || "sorted by earliest due date"}. ${config.description || ""}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close popup">×</button>
        </div>
        <label class="stage-search">
          <span class="visually-hidden">Search ${status} orders</span>
          <input type="search" data-stage-search="${escapeAttribute(status)}" placeholder="Search customers" autocomplete="off" />
        </label>
        <div class="list" data-stage-list="${escapeAttribute(status)}">
          ${orders.map((order) => orderCard(order, true, { compactCollapsed: true, popupOnOpen: true })).join("") || emptyState("No orders in this stage.")}
        </div>
        <div class="modal-actions">
          <button class="ghost-button" data-action="close-modal">Close</button>
        </div>
      </section>
    </div>
  `;
}

function orderStageConfig(status) {
  return {
    Missing: {
      description: `Missing orders inside the current ${appSetting("stockAllocationDay", "Tuesday")} ${appSetting("stockAllocationMonths", STOCK_ALLOCATION_MONTHS)}-month window`,
      overdueDate: "due",
      overdueLabel: "Order overdue",
      sortBy: "due",
      sortLabel: "sorted by earliest due date",
    },
    Unprocessed: {
      description: `Orders outside the current ${appSetting("stockAllocationDay", "Tuesday")} ${appSetting("stockAllocationMonths", STOCK_ALLOCATION_MONTHS)}-month window`,
      overdueDate: "due",
      overdueLabel: "Order overdue",
      sortBy: "due",
      sortLabel: "sorted by earliest due date",
    },
    Ready: {
      description: "Ready for fitting and in store",
      overdueDate: "fittingDate",
      overdueLabel: "Fitting overdue",
      sortBy: "fittingDate",
      sortLabel: "organised by fitting date",
    },
    Fitting: {
      description: "Fittings completed in store",
      overdueDate: "fittingDate",
      overdueLabel: "Fitting overdue",
      sortBy: "fittingDate",
      sortLabel: "organised by fitting date",
    },
  }[status] || {
    description: "",
    overdueDate: "due",
    overdueLabel: "Order overdue",
    sortBy: "due",
    sortLabel: "sorted by earliest due date",
  };
}

function orderOverdueMeta(order) {
  const config = orderStageConfig(order.status);
  const dateValue = order[config.overdueDate] || "";
  if (!dateValue || dateValue >= DEMO_TODAY) return null;
  return {
    label: config.overdueLabel || "Overdue",
    date: dateValue,
  };
}

function orderSearchText(order, customer = getCustomer(order.customerId)) {
  return [
    customer.name,
    customer.phone,
    customer.email,
    order.number,
    order.item,
    order.status,
    order.due,
    order.fittingDate,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function sortOrdersForStage(a, b, status) {
  const config = orderStageConfig(status);
  const primary = config.sortBy || "due";
  const aDate = a[primary] || a.due || "9999-12-31";
  const bDate = b[primary] || b.due || "9999-12-31";
  const aTime = Date.parse(`${aDate}T12:00:00`);
  const bTime = Date.parse(`${bDate}T12:00:00`);
  if (aTime !== bTime) return aTime - bTime;
  return sortByClosestDueDate(a, b);
}

function renderWeeklyAlterationTotals() {
  const weeks = weeklyAlterationTotals();
  return `
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Weekly alteration jobs</h3>
          <p class="panel-subtitle">Counts checked fitting items only for orders currently at tailor.</p>
        </div>
      </div>
      ${
        weeks.length
          ? `<div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Alteration job</th>
                    <th>Jobs</th>
                  </tr>
                </thead>
                <tbody>
                  ${weeks
                    .map((week) =>
                      week.jobs
                        .map(
                          (job, index) => `
                            <tr>
                              <td>${index === 0 ? `<strong>${week.label}</strong><br><span class="meta">${week.total} total job${week.total === 1 ? "" : "s"}</span>` : ""}</td>
                              <td>${job.label}</td>
                              <td><strong>${job.count}</strong></td>
                            </tr>
                          `,
                        )
                        .join(""),
                    )
                    .join("")}
                </tbody>
              </table>
            </div>`
          : emptyState("No at-tailor orders have fitting checklist jobs recorded yet.")
      }
    </section>
  `;
}

function weeklyAlterationTotals() {
  const jobLabels = fittingChecklistSections()
    .flatMap((section) => section.items.map((item) => [item.id, `${section.label} - ${item.label}`]));
  const labelMap = Object.fromEntries(jobLabels);
  const weeks = new Map();

  (state.orders || []).forEach((order) => {
    if (order.status !== "At Tailor") return;
    const record = order.fittingRecord;
    if (!record) return;
    const checkedJobs = jobLabels.filter(([id]) => record[id]);
    if (!checkedJobs.length) return;
    const jobDate = order.fittingDate || record.updated || DEMO_TODAY;
    const weekStart = weekDates(jobDate)[0];
    if (!weeks.has(weekStart)) {
      weeks.set(weekStart, {
        weekStart,
        label: `${formatDate(weekStart)} - ${formatDate(addDays(weekStart, 6))}`,
        counts: {},
      });
    }
    const week = weeks.get(weekStart);
    checkedJobs.forEach(([id]) => {
      week.counts[id] = (week.counts[id] || 0) + 1;
    });
  });

  return [...weeks.values()]
    .sort((a, b) => b.weekStart.localeCompare(a.weekStart))
    .map((week) => {
      const jobs = Object.entries(week.counts)
        .map(([id, count]) => ({ id, label: labelMap[id] || titleCase(id), count }))
        .sort((a, b) => a.label.localeCompare(b.label));
      return {
        ...week,
        jobs,
        total: jobs.reduce((sum, job) => sum + job.count, 0),
      };
    });
}

function renderCommunications() {
  const events = allCommunicationEvents();
  const templates = state.communicationTemplates || [];
  return `
    <section class="metric-grid">
      ${statCard("Messages", events.length, "Email and text history")}
      ${statCard("Scheduled", events.filter((event) => event.status === "Scheduled").length, "Waiting to send")}
      ${statCard("Sent", events.filter((event) => event.status === "Sent").length, "Delivered or marked sent")}
      ${statCard("Templates", templates.length, "Reusable comms")}
    </section>
    <section class="content-grid communications-layout" style="margin-top: 16px;">
      <div class="panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Inbox and outbox</h3>
            <p class="panel-subtitle">Emails and texts to and from customers, sorted by newest first.</p>
          </div>
        </div>
        <div class="communication-history-list">
          ${events
            .map(
              (event) => `
                <article class="communication-history-item">
                  <div>
                    <p class="name">${event.customerName} • ${event.title}</p>
                    <p class="meta">${event.detail}</p>
                    <p class="meta">${event.direction || "Outbound"} • ${event.channel} • ${formatDate(event.date)}${event.staff ? ` • Staff: ${event.staff}` : ""}</p>
                  </div>
                  <strong class="delivery-state ${event.className}">${event.status}</strong>
                </article>
              `,
            )
            .join("") || emptyState("No communication history yet.")}
        </div>
      </div>
      <div class="stack">
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">Send custom comms</h3>
              <p class="panel-subtitle">Prototype send log. Real email/SMS provider can be connected later.</p>
            </div>
          </div>
          <form id="custom-comms-form" class="form-grid">
            <div class="field full">
              <label for="comms-customer">Customer</label>
              <select id="comms-customer" name="customerId" required>
                ${state.customers.map((customer) => `<option value="${customer.id}">${customer.name} - ${customer.phone}</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label for="comms-channel">Channel</label>
              <select id="comms-channel" name="channel">
                <option>Email + text</option>
                <option>Email</option>
                <option>Text</option>
              </select>
            </div>
            <div class="field">
              <label for="comms-direction">Direction</label>
              <select id="comms-direction" name="direction">
                <option>Outbound</option>
                <option>Inbound</option>
              </select>
            </div>
            <div class="field full">
              <label for="comms-message">Message</label>
              <textarea id="comms-message" name="message" required placeholder="Write a custom email/text note..."></textarea>
            </div>
            <div class="form-actions">
              <button class="button gold" type="submit">${icon("message")} Log communication</button>
            </div>
          </form>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h3 class="panel-title">Templates</h3>
              <p class="panel-subtitle">View common messages before sending custom comms.</p>
            </div>
          </div>
          <div class="list">
            ${templates
              .map(
                (template) => `
                  <details class="template-card">
                    <summary>
                      <span>
                        <strong>${template.name}</strong>
                        <small>${template.channel}</small>
                      </span>
                    </summary>
                    <form class="template-edit-form" data-template-form="${template.id}">
                      <div class="field">
                        <label for="${template.id}-name">Template name</label>
                        <input id="${template.id}-name" name="name" required value="${escapeAttribute(template.name)}" />
                      </div>
                      <div class="field">
                        <label for="${template.id}-channel">Channel</label>
                        <select id="${template.id}-channel" name="channel">
                          ${["Email + text", "Email", "Text"].map((channel) => `<option ${channel === template.channel ? "selected" : ""}>${channel}</option>`).join("")}
                        </select>
                      </div>
                      <div class="field full">
                        <label for="${template.id}-body">Message</label>
                        <textarea id="${template.id}-body" name="body" required>${escapeHtml(template.body)}</textarea>
                      </div>
                      <div class="form-actions">
                        <button class="ghost-button" type="submit">Save template</button>
                      </div>
                    </form>
                  </details>
                `,
              )
              .join("")}
          </div>
          <form id="template-add-form" class="form-grid template-add-form">
            <div class="field full">
              <label for="template-new-name">New template name</label>
              <input id="template-new-name" name="name" required placeholder="Collection reminder" />
            </div>
            <div class="field full">
              <label for="template-new-channel">Channel</label>
              <select id="template-new-channel" name="channel">
                <option>Email + text</option>
                <option>Email</option>
                <option>Text</option>
              </select>
            </div>
            <div class="field full">
              <label for="template-new-body">Message</label>
              <textarea id="template-new-body" name="body" required placeholder="Hi {name}, your order is ready for collection..."></textarea>
            </div>
            <div class="form-actions">
              <button class="button gold" type="submit">${icon("plus")} Add template</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  `;
}

function renderInventory() {
  const lowStock = state.inventory.filter((item) => item.qty <= item.alert);
  const groups = ["Suits", "Trousers", "Shirts", "Accessories"];
  return `
    <section class="metric-grid">
      ${statCard("Stock lines", state.inventory.length, "Hire and sale items")}
      ${statCard("Committed items", state.inventory.reduce((sum, item) => sum + item.committed, 0), "Attached to open orders")}
      ${statCard("Low stock", lowStock.length, lowStock.map((item) => item.item).join(", ") || "No alerts")}
      ${statCard("Available units", state.inventory.reduce((sum, item) => sum + Math.max(item.qty - item.committed, 0), 0), "After reservations")}
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Stock control</h3>
          <p class="panel-subtitle">Organised by suits, trousers, shirts, and accessories. Variations can include colour, size, and style.</p>
        </div>
        <button class="button gold" data-action="add-inventory">${icon("plus")} Add inventory</button>
      </div>
      <div class="stack">
        ${groups.map((group) => inventoryGroup(group)).join("")}
      </div>
    </section>
  `;
}

function inventoryGroup(group) {
  const items = state.inventory
    .filter((item) => inventoryGroupName(item) === group)
    .slice()
    .sort((a, b) => `${inventoryParentName(a)} ${inventoryVariationLabel(a)}`.localeCompare(`${inventoryParentName(b)} ${inventoryVariationLabel(b)}`));
  const parentGroups = items.reduce((groups, item) => {
    const parent = inventoryParentName(item);
    groups[parent] = groups[parent] || [];
    groups[parent].push(item);
    return groups;
  }, {});
  return `
    <section class="inventory-group">
      <div class="inventory-group-header">
        <div>
          <h4>${group}</h4>
          <p class="meta">${Object.keys(parentGroups).length} style${Object.keys(parentGroups).length === 1 ? "" : "s"} • ${items.length} stock variation${items.length === 1 ? "" : "s"}</p>
        </div>
      </div>
      ${
        items.length
          ? Object.entries(parentGroups)
              .map(
                ([parent, variations]) => `
                  <div class="inventory-parent">
                    <div class="inventory-parent-title">
                      <strong>${parent}</strong>
                      <span>${variations.length} variation${variations.length === 1 ? "" : "s"}</span>
                    </div>
                    <div class="table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>Variation</th>
                            <th>Colour</th>
                            <th>Material / detail</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Committed</th>
                            <th>Available</th>
                            <th>Low alert</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${variations.map((item) => inventoryRow(item)).join("")}
                        </tbody>
                      </table>
                    </div>
                    <div class="inventory-mobile-list">
                      ${variations.map((item) => inventoryMobileCard(item)).join("")}
                    </div>
                  </div>
                `,
              )
              .join("")
          : `<p class="empty-state">No ${group.toLowerCase()} added yet.</p>`
      }
    </section>
  `;
}

function inventoryMobileCard(item) {
  const available = inventoryAvailable(item);
  return `
    <details class="inventory-mobile-card">
      <summary>
        <span>
          <strong>${inventoryParentName(item)}</strong>
          <small>${inventoryVariationLabel(item)}${item.color ? ` • ${item.color}` : ""}</small>
        </span>
        <span class="inventory-available-count">
          <strong>${available}</strong>
          <small>available</small>
        </span>
      </summary>
      <div class="inventory-mobile-details">
        ${item.qty <= item.alert ? `<span class="status unpaid">Low stock</span>` : ""}
        <div class="inventory-mobile-meta">
          <span>Price <strong>${money(inventoryPrice(item))}</strong></span>
          <span>Committed <strong>${item.committed}</strong></span>
          <span>Qty <strong>${item.qty}</strong></span>
          <span>Low alert <strong>${item.alert}</strong></span>
        </div>
        <div class="stock-stepper mobile-stock-stepper" aria-label="Update stock for ${item.item}">
          <button class="icon-button" data-action="stock-minus" data-id="${item.id}" title="Decrease stock">${icon("minus")}</button>
          <input class="stock-qty-input" data-stock-qty="${item.id}" type="number" min="0" step="1" value="${item.qty}" aria-label="Stock quantity for ${item.item}" />
          <button class="icon-button" data-action="stock-plus" data-id="${item.id}" title="Increase stock">${icon("plus")}</button>
        </div>
        <div class="form-grid">
          <div class="field">
            <label for="${item.id}-mobile-price">Price</label>
            <input id="${item.id}-mobile-price" class="stock-price-input" data-stock-price="${item.id}" type="number" min="0" step="1" value="${inventoryPrice(item)}" />
          </div>
          <div class="field">
            <label for="${item.id}-mobile-alert">Low stock alert</label>
            <input id="${item.id}-mobile-alert" class="stock-qty-input" data-stock-alert="${item.id}" type="number" min="0" step="1" value="${item.alert}" />
          </div>
        </div>
      </div>
    </details>
  `;
}

function inventoryRow(item) {
  return `
    <tr>
      <td><strong>${inventoryVariationLabel(item)}</strong>${item.qty <= item.alert ? `<br><span class="status unpaid">Low stock</span>` : ""}</td>
      <td>${item.color}</td>
      <td>${item.material || item.style || "-"}</td>
      <td class="amount">
        <input class="stock-price-input" data-stock-price="${item.id}" type="number" min="0" step="1" value="${inventoryPrice(item)}" aria-label="Price for ${item.item}" />
      </td>
      <td class="amount">
        <div class="stock-stepper" aria-label="Update stock for ${item.item}">
          <button class="icon-button" data-action="stock-minus" data-id="${item.id}" title="Decrease stock">${icon("minus")}</button>
          <input class="stock-qty-input" data-stock-qty="${item.id}" type="number" min="0" step="1" value="${item.qty}" aria-label="Stock quantity for ${item.item}" />
          <button class="icon-button" data-action="stock-plus" data-id="${item.id}" title="Increase stock">${icon("plus")}</button>
        </div>
      </td>
      <td>${item.committed}</td>
      <td>${inventoryAvailable(item)}</td>
      <td>
        <input class="stock-qty-input" data-stock-alert="${item.id}" type="number" min="0" step="1" value="${item.alert}" aria-label="Low stock alert for ${item.item}" title="Low stock alert" />
      </td>
    </tr>
  `;
}

function inventoryParentName(item) {
  return item.parentItem || item.item || "Untitled item";
}

function inventoryVariationLabel(item) {
  if (item.variationType && item.variationValue) return `${item.variationType}: ${item.variationValue}`;
  return item.size && item.size !== "-" ? `Size: ${item.size}` : item.color ? `Colour: ${item.color}` : "Variation";
}

function inventoryOrderLabel(item) {
  const variation = [
    item.variationValue && item.variationType ? `${item.variationType} ${item.variationValue}` : "",
    item.color,
    item.size && item.size !== item.variationValue ? item.size : "",
    item.material,
  ]
    .filter(Boolean)
    .join(" • ");
  return `${item.parentItem || item.item}${variation ? ` - ${variation}` : ""}`;
}

function inventoryAvailable(item) {
  if (!item) return 0;
  const manualCommitted = manualCommittedForItem(item);
  const reservedOrders = stockHoldingOrdersForItem(item.id).filter((order) => order.stockStatus === "Reserved").length;
  return Math.max(Number(item.qty || 0) - manualCommitted - reservedOrders, 0);
}

function inventoryPrice(item) {
  return Math.max(0, Number(item?.price || 0));
}

function selectedInventoryItem(value) {
  const items = Array.isArray(state.inventory) ? state.inventory : [];
  return items.find((item) => item.id === value) || items.find((item) => inventoryOrderLabel(item) === value) || null;
}

function stockOrdersForItem(itemId) {
  return stockHoldingOrdersForItem(itemId).filter((order) => ["Missing", "Unprocessed", "Ready"].includes(order.status));
}

function stockHoldingOrdersForItem(itemId) {
  return (state.orders || []).filter(
    (order) =>
      orderUsesInventoryItem(order, itemId) &&
      !["Collected", "Cancelled"].includes(order.status) &&
      order.stockStatus !== "Custom order",
  );
}

function orderUsesInventoryItem(order, itemId) {
  return order.inventoryItemId === itemId || (order.inventoryItems || []).some((item) => item.id === itemId);
}

function manualCommittedForItem(item) {
  const stockOrders = stockHoldingOrdersForItem(item.id);
  return Math.max(Number(item?.committed || 0) - stockOrders.length, 0);
}

function allocationWindowEnd() {
  return addMonths(stockAllocationDate(), Number(appSetting("stockAllocationMonths", STOCK_ALLOCATION_MONTHS)));
}

function stockAllocationDate() {
  return mostRecentWeekday(todayKey(), appSetting("stockAllocationDay", "Tuesday"));
}

function isInStockAllocationWindow(order) {
  if (!order?.due) return false;
  return order.due <= allocationWindowEnd();
}

function mostRecentTuesday(dateString) {
  return mostRecentWeekday(dateString, "Tuesday");
}

function mostRecentWeekday(dateString, weekday) {
  const weekdayIndex = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  }[weekday] ?? 2;
  const date = new Date(`${dateString}T12:00:00`);
  const day = date.getDay();
  const daysSinceWeekday = (day - weekdayIndex + 7) % 7;
  date.setDate(date.getDate() - daysSinceWeekday);
  return date.toISOString().slice(0, 10);
}

function allocateAllStock(options = {}) {
  return (state.inventory || []).reduce(
    (summary, item) => {
      const result = allocateStockForItem(item, options);
      summary.allocated += result.allocated;
      summary.newlyAllocated += result.newlyAllocated;
      summary.waiting += result.waiting;
      summary.changed = summary.changed || result.changed;
      return summary;
    },
    { allocated: 0, newlyAllocated: 0, waiting: 0, changed: false },
  );
}

function allocateStockForItem(item, options = {}) {
  if (!item) return { allocated: 0, newlyAllocated: 0, waiting: 0, changed: false };
  const addHistory = options.addHistory !== false;
  const orders = stockOrdersForItem(item.id).sort(sortByClosestDueDate);
  const holdingOrders = stockHoldingOrdersForItem(item.id);
  const manualCommitted = manualCommittedForItem(item);
  const allocationSlots = Math.max(Number(item.qty || 0) - manualCommitted, 0);
  const eligibleOrders = orders.filter(isInStockAllocationWindow);
  const allocatedIds = new Set(eligibleOrders.slice(0, allocationSlots).map((order) => order.id));
  let allocated = 0;
  let newlyAllocated = 0;
  let waiting = 0;
  let changed = false;

  item.committed = manualCommitted + holdingOrders.length;

  orders.forEach((order) => {
    const previousStatus = order.status;
    const previousStockStatus = order.stockStatus;
    if (!isInStockAllocationWindow(order)) {
      order.stockStatus = "Future allocation";
      updateOrderInventoryLineStatus(order, item.id, "Future allocation");
      if (["Missing", "Ready"].includes(order.status)) order.status = "Unprocessed";
      if (previousStatus !== order.status || previousStockStatus !== order.stockStatus) changed = true;
      return;
    }

    if (allocatedIds.has(order.id)) {
      allocated += 1;
      order.stockStatus = "Reserved";
      updateOrderInventoryLineStatus(order, item.id, "Reserved");
      order.stockAllocatedDate = stockAllocationDate();
      if (["Missing", "Unprocessed"].includes(order.status)) {
        order.status = "Ready";
        order.readyLocation = order.readyLocation || "in-store";
      }
      if (previousStatus !== order.status || previousStockStatus !== order.stockStatus) {
        changed = true;
        if (previousStockStatus !== "Reserved") newlyAllocated += 1;
        if (addHistory) {
          order.history = order.history || [];
          order.history.unshift(`Stock allocated ${formatDate(stockAllocationDate())}: ${inventoryOrderLabel(item)}`);
        }
      }
      return;
    }

    waiting += 1;
    order.stockStatus = "Missing";
    updateOrderInventoryLineStatus(order, item.id, "Missing");
    if (["Unprocessed", "Ready"].includes(order.status)) order.status = "Missing";
    if (previousStatus !== order.status || previousStockStatus !== order.stockStatus) {
      changed = true;
      if (addHistory) {
        order.history = order.history || [];
        order.history.unshift(`Awaiting stock allocation: ${inventoryOrderLabel(item)}`);
      }
    }
  });

  return { allocated, newlyAllocated, waiting, changed };
}

function updateOrderInventoryLineStatus(order, itemId, status) {
  if (!Array.isArray(order.inventoryItems)) return;
  const line = order.inventoryItems.find((item) => item.id === itemId);
  if (line) line.stockStatus = status;
  const statuses = order.inventoryItems.map((item) => item.stockStatus).filter(Boolean);
  if (!statuses.length) return;
  if (statuses.includes("Missing")) order.stockStatus = "Missing";
  else if (statuses.every((itemStatus) => itemStatus === "Reserved")) order.stockStatus = "Reserved";
  else if (statuses.every((itemStatus) => itemStatus === "Future allocation")) order.stockStatus = "Future allocation";
  else order.stockStatus = "Part allocated";
}

function inventoryGroupName(item) {
  const category = String(item.category || "").toLowerCase();
  if (category.includes("trouser")) return "Trousers";
  if (category.includes("shirt")) return "Shirts";
  if (category.includes("accessor") || category.includes("shoe") || category.includes("tie")) return "Accessories";
  return "Suits";
}

function renderRota() {
  const clock = dailyStaffClock();
  const todaysAppointments = state.appointments.filter((appointment) => appointment.date === DEMO_TODAY);
  const assignedToSenior = todaysAppointments.filter((appointment) => appointment.staff === clock.senior.name);
  const staffMetrics = staffPerformanceMetrics(clock, todaysAppointments);
  const totalSales = staffMetrics.reduce((sum, staff) => sum + staff.salesCount, 0);
  const topSeller = staffMetrics.reduce((best, staff) => (staff.salesCount > best.salesCount ? staff : best), staffMetrics[0]);
  return `
    <section class="metric-grid">
      ${statCard("Clocked in", staffMetrics.filter((staff) => staff.clockTime).length, "Staff active today")}
      ${statCard("Bookings today", todaysAppointments.length, `${assignedToSenior.length} allocated to senior staff`)}
      ${statCard("Sales made", totalSales, "Orders created by staff")}
      ${statCard("Top seller", topSeller?.salesCount ? topSeller.name : "-", topSeller?.salesCount ? `${topSeller.salesCount} sale${topSeller.salesCount === 1 ? "" : "s"}` : "No sales yet")}
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Staff sales and activity</h3>
          <p class="panel-subtitle">Track who is scheduled, how many sales they made, active orders, and payments they collected.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Staff member</th>
              <th>Today schedule</th>
              <th>Sales made</th>
              <th>Order value</th>
              <th>Paid collected</th>
              <th>Active orders</th>
              <th>Last sale</th>
            </tr>
          </thead>
          <tbody>
            ${staffMetrics.map(staffPerformanceRow).join("")}
          </tbody>
        </table>
      </div>
    </section>
    <section class="metric-grid compact-metrics" style="margin-top: 16px;">
      ${statCard("Senior staff", clock.senior.name || "-", clock.senior.time ? `Clocked in ${clock.senior.time}` : "Not clocked in")}
      ${statCard("Staff", clock.staff.name || "-", clock.staff.time ? `Clocked in ${clock.staff.time}` : "Not clocked in")}
      ${statCard("Rota date", formatDate(clock.date), "Prototype day")}
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Daily staff schedule</h3>
          <p class="panel-subtitle">Clock-in record and booking allocation for the day.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Role</th>
              <th>Staff member</th>
              <th>Clock-in time</th>
              <th>Booking allocation</th>
            </tr>
          </thead>
          <tbody>
            ${staffRotaRows(clock, todaysAppointments)}
          </tbody>
        </table>
      </div>
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Today's allocated bookings</h3>
          <p class="panel-subtitle">Bookings use the senior staff member unless a booking is manually changed later.</p>
        </div>
      </div>
      <div class="list">
        ${todaysAppointments.map((appointment) => appointmentCard(appointment, false)).join("") || emptyState("No bookings for this day.")}
      </div>
    </section>
  `;
}

function staffPerformanceMetrics(clock, todaysAppointments) {
  const names = [
    ...staffMembers(),
    clock.senior.name,
    clock.staff.name,
    ...(state.orders || []).map((order) => orderStaffName(order)).filter(Boolean),
    ...(state.invoices || []).map((invoice) => invoice.createdBy).filter(Boolean),
  ].filter(Boolean);
  return [...new Set(names)]
    .sort((a, b) => a.localeCompare(b))
    .map((name) => {
      const sales = (state.orders || []).filter((order) => orderStaffName(order) === name);
      const invoices = (state.invoices || []).filter((invoice) => {
        const order = state.orders.find((item) => item.id === invoice.orderId);
        return (invoice.createdBy || orderStaffName(order)) === name;
      });
      const payments = invoices.flatMap((invoice) => {
        const order = state.orders.find((item) => item.id === invoice.orderId);
        return invoicePayments(invoice).filter((payment) => (payment.createdBy || invoice.createdBy || orderStaffName(order)) === name);
      });
      const schedule = todaysAppointments.filter((appointment) => appointment.staff === name);
      const clockTime = clock.senior.name === name ? clock.senior.time : clock.staff.name === name ? clock.staff.time : "";
      const role = clock.senior.name === name ? "Senior staff" : clock.staff.name === name ? "Staff" : "Team";
      const activeOrders = sales.filter((order) => !["Collected", "Cancelled"].includes(order.status)).length;
      const lastSale = sales
        .map((order) => order.createdDate || order.updated || "")
        .filter(Boolean)
        .sort()
        .pop();
      return {
        name,
        role,
        clockTime,
        scheduled: schedule.length,
        salesCount: sales.length,
        orderValue: sales.reduce((sum, order) => sum + Number(order.total || 0), 0),
        paidCollected: payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0),
        activeOrders,
        lastSale,
      };
    });
}

function orderStaffName(order) {
  if (!order) return "Unassigned";
  if (order.createdBy || order.saleBy) return order.createdBy || order.saleBy;
  const appointment = (state.appointments || []).find(
    (appt) => appt.orderId === order.id || appt.customerId === order.customerId,
  );
  return appointment?.staff || "Unassigned";
}

function orderStockMeta(order) {
  if (Array.isArray(order?.inventoryItems) && order.inventoryItems.length > 1) {
    return order.inventoryItems
      .map((line) => `${line.label} (${line.stockStatus || "Pending"})`)
      .join("; ");
  }
  if (!order?.inventoryItemId) return order?.stockStatus === "Custom order" ? "Custom order" : "";
  const item = state.inventory.find((stock) => stock.id === order.inventoryItemId);
  if (!item) return order.stockStatus || "";
  const available = inventoryAvailable(item);
  if (order.stockStatus === "Future allocation") return `${inventoryOrderLabel(item)} committed • outside ${appSetting("stockAllocationDay", "Tuesday")} ${appSetting("stockAllocationMonths", STOCK_ALLOCATION_MONTHS)}-month allocation window`;
  if (order.status === "Missing" || order.stockStatus === "Missing") return `${inventoryOrderLabel(item)} missing`;
  return `${inventoryOrderLabel(item)} reserved • ${available} available now`;
}

function staffPerformanceRow(staff) {
  return `
    <tr>
      <td><strong>${staff.name}</strong><br><span class="meta">${staff.clockTime ? `${staff.role} • Clocked in ${staff.clockTime}` : staff.role}</span></td>
      <td>${staff.scheduled ? `${staff.scheduled} booking${staff.scheduled === 1 ? "" : "s"}` : "-"}</td>
      <td><strong>${staff.salesCount}</strong></td>
      <td class="amount">${money(staff.orderValue)}</td>
      <td class="amount">${money(staff.paidCollected)}</td>
      <td>${staff.activeOrders}</td>
      <td>${staff.lastSale ? formatDate(staff.lastSale) : "-"}</td>
    </tr>
  `;
}

function staffRotaRows(clock, todaysAppointments) {
  const rows = [
    { role: "Senior staff", record: clock.senior },
    { role: "Staff", record: clock.staff },
  ];
  return rows
    .map((row) => {
      const assigned = row.record.name
        ? todaysAppointments.filter((appointment) => appointment.staff === row.record.name)
        : [];
      return `
        <tr>
          <td>${formatDate(clock.date)}</td>
          <td><strong>${row.role}</strong></td>
          <td>${row.record.name || "-"}</td>
          <td>${row.record.time || "-"}</td>
          <td>${assigned.length ? `${assigned.length} booking${assigned.length === 1 ? "" : "s"}` : "-"}</td>
        </tr>
      `;
    })
    .join("");
}

function renderSettings() {
  const settings = state.settings || seedState.settings;
  const users = state.staffUsers || [];
  const seniorCount = users.filter((user) => user.role === "Senior staff").length;
  const financeUsers = users.filter((user) => user.financeAccess).length;
  return `
    <section class="metric-grid settings-metrics">
      ${statCard("Users", users.length, `${seniorCount} senior staff`)}
      ${statCard("Finance access", financeUsers, settings.financeAccess)}
      ${statCard("Booking window", `${settings.bookingWindowDays} days`, "Customer consultations")}
      ${statCard("Stock allocation", settings.stockAllocationDay, `${settings.stockAllocationMonths}-month rolling window`)}
    </section>
    <section class="settings-grid" style="margin-top: 16px;">
      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Users and roles</h3>
            <p class="panel-subtitle">Add staff and decide who can see owner-level finance reports.</p>
          </div>
        </div>
        <div class="list">
          ${users
            .map(
              (user) => `
                <article class="settings-user-row">
                  <div>
                    <p class="name">${user.name}</p>
                    <p class="meta">${user.role} • ${user.status || "Active"}</p>
                  </div>
                  <div class="row compact-actions">
                    ${user.financeAccess ? `<span class="status paid">Finance</span>` : `<span class="status pending">No finance</span>`}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
        <form id="settings-user-form" class="form-grid settings-inline-form">
          <div class="field">
            <label for="settings-user-name">New staff name</label>
            <input id="settings-user-name" name="name" required placeholder="Staff name" />
          </div>
          <div class="field">
            <label for="settings-user-role">Role</label>
            <select id="settings-user-role" name="role">
              <option>Staff</option>
              <option>Senior staff</option>
              <option>Owner</option>
            </select>
          </div>
          <label class="check-field settings-check" for="settings-user-finance">
            <input id="settings-user-finance" name="financeAccess" type="checkbox" />
            <span>Can access finance reports</span>
          </label>
          <div class="form-actions">
            <button class="button gold" type="submit">${icon("plus")} Add user</button>
          </div>
        </form>
      </section>

      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Theme and app feel</h3>
            <p class="panel-subtitle">Keep the prototype consistent on iPhone, iPad, and desktop.</p>
          </div>
        </div>
        <form id="settings-theme-form" class="settings-option-list">
          ${["Apple clean", "Material neutral", "High contrast"].map(
            (theme) => `
              <label class="settings-option ${settings.theme === theme ? "selected" : ""}">
                <input type="radio" name="theme" value="${theme}" ${settings.theme === theme ? "checked" : ""} />
                <span>
                  <strong>${theme}</strong>
                  <small>${settingsThemeDescription(theme)}</small>
                </span>
              </label>
            `,
          ).join("")}
          <div class="form-actions">
            <button class="ghost-button" type="submit">${icon("check")} Save theme</button>
          </div>
        </form>
      </section>

      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Booking rules</h3>
            <p class="panel-subtitle">Controls for the public booking page and staff calendar.</p>
          </div>
        </div>
        <form id="settings-rules-form" class="form-grid">
          <div class="field">
            <label for="settings-booking-window">Consultation booking window</label>
            <input id="settings-booking-window" name="bookingWindowDays" type="number" min="1" step="1" value="${settings.bookingWindowDays}" />
          </div>
          <div class="field">
            <label for="settings-reminder">Default reminder</label>
            <select id="settings-reminder" name="defaultReminder">
              ${["Day before", "Two days before", "Same morning"].map((value) => `<option ${settings.defaultReminder === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </div>
          <div class="settings-summary-card full">
            <strong>Current logic</strong>
            <span>Customers can only book free consultation slots inside this window. Fittings and collections require an order number and start from the day after the order due date.</span>
          </div>
          <div class="form-actions">
            <button class="ghost-button" type="submit">${icon("check")} Save booking rules</button>
          </div>
        </form>
      </section>

      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Orders and inventory</h3>
            <p class="panel-subtitle">Stock allocation and payment rules used by the order tracker.</p>
          </div>
        </div>
        <form id="settings-stock-form" class="form-grid">
          <div class="field">
            <label for="settings-allocation-day">Allocation check day</label>
            <select id="settings-allocation-day" name="stockAllocationDay">
              ${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => `<option ${settings.stockAllocationDay === day ? "selected" : ""}>${day}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="settings-allocation-months">Rolling allocation window</label>
            <input id="settings-allocation-months" name="stockAllocationMonths" type="number" min="1" max="12" step="1" value="${settings.stockAllocationMonths}" />
          </div>
          <div class="field">
            <label for="settings-payment-target">Fitting payment target</label>
            <input id="settings-payment-target" name="fittingPaymentTarget" type="number" min="0" max="100" step="5" value="${settings.fittingPaymentTarget}" />
          </div>
          <div class="settings-summary-card full">
            <strong>Current workflow</strong>
            <span>Orders inside the rolling window are allocated by due-date priority. Missing stock stays urgent, ready orders need a staff-set location, and fitting payment target is checked before fitting.</span>
          </div>
          <div class="form-actions">
            <button class="ghost-button" type="submit">${icon("check")} Save stock rules</button>
          </div>
        </form>
      </section>

      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Finance and reports</h3>
            <p class="panel-subtitle">Keep reports locked while staff can still take payments from order files.</p>
          </div>
        </div>
        <form id="settings-finance-form" class="form-grid">
          <div class="field">
            <label for="settings-finance-access">Report access</label>
            <select id="settings-finance-access" name="financeAccess">
              ${["Owner only", "Owner and senior staff", "All staff"].map((value) => `<option ${settings.financeAccess === value ? "selected" : ""}>${value}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="settings-invoice-password">Prototype invoice password</label>
            <input id="settings-invoice-password" name="invoicePassword" value="${escapeAttribute(settings.invoicePassword || FINANCE_PASSWORD)}" />
          </div>
          <div class="settings-summary-card full">
            <strong>Operational balance visibility</strong>
            <span>Order-level balances remain visible to staff. Main invoice reports stay locked behind finance access.</span>
          </div>
          <div class="form-actions">
            <button class="ghost-button" type="submit">${icon("check")} Save finance settings</button>
          </div>
        </form>
      </section>

      <section class="panel settings-panel">
        <div class="panel-header">
          <div>
            <h3 class="panel-title">Communication defaults</h3>
            <p class="panel-subtitle">Useful admin checks for confirmations, reminders, and follow-ups.</p>
          </div>
        </div>
        <div class="settings-summary-list">
          <div><strong>Booking confirmation</strong><span>Email + text after customer or staff books.</span></div>
          <div><strong>Appointment reminder</strong><span>${settings.defaultReminder} for booked appointments.</span></div>
          <div><strong>No-sale follow-up</strong><span>Scheduled after attended consultation with no order.</span></div>
          <div><strong>Deposit reminder</strong><span>Sent when deposit is below the ${settings.fittingPaymentTarget}% fitting target.</span></div>
        </div>
        <div class="form-actions">
          <button class="ghost-button" type="button" data-view="communications">${icon("message")} Manage templates</button>
        </div>
      </section>
    </section>
  `;
}

function settingsThemeDescription(theme) {
  if (theme === "Apple clean") return "Soft cards, simple controls, and iPhone-friendly spacing.";
  if (theme === "Material neutral") return "Calm Material Design-style cards, labels, and buttons.";
  return "Sharper contrast for busy shop-floor use.";
}

function renderInvoices() {
  if (!state.financeUnlocked) return renderFinanceAccessGate();
  const reportDate = "2026-05-01";
  const reportYear = Number(state.invoiceYear || new Date(`${reportDate}T12:00:00`).getFullYear());
  const reportMonthKey = monthKey(reportDate);
  const depositReminders = state.orders
    .map((order) => ({ order, reminder: depositReminderInfo(order) }))
    .filter((item) => item.reminder)
    .sort((a, b) => a.reminder.date.localeCompare(b.reminder.date));
  const annualInvoices = state.invoices.filter((invoice) => new Date(`${invoice.dueDate}T12:00:00`).getFullYear() === reportYear);
  const monthlyInvoices = state.invoices.filter((invoice) => monthKey(invoice.dueDate) === reportMonthKey);
  const annualTotals = invoiceTotals(annualInvoices);
  const monthlyTotals = invoiceTotals(monthlyInvoices);
  const monthlyBreakdown = invoiceMonthlyBreakdown(reportYear);
  const totals = state.invoices.reduce(
    (acc, invoice) => {
      acc.total += invoice.total;
      acc.paid += invoice.paid;
      return acc;
    },
    { total: 0, paid: 0 },
  );
  const due = totals.total - totals.paid;
  return `
    <section class="metric-grid">
      ${statCard(`${reportYear} invoices`, money(annualTotals.total), "Annual invoice amount")}
      ${statCard(`${reportYear} paid`, money(annualTotals.paid), "Annual paid total")}
      ${statCard(`${monthLabel(reportMonthKey)} invoices`, money(monthlyTotals.total), "Monthly invoice amount")}
      ${statCard(`${monthLabel(reportMonthKey)} paid`, money(monthlyTotals.paid), "Monthly paid total")}
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Monthly invoice totals</h3>
          <p class="panel-subtitle">Invoice amount, paid total, and outstanding balance by month for ${reportYear}.</p>
        </div>
        <div class="row compact-actions">
          <div class="field compact-field">
            <label for="invoice-year">Year</label>
            <select id="invoice-year" data-invoice-year>
              ${invoiceYears()
                .map((year) => `<option value="${year}" ${year === reportYear ? "selected" : ""}>${year}</option>`)
                .join("")}
            </select>
          </div>
          <button class="ghost-button" data-action="lock-finance">${icon("invoice")} Lock</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Invoices</th>
              <th>Invoice total</th>
              <th>Paid total</th>
              <th>Outstanding</th>
            </tr>
          </thead>
          <tbody>
            ${monthlyBreakdown
              .map(
                (month) => `
                  <tr>
                    <td><strong>${month.label}</strong></td>
                    <td>${month.count}</td>
                    <td class="amount"><button class="text-link" data-action="open-month-invoices" data-id="${month.key}">${money(month.total)}</button></td>
                    <td class="amount"><button class="text-link" data-action="open-month-payments" data-id="${month.key}">${money(month.paid)}</button></td>
                    <td class="amount"><button class="text-link" data-action="open-month-outstanding" data-id="${month.key}">${money(month.total - month.paid)}</button></td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">50% deposit reminders</h3>
          <p class="panel-subtitle">Automatic reminder goes out 7 days after the order if the customer has not reached 50%.</p>
        </div>
      </div>
      <div class="list">
        ${depositReminders
          .map(({ order, reminder }) => {
            const customer = getCustomer(order.customerId);
            return `
              <article class="item-card">
                <div class="row wrap">
                  <div>
                    <p class="name">${order.number} • ${customer.name}</p>
                    <p class="meta">${money(reminder.amountToHalf)} remaining to reach 50% deposit • ${customer.phone}</p>
                  </div>
                  <span class="delivery-state ${reminder.className}">${reminder.status}</span>
                </div>
                <p class="meta">${reminder.status} ${formatDate(reminder.date)}</p>
                <p class="page-copy">${reminder.message}</p>
              </article>
            `;
          })
          .join("") || emptyState("No 50% deposit reminders needed.")}
      </div>
    </section>
    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div>
          <h3 class="panel-title">Invoice register</h3>
          <p class="panel-subtitle">Prototype payment tracking only. Real card payments should use a provider later.</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Customer</th>
              <th>Order</th>
              <th>Staff</th>
              <th>Status</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${state.invoices.map(invoiceRow).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFinanceAccessGate() {
  return `
    <section class="panel finance-lock-panel">
      <div class="finance-lock">
        <div class="finance-lock-icon">${icon("invoice")}</div>
        <div>
          <h3 class="panel-title">Financial information is locked</h3>
          <p class="panel-subtitle">Only staff with finance access can view invoice totals, paid amounts, balances, and payment records.</p>
        </div>
        <form id="finance-access-form" class="finance-access-form">
          <div class="field">
            <label for="finance-password">Finance password</label>
            <input id="finance-password" name="password" type="password" autocomplete="current-password" placeholder="Enter password" />
          </div>
          <button class="button gold" type="submit">${icon("invoice")} Unlock invoices</button>
        </form>
      </div>
    </section>
  `;
}

function renderBookingPortal() {
  return `
    <div class="public-shell">
      <div class="public-layout">
        <section class="public-hero">
          <div>
            <button class="ghost-button" data-view="dashboard">${icon("back")} Staff app</button>
            <h1>Book your formalwear appointment.</h1>
            <p>Customers can request a consultation, fitting, alteration check, or collection slot. Staff keep the full CRM, orders, invoices, and stock tools private.</p>
          </div>
          <div class="public-bullets">
            <div><strong>Consultation</strong><br><span>Choose tux style, event needs, and timeline.</span></div>
            <div><strong>Measurements</strong><br><span>Save fitting details to your customer profile.</span></div>
            <div><strong>Reminders</strong><br><span>Confirmation now, reminder the day before.</span></div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h2 class="panel-title">Request a booking</h2>
              <p class="panel-subtitle">This is the customer-only screen for the first prototype.</p>
            </div>
          </div>
          ${bookingForm("public-booking-form", true)}
        </section>
      </div>
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
}

function bookingForm(id, publicMode = false) {
  const defaultDate = publicMode ? addDays(DEMO_TODAY, 2) : DEMO_TODAY;
  const defaultType = "Wedding consultation";
  return `
    <form id="${id}" class="form-grid">
      <div class="field">
        <label for="${id}-name">Customer name</label>
        <input id="${id}-name" name="name" required placeholder="Full name" />
      </div>
      <div class="field">
        <label for="${id}-phone">Phone</label>
        <input id="${id}-phone" name="phone" required placeholder="Mobile number" />
      </div>
      <div class="field">
        <label for="${id}-email">Email</label>
        <input id="${id}-email" name="email" type="email" required placeholder="Email address" />
      </div>
      <div class="field">
        <label for="${id}-type">Appointment type</label>
        <select id="${id}-type" name="type" data-booking-type>
          <option selected>Wedding consultation</option>
          <option>Measurements</option>
          <option>Alteration fitting</option>
          <option>Collection</option>
          <option>Hire return</option>
        </select>
      </div>
      ${
        publicMode
          ? `<div class="field full">
              <label for="${id}-order-number">Order number for fitting or collection</label>
              <input id="${id}-order-number" name="orderNumber" inputmode="numeric" pattern="[0-9]*" placeholder="Example: 1049" data-booking-order />
            </div>`
          : ""
      }
      <div class="field">
        <label for="${id}-date">Date</label>
        <input id="${id}-date" name="date" type="date" required value="${defaultDate}" data-booking-date min="${DEMO_TODAY}" max="${addDays(DEMO_TODAY, Number(appSetting("bookingWindowDays", 14)))}" />
      </div>
      <div class="field">
        <label for="${id}-time">Time</label>
        <select id="${id}-time" name="time" required data-booking-time>
          ${bookingTimeOptions(defaultDate, defaultType)}
        </select>
      </div>
      <div class="message-preview compact-note" data-booking-guidance>
        ${icon("calendar")}
        <span>${bookingGuidance(defaultType, defaultDate, publicMode)}</span>
      </div>
      <div class="field full">
        <label for="${id}-notes">Notes</label>
        <textarea id="${id}-notes" name="notes" placeholder="${publicMode ? "Event date, party size, style preference" : "Internal booking notes"}"></textarea>
      </div>
      <div class="message-preview compact-note">
        ${icon("check")}
        <span>Email and text confirmation will be sent after booking. A reminder is scheduled for the day before.</span>
      </div>
      <div class="form-actions">
        <button class="button gold" type="submit">${icon("calendar")} ${publicMode ? "Request appointment" : "Create booking"}</button>
      </div>
    </form>
  `;
}

function bookingSlotTimes() {
  return ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
}

function bookingTimeOptions(date, type, selectedTime = "11:00") {
  const availableTimes = bookingSlotTimes().filter((time) => isSlotAvailable(date, time));
  const selected = availableTimes.includes(selectedTime) ? selectedTime : availableTimes[0] || "";
  return availableTimes
    .map((time) => `<option value="${time}" ${time === selected ? "selected" : ""}>${time}</option>`)
    .join("") || `<option value="">No times available</option>`;
}

function bookingGuidance(type, date, publicMode = false, orderNumber = "") {
  if (!publicMode) return "Choose an open appointment slot. Existing bookings and blocked times cannot be reused.";
  if (requiresOrderNumber(type)) {
    const order = findOrderByNumber(orderNumber);
    if (!orderNumber) return "Enter the customer's order number without ORD before booking a fitting or collection.";
    if (!order) return "Order number not found. Check the order file number before booking.";
    return `This can be booked from ${formatDate(addDays(order.due, 1))} onwards.`;
  }
  return `Consultations can be booked from ${formatDate(DEMO_TODAY)} to ${formatDate(addDays(DEMO_TODAY, Number(appSetting("bookingWindowDays", 14))))}.`;
}

function requiresOrderNumber(type) {
  const value = String(type || "").toLowerCase();
  return value.includes("fitting") || value.includes("collection") || value.includes("return");
}

function findOrderByNumber(number) {
  const normalized = normaliseCustomerOrderNumber(number);
  if (!normalized) return null;
  return state.orders.find((order) => normaliseCustomerOrderNumber(order.number) === normalized) || null;
}

function normaliseCustomerOrderNumber(number) {
  return String(number || "").trim().toLowerCase().replace(/^ord[-\s]*/i, "").replace(/\D/g, "");
}

function isSlotAvailable(date, time) {
  if (!date || !time) return false;
  const appointmentTaken = (state.appointments || []).some(
    (appt) => appt.date === date && appt.time === time && !["Cancelled", "No show"].includes(appt.status),
  );
  const blocked = (state.blockedSlots || []).some((slot) => slot.date === date && slot.time === time);
  return !appointmentTaken && !blocked;
}

function validateBookingRequest({ type, date, time, publicMode = false, orderNumber = "" }) {
  if (!isSlotAvailable(date, time)) return "That date and time is already booked or blocked by the shop.";
  if (!publicMode) return "";
  if (requiresOrderNumber(type)) {
    const order = findOrderByNumber(orderNumber);
    if (!order) return "Enter a valid order number without ORD before booking a fitting or collection.";
    const earliest = addDays(order.due, 1);
    if (date < earliest) return `Fittings and collections can only be booked from ${formatDate(earliest)} onwards for ${order.number}.`;
    return "";
  }
  const latestConsultation = addDays(DEMO_TODAY, Number(appSetting("bookingWindowDays", 14)));
  if (date < DEMO_TODAY || date > latestConsultation) {
    return `Consultations can only be booked up to ${appSetting("bookingWindowDays", 14)} days in advance, from ${formatDate(DEMO_TODAY)} to ${formatDate(latestConsultation)}.`;
  }
  return "";
}

function updateBookingAvailability(form) {
  if (!form || !form.querySelector("[data-booking-date]")) return;
  const typeInput = form.querySelector("[data-booking-type]");
  const dateInput = form.querySelector("[data-booking-date]");
  const timeInput = form.querySelector("[data-booking-time]");
  const orderInput = form.querySelector("[data-booking-order]");
  const guidance = form.querySelector("[data-booking-guidance] span");
  const publicMode = form.id === "public-booking-form";
  const type = typeInput?.value || "Wedding consultation";
  if (orderInput) {
    orderInput.closest(".field").hidden = !requiresOrderNumber(type);
    orderInput.required = requiresOrderNumber(type);
  }
  const order = findOrderByNumber(orderInput?.value || "");
  if (publicMode && requiresOrderNumber(type) && order) {
    dateInput.min = addDays(order.due, 1);
    dateInput.removeAttribute("max");
    if (dateInput.value && dateInput.value < dateInput.min) dateInput.value = dateInput.min;
  } else if (publicMode && !requiresOrderNumber(type)) {
    dateInput.min = DEMO_TODAY;
    dateInput.max = addDays(DEMO_TODAY, Number(appSetting("bookingWindowDays", 14)));
    if (dateInput.value < dateInput.min || dateInput.value > dateInput.max) dateInput.value = addDays(DEMO_TODAY, 2);
  }
  if (timeInput) {
    const currentTime = timeInput.value;
    timeInput.innerHTML = bookingTimeOptions(dateInput.value, type, currentTime);
  }
  if (guidance) guidance.textContent = bookingGuidance(type, dateInput.value, publicMode, orderInput?.value || "");
}

function orderCard(order, editable = false, options = {}) {
  const customer = getCustomer(order.customerId);
  const balance = order.total - order.paid;
  const paidPercent = order.total > 0 ? Math.round((order.paid / order.total) * 100) : 0;
  const halfPaymentDue = Math.max(Math.ceil(order.total / 2) - order.paid, 0);
  const expandable = Boolean(options.expandable);
  const forceExpanded = Boolean(options.forceExpanded);
  const expandedOrderId = options.expandedOrderId || state.modal?.expandedOrderId || state.expandedOrderId;
  const expanded = forceExpanded || (expandable && expandedOrderId === order.id);
  const compactCollapsed = Boolean(options.compactCollapsed) && !expanded;
  const invoice = state.invoices.find((item) => item.orderId === order.id);
  const payments = invoicePayments(invoice);
  const measurements = orderMeasurements(order);
  const depositReminder = depositReminderInfo(order);
  const stockMeta = orderStockMeta(order);
  const overdue = orderOverdueMeta(order);
  const readyState = readyLocationState(order);
  const searchText = orderSearchText(order, customer);
  const inlineAction = options.action || "toggle-order";
  const cardAction = options.popupOnOpen ? "open-order-detail" : inlineAction;
  const cardLabel = options.popupOnOpen ? `Open ${order.number} details` : `Show ${order.number} details`;
  if (compactCollapsed) {
    return `
      <article class="item-card clickable-card compact-order-card ${overdue ? "order-overdue" : ""}" data-action="${cardAction}" data-id="${order.id}" data-order-search-text="${escapeAttribute(searchText)}" tabindex="0" role="button" aria-label="${cardLabel}">
        <div class="row wrap">
          <div>
            <p class="name">${customer.name}</p>
            <p class="meta">${order.number} • Due ${formatDate(order.due)}${stockMeta ? ` • ${stockMeta}` : ""}</p>
          </div>
          <div class="order-card-status">
            ${overdue ? `<span class="overdue-badge">${overdue.label}</span>` : ""}
            ${readyState ? `<span class="ready-location-badge ${readyState.className}">${readyState.label}</span>` : ""}
            <span class="status ${statusClass(order.status)}">${order.status}</span>
          </div>
        </div>
      </article>
    `;
  }
  const cardAttributes = forceExpanded
    ? ""
    : `data-action="${expandable ? inlineAction : "open-customer"}" data-id="${expandable ? order.id : customer.id}" tabindex="0" role="button" aria-label="${expandable ? `Show ${order.number} details` : `Open ${customer.name} customer profile`}"`;
  return `
    <article class="item-card ${forceExpanded ? "" : "clickable-card"} ${expanded ? "expanded-order" : ""} ${overdue ? "order-overdue" : ""}" data-order-search-text="${escapeAttribute(searchText)}" ${cardAttributes}>
      <div class="row wrap">
        <div>
          <p class="name">${order.number} • ${customer.name}</p>
          <p class="meta">${order.item}${expandable ? ` • Tap to ${expanded ? "collapse" : "expand"}` : ""}</p>
        </div>
        <div class="order-card-status">
          ${overdue ? `<span class="overdue-badge">${overdue.label}</span>` : ""}
          ${order.status === "Ready" && editable ? readyLocationSelect(order) : readyState ? `<span class="ready-location-badge ${readyState.className}">${readyState.label}</span>` : ""}
          <span class="status ${statusClass(order.status)}">${order.status}</span>
        </div>
      </div>
      <div class="row wrap">
        <p class="meta">Due ${formatDate(order.due)} • ${order.tailor}</p>
        <p class="amount">${money(balance)} due</p>
      </div>
      <div class="payment-track" aria-label="Payment progress">
        <span style="width: ${Math.min(paidPercent, 100)}%"></span>
      </div>
      <div class="row wrap">
        <p class="meta">${paidPercent}% paid • ${order.fittingDate ? `Fitting ${formatDate(order.fittingDate)} at ${order.fittingTime}` : "Fitting not booked"}</p>
        <span class="status ${halfPaymentDue > 0 ? "partial" : "paid"}">${halfPaymentDue > 0 ? `${money(halfPaymentDue)} to 50%` : "50% reached"}</span>
      </div>
      <p class="meta">Sale by ${order.createdBy || "Unassigned"}</p>
      ${stockMeta ? `<p class="meta"><strong>Stock:</strong> ${stockMeta}</p>` : ""}
      ${
        depositReminder
          ? `<p class="meta"><strong>50% reminder:</strong> ${depositReminder.status} ${formatDate(depositReminder.date)} • ${money(depositReminder.amountToHalf)} remaining</p>`
          : ""
      }
      ${
        expanded
          ? `<div class="order-detail-panel">
              <div class="three-column">
                <div class="measure">
                  <span>Quotation</span>
                  <strong>${money(order.total)}</strong>
                </div>
                <div class="measure">
                  <span>Paid</span>
                  <strong>${money(order.paid)}</strong>
                  <small>${paymentMethodSummary(payments)}</small>
                </div>
                <div class="measure">
                  <span>Invoice</span>
                  <strong>${invoice ? invoice.number : "Not created"}</strong>
                </div>
              </div>
              <div class="order-detail-grid">
                <div>
                  <h4 class="detail-title">Order details</h4>
                  <div class="detail-form">
                    <div class="field">
                      <label for="${order.id}-due">Due date</label>
                      <input id="${order.id}-due" type="date" value="${order.due || ""}" data-order-field="due" data-id="${order.id}" />
                    </div>
                    <div class="field">
                      <label for="${order.id}-tailor">Tailor status</label>
                      <select id="${order.id}-tailor" data-order-field="tailor" data-id="${order.id}">
                        ${["Not sent", "Aziz Tailoring", "Returned"]
                          .map((tailor) => `<option ${tailor === order.tailor ? "selected" : ""}>${tailor}</option>`)
                          .join("")}
                      </select>
                    </div>
                    <div class="field">
                      <label for="${order.id}-fitting-date">Fitting date</label>
                      <input id="${order.id}-fitting-date" type="date" value="${order.fittingDate || ""}" data-order-field="fittingDate" data-id="${order.id}" />
                    </div>
                    <div class="field">
                      <label for="${order.id}-fitting-time">Fitting time</label>
                      <input id="${order.id}-fitting-time" type="time" value="${order.fittingTime || ""}" data-order-field="fittingTime" data-id="${order.id}" />
                    </div>
                    <div class="field">
                      <label for="${order.id}-collection-date">Collection date</label>
                      <input id="${order.id}-collection-date" type="date" value="${order.collectionDate || ""}" data-order-field="collectionDate" data-id="${order.id}" />
                    </div>
                    <div class="field">
                      <label for="${order.id}-collection-time">Collection time</label>
                      <input id="${order.id}-collection-time" type="time" value="${order.collectionTime || ""}" data-order-field="collectionTime" data-id="${order.id}" />
                    </div>
                  </div>
                  <div class="detail-list">
                    <p><strong>History:</strong> ${(order.history || []).join(", ") || "No history yet"}</p>
                  </div>
                  <h4 class="detail-title">Payment history</h4>
                  <div class="payment-list">
                    ${payments
                      .map(
                        (payment) => `
                          <div class="payment-row">
                            <span>${money(payment.amount)}</span>
                            <span>${payment.method}</span>
                            <span>${formatDate(payment.date)} • ${payment.createdBy || invoice?.createdBy || "Unassigned"}</span>
                          </div>
                        `,
                      )
                      .join("") || `<p class="meta">No payments recorded yet.</p>`}
                  </div>
                </div>
                <div>
                  <h4 class="detail-title">Measurements for this order</h4>
                  <div class="measurement-grid compact">
                    ${Object.entries(measurements)
                      .map(
                        ([label, value]) => `
                          <div class="measure">
                            <span>${titleCase(label)}</span>
                            <strong>${value || "-"}</strong>
                          </div>
                        `,
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>`
          : ""
      }
      <p class="meta">${order.notes}</p>
      ${
        editable
          ? `<div class="row wrap">
              ${statusSelect(order)}
              ${halfPaymentDue > 0 ? `<button class="ghost-button" data-action="collect-half" data-id="${order.id}">${icon("coin")} Collect</button>` : ""}
              ${!order.collectionDate && halfPaymentDue === 0 ? `<button class="ghost-button" data-action="book-collection" data-id="${order.id}">${icon("calendar")} Book collection</button>` : ""}
              <button class="ghost-button" data-action="open-customer" data-id="${customer.id}">${icon("users")} View profile</button>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderOrderDetailModal() {
  const order = state.orders.find((item) => item.id === state.modal.orderId);
  if (!order) return "";
  const customer = getCustomer(order.customerId);
  return `
    <div class="modal-backdrop" role="presentation" data-action="close-modal">
      <section class="modal-card wide order-detail-modal" role="dialog" aria-modal="true" aria-labelledby="order-detail-title">
        <div class="modal-header">
          <div>
            <p class="page-kicker">Order file</p>
            <h3 id="order-detail-title" class="modal-title">${order.number} • ${customer.name}</h3>
            <p class="panel-subtitle">${order.item} • Due ${formatDate(order.due)}</p>
          </div>
          <button class="icon-button close-button" data-action="close-modal" title="Close" aria-label="Close order popup">×</button>
        </div>
        <div class="list">
          ${orderCard(order, true, { expandable: true, forceExpanded: true })}
          <section class="item-card fitting-record-panel">
            <div class="panel-header compact-panel-header">
              <div>
                <h3 class="panel-title">Fitting</h3>
                <p class="panel-subtitle">Record fitting notes and checklist items for this order.</p>
              </div>
            </div>
            ${renderFittingForm(customer, order)}
          </section>
        </div>
      </section>
    </div>
  `;
}

function appointmentCard(appt, editable = false, options = {}) {
  const comms = appointmentComms(appt);
  const confirmationDelivery = deliveryState(comms.confirmationStatus);
  const reminderDelivery = deliveryState(comms.reminderStatus);
  const typeTag = appointmentTypeTag(appt.type);
  const statusMeta = appointmentStatusMeta(appt.status);
  const isSalesAppointment = /consultation|measurements/i.test(appt.type);
  const isFittingAppointment = /fitting/i.test(appt.type);
  const linkedOrder = appt.orderId
    ? state.orders.find((order) => order.id === appt.orderId)
    : state.orders.find((order) => order.customerId === appt.customerId && !["Collected", "Cancelled"].includes(order.status));
  const linkedHalfDue = linkedOrder ? Math.max(Math.ceil(linkedOrder.total / 2) - linkedOrder.paid, 0) : 0;
  return `
    <article class="item-card appointment-card appointment-type-card-${typeTag.className}">
      <div class="row wrap">
        <div>
          <p class="name">${appt.time} • ${appt.name}</p>
          <p class="meta">${options.hideDate ? appt.type : formatDate(appt.date)}</p>
        </div>
        <div class="appointment-tag-row">
          <span class="appointment-type ${typeTag.className}">${typeTag.label}</span>
          <span class="appointment-status-text ${statusMeta.className}">
            ${statusMeta.mark ? `<span class="appointment-status-mark">${statusMeta.mark}</span>` : ""}
            ${appt.status}
          </span>
        </div>
      </div>
      <div class="mobile-appointment-summary">
        <span class="appointment-type ${typeTag.className}">${typeTag.label}</span>
        <button class="ghost-button compact-button" data-action="open-customer" data-id="${appt.customerId}">View more</button>
      </div>
      <div class="appointment-extra">
        <p class="meta">Staff: ${appt.staff}</p>
        ${appt.outcome ? `<p class="meta"><strong>Outcome:</strong> ${appt.outcome}</p>` : ""}
      </div>
      <div class="communication-row appointment-extra">
        <span class="communication-status">
          <span>Email + text</span>
          <strong class="delivery-state ${confirmationDelivery.className}">${confirmationDelivery.label}</strong>
        </span>
        <span class="communication-status">
          <span>Reminder</span>
          <strong class="delivery-state ${reminderDelivery.className}">${reminderDelivery.label}</strong>
          ${reminderDelivery.className === "pending" ? "" : `<small>${formatDate(comms.reminderDate)}</small>`}
        </span>
        <button class="ghost-button compact-button" data-action="send-reminder" data-id="${appt.id}">${icon("external")} Send reminder</button>
      </div>
      ${
        editable
          ? `<div class="appointment-actions appointment-extra">
              <select class="appointment-status-select" data-appointment-status="${appt.id}" aria-label="Change appointment status for ${appt.name}">
                ${appointmentStatuses()
                  .map((status) => `<option ${status === appt.status ? "selected" : ""}>${status}</option>`)
                  .join("")}
              </select>
              ${
                isSalesAppointment
                  ? `<button class="ghost-button" data-action="no-sale-follow-up" data-id="${appt.id}">${icon("external")} No sale follow-up</button>
                    <button class="button gold" data-action="sale-from-appointment" data-id="${appt.customerId}" data-appointment="${appt.id}">${icon("invoice")} Create order</button>`
                  : ""
              }
              ${
                isFittingAppointment && linkedOrder && linkedHalfDue > 0
                  ? `<button class="ghost-button" data-action="collect-half" data-id="${linkedOrder.id}">${icon("coin")} Collect</button>`
                  : ""
              }
              ${
                isFittingAppointment && linkedOrder && linkedHalfDue === 0
                  ? `<button class="ghost-button" data-action="book-collection" data-id="${linkedOrder.id}">${icon("calendar")} Book collection</button>`
                  : ""
              }
            </div>`
          : ""
      }
    </article>
  `;
}

function appointmentStatusMeta(status) {
  const normalized = String(status || "Booked").toLowerCase();
  if (normalized === "confirmed") return { className: "confirmed", mark: "✓" };
  if (normalized === "attended") return { className: "attended", mark: "" };
  if (normalized === "no show") return { className: "no-show", mark: "" };
  if (normalized === "cancelled") return { className: "cancelled", mark: "" };
  return { className: "booked", mark: "" };
}

function invoiceCard(invoice) {
  const customer = getCustomer(invoice.customerId);
  const payments = invoicePayments(invoice);
  return `
    <article class="item-card">
      <div class="row">
        <div>
          <p class="name">${invoice.number}</p>
          <p class="meta">${customer.name} • Due ${formatDate(invoice.dueDate)}</p>
        </div>
        <span class="status ${invoiceStatus(invoice).className}">${invoiceStatus(invoice).label}</span>
      </div>
      <div class="row">
        <span class="meta">Paid ${money(invoice.paid)} • ${paymentMethodSummary(payments)}</span>
        <strong>${money(invoice.total - invoice.paid)} due</strong>
      </div>
      <p class="meta">Created by ${invoice.createdBy || "Unassigned"}</p>
    </article>
  `;
}

function customerQuotations(customerId) {
  return (state.quotations || [])
    .filter((quote) => quote.customerId === customerId)
    .sort((a, b) => String(b.updated || b.createdDate || "").localeCompare(String(a.updated || a.createdDate || "")));
}

function quotationCard(quote) {
  const lineSummary = quote.lines?.map((line) => line.label).filter(Boolean).join(", ") || "No items";
  const status = quote.status === "Invoiced" ? "ready" : "partial";
  return `
    <article class="item-card">
      <div class="row">
        <div>
          <p class="name">${quote.number}</p>
          <p class="meta">${lineSummary}</p>
          <p class="meta">Event ${escapeHtml(quote.eventDate || "Not set")} • Due ${formatDate(quote.dueDate)}</p>
        </div>
        <span class="status ${status}">${quote.status || "Quoted"}</span>
      </div>
      <div class="row">
        <span class="meta">Saved ${formatDate(quote.updated || quote.createdDate)}</span>
        <strong>${money(quote.total || 0)}</strong>
      </div>
    </article>
  `;
}

function invoiceRow(invoice) {
  const customer = getCustomer(invoice.customerId);
  const order = state.orders.find((item) => item.id === invoice.orderId);
  const status = invoiceStatus(invoice);
  const balance = invoice.total - invoice.paid;
  const payments = invoicePayments(invoice);
  return `
    <tr>
      <td><strong>${invoice.number}</strong><br><span class="meta">Due ${formatDate(invoice.dueDate)}</span></td>
      <td>${customer.name}<br><span class="meta">${customer.phone}</span></td>
      <td>${order ? order.number : "No order"}<br><span class="meta">${order ? order.item : ""}</span></td>
      <td>${invoice.createdBy || order?.createdBy || "Unassigned"}</td>
      <td><span class="status ${status.className}">${status.label}</span></td>
      <td class="amount">${money(invoice.total)}</td>
      <td class="amount">${money(invoice.paid)}<br><span class="meta">${paymentMethodSummary(payments)}</span></td>
      <td class="amount">${money(balance)}</td>
      <td>
        <button class="ghost-button" data-action="record-payment" data-id="${invoice.id}" ${balance <= 0 ? "disabled" : ""}>
          ${icon("coin")} Record payment
        </button>
      </td>
    </tr>
  `;
}

function statusSelect(order) {
  return `
    <select class="status-select" data-order-status="${order.id}" aria-label="Update order status for ${order.number}">
      ${orderStatuses.map((status) => `<option ${status === order.status ? "selected" : ""}>${status}</option>`).join("")}
    </select>
  `;
}

function readyLocationSelect(order) {
  return `
    <select class="status-select ready-location-select" data-order-field="readyLocation" data-id="${order.id}" aria-label="Update ready location for ${order.number}" required>
      ${readyLocationOptions().map((option) => `<option value="${option.value}" ${option.value === readyLocationValue(order) ? "selected" : ""}>${option.label}</option>`).join("")}
    </select>
  `;
}

function readyLocationOptions() {
  return [
    { value: "in-store", label: "In store" },
    { value: "ready-for-fitting", label: "Ready for fitting rail" },
  ];
}

function readyLocationValue(order) {
  return order.readyLocation || "in-store";
}

function readyLocationState(order) {
  if (order.status !== "Ready") return null;
  const value = readyLocationValue(order);
  const option = readyLocationOptions().find((item) => item.value === value) || readyLocationOptions()[0];
  return {
    label: option.label,
    className: value,
  };
}

function statCard(label, value, note, view = "", action = "", id = "") {
  const attributes = view
    ? `data-view="${view}" tabindex="0" role="button" aria-label="Open ${label}"`
    : action
      ? `data-action="${action}" ${id ? `data-id="${id}"` : ""} tabindex="0" role="button" aria-label="Open ${label}"`
      : "";
  return `
    <article class="stat-card ${view || action ? "clickable-card" : ""}" ${attributes}>
      <p class="stat-label">${label}</p>
      <p class="stat-value">${value}</p>
      <p class="stat-note">${note}</p>
    </article>
  `;
}

function emptyState(message) {
  return `<div class="empty">${message}</div>`;
}

function invoiceTotals(invoices) {
  return invoices.reduce(
    (acc, invoice) => {
      acc.total += invoice.total;
      acc.paid += invoice.paid;
      acc.count += 1;
      return acc;
    },
    { total: 0, paid: 0, count: 0 },
  );
}

function invoiceMonthlyBreakdown(year) {
  return Array.from({ length: 12 }, (_, index) => {
    const key = `${year}-${String(index + 1).padStart(2, "0")}`;
    const invoices = state.invoices.filter((invoice) => monthKey(invoice.dueDate) === key);
    const totals = invoiceTotals(invoices);
    return {
      key,
      label: monthLabel(key),
      ...totals,
    };
  });
}

function depositReminderInfo(order) {
  if (!order || order.total <= 0) return null;
  const target = Math.ceil(order.total / 2);
  const amountToHalf = Math.max(target - order.paid, 0);
  if (amountToHalf <= 0) return null;
  const createdDate = order.createdDate || order.updated || DEMO_TODAY;
  const reminderDate = order.depositReminderDate || addDays(createdDate, 7);
  const sent = reminderDate <= todayKey();
  return {
    amountToHalf,
    date: reminderDate,
    status: sent ? "Sent" : "Scheduled",
    className: sent ? "sent" : "pending",
    message: `Your balance is overdue. Delays can affect the arrival of your order. Please pay the remaining ${money(amountToHalf)} so your order can reach the required 50% deposit.`,
  };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function invoiceYears() {
  const years = state.invoices
    .map((invoice) => new Date(`${invoice.dueDate}T12:00:00`).getFullYear())
    .filter((year) => Number.isFinite(year));
  years.push(2026);
  return [...new Set(years)].sort((a, b) => b - a);
}

function paymentMethodTotals(payments) {
  const totals = payments.reduce((acc, payment) => {
    acc[payment.method] = acc[payment.method] || { method: payment.method, total: 0, count: 0 };
    acc[payment.method].total += payment.amount;
    acc[payment.method].count += 1;
    return acc;
  }, {});
  return Object.values(totals).sort((a, b) => b.total - a.total);
}

function renderCalendar(dateString, mode) {
  if (mode === "month") return renderMonthCalendar(dateString);
  if (mode === "week") return renderScheduleCalendar(weekDates(dateString), "week");
  if (mode === "day") return "";
  const days = mode === "week" ? weekDates(dateString) : [dateString];
  return `
    <div class="calendar-grid ${mode === "day" ? "day-view" : ""}">
      ${days
        .map((date) => {
          const appointments = state.appointments
            .filter((appt) => appt.date === date)
            .sort((a, b) => a.time.localeCompare(b.time));
          return `
            <div class="calendar-day">
              <div class="calendar-day-head">
                <strong>${weekdayName(date)}</strong>
                <span>${formatDate(date)}</span>
              </div>
              <div class="calendar-events">
                ${appointments.map(calendarEvent).join("") || `<span class="calendar-empty">No bookings</span>`}
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderScheduleCalendar(days, mode) {
  const times = calendarTimeSlots(days);
  return `
    <div class="schedule-calendar ${mode === "month" ? "month-schedule" : "week-schedule"}" style="--day-count: ${days.length};">
      <div class="schedule-corner">Time</div>
      ${days
        .map(
          (date) => `
            <button class="schedule-day-head ${date === state.calendarDate ? "selected" : ""}" data-calendar-pick="${date}" type="button">
              <strong>${weekdayName(date)}</strong>
              <span>${mode === "month" ? new Date(`${date}T12:00:00`).getDate() : formatDate(date)}</span>
            </button>
          `,
        )
        .join("")}
      ${times
        .map(
          (time) => `
            <div class="schedule-time">${time}</div>
            ${days
              .map((date) => {
                const appointments = state.appointments
                  .filter((appt) => appt.date === date && appt.time === time)
                  .sort((a, b) => a.name.localeCompare(b.name));
                return `
                  <div class="schedule-slot">
                    ${appointments.map(calendarEvent).join("")}
                  </div>
                `;
              })
              .join("")}
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMonthCalendar(dateString) {
  const days = monthGridDates(dateString);
  const currentMonth = new Date(`${dateString}T12:00:00`).getMonth();
  return `
    <div class="month-calendar">
      ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<div class="month-weekday">${day}</div>`).join("")}
      ${days
        .map((date) => {
          const dateObj = new Date(`${date}T12:00:00`);
          const appointments = state.appointments
            .filter((appt) => appt.date === date)
            .sort((a, b) => a.time.localeCompare(b.time));
          return `
            <button class="month-day ${dateObj.getMonth() === currentMonth ? "" : "muted"} ${date === state.calendarDate ? "selected" : ""}" data-calendar-pick="${date}" type="button">
              <span>${dateObj.getDate()}</span>
              ${appointments.slice(0, 3).map((appt) => `<small>${appt.time} ${appt.name}</small>`).join("")}
              ${appointments.length > 3 ? `<small>+${appointments.length - 3} more</small>` : ""}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function monthDatesInView(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: totalDays }, (_, index) => `${year}-${String(month + 1).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`);
}

function calendarTimeSlots(days) {
  const appointmentTimes = state.appointments.filter((appt) => days.includes(appt.date)).map((appt) => appt.time);
  return [...new Set([...bookingSlotTimes(), ...appointmentTimes])]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function calendarEvent(appt) {
  return `
    <button class="calendar-event" data-customer="${appt.customerId}" type="button">
      <strong>${appt.time} ${appt.name}</strong>
      <span>${appt.type}</span>
      <em>${appt.status}</em>
    </button>
  `;
}

function appointmentsForCalendar(dateString, mode) {
  const dates =
    mode === "month" ? monthGridDates(dateString) : mode === "week" ? weekDates(dateString) : [dateString];
  return state.appointments.filter((appt) => dates.includes(appt.date));
}

function calendarRangeTitle(dateString, mode) {
  if (mode === "day") return `Appointments for ${formatDate(dateString)}`;
  if (mode === "week") {
    const days = weekDates(dateString);
    return `Week of ${formatDate(days[0])} - ${formatDate(days[6])}`;
  }
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(date);
}

function groupedAppointmentAgenda(appointments) {
  const sorted = appointments
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  const grouped = sorted.reduce((groups, appt) => {
    groups[appt.date] = groups[appt.date] || [];
    groups[appt.date].push(appt);
    return groups;
  }, {});
  return Object.entries(grouped)
    .map(
      ([date, dayAppointments]) => `
        <section class="agenda-day">
          <div class="agenda-date">
            <strong>${formatDate(date)}</strong>
            <span>${dayAppointments.length} appointment${dayAppointments.length === 1 ? "" : "s"}</span>
          </div>
          <div class="list">
            ${dayAppointments.map(dashboardAppointmentCard).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function appointmentComms(appt) {
  return {
    confirmationStatus: appt.confirmationStatus || "Email + text sent",
    reminderStatus: appt.reminderStatus || "Scheduled",
    reminderDate: appt.reminderDate || dayBefore(appt.date),
  };
}

function deliveryState(status) {
  const normalised = String(status || "").toLowerCase();
  if (normalised.includes("failed")) return { label: "Failed", className: "failed" };
  if (normalised.includes("sent")) return { label: "Sent", className: "sent" };
  return { label: "-", className: "pending" };
}

function appointmentStatuses() {
  return ["Booked", "Confirmed", "Attended", "No show", "Cancelled"];
}

function appointmentTypeTag(type) {
  const value = String(type || "").toLowerCase();
  if (value.includes("fitting") || value.includes("alteration")) return { label: "Fitting", className: "fitting" };
  if (value.includes("collection")) return { label: "Collection", className: "collection" };
  return { label: "Consultation", className: "consultation" };
}

function bindEvents() {
  bindActionButtons();

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.currentView = button.dataset.view;
      state.toast = "";
      state.modal = null;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-order-status]").forEach((select) => {
    select.addEventListener("click", (event) => event.stopPropagation());
    select.addEventListener("change", () => updateOrderStatus(select.dataset.orderStatus, select.value));
  });

  document.querySelectorAll("[data-order-field]").forEach((field) => {
    field.addEventListener("click", (event) => event.stopPropagation());
    field.addEventListener("change", () => updateOrderField(field.dataset.id, field.dataset.orderField, field.value));
  });

  document.querySelectorAll("[data-appointment-status]").forEach((select) => {
    select.addEventListener("click", (event) => event.stopPropagation());
    select.addEventListener("change", () => updateAppointmentStatus(select.dataset.appointmentStatus, select.value));
  });

  document.querySelectorAll("[data-stock-qty]").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("change", () => updateStockQuantity(input.dataset.stockQty, input.value));
  });

  document.querySelectorAll("[data-stock-alert]").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("change", () => updateStockAlert(input.dataset.stockAlert, input.value));
  });

  document.querySelectorAll("[data-stock-price]").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
    input.addEventListener("change", () => updateStockPrice(input.dataset.stockPrice, input.value));
  });

  document.querySelectorAll("[data-calendar-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.calendarMode = button.dataset.calendarMode;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-order-period]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderPeriod = button.dataset.orderPeriod || "all";
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-order-stage-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orderStageView = button.dataset.orderStageView === "home" ? "" : button.dataset.orderStageView;
      saveState();
      render();
    });
  });

  document.querySelectorAll("[data-calendar-pick]").forEach((button) => {
    button.addEventListener("click", () => {
      state.calendarDate = button.dataset.calendarPick;
      state.calendarMode = "day";
      saveState();
      render();
    });
  });

  const calendarDateInput = document.querySelector("[data-calendar-date]");
  if (calendarDateInput) {
    calendarDateInput.addEventListener("change", (event) => {
      state.calendarDate = event.target.value;
      saveState();
      render();
    });
  }

  const invoiceYearSelect = document.querySelector("[data-invoice-year]");
  if (invoiceYearSelect) {
    invoiceYearSelect.addEventListener("change", (event) => {
      state.invoiceYear = Number(event.target.value);
      saveState();
      render();
    });
  }

  document.querySelectorAll("[data-customer]").forEach((button) => {
    button.addEventListener("click", () => {
      openCustomerDetail(button.dataset.customer);
    });
  });

  const searchInput = document.querySelector("[data-input='customer-search']");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      saveState();
      render();
    });
  }

  document.querySelectorAll("[data-stage-search]").forEach((input) => {
    input.addEventListener("input", () => filterOrderStage(input));
  });

  const orderCustomerSelect = document.querySelector("[data-input='order-customer']");
  if (orderCustomerSelect) {
    orderCustomerSelect.addEventListener("change", () => fillOrderCustomerFields(orderCustomerSelect.value));
  }

  const orderItemSelect = document.querySelector("[data-input='order-item']");
  if (orderItemSelect) {
    orderItemSelect.addEventListener("change", safeUpdateOrderSelectionSummary);
    safeUpdateOrderSelectionSummary();
  }

  const itemSearchInput = document.querySelector("[data-order-item-search]");
  if (itemSearchInput) {
    itemSearchInput.addEventListener("input", () => safeFilterOrderItemPicker(itemSearchInput.value));
    safeFilterOrderItemPicker(itemSearchInput.value);
  }

  document.querySelectorAll("[data-order-total], [data-order-discount], [data-order-paid]").forEach((input) => {
    input.addEventListener("input", () => {
      if (input.matches("[data-order-total]")) input.dataset.manualTotal = "true";
      safeUpdateOrderInvoiceSummary();
    });
  });

  document.querySelectorAll("#order-customer-name, #order-event, #order-due").forEach((input) => {
    input.addEventListener("input", safeUpdateOrderInvoiceSummary);
    input.addEventListener("change", safeUpdateOrderInvoiceSummary);
  });

  document.querySelectorAll("form [data-booking-type], form [data-booking-date], form [data-booking-order]").forEach((field) => {
    field.addEventListener("change", () => updateBookingAvailability(field.closest("form")));
    field.addEventListener("input", () => updateBookingAvailability(field.closest("form")));
  });
  document.querySelectorAll("form").forEach((form) => updateBookingAvailability(form));

  document.querySelectorAll("[data-fitting-priority]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => syncFittingPriorityField(checkbox));
    syncFittingPriorityField(checkbox);
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", () => closeModal());
  });

  document.querySelectorAll(".modal-card").forEach((card) => {
    card.addEventListener("click", (event) => event.stopPropagation());
  });

  document.querySelectorAll("[role='button']").forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      element.click();
    });
  });

  document.querySelectorAll("form").forEach((form) => {
    if (form.id === "new-order-form") {
      form.addEventListener("submit", handleOrderSubmit);
    } else if (form.id === "staff-login-form") {
      form.addEventListener("submit", handleStaffLoginSubmit);
    } else if (form.id === "custom-comms-form") {
      form.addEventListener("submit", handleCustomCommsSubmit);
    } else if (form.id === "template-add-form") {
      form.addEventListener("submit", handleTemplateAddSubmit);
    } else if (form.dataset.fittingForm) {
      form.addEventListener("submit", handleFittingRecordSubmit);
    } else if (form.dataset.templateForm) {
      form.addEventListener("submit", handleTemplateEditSubmit);
    } else if (form.id === "inventory-form") {
      form.addEventListener("submit", handleInventorySubmit);
    } else if (form.id === "settings-user-form") {
      form.addEventListener("submit", handleSettingsUserSubmit);
    } else if (form.id === "settings-theme-form") {
      form.addEventListener("submit", handleSettingsThemeSubmit);
    } else if (form.id === "settings-rules-form") {
      form.addEventListener("submit", handleSettingsRulesSubmit);
    } else if (form.id === "settings-stock-form") {
      form.addEventListener("submit", handleSettingsStockSubmit);
    } else if (form.id === "settings-finance-form") {
      form.addEventListener("submit", handleSettingsFinanceSubmit);
    } else if (form.id === "finance-access-form") {
      form.addEventListener("submit", handleFinanceAccessSubmit);
    } else {
      form.addEventListener("submit", handleBookingSubmit);
    }
  });
}

function bindActionButtons() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      handleAction(button);
    });
  });
}

function syncFittingPriorityField(checkbox) {
  const form = checkbox.closest("form");
  const field = form?.querySelector(`[data-fitting-priority-due="${checkbox.dataset.fittingPriority}"]`);
  const input = field?.querySelector("input");
  if (!field || !input) return;
  field.hidden = !checkbox.checked;
  input.disabled = !checkbox.checked;
  input.required = checkbox.checked;
}

function handleAction(button) {
  const action = button.dataset.action;
  const id = button.dataset.id;
  if (action === "reset") {
    state = cloneData(seedState);
    state.toast = "Demo data has been reset.";
    saveState();
    render();
  }
  if (action === "open-staff-dropdown") openStaffDropdown(button.dataset.role || "senior");
  if (action === "select-staff") selectStaff(id, button.dataset.role || "senior");
  if (action === "clock-in-staff") clockInStaff(button.dataset.role || "senior");
  if (action === "new-order") openNewOrderForm();
  if (action === "new-staff-booking") openStaffBookingForm();
  if (action === "add-inventory") openInventoryForm();
  if (action === "new-order-for-customer") openNewOrderForm(id);
  if (action === "sale-from-appointment") openNewOrderForm(id, button.dataset.appointment);
  if (action === "close-modal") closeModal();
  if (action === "save-quote") saveQuoteFromOrderForm({ close: true });
  if (action === "show-invoice-step") showInvoiceStep();
  if (action === "show-quote-step") showQuoteStep();
  if (action === "open-dashboard-metric") openDashboardMetric(id);
  if (action === "open-dashboard-attention") openDashboardAttention(id);
  if (action === "open-appointment-detail") openAppointmentDetail(id);
  if (action === "show-today-bookings") showTodayBookings();
  if (action === "toggle-priority-orders") togglePriorityOrders();
  if (action === "toggle-order") toggleOrderDetail(id);
  if (action === "toggle-all-order") toggleAllOrderDetail(id);
  if (action === "open-order-detail") openOrderDetail(id);
  if (action === "scroll-order-stage") scrollToOrderStage(id);
  if (action === "open-order-stage") openOrderStage(button.dataset.status || "");
  if (action === "open-customer") {
    openCustomerDetail(id);
  }
  if (action === "book-selected") createBookingForCustomer(id);
  if (action === "send-reminder") sendAppointmentReminder(id);
  if (action === "no-sale-follow-up") scheduleNoSaleFollowUp(id);
  if (action === "set-workflow-filter") setWorkflowFilter(id);
  if (action === "collect-half") collectToHalf(id);
  if (action === "book-collection") bookCollection(id);
  if (action === "calendar-prev") moveCalendar(-1);
  if (action === "calendar-next") moveCalendar(1);
  if (action === "open-month-invoices") openInvoiceMonth(id, "invoices");
  if (action === "open-month-payments") openInvoiceMonth(id, "paid");
  if (action === "open-month-outstanding") openInvoiceMonth(id, "outstanding");
  if (action === "filter-payment-method") filterPaymentMethod(id);
  if (action === "clear-payment-method") filterPaymentMethod("");
  if (action === "stock-plus") adjustStock(id, 1);
  if (action === "stock-minus") adjustStock(id, -1);
  if (action === "record-payment") recordPayment(id);
  if (action === "print-invoice") printInvoicePdf();
  if (action === "lock-finance") lockFinance();
}

function openNewOrderForm(customerId = "", appointmentId = null) {
  state.modal = { type: "order", customerId, appointmentId };
  state.toast = "";
  saveState();
  render();
}

function setQuoteInvoiceStep(step) {
  const form = document.querySelector("#new-order-form");
  if (!form) return;
  const invoiceStep = step === "invoice";
  form.classList.toggle("invoice-step-active", invoiceStep);
  form.querySelectorAll("[data-quote-step='quote']").forEach((element) => {
    element.hidden = invoiceStep;
  });
  form.querySelectorAll("[data-quote-step='invoice']").forEach((element) => {
    element.hidden = !invoiceStep;
  });
  const scrollBody = form.closest(".order-invoice-modal")?.querySelector(".invoice-scroll-body");
  if (scrollBody && typeof scrollBody.scrollTo === "function") {
    scrollBody.scrollTo({ top: 0, behavior: "smooth" });
  } else if (scrollBody) {
    scrollBody.scrollTop = 0;
  }
}

function showInvoiceStep() {
  const selectedItems = selectedOrderItemValues();
  if (!selectedItems.length) {
    state.toast = "Add at least one item before creating the invoice.";
    render();
    return;
  }
  if (!saveQuoteFromOrderForm({ close: false })) return;
  setQuoteInvoiceStep("invoice");
}

function showQuoteStep() {
  setQuoteInvoiceStep("quote");
}

function saveQuoteFromOrderForm({ close = false } = {}) {
  const form = document.querySelector("#new-order-form");
  if (!form) return false;
  const data = new FormData(form);
  const customer = saveCustomerProfileFromOrderData(data);
  if (!customer) return false;
  const quote = saveQuotationFromOrderData(data, customer);
  if (!quote) return false;
  state.selectedCustomerId = customer.id;
  state.modal = close
    ? null
    : { ...(state.modal || {}), type: "order", customerId: customer.id, quoteId: quote.id };
  state.currentView = close ? "customers" : state.currentView;
  state.toast = close
    ? `Saved ${quote.number} to ${customer.name}'s profile.`
    : `Saved ${quote.number} to ${customer.name}'s profile.`;
  saveState();
  if (close) render();
  return true;
}

function saveCustomerProfileFromOrderData(data) {
  const selectedCustomerId = String(data.get("customerId") || "");
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const eventName = String(data.get("eventName") || "").trim();
  const address = String(data.get("address") || "").trim();
  if (!name || !phone) {
    state.toast = "Add the customer's name and phone before saving the quote.";
    render();
    return null;
  }
  let customer =
    state.customers.find((item) => item.id === selectedCustomerId) ||
    (state.modal?.customerId ? state.customers.find((item) => item.id === state.modal.customerId) : null) ||
    state.customers.find((item) => item.phone === phone || (email && item.email === email));
  if (!customer) {
    customer = addCustomer({
      name,
      phone,
      email: email || "Not provided",
      address: address || "Not collected",
      event: eventName || "New quotation",
      notes: "Added while preparing a quotation.",
    });
  } else {
    customer.name = name || customer.name;
    customer.phone = phone || customer.phone;
    customer.email = email || customer.email;
    customer.address = address || customer.address;
    customer.event = eventName || customer.event;
    customer.lastVisit = DEMO_TODAY;
  }
  ["chest", "waist", "hips", "inseam", "sleeve", "neck", "shoulder", "height"].forEach((measure) => {
    const value = String(data.get(measure) || "").trim();
    if (value) customer.measurements[measure] = value;
  });
  return customer;
}

function saveQuotationFromOrderData(data, customer) {
  const selectedItems = data.getAll("items").map((value) => String(value || "").trim()).filter(Boolean);
  const customItem = String(data.get("customItem") || "").trim();
  if (!selectedItems.length) {
    state.toast = "Select at least one item before saving the quote.";
    render();
    return null;
  }
  const inventoryItems = selectedItems.filter((value) => value !== "__custom").map(selectedInventoryItem).filter(Boolean);
  const lines = [
    ...inventoryItems.map((item) => ({
      id: item.id,
      label: inventoryOrderLabel(item),
      description: String(data.get(`itemDescription_${item.id}`) || item.description || inventoryOrderLabel(item)).trim(),
      price: inventoryPrice(item),
    })),
    selectedItems.includes("__custom") && customItem
      ? { id: "__custom", label: customItem, description: customItem, price: Math.max(0, Number(data.get("total")) || 0) }
      : null,
  ].filter(Boolean);
  const discount = Math.max(0, Number(data.get("discount")) || 0);
  const total = Math.max(0, Number(data.get("total")) || 0);
  const existing = state.modal?.quoteId ? state.quotations.find((quote) => quote.id === state.modal.quoteId) : null;
  const quote = existing || {
    id: createId("q"),
    number: nextDocumentNumber("QUO", state.quotations || [], "number", 1000),
    createdDate: DEMO_TODAY,
  };
  Object.assign(quote, {
    customerId: customer.id,
    eventDate: String(data.get("eventName") || customer.event || "").trim(),
    dueDate: String(data.get("due") || "2026-06-30"),
    lines,
    discount,
    total,
    status: quote.status === "Invoiced" ? "Invoiced" : "Quoted",
    updated: DEMO_TODAY,
  });
  if (!existing) state.quotations.unshift(quote);
  return quote;
}

function openStaffBookingForm() {
  state.modal = { type: "staff-booking" };
  state.toast = "";
  saveState();
  render();
}

function openInventoryForm() {
  state.modal = { type: "inventory" };
  state.toast = "";
  saveState();
  render();
}

function closeModal() {
  state.modal = null;
  saveState();
  render();
}

function openDashboardMetric(metric) {
  state.modal = { type: "dashboard-metric", metric };
  state.toast = "";
  saveState();
  render();
}

function openDashboardAttention(category) {
  state.modal = { type: "dashboard-attention", category };
  state.toast = "";
  saveState();
  render();
}

function openAppointmentDetail(appointmentId) {
  state.modal = { type: "appointment-detail", appointmentId };
  state.toast = "";
  saveState();
  render();
}

function setWorkflowFilter(filter) {
  state.workflowFilter = filter === "wants-to-buy" ? "bought" : filter || "follow-up";
  saveState();
  render();
}

function openStaffDropdown(role = "senior") {
  state.staffDropdownOpen = true;
  state.staffDropdownRole = role;
  saveState();
  render();
  setTimeout(() => document.querySelector(`[data-staff-clock-select="${role}"]`)?.focus(), 0);
}

function selectStaff(name, role = "senior") {
  const safeRole = role === "staff" ? "staff" : "senior";
  const clock = dailyStaffClock();
  clock.date = DEMO_TODAY;
  clock[safeRole] = { name, time: currentClockTime() };
  state.staffClock = clock;
  state.activeStaff = clock.senior.name;
  state.clockedInDate = DEMO_TODAY;
  state.staffDropdownOpen = false;
  state.staffDropdownRole = "";
  state.staffMembers = staffMembers().includes(name) ? staffMembers() : [...staffMembers(), name];
  if (safeRole === "senior") assignTodaysBookingsToSenior(name);
  state.toast = safeRole === "senior"
    ? `${name} is clocked in as senior staff. Today's bookings are assigned to ${name}.`
    : `${name} is clocked in as staff.`;
  saveState();
  render();
}

function clockInStaff(role = "senior") {
  const safeRole = role === "staff" ? "staff" : "senior";
  const select = document.querySelector(`[data-staff-clock-select="${safeRole}"]`);
  const selected = String(select?.value || "").trim();
  if (!selected) {
    state.toast = `Choose a ${safeRole === "senior" ? "senior staff" : "staff"} member to clock in.`;
    saveState();
    render();
    return;
  }
  selectStaff(selected, safeRole);
}

function assignTodaysBookingsToSenior(name) {
  state.appointments
    .filter((appointment) => appointment.date === DEMO_TODAY && !["Attended", "Cancelled"].includes(appointment.status))
    .forEach((appointment) => {
      appointment.staff = name;
    });
}

function currentClockTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function showTodayBookings() {
  state.currentView = "dashboard";
  state.toast = "";
  state.modal = null;
  saveState();
  render();
  setTimeout(() => document.getElementById("today-bookings")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
}

function togglePriorityOrders() {
  state.dashboardPriorityExpanded = !state.dashboardPriorityExpanded;
  saveState();
  render();
}

function openInvoiceMonth(monthKeyValue, detailType) {
  state.modal = { type: "invoice-month", monthKey: monthKeyValue, detailType };
  state.toast = "";
  saveState();
  render();
}

function filterPaymentMethod(method) {
  if (!state.modal || state.modal.type !== "invoice-month") return;
  state.modal.paymentMethod = method;
  saveState();
  render();
}

function openCustomerDetail(customerId) {
  state.selectedCustomerId = customerId;
  const expandedOrderId = state.modal?.customerId === customerId ? state.modal.expandedOrderId || null : null;
  state.modal = { type: "customer", customerId, expandedOrderId };
  state.toast = "";
  saveState();
  render();
}

function toggleOrderDetail(orderId) {
  if (state.modal?.type === "customer") {
    state.modal.expandedOrderId = state.modal.expandedOrderId === orderId ? null : orderId;
  } else {
    state.expandedOrderId = state.expandedOrderId === orderId ? null : orderId;
  }
  saveState();
  render();
}

function toggleAllOrderDetail(orderId) {
  if (isMobileViewport()) {
    openOrderDetail(orderId);
    return;
  }
  state.allOrdersExpandedOrderId = state.allOrdersExpandedOrderId === orderId ? null : orderId;
  state.expandedOrderId = null;
  saveState();
  render();
}

function openOrderDetail(orderId) {
  state.modal = { type: "order-detail", orderId, expandedOrderId: orderId };
  state.toast = "";
  saveState();
  render();
}

function openOrderStage(status) {
  state.modal = { type: "order-stage", status };
  state.toast = "";
  saveState();
  render();
}

function scrollToOrderStage(status) {
  document.getElementById(orderStageElementId(status))?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 760px)").matches;
}

function fillOrderCustomerFields(customerId) {
  const form = document.querySelector("#new-order-form");
  if (!form) return;
  const customer = state.customers.find((item) => item.id === customerId);
  form.elements.namedItem("name").value = customer?.name || "";
  form.elements.namedItem("phone").value = customer?.phone || "";
  form.elements.namedItem("email").value = customer?.email || "";
  form.elements.namedItem("eventName").value = customer?.event || "";
  form.elements.namedItem("address").value = customer?.address || "";
  ["chest", "waist", "hips", "inseam", "sleeve", "neck", "shoulder", "height"].forEach((measure) => {
    form.elements.namedItem(measure).value = customer?.measurements?.[measure] || "";
  });
  if (!customer) form.elements.namedItem("name").focus();
}

function selectedOrderItemValues(select = document.querySelector("[data-input='order-item']")) {
  if (!select) return [];
  if (!select.selectedOptions) {
    return Array.from(select.querySelectorAll("input[name='items']:checked")).map((input) => input.value).filter(Boolean);
  }
  return Array.from(select.selectedOptions || []).map((option) => option.value).filter(Boolean);
}

function updateOrderSelectionSummary() {
  const select = document.querySelector("[data-input='order-item']");
  const summary = document.querySelector("[data-order-selection-summary]");
  const values = selectedOrderItemValues(select);
  toggleCustomOrderField(values);
  if (!summary) return;
  const items = values.filter((value) => value !== "__custom").map(selectedInventoryItem).filter(Boolean);
  const customSelected = values.includes("__custom");
  const total = items.reduce((sum, item) => sum + inventoryPrice(item), 0);
  const totalInput = document.querySelector("[data-order-total]");
  const discountInput = document.querySelector("[data-order-discount]");
  const discount = Math.max(0, Number(discountInput?.value || 0));
  if (totalInput && total > 0 && (!totalInput.dataset.manualTotal || Number(totalInput.value || 0) === 650)) {
    totalInput.value = Math.max(total - discount, 0);
  }
  summary.innerHTML = `
    <div class="row wrap">
      <strong>Selected items</strong>
      <span class="amount">${money(total)} inventory total</span>
    </div>
    <div class="list compact-selection-list">
      ${
        items
          .map(
            (item) => `
              <div class="selection-line">
                <span>
                  <strong>${inventoryOrderLabel(item)}</strong>
                  <label class="invoice-line-description" for="order-description-${item.id}">
                    <span>Invoice description</span>
                    <textarea id="order-description-${item.id}" name="itemDescription_${item.id}" placeholder="Description for this invoice only">${escapeHtml(item.description || inventoryOrderLabel(item))}</textarea>
                  </label>
                </span>
                <strong>${money(inventoryPrice(item))}</strong>
              </div>
            `,
          )
          .join("") || `<p class="meta">No inventory items selected.</p>`
      }
      ${customSelected ? `<div class="selection-line"><span>Custom order line</span><strong>Manual price</strong></div>` : ""}
    </div>
  `;
  summary.querySelectorAll("[name^='itemDescription_']").forEach((field) => {
    field.addEventListener("input", safeUpdateOrderInvoiceSummary);
  });
  filterOrderItemPicker(document.querySelector("[data-order-item-search]")?.value || "");
  safeUpdateOrderInvoiceSummary();
}

function safeUpdateOrderSelectionSummary() {
  try {
    updateOrderSelectionSummary();
  } catch (error) {
    console.error("Order item summary update failed", error);
  }
}

function safeUpdateOrderInvoiceSummary() {
  try {
    updateOrderInvoiceSummary();
  } catch (error) {
    console.error("Invoice summary update failed", error);
  }
}

function safeFilterOrderItemPicker(query) {
  try {
    filterOrderItemPicker(query);
  } catch (error) {
    console.error("Order item search update failed", error);
  }
}

function filterOrderItemPicker(query) {
  const terms = String(query || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  const rows = Array.from(document.querySelectorAll("[data-item-search-text]"));
  let visibleCount = 0;
  rows.forEach((row) => {
    const checkbox = row.querySelector("input[name='items']");
    const selected = checkbox?.checked;
    const haystack = row.dataset.itemSearchText || "";
    const matches = terms.length > 0 && terms.every((term) => haystack.includes(term));
    const visible = selected || matches;
    row.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  const empty = document.querySelector("[data-item-search-empty]");
  if (empty) {
    empty.textContent = terms.length ? "No matching items. Try another search." : "Start typing to find inventory items.";
    empty.hidden = visibleCount > 0;
  }
}

function updateOrderInvoiceSummary() {
  const totalInput = document.querySelector("[data-order-total]");
  const discountInput = document.querySelector("[data-order-discount]");
  const paidInput = document.querySelector("[data-order-paid]");
  const amountDue = document.querySelector("[data-amount-due]");
  const quoteInventory = document.querySelector("[data-quote-inventory]");
  const quoteDiscount = document.querySelector("[data-quote-discount]");
  const quoteTotal = document.querySelector("[data-quote-total]");
  const quoteFooterTotal = document.querySelector("[data-quote-footer-total]");
  const quoteCustomer = document.querySelector("[data-quote-customer]");
  const quoteEvent = document.querySelector("[data-quote-event]");
  const quoteDue = document.querySelector("[data-quote-due]");
  const quoteLines = document.querySelector("[data-quote-lines]");
  const inventoryTotal = selectedOrderItemValues()
    .filter((value) => value !== "__custom")
    .map(selectedInventoryItem)
    .filter(Boolean)
    .reduce((sum, item) => sum + inventoryPrice(item), 0);
  const discount = Math.max(0, Number(discountInput?.value || 0));
  if (totalInput && inventoryTotal > 0 && !totalInput.dataset.manualTotal) {
    totalInput.value = Math.max(inventoryTotal - discount, 0);
  }
  const total = Math.max(0, Number(totalInput?.value || 0));
  const paid = Math.max(0, Number(paidInput?.value || 0));
  const selectedItems = selectedOrderItemValues()
    .filter((value) => value !== "__custom")
    .map(selectedInventoryItem)
    .filter(Boolean);
  if (quoteLines) {
    const loadedQuote = document.querySelector("[data-loaded-quote]")?.dataset.loadedQuote || "";
    const savedLines = loadedQuote && selectedItems.length === 0
      ? ((state.quotations || []).find((quote) => quote.id === loadedQuote)?.lines || [])
      : [];
    const displayLines = selectedItems.length
      ? selectedItems
          .map((item) => {
            const description = document.getElementsByName(`itemDescription_${item.id}`)[0]?.value || item.description || inventoryOrderLabel(item);
            return { label: inventoryOrderLabel(item), description, price: inventoryPrice(item) };
          })
      : savedLines;
    quoteLines.innerHTML = displayLines.length
      ? displayLines
          .map((line) => `
              <p>
                <span>
                  <strong class="quote-line-item">${escapeHtml(line.label)}</strong>
                  <small>${escapeHtml(line.description || line.label)}</small>
                </span>
                <strong class="quote-line-price">${money(line.price || 0)}</strong>
              </p>
            `)
          .join("")
      : "<p>No items selected.</p>";
  }
  if (quoteCustomer) quoteCustomer.textContent = document.querySelector("#order-customer-name")?.value || "New customer";
  if (quoteEvent) quoteEvent.textContent = document.querySelector("#order-event")?.value || "Not set";
  if (quoteDue) quoteDue.textContent = formatDate(document.querySelector("#order-due")?.value || "2026-06-30");
  if (quoteInventory) quoteInventory.textContent = money(inventoryTotal);
  if (quoteDiscount) quoteDiscount.textContent = money(discount);
  if (quoteTotal) quoteTotal.textContent = money(total);
  if (quoteFooterTotal) quoteFooterTotal.textContent = money(total);
  if (amountDue) amountDue.textContent = money(Math.max(total - paid, 0));
}

function filterOrderStage(input) {
  const status = input?.dataset?.stageSearch || "";
  const safeStatus = selectorEscape(status);
  const list =
    input?.closest(".board-column, .modal-card, .panel")?.querySelector(`[data-stage-list="${safeStatus}"]`) ||
    document.querySelector(`[data-stage-list="${safeStatus}"]`);
  if (!list) return;
  const terms = String(input?.value || "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  let visibleCount = 0;
  list.querySelectorAll("[data-order-search-text]").forEach((card) => {
    const haystack = card.dataset.orderSearchText || "";
    const visible = !terms.length || terms.every((term) => haystack.includes(term));
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  let empty = list.querySelector("[data-stage-search-empty]");
  if (!empty) {
    empty = document.createElement("div");
    empty.className = "empty-state";
    empty.dataset.stageSearchEmpty = "true";
    empty.textContent = "No matching orders";
    list.appendChild(empty);
  }
  empty.hidden = visibleCount !== 0 || !terms.length;
}

function toggleCustomOrderField(values) {
  const field = document.querySelector("[data-custom-order-field]");
  const input = document.querySelector("#order-custom-item");
  const selectedValues = Array.isArray(values) ? values : [values];
  const isCustom = selectedValues.includes("__custom");
  if (field) field.hidden = !isCustom;
  if (input) {
    input.required = isCustom;
    if (!isCustom) input.value = "";
  }
}

function handleOrderSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const signatureName = String(data.get("signatureName") || "").trim();
  const discount = Math.max(0, Number(data.get("discount")) || 0);
  const total = Math.max(0, Number(data.get("total")) || 0);
  const paid = Math.min(total, Math.max(0, Number(data.get("paid")) || 0));
  const fittingDate = String(data.get("fittingDate") || "");
  const fittingTime = String(data.get("fittingTime") || "");
  const saleStaff = String(data.get("saleStaff") || currentStaffName()).trim() || "Unassigned";
  const selectedItems = data.getAll("items").map((value) => String(value || "").trim()).filter(Boolean);
  const customItem = String(data.get("customItem") || "").trim();
  const due = String(data.get("due") || "2026-06-30");
  if (!selectedItems.length) {
    state.toast = "Select at least one item before saving the invoice.";
    saveState();
    render();
    return;
  }
  const customer = saveCustomerProfileFromOrderData(data);
  const quote = customer ? saveQuotationFromOrderData(data, customer) : null;
  if (!customer || !quote) return;
  quote.status = "Invoiced";
  const inventoryItems = selectedItems.filter((value) => value !== "__custom").map(selectedInventoryItem).filter(Boolean);
  const hasCustomItem = selectedItems.includes("__custom") && customItem;
  const orderInventoryItems = inventoryItems.map((item) => ({
    id: item.id,
    label: inventoryOrderLabel(item),
    description: String(data.get(`itemDescription_${item.id}`) || item.description || inventoryOrderLabel(item)).trim(),
    price: inventoryPrice(item),
    stockAvailableAtOrder: inventoryAvailable(item),
    stockStatus: "Pending allocation",
  }));
  const orderedItem = [
    ...orderInventoryItems.map((item) => item.label),
    hasCustomItem ? customItem : "",
  ].filter(Boolean).join(", ");
  inventoryItems.forEach((item) => {
    item.committed = Math.max(0, Number(item.committed || 0)) + 1;
  });
  const order = {
    id: createId("o"),
    number: nextDocumentNumber("ORD", state.orders, "number", 1048),
    customerId: customer.id,
    quotationId: quote.id,
    item: orderedItem || "New tux order",
    inventoryItemId: inventoryItems[0]?.id || "",
    inventoryItems: orderInventoryItems,
    stockStatus: inventoryItems.length ? "Pending allocation" : "Custom order",
    stockAvailableAtOrder: orderInventoryItems[0]?.stockAvailableAtOrder ?? null,
    due,
    status: "Unprocessed",
    tailor: "Not sent",
    total,
    discount,
    paid,
    createdBy: saleStaff,
    createdDate: "2026-05-01",
    depositReminderDate: paid < Math.ceil(total / 2) ? addDays("2026-05-01", 7) : "",
    measurements: Object.fromEntries(
      ["chest", "waist", "hips", "inseam", "sleeve", "neck", "shoulder", "height"].map((measure) => [
        measure,
        customer.measurements[measure] || "-",
      ]),
    ),
    fittingDate,
    fittingTime,
    updated: "2026-05-01",
    notes: String(data.get("notes") || "No notes").trim(),
    signature: {
      name: signatureName,
      approved: data.get("signatureApproved") === "on",
      date: "2026-05-01",
    },
    history: [
      `Unprocessed 1 May by ${saleStaff}`,
      inventoryItems.length
        ? `Queued for stock allocation: ${orderInventoryItems.map((item) => item.label).join(", ")}`
        : "Custom order",
    ],
  };
  const invoice = {
    id: createId("inv"),
    number: nextDocumentNumber("INV", state.invoices, "number", 3021),
    customerId: customer.id,
    orderId: order.id,
    total,
    discount,
    paid,
    dueDate: order.due,
    method: paid > 0 ? String(data.get("method") || "Manual payment") : "Not paid",
    createdBy: saleStaff,
    payments: paid > 0
      ? [
          {
            amount: paid,
            method: String(data.get("method") || "Manual payment"),
            date: "2026-05-01",
            createdBy: saleStaff,
          },
        ]
      : [],
  };

  state.orders.unshift(order);
  const allocationResult = inventoryItems.length ? allocateAllStock() : { allocated: 0, newlyAllocated: 0, waiting: 0 };
  state.invoices.unshift(invoice);
  if (fittingDate && fittingTime) {
    state.appointments.push({
      id: createId("a"),
      customerId: customer.id,
      name: customer.name,
      type: "Fitting",
      date: fittingDate,
      time: fittingTime,
      staff: saleStaff,
      status: "Confirmed",
      notes: `Fitting booked after quotation ${invoice.number}. Customer should be at 50% paid by this visit.`,
      confirmationStatus: "Email + text sent",
      reminderStatus: "Scheduled",
      reminderDate: dayBefore(fittingDate),
      orderId: order.id,
    });
  }
  if (state.modal?.appointmentId) {
    const appointment = state.appointments.find((appt) => appt.id === state.modal.appointmentId);
    if (appointment) {
      appointment.status = "Attended";
      appointment.outcome = "Purchased";
      appointment.notes = `${appointment.notes} Quote created and fitting booked.`;
    }
  }
  state.selectedCustomerId = customer.id;
  state.currentView = "orders";
  state.modal = { type: "invoice-pdf", customerId: customer.id, orderId: order.id, invoiceId: invoice.id };
  const stockMessage = inventoryItems.length
    ? order.stockStatus === "Reserved"
      ? " Stock has been allocated by due-date priority."
      : order.stockStatus === "Future allocation"
        ? ` Stock is committed and will be allocated when the due date enters the ${appSetting("stockAllocationDay", "Tuesday")} ${appSetting("stockAllocationMonths", STOCK_ALLOCATION_MONTHS)}-month planning window.`
        : " Item is out of stock, so the order is in Missing."
    : " Custom order is Unprocessed.";
  const allocationMessage = allocationResult.newlyAllocated > 1 ? ` ${allocationResult.newlyAllocated} priority orders now have stock reserved.` : "";
  state.toast = fittingDate && fittingTime
    ? `Created ${order.number}, ${invoice.number}, fitting appointment, and PDF preview for ${customer.name}.${stockMessage}${allocationMessage}`
    : `Created ${order.number}, ${invoice.number}, and PDF preview for ${customer.name}.${stockMessage}${allocationMessage}`;
  saveState();
  render();
}

function printInvoicePdf() {
  window.print();
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const phone = String(data.get("phone")).trim();
  const email = String(data.get("email")).trim();
  const type = String(data.get("type") || "");
  const date = String(data.get("date") || "");
  const time = String(data.get("time") || "");
  const publicMode = form.id.includes("public");
  const validationError = validateBookingRequest({
    type,
    date,
    time,
    publicMode,
    orderNumber: String(data.get("orderNumber") || ""),
  });
  if (validationError) {
    state.toast = validationError;
    render();
    return;
  }
  const existing = state.customers.find((customer) => customer.phone === phone || customer.email === email);
  const customer =
    existing ||
    addCustomer({
      name,
      phone,
      email: email || "Not provided",
      event: "New enquiry",
      notes: "Added from booking form.",
    });
  if (existing) {
    existing.name = name || existing.name;
    existing.phone = phone || existing.phone;
    existing.email = email || existing.email;
    existing.lastVisit = date;
  }

  state.appointments.push({
    id: createId("a"),
    customerId: customer.id,
    name,
    type,
    date,
    time,
    staff: publicMode ? "Unassigned" : currentStaffName(),
    status: publicMode ? "Pending" : "Confirmed",
    notes: String(data.get("notes") || "No notes"),
    confirmationStatus: "Email + text sent",
    reminderStatus: "Scheduled",
    reminderDate: dayBefore(date),
    orderId: findOrderByNumber(String(data.get("orderNumber") || ""))?.id || "",
  });
  state.selectedCustomerId = customer.id;
  state.toast = publicMode
    ? "Booking request sent. Email and text confirmation sent."
    : "Staff booking created. Email and text confirmation sent.";
  saveState();
  render();
}

function handleCustomCommsSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const customerId = String(data.get("customerId") || "");
  const customer = getCustomer(customerId);
  const message = String(data.get("message") || "").trim();
  if (!message) return;
  state.customComms = state.customComms || [];
  state.customComms.unshift({
    id: createId("comm"),
    customerId: customer.id,
    channel: String(data.get("channel") || "Email + text"),
    direction: String(data.get("direction") || "Outbound"),
    message,
    date: DEMO_TODAY,
    staff: currentStaffName(),
  });
  state.toast = `Logged communication for ${customer.name}.`;
  saveState();
  render();
}

function handleStaffLoginSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("staffName") || "").trim();
  if (!name) return;
  selectStaff(name, "senior");
}

function handleTemplateEditSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const template = (state.communicationTemplates || []).find((item) => item.id === form.dataset.templateForm);
  if (!template) return;
  const data = new FormData(form);
  template.name = String(data.get("name") || template.name).trim();
  template.channel = String(data.get("channel") || template.channel).trim();
  template.body = String(data.get("body") || template.body).trim();
  state.toast = `${template.name} template updated.`;
  saveState();
  render();
}

function handleTemplateAddSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  const body = String(data.get("body") || "").trim();
  if (!name || !body) return;
  state.communicationTemplates = state.communicationTemplates || [];
  state.communicationTemplates.push({
    id: createId("tpl"),
    name,
    channel: String(data.get("channel") || "Email + text"),
    body,
  });
  state.toast = `${name} template added.`;
  saveState();
  render();
}

function handleFittingRecordSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const order = state.orders.find((item) => item.id === form.dataset.fittingForm);
  if (!order) return;
  const data = new FormData(form);
  const priority = data.get("priority") === "on";
  const priorityDue = priority ? String(data.get("priorityDue") || "") : "";
  const record = {
    notes: String(data.get("notes") || "").trim(),
    additionalNotes: String(data.get("additionalNotes") || "").trim(),
    priority,
    priorityDue,
    updated: todayKey(),
    updatedBy: currentStaffName(),
  };
  if (priority && !priorityDue) {
    state.toast = "Add a due date for the priority note before saving.";
    render();
    return;
  }
  fittingChecklistSections()
    .flatMap((section) => section.items)
    .forEach((item) => {
      record[item.id] = data.get(item.id) === "on";
    });
  order.fittingRecord = record;
  order.history = order.history || [];
  order.history.unshift(`Fitting notes saved ${formatDate(record.updated)} by ${record.updatedBy}`);
  state.toast = `Fitting record saved for ${order.number}.`;
  saveState();
  render();
}

function handleInventorySubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const item = String(data.get("item") || "").trim();
  const category = String(data.get("category") || "Suits").trim();
  const variationType = String(data.get("variationType") || "Size").trim();
  const variationValues = String(data.get("variationValues") || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const color = String(data.get("color") || "").trim();
  const material = String(data.get("material") || "").trim();
  const description = String(data.get("description") || "").trim();
  const qty = Math.max(0, Number(data.get("qty") || 0));
  const alert = Math.max(0, Number(data.get("alert") || 0));
  const committed = Math.max(0, Number(data.get("committed") || 0));
  const price = Math.max(0, Number(data.get("price") || 0));

  if (!item || !category || !variationValues.length) return;

  const newItems = variationValues.map((variationValue) => ({
    id: createId("i"),
    item: `${item} - ${variationType} ${variationValue}`,
    parentItem: item,
    category,
    variationType,
    variationValue,
    color: variationType === "Colour" ? variationValue : color || "-",
    size: variationType === "Size" ? variationValue : "-",
    material: variationType === "Material" ? variationValue : material,
    description,
    qty,
    alert,
    committed,
    price,
  }));

  state.inventory.push(...newItems);
  const allocationResult = allocateAllStock();
  state.modal = null;
  state.toast = `${newItems.length} variation${newItems.length === 1 ? "" : "s"} added under ${item}.${allocationResult.newlyAllocated ? ` ${allocationResult.newlyAllocated} priority order${allocationResult.newlyAllocated === 1 ? "" : "s"} allocated from available stock.` : ""}`;
  saveState();
  render();
}

function handleSettingsUserSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  state.staffUsers = state.staffUsers || [];
  if (state.staffUsers.some((user) => user.name.toLowerCase() === name.toLowerCase())) {
    state.toast = `${name} is already a user.`;
    render();
    return;
  }
  state.staffUsers.push({
    id: createId("u"),
    name,
    role: String(data.get("role") || "Staff"),
    financeAccess: data.get("financeAccess") === "on",
    status: "Active",
  });
  state.staffMembers = [...new Set([...(state.staffMembers || []), name])];
  state.toast = `${name} added to staff users.`;
  saveState();
  render();
}

function handleSettingsThemeSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.settings = { ...seedState.settings, ...(state.settings || {}), theme: String(data.get("theme") || "Apple clean") };
  state.toast = `${state.settings.theme} theme selected.`;
  saveState();
  render();
}

function handleSettingsRulesSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.settings = {
    ...seedState.settings,
    ...(state.settings || {}),
    bookingWindowDays: Math.max(1, Number(data.get("bookingWindowDays") || 14)),
    defaultReminder: String(data.get("defaultReminder") || "Day before"),
  };
  state.toast = "Booking rules updated.";
  saveState();
  render();
}

function handleSettingsStockSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.settings = {
    ...seedState.settings,
    ...(state.settings || {}),
    stockAllocationDay: String(data.get("stockAllocationDay") || "Tuesday"),
    stockAllocationMonths: Math.max(1, Number(data.get("stockAllocationMonths") || STOCK_ALLOCATION_MONTHS)),
    fittingPaymentTarget: Math.min(100, Math.max(0, Number(data.get("fittingPaymentTarget") || 50))),
  };
  allocateAllStock();
  state.toast = "Order and inventory rules updated.";
  saveState();
  render();
}

function handleSettingsFinanceSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  state.settings = {
    ...seedState.settings,
    ...(state.settings || {}),
    financeAccess: String(data.get("financeAccess") || "Owner only"),
    invoicePassword: String(data.get("invoicePassword") || FINANCE_PASSWORD).trim() || FINANCE_PASSWORD,
  };
  state.toast = "Finance settings updated.";
  saveState();
  render();
}

function handleFinanceAccessSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const password = String(data.get("password") || "");
  if (password !== appSetting("invoicePassword", FINANCE_PASSWORD)) {
    state.toast = "Incorrect finance password.";
    saveState();
    render();
    return;
  }
  state.financeUnlocked = true;
  state.toast = "Invoices unlocked for this browser session.";
  saveState();
  render();
}

function lockFinance() {
  state.financeUnlocked = false;
  state.toast = "Financial information is locked.";
  saveState();
  render();
}

function addCustomer(customer) {
  const newCustomer = {
    id: createId("c"),
    name: customer.name,
    phone: customer.phone,
    email: customer.email,
    address: "Not collected",
    event: customer.event,
    lastVisit: "2026-05-01",
    notes: customer.notes,
    measurements: {
      chest: "-",
      waist: "-",
      hips: "-",
      inseam: "-",
      sleeve: "-",
      neck: "-",
      shoulder: "-",
      height: "-",
    },
  };
  state.customers.push(newCustomer);
  return newCustomer;
}

function updateOrderStatus(orderId, status) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const previousStatus = order.status;
  order.status = normaliseOrderStatus(status);
  if (order.status === "Ready") order.readyLocation = order.readyLocation || "in-store";
  order.updated = "2026-05-01";
  order.tailor = order.status === "At Tailor" ? "Aziz Tailoring" : order.status === "Ready for collection" ? "Returned" : order.tailor;
  order.history.push(`${order.status} 1 May by ${currentStaffName()}`);
  if (order.inventoryItemId) {
    const item = state.inventory.find((stock) => stock.id === order.inventoryItemId);
    if (item) {
      if (!["Collected", "Cancelled"].includes(previousStatus) && ["Collected", "Cancelled"].includes(order.status)) {
        item.committed = Math.max(0, Number(item.committed || 0) - 1);
        order.stockStatus = "Released";
      }
      allocateStockForItem(item);
    }
  }
  state.toast = `${order.number} moved to ${order.status} by ${currentStaffName()}.`;
  saveState();
  render();
}

function updateOrderField(orderId, field, value) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order[field] = value;
  order.updated = "2026-05-01";
  order.history = order.history || [];
  order.history.push(`${titleCase(field)} updated 1 May by ${currentStaffName()}`);
  if (field === "due") {
    const invoice = state.invoices.find((item) => item.orderId === order.id);
    if (invoice) invoice.dueDate = value;
    if (order.inventoryItemId) {
      const item = state.inventory.find((stock) => stock.id === order.inventoryItemId);
      if (item) allocateStockForItem(item);
    }
  }
  state.toast = `${order.number} ${titleCase(field).toLowerCase()} updated.`;
  saveState();
  render();
}

function createBookingForCustomer(customerId) {
  const customer = getCustomer(customerId);
  const date = "2026-05-03";
  state.appointments.push({
    id: createId("a"),
    customerId,
    name: customer.name,
    type: "Measurements",
    date,
    time: "12:00",
    staff: currentStaffName(),
    status: "Confirmed",
    notes: "Created from customer profile.",
    confirmationStatus: "Email + text sent",
    reminderStatus: "Scheduled",
    reminderDate: dayBefore(date),
  });
  state.currentView = "bookings";
  state.modal = null;
  state.toast = `Booking created for ${customer.name} and assigned to ${currentStaffName()}.`;
  saveState();
  render();
}

function updateAppointmentStatus(id, status) {
  const appointment = state.appointments.find((item) => item.id === id);
  if (!appointment) return;
  appointment.status = status;
  state.toast = `${appointment.name}'s appointment is now ${status.toLowerCase()}.`;
  saveState();
  render();
}

function sendAppointmentReminder(id) {
  const appointment = state.appointments.find((item) => item.id === id);
  if (!appointment) return;
  appointment.reminderStatus = "Manual reminder sent";
  appointment.reminderDate = "2026-05-01";
  state.toast = `Manual reminder marked as sent for ${appointment.name}.`;
  saveState();
  render();
}

function moveCalendar(direction) {
  const mode = state.calendarMode || "day";
  const amount = mode === "month" ? direction * 30 : mode === "week" ? direction * 7 : direction;
  state.calendarDate = addDays(state.calendarDate || "2026-05-01", amount);
  saveState();
  render();
}

function scheduleNoSaleFollowUp(appointmentId) {
  const appointment = state.appointments.find((item) => item.id === appointmentId);
  if (!appointment) return;
  const customer = getCustomer(appointment.customerId);
  const due = addDays(appointment.date, 3);
  appointment.status = "Attended";
  appointment.outcome = "No purchase - follow-up scheduled";
  const alreadyScheduled = (state.followUps || []).some((followUp) => followUp.appointmentId === appointmentId);
  if (!alreadyScheduled) {
    state.followUps = state.followUps || [];
    state.followUps.unshift({
      id: createId("f"),
      appointmentId,
      customerId: customer.id,
      name: customer.name,
      due,
      channel: "Email + text",
      reason: "No purchase after consultation",
      status: "Scheduled",
    });
  }
  state.toast = `Follow-up scheduled for ${customer.name} on ${formatDate(due)}.`;
  saveState();
  render();
}

function collectToHalf(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const staffName = currentStaffName();
  const target = Math.ceil(order.total / 2);
  const amount = Math.max(target - order.paid, 0);
  if (amount === 0) {
    state.toast = `${order.number} has already reached 50%.`;
    saveState();
    render();
    return;
  }
  const method = prompt("Payment method: cash, card, bank transfer, or other.", "Card");
  if (!method) return;
  order.paid += amount;
  order.history.push(`50% payment reached 1 May`);
  const invoice = state.invoices.find((item) => item.orderId === order.id);
  if (invoice) {
    const payments = invoicePayments(invoice);
    invoice.paid = Math.min(invoice.total, invoice.paid + amount);
    invoice.method = method;
    invoice.payments = payments;
    invoice.payments.push({
      amount,
      method,
      date: "2026-05-01",
      createdBy: staffName,
    });
  }
  state.toast = `Collected ${money(amount)} by ${method} so ${order.number} has reached 50%. Staff: ${staffName}.`;
  saveState();
  render();
}

function bookCollection(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  const customer = getCustomer(order.customerId);
  const collectionDate = order.collectionDate || addDays(order.due, 1);
  order.collectionDate = collectionDate;
  order.collectionTime = order.collectionTime || "15:00";
  order.history.push(`Collection booked ${formatDate(collectionDate)}`);
  const existing = state.appointments.find((appt) => appt.orderId === order.id && appt.type === "Collection");
  if (!existing) {
    state.appointments.push({
      id: createId("a"),
      customerId: customer.id,
      name: customer.name,
      type: "Collection",
      date: collectionDate,
      time: order.collectionTime,
      staff: currentStaffName(),
      status: "Confirmed",
      notes: `Collection booked after fitting for ${order.number}.`,
      confirmationStatus: "Email + text sent",
      reminderStatus: "Scheduled",
      reminderDate: dayBefore(collectionDate),
      orderId: order.id,
    });
  }
  state.toast = `Collection booked for ${customer.name} on ${formatDate(collectionDate)}.`;
  saveState();
  render();
}

function adjustStock(id, amount) {
  const item = state.inventory.find((stock) => stock.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + amount);
  const allocationResult = allocateStockForItem(item);
  state.toast = `${item.item} stock is now ${item.qty}.${allocationResult.newlyAllocated ? ` ${allocationResult.newlyAllocated} priority order${allocationResult.newlyAllocated === 1 ? "" : "s"} now allocated.` : ""}`;
  saveState();
  render();
}

function updateStockQuantity(id, value) {
  const item = state.inventory.find((stock) => stock.id === id);
  if (!item) return;
  item.qty = Math.max(0, Number(value) || 0);
  const allocationResult = allocateStockForItem(item);
  state.toast = `${item.item} stock updated to ${item.qty}.${allocationResult.newlyAllocated ? ` ${allocationResult.newlyAllocated} priority order${allocationResult.newlyAllocated === 1 ? "" : "s"} now allocated.` : ""}`;
  saveState();
  render();
}

function updateStockAlert(id, value) {
  const item = state.inventory.find((stock) => stock.id === id);
  if (!item) return;
  item.alert = Math.max(0, Number(value) || 0);
  state.toast = `${item.item} low stock alert updated to ${item.alert}.`;
  saveState();
  render();
}

function updateStockPrice(id, value) {
  const item = state.inventory.find((stock) => stock.id === id);
  if (!item) return;
  item.price = Math.max(0, Number(value) || 0);
  state.toast = `${item.item} price updated to ${money(item.price)}.`;
  saveState();
  render();
}

function recordPayment(invoiceId) {
  const invoice = state.invoices.find((item) => item.id === invoiceId);
  if (!invoice) return;
  const balance = invoice.total - invoice.paid;
  const amount = Number(prompt(`Record payment amount. Balance due is ${money(balance)}.`, String(balance)));
  if (!Number.isFinite(amount) || amount <= 0) return;
  const method = prompt("Payment method: cash, card, bank transfer, or other.", invoice.method || "Card");
  if (!method) return;
  const staffName = prompt("Staff name for this payment.", currentStaffName());
  if (!staffName) return;
  const applied = Math.min(amount, balance);
  const payments = invoicePayments(invoice);
  invoice.paid += applied;
  invoice.method = method;
  invoice.createdBy = invoice.createdBy || staffName;
  invoice.payments = payments;
  invoice.payments.push({
    amount: applied,
    method,
    date: "2026-05-01",
    createdBy: staffName,
  });
  const order = state.orders.find((item) => item.id === invoice.orderId);
  if (order) order.paid = Math.min(order.total, order.paid + applied);
  state.toast = `Recorded ${money(applied)} by ${method} on ${invoice.number}. Staff: ${staffName}.`;
  saveState();
  render();
}

function getCustomer(id) {
  return state.customers.find((customer) => customer.id === id) || state.customers[0];
}

function orderMeasurements(order) {
  const customer = getCustomer(order.customerId);
  return order.measurements || customer.measurements || {
    chest: "-",
    waist: "-",
    hips: "-",
    inseam: "-",
    sleeve: "-",
    neck: "-",
    shoulder: "-",
    height: "-",
  };
}

function invoicePayments(invoice) {
  if (!invoice) return [];
  if (Array.isArray(invoice.payments) && invoice.payments.length > 0) return invoice.payments;
  if (invoice.paid <= 0) return [];
  return [
    {
      amount: invoice.paid,
      method: invoice.method || "Recorded payment",
      date: invoice.dueDate || "2026-05-01",
    },
  ];
}

function paymentMethodSummary(payments) {
  if (!payments.length) return "No payment yet";
  return [...new Set(payments.map((payment) => payment.method))].join(", ");
}

function measurementSummary(measurements) {
  return Object.entries(measurements || {})
    .filter(([, value]) => value && value !== "-")
    .map(([label, value]) => `${titleCase(label)} ${value}`)
    .join(" • ");
}

function primaryOrderStatus(customerId) {
  const order = state.orders.find((item) => item.customerId === customerId);
  return order ? order.status : "Unprocessed";
}

function invoiceStatus(invoice) {
  if (invoice.paid >= invoice.total) return { label: "Paid", className: "paid" };
  if (invoice.paid > 0) return { label: "Partial", className: "partial" };
  return { label: "Unpaid", className: "unpaid" };
}

function statusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function sortByClosestDueDate(a, b) {
  const aTime = Date.parse(`${a.due || "9999-12-31"}T12:00:00`);
  const bTime = Date.parse(`${b.due || "9999-12-31"}T12:00:00`);
  if (aTime !== bTime) return aTime - bTime;
  return String(a.number || "").localeCompare(String(b.number || ""));
}

function money(value) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function financeMoney(value) {
  return state.financeUnlocked ? money(value) : "Locked";
}

function formatDate(dateString) {
  if (!dateString) return "Not set";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}

function monthKey(dateString) {
  return String(dateString || "").slice(0, 7);
}

function monthLabel(key) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(new Date(`${key}-01T12:00:00`));
}

function titleCase(value) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

function dayBefore(dateString) {
  return addDays(dateString, -1);
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function addMonths(dateString, months) {
  const date = new Date(`${dateString}T12:00:00`);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().slice(0, 10);
}

function weekDates(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  const day = date.getDay() || 7;
  date.setDate(date.getDate() - day + 1);
  return Array.from({ length: 7 }, (_, index) => {
    const next = new Date(date);
    next.setDate(date.getDate() + index);
    return next.toISOString().slice(0, 10);
  });
}

function monthGridDates(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  const first = new Date(date.getFullYear(), date.getMonth(), 1, 12);
  const startDay = first.getDay() || 7;
  first.setDate(first.getDate() - startDay + 1);
  return Array.from({ length: 42 }, (_, index) => {
    const next = new Date(first);
    next.setDate(first.getDate() + index);
    return next.toISOString().slice(0, 10);
  });
}

function weekdayName(dateString) {
  return new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(new Date(`${dateString}T12:00:00`));
}

function nextDocumentNumber(prefix, records, key, start) {
  const next = records.reduce((highest, record) => {
    const match = String(record[key] || "").match(new RegExp(`^${prefix}-(\\d+)$`));
    return match ? Math.max(highest, Number(match[1])) : highest;
  }, start - 1);
  return `${prefix}-${next + 1}`;
}

function createId(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function icon(name) {
  const icons = {
    dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="7" height="8" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="15" width="7" height="6" rx="1"></rect></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M7 2v4M17 2v4M3 9h18"></path><rect x="3" y="5" width="18" height="16" rx="2"></rect></svg>`,
    more: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="5" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="19" cy="12" r="1.5"></circle></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path><path d="m4 8 8 5 8-5"></path></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    package: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m21 8-9-5-9 5 9 5 9-5Z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path></svg>`,
    ruler: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m16 2 6 6L8 22l-6-6L16 2Z"></path><path d="m7 17 2 2M10 14l2 2M13 11l2 2M16 8l2 2"></path></svg>`,
    invoice: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2-2-1.4V5a2 2 0 0 1 2-2Z"></path><path d="M8 8h8M8 12h8M8 16h5"></path></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z"></path><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.14.39.36.74.66 1 .3.26.69.4 1.1.4H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51.6Z"></path></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"></path><path d="M3 21v-5h5"></path><path d="M3 12A9 9 0 0 1 18.3 5.6L21 8"></path><path d="M21 3v5h-5"></path></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 5v14M5 12h14"></path></svg>`,
    minus: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 12h14"></path></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m20 6-11 11-5-5"></path></svg>`,
    back: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="m15 18-6-6 6-6"></path></svg>`,
    coin: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v8M9 10h4.5a2 2 0 0 1 0 4H10"></path></svg>`,
  };
  return icons[name] || icons.dashboard;
}

function tuxMark() {
  return `
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M22 8 32 25 42 8l12 8-6 40H16l-6-40 12-8Z" fill="#202124"/>
      <path d="M25 9 32 25l7-16M26 55V27l6 8 6-8v28" stroke="#d7aa49" stroke-width="3" stroke-linejoin="round"/>
      <path d="M28 42h8" stroke="#f6f0df" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `;
}

function tuxVisual() {
  return `
    <svg width="170" height="128" viewBox="0 0 220 168" fill="none" aria-hidden="true">
      <rect x="18" y="18" width="184" height="132" rx="8" fill="#ffffff" stroke="#d1c4aa"/>
      <path d="M72 38 110 78 148 38l28 22-18 74H62L44 60l28-22Z" fill="#202124"/>
      <path d="M83 41 110 82l27-41M94 134V88l16 20 16-20v46" stroke="#d7aa49" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="110" cy="110" r="4" fill="#f4ead5"/>
      <circle cx="110" cy="125" r="4" fill="#f4ead5"/>
      <path d="M52 60h-18M168 60h18M66 134h-20M154 134h20" stroke="#b88a35" stroke-width="5" stroke-linecap="round"/>
    </svg>
  `;
}

render();
