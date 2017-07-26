const path = require('path')
const inspect = obj => require('util').inspect(obj, { colors: true })

exports.modifyWebpackConfig = ({ config, _stage }) => {
  return config.merge({
    resolve: {
      root: path.resolve(config._config.context, 'src'),
    },
  })
}
