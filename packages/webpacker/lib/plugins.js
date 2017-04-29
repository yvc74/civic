'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackPlugin = require('isomorphic-loader/lib/webpack-plugin');

var _webpackPlugin2 = _interopRequireDefault(_webpackPlugin);

var _assetsWebpackPlugin = require('assets-webpack-plugin');

var _assetsWebpackPlugin2 = _interopRequireDefault(_assetsWebpackPlugin);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _utils = require('./utils');

var _paths = require('./paths');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetFileName = 'webpack-assets.json';
var isomorphicAssetsFile = 'isomorphic-assets.json';

exports.default = {
  plugins: (0, _utils.removeEmpty)([new _webpackPlugin2.default({
    keepExistingConfig: false,
    assetsFile: isomorphicAssetsFile
  }), new _webpack2.default.LoaderOptionsPlugin({ options: { postcss: [_autoprefixer2.default] } }), _utils.isProd && new _webpack2.default.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }), new _assetsWebpackPlugin2.default({
    filename: assetFileName,
    prettyPrint: true,
    path: _paths.BUNDLE_PATH
  })])
};