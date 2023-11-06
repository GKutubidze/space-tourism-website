import React from "react";
import {
  Navbar,
  ExitLogo,
  NavbarMenu,
  NavbarMenuChild,
  ExitLogoContainr,
} from "../Components/NavbarContainer";
import CloseLogo from "../assets/shared/icon-close.svg";
interface Props {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
import { StyledLink } from "./conditionalNavbarTablet";
export default function conditionalNavbar(props: Props) {
  const { showNavbar, setShowNavbar } = props;
  if (showNavbar) {
    return (
      <Navbar>
        <ExitLogoContainr>
          <ExitLogo
            src={CloseLogo}
            onClick={() => {
              setShowNavbar(!showNavbar);
            }}
          />
        </ExitLogoContainr>

        <NavbarMenu>
          <StyledLink to="/">
            <NavbarMenuChild fontSize="16px">00 HOME</NavbarMenuChild>
          </StyledLink>
          <StyledLink to="/moon">
            <NavbarMenuChild>01 destination</NavbarMenuChild>
          </StyledLink>
          <StyledLink to="/douglas">
            <NavbarMenuChild>02 crew</NavbarMenuChild>
          </StyledLink>
          <StyledLink to="/vehicle">
            <NavbarMenuChild>03 technology</NavbarMenuChild>
          </StyledLink>
        </NavbarMenu>
      </Navbar>
    );
  }
  return "";
}
