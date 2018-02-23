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
      app.listen(port, (err) => {
        if (err)
            reject(err);
        else
            resolve();
      })
    })
}

module.exports = { startServer, setValue };