import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function () {
  const { displayName } = useContext(GlobalContext);

  let name = displayName.trim();
  return (
    <>
      <h2> {name ? `${name} Photos` : "Random Photos"} </h2>
    </>
  );
}
