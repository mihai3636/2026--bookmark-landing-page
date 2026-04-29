console.log("Hello world!!");

const btnNavMobile = document.getElementById("btnNavMobile");
const btnAccordionHeader1 = document.getElementById("accordion-header-1");

console.log(btnNavMobile);

btnNavMobile.addEventListener("click", () => {
  let currentStatus = document.body.dataset.open;
  if (currentStatus == null) currentStatus = "false";

  document.body.dataset.open = currentStatus === "false" ? "true" : "false";
});

btnAccordionHeader1.addEventListener("click", () => {
  console.log("Click");
  const isExpanded =
    btnAccordionHeader1.getAttribute("aria-expanded") === "true";
  btnAccordionHeader1.setAttribute("aria-expanded", String(!isExpanded));
});
