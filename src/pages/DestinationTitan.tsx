import { DestinatinComponent } from "../Components/DestinationComponent/DestnationComponent";
import data from "../Data/data.json";
import titanImg from "../assets/destination/image-titan.png"; // Import the image for Titan

export const DestinationTitan = () => {
  const titanData = data.destinations.find(
    (destination) => destination.name === "Titan"
  );

  if (titanData) {
    return (
      <DestinatinComponent
        planet={titanData.name}
        planetDescripton={titanData.description}
        distance={titanData.distance}
        time={titanData.travel}
        img={titanImg} // Use the Titan image
      />
    );
  }
};
