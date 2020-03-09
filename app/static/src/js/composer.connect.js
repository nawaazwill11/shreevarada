import material from './material';

function initialization () {
    const components = [
        {name: 'fab', options: {}},
        {name: 'parallax', options: {}},
        {name: 'carousel', options: {}},
    ]
    material.initComponents(components);
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

const composer = {
    initialization,
    fabClose,
}

export default composer;