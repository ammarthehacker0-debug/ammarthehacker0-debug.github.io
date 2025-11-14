var typed = new Typed("#typed", {
    strings: ["Front-End Web Developer", "UI/UX Web designer"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 3000,
    showCursor: false,
    loop: true
});

function theme() {
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');

    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        darkBtn.style.display = 'block';
        lightBtn.style.display = 'none';
    } else {
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
    }
}

