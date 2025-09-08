// const lop = document.getElementById("lop");
function aboutForm() {
  aboutPopup.style.display = "flex";
}
function openForm() {
  lop.style.display = "block";
}
function openForm2() {
  lop2.style.display = "block";
}
function openForm3() {
  lop3.style.display = "block";
}

const ham = document.querySelector(".hamburger");
const menu2 = document.getElementById("menu2");

function toggleF() {
  menu2.classList.toggle("show");
}
window.addEventListener("mouseup", function (event) {
  if (
    menu2.classList.contains("show") &&
    !menu2.contains(event.target) &&
    
    event.target !== ham
  ) {
    console.log("working")
    menu2.classList.remove("show");
  }
});

const loparry = ["lop", "lop2", "lop3", "aboutPopup"];
window.addEventListener("mouseup", function (event) {
  for (var i = 0; i < loparry.length; i++) {
    var lop = document.getElementById(loparry[i]);
    if (event.target != lop && event.target.parentNode != lop) {
      lop.style.display = "none";
    }
  }
});
