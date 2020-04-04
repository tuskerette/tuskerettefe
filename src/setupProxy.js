const proxy = require('http-proxy-middleware');

const env_url = ((process.env.NODE_ENV === 'production') ? 'https://tuskerette.herokuapp.com' : 'http://localhost:3001');

module.exports = function(app) {
  app.use(proxy('/api', { target: env_url }));
};
