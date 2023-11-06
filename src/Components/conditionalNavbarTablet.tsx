import styled from "styled-components";
import { NavbarMenuChild } from "../Components/NavbarContainer";
import { Link } from "react-router-dom";

export default function conditionalNavbarTablet() {
  return (
    <NavbarForTablet>
      <StyledLink to="/">
        <NavbarMenuChild fontSize="14px">HOME</NavbarMenuChild>
      </StyledLink>
      <StyledLink to="/moon">
        <NavbarMenuChild fontSize="14px">destination</NavbarMenuChild>
      </StyledLink>
      <StyledLink to="/douglas">
        <NavbarMenuChild fontSize="14px">crew</NavbarMenuChild>
      </StyledLink>
      <StyledLink to="/vehicle">
        <NavbarMenuChild fontSize="14px">technology</NavbarMenuChild>
      </StyledLink>
    </NavbarForTablet>
  );
}
export const NavbarForTablet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 37px;
  padding: 39px 46px 39px 48px;
  cursor: pointer;
  background-color: #1f202c;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
