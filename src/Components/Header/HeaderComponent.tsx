import {
  Header,
  HeaderLogo,
  NavLogo,
} from "../../Components/Header/StyledHeader";
import Logo from "../../assets/shared/logo.svg";
import NavigationLogo from "../../assets/shared/icon-hamburger.svg";
import conditionalNavbarTablet from "../../Components/conditionalNavbarTablet";
import useWindowWidth from "../../hooks/useWindowWidt";
import { StyledLink } from "../../Components/conditionalNavbarTablet";
interface Props {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const HeaderComponent = (props: Props) => {
  const TABLET_WIDTH = 765;
  const width = useWindowWidth();
  const { showNavbar, setShowNavbar } = props;
  return (
    <Header>
      <StyledLink to="/">
        <HeaderLogo src={Logo} />
      </StyledLink>
      {width < TABLET_WIDTH ? (
        <NavLogo
          src={NavigationLogo}
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
        />
      ) : null}

      {width > TABLET_WIDTH ? conditionalNavbarTablet() : null}
    </Header>
  );
};
