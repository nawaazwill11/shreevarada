const carousel = function () {

    function init(options={}) {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, options);
    }

    return {
        init: init
    }
}();

export { carousel as default};