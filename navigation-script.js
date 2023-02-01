
const experienceLink = document.querySelector(".main-head-experience-link ul");
const pageExperienceLink = document.querySelector(".page-main-head nav ul .main-head-experience-link ul");

const mainNavigation = document.querySelector(".main-head nav ul"); 
const pageNavigation = document.querySelector(".page-main-head nav ul"); 

const mobileMenu = document.querySelector(".mobile-menu");
const hamMenu = document.querySelector(".ham-menu");
const mainHeader = document.querySelector(".main-head");
const b = document.querySelector("body");
const navigation = document.querySelector(".main-head nav");

const closeIcon = document.querySelector(".close");

let mobileActive = false;



mobileMenu.addEventListener('click', ()=>{
    if(mobileActive == false){
        mainHeader.classList.add('ham-menu-active');
        hamMenu.style.display = 'none';
        closeIcon.style.display = 'flex';
    
        b.classList.add('stop-scrolling');
        navigation.style.display = 'flex';
    
        mobileActive = true;
    }else{
        mainHeader.classList.remove('ham-menu-active');
        hamMenu.style.display = 'flex';
        closeIcon.style.display = 'none';
    
        b.classList.remove('stop-scrolling');
        navigation.style.display = 'none';
    
        mobileActive = false;
    }
})

mainNavigation.addEventListener('mouseover', e =>{
    const element = e.target.parentElement.previousElementSibling;
    if(element!= null){
        if( e.target.tagName == "SPAN"){
            experienceLink.style.display = "none";
        }
        if( element.tagName == "SPAN"){
            element.style.opacity = "1";
            experienceLink.style.display = "none";
        }else if (e.target.tagName == "H3"){
            e.target.previousElementSibling.style.opacity = "1";
            experienceLink.style.display = "flex";
        }else if(e.target.classList.contains("main-head-link")){
            
        }
    }
});

if(pageNavigation!= null){
    pageNavigation.addEventListener('mouseover', e =>{
        const element = e.target.parentElement.previousElementSibling;
        if(element!= null){
            if( e.target.tagName == "SPAN"){
                pageExperienceLink.style.display = "none";
            }
            if( element.tagName == "SPAN"){
                element.style.opacity = "1";
                pageExperienceLink.style.display = "none";
            }else if (e.target.tagName == "H3"){
                e.target.previousElementSibling.style.opacity = "1";
                pageExperienceLink.style.display = "flex";
            }else if(e.target.classList.contains("main-head-link")){
                
            }
        }
    });
}


mainNavigation.addEventListener('mouseout', e =>{
  
    const element = e.target.parentElement.previousElementSibling;
    if(element!= null){
        if( element.tagName == "SPAN"){
            element.style.opacity = "0";
        } else if (e.target.tagName == "H3"){
            e.target.previousElementSibling.style.opacity = "0";
        }
        if(e.target.parentElement.classList.contains('main-head-experience-link') && e.fromElement.tagName == "UL"
           && !e.toElement.classList.contains('top-navigation')){
            e.target.style.display = "none";
        }
    }   
});

if(pageNavigation!= null){
    pageNavigation.addEventListener('mouseout', e =>{
        const element = e.target.parentElement.previousElementSibling;
        if(element!= null){
            if( element.tagName == "SPAN"){
                element.style.opacity = "0";
            } else if (e.target.tagName == "H3"){
                e.target.previousElementSibling.style.opacity = "0";
            }
            if(e.target.parentElement.classList.contains('main-head-experience-link') && e.fromElement.tagName == "UL"
            && !e.toElement.classList.contains('top-navigation')){
             e.target.style.display = "none";
         }
             
        }  
    });
    
}
