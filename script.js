const gardenImages = document.querySelectorAll(".garden-img");
const imgDots = document.querySelectorAll(".img-dot");
const dots = document.querySelector(".garden-images-dots");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const menu = document.querySelector(".menu");
const mainHead = document.querySelector(".main-head");
const navigation = document.querySelector("nav");
const socialMediaIcons = document.querySelector(".social-media-icons");
const navLinks = document.querySelector(".nav-links")
const b = document.querySelector("body");
const imagesSrc = [];
const defaultImgSrc = [];

let imgC = 0;
let menuActive = false;


gardenImages.forEach((img, i)=>{
    defaultImgSrc[i] = img.childNodes[1].currentSrc;
});


rightArrow.addEventListener('click', ()=>{
    gardenImages.forEach((img, i)=>{
        imagesSrc[i] = img.childNodes[1].currentSrc;
    });
    gardenImages[0].childNodes[1].src = imagesSrc[1];
    gardenImages[1].childNodes[1].src= imagesSrc[2];
    gardenImages[2].childNodes[1].src = imagesSrc[0];

    if(imgC<gardenImages.length-1){
        imgC++;
    }else{
        imgC = 0;
    }
    imgDots.forEach((dot, i)=>{
        if(i == imgC){
            dot.childNodes[1].src = './icons/Go to slide 1.svg';
        }else{
            dot.childNodes[1].src = './icons/Go to slide 2.svg';
        }
    })
});


leftArrow.addEventListener('click', ()=>{
    gardenImages.forEach((img, i)=>{
        imagesSrc[i] = img.childNodes[1].currentSrc;
    });

    gardenImages[0].childNodes[1].src = imagesSrc[2];
    gardenImages[1].childNodes[1].src= imagesSrc[0];
    gardenImages[2].childNodes[1].src = imagesSrc[1];

    if(imgC>0){
        imgC--;
    }else{
        imgC = gardenImages.length-1;
    }
    
    imgDots.forEach((dot, i)=>{
        if(i == imgC){
            dot.childNodes[1].src = './icons/Go to slide 1.svg';
        }else{
            dot.childNodes[1].src = './icons/Go to slide 2.svg';
        }
    })
});

dots.addEventListener('click', (e)=>{
    if(e.target.classList.contains("first-dot")){
        imgC = 0;
        gardenImages[0].childNodes[1].src = defaultImgSrc[0];
        gardenImages[1].childNodes[1].src= defaultImgSrc[1];
        gardenImages[2].childNodes[1].src = defaultImgSrc[2];
    }
    else if(e.target.classList.contains("second-dot")){
        imgC=1;
        gardenImages[0].childNodes[1].src = defaultImgSrc[1];
        gardenImages[1].childNodes[1].src= defaultImgSrc[2];
        gardenImages[2].childNodes[1].src = defaultImgSrc[0];
    }
    else if(e.target.classList.contains("third-dot")){
        imgC=2;
        gardenImages[0].childNodes[1].src = defaultImgSrc[2];
        gardenImages[1].childNodes[1].src= defaultImgSrc[0];
        gardenImages[2].childNodes[1].src = defaultImgSrc[1];
    }

    imgDots.forEach((dot, i)=>{
        if(i == imgC){
            dot.childNodes[1].src = './icons/Go to slide 1.svg';
        }else{
            dot.childNodes[1].src = './icons/Go to slide 2.svg';
        }
    })
});


menu.addEventListener('click', (e)=>{
    mainHead.classList.toggle('ham-menu-active');
    navigation.classList.toggle('navigation');
    socialMediaIcons.classList.toggle('navigation-social-media');
    b.classList.toggle('stop-scrolling');

    if(menuActive == false){
        navLinks.style.display = 'block';
        menuActive = true;
    }else{
        navLinks.style.display = 'none';
        menuActive = false;
    }
  
});

navLinks.addEventListener('click', (e)=>{
    mainHead.classList.toggle('ham-menu-active');
    navigation.classList.toggle('navigation');
    socialMediaIcons.classList.toggle('navigation-social-media');
    navLinks.style.display = 'none';

    b.classList.toggle('stop-scrolling');
    menuActive = false;
})