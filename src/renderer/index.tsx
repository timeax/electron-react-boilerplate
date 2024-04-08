import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.api.ipcRenderer.once('ipc-example', (arg) => {
   // eslint-disable-next-line no-console
   console.log(arg);
});

String.prototype.capitalise = function () {
   return this.charAt(0).toUpperCase() + this.slice(1);
};
