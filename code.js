hamburgerButton = document.getElementById("hamburger-button")
hamburgerMenu = document.getElementById("hamburger-menu")

hamburgerButton.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("opened")
})