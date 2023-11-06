import CrewComponent from "../Components/CrewComponent/CrewComponent";
import data from "../Data/data.json";
import AnoushehImg from "../assets/crew/image-anousheh-ansari.png"; // Make sure you have the image for Anousheh Ansari

export default function CrewAnousheh() {
  const AnoushehData = data.crew.find(
    (crew) => crew.name === "Anousheh Ansari"
  );
  if (AnoushehData) {
    return (
      <CrewComponent
        crewimg={AnoushehImg}
        role={AnoushehData.role}
        name={AnoushehData.name}
        bio={AnoushehData.bio}
      ></CrewComponent>
    );
  } else {
    // Handle the case where Anousheh Ansari's data is not found.
    return <div>Anousheh Ansari's data not found</div>;
  }
}
