// Chức năng tìm kiếm
document.getElementById('search').addEventListener('keyup', function (e) {
    const searchQuery = e.target.value.toLowerCase();
    if (!searchQuery) {
        // Không tìm kiếm khi không có đầu vào
        document.querySelectorAll('.recipe-card').forEach(recipe => {
            recipe.style.display = 'block';
        });
        return;
    }
    const recipes = document.querySelectorAll('.recipe-card');
    recipes.forEach(function (recipe) {
        const recipeName = recipe.querySelector('h3').textContent.toLowerCase();
        recipe.style.display = recipeName.includes(searchQuery) ? 'block' : 'none';
    });
});

// Chức năng Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Thêm lớp "active" vào liên kết hiện tại
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hiển thị/ẩn dropdown khi nhấn vào ảnh đại diện
document.getElementById("profile-img").addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    event.stopPropagation();
});

// Đóng dropdown khi nhấn bên ngoài
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    if (dropdown && dropdown.style.display === 'block' && !event.target.closest('#profile-img')) {
        dropdown.style.display = 'none';
    }
});

// Chức năng điều hướng khi nhấn vào ảnh đại diện
document.getElementById("profile-img").addEventListener("click", function(event) {
    if (localStorage.getItem('isRegistered') === 'true') {
        window.location.href = 'user.html';
    } else {
        alert('Vui lòng đăng nhập để truy cập trang người dùng.');
    }
});

// Xử lý đăng xuất
document.getElementById('logout-btn').addEventListener('click', function() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('isRegistered');
        window.location.reload();
    }
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

    const savedRating = localStorage.getItem('selectedRating') || 0;
    updateStarUI(savedRating);
    loadCommentsFromLocalStorage();
};

// Hàm cập nhật giao diện sao dựa trên đánh giá
function updateStarUI(rating) {
    const ratingStars = document.querySelectorAll('.rating-stars i');
    ratingStars.forEach(star => {
        const starRating = parseInt(star.getAttribute('data-rating'));
        star.classList.toggle('selected', starRating <= rating);
    });
}

// Gọi hàm tải bình luận từ localStorage
function loadCommentsFromLocalStorage() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comments-list');
    commentList.innerHTML = '';
    comments.forEach((comment, index) => {
        addCommentToList(comment, index);
    });
}

// Thêm bình luận vào giao diện từ localStorage
function addCommentToList(commentObj, index = null) {
    const commentList = document.getElementById('comments-list');
    const newComment = document.createElement('li');
    newComment.classList.add('comment-item');

    const avatar = document.createElement('img');
    avatar.src = commentObj.avatar || 'anh/daidien.jpg';
    avatar.classList.add('comment-avatar');

    const commentText = document.createElement('p');
    commentText.textContent = commentObj.text;

    const ratingStars = document.createElement('div');
    ratingStars.classList.add('comment-rating');
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        if (i <= commentObj.rating) {
            star.classList.add('selected');
        }
        ratingStars.appendChild(star);
    }

    const commentTime = document.createElement('small');
    commentTime.textContent = commentObj.time;
    commentTime.classList.add('comment-time');

    const actionMenu = document.createElement('div');
    actionMenu.classList.add('comment-actions');

    const actionBtn = document.createElement('button');
    actionBtn.textContent = '⋮';
    actionBtn.classList.add('action-btn');

    const actionDropdown = document.createElement('div');
    actionDropdown.classList.add('action-dropdown');
    actionDropdown.style.display = 'none';

    const editOption = document.createElement('button');
    editOption.textContent = 'Chỉnh sửa';
    editOption.classList.add('edit-btn');
    editOption.addEventListener('click', () => editComment(index));

    const deleteOption = document.createElement('button');
    deleteOption.textContent = 'Xóa';
    deleteOption.classList.add('delete-btn');
    deleteOption.addEventListener('click', () => deleteComment(index));

    actionDropdown.appendChild(editOption);
    actionDropdown.appendChild(deleteOption);

    actionBtn.addEventListener('click', () => {
        actionDropdown.style.display = actionDropdown.style.display === 'none' ? 'block' : 'none';
    });

    actionMenu.appendChild(actionBtn);
    actionMenu.appendChild(actionDropdown);

    newComment.appendChild(avatar);
    newComment.appendChild(commentText);
    newComment.appendChild(commentTime);
    newComment.appendChild(ratingStars);
    newComment.appendChild(actionMenu);
    
    commentList.appendChild(newComment);
}

// Chức năng chọn số lượng người
let quantity = 2;
const qtyValue = document.getElementById('qty-value');
document.getElementById('qty-increase').addEventListener('click', () => {
    quantity++;
    qtyValue.textContent = `${quantity} người`;
});
document.getElementById('qty-decrease').addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        qtyValue.textContent = `${quantity} người`;
    }
});

// Lưu công thức vào sổ tay nấu ăn
document.querySelector('.save-btn').addEventListener('click', () => {
    alert('Công thức đã được lưu vào sổ tay của bạn!');
});

// Chức năng đánh giá sao
const ratingStars = document.querySelectorAll('.rating-stars i');
let selectedRating = localStorage.getItem('selectedRating') || 0;
updateStarUI(selectedRating);

ratingStars.forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = this.getAttribute('data-rating');
        localStorage.setItem('selectedRating', selectedRating);
        updateStarUI(selectedRating);
        alert(`Bạn đã đánh giá ${selectedRating} sao!`);
    });
});

// Gửi bình luận
document.getElementById('submit-comment').addEventListener('click', function () {
    const comment = document.getElementById('comment-box').value.trim();
    const avatar = 'anh/daidien.jpg';
    const rating = selectedRating;
    const time = new Date().toLocaleString();

    if (comment) {
        const commentObj = { text: comment, avatar: avatar, rating: rating, time: time };
        addCommentToList(commentObj);
        saveCommentToLocalStorage(commentObj);
        document.getElementById('comment-box').value = '';
    } else {
        alert('Vui lòng nhập bình luận!');
    }
});

// Lưu bình luận vào localStorage
function saveCommentToLocalStorage(commentObj) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(commentObj);
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Cập nhật giao diện bình luận sau khi xóa
function updateCommentsUI() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comments-list');
    commentList.innerHTML = '';
    comments.forEach((comment, index) => {
        addCommentToList(comment, index);
    });
}

// Xóa bình luận
function deleteComment(index) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa bình luận này?");
    if (confirmation) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        updateCommentsUI();
    }
}

// Chỉnh sửa bình luận
function editComment(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const comment = comments[index];
    const newCommentText = prompt("Chỉnh sửa bình luận:", comment.text);
    if (newCommentText !== null && newCommentText.trim() !== "") {
        comment.text = newCommentText.trim();
        comments[index] = comment;
        localStorage.setItem('comments', JSON.stringify(comments));
        updateCommentsUI();
    }
}

// Chức năng báo cáo sai phạm
document.getElementById('report-btn').addEventListener('click', function () {
    alert('Báo cáo của bạn đã được gửi. Cảm ơn bạn đã đóng góp!');
});


// Thêm bình luận vào giao diện từ localStorage
function addCommentToList(commentObj, index = null) {
    const commentList = document.getElementById('comments-list');
    const newComment = document.createElement('li');
    newComment.classList.add('comment-item');

    // Tạo container cho phần ảnh đại diện và nội dung bình luận
    const commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    // Ảnh đại diện
    const avatar = document.createElement('img');
    avatar.src = commentObj.avatar || 'anh/daidien.jpg';  // Đường dẫn ảnh đại diện
    avatar.classList.add('comment-avatar');

    // Thời gian bình luận
    const commentTime = document.createElement('small');
    commentTime.textContent = commentObj.time;
    commentTime.classList.add('comment-time');

    // Sao đánh giá
    const ratingStars = document.createElement('div');
    ratingStars.classList.add('comment-rating');
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        if (i <= commentObj.rating) {
            star.classList.add('selected');
        }
        ratingStars.appendChild(star);
    }

    // Nội dung bình luận
    const commentText = document.createElement('p');
    commentText.textContent = commentObj.text;
    commentText.classList.add('comment-text');

    // Nút chứa chức năng (xóa và chỉnh sửa) dưới dạng dropdown
    const actionMenu = document.createElement('div');
    actionMenu.classList.add('comment-actions');

    const actionBtn = document.createElement('button');
    actionBtn.textContent = '⋮';
    actionBtn.classList.add('action-btn');

    const actionDropdown = document.createElement('div');
    actionDropdown.classList.add('action-dropdown');
    actionDropdown.style.display = 'none';  // Ẩn menu theo mặc định

    const editOption = document.createElement('button');
    editOption.textContent = 'Chỉnh sửa';
    editOption.classList.add('edit-btn');
    editOption.addEventListener('click', () => editComment(index));

    const deleteOption = document.createElement('button');
    deleteOption.textContent = 'Xóa';
    deleteOption.classList.add('delete-btn');
    deleteOption.addEventListener('click', () => deleteComment(index));

    actionDropdown.appendChild(editOption);
    actionDropdown.appendChild(deleteOption);

    actionBtn.addEventListener('click', () => {
        actionDropdown.style.display = actionDropdown.style.display === 'none' ? 'block' : 'none';
    });

    actionMenu.appendChild(actionBtn);
    actionMenu.appendChild(actionDropdown);

    // Gắn nội dung vào phần commentContent
    commentContent.appendChild(commentTime);
    commentContent.appendChild(ratingStars);
    commentContent.appendChild(commentText);

    // Thêm ảnh đại diện và nội dung vào bình luận
    newComment.appendChild(avatar);
    newComment.appendChild(commentContent);  // Dòng nội dung (thời gian, sao, text)
    newComment.appendChild(actionMenu);      // Nút chức năng (bên phải)

    commentList.appendChild(newComment);
}
