function openWindow() {
  document.getElementById("myModal").style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
};
