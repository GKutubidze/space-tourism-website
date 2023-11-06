import { DestinatinComponent } from "../Components/DestinationComponent/DestnationComponent";
import data from "../Data/data.json";
import marsimg from "../assets/destination/image-mars.png";
export const DestinationMars = () => {
  const marsData = data.destinations.find(
    (destination) => destination.name === "Mars"
  );

  if (marsData) {
    return (
      <DestinatinComponent
        planet={marsData.name}
        planetDescripton={marsData.description}
        distance={marsData.distance}
        time={marsData.travel}
        img={marsimg}
      />
    );
  }
};
