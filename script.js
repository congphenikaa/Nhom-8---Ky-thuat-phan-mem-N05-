document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của biểu mẫu

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu khớp nhau
    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Giả sử đăng ký thành công
    localStorage.setItem('isRegistered', 'true'); // Lưu trạng thái đăng ký
    alert('Đăng ký thành công!');

    // Chuyển hướng về trang chính hoặc trang đăng nhập
    window.location.href = 'login.html'; // Chuyển đến trang đăng nhập
});