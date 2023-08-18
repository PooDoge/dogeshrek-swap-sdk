
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dogeshrek-swap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./dogeshrek-swap-sdk.cjs.development.js')
}
