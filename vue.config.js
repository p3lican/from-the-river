const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/narrative',
          '/contact',
          '/documentary',
          '/commercial',
        ],
        captureAfterElementExists: '.all-engaging-videos-wrapper',
      }),
    ],
  },
};
