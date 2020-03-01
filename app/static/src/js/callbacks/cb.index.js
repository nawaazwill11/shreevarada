import cb_common from './cb.common';
import parallax from '../components/parallax';
// import autoinit from '../components/autoinit';

const cb_index = {
    document: {
        load: [
            ...cb_common.document.load, // Adds callback from cb.common 
            parallax.init,
            // autoinit,
        ],
    },
}

export default cb_index;