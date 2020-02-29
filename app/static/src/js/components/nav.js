function navInit() {
    const fabs = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fabs, {
        direction: 'bottom',
        hoverEnabled: false
    });
}

function navClose() {
    const nav_fab = document.querySelector('.fixed-action-btn');
    const nav_fab_instance = M.FloatingActionButton.getInstance(nav_fab);
    nav_fab.close();
}

export { navInit, navClose };