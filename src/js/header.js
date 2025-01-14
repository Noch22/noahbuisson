let tl = gsap.timeline({delay: 0});


var burgers = document.querySelectorAll('button.menu');
var menupage = document.querySelector('.menu_page');
burgers.forEach(item => {
    item.addEventListener('click', function() {
        burgers.forEach(item => {
            item.classList.toggle('opened');
        });
        menupage.classList.toggle('opened');


    });

});

const gradientBox = document.querySelector('.gradient');

 window.matchMedia("(max-width: 768px)").matches ? 

" " : tl.to(gradientBox, {
    duration: 10, // Durée de l'animation en secondes
    background: 'linear-gradient(135deg, #ffcc00, #ff6699)', // Nouveau dégradé
    ease: 'power2.inOut', // Facilité d'animation (vous pouvez ajuster cela selon vos préférences)
    repeat: -1, // Répéter l'animation indéfiniment
    yoyo: true // Faire l'animation en sens inverse à la fin
});

document.addEventListener('DOMContentLoaded', function() {  
    const togglebutton = document.querySelector('button.menu');
    const links = document.querySelectorAll('.menu-item a');
    let isOpen = false;

    gsap.set(".menu-item p", { y: 225 });

    const timeline = gsap.timeline({ paused: true });
    const mobile = gsap.timeline({ paused: true });
    if(window.matchMedia("(max-width: 768px)").matches){ 
        gsap.set(".menu-item p", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
    }
    

    timeline.to(".custom-logo-link", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.inOut",
    })

    timeline.to(".menu_page", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
    }, "-=.5")

    timeline.to(".header", {
        duration: 1,
        ease: "power4.inOut",
    });
    
    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.2,
        ease: "power4.out",
        opacity: 1,
    }, "-=1");
    

    //MOBILE 

    mobile.to(".custom-logo-link", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.inOut",
    })

    mobile.to(".menu_page", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
    }, "-=.5")

    mobile.to(".header", {
        duration: 1,
        ease: "power4.inOut",
    });

    mobile.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        opacity: 1,
        ease: "power4.out",
    }, "-=1")

if(togglebutton){
    togglebutton.addEventListener('click', function() {
        if (isOpen) {
            if(window.matchMedia("(max-width: 768px)").matches){ 
                mobile.reverse();
            } else {
            timeline.reverse();
            }
        } else {
            if(window.matchMedia("(max-width: 768px)").matches){ 
                mobile.play();
            } else {
            timeline.play();
            }
        }
        isOpen = !isOpen;
    });
}
    links.forEach(link => {
    link.addEventListener('click', function() {
        if(window.matchMedia("(max-width: 768px)").matches){ 
            mobile.reverse();
        } else {
        timeline.reverse();
        }
        isOpen = !isOpen;
        togglebutton.classList.toggle('opened');
        menupage.classList.toggle('opened');
    });
});


});


