import styled from "styled-components";
export const Navbar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 254px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
`;
export const ExitLogo = styled.img`
  cursor: pointer;
  width: 19px;
  height: 19px;
`;
export const ExitLogoContainr = styled.div`
  display: flex;
  justify-content: right;
  padding: 33.95px 26.45px 0 0;
`;

export const NavbarMenuChild = styled.p<NavbarMenuChildProps>`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.White};
  font-size: ${(props) => props.fontSize};
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid white;
  }
`;
export const NavbarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 64.95px;
  margin-left: 32px;
  cursor: pointer;
`;

interface NavbarMenuChildProps {
  fontSize?: string;
}
