import styled from "styled-components";

export const Nav = styled.nav`
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

  background-color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.margins.menuTop};
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.white};
  //glassmorphism
  /* background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18); */

  a:first-child{
    margin-left: ${({ theme }) => theme.margins.nav};
  }

  a img {
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
        margin: 0 1rem;
        color: ${({ theme }) => theme.colors.blue};
        transition: all ease 300ms;
        
        &:hover{
        color: ${({ theme }) => theme.colors.red};
      }
      }
    }
  }

  a:not(:first-child) {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.red};
    margin-right: ${({ theme }) => theme.margins.nav};
    text-decoration: none;
    padding: 0.3rem 1.2rem;
    border-radius: 5rem;
    transition: all ease 300ms;

    &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  button{
    display: none
  }

  /* Responsive Menu */
  @media screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;

    a:first-child{
      margin-left: 0;
    }
    
    a img {
      height: ${({ theme }) => theme.margins.menuTop};
    }

    ul{
      ${({ openMenu }) => !openMenu && "display: none;"}
      padding-left: 0;
      flex-direction: column;
      li{
        border-bottom: 1px solid ${({ theme }) => theme.colors.red};
        a{
          padding: 0rem 0rem;
        }
      }
    }

    a:not(:first-child){
      ${({ openMenu }) => !openMenu && "display: none;"}
      margin: 0 auto 1rem auto;
      transition: 200ms;
    }

    button{
      display: flex;
      position: fixed;
      top: 1.2rem;
      right: 2rem;
      border: none;
      cursor: pointer;
      transition: all 200ms;

      &:hover{
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
    }
    }
}
`;
