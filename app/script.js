//biblioteca para fazer resize das imageMap
window.addEventListener("load", function () {
  imageMapResize();
});

//modal About Me
function openModalAbout(modalAbout) {
  document.getElementById("modal-about").style.display = "block";
}

function closeModalAbout(modalAbout) {
  document.getElementById("modal-about").style.display = "none";
}

let modalAbout = document.querySelector("#modal-about");
modalAbout.addEventListener("click", openModalAbout);

let closeBtn = document.querySelector("#modal-about .btn-close");
modalAbout.addEventListener("click", closeModalAbout);

//modal Projects
function openModalProjects(modalProjects) {
  document.getElementById("modal-projects").style.display = "block";
}

function closeModalProjects(modalProjects) {
  document.getElementById("modal-projects").style.display = "none";
}

let modalProjects = document.querySelector("#modal-projects");
modalProjects.addEventListener("click", openModalProjects);

let closeBtn2 = document.querySelector("#modal-projects .btn-close");
modalProjects.addEventListener("click", closeModalProjects);

//modal Curious
function openModalCurious(modalCurious) {
  document.getElementById("modal-curious").style.display = "block";
}

function closeModalCurious(modalCurious) {
  document.getElementById("modal-curious").style.display = "none";
}

let modalCurious = document.querySelector("#modal-curious");
modalCurious.addEventListener("click", openModalCurious);

let closeBtn3 = document.querySelector("#modal-curious .btn-close");
modalCurious.addEventListener("click", closeModalCurious);

//modal Filipa's Town
function openModalFilipasTown(modalFilipasTown) {
  document.getElementById("modal-filipas-town").style.display = "block";
}

function closeModalFilipasTown(modalFilipasTown) {
  document.getElementById("modal-filipas-town").style.display = "none";
  document.getElementById("modal-projects").style.display = "block";
}

let modalFilipasTown = document.querySelector("#modal-filipas-town");
modalFilipasTown.addEventListener("click", openModalFilipasTown);

let closeBtn4 = document.querySelector("#modal-filipas-town .btn-close");
modalFilipasTown.addEventListener("click", closeModalFilipasTown);

//modal Illustration
function openModalIllustration(modalIllustration) {
  document.getElementById("modal-illustration").style.display = "block";
}

function closeModalIllustration(modalIllustration) {
  document.getElementById("modal-illustration").style.display = "none";
  document.getElementById("modal-projects").style.display = "block";
}

let modalIllustration = document.querySelector("#modal-illustration");
modalIllustration.addEventListener("click", openModalIllustration);

let closeBtn5 = document.querySelector("#modal-illustration .btn-close");
modalIllustration.addEventListener("click", closeModalIllustration);

//mudar cor dos icons das redes sociais

let linkedin = document.querySelector(".linkedin");

linkedin.addEventListener("mouseenter", function () {
  linkedin.src = "images/SVG/linkedin-ver.svg";
});

linkedin.addEventListener("mouseleave", function () {
  linkedin.src = "images/SVG/linkedin.svg";
});

let github = document.querySelector(".github");

github.addEventListener("mouseenter", function () {
  github.src = "images/SVG/github-ver.svg";
});

github.addEventListener("mouseleave", function () {
  github.src = "images/SVG/github.svg";
});

let behance = document.querySelector(".behance");

behance.addEventListener("mouseenter", function () {
  behance.src = "images/SVG/behance-ver.svg";
});

behance.addEventListener("mouseleave", function () {
  behance.src = "images/SVG/behance.svg";
});

//mudar cor dos icons dos projetos

let filipasTown = document.querySelector(".filipasTown");

filipasTown.addEventListener("mouseenter", function () {
  filipasTown.src = "images/SVG/filipastown-ver.svg";
});

filipasTown.addEventListener("mouseleave", function () {
  filipasTown.src = "images/SVG/filipastown.svg";
});

let illustration = document.querySelector(".illustration");

illustration.addEventListener("mouseenter", function () {
  illustration.src = "images/SVG/illustration-ver.svg";
});

illustration.addEventListener("mouseleave", function () {
  illustration.src = "images/SVG/illustration.svg";
});

//mudar cor do botão download cv
let downloadCv = document.querySelector(".img-download");

downloadCv.addEventListener("mouseenter", function () {
  downloadCv.src = "images/SVG/downloadcv-ver.svg";
});

downloadCv.addEventListener("mouseleave", function () {
  downloadCv.src = "images/SVG/downloadcv.svg";
});

//mudar cor do botão let's chat!
let letsChat = document.querySelectorAll(".img-chat");

letsChat.forEach(function (chat) {
  chat.addEventListener("mouseenter", function () {
    chat.src = "images/SVG/chat-ver.svg";
  });

  chat.addEventListener("mouseleave", function () {
    chat.src = "images/SVG/chat.svg";
  });
});

//atualizar data no footer
document.getElementById("year").textContent = new Date().getFullYear();

//imagemap funcional em mobile
let desktop = document.querySelector("#imagemap-desktop");

let idAboutMe = document.querySelector("#aboutMeDesktop");

let idProjects = document.querySelector("#projectsDesktop");

let idCurious = document.querySelector("#curiousDesktop");

if (window.innerWidth <= 1023) {
  desktop.name = "imagemap-mobile";
  idAboutMe.coords = "411,1843,1104,1840,1104,1342,1017,1129,433,1129,411,1153";
  idProjects.coords =
    "1905,3245,2627,3245,2627,2888,2497,2769,2497,2622,2111,2622,1905,2898";
  idCurious.coords = "433,4804,1104,4804,1104,4446,939,4051,557,4051,433,4446";
}
