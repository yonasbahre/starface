import { useEffect, useContext } from "react";
import Star from "../shared/star";
import { StarContext } from "../App";

const StarPage: React.FC<{}> = () => {
  const { star } = useContext(StarContext);

  return <div>StarPage goes here</div>;
};

export default StarPage;
