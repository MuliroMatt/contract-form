import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${({ theme })=> theme.colors.green200};
`;
