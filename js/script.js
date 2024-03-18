const category_button = document.getElementById("category_button")
const category = document.getElementById("category")
const products = document.getElementsByClassName("product_card")

function show_categories() {
    category.classList.toggle('category_visible')
    for(i=0; i < products.length; i++) {
        products[i].classList.toggle('product_hidden')
    }
}

category_button.addEventListener('click', show_categories)