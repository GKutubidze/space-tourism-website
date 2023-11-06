import CrewComponent from "../Components/CrewComponent/CrewComponent";
import data from "../Data/data.json";
import VictorImg from "../assets/crew/image-victor-glover.png"; // Make sure you have the image for Mark

export default function CrewVictor() {
  const VictorData = data.crew.find((crew) => crew.name === "Victor Glover");
  if (VictorData) {
    return (
      <CrewComponent
        crewimg={VictorImg}
        role={VictorData.role}
        name={VictorData.name}
        bio={VictorData.bio}
      ></CrewComponent>
    );
  }
}
