const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const informationID = document.getElementById("information-id");

const informationText = informationID.querySelector(".information-head");
const informationImg = document.querySelector(".information-card");

const searchNavigation = document.querySelectorAll(".search-navigation h4");

let informationIsAnimated1 = false;
let informationIsAnimated2 = false;

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

    if(!informationIsAnimated1 || !informationIsAnimated2){
        informationAnimation();
    }
});


function informationAnimation(){
    const informationSectionText = isInViewport(informationID, 400, 200);
    const informationSectionImg = isInViewport(informationID, 100, 0);

   if(informationSectionText){
        informationText.classList.add('fade');

        informationIsAnimated1 = true;
    }
    if(informationSectionImg){
        informationImg.classList.add('fade');
        informationIsAnimated2 = true;
    }
}


function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}

searchNavigation.forEach((element)=>{
    element.addEventListener('mouseover', e =>{
        setTimeout(()=>{
            e.target.nextElementSibling.style.visibility = "visible"
        }, 100)
    });
});

searchNavigation.forEach((element)=>{
    element.addEventListener('mouseout', e =>{
        setTimeout(()=>{
            e.target.nextElementSibling.style.visibility = "hidden"
        }, 100)
    });
});
