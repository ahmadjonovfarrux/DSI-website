const headerModal = document.querySelector(".header__modal");
const barsBtnIcon = document.getElementById("hiddenIcon");
const closeBtnIcon = document.getElementById("closeBtn");

barsBtnIcon.addEventListener("click", () => {
  headerModal.style.display = "flex";
  headerModal.classList.add("active");
  barsIcon.style.display = "none";
});

closeBtnIcon.addEventListener("click", () => {
  headerModal.style.display = "none";
});
