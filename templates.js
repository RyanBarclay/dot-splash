// Create a module to keep
// our template functions
// out of the global scope
let Templates = (function() {
  return {
    // Allowing an id to be passed in is very useful
    // for finding this node after it gets mounted

    // This places a html class that is a circle with a random ID
    circle(id = '') {
      return `<circle class="circle" id="${id}" r="4"/>`
    },

    // This places all of the instances of the classes above into a <svg> container
    svg(id = '', children) {
      return `<svg class="container" id="${id}">${children}</svg>`
    }
  }
})()
