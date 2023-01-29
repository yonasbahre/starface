import { useEffect, useContext } from "react";
import Star from "../shared/star";
import { StarContext } from "../App";
import Navbar from "./navbar";

const StarPage: React.FC<{}> = () => {
  const { star } = useContext(StarContext);

  return <Navbar />;
};

export default StarPage;
