import { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import { COLORS, STYLES } from "../../helpers/constants";

const InputForm = styled.form`
  width: 100%;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledTextInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${COLORS.border};
`;

const SubmitButton = styled.button<{ disabled: boolean }>`
  margin-top: 8px;
  padding: 8px;
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

interface CoreTextFormProps {
  buttonText?: string;
  placeHolderText?: string;
  disabled: boolean;
  handleSubmit: (value: string) => void;
  handleInitialClick?: () => void;
}

const CoreTextForm = ({
  buttonText = "submit",
  placeHolderText = "Enter text",
  disabled,
  handleSubmit,
  handleInitialClick,
}: CoreTextFormProps) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handler to submit the input form value.
   *
   * Will display a toast message if the input value is empty (i.e no input entered).
   */
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // Trigger initial click func if present.
    handleInitialClick && handleInitialClick();

    if (inputValue.length === 0) {
      toast.info("Please enter a value 😊");
    } else {
      handleSubmit(inputValue);
      setInputValue("");
    }
  };

  const renderButtonText = disabled ? "Loading..." : buttonText;

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <StyledTextInput
        disabled={disabled}
        placeholder={placeHolderText}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <SubmitButton type="submit" disabled={disabled}>
        {renderButtonText}
      </SubmitButton>
    </InputForm>
  );
};

export default CoreTextForm;
