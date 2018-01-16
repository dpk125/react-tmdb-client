const devStore = require('./configureStore/configureStore.dev.js');
const prodStore = require('./configureStore/configureStore.prod.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = prodStore;
} else {
  module.exports = devStore;
}
