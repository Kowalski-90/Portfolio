//creation of changeImage function
let img = document.querySelector('image');
let btn1 = document.querySelector('#html');
let btn2 = document.querySelector('#css');
let btn3 = document.querySelector('#javascript');


html.addEventListener('click',()=>{
    img.src = '/images/html.png';
});

css.addEventListener('click',()=>{
    img.src = '/images/css.png';
});

javascript.addEventListener('click',()=>{
    img.src = '/images/javascript.png';
});