// const webpack          = require('webpack');
// const AssetsPlugin     = require('assets-webpack-plugin');
// const autoprefixer     = require('autoprefixer');
const { resolve }      = require('path');

const { defaultConfig, composeConfig } = require('@hackoregon/webpacker'); // eslint-disable-line

const PUBLIC_PARAM     = 'public';
const REAL_ROOT        = resolve(__dirname);
const BUNDLE_PATH      = resolve(REAL_ROOT, 'build');
const SRC_PATH         = resolve(REAL_ROOT, 'src');

const env              = process.env.NODE_ENV || 'development';
// const isDev            = env === 'development';
// const isProd           = !isDev;
// const assetFileName    = 'civic-assets.json';

const staticServerAddr = process.env.NODE_ENV !== 'production'
  ? `http://localhost:3001/${PUBLIC_PARAM}/`
  : `http://civicpdx.org:8080/${PUBLIC_PARAM}/`;

// const removeEmpty = arr => arr.filter(item => !!item);

const config = {
  context: REAL_ROOT,
  cache: true,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: null,
  entry: {
    app: [
      resolve(SRC_PATH, `client-${env}.js`),
    ],
    vendor: [
      'react',
      'react-dom',
      'react-helmet',
      'react-redux',
      'react-router',
    ],
  },
  output: {
    path: `${BUNDLE_PATH}/${PUBLIC_PARAM}/`,
    publicPath: staticServerAddr,
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
};

const webpackConfig = composeConfig(
  defaultConfig,
  config,
);

export default webpackConfig;
