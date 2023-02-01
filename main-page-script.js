const mainHead = document.querySelector(".main-head");
const heroBackground = document.querySelector(".hero-background");

const heroID = document.getElementById("topID");
const introductionID = document.getElementById("introduction-id");
const ryokanID = document.getElementById("ryokan-id");
const experienceID = document.getElementById("experience-id");
const informationID = document.getElementById("information-id");

const introductionImg = document.querySelector(".introduction-img");
const ryokanImg = document.querySelector(".ryokan-img");
const experienceImg = document.querySelectorAll(".experience-card");
const informationImg = document.querySelector(".information-card");
const informationArrow = document.querySelector(".information-arrow")

const introductionText = document.querySelector(".introduction-head");
const ryokanText = document.querySelector(".ryokan-head");
const experienceText = document.querySelector(".experience-head");
const informationText = document.querySelector(".information-head");

const reservationLink = document.querySelector(".reservation-link");

let introductionIsAnimated1 = false;
let introductionIsAnimated2 = false;

let ryokanIsAnimated1 = false;
let ryokanIsAnimated2 = false;

let experienceIsAnimated1 = false;
let experienceIsAnimated2 = false;
let experienceIsAnimated3 = false;

let informationIsAnimated1 = false;
let informationIsAnimated2 = false;
let informationIsAnimated3 = false;
let informationIsAnimated4 = false;

let navigationIsActive = false;

let imgCount = 1;
setInterval(()=>{
    if(imgCount<3){
        imgCount += 1;
    }else{
        imgCount = 1;
    }
    heroBackground.classList.add("reset-animation");
    heroBackground.style.backgroundImage = `url('./images/top_mainimage_0${imgCount}.jpg')`;

    setTimeout(()=>{
        heroBackground.classList.remove("reset-animation");
        heroBackground.classList.add("animate-background");
    },100);

}, 9000);



document.addEventListener('scroll', function (e) {
    const heroSection = isInViewport(heroID, 0, -700);

    if(heroSection){
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

    if(!introductionIsAnimated1 || !introductionIsAnimated2){
        introductionAnimation();
    }
    if(!ryokanIsAnimated1 || !ryokanIsAnimated2){
        ryokanAnimation();
    }
    if(!experienceIsAnimated1 || !experienceIsAnimated2 || !experienceIsAnimated3){
        experienceAnimation();
    }
    if(!informationIsAnimated1 || !informationIsAnimated2 || !informationIsAnimated3 || !informationIsAnimated4){
        informationAnimation();
    }
});


function introductionAnimation(){
    const introductionSectionImg = isInViewport(introductionID, 580, 410);
    const introductionSectionText = isInViewport(introductionID, 400, 200);

    if(introductionSectionImg){
        introductionImg.classList.add('fade');
        introductionIsAnimated1 = true;
    }
   if(introductionSectionText){
        introductionText.classList.add('fade');
        introductionIsAnimated2 = true;
    }
}


function ryokanAnimation(){
    const ryokanSectionImg = isInViewport(ryokanID, 580, 410);
    const ryokanSectionText = isInViewport(ryokanID, 400, 200);

    if(ryokanSectionImg){
        ryokanImg.classList.add('fade');
        ryokanIsAnimated1 = true;
    }
   if(ryokanSectionText){
        ryokanText.classList.add('fade');
        ryokanIsAnimated2 = true;
    }
}


function experienceAnimation(){
    const experienceSectionText1 = isInViewport(experienceID, 830, 720);
    const experienceSectionText2 = isInViewport(experienceID, 730, 600);
    const experienceSectionImg = isInViewport(experienceID, 630, 500);

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


function informationAnimation(){
    const informationSectionText1 = isInViewport(informationID, 730, 620);
    const informationSectionText2 = isInViewport(informationID, 630, 400);
    const informationSectionImg = isInViewport(informationID, 370, 100);
    const informationSectionArrow = isInViewport(informationID, -300, -500);

    if(informationSectionText1){
        informationText.getElementsByTagName('h2')[0].classList.add('fade');
        informationText.getElementsByTagName('div')[0].classList.add('fade');
        informationIsAnimated1 = true;
    }
    if(informationSectionText2){
        informationText.getElementsByTagName('h3')[0].classList.add('fade');
        informationIsAnimated2 = true;
    }
    if(informationSectionImg){
        informationImg.classList.add('fade');
        informationIsAnimated3 = true;
    }
    if(informationSectionArrow){
        informationArrow.classList.add('fade');
        informationIsAnimated4 = true;
    }
}


function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}


function changeBgImg(){
    heroBackground.style.backgroundImage = "url('./images/top_mainimage_03.jpg')";

    setInterval(()=>{
        heroBackground.style.backgroundImage = `url('./images/top_mainimage_0${1}.jpg')`;
    }, 6000);
}

