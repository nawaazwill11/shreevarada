import cb_common from './cb.common';
import parallax from '../components/parallax';

const cb_index = {
    document: {
        load: [
            ...cb_common.document.load, // Adds callback from cb.common 
            parallax.init,
        ],
    },
}

export default cb_index;