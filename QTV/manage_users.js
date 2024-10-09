// manage_users.js
document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.querySelector('#userTable tbody');
    const addUserBtn = document.getElementById('addUserBtn');
    const userFormModal = document.getElementById('userFormModal');
    const closeBtn = document.querySelector('.close-btn');
    const userForm = document.getElementById('userForm');
    
    // Dữ liệu mẫu
    const users = [
        { id: 1, username: 'john_doe', email: 'john@example.com', role: 'user' },
        { id: 2, username: 'admin123', email: 'admin@example.com', role: 'admin' }
    ];

    // Hiển thị người dùng trong bảng
    function renderUsers() {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Hiển thị form thêm/sửa người dùng
    function openUserForm() {
        userFormModal.style.display = 'flex';
    }

    // Đóng form
    function closeUserForm() {
        userFormModal.style.display = 'none';
    }

    // Thêm sự kiện mở form
    addUserBtn.addEventListener('click', openUserForm);
    closeBtn.addEventListener('click', closeUserForm);

    // Xử lý gửi form thêm người dùng mới
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            username: userForm.username.value,
            email: userForm.email.value,
            role: userForm.role.value
        };
        users.push(newUser);
        renderUsers();
        closeUserForm();
    });

    // Khởi tạo hiển thị người dùng
    renderUsers();
});
