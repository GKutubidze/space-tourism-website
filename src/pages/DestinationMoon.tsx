import { DestinatinComponent } from "../Components/DestinationComponent/DestnationComponent";
import data from "../Data/data.json";
import moonimg from "../assets/destination/image-moon.png";
export const DestinationMoon = () => {
  const moonData = data.destinations.find(
    (destination) => destination.name === "Moon"
  );
  if (moonData) {
    return (
      <DestinatinComponent
        planet={moonData.name}
        planetDescripton={moonData.description}
        distance={moonData.distance}
        time={moonData.travel}
        img={moonimg}
      />
    );
  }
};
