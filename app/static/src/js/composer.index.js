/**
 * Create a event-callback composition.
 */

// Fetch callbacks
import cb_index from './callback/cb.index';

// Fetch events
import event_document from './Eventlisteners/el.document';

// Pass callbacks to an event.
event_document.onload(cb_index.document.load);