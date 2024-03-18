const category_button = document.getElementById("category_button")
const category = document.getElementById("category")
const products = document.getElementById("subwrapper")

function show_categories() {
    category.classList.toggle('category_visible')
    products.classList.toggle('products_visible')
}

category_button.addEventListener('click', show_categories)