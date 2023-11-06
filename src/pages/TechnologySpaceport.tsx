import TechnologyComponent from "../Components/TechnologyComponent/TechnologyComponent";
import data from "../Data/data.json";
import spaceimg from "../assets/technology/image-spaceport-landscape.jpg";
import spaceimglaptop from "../assets/technology/image-spaceport-portrait.jpg";
export default function TechnologySpaceport() {
  const SpaceData = data.technology.find(
    (technology) => technology.name === "Spaceport"
  );

  if (SpaceData) {
    return (
      <TechnologyComponent
        techimg={spaceimg}
        name={SpaceData.name}
        description={SpaceData.description}
        techimglaptop={spaceimglaptop}
      ></TechnologyComponent>
    );
  }
}
