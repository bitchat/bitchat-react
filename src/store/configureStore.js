// Use ProvidePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.production') // eslint-disable-line
} else {
  module.exports = require('./configureStore.development') // eslint-disable-line
}
