const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");
const privacyPolicyID = document.getElementById("privacy-policy-id");

const privacyPolicyText1 = privacyPolicyID.querySelector(".privacy-policy-head");
const privacyPolicyBlocks = privacyPolicyID.querySelectorAll(".content-block");

let privacyPolicyIsAnimated1 = false;
let privacyPolicyIsAnimated2 = false;
let privacyPolicyIsAnimated3 = false;
let privacyPolicyIsAnimated4 = false;
let privacyPolicyIsAnimated5 = false;
let privacyPolicyIsAnimated6 = false;
let privacyPolicyIsAnimated7 = false;
let privacyPolicyIsAnimated8 = false;
let privacyPolicyIsAnimated9 = false;
let privacyPolicyIsAnimated10 = false;
let privacyPolicyIsAnimated11 = false;
let privacyPolicyIsAnimated12 = false;
let privacyPolicyIsAnimated13 = false;
let privacyPolicyIsAnimated14 = false;
let privacyPolicyIsAnimated15 = false;
let privacyPolicyIsAnimated16 = false;
let privacyPolicyIsAnimated17 = false;
let privacyPolicyIsAnimated18 = false;
let privacyPolicyIsAnimated19 = false;
let privacyPolicyIsAnimated20 = false;

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

    if(!privacyPolicyIsAnimated1 || !privacyPolicyIsAnimated2 || !privacyPolicyIsAnimated3 || !privacyPolicyIsAnimated4 || !privacyPolicyIsAnimated5 ||
       !privacyPolicyIsAnimated6 || !privacyPolicyIsAnimated7 || !privacyPolicyIsAnimated8 || !privacyPolicyIsAnimated9 || !privacyPolicyIsAnimated10 ||
       !privacyPolicyIsAnimated11 || !privacyPolicyIsAnimated12 || !privacyPolicyIsAnimated13 || !privacyPolicyIsAnimated14 || !privacyPolicyIsAnimated15 ||
       !privacyPolicyIsAnimated16 || !privacyPolicyIsAnimated17 || !privacyPolicyIsAnimated18 || !privacyPolicyIsAnimated19 || !privacyPolicyIsAnimated20){
      
        privacyPolicyAnimation();
    }
});


function privacyPolicyAnimation(){
    const privacyPolicySectionText = isInViewport(privacyPolicyID, 400, 200);

    const privacyPolicyBlock2_1 = isInViewport(privacyPolicyBlocks[1], 800, 700);
    const privacyPolicyBlock2_2 = isInViewport(privacyPolicyBlocks[1], 700, 600);

    const privacyPolicyBlock3_1 = isInViewport(privacyPolicyBlocks[2], 800, 700);
    const privacyPolicyBlock3_2 = isInViewport(privacyPolicyBlocks[2], 700, 600);

    const privacyPolicyBlock4_1 = isInViewport(privacyPolicyBlocks[3], 800, 700);
    const privacyPolicyBlock4_2 = isInViewport(privacyPolicyBlocks[3], 700, 600);
    const privacyPolicyBlock4_3 = isInViewport(privacyPolicyBlocks[3], 600, 500);

    const privacyPolicyBlock5_1 = isInViewport(privacyPolicyBlocks[4], 800, 700);
    const privacyPolicyBlock5_2 = isInViewport(privacyPolicyBlocks[4], 700, 600);

    const privacyPolicyBlock6_1 = isInViewport(privacyPolicyBlocks[5], 800, 700);
    const privacyPolicyBlock6_2 = isInViewport(privacyPolicyBlocks[5], 700, 600);
    const privacyPolicyBlock6_3 = isInViewport(privacyPolicyBlocks[5], 600, 500);

    const privacyPolicyBlock7_1 = isInViewport(privacyPolicyBlocks[6], 800, 700);
    const privacyPolicyBlock7_2 = isInViewport(privacyPolicyBlocks[6], 700, 600);

    const privacyPolicyBlock8_1 = isInViewport(privacyPolicyBlocks[7], 800, 700);
    const privacyPolicyBlock8_2 = isInViewport(privacyPolicyBlocks[7], 700, 600);

    const privacyPolicyBlock9_1 = isInViewport(privacyPolicyBlocks[8], 800, 700);
    const privacyPolicyBlock9_2 = isInViewport(privacyPolicyBlocks[8], 700, 600);
    const privacyPolicyBlock9_3 = isInViewport(privacyPolicyBlocks[8], 600, 500);

   if(privacyPolicySectionText){
        privacyPolicyText1.classList.add('fade');
        privacyPolicyBlocks[0].children[0].classList.add('fade');
        privacyPolicyBlocks[0].children[1].classList.add('fade');
        privacyPolicyBlocks[0].children[2].classList.add('fade');

        privacyPolicyIsAnimated1 = true;
    }
    if(privacyPolicyBlock2_1){
        privacyPolicyBlocks[1].children[0].classList.add('fade');
        privacyPolicyBlocks[1].children[1].classList.add('fade');

        privacyPolicyIsAnimated2 = true;
    }
    if(privacyPolicyBlock2_2){
        privacyPolicyBlocks[1].children[2].classList.add('fade');

        privacyPolicyIsAnimated3 = true;
    }

    if(privacyPolicyBlock3_1){
        privacyPolicyBlocks[2].children[0].classList.add('fade');
        privacyPolicyBlocks[2].children[1].classList.add('fade');

        privacyPolicyIsAnimated4 = true;
    }
    if(privacyPolicyBlock3_2){
        privacyPolicyBlocks[2].children[2].classList.add('fade');

        privacyPolicyIsAnimated5 = true;
    }

    if(privacyPolicyBlock4_1){
        privacyPolicyBlocks[3].children[0].classList.add('fade');
        privacyPolicyBlocks[3].children[1].classList.add('fade');

        privacyPolicyIsAnimated6 = true;
    }
    if(privacyPolicyBlock4_2){
        privacyPolicyBlocks[3].children[2].classList.add('fade');

        privacyPolicyIsAnimated7 = true;
    }
    if(privacyPolicyBlock4_3){
        privacyPolicyBlocks[3].children[3].classList.add('fade');

        privacyPolicyIsAnimated8 = true;
    }

    if(privacyPolicyBlock5_1){
        privacyPolicyBlocks[4].children[0].classList.add('fade');
        privacyPolicyBlocks[4].children[1].classList.add('fade');

        privacyPolicyIsAnimated9 = true;
    }
    if(privacyPolicyBlock5_2){
        privacyPolicyBlocks[4].children[2].classList.add('fade');

        privacyPolicyIsAnimated10 = true;
    }

    if(privacyPolicyBlock6_1){
        privacyPolicyBlocks[5].children[0].classList.add('fade');
        privacyPolicyBlocks[5].children[1].classList.add('fade');

        privacyPolicyIsAnimated11 = true;
    }
    if(privacyPolicyBlock6_2){
        privacyPolicyBlocks[5].children[2].classList.add('fade');

        privacyPolicyIsAnimated12 = true;
    }
    if(privacyPolicyBlock6_3){
        privacyPolicyBlocks[5].children[3].classList.add('fade');

        privacyPolicyIsAnimated13 = true;
    }

    if(privacyPolicyBlock7_1){
        privacyPolicyBlocks[6].children[0].classList.add('fade');
        privacyPolicyBlocks[6].children[1].classList.add('fade');

        privacyPolicyIsAnimated14 = true;
    }
    if(privacyPolicyBlock7_2){
        privacyPolicyBlocks[6].children[2].classList.add('fade');

        privacyPolicyIsAnimated15 = true;
    }

    if(privacyPolicyBlock8_1){
        privacyPolicyBlocks[7].children[0].classList.add('fade');
        privacyPolicyBlocks[7].children[1].classList.add('fade');

        privacyPolicyIsAnimated16 = true;
    }
    if(privacyPolicyBlock8_2){
        privacyPolicyBlocks[7].children[2].classList.add('fade');

        privacyPolicyIsAnimated17 = true;
    }

    if(privacyPolicyBlock9_1){
        privacyPolicyBlocks[8].children[0].classList.add('fade');
        privacyPolicyBlocks[8].children[1].classList.add('fade');

        privacyPolicyIsAnimated18 = true;
    }
    if(privacyPolicyBlock9_2){
        privacyPolicyBlocks[8].children[2].classList.add('fade');

        privacyPolicyIsAnimated19 = true;
    }
    if(privacyPolicyBlock9_3){
        privacyPolicyBlocks[8].children[3].classList.add('fade');

        privacyPolicyIsAnimated20 = true;
    }

    
}




function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}