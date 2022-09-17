import styled from "styled-components";
import { theme } from "../../common/styles/theme";

export const Nav = styled.nav`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: medium;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 50%;

  transform: translate(-50%, 0);

  background-color: ${theme.colors.white};
  height: ${theme.margins.menuTop};
  width: 100vw;

  background-color: ${theme.colors.white};
  //glassmorphism
  /* background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18); */

  img {
      margin-left: ${theme.margins.nav};
      height: 4.5rem;
  }

  ul {
    display: flex;
    li {
      text-align: center;
      list-style: none;
      a {
        text-decoration: none;
        padding: 0.6rem 0;
        margin: 0 0.8rem;
        color: ${theme.colors.blue};
        transition: all ease 300ms;
      }
      a:hover{
        color: ${theme.colors.red};
      }

    }
  }

  .ct-button {
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    margin-right: ${theme.margins.nav};
    text-decoration: none;
    padding: 0.3rem 1.2rem;
    border-radius: 5rem;
    transition: all ease 300ms;
  }

  .ct-button:hover {
    background-color: ${theme.colors.blue};
  }

  /* Responsive Menu */
  @media screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;
    align-items: center;

    img {
      margin-left: 0;
    }

    ul{
      padding-left: 0;
      flex-direction: column;
      li{
        border-bottom: 1px solid ${theme.colors.red};
        a{
          padding: 0rem 0rem;
        }
      }
    }

    .ct-button{
      margin: 0 auto 1rem auto;
    }
}
`;
