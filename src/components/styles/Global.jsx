import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Karla', sans-serif;
    color: ${({ theme }) => theme.colors.grey900};
}
`;

export default GlobalStyles;
