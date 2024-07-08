document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const header = section.querySelector('h2');
        
        header.addEventListener('click', () => {
            section.classList.toggle('active');
            
            const content = section.querySelector('p');
            if (section.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});


