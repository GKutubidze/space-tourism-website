import { DestinatinComponent } from "../Components/DestinationComponent/DestnationComponent";
import data from "../Data/data.json";
import europaImg from "../assets/destination/image-europa.png"; // Import the image for Europa

export const DestinationEuropa = () => {
  const europaData = data.destinations.find(
    (destination) => destination.name === "Europa"
  );

  if (europaData) {
    return (
      <DestinatinComponent
        planet={europaData.name}
        planetDescripton={europaData.description}
        distance={europaData.distance}
        time={europaData.travel}
        img={europaImg} // Use the Europa image
      />
    );
  }
};
