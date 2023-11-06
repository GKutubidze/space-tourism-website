import { Container } from "../Container/StyledContainer";
import BackgroundImageMobile from "../../assets/crew/background-crew-mobile.jpg";
import BackgroundImageTablet from "../../assets/crew/background-crew-tablet.jpg";
import BackgroundImageDesktop from "../../assets/crew/background-crew-desktop.jpg";
import { HeaderComponent } from "../Header/HeaderComponent";
import { useState } from "react";
import styled from "styled-components";
import conditionalNavbar from "../conditionalNavbar";
import { crew } from "../../Data/Data";
import { Link } from "react-router-dom";
interface Props {
  crewimg: string;
  role: string;
  name: string;
  bio: string;
}
export default function CrewComponent(props: Props) {
  const { crewimg, role, name, bio } = props;
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Container
      BackgroundImageMobile={BackgroundImageMobile}
      BackgroundImageDesktop={BackgroundImageDesktop}
      BackgroundImageTablet={BackgroundImageTablet}
    >
      <HeaderComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <HeaderTitle>
        <CrewTitle>02 Meet your crew</CrewTitle>
      </HeaderTitle>

      <MainContainer>
        <CrewImg src={crewimg} />

        <CrewContantContainer>
          <NavigationContainer>
            {crew.map((crewMember: string, index: number) => (
              <Link to={`/${crewMember}`}>
                <NavigationItem key={index}></NavigationItem>
              </Link>
            ))}
          </NavigationContainer>
          <CrewContant>
            <RoleTitle> {role}</RoleTitle>
            <NameTitle>{name}</NameTitle>
            <Bio>{bio}</Bio>
          </CrewContant>
        </CrewContantContainer>
      </MainContainer>
      {conditionalNavbar({ showNavbar, setShowNavbar })}
    </Container>
  );
}
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    justify-content: left;
    padding: 38.5px;
    margin-bottom: 60px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    padding-left: 240px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    margin-left: 165px;
  }
`;
const CrewContantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  @media (min-width: 768px) {
    width: 458px;
    height: 232px;
    margin-bottom: 40px;
    flex-direction: column-reverse;
  }
  @media (min-width: 1024px) {
    width: 488px;
    height: 800px;
    justify-content: center;
    align-items: last baseline;
    margin-left: 0;
    margin-top: -150px;
  }
`;
const Bio = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.LavenderBlue};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;
const NameTitle = styled.p`
  font-size: 24px;
  color: ${(props) => props.theme.colors.White};
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;
const RoleTitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.White};
  text-transform: uppercase;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;
const CrewContant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    align-items: last baseline;
  }
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
const NavigationItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #979797;
  &:active {
    background-color: ${(props) => props.theme.colors.White};
  }
`;
const NavigationContainer = styled.div`
  display: flex;
  width: 88px;
  gap: 16px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    /* margin-top: 40px; */
    margin-bottom: 0;
  }
  @media (min-width: 1024px) {
    /* margin-top: 40px; */
    margin-top: 120px;
  }
`;
const CrewImg = styled.img`
  width: 177px;
  height: 222px;
  margin: 0 40px 32px 98px;
  @media (min-width: 768px) {
    width: 456px;
    height: 572px;
  }
  @media (min-width: 1024px) {
    width: 568px;
    height: 612px;
  }
`;

const CrewTitle = styled.p`
  color: ${(props) => props.theme.colors.White};
  text-transform: uppercase;
  font-size: 16px;
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;
