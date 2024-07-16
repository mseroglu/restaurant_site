const search_btn = document.getElementById("search-btn")
const menu_btn = document.getElementById("menu-btn")
const cart_btn = document.getElementById("cart-btn")
const search_form = document.querySelector(".search-form")
const navbar = document.querySelector(".navbar")
const cart_items_container = document.querySelector(".cart-items-container")



search_btn.addEventListener("click", () => {
    search_form.classList.toggle("active")
    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(search_btn) && !e.composedPath().includes(search_form)) {
            search_form.classList.remove("active")
        }
    })
})

menu_btn.addEventListener("click", () => {
    navbar.classList.toggle("active")
    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(menu_btn)&& !e.composedPath().includes(navbar)) {
            navbar.classList.remove("active")
        }
    })
})

cart_btn.addEventListener("click", () => {
    cart_items_container.classList.toggle("active")
    document.addEventListener("click", (e) => {
        if (!e.composedPath().includes(cart_btn)&& !e.composedPath().includes(cart_items_container)){
            cart_items_container.classList.remove("active")
        }
    })
})