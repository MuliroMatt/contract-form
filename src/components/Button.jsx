import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({text }) => {
  return (
    <StyledButton>
        {text}
    </StyledButton>
  )
}

export default Button