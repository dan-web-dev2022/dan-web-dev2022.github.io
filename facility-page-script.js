const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const facilityID = document.getElementById("facility-id");
const guestRoomID = document.getElementById("guest-room-id");
const insideHallID = document.getElementById("inside-hall-id");
const mealID = document.getElementById("meal-id");
const healingBathID = document.getElementById("healing-bath-id");
const gymID = document.getElementById("gym-id");
const experienceID = document.getElementById("experience-id");

const facilityText = facilityID.querySelector(".facility-head");
const guestRoomText = guestRoomID.querySelector(".guest-room-head");
const insideHallText = insideHallID.querySelector(".inside-hall-head");
const mealText = mealID.querySelector(".meal-head");
const healingBathText = healingBathID.querySelector(".healing-bath-head");
const gymText = gymID.querySelector(".gym-content");
const experienceText = experienceID.querySelector(".experience-head");


const guestRoomImg = document.querySelector(".guest-room-slider");
const insideHallImg = document.querySelector(".inside-hall-slider");
const mealImg = document.querySelector(".meal-slider");
const healingBathImg = document.querySelector(".healing-bath-image");
const experienceImg = document.querySelectorAll(".experience-card");


let facilityIsAnimated = false;

let guestRoomIsAnimated1 = false;
let guestRoomIsAnimated2 = false;
let guestRoomIsAnimated3 = false;
let guestRoomIsAnimated4 = false;

let insideHallIsAnimated1 = false;
let insideHallIsAnimated2 = false;
let insideHallIsAnimated3 = false;
let insideHallIsAnimated4 = false;

let mealIsAnimated1 = false;
let mealIsAnimated2 = false;
let mealIsAnimated3 = false;
let mealIsAnimated4 = false;

let healingBathIsAnimated1 = false;
let healingBathIsAnimated2 = false;
let healingBathIsAnimated3 = false;
let healingBathIsAnimated4 = false;

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

    if(!facilityIsAnimated){
        facilityAnimation();
    }
    if(!guestRoomIsAnimated1 || !guestRoomIsAnimated2 || !guestRoomIsAnimated3 || !guestRoomIsAnimated4){
        guestRoomAnimation();
    }
    if(!insideHallIsAnimated1 || !insideHallIsAnimated2 || !insideHallIsAnimated3 || !insideHallIsAnimated4){
        insideHallAnimation();
    }
    if(!mealIsAnimated1 || !mealIsAnimated2 || !mealIsAnimated3 || !mealIsAnimated4){
        mealAnimation();
    }
    if(!healingBathIsAnimated1 || !healingBathIsAnimated2 || !healingBathIsAnimated3 || !healingBathIsAnimated4){
        healingBathAnimation();
    }
    if(!gymIsAnimated){
        gymAnimation();
    }
    if(!experienceIsAnimated1 || !experienceIsAnimated2 || !experienceIsAnimated3){
        experienceAnimation();
    }
});

function facilityAnimation(){
    const facilitySectionText = isInViewport(facilityID, 400, 200);

   if(facilitySectionText){
        facilityText.classList.add('fade');
        facilityText.nextElementSibling.classList.add('fade');

        facilityIsAnimated = true;
    }
}

function guestRoomAnimation(){
    const guestRoomSectionText1 = isInViewport(guestRoomID, 800, 700);
    const guestRoomSectionText2 = isInViewport(guestRoomID, 700, 600);
    const guestRoomSectionText3 = isInViewport(guestRoomID, 600, 400);

    const guestRoomSectionImg = isInViewport(guestRoomID, 400, 200);
    

    if(guestRoomSectionText1){
        guestRoomText.getElementsByTagName('h2')[0].classList.add('fade');
        guestRoomText.getElementsByTagName('div')[0].classList.add('fade');
        guestRoomIsAnimated1 = true;
    }
    if(guestRoomSectionText2){
        guestRoomText.getElementsByTagName('h3')[0].classList.add('fade');
        guestRoomIsAnimated2 = true;
    }
    if(guestRoomSectionText3){
        guestRoomText.nextElementSibling.classList.add('fade');
        guestRoomIsAnimated3 = true;
    }
   
    if(guestRoomSectionImg){
        guestRoomImg.classList.add('fade');
        guestRoomIsAnimated4 = true;
    }
}

function insideHallAnimation(){
    const insideHallSectionText1 = isInViewport(insideHallID, 800, 700);
    const insideHallSectionText2 = isInViewport(insideHallID, 700, 600);
    const insideHallSectionText3 = isInViewport(insideHallID, 600, 400);

    const insideHallSectionImg = isInViewport(insideHallID, 400, 200);
    

    if(insideHallSectionText1){
        insideHallText.getElementsByTagName('h2')[0].classList.add('fade');
        insideHallText.getElementsByTagName('div')[0].classList.add('fade');
        insideHallIsAnimated1 = true;
    }
    if(insideHallSectionText2){
        insideHallText.getElementsByTagName('h3')[0].classList.add('fade');
        insideHallIsAnimated2 = true;
    }
    if(insideHallSectionText3){
        insideHallText.nextElementSibling.classList.add('fade');
        insideHallIsAnimated3 = true;
    }
   
    if(insideHallSectionImg){
        insideHallImg.classList.add('fade');
        insideHallIsAnimated4 = true;
    }
}

function mealAnimation(){
    const mealSectionText1 = isInViewport(mealID, 800, 700);
    const mealSectionText2 = isInViewport(mealID, 700, 600);
    const mealSectionText3 = isInViewport(mealID, 600, 400);

    const mealSectionImg = isInViewport(mealID, 400, 200);
    

    if(mealSectionText1){
        mealText.getElementsByTagName('h2')[0].classList.add('fade');
        mealText.getElementsByTagName('div')[0].classList.add('fade');
        mealIsAnimated1 = true;
    }
    if(mealSectionText2){
        mealText.getElementsByTagName('h3')[0].classList.add('fade');
        mealIsAnimated2 = true;
    }
    if(mealSectionText3){
        mealText.nextElementSibling.classList.add('fade');
        mealIsAnimated3 = true;
    }
   
    if(mealSectionImg){
        mealImg.classList.add('fade');
        mealIsAnimated4 = true;
    }
}

function healingBathAnimation(){
    const healingBathSectionText1 = isInViewport(healingBathID, 800, 700);
    const healingBathSectionText2 = isInViewport(healingBathID, 700, 600);
    const healingBathSectionText3 = isInViewport(healingBathID, 600, 400);

    const healingBathSectionImg = isInViewport(healingBathID, 400, 200);
    

    if(healingBathSectionText1){
        healingBathText.getElementsByTagName('h2')[0].classList.add('fade');
        healingBathText.getElementsByTagName('div')[0].classList.add('fade');
        healingBathIsAnimated1 = true;
    }
    if(healingBathSectionText2){
        healingBathText.getElementsByTagName('h3')[0].classList.add('fade');
        healingBathIsAnimated2 = true;
    }
    if(healingBathSectionText3){
        healingBathText.nextElementSibling.classList.add('fade');
        healingBathIsAnimated3 = true;
    }
   
    if(healingBathSectionImg){
        healingBathImg.classList.add('fade');
        healingBathIsAnimated4 = true;
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