const app = require('./server/app');

const port = (process.env.PORT || 3000);

app.set('port', port);

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('./webpack.config.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');

  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true },
  }));
}

app.listen(port, function () {
  console.log(`Server Started at port ${port}`);
});
