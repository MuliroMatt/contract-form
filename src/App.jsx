import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container';

const theme = {
  colors: {
    green200: 'hsl(148, 38%, 91%)',
    green600: 'hsl(169, 82%, 27%)',
    green900: 'hsl(171, 83%, 14%)',
    red: 'hsl(0, 66%, 54%)',
    white: 'hsl(0, 0%, 100%)',
    grey500: 'hsl(186, 15%, 59%)',
    grey900: 'hsl(187, 24%, 22%)',
  }
}

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <>
            <GlobalStyles />
            <Container>
               <Card />
            </Container>
         </>
      </ThemeProvider>
   );
};

export default App;
