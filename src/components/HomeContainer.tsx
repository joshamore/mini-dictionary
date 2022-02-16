import { ReactNode } from "react";

import styled from "styled-components";

import { COLORS, STYLES } from "../helpers/constants";

const StyledContainer = styled.div`
  width: 350px;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${COLORS.secondary};
  border: 2px solid ${COLORS.border};
  border-radius: 8px;
  ${STYLES.smDown} {
    margin: 0 16px;
    min-width: 200px;
  }
`;

interface HomeContainerProps {
  children: ReactNode;
}

const HomeContainer = ({ children }: HomeContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default HomeContainer;
