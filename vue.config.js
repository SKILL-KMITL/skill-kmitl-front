const CompressionPlugin = require('compression-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const webpack = require('webpack');
const path = require('path');

let plugins = [];
if (process.env.NODE_ENV == 'production') {
  plugins = [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/'],
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      captureAfterElementExists: '.visable'
    })
  ];
} else {
  plugins = [];
}

module.exports = {
  pluginOptions: {
    compression: {
      brotli: {
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        compressionOptions: {
          level: 11
        },
        minRatio: 0.8
      },
      gzip: {
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  },
  transpileDependencies: ['vuex-module-decorators'],
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            }
          }
        }
      }
    },
    plugins: plugins
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@views', path.resolve(__dirname, 'src/views'))
      .set('@mixins', path.resolve(__dirname, 'src/mixins'))
      .set('@plugins', path.resolve(__dirname, 'src/plugins'))
      .set('@scss', path.resolve(__dirname, 'src/assets/scss'))
      .set('@images', path.resolve(__dirname, 'src/assets/images'))
      .set('@fonts', path.resolve(__dirname, 'src/assets/fonts'));
  }
};
