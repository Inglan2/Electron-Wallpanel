const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const ip = require("ip");

const createWindow = () => {
  const window = new BrowserWindow({
    fullscreen: true,
  });
  window.loadURL("https://example.com");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
