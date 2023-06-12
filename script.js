
let out = document.getElementById("moto");
var sagar = document.getElementById("mohit")
out.addEventListener("click", () =>{

  sagar.classList.toggle("google")
})


 function fixed () {

  if(top == 0 + "px"){
    document.querySelector(".sickycont").style.position = "fixed";
 }
}

fixed();