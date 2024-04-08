// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';


const electronHandler = {
   ipcRenderer: {
      sendMessage(channel: Channels, ...args: unknown[]) {
         ipcRenderer.send(channel, ...args);
      },
      on(channel: Channels, func: (...args: unknown[]) => void) {
         const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
            func(...args);
         ipcRenderer.on(channel, subscription);

         return () => {
            ipcRenderer.removeListener(channel, subscription);
         };
      },
      once(channel: Channels, func: (...args: unknown[]) => void) {
         ipcRenderer.once(channel, (_event, ...args) => func(...args));
      },
   },

   async post<K extends keyof ChannelContext>(
      endpoint: K,
      args: ChannelContext[K]['args'],
   ): Promise<ChannelContext[K]['returnType']> {
      return ipcRenderer.invoke(endpoint, args);
   },

   async fetch<K extends keyof ChannelContext>(
      endpoint: K) {
      return ipcRenderer.invoke(endpoint);
   },
};

contextBridge.exposeInMainWorld('api', electronHandler);

export type ElectronHandler = typeof electronHandler;
