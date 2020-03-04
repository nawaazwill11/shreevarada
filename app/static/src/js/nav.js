function getNavFabInstance() {
    const nav_fab = document.querySelector('.fixed-action-btn');
    const nav_fab_instance = M.FloatingActionButton.getInstance(nav_fab);
    console.log(nav_fab);
    return nav_fab_instance;
}

function navOpened(instance) {
    console.log(instance)
    if (instance.isOpen) 
        return true;
    return false
}
const nav = function () {

    function init() {
        const fabs = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(fabs, {
            direction: 'bottom',
            hoverEnabled: true,
        });
    }
    
    function close() {
        const nav_fab_instance = getNavFabInstance();
        console.log(nav_fab_instance);
        if (navOpened(nav_fab_instance)) {
            nav_fab_instance.close();
            return true;
        }
    }

    return {
        init: init,
        close: close,
    }
}();

export { nav as default };