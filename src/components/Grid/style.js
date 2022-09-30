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
        color: white;
    }
`