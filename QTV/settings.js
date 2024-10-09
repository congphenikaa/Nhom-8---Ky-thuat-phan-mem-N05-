document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const siteName = document.getElementById('site-name').value;
    const adminEmail = document.getElementById('admin-email').value;
    const theme = document.getElementById('theme').value;

    // Giả lập lưu cài đặt (sẽ được tích hợp với backend sau)
    alert(`Đã lưu cài đặt:\nTên trang web: ${siteName}\nEmail quản trị viên: ${adminEmail}\nChủ đề: ${theme}`);
});
