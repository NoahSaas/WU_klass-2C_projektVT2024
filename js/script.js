const category_button = document.getElementById("category_button")
const category = document.getElementById("category")

function show_categories() {
    category.classList.toggle('category_visible')
}

category_button.addEventListener('click', show_categories)