import BackgroundImageMobile from "../../assets/technology/background-technology-mobile.jpg";
import BackgroundImageTablet from "../../assets/technology/background-technology-tablet.jpg";
import BackgroundImageDesktop from "../../assets/technology/background-technology-desktop.jpg";
import { Container } from "../Container/StyledContainer";
import { useState } from "react";
import { HeaderComponent } from "../Header/HeaderComponent";
import conditionalNavbar from "../conditionalNavbar";
import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidt";
import { technology } from "../../Data/Data";
interface Props {
  techimg: string;
  name: string;
  description: string;
  techimglaptop: string;
}
import { StyledLink } from "../conditionalNavbarTablet";
export default function TechnologyComponent(props: Props) {
  const width = useWindowWidth();
  const { techimg, name, description, techimglaptop } = props;
  console.log(name, description);
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Container
      BackgroundImageMobile={BackgroundImageMobile}
      BackgroundImageDesktop={BackgroundImageDesktop}
      BackgroundImageTablet={BackgroundImageTablet}
    >
      <HeaderComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      {conditionalNavbar({ showNavbar, setShowNavbar })}
      <HeaderTitle>
        <TechTitle>03 SPACE LAUNCH 101</TechTitle>
      </HeaderTitle>
      <MainContainer>
        <ImgContainer>
          {width < 1024 ? (
            <TechImage src={techimg} />
          ) : (
            <TechImage src={techimglaptop} />
          )}
        </ImgContainer>
        <ContantContainer>
          <NavContainer>
            {technology.map((tech, index) => (
              <StyledLink to={`/${tech}`}>
                <Circle>{index + 1}</Circle>
              </StyledLink>
            ))}
          </NavContainer>
          <InfoContainer>
            <TermTitle>THE TERMINOLOGY…</TermTitle>
            <NameTitle>{name}</NameTitle>
            <Contant>{description}</Contant>
          </InfoContainer>
        </ContantContainer>
      </MainContainer>
    </Container>
  );
}
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
const NavContainer = styled.div`
  margin-bottom: 24px;
  width: 152px;
  display: flex;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    margin-top: 44px;
    width: 210px;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: column;
    margin-left: 165px;
  }
`;
const Contant = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.LavenderBlue};
  text-align: center;
  line-height: 25px;
  letter-spacing: 0;
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 56px;
  @media only screen and (min-width: 768px) {
    margin-right: 155px;
    margin-left: 155px;
    font-size: 16px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1024px) {
    margin-left: 80px;
    margin-right: 130px;
    font-size: 18px;
  }
`;
const NameTitle = styled.p`
  color: ${(props) => props.theme.colors.White};
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
`;
const ContantContainer = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    margin-top: 56px;
  }
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
const TermTitle = styled.p`
  color: ${(props) => props.theme.colors.LavenderBlue};
  font-size: 14px;
  margin-bottom: 9px;
  @media only screen and (min-width: 768px) {
    margin-top: 16px;
    font-size: 16px;
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 101px 32px 98px;
  @media only screen and (min-width: 768px) {
    justify-content: left;
    margin: 40px 512px 60px 38.5px;
  }
`;
const TechTitle = styled.p`
  color: ${(props) => props.theme.colors.White};
  font-size: 16px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const TechImage = styled.img`
  width: 100%;
  @media only screen and (min-width: 1024px) {
  }
`;
const ImgContainer = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
