const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const locationID = document.getElementById("location-id");
const mountainID = document.getElementById("mountain-id");
const templeID = document.getElementById("temple-id");
const noodlesID = document.getElementById("noodles-id"); 
const campsitesID = document.getElementById("campsites-id");
const landscapeID = document.getElementById("landscape-id");
const damID = document.getElementById("dam-id");
const portID = document.getElementById("port-id");
const gymID = document.getElementById("gym-id");
const experienceID = document.getElementById("experience-id");


const locationText = locationID.querySelector(".location-head");
const mountainText = mountainID.querySelector(".mountain-head");
const templeText = templeID.querySelector(".temple-head");
const noodlesText = noodlesID.querySelector(".noodles-head");
const campsitesText = campsitesID.querySelector(".campsites-head");
const landscapeText = landscapeID.querySelector(".landscape-head");
const damText = damID.querySelector(".dam-head");
const portText = portID.querySelector(".port-head");
const gymText = gymID.querySelector(".gym-content");
const experienceText = experienceID.querySelector(".experience-head");


const mountainImg = document.querySelector(".mountain-image");
const templeImg = document.querySelector(".temple-image");
const noodlesImg = document.querySelector(".noodles-image");
const campsitesImg = document.querySelector(".campsites-image");
const landscapeImg = document.querySelector(".landscape-slider");
const damImg = document.querySelector(".dam-slider");
const portImg = document.querySelector(".port-image");
const experienceImg = document.querySelectorAll(".experience-card");


let locationIsAnimated1 = false;
let locationIsAnimated2 = false;

let templeIsAnimated1 = false;
let templeIsAnimated2 = false;
let templeIsAnimated3 = false;

let noodlesIsAnimated1 = false;
let noodlesIsAnimated2 = false;
let noodlesIsAnimated3 = false;

let campsitesIsAnimated1 = false;
let campsitesIsAnimated2 = false;
let campsitesIsAnimated3 = false;
let campsitesIsAnimated4 = false;

let landscapeIsAnimated1 = false;
let landscapeIsAnimated2 = false;
let landscapeIsAnimated3 = false;

let damIsAnimated1 = false;
let damIsAnimated2 = false;
let damIsAnimated3 = false;

let portIsAnimated1 = false;
let portIsAnimated2 = false;
let portIsAnimated3 = false;

let gymIsAnimated = false;

let experienceIsAnimated1 = false;
let experienceIsAnimated2 = false;
let experienceIsAnimated3 = false;


let navigationIsActive = false;



document.addEventListener('scroll', function (e) {
    const topSection = isInViewport(topID, 0, -500);

    if(topSection){
        mainHead.classList.remove('main-nav-active');
        navigationIsActive = false;
    }else{
        if(!navigationIsActive){
            mainHead.classList.add('main-nav-active');
            mainHead.style.opacity = "0";
            navigationIsActive = true;
            setTimeout(()=>{
                mainHead.style.opacity = "1";
            },400)
        }  
    }

    if(!locationIsAnimated1 || !locationIsAnimated2){
        locationAnimation();
    }
    if(!templeIsAnimated1 || !templeIsAnimated2 || !templeIsAnimated3){
        templeAnimation();
    }
    if(!noodlesIsAnimated1 || !noodlesIsAnimated2 || !noodlesIsAnimated3){
        noodlesAnimation();
    }
    if(!campsitesIsAnimated1 || !campsitesIsAnimated2 || !campsitesIsAnimated3 || !campsitesIsAnimated4){
        campsitesAnimation();
    }
    if(!landscapeIsAnimated1 || !landscapeIsAnimated2 || !landscapeIsAnimated3){
        landscapeAnimation();
    }
    if(!damIsAnimated1 || !damIsAnimated2 || !damIsAnimated3){
       damAnimation();
    }
    if(!portIsAnimated1 || !portIsAnimated2 || !portIsAnimated3){
        portAnimation();
     }
     if(!gymIsAnimated){
        gymAnimation();
    }
    if(!experienceIsAnimated1 || !experienceIsAnimated2 || !experienceIsAnimated3){
        experienceAnimation();
    }
    
});

function locationAnimation(){
    const locationSectionText = isInViewport(locationID, 400, 200);

    const mountainSectionImg = isInViewport(locationID, 100, 0);

   if(locationSectionText){
        locationText.classList.add('fade');
        mountainText.classList.add('fade');
        mountainText.nextElementSibling.classList.add('fade');

        locationIsAnimated1 = true;
    }
    if(mountainSectionImg){
        mountainImg.classList.add('fade');
        locationIsAnimated2 = true;
    }
}

function templeAnimation(){
    const templeSectionText1 = isInViewport(templeID, 800, 600);
    const templeSectionText2 = isInViewport(templeID, 600, 500);

    const templeSectionImg = isInViewport(templeID, 500, 400);

   if(templeSectionText1){
        templeText.classList.add('fade');

        locationIsAnimated1 = true;
    }
    if(templeSectionText2){
        templeText.nextElementSibling.classList.add('fade');

        templeIsAnimated2 = true;
    }
    if(templeSectionImg){
        templeImg.classList.add('fade');
        templeIsAnimated3 = true;
    }
}

function noodlesAnimation(){
    const noodlesSectionText1 = isInViewport(noodlesID, 800, 700);
    const noodlesSectionText2 = isInViewport(noodlesID, 700, 600);

    const noodlesSectionImg = isInViewport(noodlesID, 500, 400);

   if(noodlesSectionText1){
        noodlesText.classList.add('fade');

        noodlesIsAnimated1 = true;
    }
    if(noodlesSectionText2){
        noodlesText.nextElementSibling.classList.add('fade');

        noodlesIsAnimated2 = true;
    }
    if(noodlesSectionImg){
        noodlesImg.classList.add('fade');
        noodlesIsAnimated3 = true;
    }
}

function campsitesAnimation(){
    const campsitesSectionText1 = isInViewport(campsitesID, 800, 700);
    const campsitesSectionText2 = isInViewport(campsitesID, 700, 600);

    const campsitesSectionImg = isInViewport(campsitesID, 500, 200);

    const campsitesSectionBtn = isInViewport(campsitesID, 0, -100);

   if(campsitesSectionText1){
        campsitesText.classList.add('fade');

        campsitesIsAnimated1 = true;
    }
    if(campsitesSectionText2){
        campsitesText.nextElementSibling.classList.add('fade');

        campsitesIsAnimated2 = true;
    }
    if(campsitesSectionImg){
        campsitesImg.classList.add('fade');
        campsitesIsAnimated3 = true;
    }
    if(campsitesSectionBtn){
        campsitesText.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('fade');
        campsitesIsAnimated4 = true;
    }
}

function landscapeAnimation(){
    const landscapeSectionText1 = isInViewport(landscapeID, 800, 700);
    const landscapeSectionText2 = isInViewport(landscapeID, 700, 600);

    const landscapeSectionImg = isInViewport(landscapeID, 500, 400);

   if(landscapeSectionText1){
        landscapeText.classList.add('fade');

        landscapeIsAnimated1 = true;
    }
    if(landscapeSectionText2){
        landscapeText.nextElementSibling.classList.add('fade');

        landscapeIsAnimated2 = true;
    }
    if(landscapeSectionImg){
        landscapeImg.classList.add('fade');
        landscapeIsAnimated3 = true;
    }
}

function damAnimation(){
    const damSectionText1 = isInViewport(damID, 800, 700);
    const damSectionText2 = isInViewport(damID, 700, 600);

    const damSectionImg = isInViewport(damID, 500, 400);

   if(damSectionText1){
        damText.classList.add('fade');

        damIsAnimated1 = true;
    }
    if(damSectionText2){
        damText.nextElementSibling.classList.add('fade');

        damIsAnimated2 = true;
    }
    if(damSectionImg){
        damImg.classList.add('fade');
        damIsAnimated3 = true;
    }
}

function portAnimation(){
    const portSectionText1 = isInViewport(portID, 800, 700);
    const portSectionText2 = isInViewport(portID, 700, 600);

    const portSectionImg = isInViewport(portID, 500, 400);

   if(portSectionText1){
        portText.classList.add('fade');

        portIsAnimated1 = true;
    }
    if(portSectionText2){
        portText.nextElementSibling.classList.add('fade');

        portIsAnimated2 = true;
    }
    if(portSectionImg){
        portImg.classList.add('fade');
        portIsAnimated3 = true;
    }
}

function gymAnimation(){
    const gymSectionText = isInViewport(gymID, 600, 500);

   if(gymSectionText){
        gymText.classList.add('fade');

        gymIsAnimated = true;
    }
}

function experienceAnimation(){
    const experienceSectionText1 = isInViewport(experienceID, 800, 700);
    const experienceSectionText2 = isInViewport(experienceID, 700, 600);

    const experienceSectionImg = isInViewport(experienceID, 400, 200);
    

    if(experienceSectionText1){
        experienceText.getElementsByTagName('h2')[0].classList.add('fade');
        experienceText.getElementsByTagName('div')[0].classList.add('fade');
        experienceIsAnimated1 = true;
    }
    if(experienceSectionText2){
        experienceText.getElementsByTagName('h3')[0].classList.add('fade');
        experienceIsAnimated2 = true;
    }
   
    if(experienceSectionImg){
        experienceImg[0].classList.add('fade');
        experienceIsAnimated3 = true;
        setTimeout(()=>{
            experienceImg[1].classList.add('fade');
        },500);
        setTimeout(()=>{
            experienceImg[2].classList.add('fade');
        },1000);
    }
}



function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}


const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true,
        },
    slidesPerView: 1,
    centerdSlides:true,
    lazyLoading: true,
    loop:true,
    autoplay:{
        delay:5000,
        disableOnInteraction: false
   },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
});