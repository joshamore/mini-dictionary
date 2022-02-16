import styled from "styled-components";

import HomeContainer from "./HomeContainer";
import CoreActionButton from "../components/core/CoreActionButton";

const DefinitionsSection = styled.section`
  width: 100%;
  margin: 16px 0;
  display: flex;
  justify-content: center;
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
      <HomeContainer>
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
      </HomeContainer>
    </DefinitionsSection>
  );
};

export default HomeDefinitionsSection;
