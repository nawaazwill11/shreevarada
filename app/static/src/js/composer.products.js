import material from './material';
import helper from './helper';

function initialization () {
    const components = [
        {name: 'fab', options: {}},
        {name: 'parallax', options: {}},
        {name: 'carousel', options: { duration: 300, fullWidth: true, indicators: true }},

    ]
    const slider = material.components.slider;
    slider.object.init(slider.elem, {});
    material.initComponents(components);
    // slideCarousel();
    scrollToSection();
}


function getNavFabInstance() {
    const nav_fab = document.querySelector('.fixed-action-btn');
    const nav_fab_instance = M.FloatingActionButton.getInstance(nav_fab);
    return nav_fab_instance;
}

function fabActive(fab) {
    console.log(fab.dataset.active);
    if(fab.dataset.active == 'true') 
        return true
    return false
}

function toggleFabActive(fab) {
    if (fab.dataset.active == 'false') {
        fab.setAttribute('data-active', true);
        return true
    }
    else {
        fab.setAttribute('data-active', false);
        return false
    }
}
function fabClose() {
    const nav_fab = document.querySelector('.fixed-action-btn');
    const instance = getNavFabInstance(nav_fab);
    if(fabActive(nav_fab)){
        instance.close();
    } else {
        instance.open();
    }
    toggleFabActive(nav_fab);
}

function slideCarousel() {
    const carousel = document.querySelector('#top_slider');
    const instance = M.Carousel.getInstance(carousel);
    setInterval(function () {
        instance.next();
    },5000);
}

function scrollToSection() {
    const anchors = document.querySelectorAll('.pointer');
    
    const nav = document.querySelector('nav');
    const addToHeight = -Number(window.getComputedStyle(nav).height.match(/[0-9.]+/)[0]) / 2;

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function () {
            const reference = anchor.dataset.scrollto;
            const elem_to_scroll = document.querySelector('#' + reference);
            
            helper.scrollToElement(elem_to_scroll, addToHeight);
        })
    });

    
}

const composer = {
    initialization,
    fabClose
}

export default composer;