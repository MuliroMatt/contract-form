import styled from "styled-components";
import checkIcon from '../../assets/images/icon-success-check.svg'

export const StyledSuccessCard = styled.div`
    /* position: absolute;
    top: 24px; */
    background-color: ${({ theme }) => theme.colors.grey900};
    color: ${({ theme}) => theme.colors.white};
    padding: 1.75rem 1.5rem ;
    border-radius: 12px;

    h3{
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        &::before{
            content: url('${checkIcon}');
            margin-right: .75rem;
        }
    }

    p{
        font-size: 16px;
        font-weight: 400;
    }
`