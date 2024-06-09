import React from 'react';
import { StyledTextArea } from './styles/TextArea.styled';

const TextArea = ({ value, onChange, errors }) => {
   return (
      <StyledTextArea errors={errors}>
         <textarea value={value} name='message' onChange={onChange}/>
         {errors && <span>{errors}</span>}
      </StyledTextArea>
   );
};

export default TextArea;
