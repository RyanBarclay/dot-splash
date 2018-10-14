// Create a module to keep
// our template functions
// out of the global scope
let Templates = (function() {
  return {
    // Allowing an id to be passed in is very useful
    // for finding this node after it gets mounted
    circle(id = '') {
      return `<circle class="circle" id="${id}" r="4"/>`
    },
    svg(id = '', children) {
      return `<svg class="container" id="${id}">${children}</svg>`
    }
  }
})()
