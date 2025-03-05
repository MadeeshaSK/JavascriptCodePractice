// animation

// fade in
const element1 = document.getElementById('element1');
let opacity = 0;

const animate1 = () => {
    if (opacity < 1) {
        opacity += 0.01;
        element1.style.opacity = opacity;
        requestAnimationFrame(animate1);
    }
}
animate1();

//side in
const element2 = document.getElementById('element2');
let state =-250;

const animate2 = () => {
    if (state < 0) {
        state += 5;
        element2.style.left = state + 'px';
        requestAnimationFrame(animate2);
    }
}
animate2();

//side bar when scroll

const element3 = document.getElementById('element3');
let state2 = -250;
let isAnimating = false;

const animate3 = () => {
    if (state2 < 0) {
        state2 += 5;
        element3.style.left = state2 + 'px';
        requestAnimationFrame(animate3);
    } else {
        isAnimating = false;
    }
}

window.addEventListener('scroll', () => {
    const sTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (sTop > 30 && !isAnimating) {
        isAnimating = true;
        animate3();
    }
});

