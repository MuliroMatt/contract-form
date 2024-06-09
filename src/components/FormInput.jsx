import React from 'react';
import { InputBox } from './styles/Input.styled'

const FormInput = ({ label, labelText, type = 'text', value, onChange, name, errors }) => {
   return (
      <InputBox errors={errors}>
         <label htmlFor={label}>{labelText}</label>
         <input name={name} id={label} type={type} value={value} onChange={onChange} />
         {errors && <span>{errors}</span>}
      </InputBox>
   );
};

export default FormInput;
