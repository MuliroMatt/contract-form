import styled from 'styled-components';

export const StyledCard = styled.section`
   background-color: ${({ theme }) => theme.colors.white};
   border-radius: 16px;
   padding: 2.5rem;
   width: 90%;
   max-width: 735px;

   h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 2rem;
   }

   span {
      font-size: 1rem;
      margin-bottom: 0.625rem;
      &::after {
         content: '*';
         color: ${({ theme }) => theme.colors.green600};
         margin-left: 0.5rem;
      }
   }
`;
