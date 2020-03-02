import cb_common from './cb.common';
import parallax from '../components/parallax';
import carousel from '../components/carousel';

const cb_index = {
    document: {
        load: [
            ...cb_common.document.load, // Adds callback from cb.common 
            parallax.init,
            carousel.init,
        ],
    },
}

export default cb_index;