alert("olá");

// Função para abrir o modal
function openModal() {
  console.log("cucu");
  document.getElementById(modalId).style.display = "block";
}

// Função para fechar o modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Fecha o modal se o utilizador clicar fora do conteúdo
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

let modal1 = document.querySelector("#modal1");
modal1.addEventListener("click", openModal);
