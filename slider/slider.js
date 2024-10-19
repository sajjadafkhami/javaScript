
slides = document.getElementById('slides');
beforeButton = document.getElementById('before');
nextButton = document.getElementById('next');

const timeout = 6000;
const speed = 10;

let allSlides;
let nextTimeout;
let lastSlide;
let animating = false;

nextTimeout = setTimeout(nextSlide, timeout);

function nextSlide(){
    allSlides = document.querySelectorAll('.slide');
    lastSlide = allSlides[allSlides.length - 1];
    requestAnimationFrame(moveRight);
    animating = true;
}

function moveRight(){
    const left = parseInt(lastSlide.style.left);
    lastSlide.style.left = (left + speed) + 'px';
    if(left < 960){
        requestAnimationFrame(moveRight);
    }
    else{
        slides.insertBefore(lastSlide, slides.firstElementChild);
        lastSlide.style.left = '0';
        nextTimeout =setTimeout(nextSlide, timeout);
        animating = false;
    }
}

nextButton.addEventListener('click', function(){
    if(!animating){
        clearTimeout(nextTimeout);
        nextSlide();
    }
});

beforeButton.addEventListener('click', function(){
    if(!animating){
        clearTimeout(nextTimeout);
        previousSlide();
    }
});

function previousSlide(){
    slides.firstElementChild.style.left = '960px';
    slides.appendChild(slides.firstElementChild);
    allSlides = document.querySelectorAll('.slide');
    lastSlide = allSlides[allSlides.length - 1];
    requestAnimationFrame(moveLeft);
    animating = true;
}

function moveLeft(){
    const left = parseInt(lastSlide.style.left);
    lastSlide.style.left = (left - speed) + 'px';
    if(left > speed){
        requestAnimationFrame(moveLeft);
    }
    else{
        nextTimeout = setTimeout(nextSlide, timeout);
        animating = false;
    }
}


