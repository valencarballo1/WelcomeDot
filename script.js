document.addEventListener('DOMContentLoaded', function () {
    const text = "DOT DAGER";
    const typedTextSpan = document.querySelector("#typed-text");
    const cursorSpan = document.querySelector(".cursor");

    let i = 0;
    function type() {
        if (i < text.length) {
            typedTextSpan.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            cursorSpan.style.display = 'none';
        }
    }

    if (typedTextSpan) {
        setTimeout(type, 1000);
    }

    // Existing script for toggle button
    const toggleButton = document.getElementById('toggle-about-me');
    const aboutMeContent = document.getElementById('about-me-content');

    toggleButton.addEventListener('click', function () {
        aboutMeContent.classList.toggle('hidden');
        toggleButton.textContent = aboutMeContent.classList.contains('hidden') ? 'Ver Más' : 'Ver Menos';
    });
});