import styled from "styled-components";

import { COLORS } from "../helpers/constants";

import CoreTextForm from "./core/CoreTextForm";

const InputSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 350px;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${COLORS.secondary};
  border: 2px solid ${COLORS.border};
  border-radius: 8px;
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
      <InputContainer>
        <InputHeader>Enter a word</InputHeader>
        <CoreTextForm
          disabled={loading}
          buttonText="Get Definitions"
          placeHolderText="New word..."
          handleSubmit={handleGetDefinitions}
          handleInitialClick={handleClearDefinitions}
        />
      </InputContainer>
    </InputSection>
  );
};

export default HomeInputSection;
