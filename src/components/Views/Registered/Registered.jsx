import { useParams } from "react-router-dom";

export default function Registered() {
  const { teamID } = useParams();

  return (
    <>
      <h1>REGISTRADO</h1>
      <p>El team ID de tu equipo es: {teamID}</p>
    </>
  );
}
