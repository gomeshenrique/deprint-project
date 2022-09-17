import styled from "styled-components";
import { theme } from "../../common/styles/theme";

export const SwiperStyle = styled.div`
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & [class^="swiper-button"] {
    color: ${theme.colors.blue};
  }

  & .swiper-pagination-bullet-active {
    background-color: ${theme.colors.blue};
  }
`;
