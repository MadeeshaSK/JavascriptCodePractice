// up and down animation

const element4 = document.getElementById('element4');
let position = 0;
let isUp = true;

const animate4 = () => {
    if (isUp) {
        position += 2;
        if (position >= 500) {
            isUp = false;
        }
    } else {
        position -= 2;
        if (position <= 0) {
            isUp = true;
        }
    }

    element4.style.top = position + 'px';
    requestAnimationFrame(animate4);
};

animate4();