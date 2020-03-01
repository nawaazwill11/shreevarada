import nav from '../components/nav';
import sw from '../components/service-worker';

const cb_common =  {
    document: {
        load: [
            nav.init,
            sw.register
        ],
        click: []
    }
}

export { cb_common as default }