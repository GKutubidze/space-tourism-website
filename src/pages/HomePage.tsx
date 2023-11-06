import styled from "styled-components";
import { useState } from "react";
import BackgroundImageMobile from "../assets/home/background-home-mobile.jpg";
import BackgroundImageTablet from "../assets/home/background-home-tablet.jpg";
import BackgroundImageDesktop from "../assets/home/background-home-desktop.jpg";
import { HeaderComponent } from "../Components/Header/HeaderComponent";
import conditionalNavbar from "../Components/conditionalNavbar";
import {
  ContentContainer,
  HeadingTitle,
  Contant,
  Title,
} from "../Components/ContantContainer";
import { Container } from "../Components/Container/StyledContainer";

export const HomePage = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Container
      BackgroundImageMobile={BackgroundImageMobile}
      BackgroundImageDesktop={BackgroundImageDesktop}
      BackgroundImageTablet={BackgroundImageTablet}
    >
      <HeaderComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Main>
        <ContentContainer marginTop="58px">
          <Title fontSize="16px">So, you want to travel to </Title>
          <HeadingTitle>space</HeadingTitle>
          <Contant fontSize="15px" tabletFontSize="16px">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Contant>
        </ContentContainer>
        <Explore>Explore</Explore>
      </Main>
      {conditionalNavbar({ showNavbar, setShowNavbar })}
    </Container>
  );
};

export const Explore = styled.div`
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.RichBlack};
  font-size: 20px;
  margin: 81px auto;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-top: 156px;
    font-size: 32px;
    width: 242px;
    height: 242px;
  }
  @media (min-width: 1024px) {
    width: 274px;
    height: 274px;
  }
`;

export const Main = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;
