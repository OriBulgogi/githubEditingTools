/*프론트에서 /api 으로 요청을 보내면 백엔드인 8080 로 요청이 도착하는 썰정*/
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
