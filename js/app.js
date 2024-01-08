$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    // Select each element with the class "time" separately
    let time1 = document.querySelector('.time');
    let time5 = document.querySelector('.time5');
    
    let time2 = document.querySelector('.time1');
    let time3 = document.querySelector('.time2');
    let time4 = document.querySelector('.time3');
    
    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    // Add click event listeners to each element with the class "time"
    time1.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    time2.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    time3.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    time4.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
    time5.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
});
