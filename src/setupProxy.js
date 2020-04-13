const { createProxyMiddleware } = require('http-proxy-middleware');
const env_url = ((process.env.NODE_ENV === 'production') ? 'https://tuskerette.herokuapp.com' : 'http://localhost:3001');

module.exports = function(app) {
    app.use(
        '/api',
	createProxyMiddleware({
	    target: env_url,
	    changeOrigin: true
	})
    );
};
