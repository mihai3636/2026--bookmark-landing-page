console.log("Hello world!!");

const btnNavMobile = document.getElementById("btnNavMobile");

console.log(btnNavMobile);

btnNavMobile.addEventListener("click", () => {
  let currentStatus = document.body.dataset.open;
  if (currentStatus == null) currentStatus = "false";

  document.body.dataset.open = currentStatus === "false" ? "true" : "false";
});
