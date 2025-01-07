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
let modalIllustration = document.querySelector("#modal-illustration");
let closeBtnIllustration = document.querySelector(
  "#modal-illustration .btn-close"
);
let modalVodafone = document.querySelector("#modal-vodafone");
let closeBtnVodafone = document.querySelector(
  "#modal-vodafone .btn-close"
);
let modal = document.querySelector("#modal");
let closeBtn = document.querySelector("#modal .btn-close");
let linkedin = document.querySelector(".linkedin");
let github = document.querySelector(".github");
let behance = document.querySelector(".behance");
let githubProjects = document.querySelector(".github-project");
let filipasTown = document.querySelector(".filipasTown");
let illustration = document.querySelector(".illustration");
let vodafone = document.querySelector(".vodafone");
let downloadCv = document.querySelector(".img-download");
let letsChat = document.querySelectorAll(".img-chat");
let figmaTextDes = document.querySelector(".link-text-figma-des");
let figmaTextMob = document.querySelector(".link-text-figma-mob");
let accessibilityBtn = document.querySelector(".widget");
let preloader = document.getElementById("preloader");

//imagemap funcional em mobile
if (window.innerWidth <= 992) {
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
}

function closeModalAbout() {
  document.getElementById("modal-about").style.display = "none";
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
}

function closeModalProjects() {
  document.getElementById("modal-projects").style.display = "none";
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
}

function closeModalCurious() {
  document.getElementById("modal-curious").style.display = "none";
}

modalCurious.addEventListener("click", function (event) {
  if (event.target === modalCurious) {
    closeModalCurious();
  }
});

closeBtnCurious.addEventListener("click", closeModalCurious);

//pop-ups About me, Projects e Curious

if (window.innerWidth > 992) {
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

//modal Illustration
function openModalIllustration() {
  document.getElementById("modal-illustration").style.display = "flex";
}

function closeModalIllustration() {
  document.getElementById("modal-illustration").style.display = "none";
  document.getElementById("modal-projects").style.display = "flex";
}

modalIllustration.addEventListener("click", function (event) {
  if (event.target === modalIllustration) {
    closeModalIllustration();
  }
});

closeBtnIllustration.addEventListener("click", closeModalIllustration);

// Model for Vodafone project
function openModalVodafone() {
  document.getElementById("modal-vodafone").style.display = "flex";
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

//mudar cor dos icons das redes sociais
linkedin.addEventListener("mouseenter", function () {
  linkedin.src = "images/SVG/linkedin-ver.svg";
});

linkedin.addEventListener("mouseleave", function () {
  linkedin.src = "images/SVG/linkedin.svg";
});

linkedin.addEventListener("touchstart", function () {
  linkedin.src = "images/SVG/linkedin-ver.svg";
});

linkedin.addEventListener("touchend", function () {
  linkedin.src = "images/SVG/linkedin.svg";
});

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

githubProjects.addEventListener("mouseenter", function () {
  githubProjects.src = "images/SVG/github-ver.svg";
});

githubProjects.addEventListener("mouseleave", function () {
  githubProjects.src = "images/SVG/github.svg";
});

//mudar cor dos icons dos projetos
filipasTown.addEventListener("mouseenter", function () {
  filipasTown.src = "images/SVG/filipastown-ver.svg";
});

filipasTown.addEventListener("mouseleave", function () {
  filipasTown.src = "images/SVG/filipastown.svg";
});

illustration.addEventListener("mouseenter", function () {
  illustration.src = "images/SVG/illustration-ver.svg";
});

illustration.addEventListener("mouseleave", function () {
  illustration.src = "images/SVG/illustration.svg";
});

// TODO: Change this to the red version so that it aligns with everything else
vodafone.addEventListener("mouseenter", function () {
  vodafone.src = "images/SVG/vodafone.svg";
});

vodafone.addEventListener("mouseleave", function () {
  vodafone.src = "images/SVG/vodafone.svg";
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

closeBtnIllustration.addEventListener("mouseenter", function () {
  closeBtnIllustration.style.backgroundImage =
    "url('../images/SVG/close-ver.svg')";
});

closeBtnIllustration.addEventListener("mouseleave", function () {
  closeBtnIllustration.style.backgroundImage = "url('../images/SVG/close.svg')";
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

//mudar cor texto figma protótipo
figmaTextDes.addEventListener("mouseenter", function () {
  figmaTextDes.src = "images/SVG/figma-proto-des-ver.svg";
});

figmaTextDes.addEventListener("mouseleave", function () {
  figmaTextDes.src = "images/SVG/figma-proto-des.svg";
});

figmaTextMob.addEventListener("mouseenter", function () {
  figmaTextMob.src = "images/SVG/figma-proto-mob-ver.svg";
});

figmaTextMob.addEventListener("mouseleave", function () {
  figmaTextMob.src = "images/SVG/figma-proto-mob.svg";
});

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
  document.body.classList.remove("deuteranopia", "protanopia", "tritanopia");
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
