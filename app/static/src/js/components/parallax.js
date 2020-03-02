const parallax = function () {
    function init(option={}) {
        const elems = document.querySelectorAll('.parallax');
        const instances = M.Parallax.init(elems, option);
        console.log(instances);
    }

    return {
        init: init,
    }

}();

export { parallax as default };
