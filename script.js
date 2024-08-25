let bar_menu = document.querySelector(".menu_bar_icon")
let modal_menu = document.querySelector(".modals")
let menu_close = document.querySelector(".modal_cross_icon")

bar_menu.addEventListener("click", function () {
    modal_menu.style.display = "block"
})

menu_close.addEventListener("click", function () {
    modal_menu.style.display = "none"
})