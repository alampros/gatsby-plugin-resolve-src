const path = require('path')

const optionDefaults = {
  addSassLoader: true,
}
exports.modifyWebpackConfig = ({ config, _stage }, pluginOptions = optionDefaults) => {
  const {
    addSassLoader,
  } = pluginOptions

  const srcDir = path.resolve(config._config.context, 'src')

  const cfg = {
    resolve: {
      root: srcDir,
    }
  }
  if(addSassLoader) {
    const otherPaths = (config.sassLoader && config.sassLoader.includePaths) || []
    const includePaths = [srcDir].concat(otherPaths)
    cfg.sassLoader = {
      includePaths,
    }
  }
  return config.merge(cfg)
}
