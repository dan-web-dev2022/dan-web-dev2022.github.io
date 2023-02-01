const mainHead = document.querySelector(".main-head");

const topID = document.getElementById("topID");

const btnLink = document.querySelector(".page-btn a");

let pageName = window.location.href.split("=")[1];

if(pageName=="index"){
    btnLink.href = './index.html';
}

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
});


function isInViewport(el, n1, n2) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= n1 && rect.top >=n2

    );
}