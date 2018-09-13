import "phoenix_html"

window.onmount = require('onmount')
window._ = require('lodash')
window.moment = require('moment')
window.Inputmask = require('inputmask');

glob('./behaviors/*', (e, files) => { files.forEach(require) })

$(function () { onmount() })

alertify.defaults = {
  // notifier defaults
  notifier:{
    // auto-dismiss wait time (in seconds)
    delay:5,
    // default position
    position:'top-right',
    // adds a close button to notifier messages
    closeButton: false
  }
}
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
