import { Container } from "../../Components/Container/StyledContainer";
import { HeaderComponent } from "../../Components/Header/HeaderComponent";
import BackgroundImageMobile from "../../assets/destination/background-destination-mobile.jpg";
import BackgroundImageTablet from "../../assets/destination/background-destination-tablet.jpg";
import BackgroundImageDesktop from "../../assets/destination/background-destination-desktop.jpg";
import { useState } from "react";
import conditionalNavbar from "../../Components/conditionalNavbar";
import styled from "styled-components";
import { planets } from "../../Data/Data";
import { Link } from "react-router-dom";
interface Props {
  planet: string;
  planetDescripton: string;
  distance: string;
  time: string;
  img: string;
}
export const DestinatinComponent = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { planet, planetDescripton, distance, time, img } = props;
  return (
    <Container
      BackgroundImageMobile={BackgroundImageMobile}
      BackgroundImageDesktop={BackgroundImageDesktop}
      BackgroundImageTablet={BackgroundImageTablet}
    >
      <HeaderComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <MainContainer>
        <PlanetImageContainer>
          <DestinationTitle fontSize="16px" tabletFontSize="20px">
            01 Pick your destination
          </DestinationTitle>

          <PlanetImage src={img} />
        </PlanetImageContainer>
        <PlanetsInfo>
          <PlanetsContainer>
            {planets.map((planet, index) => (
              <Link to={`/${planet}`}>
                <DestinationTitle
                  key={index}
                  fontSize="14px"
                  tabletFontSize="16px"
                >
                  {planet}
                </DestinationTitle>
              </Link>
            ))}
          </PlanetsContainer>
          <DestinationTitle fontSize="56px" tabletFontSize="80px">
            {planet}
          </DestinationTitle>
          <PlanetDescription>{planetDescripton}</PlanetDescription>

          <DistanceInfoContainer>
            <DistanceInfo>
              <DestinationTitle fontSize="14px" tabletFontSize="14px">
                AVG. DISTANCE
              </DestinationTitle>
              <DestinationTitle fontSize="28px" tabletFontSize="28px">
                {distance}
              </DestinationTitle>
            </DistanceInfo>
            <DistanceInfo style={{ marginBottom: "58px" }}>
              <DestinationTitle fontSize="14px" tabletFontSize="14px">
                Est. travel time
              </DestinationTitle>
              <DestinationTitle fontSize="28px" tabletFontSize="28px">
                {time}
              </DestinationTitle>
            </DistanceInfo>
          </DistanceInfoContainer>
        </PlanetsInfo>
      </MainContainer>
      {conditionalNavbar({ showNavbar, setShowNavbar })}
    </Container>
  );
};
const PlanetsInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    width: 400px;
  }
`;
const PlanetImage = styled.img`
  margin-top: 16px;
  width: 170px;
  height: 170px;
  @media (min-width: 1024px) {
    width: 345px;
    height: 345px;
  }
`;
const PlanetsContainer = styled.div`
  margin: 10px 69px 0 69px;
  display: flex;
  justify-content: center;
  gap: 27px;
`;
const DistanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  margin-top: 32px;
`;
const DistanceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

const PlanetDescription = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.LavenderBlue};
  text-align: center;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    border-bottom: 1px solid #383b4b;
    width: 500px;
  }
`;
const DestinationTitle = styled.p<DestinationTitleProps>`
  color: ${(props) => props.theme.colors.LavenderBlue};
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
  /* margin: 0 55px 0 55px; */

  @media (min-width: 768px) {
    font-size: ${(props) => props.tabletFontSize};
  }
`;
interface DestinationTitleProps {
  fontSize: string;
  tabletFontSize: string;
}
const PlanetImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    margin-top: 76px;
  }
`;
