const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function (config) {
  config.plugins = config.plugins.map((plugin) => {
    if (plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/app/service-worker/service-worker.js',
        swDest: 'service-worker.js'
      });
    }
    return plugin;
  });
  return config;
};
