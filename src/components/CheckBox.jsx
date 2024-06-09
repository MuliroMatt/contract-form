import React from 'react';
import { StyledCheckBox } from './styles/CheckBox.styled';

const CheckBox = ({ text, label, checked, onChange, errors }) => {
   return (
      <>
         <StyledCheckBox>
            <input name='checkbox' type='checkbox' id={label} checked={checked} onChange={onChange} />
            <label htmlFor={label}>{text}</label>
            {errors && <span>{errors}</span>}
         </StyledCheckBox>
      </>
   );
};

export default CheckBox;
