function scrollToElement(pageElement, addToHeight) {

    let positionX = 0,         
        positionY = 0;    

    while(pageElement != null){       
        
        positionX += pageElement.offsetLeft;  
        positionY += pageElement.offsetTop + addToHeight;
        // Adds offset of parent (body in most cases)
        // such that if the parent is at some offset 
        // other than 0. it will add the parents offset as well.
        pageElement = pageElement.offsetParent;        
    }
    
    window.scroll({
        top: positionY,
        left: positionX,
        behavior: 'smooth'
    });
}

function navbarTransition() {
    let nav = document.querySelector('.nav-container');
    nav.style.top = '0';
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            nav.style.top = "0";
        } else {
            nav.style.top = "-65px";
        }
        prevScrollpos = currentScrollPos;
    }
}

const helper = {
    scrollToElement: scrollToElement,
    navbarTransition: navbarTransition,
}


export default helper;