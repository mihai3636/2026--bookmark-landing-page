console.log("Hello world!!");

const btnNavMobile = document.getElementById("btnNavMobile");
const btnAccordion1 = document.getElementById("accordion-header-1");
const btnAccordion2 = document.getElementById("accordion-header-2");
const btnAccordion3 = document.getElementById("accordion-header-3");
const btnAccordion4 = document.getElementById("accordion-header-4");

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
