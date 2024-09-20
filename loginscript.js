document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu

    // Thêm logic kiểm tra tên đăng nhập và mật khẩu (tạm thời giả định thành công)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ở đây bạn có thể thêm kiểm tra tên đăng nhập và mật khẩu từ cơ sở dữ liệu

    // Giả sử đăng nhập thành công:
    if (username && password) { // Kiểm tra đơn giản
        localStorage.setItem('isRegistered', 'true'); // Lưu trạng thái đăng nhập
        window.location.href = 'chinh.html'; // Chuyển hướng về trang chính
    }
});