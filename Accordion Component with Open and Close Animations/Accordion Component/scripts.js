document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.classList.contains('open');
        const icon = header.querySelector('.accordion-icon');

        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('open');
            c.style.maxHeight = '0';
            c.style.padding = '0 20px';
        });

        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
        });

        if (!isOpen) {
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '15px 20px';
            header.classList.add('active');
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
});
