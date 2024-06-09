import React from 'react';
import {StyledCard} from './styles/Card.styled'
import Form from './Form';

const Card = () => {
   return (
      <StyledCard>
         <h1>Contact Us</h1>
         <Form/>
      </StyledCard>
   );
};

export default Card;
