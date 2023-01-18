const mobileMenu = document.querySelector(".mobile-menu");
const mainHead = document.querySelector(".main-head");
const mainNav = document.querySelector(".main-nav");
const mainHeadBg = document.querySelector(".main-head-bg");
const b = document.querySelector("body");

const homeID = document.getElementById("hero-id");
const newsID = document.getElementById("news-id");
const cultureID = document.getElementById("culture-id");
const productID = document.getElementById("product-id");
const caseStudyID = document.getElementById("case-study-id");
const recruitID = document.getElementById("recruit-id");

const navHome = document.querySelector(".nav-home");
const navNews = document.querySelector(".nav-news");
const navCulture = document.querySelector(".nav-culture");
const navProduct = document.querySelector(".nav-product");
const navCaseStudy = document.querySelector(".nav-case-study");
const navrecruit1 = document.querySelector(".nav-recruit1");

const hamMenu = document.querySelector(".ham-menu");
const closeIcon = document.querySelector(".close");

const news = document.querySelector(".news");
const culture = document.querySelector(".culture");
const product = document.querySelector(".product");
const caseStudy = document.querySelector(".case-study");
const recruit = document.querySelector(".recruit");


let isMobile = false;
let mobileMenuActive = false;

mobileMenu.addEventListener('click', e=>{
    isMobile = true;

    if(!mobileMenuActive){
        hamMenu.style.display = 'none';
        closeIcon.style.display = 'flex';
        mainHead.classList.remove('ham-menu-inactive');
        mainHead.classList.add('ham-menu-active');

        mainNav.classList.toggle('nav-active');
        b.classList.add('stop-scrolling');

        mobileMenuActive = true;
    }else{
        const intervalID = setInterval(()=>{
            mainHead.classList.remove('ham-menu-active');
            hamMenu.style.display = 'flex';
            closeIcon.style.display = 'none';
            mainNav.classList.toggle('nav-active');
            b.classList.remove('stop-scrolling');

            clearInterval(intervalID);
        }, 800);
       
        mobileMenuActive = false;
        mainHead.classList.add('ham-menu-inactive');
    }
   

});


mainNav.addEventListener('click', e=>{
    if (window.innerWidth < 700){
        if(e.target.tagName == 'A')
        hamMenu.style.display = 'flex';
        closeIcon.style.display = 'none';
        mainHead.classList.toggle('ham-menu-active');

        mainNav.classList.toggle('nav-active');
        b.classList.remove('stop-scrolling');

        mobileMenuActive = false;
    }
});



document.addEventListener('scroll', function (e) {
    if(window.scrollY >10){
        mainHeadBg.classList.add('add-shadow');
    }else{
        mainHeadBg.classList.remove('add-shadow');
    }
   
    if (window.innerWidth > 700){
        const homeSection = isInViewport(homeID);
        const newsSection = isInViewport(newsID);
        const cultureSection = isInViewport(cultureID);
        const productSection = isInViewport(productID);
        const caseStudySection = isInViewport(caseStudyID);
        const recruitSection = isInViewport(recruitID);
        
        if(homeSection){
            navHome.classList.add('link-active');
    
            navNews.classList.remove('link-active');
            navCulture.classList.remove('link-active');
            navCaseStudy.classList.remove('link-active');
            navrecruit1.classList.remove('link-active');
            navProduct.parentElement.classList.remove('product-link-active');
            navProduct.classList.remove('link-active');
        }else if(newsSection){
            news.classList.add('add-left-animation');

            navNews.classList.add('link-active');
    
            navHome.classList.remove('link-active');
            navCulture.classList.remove('link-active');
            navCaseStudy.classList.remove('link-active');
            navrecruit1.classList.remove('link-active');
            navProduct.parentElement.classList.remove('product-link-active');
            navProduct.classList.remove('link-active');
        }else if(cultureSection){
            culture.classList.add('add-right-animation');

            navCulture.classList.add('link-active');
    
            navHome.classList.remove('link-active');
            navNews.classList.remove('link-active');
            navCaseStudy.classList.remove('link-active');
            navrecruit1.classList.remove('link-active');
            navProduct.parentElement.classList.remove('product-link-active');
            navProduct.classList.remove('link-active');
        }else if(productSection){
            product.classList.add('add-left-animation');

            navProduct.parentElement.classList.add('product-link-active');
            navProduct.classList.add('link-active');

            navCulture.classList.remove('link-active');
            navHome.classList.remove('link-active');
            navNews.classList.remove('link-active');
            navCaseStudy.classList.remove('link-active');
            navrecruit1.classList.remove('link-active');
        }else if(caseStudySection){
            caseStudy.classList.add('add-right-animation');

            navCaseStudy.classList.add('link-active');
    
            navHome.classList.remove('link-active');
            navNews.classList.remove('link-active');
            navCulture.classList.remove('link-active');
            navrecruit1.classList.remove('link-active');
            navProduct.parentElement.classList.remove('product-link-active');
            navProduct.classList.remove('link-active');
        }else if(recruitSection){
            recruit.classList.add('add-left-animation');

            navrecruit1.classList.add('link-active');
    
            navHome.classList.remove('link-active');
            navNews.classList.remove('link-active');
            navCulture.classList.remove('link-active');
            navCaseStudy.classList.remove('link-active');
            navProduct.parentElement.classList.remove('product-link-active');
            navProduct.classList.remove('link-active');
        }
    }
});


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}