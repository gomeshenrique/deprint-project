import styled from "styled-components";

import backgroundImage from "../../common/img/background_grid.svg";

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    background-image: url(${backgroundImage});
    background-size: auto;
    background-position: center;

    max-width: 100%;
    height: auto;
`;
