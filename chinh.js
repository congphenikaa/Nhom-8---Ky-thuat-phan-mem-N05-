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

// Lặp qua từng thẻ recipe-card
const recipeCards = document.querySelectorAll('.recipe-card');

recipeCards.forEach((card) => {
    const stars = card.querySelectorAll('.fa-star'); // Lấy tất cả sao trong từng thẻ
    let currentRating = 0; // Khởi tạo giá trị rating cho từng thẻ
    const ratingValue = card.querySelector('.rating-value'); // Nơi hiển thị giá trị rating (nếu cần)

    // Hàm cập nhật giao diện các sao dựa trên đánh giá
    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected'); // Thêm class selected cho sao đã chọn
            } else {
                star.classList.remove('selected'); // Xóa class selected nếu không được chọn
            }
        });
    }

    // Xử lý sự kiện click cho các sao
    stars.forEach(star => {
        star.addEventListener('click', function() {
            currentRating = parseInt(star.getAttribute('data-rating')); // Lấy giá trị đánh giá từ data-rating
            updateStars(currentRating); // Cập nhật giao diện sao
            if (ratingValue) {
                ratingValue.textContent = currentRating; // Cập nhật giá trị hiển thị (nếu có phần tử để hiển thị)
            }
            console.log(`Bạn đã đánh giá ${currentRating} sao cho món ăn: ${card.querySelector('h3').innerText}`);
        });
    });

    // Xử lý hover để tạo hiệu ứng tạm thời khi di chuột
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const hoverRating = parseInt(star.getAttribute('data-rating')); // Lấy số sao hiện tại khi hover
            updateStars(hoverRating); // Cập nhật tạm thời các sao khi hover
        });

        // Khôi phục lại trạng thái sao khi chuột rời khỏi
        star.addEventListener('mouseout', function() {
            updateStars(currentRating); // Khôi phục lại các sao đã chọn khi chuột rời khỏi
        });
    });
});


