if (process.env.NODE_ENV === 'production') {
    module.exports = require('./RootProd/Root.prod')
    console.log('You are on:',process.env.NODE_ENV)
  } else {
    module.exports = require('./RootDev/Root.dev')
    console.log('You are on:',process.env.NODE_ENV)
  }
  