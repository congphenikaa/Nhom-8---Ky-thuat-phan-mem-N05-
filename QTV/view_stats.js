document.addEventListener("DOMContentLoaded", () => {
    // Biểu đồ người dùng
    const userChart = new Chart(document.getElementById('userChart'), {
        type: 'bar',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4'],
            datasets: [{
                label: 'Số lượng người dùng',
                data: [120, 150, 180, 200],
                backgroundColor: '#FF5733'
            }]
        }
    });

    // Biểu đồ công thức
    const recipeChart = new Chart(document.getElementById('recipeChart'), {
        type: 'line',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4'],
            datasets: [{
                label: 'Số lượng công thức',
                data: [30, 45, 60, 80],
                borderColor: '#8B4513',
                fill: false
            }]
        }
    });
});
