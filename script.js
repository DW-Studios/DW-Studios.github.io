document.querySelectorAll('.dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        const rect = dropdownContent.getBoundingClientRect();

        // Si el dropdown se sale del borde derecho
        if (rect.right > window.innerWidth) {
            dropdownContent.style.left = 'auto';
            dropdownContent.style.right = '0';
        }
    });
});
