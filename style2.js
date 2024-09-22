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

// Hiển thị/ẩn dropdown khi nhấn vào ảnh đại diện
document.getElementById("profile-img").addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown-menu");
    // Chuyển đổi giữa ẩn và hiển thị dropdown
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    event.stopPropagation(); // Ngăn việc đóng dropdown khi nhấn vào ảnh đại diện
});

// Xử lý chức năng đăng xuất
document.getElementById('logout-btn').addEventListener('click', function() {
    // Xóa trạng thái đăng ký khỏi localStorage
    localStorage.removeItem('isRegistered');
    // Tải lại trang để hiển thị lại phần đăng nhập
    window.location.reload();
});

// Kiểm tra trạng thái đăng ký khi tải trang
window.onload = function() {
    if (localStorage.getItem('isRegistered') === 'true') {
        // Hiển thị phần logout-section với ảnh đại diện
        document.getElementById('logout-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        // Hiển thị phần đăng nhập nếu chưa đăng ký
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('logout-section').style.display = 'none';
    }
};

// Đóng dropdown khi nhấn bên ngoài ảnh đại diện và dropdown menu
window.addEventListener('click', function(event) {
    var dropdownMenu = document.getElementById('dropdown-menu');
    var profileImg = document.getElementById('profile-img');
    
    // Kiểm tra nếu nhấn bên ngoài dropdown và ảnh đại diện thì đóng dropdown
    if (dropdownMenu.style.display === "block" && !event.target.closest('#profile-img') && !event.target.closest('#dropdown-menu')) {
        dropdownMenu.style.display = 'none';
    }
});

// Xử lý khi người dùng gửi form liên hệ
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn hành động gửi form mặc định

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Giả sử form được gửi thành công (bạn có thể thêm logic xử lý AJAX ở đây nếu cần)
    if (name && email && subject && message) {
        // Hiển thị thông báo thành công
        document.getElementById('success-message').style.display = 'block';
        
        // Đặt thời gian để tải lại trang sau khi hiển thị thông báo
        setTimeout(function() {
            location.reload(); // Tải lại trang sau 2 giây
        }, 2000);
    }
});

