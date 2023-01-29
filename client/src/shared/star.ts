type Star = {
  id: number;
  name: string;
  constellation: string;
  distance: number;
  solarMasses: number;
  temperature: number;
  fact: string;
  link: string;
  messages: string[];
  starResource: string;
};

export const defaultStar: Star = {
  id: 0,
  name: "Star's Name!",
  constellation: "Constellation",
  distance: 0,
  solarMasses: 0,
  temperature: 0,
  fact: "This star is hotter than your typical cup of coffee!",
  link: "https://bit.ly/3BlS71b",
  messages: [],
  starResource: "blue",
};

export type StarContextType = {
  star: Star;
  updateStar: (newStar: Star) => void;
};

export const defaultStarContext: StarContextType = {
  star: defaultStar,
  updateStar: (newStar: Star): void => {},
};

export default Star;
