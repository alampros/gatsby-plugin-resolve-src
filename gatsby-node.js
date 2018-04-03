const path = require('path')
const inspect = obj => require('util').inspect(obj, { colors: true })

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
    const sassLoader = {
      ...(config.sassLoader || {}),
    }
    const otherPaths = (config.sassLoader && config.sassLoader.includePaths) || []
    cfg.sassLoader = {
      includePaths: [srcDir, ...otherPaths],
    }
  }
  return config.merge(cfg)
}
