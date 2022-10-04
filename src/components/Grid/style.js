import styled from "styled-components"

export const GridStyle = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
    gap: 1rem;
    justify-items: center;
    padding: 2rem;
    justify-content: center;    

    h2 {
        color: ${({theme}) => theme.colors.white};
    }

    @media (max-width: 860px) {
        grid-template-columns: repeat(${({ columns }) => columns - 1}, 1fr);
    }
    
    @media (max-width: 600px) {
        grid-template-columns: repeat(${({ columns }) => columns - 2}, 1fr);
    }
`