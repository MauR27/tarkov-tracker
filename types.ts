export type IQuests = {
  id: number;
  name: string;
  trader: {
    id: string;
    name: string;
  };
  experience: number;
  kappaRequired: boolean;
  wikiLink: string;
  objectives: [
    {
      id: string;
      description: string;
    }
  ];
  map: {
    id: string;
    name: string;
  } | null;
};
