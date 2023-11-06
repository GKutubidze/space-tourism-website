import styled from "styled-components";
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 24px 0 0 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin: 0 0 0 39px;
  }
`;
export const NavLogo = styled.img`
  all: unset;
  width: 24px;
  height: 21px;
  margin: 33px 24px 0 0;
  cursor: pointer;
`;
