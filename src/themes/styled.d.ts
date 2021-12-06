import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      primary10: string;
      secondary: string;
    };
    font: {
      headline1: string;
      headline2: string;
      headline3: string;
      headline4: string;
      caption: string;
      button: string;
      body1Regular: string;
      body1Bold: string;
      body2Regular: string;
      body2Bold: string;
    };
  }
}
