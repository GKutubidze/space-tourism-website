import CrewComponent from "../Components/CrewComponent/CrewComponent";
import data from "../Data/data.json";
import MarkImg from "../assets/crew/image-mark-shuttleworth.png"; // Make sure you have the image for Mark

export default function CrewMark() {
  const markData = data.crew.find((crew) => crew.name === "Mark Shuttleworth");
  if (markData) {
    return (
      <CrewComponent
        crewimg={MarkImg}
        role={markData.role}
        name={markData.name}
        bio={markData.bio}
      ></CrewComponent>
    );
  }
}
