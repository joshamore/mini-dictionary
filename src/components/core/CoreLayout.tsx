import { ReactNode } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import { COLORS } from "../../helpers/constants";

import "react-toastify/dist/ReactToastify.css";

const NavBar = styled.nav`
  width: 100%;
  height: 48px;
  margin-bottom: 16px;
  background-color: ${COLORS.primary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const NavHeader = styled.header`
  height: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const CoreContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

interface CoreLayoutProps {
  children: ReactNode;
}

const CoreLayout = ({ children }: CoreLayoutProps) => {
  return (
    <div>
      <NavBar>
        <NavHeader>Mini Dictionary</NavHeader>
      </NavBar>

      <CoreContentContainer>{children}</CoreContentContainer>

      <ToastContainer
        position="bottom-right"
        pauseOnFocusLoss={false}
        newestOnTop={false}
      />
    </div>
  );
};

export default CoreLayout;
