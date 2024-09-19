// script.js

// Search functionality
document.getElementById('search').addEventListener('keyup', function (e) {
    const searchQuery = e.target.value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-card');

    recipes.forEach(function (recipe) {
        const recipeName = recipe.querySelector('h3').textContent.toLowerCase();
        if (recipeName.includes(searchQuery)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
});

// Discover Recipe Button Functionality
const recipeButtons = document.querySelectorAll('.btn');
recipeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const recipeName = this.parentElement.querySelector('h3').textContent;
        alert(`Discover more about the recipe: ${recipeName}`);
    });
});

// Sticky Header Functionality
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Add "active" class to the current link in the nav
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
