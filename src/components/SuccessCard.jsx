import React from 'react';
import { motion } from 'framer-motion';
import { StyledSuccessCard } from './styles/SuccessCard.styled';

const SuccessCard = () => {
   return (
      <motion.div
         initial={{
            y: '-100vh',
         }}
         animate={{
            y: '24px',
         }}
         exit={{
            y: '-100vh',
         }}
         style={{
            position: 'absolute',
            top: '24px',
            alignSelf: 'center',
         }}>
         <StyledSuccessCard>
            <h3>Message Sent!</h3>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
         </StyledSuccessCard>
      </motion.div>
   );
};

export default SuccessCard;
