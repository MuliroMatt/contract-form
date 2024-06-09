import React from 'react';
import { RadioBox } from './styles/radio.styled';

const FormRadio = ({ label, labelText, value, onChange, errors, checked }) => {
   return (
      <RadioBox>
         <label htmlFor={label}>
            <input id={label} type='radio' name='queryType' value={value} onChange={onChange} checked={checked}/>
            {labelText}
         </label>
         {errors && <span>{errors}</span>}
      </RadioBox>
   );
};

export default FormRadio;
