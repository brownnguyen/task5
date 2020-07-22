"use strict";
$('.top-slider-main').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false
            }
        }
    ]

});
$('.slick-interview').slick({
    autoplay: true
});
$('.special .content .img').slick({
    autoplay: true
});
let header = document.querySelector('.header');
window.onscroll = function () {
    if (window.pageYOffset > 30) {
        header.classList.add('stick')
    }
    else {
        header.classList.remove('stick')
    }
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 0.8;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}
let navBtn = document.querySelector('.nav-btn');
let drawer = document.querySelector('.drawer');
navBtn.onclick = function () {
    navBtn.classList.toggle('expand');
    if (navBtn.classList.contains('expand')) {
        drawer.classList.add("expand")
    }
    else {
        drawer.classList.remove("expand")
    }
}
let slickLeft = document.querySelector('.interview .slick-prev');
let btnLeft = document.createElement('span');
btnLeft.classList.add('arrow-new-left');
slickLeft.appendChild(btnLeft);

let slickRight = document.querySelector('.interview .slick-next');
let btnRight = document.querySelector('span');
btnRight.classList.add("arrow-new-right")
slickRight.appendChild(btnRight);
let dataUl = document.querySelectorAll('.ul-main');
let contentHeadUl = document.querySelectorAll('.content.head-ul');
let titleUl = document.querySelectorAll('.title.title-ul');
for (let i = 0; i < dataUl.length; i++) {
    titleUl[i].onclick = function () {
        for (let k = 0; k < dataUl.length; k++) {
            dataUl[k].style.height = 0;
            dataUl[k].classList.remove('expand');
        }
        dataUl[i].classList.toggle('expand');
        if (dataUl[i].classList.contains('expand')) {
            let height = 0;
            for (let j = 0; j < dataUl[i].children.length; j++) {
                height += parseFloat(getComputedStyle(dataUl[i].children[j], null).height.replace("px", ""));
            }
            dataUl[i].style.height = height + "px";
        }
        else {
            dataUl[i].style.height = 0;
        }
    }
}

$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
