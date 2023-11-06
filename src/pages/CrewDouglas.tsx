import CrewComponent from "../Components/CrewComponent/CrewComponent";
import data from "../Data/data.json";
import DouglasImg from "../assets/crew/image-douglas-hurley.png";
export default function CrewDouglas() {
  const douglasData = data.crew.find((crew) => crew.name === "Douglas Hurley");
  if (douglasData) {
    return (
      <CrewComponent
        crewimg={DouglasImg}
        role={douglasData.role}
        name={douglasData.name}
        bio={douglasData.bio}
      ></CrewComponent>
    );
  }
}
