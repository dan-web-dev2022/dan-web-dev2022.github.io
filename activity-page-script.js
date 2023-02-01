const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const activityID = document.getElementById("activity-id");
const supID = document.getElementById("sup-id");
const saunaID = document.getElementById("sauna-id");
const pilgrimageID = document.getElementById("pilgrimage-id");
const gymID = document.getElementById("gym-id");
const experienceID = document.getElementById("experience-id");


const activityText = activityID.querySelector(".activity-head");
const supText = supID.querySelector(".sup-head");
const saunaText = saunaID.querySelector(".sauna-head");
const pilgrimageText = pilgrimageID.querySelector(".pilgrimage-head");
const gymText = gymID.querySelector(".gym-content");
const experienceText = experienceID.querySelector(".experience-head");


const supImg = document.querySelector(".sup-image");
const saunaImg = document.querySelector(".sauna-image");
const pilgrimageImg = document.querySelector(".pilgrimage-image");
const experienceImg = document.querySelectorAll(".experience-card");


let activityIsAnimated1 = false;
let activityIsAnimated2 = false;

let saunaIsAnimated1 = false;
let saunaIsAnimated2 = false;
let saunaIsAnimated3 = false;

let pilgrimageIsAnimated1 = false;
let pilgrimageIsAnimated2 = false;
let pilgrimageIsAnimated3 = false;

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

    if(!activityIsAnimated1 || !activityIsAnimated2){
        activityAnimation();
    }
    if(!saunaIsAnimated1 || !saunaIsAnimated2 || !saunaIsAnimated3){
        saunaAnimation();
    }
    if(!pilgrimageIsAnimated1 || !pilgrimageIsAnimated2 || !pilgrimageIsAnimated3){
        pilgrimageAnimation();
    }
    if(!gymIsAnimated){
        gymAnimation();
    }
    if(!experienceIsAnimated1 || !experienceIsAnimated2 || !experienceIsAnimated3){
        experienceAnimation();
    }
});


function activityAnimation(){
    const activitySectionText = isInViewport(activityID, 400, 200);

    const supSectionImg = isInViewport(activityID, 100, 0);

   if(activitySectionText){
        activityText.classList.add('fade');
        supText.classList.add('fade');
        supText.nextElementSibling.classList.add('fade');

        activityIsAnimated1 = true;
    }
    if(supSectionImg){
        supImg.classList.add('fade');
        activityIsAnimated2 = true;
    }
}

function saunaAnimation(){
    const saunaSectionText1 = isInViewport(saunaID, 800, 600);
    const saunaSectionText2 = isInViewport(saunaID, 600, 500);

    const saunaSectionImg = isInViewport(saunaID, 500, 400);

   if(saunaSectionText1){
        saunaText.classList.add('fade');

        saunaIsAnimated1 = true;
    }
    if(saunaSectionText2){
        saunaText.nextElementSibling.classList.add('fade');

        saunaIsAnimated2 = true;
    }
    if(saunaSectionImg){
        saunaImg.classList.add('fade');
        saunaIsAnimated3 = true;
    }
}

function pilgrimageAnimation(){
    const pilgrimageSectionText1 = isInViewport(pilgrimageID, 800, 600);
    const pilgrimageSectionText2 = isInViewport(pilgrimageID, 600, 500);

    const pilgrimageSectionImg = isInViewport(pilgrimageID, 500, 400);

   if(pilgrimageSectionText1){
        pilgrimageText.classList.add('fade');

        pilgrimageIsAnimated1 = true;
    }
    if(pilgrimageSectionText2){
        pilgrimageText.nextElementSibling.classList.add('fade');

        pilgrimageIsAnimated2 = true;
    }
    if(pilgrimageSectionImg){
        pilgrimageImg.classList.add('fade');
        pilgrimageIsAnimated3 = true;
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