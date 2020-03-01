const sw = function () {

    function register() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('Service Worker is registered');
                })
                .catch(err => {
                    console.error('Registration failed:', err);
                });
            });
        }   
    }

    return {
        register: register,
    }
}();

export default sw;