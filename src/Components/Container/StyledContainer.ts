import styled from "styled-components";
export const Container = styled.div<Props>`
  
  min-height: 100vh;
  width: 100%;
  background: url(${(props) => props.BackgroundImageMobile});
  background-size: 100%;
  /* background-repeat: no-repeat; */
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    background: url(${(props) => props.BackgroundImageTablet});
    
  }
  @media (min-width: 1024px) {
    background: url(${(props) => props.BackgroundImageDesktop});
  }
`;

interface Props {
    BackgroundImageMobile:string;
    BackgroundImageTablet:string;
    BackgroundImageDesktop:string;
}