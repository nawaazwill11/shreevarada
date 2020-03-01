/**
 * Create a event-callback composition.
 */

// Fetch callbacks
import cb_index from './callbacks/cb.index';

// Fetch events
import event_document from './eventlisteners/el.document';

// Pass callbacks to an event.
event_document.onload(cb_index.document.load);