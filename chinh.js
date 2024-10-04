// script.js

// Chức năng tìm kiếm
document.getElementById('search').addEventListener('keyup', function (e) {
    const searchQuery = e.target.value.toLowerCase(); // Lấy giá trị tìm kiếm từ người dùng và chuyển về chữ thường
    const recipes = document.querySelectorAll('.recipe-card'); // Lấy tất cả các thẻ công thức món ăn

    recipes.forEach(function (recipe) {
        const recipeName = recipe.querySelector('h3').textContent.toLowerCase(); // Lấy tên của món ăn và chuyển về chữ thường
        if (recipeName.includes(searchQuery)) {
            recipe.style.display = 'block'; // Hiển thị thẻ công thức nếu tên món ăn khớp với tìm kiếm
        } else {
            recipe.style.display = 'none'; // Ẩn thẻ công thức nếu không khớp
        }
    });
});

/*
// Chức năng nút khám phá công thức
const recipeButtons = document.querySelectorAll('.btn');
recipeButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        const recipeName = this.parentElement.querySelector('h3').textContent; // Lấy tên món ăn từ thẻ h3 của nút được nhấn
        alert(`Discover more about the recipe: ${recipeName}`); // Hiển thị thông báo khám phá thêm về món ăn
    });
});
*/

// Chức năng Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0); // Thêm hoặc xóa class sticky cho header khi cuộn trang
});

// Thêm class "active" cho liên kết hiện tại trong menu điều hướng
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active')); // Xóa class "active" khỏi tất cả các liên kết
        this.classList.add('active'); // Thêm class "active" cho liên kết được nhấn
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các thẻ recipe-card
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(function (card) {
        card.addEventListener('dblclick', function () {
            // Lấy thuộc tính data-recipe để điều hướng đến đúng công thức (nếu có)
            const recipeId = card.getAttribute('data-recipe');
            
            // Chuyển hướng đến trang congthuc.html
            // Nếu cần sử dụng query để biết công thức nào, có thể thêm như sau:
            window.location.href = `congthuc.html?recipe=${recipeId}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Lấy tất cả các thẻ recipe-card
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(function (card) {
        // Tìm nút "Xem công thức" trong mỗi thẻ .recipe-card
        const viewRecipeButton = card.querySelector('.btn');
        
        // Lắng nghe sự kiện click trên nút
        viewRecipeButton.addEventListener('click', function () {
            // Lấy thuộc tính data-recipe để điều hướng đến đúng công thức (nếu có)
            const recipeId = card.getAttribute('data-recipe');
            
            // Chuyển hướng đến trang congthuc.html với query recipe
                window.location.href = `congthuc.html?recipe=${recipeId}`;
        });
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
/*
// Hiển thị/ẩn dropdown khi nhấn vào ảnh đại diện
document.getElementById("profile-img").addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown-menu");
    // Chuyển đổi giữa ẩn và hiển thị dropdown
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    event.stopPropagation(); // Ngăn việc đóng dropdown khi nhấn vào ảnh đại diện
});*/

// Hiển thị/ẩn dropdown khi nhấn vào ảnh đại diện
document.getElementById("profile-img").addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown-menu");
    // Chuyển đổi giữa ẩn và hiển thị dropdown
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    event.stopPropagation(); // Ngăn việc đóng dropdown khi nhấn vào ảnh đại diện
});

// Thêm sự kiện double-click vào ảnh đại diện để điều hướng đến user.html khi đã đăng nhập
document.getElementById("profile-img").addEventListener("dblclick", function(event) {
    // Kiểm tra nếu người dùng đã đăng nhập (isRegistered === 'true')
    if (localStorage.getItem('isRegistered') === 'true') {
        // Điều hướng đến trang user.html
        window.location.href = 'user.html';
    } else {
        // Nếu chưa đăng nhập, có thể hiện thông báo hoặc không làm gì
        alert('Vui lòng đăng nhập để truy cập trang người dùng.');
    }
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
