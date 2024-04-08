import { BrowserWindow } from 'electron';
import { Router, useRouter } from './util';

const router: Router = {
   async 'win/controls'(event, args) {
      const win = BrowserWindow.getFocusedWindow();
      if (!win) return;
      //----
      switch (args) {
         case 'close':
            return win.close();
         case 'minimize':
            return win.minimize();
         case 'maximize': {
            win.isMaximized() ? win.unmaximize() : win.maximize();
            return win.isMaximized();
         }
      }
   },

   async 'win/maximized'(event, arg) {
      const win = BrowserWindow.getFocusedWindow();
      return win?.isMaximized();
   },
};

useRouter(router);
