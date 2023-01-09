const extendedMenu = document.querySelector(".first-navigation ul li");
const secondNavigation = document.querySelector(".second-navigation");
const questionIcon = document.querySelector(".questions");

const menu = document.querySelector(".mobile-menu");
const hamMenu = document.querySelector(".ham-menu");
const navigation = document.querySelector("nav");
const mainHead = document.querySelector(".main-head");
const b = document.querySelector("body");
const headButtons = document.querySelector(".main-head-buttons");
const logo = document.querySelector(".logo");
const firstNavigation = document.querySelector(".first-navigation");
const navigationLinks = document.querySelectorAll("nav ul");
const closeIcon = document.querySelector(".close");

let mobileMenuActive = true;





extendedMenu.addEventListener('click', (e)=>{
    secondNavigation.classList.toggle('extended-menu-active');
});
questionIcon.addEventListener('click', (e)=>{
    if(e.target.classList.contains('question-icon')){
        if(e.target.parentElement.nextElementSibling.classList.contains('show-q-response')){
            e.target.parentElement.nextElementSibling.classList.remove('show-q-response');
            e.target.parentElement.nextElementSibling.innerHTML = '';
        }else{
        e.target.parentElement.nextElementSibling.classList.add('show-q-response');
        e.target.parentElement.nextElementSibling.innerHTML = `<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum nesciunt error sint labore voluptatum quaerat,
         porro earum maxime est vero repellat eius voluptatibus,
        reprehenderit debitis. Nam facilis omnis molestiae voluptas.
    </p>`
        }
    }
});

menu.addEventListener('click', (e)=>{
        if(mobileMenuActive){
            mainHead.classList.remove('ham-menu-inactive');
            mainHead.classList.toggle('ham-menu-active');
            menu.classList.toggle('menu-active');
            logo.classList.toggle('menu-active');

            hamMenu.style.display = 'none';
            closeIcon.style.display = 'flex';
            b.classList.add('stop-scrolling');
            const intervalID1 = setInterval(()=>{
                headButtons.classList.toggle('mobile-menu-buttons-active');
              
                firstNavigation.classList.toggle('first-navigation-links-active');
                secondNavigation.classList.toggle('second-navigation-links-active');
                firstNavigation.firstElementChild.classList.toggle('first-navigation-links-active');
                secondNavigation.firstElementChild.classList.toggle('first-navigation-links-active');
    
                mobileMenuActive = false;
                clearInterval(intervalID1);
            }, 800);
          
        }else{
            mainHead.classList.add('ham-menu-inactive');

            firstNavigation.classList.toggle('first-navigation-links-active');
            secondNavigation.classList.toggle('second-navigation-links-active');
            firstNavigation.firstElementChild.classList.toggle('first-navigation-links-active');
            secondNavigation.firstElementChild.classList.toggle('first-navigation-links-active');

            const intervalID2 = setInterval(()=>{
                mainHead.classList.toggle('ham-menu-active');
                menu.classList.toggle('menu-active');
                logo.classList.toggle('menu-active');

                hamMenu.style.display = 'flex';
                closeIcon.style.display = 'none';
                b.classList.remove('stop-scrolling');
    
                headButtons.classList.toggle('mobile-menu-buttons-active');
               
    
                mobileMenuActive = true;
                clearInterval(intervalID2);
            }, 800);
        }
});

navigationLinks.forEach(element =>{
    element.addEventListener('click', e=>{

        hamMenu.style.display = 'flex';
        closeIcon.style.display = 'none';
        mobileMenuActive = true;

        mainHead.classList.toggle('ham-menu-active');
        logo.classList.toggle('menu-active');
        menu.classList.toggle('menu-active');

        firstNavigation.classList.toggle('first-navigation-links-active');
        secondNavigation.classList.toggle('second-navigation-links-active');
        firstNavigation.firstElementChild.classList.toggle('first-navigation-links-active');
        secondNavigation.firstElementChild.classList.toggle('first-navigation-links-active');
        headButtons.classList.toggle('mobile-menu-buttons-active');

        b.classList.remove('stop-scrolling');
        
})

});
/*
menu.addEventListener('click', (e)=>{
    if(menuActive === false){
        mainHead.classList.add('ham-menu-active');
        navigation.classList.add('navigation');
        b.classList.add('stop-scrolling');

        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        navLinks.style.display = 'block';
        menuActive = true;
    }else if(menuActive === true){
        navLinks.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'flex';
        mainHead.classList.add('ham-menu-inactive');
        menuActive = false;
       
       
        

        const id = setInterval(()=>{
            mainHead.classList.remove('ham-menu-active');
            b.classList.remove('stop-scrolling');
            mainHead.classList.remove('ham-menu-inactive');
            navigation.classList.remove('navigation');
            
            clearInterval(id);
        }, 800);
    }
  
});

navLinks.addEventListener('click', (e)=>{
    mainHead.classList.toggle('ham-menu-active');
    navigation.classList.toggle('navigation');
    navLinks.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'flex';

    b.classList.toggle('stop-scrolling');
    menuActive = false;
})
*/