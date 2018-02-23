const {startServer, stopServer} = require('./fake-web-service/fake-server');

const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  await startServer(9000);
  await detox.init(config);
});

after(async () => {
  stopServer();
  await detox.cleanup();
});