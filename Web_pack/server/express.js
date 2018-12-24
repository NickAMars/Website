const express     = require("express"),
      path        = require("path"),
      webpack     = require("webpack"),
      config      = require("../client/config/webpack.dev.js");

const server      = express();
const compiler    = webpack(config);
const webpackDevMiddleware =  require("webpack-dev-middleware")(compiler, config.devServer);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
//adding middleware to run dist/index.html
const staticMiddleware = express.static("client/dist");

// Connect webpack with express
server.use(webpackDevMiddleware);
// use webpack hot after devmiddleware
server.use(webpackHotMiddleware);
// uses the index html file in dist
server.use(staticMiddleware);

server.listen(8080, ()=>{
  console.log("Server started");
});
