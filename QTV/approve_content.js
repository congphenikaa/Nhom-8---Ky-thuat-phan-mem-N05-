// approve_content.js
document.addEventListener('DOMContentLoaded', () => {
    const contentTableBody = document.querySelector('#contentTable tbody');
    
    // Dữ liệu mẫu cho các nội dung cần kiểm duyệt
    const contents = [
        { id: 1, recipeName: 'Bún riêu', author: 'Lê Văn C', date: '2023-10-05' },
        { id: 2, recipeName: 'Cơm tấm', author: 'Phạm Thị D', date: '2023-10-02' }
    ];

    // Hiển thị nội dung trong bảng
    function renderContents() {
        contentTableBody.innerHTML = '';
        contents.forEach(content => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${content.id}</td>
                <td>${content.recipeName}</td>
                <td>${content.author}</td>
                <td>${content.date}</td>
                <td>
                    <button class="btn-approve">Duyệt</button>
                    <button class="btn-reject">Từ chối</button>
                </td>
            `;
            contentTableBody.appendChild(row);
        });
    }

    // Khởi tạo hiển thị nội dung
    renderContents();
});
