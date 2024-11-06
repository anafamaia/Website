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

//mudar cor dos icons das redes sociais

const linkedin = document.querySelector(".linkedin");

linkedin.addEventListener("mouseenter", function () {
  linkedin.src = "images/SVG/linkedin-ver.svg";
});

linkedin.addEventListener("mouseleave", function () {
  linkedin.src = "images/SVG/linkedin.svg";
});

const github = document.querySelector(".github");

github.addEventListener("mouseenter", function () {
  github.src = "images/SVG/github-ver.svg";
});

github.addEventListener("mouseleave", function () {
  github.src = "images/SVG/github.svg";
});

const behance = document.querySelector(".behance");

behance.addEventListener("mouseenter", function () {
  behance.src = "images/SVG/behance-ver.svg";
});

behance.addEventListener("mouseleave", function () {
  behance.src = "images/SVG/behance.svg";
});

//mudar cor dos icons dos projetos

const filipasTown = document.querySelector(".filipasTown");

filipasTown.addEventListener("mouseenter", function () {
  filipasTown.src = "images/SVG/filipastown-ver.svg";
});

filipasTown.addEventListener("mouseleave", function () {
  filipasTown.src = "images/SVG/filipastown.svg";
});

const illustration = document.querySelector(".illustration");

illustration.addEventListener("mouseenter", function () {
  illustration.src = "images/SVG/illustration-ver.svg";
});

illustration.addEventListener("mouseleave", function () {
  illustration.src = "images/SVG/illustration.svg";
});
