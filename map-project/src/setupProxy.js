import { createProxyMiddleware } from 'http-proxy-middleware';
// eslint-disable-next-line import/no-anonymous-default-export
export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://apis.data.go.kr/`,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};