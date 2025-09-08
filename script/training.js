function aboutForm() {
  aboutPopup.style.display = "flex";
}
function openPop() {
  lop.style.display = "block";
}
function openPop2(){
  lop2.style.display = "block";
}
function openPop3(){
  lop3.style.display = "block";
}

const arrays = ["aboutPopup", "lop","lop2","lop3"];
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
window.addEventListener("mouseup", function (event) {
  for (var i = 0; i < arrays.length; i++) {
    var arr = document.getElementById(arrays[i]);
    if (event.target != arr && event.target.parentNode != arr) {
      arr.style.display = "none";
    }
  }
});
