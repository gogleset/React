const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};

// 요청 URL: http://localhost:3000 /api/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D&pageNo=1&numOfRows=865&dataType=JSON&base_date=20220801&base_time=0200&nx=58&ny=125


// 요청 URL: https://wonderful-paprenjak-4a247e.netlify.app /api/1360000/VilageFcstInfoService_2.0/getVilageFcst?ServiceKey=Iz8INi2kGzDF4SF1wg0rekepMPMKOQwTHoN7MOUgtfULYXTOixMWpEuMRWpEfoPy3%2Bj%2FFWuRPVLaSe5k%2B4uaTg%3D%3D&pageNo=1&numOfRows=865&dataType=JSON&base_date=20220801&base_time=0200&nx=58&ny=125