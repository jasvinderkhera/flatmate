let bar_menu = document.querySelector(".menu_bar_icon")
let modal_menu = document.querySelector(".modals")
let menu_close = document.querySelector(".modal_cross_icon")

bar_menu.addEventListener("click", function () {
    modal_menu.style.display = "block"
})

menu_close.addEventListener("click", function () {
    modal_menu.style.display = "none"
})


// ------------------------------------------Filter modal--------------------------------------------------------


let filters = document.querySelector(".filters")
let filter_modal_menu = document.querySelector(".filter_modals")
let filter_menu_close = document.querySelector(".filter_modal_cross_icon")

filters.addEventListener("click", function () {
    filter_modal_menu.style.display = "block"
})

filter_menu_close.addEventListener("click", function () {
    filter_modal_menu.style.display = "none"
})


// ------------------------------------------Filter modal end--------------------------------------------------------



// ------------------------------------------Sort modal--------------------------------------------------------


let mob_sort = document.querySelector(".mob_sort")
let sort_modal_menu = document.querySelector(".sort_modals")
let sort_menu_close = document.querySelector(".sort_modal_cross_icon")

mob_sort.addEventListener("click", function () {
    sort_modal_menu.style.display = "block"
})

sort_menu_close.addEventListener("click", function () {
    sort_modal_menu.style.display = "none"
})


// ------------------------------------------Sort modal end--------------------------------------------------------




// ------------------------------------------Location modal--------------------------------------------------------


let location_details = document.querySelector(".location_details")
let mob_location_details = document.querySelector(".mob_location_details")
let location_modal_menu = document.querySelector(".location_modals")
let location_menu_close = document.querySelector(".location_modal_cross_icon")

location_details.addEventListener("click", function () {
    location_modal_menu.style.display = "block"
})

mob_location_details.addEventListener("click", function () {
    location_modal_menu.style.display = "block"
})

location_menu_close.addEventListener("click", function () {
    location_modal_menu.style.display = "none"
})


// ------------------------------------------Location modal end--------------------------------------------------------