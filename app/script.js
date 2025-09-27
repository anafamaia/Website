//biblioteca para fazer resize das imageMap
window.addEventListener("load", function () {
  imageMapResize();
});

//variáveis
let desktop = document.querySelector("#imagemap-desktop");
let idAboutMe = document.querySelector("#aboutMeDesktop");
let idProjects = document.querySelector("#projectsDesktop");
let idCurious = document.querySelector("#curiousDesktop");
let aboutPop = document.querySelector(".about-pop");
let projectsPop = document.querySelector(".projects-pop");
let curiousPop = document.querySelector(".curious-pop");
let modalAbout = document.querySelector("#modal-about");
let closeBtnAbout = document.querySelector("#modal-about .btn-close");
let modalProjects = document.querySelector("#modal-projects");
let closeBtnProjects = document.querySelector("#modal-projects .btn-close");
let modalCurious = document.querySelector("#modal-curious");
let closeBtnCurious = document.querySelector("#modal-curious .btn-close");
let modalFilipasTown = document.querySelector("#modal-filipas-town");
let closeBtnFilipasTown = document.querySelector(
  "#modal-filipas-town .btn-close"
);
let modalVodafone = document.querySelector("#modal-vodafone");
let closeBtnVodafone = document.querySelector("#modal-vodafone .btn-close");
let modal = document.querySelector("#modal");
let closeBtn = document.querySelector("#modal .btn-close");
let linkedin = document.querySelector(".linkedin");
let github = document.querySelector(".github");
let behance = document.querySelector(".behance");
let githubProjects = document.querySelector(".github-project");
let filipasTown = document.querySelector(".filipasTown");
let vodafone = document.querySelector(".vodafone");
let downloadCv = document.querySelector(".img-download");
let letsChat = document.querySelectorAll(".img-chat");
let accessibilityBtn = document.querySelector(".widget");
let preloader = document.getElementById("preloader");
let figmaProtoVodafone = document.querySelector(".link-figma-proto-img");
let behanceProject = document.querySelector(".behance-project");
let modalFounders = document.querySelector("#modal-founders");
let closeBtnFounders = document.querySelector("#modal-founders .btn-close");
let founders = document.querySelector(".founders");

//imagemap funcional em mobile
if (window.innerWidth <= 1100) {
  desktop.name = "imagemap-mobile";
  idAboutMe.coords = "411,1843,1104,1840,1104,1342,1017,1129,433,1129,411,1153";
  idProjects.coords =
    "1905,3245,2627,3245,2627,2888,2497,2769,2497,2622,2111,2622,1905,2898";
  idCurious.coords = "433,4804,1104,4804,1104,4446,939,4051,557,4051,433,4446";
  preloader.src = "images/loading-mobile.gif";
}

// animação loading
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader.style.transition = "opacity 1s";
    preloader.style.opacity = 0;

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }, 1200);
});

//modal About Me
function openModalAbout() {
  document.getElementById("modal-about").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalAbout() {
  document.getElementById("modal-about").style.display = "none";
  document.body.classList.remove("no-scroll");
}

modalAbout.addEventListener("click", function (event) {
  if (event.target === modalAbout) {
    closeModalAbout();
  }
});

closeBtnAbout.addEventListener("click", closeModalAbout);

//modal Projects
function openModalProjects() {
  document.getElementById("modal-projects").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalProjects() {
  document.getElementById("modal-projects").style.display = "none";
  document.body.classList.remove("no-scroll");
}

modalProjects.addEventListener("click", function (event) {
  if (event.target === modalProjects) {
    closeModalProjects();
  }
});

closeBtnProjects.addEventListener("click", closeModalProjects);

//modal Curious
function openModalCurious() {
  document.getElementById("modal-curious").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalCurious() {
  document.getElementById("modal-curious").style.display = "none";
  document.body.classList.remove("no-scroll");
}

modalCurious.addEventListener("click", function (event) {
  if (event.target === modalCurious) {
    closeModalCurious();
  }
});

closeBtnCurious.addEventListener("click", closeModalCurious);

//pop-ups About me, Projects e Curious

if (window.innerWidth > 1100) {
  idAboutMe.addEventListener("mouseenter", function () {
    aboutPop.style.display = "block";
  });

  idAboutMe.addEventListener("mouseleave", function () {
    aboutPop.style.display = "none";
  });

  idProjects.addEventListener("mouseenter", function () {
    projectsPop.style.display = "block";
  });

  idProjects.addEventListener("mouseleave", function () {
    projectsPop.style.display = "none";
  });

  idCurious.addEventListener("mouseenter", function () {
    curiousPop.style.display = "block";
  });

  idCurious.addEventListener("mouseleave", function () {
    curiousPop.style.display = "none";
  });
}

//modal Filipa's Town
function openModalFilipasTown() {
  document.getElementById("modal-filipas-town").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalFilipasTown() {
  document.getElementById("modal-filipas-town").style.display = "none";
  document.getElementById("modal-projects").style.display = "flex";
}

modalFilipasTown.addEventListener("click", function (event) {
  if (event.target === modalFilipasTown) {
    closeModalFilipasTown();
  }
});

closeBtnFilipasTown.addEventListener("click", closeModalFilipasTown);

//modal Vodafone project
function openModalVodafone() {
  document.getElementById("modal-vodafone").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalVodafone() {
  document.getElementById("modal-vodafone").style.display = "none";
  document.getElementById("modal-projects").style.display = "flex";
}

modalVodafone.addEventListener("click", function (event) {
  if (event.target === modalVodafone) {
    closeModalVodafone();
  }
});

closeBtnVodafone.addEventListener("click", closeModalVodafone);

//modal Founders project
function openModalFounders() {
  document.getElementById("modal-founders").style.display = "flex";
  document.body.classList.add("no-scroll");
}

function closeModalFounders() {
  document.getElementById("modal-founders").style.display = "none";
  document.getElementById("modal-projects").style.display = "flex";
}

modalFounders.addEventListener("click", function (event) {
  if (event.target === modalFounders) {
    closeModalFounders();
  }
});

closeBtnFounders.addEventListener("click", closeModalFounders);

//mudar cor dos icons das redes sociais
linkedin.addEventListener("mouseenter", function () {
  linkedin.src = "images/SVG/linkedin-ver.svg";
});

linkedin.addEventListener("mouseleave", function () {
  linkedin.src = "images/SVG/linkedin.svg";
});

// linkedin.addEventListener("touchstart", function () {
//   linkedin.src = "images/SVG/linkedin-ver.svg";
// });

// linkedin.addEventListener("touchend", function () {
//   linkedin.src = "images/SVG/linkedin.svg";
// });

github.addEventListener("mouseenter", function () {
  github.src = "images/SVG/github-ver.svg";
});

github.addEventListener("mouseleave", function () {
  github.src = "images/SVG/github.svg";
});

behance.addEventListener("mouseenter", function () {
  behance.src = "images/SVG/behance-ver.svg";
});

behance.addEventListener("mouseleave", function () {
  behance.src = "images/SVG/behance.svg";
});

//mudar cor dos icons dos projetos
filipasTown.addEventListener("mouseenter", function () {
  filipasTown.src = "images/SVG/filipastown-ver.svg";
});

filipasTown.addEventListener("mouseleave", function () {
  filipasTown.src = "images/SVG/filipastown.svg";
});

vodafone.addEventListener("mouseenter", function () {
  vodafone.src = "images/SVG/vodafone-ver.svg";
});

vodafone.addEventListener("mouseleave", function () {
  vodafone.src = "images/SVG/vodafone.svg";
});

founders.addEventListener("mouseenter", function () {
  founders.src = "images/SVG/f2-ver.svg";
});

founders.addEventListener("mouseleave", function () {
  founders.src = "images/SVG/f2.svg";
});

//mudar cor botão behance (vodafone project))

behanceProject.addEventListener("mouseenter", function () {
  behanceProject.src = "images/SVG/behance-ver.svg";
});

behanceProject.addEventListener("mouseleave", function () {
  behanceProject.src = "images/SVG/behance.svg";
});

//mudar cor botão Figma (vodafone project))

figmaProtoVodafone.addEventListener("mouseenter", function () {
  figmaProtoVodafone.src = "images/SVG/figma-ver.svg";
});

figmaProtoVodafone.addEventListener("mouseleave", function () {
  figmaProtoVodafone.src = "images/SVG/figma.svg";
});

//mudar cor do botão download cv
downloadCv.addEventListener("mouseenter", function () {
  downloadCv.src = "images/SVG/downloadcv-ver.svg";
});

downloadCv.addEventListener("mouseleave", function () {
  downloadCv.src = "images/SVG/downloadcv.svg";
});

//mudar cor do botão fechar modal
closeBtnAbout.addEventListener("mouseenter", function () {
  closeBtnAbout.style.backgroundImage = "url('../images/SVG/close-ver.svg')";
});

closeBtnAbout.addEventListener("mouseleave", function () {
  closeBtnAbout.style.backgroundImage = "url('../images/SVG/close.svg')";
});

closeBtnProjects.addEventListener("mouseenter", function () {
  closeBtnProjects.style.backgroundImage = "url('../images/SVG/close-ver.svg')";
});

closeBtnProjects.addEventListener("mouseleave", function () {
  closeBtnProjects.style.backgroundImage = "url('../images/SVG/close.svg')";
});

closeBtnCurious.addEventListener("mouseenter", function () {
  closeBtnCurious.style.backgroundImage = "url('../images/SVG/close-ver.svg')";
});

closeBtnCurious.addEventListener("mouseleave", function () {
  closeBtnCurious.style.backgroundImage = "url('../images/SVG/close.svg')";
});

closeBtnFilipasTown.addEventListener("mouseenter", function () {
  closeBtnFilipasTown.style.backgroundImage =
    "url('../images/SVG/close-ver.svg')";
});

closeBtnFilipasTown.addEventListener("mouseleave", function () {
  closeBtnFilipasTown.style.backgroundImage = "url('../images/SVG/close.svg')";
});

closeBtnVodafone.addEventListener("mouseenter", function () {
  closeBtnVodafone.style.backgroundImage = "url('../images/SVG/close-ver.svg')";
});

closeBtnVodafone.addEventListener("mouseleave", function () {
  closeBtnVodafone.style.backgroundImage = "url('../images/SVG/close.svg')";
});

closeBtnFounders.addEventListener("mouseenter", function () {
  closeBtnFounders.style.backgroundImage = "url('../images/SVG/close-ver.svg')";
});

closeBtnFounders.addEventListener("mouseleave", function () {
  closeBtnFounders.style.backgroundImage = "url('../images/SVG/close.svg')";
});

//mudar cor do botão let's chat!
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

// widget de acessibilidade
accessibilityBtn.addEventListener("mouseenter", function () {
  accessibilityBtn.src = "images/accessibility-ver.png";
});

accessibilityBtn.addEventListener("mouseleave", function () {
  accessibilityBtn.src = "images/accessibility.png";
});

// alternar a visibilidade do menu de acessibilidade
function toggleAccessibilityMenu() {
  const menu = document.getElementById("accessibility-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// armazenar o estado de cada modo de acessibilidade
let isDeuteranopia = false;
let isProtanopia = false;
let isTritanopia = false;
let isMonochrome = false;

// alternar os modos de daltonismo
function toggleDeuteranopia() {
  resetFilters();
  isDeuteranopia = !isDeuteranopia;
  document.body.classList.toggle("deuteranopia", isDeuteranopia);
}

function toggleProtanopia() {
  resetFilters();
  isProtanopia = !isProtanopia;
  document.body.classList.toggle("protanopia", isProtanopia);
}

function toggleTritanopia() {
  resetFilters();
  isTritanopia = !isTritanopia;
  document.body.classList.toggle("tritanopia", isTritanopia);
}

function toggleMonochrome() {
  resetFilters();
  isMonochrome = !isMonochrome;
  document.body.classList.toggle("monochrome", isMonochrome);
}

// limpar todos os modos de daltonismo antes de ativar um novo
function resetFilters() {
  document.body.classList.remove(
    "deuteranopia",
    "protanopia",
    "tritanopia",
    "monochrome"
  );
  isDeuteranopia = isProtanopia = isTritanopia = isMonochrome = false;
}

// sair do modo de acessibilidade e restaurar o estado inicial
function resetAccessibility() {
  document.body.classList.remove(
    "deuteranopia",
    "protanopia",
    "tritanopia",
    "monochrome"
  );
  isDeuteranopia = isProtanopia = isTritanopia = isHighContrast = false;
  document.getElementById("accessibility-menu").style.display = "none";
}
