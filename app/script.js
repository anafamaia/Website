//biblioteca para fazer resize das imageMap
window.addEventListener("load", function () {
  imageMapResize();
});

//imagemap funcional em mobile
let desktop = document.querySelector("#imagemap-desktop");
let idAboutMe = document.querySelector("#aboutMeDesktop");
let idProjects = document.querySelector("#projectsDesktop");
let idCurious = document.querySelector("#curiousDesktop");

if (window.innerWidth <= 992) {
  desktop.name = "imagemap-mobile";
  idAboutMe.coords = "411,1843,1104,1840,1104,1342,1017,1129,433,1129,411,1153";
  idProjects.coords =
    "1905,3245,2627,3245,2627,2888,2497,2769,2497,2622,2111,2622,1905,2898";
  idCurious.coords = "433,4804,1104,4804,1104,4446,939,4051,557,4051,433,4446";
}

// window.addEventListener("load", function () {
//   initIntroStars(); // Inicializa as estrelas na animação do GIF

//   setTimeout(function () {
//     const loading = document.getElementsByClassName("loading");
//     const animation = document.getElementsByClassName("animation");

//     // Diminui o tamanho do GIF e aplica fade-out
//     animation.style.transform = "scale(0.5)";
//     animation.style.opacity = "0";

//     // Aguarda a transição do GIF antes de ocultar o container
//     setTimeout(function () {
//       loading.classList.add("hidden");
//     }, 2000); // 2000ms = 2 segundos para corresponder ao tempo de transição
//   }, 4000); // 4000ms = 4 segundos para exibir o GIF inicialmente
// });

//modal About Me
function openModalAbout() {
  document.getElementById("modal-about").style.display = "block";
}

function closeModalAbout() {
  document.getElementById("modal-about").style.display = "none";
}

let modalAbout = document.querySelector("#modal-about");
let closeBtnAbout = document.querySelector("#modal-about .btn-close");

modalAbout.addEventListener("click", function (event) {
  if (event.target === modalAbout) {
    closeModalAbout();
  }
});

closeBtnAbout.addEventListener("click", closeModalAbout);

//Pop-up About me
let aboutPop = document.querySelector(".about-pop");

idAboutMe.addEventListener("mouseenter", function () {
  aboutPop.style.display = "block";
});

idAboutMe.addEventListener("mouseleave", function () {
  aboutPop.style.display = "none";
});

//modal Projects
function openModalProjects() {
  document.getElementById("modal-projects").style.display = "block";
}

function closeModalProjects() {
  document.getElementById("modal-projects").style.display = "none";
}

let modalProjects = document.querySelector("#modal-projects");
let closeBtnProjects = document.querySelector("#modal-projects .btn-close");

modalProjects.addEventListener("click", function (event) {
  if (event.target === modalProjects) {
    closeModalProjects();
  }
});

closeBtnProjects.addEventListener("click", closeModalProjects);

//Pop-up Projects
let projectsPop = document.querySelector(".projects-pop");

idProjects.addEventListener("mouseenter", function () {
  projectsPop.style.display = "block";
});

idProjects.addEventListener("mouseleave", function () {
  projectsPop.style.display = "none";
});

//modal Curious
function openModalCurious() {
  document.getElementById("modal-curious").style.display = "block";
}

function closeModalCurious() {
  document.getElementById("modal-curious").style.display = "none";
}

let modalCurious = document.querySelector("#modal-curious");
let closeBtnCurious = document.querySelector("#modal-curious .btn-close");

modalCurious.addEventListener("click", function (event) {
  if (event.target === modalCurious) {
    closeModalCurious();
  }
});

closeBtnCurious.addEventListener("click", closeModalCurious);

//Pop-up Curious
let curiousPop = document.querySelector(".curious-pop");

idCurious.addEventListener("mouseenter", function () {
  curiousPop.style.display = "block";
});

idCurious.addEventListener("mouseleave", function () {
  curiousPop.style.display = "none";
});

//modal Filipa's Town
function openModalFilipasTown() {
  document.getElementById("modal-filipas-town").style.display = "block";
}

function closeModalFilipasTown() {
  document.getElementById("modal-filipas-town").style.display = "none";
  document.getElementById("modal-projects").style.display = "block";
}

let modalFilipasTown = document.querySelector("#modal-filipas-town");
let closeBtnFilipasTown = document.querySelector(
  "#modal-filipas-town .btn-close"
);

modalFilipasTown.addEventListener("click", function (event) {
  if (event.target === modalFilipasTown) {
    closeModalFilipasTown();
  }
});

closeBtnFilipasTown.addEventListener("click", closeModalFilipasTown);

//modal Illustration
function openModalIllustration() {
  document.getElementById("modal-illustration").style.display = "block";
}

function closeModalIllustration() {
  document.getElementById("modal-illustration").style.display = "none";
  document.getElementById("modal-projects").style.display = "block";
}

let modalIllustration = document.querySelector("#modal-illustration");
let closeBtnIllustration = document.querySelector(
  "#modal-illustration .btn-close"
);

modalIllustration.addEventListener("click", function (event) {
  if (event.target === modalIllustration) {
    closeModalIllustration();
  }
});

closeBtnIllustration.addEventListener("click", closeModalIllustration);

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

let githubProjects = document.querySelector(".github-project");

githubProjects.addEventListener("mouseenter", function () {
  githubProjects.src = "images/SVG/github-ver.svg";
});

githubProjects.addEventListener("mouseleave", function () {
  githubProjects.src = "images/SVG/github.svg";
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
  chat.addEventListener("mouseover", function () {
    chat.src = "images/SVG/chat-ver.svg";
  });

  chat.addEventListener("mouseleave", function () {
    chat.src = "images/SVG/chat.svg";
  });
});

//atualizar data no footer
document.getElementById("year").textContent = new Date().getFullYear();

//mudar cor texto figma protótipo
let figmaTextDes = document.querySelector(".link-text-figma-des");

figmaTextDes.addEventListener("mouseenter", function () {
  figmaTextDes.src = "images/SVG/figma-proto-des-ver.svg";
});

figmaTextDes.addEventListener("mouseleave", function () {
  figmaTextDes.src = "images/SVG/figma-proto-des.svg";
});

let figmaTextMob = document.querySelector(".link-text-figma-mob");

figmaTextMob.addEventListener("mouseenter", function () {
  figmaTextMob.src = "images/SVG/figma-proto-mob-ver.svg";
});

figmaTextMob.addEventListener("mouseleave", function () {
  figmaTextMob.src = "images/SVG/figma-proto-mob.svg";
});
