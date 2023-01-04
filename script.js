let slidesN;
if(window.innerWidth < 380){
    slidesN = 1;
}else{
    slidesN = 3;
}



new Swiper(".mySwiper", {
    slidesPerView: slidesN,
    centerdSlides:true,
    lazyLoading: true,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    }
});