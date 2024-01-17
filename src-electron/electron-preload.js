import { contextBridge } from 'electron'
import { BrowserWindow } from '@electron/remote'
import controller from './controllers/controller';

contextBridge.exposeInMainWorld('myWindowAPI', {
  minimize () {
    BrowserWindow.getFocusedWindow().minimize()
  },

  toggleMaximize () {
    const win = BrowserWindow.getFocusedWindow()

    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  },

  close () {
    BrowserWindow.getFocusedWindow().close()
  }
});

contextBridge.exposeInMainWorld('api',controller);
