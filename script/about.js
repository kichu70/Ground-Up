function aboutForm(){
  abtpop2.style.display = "flex";
}
const aboutPopup =document.getElementById("aboutPopup")
window.addEventListener("mouseup",function(event){
     if (event.target != aboutPopup && event.target.parentNode != aboutPopup) {
      aboutPopup.style.display = "none";
    }
})


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