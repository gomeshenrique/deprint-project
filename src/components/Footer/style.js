import styled from "styled-components";

export const FooterStyle = styled.footer`
  /* utility class */
  & .flow > *:not(:first-child) {
    margin-top: 1.5rem;
  }

  & .flex {
    display: flex;
    gap: 1rem;
  }

  & .align-center {
    align-items: center;
  }

  display: grid;
  gap: 2rem;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: 50em) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }

  & h3 {
    font-size: 2rem;
  }

  & a {
    display: flex;
    gap: 1rem;
    color: inherit;
    text-decoration: none;
  }

  & ul {
    /* reset margin and padding */
    margin: 0;
    padding: 0;

    /* styling */
    display: grid;
    gap: 1rem;
  }
`;
