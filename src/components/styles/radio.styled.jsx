import styled from 'styled-components';

export const RadioBox = styled.div`
   border-radius: 8px;
   width: 100%;
   display: flex;
   margin-bottom: 1.75rem;
   flex-direction: column;
   /* background-color: red; */
   label {
      border: 1px solid ${({ theme }) => theme.colors.grey500};
      font-size: 1rem;
      border-radius: 8px;
      letter-spacing: 1px;
      padding: 1rem 1.5rem;
      margin: .5rem 0;
      color: ${({ theme }) => theme.colors.grey900};
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      &:has(input:checked){
         background-color: ${({ theme }) => theme.colors.green200};
         border-color: ${({ theme }) => theme.colors.green600};
      }
      &:has(input:focus){
         border: 2px solid ${({ theme }) => theme.colors.green600}
      }
      &:hover{
         border-color: ${({ theme }) => theme.colors.green600};
      }
   }

   input {     
      appearance: none;
      cursor: pointer;
      margin-right: 1rem;
      outline: none;
      font: inherit;
      color: ${({ theme }) => theme.colors.grey500};
      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid currentColor;
      border-radius: 50%;
      display: grid;
      place-content: center;
      /* &:{
         display: block;
      } */
      &::before {
         content: '';
         width: 0.65em;
         height: 0.65em;
         border-radius: 50%;
         transform: scale(0);
         transition: 120ms transform ease-in-out;
         box-shadow: inset 1em 1em ${({ theme }) => theme.colors.green600};
      }
      &:checked::before {
         transform: scale(1);
      }
      &:checked {
         border-color: ${({ theme }) => theme.colors.green600};
      }
   }

   span{
      color: ${({ theme }) => theme.colors.red};
      margin-top: .75rem;
      /* display: none; */
      &::after{
         content: '';
      }
   }
`;
