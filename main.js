const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const ip = require("ip");

const createWindow = () => {
  const window = new BrowserWindow({
    fullscreen: true,
  });
  window.loadURL("https://inglan2.github.io/Electron-Wallpanel/installed/");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
