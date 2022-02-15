import React from "react";
import styled from "styled-components";

import { COLORS, STYLES } from "../../helpers/constants";

const StyledButton = styled.button`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${COLORS.border};
  text-transform: uppercase;
  font-weight: bold;
  background-color: ${COLORS.primary};
  transition: ${STYLES.defaultTransition};
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.primaryDark};
    color: ${COLORS.white};
  }
`;

interface CoreActionButtonProps {
  buttonText?: string;
  handleClickAction: () => void;
}

const CoreActionButton = ({
  buttonText = "click",
  handleClickAction,
}: CoreActionButtonProps) => {
  return <StyledButton onClick={handleClickAction}>{buttonText}</StyledButton>;
};

export default CoreActionButton;
