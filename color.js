document.addEventListener('DOMContentLoaded', function () {
    const body = document.getElementById('color');

    const color1 = '#f3eef4';
    const color2 = '#49064F';

    const intervalTime = 2000;

    let currentColor = color1;

    function changeColor() {
        currentColor = (currentColor === color1) ? color2 : color1;
        body.style.backgroundColor = currentColor;
    }

    setInterval(changeColor, intervalTime);
});

