const category_button = document.getElementById("category_button")
const category = document.getElementById("category")
const products = document.getElementsByClassName("product_card")
const productCards = document.querySelectorAll('.product_card');
const shoppingCartIcon = document.querySelector('.shopping_cart_icon');
const searchButton = document.getElementById('searchbutton');
const searchBar = document.getElementById('searchbar');

function show_categories() {
    if (category.style.display == "flex"){
        category.style.display = "none"
    } 
    else {
        category.style.display = "flex"
    }

    for(i=0; i < products.length; i++) {
        products[i].classList.toggle('product_hidden')
    }
}

productCards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'error.html';
    });
});

shoppingCartIcon.addEventListener('click', () => {
    window.location.href = 'payment.html';
});

searchButton.addEventListener('click', () => {
    if (searchBar.value.trim() !== '') {
        window.location.href = 'error.html';
    }
});


category_button.addEventListener('click', show_categories)