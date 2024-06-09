import styled from "styled-components";

export const Group = styled.div`
    display: flex;
    gap: 1rem;
    @media(max-width: 768px){
        flex-direction: column;
    }
`