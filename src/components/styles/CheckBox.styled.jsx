import styled from 'styled-components';

export const StyledCheckBox = styled.span`
   display: flex;
   margin: 2.5rem 0 !important;
   flex-direction: column;
   &::after {
      content: '' !important;
   }

   input {
      /* display: none; */
      opacity: 0;
      position: absolute;
      outline: none;
      &:focus + label::before{
         border-color: ${({ theme }) => theme.colors.green600};
      }

      &:checked + label::before {
         background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='0 0 448 512'%3E%3C!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%23ffffff' d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'/%3E%3C/svg%3E");
         background-color: ${({ theme }) => theme.colors.green600};
         border-color: ${({ theme }) => theme.colors.green600};
      }
   }

   label {
      display: flex;
      align-items: center;
      cursor: pointer;

      &::before {
         content: '';
         width: 1em;
         height: 1em;
         border: 2px solid ${({ theme }) => theme.colors.grey500};
         border-radius: 2px;
         display: inline-block;
         vertical-align: middle;
         margin-right: 1rem;
         cursor: pointer;
      }

      &::after {
         content: '*';
         color: ${({ theme }) => theme.colors.green600};
         margin-left: 0.5rem;
      }
   }

   span{
      color: ${({ theme }) => theme.colors.red};
      margin-top: .75rem;
      &::after{
         content: '';
      }
   }
`;
