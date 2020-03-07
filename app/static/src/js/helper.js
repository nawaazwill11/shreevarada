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

const helper = {
    scrollToElement: scrollToElement,
}

export default helper;