const build = require('./src/build');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    { apply: compiler => compiler.hooks.beforeRun.tap('PrepareBuildBeforeWebpack', build) },
    new EnvironmentPlugin(['CLIENT_ID', 'BOT_TOKEN', 'CLIENT_PUBLIC_KEY'])
  ]
};
