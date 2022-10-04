import styled from "styled-components"

export const CardStyle = styled.div`
    display: flex;
    align-items: flex-end;

    cursor: pointer;
    width: 25rem;
    height: 25rem;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    
    transition: ease-in-out 200ms;

    div {
        width: 100%;
        background: rgba(0,0,0,0.4);
    }

    div > p {
        color: white;
        font-size: 1.6rem;
        margin: 1.5rem;
    }

    &:hover{
        transform: scale(1.03);
    }

`

export const GridTitle = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
`