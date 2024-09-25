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

// Hiển thị/ẩn dropdown khi nhấn vào ảnh đại diện
const profileImg = document.getElementById('profile-img');
const dropdownMenu = document.getElementById('dropdown-menu');

if (profileImg && dropdownMenu) {
    profileImg.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Đóng dropdown khi nhấn ngoài
    window.addEventListener('click', function (event) {
        if (!event.target.closest('#profile-img') && !event.target.closest('#dropdown-menu')) {
            dropdownMenu.style.display = 'none';
        }
    });
}

// Xử lý chức năng đăng xuất
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('isRegistered');
    window.location.reload();
});

// Kiểm tra trạng thái đăng ký khi tải trang
window.onload = function() {
    if (localStorage.getItem('isRegistered') === 'true') {
        document.getElementById('logout-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('logout-section').style.display = 'none';
    }
};

// Quantity selector logic
let quantity = 2;
const qtyValue = document.getElementById('qty-value');
const qtyIncrease = document.getElementById('qty-increase');
const qtyDecrease = document.getElementById('qty-decrease');

qtyIncrease.addEventListener('click', () => {
    quantity++;
    qtyValue.textContent = `${quantity} persons`;
});

qtyDecrease.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        qtyValue.textContent = `${quantity} persons`;
    }
});

// Save to Cookbook logic
const saveBtn = document.querySelector('.save-btn');
saveBtn.addEventListener('click', () => {
    alert('Recipe saved to your cookbook!');
});

function opentab(evt, tabNub) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNub).style.display = "block";
    evt.currentTarget.className += " active";
  }