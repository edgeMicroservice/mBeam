const { init } = require('@mimik/edge-ms-helper/init-helper');
const swaggerMiddleware = require('../build/mbeam-swagger-mw');

mimikModule.exports = init(swaggerMiddleware);
