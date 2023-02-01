const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const aboutID = document.getElementById("about-id");
const historyID = document.getElementById("history-id");


const aboutText = aboutID.querySelector(".about-head");
const historyText1 = historyID.querySelector(".about-head");
const historyText2 = document.querySelector(".history-text");


const historyImg = document.querySelectorAll(".history-image");

let aboutIsAnimated = false;

let historyIsAnimated1 = false;
let historyIsAnimated2 = false;
let historyIsAnimated3 = false;
let historyIsAnimated4 = false;
let historyIsAnimated5 = false;



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

    if(!aboutIsAnimated){
        aboutAnimation();
    }
    if(!historyIsAnimated1 || !historyIsAnimated2 || !historyIsAnimated3 || !historyIsAnimated4 || !historyIsAnimated5){
        historyAnimation();
    }
});


function aboutAnimation(){
    const aboutSectionText = isInViewport(aboutID, 400, 200);

   if(aboutSectionText){
        aboutText.getElementsByTagName('h2')[0].classList.add('fade');
        aboutText.getElementsByTagName('div')[0].classList.add('fade');
        aboutText.getElementsByTagName('h3')[0].classList.add('fade');
        aboutText.nextElementSibling.classList.add('fade');
        aboutIsAnimated = true;
    }
}

function historyAnimation(){
    const historySectionAText1 = isInViewport(historyID, 650, 500);
    const historySectionAText2 = isInViewport(historyID, 500, 450);
    const historySectionImg = isInViewport(historyID, 450, 300);

    const historySectionBText1 = isInViewport(historyID, -100, -200);
    const historySectionBText2 = isInViewport(historyID, -200, -300);

    if(historySectionAText1){
        historyText1.getElementsByTagName('h2')[0].classList.add('fade');
        historyText1.getElementsByTagName('div')[0].classList.add('fade');
        historyIsAnimated1 = true;
    }
    if(historySectionAText2){
        historyText1.getElementsByTagName('h3')[0].classList.add('fade');
        historyIsAnimated2 = true;
    }
    if(historySectionImg){
        historyImg[0].classList.add('fade');
        historyIsAnimated3 = true;
        setTimeout(()=>{
            historyImg[1].classList.add('fade');
        },500);
        setTimeout(()=>{
            historyImg[2].classList.add('fade');
        },1000);
    }

    if(historySectionBText1){
        historyText2.getElementsByTagName('h4')[0].classList.add('fade');
        historyText2.getElementsByTagName('div')[1].classList.add('fade');

        historyText2.getElementsByTagName('h4')[1].classList.add('fade');
        historyText2.getElementsByTagName('div')[3].classList.add('fade');

        historyIsAnimated4 = true;
    }
    if(historySectionBText2){
        historyText2.getElementsByTagName('p')[0].classList.add('fade');
        historyText2.getElementsByTagName('p')[1].classList.add('fade');
        historyIsAnimated5 = true;
    }
}



function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}