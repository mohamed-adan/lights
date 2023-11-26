const on = document.querySelector(".on")
const off = document.querySelector(".off")

const lightbox = document.querySelector(".light-box")

on.addEventListener("click", function(){
    lightbox.style.backgroundColor = "green"
    on.style.color = "red"
    off.style.color = "black"
 
})
off.addEventListener("click", function(){
    lightbox.style.backgroundColor = "transparent"
    off.style.color = "red"
    on.style.color = "black"
 

 
})