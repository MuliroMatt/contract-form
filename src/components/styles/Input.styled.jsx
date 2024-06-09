import styled, { css } from 'styled-components';

export const InputBox = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 1.75rem;
   label {
      color: ${({ theme }) => theme.colors.grey900};
      font-size: 1rem;
      margin-bottom: 0.625rem;
      &::after {
         content: '*';
         color: ${({ theme }) => theme.colors.green600};
         margin-left: 0.5rem;
      }
   }

   input {
      border-radius: 8px;
      padding: 1rem;
      font-size: 1rem;
      background: none;
      border: 1px solid ${({ theme }) => theme.colors.grey500};
      ${({ errors, theme }) =>
         errors &&
         css`
            border-color: ${theme.colors.red};
         `}
      outline: none;
      &:hover {
         ${({ errors, theme }) => !errors && css`
            border-color: ${theme.colors.green600};
         `}
      }
      &:focus {
         border-width: 2px;
         ${({ errors, theme }) => !errors && css`
            border-color: ${theme.colors.green600};
         `}
      }
   }

   span {
      color: ${({ theme }) => theme.colors.red};
      margin-top: 0.75rem;
      &::after {
         content: '';
      }
   }
`;
