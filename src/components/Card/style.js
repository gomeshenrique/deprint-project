import styled from "styled-components"

export const CardStyle = styled.div`
    .card {
        width: 22rem;
        height: 26rem;
        border-radius: 1.2rem;
        position: relative;
        border: 0.3rem solid ${({ theme }) => theme.colors.white};
        transition: 0.5s ease-out;

        background: url(${({ imgUrl }) => imgUrl});
        background-size: cover;
        background-position: center;
    }

    .card-details {
        color: ${({ theme }) => theme.colors.white};;
        height: 100%;
        gap: .5em;
        display: grid;
        place-content: start;
        padding: 1rem;
    }

    .card-button {
        transform: translate(-50%, 125%);
        width: 60%;
        border-radius: 1rem;
        border: none;
        background-color: ${({ theme }) => theme.colors.red};
        color: #fff;
        padding: .5rem 1rem;
        position: absolute;
        left: 50%;
        bottom: 3rem;
        opacity: 0;
        transition: 0.3s ease-out;
        cursor: pointer;
    }

    .card-shadow{
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.40);
    }

    .text-body {
    
    }

    /*Text*/
    .text-title {
        font-size: 1.8rem;
    }

    /*Hover*/
    .card:hover {
        border-color: ${({ theme }) => theme.colors.red};
        box-shadow: 0 0.4rem 1.8rem 0 rgba(0, 0, 0, 0.25);
    }

    .card:hover .card-button {
        transform: translate(-50%, 50%);
        opacity: 1;
    }

`

export const GridTitle = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
`