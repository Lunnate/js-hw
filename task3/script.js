const redLight = document.querySelector('#redLight');
const yellowLight = document.querySelector('#yellowLight');
const greenLight = document.querySelector('#greenLight');

const circles = [redLight, yellowLight, greenLight];
const colors = ['red', 'yellow', 'green'];

function resetColors() {
    circles.forEach(circle => {
        circle.style.backgroundColor = '#222';
    });
}

function changeColor (currentCircle) {
    const currentIndex = circles.indexOf(currentCircle);
    const nextIndex = (currentIndex + 1) % circles.length;

    resetColors();
    currentCircle.style.backgroundColor = colors[currentIndex];
}

redLight.addEventListener('click', () => changeColor(redLight));
yellowLight.addEventListener('click', () => changeColor(yellowLight));
greenLight.addEventListener('click', () => changeColor(greenLight));