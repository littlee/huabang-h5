var walk = require('walk')
var path = require('path')

var w = walk.walk('images')
w.on('file', function(r, s, n) {
  if (/.(jpg|png|gif)$/.test(s.name)) {
    console.log('\'/' + r + '/' + s.name + '\'')
  }
  n()
})