import styled from "styled-components";

import HomeContainer from "./HomeContainer";
import CoreTextForm from "./core/CoreTextForm";

const InputSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputHeader = styled.h1`
  margin: 0;
  font-size: 24px;
`;

interface HomeInputSectionProps {
  loading: boolean;
  handleGetDefinitions: (word: string) => void;
  handleClearDefinitions: () => void;
}

const HomeInputSection = ({
  loading,
  handleGetDefinitions,
  handleClearDefinitions,
}: HomeInputSectionProps) => {
  return (
    <InputSection>
      <HomeContainer>
        <InputHeader>Enter a word</InputHeader>
        <CoreTextForm
          disabled={loading}
          buttonText="Get Definitions"
          placeHolderText="New word..."
          handleSubmit={handleGetDefinitions}
          handleInitialClick={handleClearDefinitions}
        />
      </HomeContainer>
    </InputSection>
  );
};

export default HomeInputSection;
