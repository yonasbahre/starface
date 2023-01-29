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
  name: "",
  constellation: "",
  distance: 0,
  solarMasses: 0,
  temperature: 0,
  fact: "",
  link: "",
  messages: [],
  starResource: "",
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
