/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import { IpcMainEvent, ipcMain } from 'electron';
import path from 'path';

export function resolveHtmlPath(htmlFileName: string) {
   if (process.env.NODE_ENV === 'development') {
      const port = process.env.PORT || 1212;
      const url = new URL(`http://localhost:${port}`);
      url.pathname = htmlFileName;
      return url.href;
   }
   return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function useRouter(router: Router) {
   //-------------------
   for (const key in router) {
      if (Object.prototype.hasOwnProperty.call(router, key)) {
         //@ts-ignore
         const element = router[key];
         if (typeof element === 'function') {
            const value = element;
            ipcMain.handle(key, value);
         }
      }
   }
}

type Keys = keyof ChannelContext;

// export type Routr = {
//    [P in Keys]: (
//       ...args: Parameters<
//          (event: IpcMainEvent, args: ChannelContext[Keys]['args']) => any
//       >
//    ) => Promise<ChannelContext[Keys]['returnType']>;
// };

export type Router<K extends keyof ChannelContext = Keys> = {
   [P in K]: (
      ...args: Parameters<
         (event: IpcMainEvent, args: ChannelContext[P]['args']) => any
      >
   ) => Promise<ChannelContext[P]['returnType']>;
}
