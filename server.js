const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/proxy', (req, res, next) => {
  const target = req.query.url;
  if (!target) {
    return res.status(400).send('Missing url parameter');
  }
  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    onProxyReq: (proxyReq, req, res) => {
      // 必要に応じてヘッダーやCookieの書き換え
    }
  })(req, res, next);
});

app.get('/', (req, res) => {
  res.send(`
    <h2>Simple Web Proxy</h2>
    <form method="GET" action="/proxy">
      <input type="text" name="url" placeholder="https://example.com" style="width:300px;">
      <button type="submit">Go</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
