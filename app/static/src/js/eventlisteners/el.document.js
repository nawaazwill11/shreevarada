/**
 * Contains definitions for event on the document.
 * A variable consists of all the function representing
 * various event-listeners.
 * Callable using dot (.) notation.
 */

// namespace
const event_document = function () {

    function onload(callbacks) {
        document.addEventListener('DOMContentLoaded', function() {
            callbacks.forEach(cb => {
                console.log(cb);
                cb();
            })
        });   
    }

    return {
        onload: onload,
    }
}(); // Call to inject the function into the global scope.

export default event_document;