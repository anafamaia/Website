function openModal() {
  console.log("cucu");
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

let modal1 = document.querySelector("#modal1");
modal1.addEventListener("click", openModal);

window.addEventListener("load", function () {
  imageMapResize();
});
