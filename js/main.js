const btnNavMobile = document.getElementById("btnNavMobile");
const btnAccordion1 = document.getElementById("accordion-header-1");
const btnAccordion2 = document.getElementById("accordion-header-2");
const btnAccordion3 = document.getElementById("accordion-header-3");
const btnAccordion4 = document.getElementById("accordion-header-4");

const inputEmailEl = document.getElementById("inputEmail");
const formCtaEl = document.getElementById("formCta");
const inputAccordionEl = document.getElementById("inputAccordion");
const accordionContentEl = document.getElementById("accordionContent");
const iconErrorEl = document.getElementById("iconError");

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

const images = [
  "./images/illustration-features-tab-1.svg",
  "./images/illustration-features-tab-2.svg",
  "./images/illustration-features-tab-3.svg",
];

const btnAccordions = [
  btnAccordion1,
  btnAccordion2,
  btnAccordion3,
  btnAccordion4,
];

console.log(btnNavMobile);

btnNavMobile.addEventListener("click", () => {
  let currentStatus = document.body.dataset.open;
  if (currentStatus == null) currentStatus = "false";

  document.body.dataset.open = currentStatus === "false" ? "true" : "false";
});

btnAccordions.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isExpanded));
  });
});

formCtaEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!inputEmailEl.checkValidity()) {
    inputEmailEl.focus();
    showError();
    return;
  }

  console.log("Submitting");
  inputEmailEl.value = "";
  clearError();
});

initTabs();

function showError() {
  inputAccordionEl.classList.add("bg-secondary");
  inputAccordionEl.classList.add("outline-2");
  inputAccordionEl.classList.add("outline-secondary");
  iconErrorEl.classList.remove("hidden");

  accordionContentEl.classList.remove("grid-rows-[0fr]");
  accordionContentEl.classList.add("grid-rows-[1fr]");
}

function clearError() {
  inputAccordionEl.classList.remove("bg-secondary");
  inputAccordionEl.classList.remove("outline-2");
  inputAccordionEl.classList.remove("outline-secondary");
  iconErrorEl.classList.add("hidden");

  accordionContentEl.classList.remove("grid-rows-[1fr]");
  accordionContentEl.classList.add("grid-rows-[0fr]");
}

function initTabs() {
  const tabsListEl = document.getElementById("tabsList");

  tabsListEl.addEventListener("click", (ev) => {
    const target = ev.target;
    console.log(target);

    const btnEl = target.closest("button[role='tab']");
    if (btnEl == null) return;

    resetTabs();
    hideAllPanels();

    activateTab(btnEl);
    const panelEl = getPanelOfTab(btnEl);
    showPanel(panelEl);
    showImageForTab(btnEl);
  });
}

function showImageForTab(tabEl) {
  const index = Number(tabEl.id.split("-")[1]) - 1;
  const imageEl = document.getElementById("panelImage");

  imageEl.src = images[index];
}

function resetTabs() {
  tabs.forEach((t) => {
    t.setAttribute("aria-selected", "false");
    t.removeAttribute("data-selected");
  });
}

function hideAllPanels() {
  panels.forEach((p) => {
    p.hidden = true;
  });
}

function activateTab(tabEl) {
  tabEl.setAttribute("aria-selected", "true");
  tabEl.dataset.selected = "";
}

function showPanel(panelEl) {
  panelEl.hidden = false;
}

function getPanelOfTab(tabEl) {
  const panel = document.getElementById(tabEl.getAttribute("aria-controls"));
  return panel;
}

// TODO: fix the jumping when changing the images
