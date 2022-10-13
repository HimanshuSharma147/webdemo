/*  bUTTONS FUNCTIONS
 */

function myfirstfunction() {
  document.getElementById("child1").classList.remove("hide");
  document.getElementById("child2").classList.remove("hide");
  document.getElementById("father").classList.add("hide");
}

function myfirstfunction2() {
  document.getElementById("child3").classList.remove("hide");
  document.getElementById("child4").classList.remove("hide");
  document.getElementById("child5").classList.remove("hide");
  document.getElementById("child1").classList.add("hide");
  document.getElementById("child2").classList.add("hide");
}

function openContactForm() {
  document.getElementById("contact-form").classList.remove("hide");
  document.getElementById("father").classList.add("hide");
  document.getElementById("grow").classList.add("hide");
  document.getElementById("contactModl").classList.add("hide");
  document.getElementById("contact-form").style.marginTop = "30%";
  document.getElementById("contact-form").style.marginLeft = "30%";
  document.getElementById("top").style.backgroundColor = "rgba(0, 0, 0, 0.787)";
  ScrollReveal().reveal('.contact-form',{delay:200})
}
