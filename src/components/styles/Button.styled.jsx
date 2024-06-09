import styled from 'styled-components';

export const StyledButton = styled.button`
   border: none;
   background-color: ${({ theme }) => theme.colors.green600};
   color: ${({ theme }) => theme.colors.white};
   padding: 1.25rem;
   font-size: 1.125rem;
   font-weight: 400;
   border-radius: 8px;
   cursor: pointer;
   outline: none;

   &:hover {
      background-color: ${({ theme }) => theme.colors.green900};
   }

   &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.green900};
   }
`;
