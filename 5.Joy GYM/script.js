const mobileMenu = document.querySelector(".mobile-menu");
const hamMenu = document.querySelector(".ham-menu");
const navUL = document.querySelector("nav ul");
const li = document.querySelectorAll("nav ul li");
const mainHead = document.querySelector(".main-head");
const logo = document.querySelector(".logo");
const closeIcon = document.querySelector(".close");
const arrowIcons = document.querySelectorAll(".arrow-icon");
const answers = document.querySelectorAll(".question-respose");

let menuActive = false;
let mobileScreen = false;





mobileMenu.addEventListener('click', ()=>{
    mobileScreen = true;
    if(menuActive){
        navUL.style.display = 'none';
        closeIcon.style.display = 'none';
        hamMenu.style.display = 'flex';
        menuActive = false;
    }else{
        navUL.style.display = 'block';
        closeIcon.style.display = 'block';
        hamMenu.style.display = 'none';
        menuActive = true;
    }
    mainHead.classList.toggle('mobile-active')
    logo.classList.toggle('active');
    li.forEach((element)=>{
        element.classList.toggle('active');
    });
    
});

 navUL.addEventListener('click', (e)=>{
    if(mobileScreen){
        navUL.style.display = 'none';
        menuActive = false;
        mobileScreen = false;
        mainHead.classList.toggle('mobile-active')
        logo.classList.toggle('active');
        li.forEach((element)=>{
        element.classList.toggle('active');
        });
        closeIcon.style.display = 'none';
        hamMenu.style.display = 'flex';
    }

 })

logo.addEventListener('click', (e)=>{
    if(mobileScreen){
        navUL.style.display = 'none';
        menuActive = false;
        mobileScreen = false;
        mainHead.classList.toggle('mobile-active')
        logo.classList.toggle('active');
        li.forEach((element)=>{
        element.classList.toggle('active');
        });
        closeIcon.style.display = 'none';
        hamMenu.style.display = 'flex';
    }
});

arrowIcons.forEach((arrow)=>{
    arrow.addEventListener('click', e=>{
        let rowNumber = e.target.parentElement.getAttribute('row-number');
        
        answers.forEach((answer)=>{
            let answerRow = answer.getAttribute('row-number');
            if(rowNumber === answerRow){
                answer.classList.toggle('response-active');
            }
        })
    });
});