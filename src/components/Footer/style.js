import styled from "styled-components";

export const FooterStyle = styled.footer`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};

  & a {
    color: inherit;
  }

  & ul {
    /* reset margin and padding */
    margin: 0;
    padding: 0;

    /* styling */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
