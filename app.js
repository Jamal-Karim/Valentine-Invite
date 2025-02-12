document.querySelector(".yes").addEventListener("click", function () {
  window.location.href = "yes.html";
});

let scaleFactor = 1;

document.querySelector(".no").addEventListener("click", () => {
  const yesButton = document.querySelector(".yes");
  scaleFactor *= 3;
  yesButton.style.transform = `scale(${scaleFactor})`;
});
