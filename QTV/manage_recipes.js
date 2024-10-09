// manage_recipes.js
document.addEventListener('DOMContentLoaded', () => {
    const recipeTableBody = document.querySelector('#recipeTable tbody');
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const recipeFormModal = document.getElementById('recipeFormModal');
    const closeBtn = document.querySelector('.close-btn');
    const recipeForm = document.getElementById('recipeForm');
    
    // Dữ liệu mẫu
    const recipes = [
        { id: 1, recipeName: 'Bánh mì kẹp thịt', author: 'Nguyễn Văn A', date: '2023-10-01' },
        { id: 2, recipeName: 'Phở bò', author: 'Trần Thị B', date: '2023-09-25' }
    ];

    // Hiển thị công thức trong bảng
    function renderRecipes() {
        recipeTableBody.innerHTML = '';
        recipes.forEach(recipe => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipe.id}</td>
                <td>${recipe.recipeName}</td>
                <td>${recipe.author}</td>
                <td>${recipe.date}</td>
                <td>
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                </td>
            `;
            recipeTableBody.appendChild(row);
        });
    }

    // Hiển thị form thêm/sửa công thức
    function openRecipeForm() {
        recipeFormModal.style.display = 'flex';
    }

    // Đóng form
    function closeRecipeForm() {
        recipeFormModal.style.display = 'none';
    }

    // Thêm sự kiện mở form
    addRecipeBtn.addEventListener('click', openRecipeForm);
    closeBtn.addEventListener('click', closeRecipeForm);

    // Xử lý gửi form thêm công thức mới
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRecipe = {
            id: recipes.length + 1,
            recipeName: recipeForm.recipeName.value,
            author: recipeForm.author.value,
            date: recipeForm.date.value
        };
        recipes.push(newRecipe);
        renderRecipes();
        closeRecipeForm();
    });

    // Khởi tạo hiển thị công thức
    renderRecipes();
});
