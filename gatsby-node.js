const path = require('path')
const fs = require('fs')

exports.onCreateWebpackConfig = ({ actions }, options) => {
  const srcPath = options.srcPath || path.resolve(__dirname, '../../src')
  try {
    const stat = fs.statSync(srcPath)
    if(!stat.isDirectory) {
      console.warn(`gatsby-plugin-resolve-src: src path is not a directory ("${srcPath}")`)
    }
  } catch(err) {
    console.warn(`gatsby-plugin-resolve-src: src path not found at "${srcPath}"`)
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [srcPath, 'node_modules'],
    },
  })
}
