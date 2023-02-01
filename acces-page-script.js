const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const accessID = document.getElementById("access-id");

const accessText1 = accessID.querySelector(".access-head");
const accessText2 = accessID.querySelector(".access-info");
const accessImg = document.querySelector(".access-map");

let accessIsAnimated1 = false;
let accessIsAnimated2 = false;
let accessIsAnimated3 = false;

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

    if(!accessIsAnimated1 || !accessIsAnimated2 || !accessIsAnimated3){
        accessAnimation();
    }
});


function accessAnimation(){
    const accessSectionText1 = isInViewport(accessID, 400, 200);
    const accessSectionImg = isInViewport(accessID, 400, 200);

    const accessSectionText2 = isInViewport(accessID, -400, -500);

   if(accessSectionText1){
        accessText1.classList.add('fade');

        accessIsAnimated1 = true;
    }
    if(accessSectionImg){
            accessImg.classList.add('fade');
            accessIsAnimated2 = true;
    }

    if(accessSectionText2){
        accessText2.classList.add('fade');

        accessIsAnimated3 = true;
    }
}


function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}