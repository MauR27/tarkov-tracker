export interface IQuests {
  id: number;
  tarkovDataId: number;
  name: string;
  trader: {
    id: string;
    name: string;
    imageLink: string;
  };
  map: {
    id: string;
    name: string;
  } | null;
  experience: number;
  kappaRequired: boolean;
  lightkeeperRequired: boolean;
  wikiLink: string;
  minPlayerLevel: number;
  objectives: TaskObjectiveType[];
}

interface TaskObjectiveType
  extends ITaskObjectiveBuildItem,
    ITaskObjectiveExperience,
    ITaskObjectiveExtract,
    ITaskObjectiveItem,
    ITaskObjectiveMark,
    ITaskObjectivePlayerLevel,
    ITaskObjectiveQuestItem,
    ITaskObjectiveShoot,
    ITaskObjectiveSkill,
    ITaskObjectiveTaskStatus,
    ITaskObjectiveTraderLevel {}

interface IBaseItemProperties {
  id: string;
  shortName: string;
  name: string;
  link: string;
  wikiLink: string;
  image512pxLink: string;
  gridImageLink: string;
  baseImageLink: string;
  iconLink: string;
  image8xLink: string;
  backgroundColor: string;
}

interface IItemProperties {
  id: string;
  shortName: string;
  name: string;
  link: string;
  wikiLink: string;
  image512pxLink: string;
  gridImageLink: string;
  baseImageLink: string;
  iconLink: string;
  image8xLink: string;
  backgroundColor: string;
  properties: {
    defaultPreset: IBaseItemProperties;
  };
}

export interface ITaskObjectiveBuildItem {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  item: IItemProperties;
  containsAll: IBaseItemProperties;
  containsCategory: {
    id: string;
    name: string;
    normalizedName: string;
    __typename: string;
  };
  attributes: {
    name: string;
    requirement: {
      compareMethod: string;
      value: number;
    };
  };
}

export interface ITaskObjectiveExperience {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  healthEffect: {
    bodyParts: string[];
    effects: string[];
    time: {
      compareMethod: string;
      value: number;
    };
  };
}

export interface ITaskObjectiveExtract {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  exitStatus: string[];
  zoneNames: string[];
}

export interface ITaskObjectiveItem {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  item: IItemProperties;
  count: number;
  foundInRaid: boolean;
  dogTagLevel: number;
  maxDurability: number;
  minDurability: number;
}

export interface ITaskObjectiveMark {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  markerItem: IBaseItemProperties;
}

export interface ITaskObjectivePlayerLevel {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  playerLevel: number;
}

export interface ITaskObjectiveQuestItem {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  questItem: {
    id: string;
    name: string;
  };
  count: number;
}

export interface ITaskObjectiveShoot {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  shotType: string;
  targetNames: string[];
  count: number;
  zoneNames: string[];
  bodyParts: string[];
  usingWeapon: IItemProperties;
  usingWeaponMods: IBaseItemProperties;
  wearing: IBaseItemProperties;
  notWearing: IBaseItemProperties;
  distance: {
    compareMethod: string;
    value: number;
  };
  playerHealthEffect: {
    bodyParts: string[];
    effects: string[];
    time: {
      compareMethod: string;
      value: number;
    };
  };
  enemyHealthEffect: {
    bodyParts: string[];
    effects: string[];
    time: {
      compareMethod: string;
      value: number;
    };
  };
}

export interface ITaskObjectiveSkill {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  skillLevel: {
    name: string;
    level: number;
  };
}

export interface ITaskObjectiveTaskStatus {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  task: {
    id: string;
    name: string;
  };
  status: string[];
}

export interface ITaskObjectiveTraderLevel {
  id: string;
  description: string;
  type: string;
  maps: {
    id: string;
    name: string;
  };
  optional: boolean;
  __typename: string;
  trader: {
    id: string;
    name: string;
  };
  level: number;
}
