import styled from "styled-components";

import backgroundImage from "../../common/img/background_grid.svg";

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: auto;
`;
