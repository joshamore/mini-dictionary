import React from "react";
import styled from "styled-components";

import { COLORS } from "../helpers/constants";

import CoreActionButton from "../components/core/CoreActionButton";

const DefinitionsSection = styled.section`
  width: 100%;
  margin: 16px 0;
  display: flex;
  justify-content: center;
`;

const DefinitionsContainer = styled.div`
  width: 350px;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${COLORS.secondary};
  border: 2px solid ${COLORS.border};
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledUl = styled.ul`
  margin-top: 8px;
`;

const StyledLi = styled.li`
  &:not(:first-child) {
    margin-top: 8px;
  }
`;

interface HomeDefinitionsSectionProps {
  definitions: string[];
  handleClearDefinitions: () => void;
}

const HomeDefinitionsSection = ({
  definitions,
  handleClearDefinitions,
}: HomeDefinitionsSectionProps) => {
  // Render empty if no definitions present.
  if (definitions.length <= 0) {
    return <></>;
  }

  return (
    <DefinitionsSection>
      <DefinitionsContainer>
        <ButtonContainer>
          <CoreActionButton
            buttonText="clear results"
            handleClickAction={handleClearDefinitions}
          />
        </ButtonContainer>

        <StyledUl>
          {definitions.map((definition: string) => (
            <StyledLi>{definition}</StyledLi>
          ))}
        </StyledUl>
      </DefinitionsContainer>
    </DefinitionsSection>
  );
};

export default HomeDefinitionsSection;
