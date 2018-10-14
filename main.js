const N_DOTS = 200

// Helper to generate random IDs such that we can easily
// refer to each node
function getRandomId(prefix) {
  return `${prefix}-${Math.round(Date.now() * Math.random())}`
}

// Random coordinates bounded
// by the size of the page
function getRandomCoords(
  width = window.innerWidth,
  height = window.innerHeight
) {
  return {
    cy: Math.random() * height,
    cx: Math.random() * width
  }
}

// iterate over a list of ids,
// query the DOM for the node,
// compute a random position,
// and then set it on the node
function setRandomCoords(ids) {
  for (let id of ids) {
    let circle = document.getElementById(id)
    let coords = getRandomCoords()
    circle.style.cx = coords.cx
    circle.style.cy = coords.cy
  }
}

window.onload = function() {
  // Get our root node
  let rootNode = document.getElementById('root')
  let circles = ''
  let ids = []
  for (let i = 0; i < N_DOTS; i++) {
    let id = getRandomId('circle')
    circles += Templates.circle(id)
    ids.push(id)
  }
  // we don't need an id on this template,
  // so we pass undefined which forces the
  // "default" value defined in the function
  rootNode.innerHTML = Templates.svg(undefined, circles)
  setRandomCoords(ids)

  document.onmousemove = function(event) {
    setRandomCoords(ids)
  }
}
