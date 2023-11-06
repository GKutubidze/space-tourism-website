import styled from "styled-components";
interface TitleProps {
  fontSize: string;
}
export const Title = styled.p<TitleProps>`
  color: ${(props) => props.theme.colors.LavenderBlue};
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
  /* margin: 0 55px 0 55px; */
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
export const HeadingTitle = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.White};
  @media (min-width: 768px) {
    font-size: 150px;
  }
`;
interface ContantProps {
  fontSize: string;
  tabletFontSize: string;
}

export const Contant = styled.p<ContantProps>`
  color: ${(props) => props.theme.colors.LavenderBlue};
  font-size: ${(props) => props.fontSize};
  text-align: center;
  @media (min-width: 768px) {
    font-size: ${(props) => props.tabletFontSize};
  }
`;
export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.marginTop} 24px 0 24px;
  gap: 16px;
  @media (min-width: 768px) {
    margin: 106px 159px 0 159px;
  }
  @media (min-width: 1024px) {
    width: 450px;
    height: 382px;
  }
`;
interface ContentContainerProps {
  marginTop: string;
}
