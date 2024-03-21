
navToggle = document.querySelector(".menu-button")
nav = document.querySelector("nav")
const portfolioContainer = document.querySelector(".portfolio-items")

navToggle.addEventListener("click", function(){
    document.body.classList.toggle("nav-is-open")
})

nav.addEventListener("click", function(){
    document.body.classList.remove("nav-is-open")
})


portfolioContainer.addEventListener("click", function(e){
    console.log(e)

    const modalToggle = e.target.closest(".portfolio-link")

    if (! modalToggle) return
    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector(".modal-close-icon")

    modal.classList.add("is-open")
    closeButton.addEventListener("click", function(){
        modal.classList.remove("is-open")
    })
})