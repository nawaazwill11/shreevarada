const parallax = function () {
    function init(option={}) {
        const elems = document.querySelectorAll('.parallax');
        const instances = M.Parallax.init(elems, option);

    }

    return {
        init: init,
    }

}();

export default parallax;
