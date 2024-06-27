document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="location"]');
    const selectInput = document.querySelector('.select-input');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'regional') {
                selectInput.style.display = 'block';
            } else {
                selectInput.style.display = 'none';
            }
        });
    });
});
