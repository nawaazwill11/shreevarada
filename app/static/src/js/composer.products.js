import material from './material';
import helper from './helper';

function initialization () {
    return new Promise(resolve => {
        const components = [
            {name: 'fab', options: {}},
            // {name: 'slider', options: {full_width: true, indicators: true}},
        ]
        resolve(material.initComponents(components));
    })

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
function sectionFilter() {
    const filter_items = document.querySelectorAll('.filter-item');
    filter_items.forEach(f_item => {
        f_item.addEventListener('click', function (e) {
            const item = e.target;
            const section_name = item.dataset.show;
            // const selected_section = document.querySelector('#' + section_name);
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                if (section.id !== section_name)
                    section.style.display = 'none';
            })
        })
    })
}

function toggleProductsView(section, button) {
    const toggle = section.dataset.toggle;
    let elem_list = section.querySelectorAll(`.card`);
    const length = 12;
    console.log(toggle)
    if (toggle == 'show') {
        elem_list.forEach(elem => {
            // if (elem.style.display == 'none') {
                // elem.style.display == 'block';
                elem.setAttribute('style', "{display: block}");
                console.log(elem.style.display);
            // }
        });
        section.dataset.toggle = 'hide';
    }
    else {
        if (elem_list.length > length) {
            elem_list = Array.from(elem_list);
            elem_list.splice(0, 12);
            console.log(elem_list);
            elem_list.forEach(elem => {
                elem.style.display = 'none';
            })
            section.dataset.toggle = 'show';
        }
    }
    return toggle;
}

function interaction(e) {
    const action = e.target;
    const section = action.closest('.section');
    if (toggleProductsView(section, action) == 'show') {
        action.innerHTML = 'Hide all';
    } else {
        action.innerHTML = 'Show all';
    }
}

const composer = {
    initialization,
    fabClose,
    toggleProductsView,
    interaction,
}

export default composer;