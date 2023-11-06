import TechnologyComponent from "../Components/TechnologyComponent/TechnologyComponent";
import data from "../Data/data.json";
import vehicleimg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehicleimglaptop from "../assets/technology/image-launch-vehicle-portrait.jpg";
export default function TechnologyVehicle() {
  const VehicleData = data.technology.find(
    (technology) => technology.name === "Launch vehicle"
  );

  if (VehicleData) {
    return (
      <TechnologyComponent
        techimg={vehicleimg}
        name={VehicleData.name}
        description={VehicleData.description}
        techimglaptop={vehicleimglaptop}
      ></TechnologyComponent>
    );
  }
}
