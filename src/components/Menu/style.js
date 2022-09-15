import styled from "styled-components";
import { theme } from "../../common/theme";

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    background-color: ${theme.colors.white};
    width: 90vw;
    height: 5rem;
    border-radius: 1.6rem;

    //glassmorphism
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Li = styled.li`
    color: ${theme.colors.white};
    list-style: none;
    padding: 1rem;
`;