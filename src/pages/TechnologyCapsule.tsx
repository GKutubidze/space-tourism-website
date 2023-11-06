import TechnologyComponent from "../Components/TechnologyComponent/TechnologyComponent";
import data from "../Data/data.json";
import capsuleimg from "../assets/technology/image-space-capsule-landscape.jpg";
import capsuleimglaptop from "../assets/technology/image-space-capsule-portrait.jpg";
export default function TechnologyCapsule() {
  const CapsuleData = data.technology.find(
    (technology) => technology.name === "Space capsule"
  );
  if (CapsuleData) {
    return (
      <TechnologyComponent
        techimg={capsuleimg}
        name={CapsuleData.name}
        description={CapsuleData.description}
        techimglaptop={capsuleimglaptop}
      ></TechnologyComponent>
    );
  }
}
