'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const path = require('path');

const optionDefaults = {
  addSassLoader: true
};
exports.modifyWebpackConfig = ({ config, _stage }, pluginOptions = optionDefaults) => {
  const {
    addSassLoader
  } = pluginOptions;

  const srcDir = path.resolve(config._config.context, 'src');

  const cfg = {
    resolve: {
      root: srcDir
    }
  };
  if (addSassLoader) {
    const sassLoader = _extends({}, config.sassLoader || {});
    const otherPaths = config.sassLoader && config.sassLoader.includePaths || [];
    cfg.sassLoader = {
      includePaths: [srcDir, ...otherPaths]
    };
  }
  return config.merge(cfg);
};