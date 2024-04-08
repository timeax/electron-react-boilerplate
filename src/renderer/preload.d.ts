import { ElectronHandler } from '../main/preload';

declare global {
   type Null = undefined | null;
   interface String {
      capitalise(): string;
   }
   // eslint-disable-next-line no-unused-vars
   const api: ElectronHandler;
   interface Window {
      api: ElectronHandler;
   }

   interface ChannelContext {
      'win/controls':
         | ChannelValue<'close'>
         | ChannelValue<'minimize'>
         | ChannelValue<'maximize', boolean>;
      'win/maximized': ChannelValue<null, boolean | Null>;
   }
   type ColorKeys = keyof {
      primary: string;
      secondary: string;
      text: string;
      danger: string;
      blue: string;
      light: string;
      grey: string;
      warning: string;
      success: string;
   };

   type ColorProps = keyof {
      light: string;
      dark: string;
      active: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
   };

   type BgColor =
      | `bg-${Colors}`
      | `!bg-${Colors}`
      | `hover:bg-${Colors}`
      | `focus:bg-${Colors}`;

   type TextColor = `text-${Colors}`;

   type Colors = ColorKeys | `${ColorKeys}-${ColorProps}` | 'transparent';
}

type ChannelValue<Args, Return = void> = {
   args: Args;
   returnType: Return;
};

export {};
