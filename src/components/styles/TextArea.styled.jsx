import styled, { css } from 'styled-components';

export const StyledTextArea = styled.div`
   /* background-color: red; */
   display: flex;
   flex-direction: column;
   textarea {
      /* background-color: blue; */
      resize: none;
      border-radius: 8px;
      padding: 0.5rem 1.5rem;
      font-size: 1.063rem;
      border: 1px solid ${({ theme }) => theme.colors.grey500};
      ${({ errors, theme }) =>
         errors &&
         css`
            border-color: ${theme.colors.red};
         `}
      outline: none;
      height: 105px;
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
