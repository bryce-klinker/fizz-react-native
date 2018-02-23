const express = require('express');

let currentValue;
let httpServer;
async function startServer(port) {
  if (httpServer) {
      return;
  }

  return startServerAsync(port);
}

function setValue(value) {
  currentValue = value;
}

function startServerAsync(port) {
    return new Promise((resolve, reject) => {
      const app = express();
      app.get('/', (req, res) => {
        res.json({ Value: currentValue });
      });
      httpServer = app.listen(port, (err) => {
        if (err)
            reject(err);
        else
            resolve();
      })
    })
}

function stopServer() {
  httpServer.close();
}

module.exports = { startServer, stopServer, setValue };