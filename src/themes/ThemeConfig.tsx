import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const blueTheme: DefaultTheme = {
  color: {
    primary: 'hsl(227, 95%, 22%)',
    primary10: 'hsla(227, 95%, 22%, 0.1)',
    secondary: 'hsla(0, 0%, 97%, 1)',
  },
  font: {
    headline1: '700 3rem/3.625rem Inter',
    headline2: '700 2.875rem/3.5rem Inter',
    headline3: '700 1.75rem/normal Inter',
    headline4: '700 1.5rem/normal Inter',
    caption: '400 0.75rem/1.375rem Inter',
    button: '700 1rem/1.5rem Inter',
    body1Regular: '400 1rem/1.5rem Inter',
    body1Bold: '700 1rem/1.5rem Inter',
    body2Regular: '400 0.875rem/1.5rem Inter',
    body2Bold: '700 0.875rem/1.5rem Inter',
  },
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
body{

}

*{
  margin: 0;
  
}
button{
  border:none;
}

input{border:none}
`;
