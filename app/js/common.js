$(document).ready(function() {
    $('.slider-wrapper').superslides();
});

const a = document.getElementsByClassName('img-slider');
console.log(a[0].width);
a[0].style.width = '20px';
console.log(a[0].width);