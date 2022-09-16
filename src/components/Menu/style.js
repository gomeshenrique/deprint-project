import styled from "styled-components";
import { theme } from "../../common/theme";

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    justify-content: center;
    top : 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: ${theme.colors.white};
    width: 100vw;
    height: 3.8rem;

    //glassmorphism
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    // [x] aplicar o estilo para elementos menos importantes diretamente no componente.
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            list-style: none;
            margin: 1rem;
            a {
                border-radius: 0.5rem;
                padding: 0.5rem 1rem;
                color: ${theme.colors.white};
                text-decoration: none;
            }
            &:visited {
                color: none;
            }
        }
    }
`;