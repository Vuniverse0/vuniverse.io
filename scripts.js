// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded and script running.");

    // Функция для изменения размера заголовков в зависимости от положения курсора
    function handleHeaderResize(event) {
        // Получаем элемент, на котором произошло событие
        const header = event.target;

        // Получаем размеры элемента
        const rect = header.getBoundingClientRect();

        // Вычисляем позицию курсора относительно элемента
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        // Вычисляем новый размер заголовка на основе положения курсора
        const maxScale = 1.2; // Максимальный масштаб
        const scaleFactor = 0.2; // Коэффициент масштабирования
        const scaleX = 1 + (mouseX / rect.width) * scaleFactor * maxScale;
        const scaleY = 1 + (mouseY / rect.height) * scaleFactor * maxScale;

        // Применяем новый размер заголовка
        header.style.fontSize = `${scaleX * 100}%`;
    }

    // Добавляем обработчики событий для каждого заголовка внутри .content
    document.querySelectorAll('.content h3, .content h4').forEach(header => {
        header.addEventListener('mousemove', handleHeaderResize);
    });

    // Добавляем обработчики событий для каждого блока section внутри .content
    document.querySelectorAll('.content section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
            this.style.backgroundColor = '#f9f9f9';
        });

        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.backgroundColor = 'transparent';
        });
    });
});
