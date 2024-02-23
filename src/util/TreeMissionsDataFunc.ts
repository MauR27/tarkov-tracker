import { IQuests } from "../../types";
import tarkovDataQuery from "./tarkovDataQuery";

type TAccObject = {
  [key: string]: IQuests[];
};

type TTaskRequirements = {
  status: string[];
  task: { id: string; name: string };
};

export const treeDataFunc = async () => {
  async function apiTarkov() {
    const { tasks } = await tarkovDataQuery();
    return tasks;
  }
  const tasks = await apiTarkov();

  const filterTasksByTrader = tasks.reduce(
    (acc: TAccObject, mission: IQuests) => {
      const traderName = mission.trader.name;

      if (!acc[traderName]) {
        acc[traderName] = [];
      }

      acc[traderName].push(mission);

      return acc;
    },
    {}
  );

  // sort missions by id, to keep an order ↓↓

  const compareMissionsById = (a: IQuests, b: IQuests) => {
    const idMissionA = parseInt(a.id, 16);
    const idMissionB = parseInt(b.id, 16);

    return idMissionB - idMissionA;
  };

  const praporSortMissionsById =
    filterTasksByTrader.Prapor.sort(compareMissionsById);
  const therapistSortMissionsById =
    filterTasksByTrader.Therapist.sort(compareMissionsById);
  const skierSortMissionsById =
    filterTasksByTrader.Skier.sort(compareMissionsById);
  const peacekeeperSortMissionsById =
    filterTasksByTrader.Peacekeeper.sort(compareMissionsById);
  const mechanicSortMissionsById =
    filterTasksByTrader.Mechanic.sort(compareMissionsById);
  const jaegerSortMissionsById =
    filterTasksByTrader.Jaeger.sort(compareMissionsById);
  const ragmanSortMissionsById =
    filterTasksByTrader.Ragman.sort(compareMissionsById);

  const jaegerMissions = filterTasksByTrader.Jaeger;

  const skierMissions = filterTasksByTrader.Skier;

  const peacekeeperMissions = filterTasksByTrader.Peacekeeper;

  const mechanicMissions = filterTasksByTrader.Mechanic;

  const lightkeeperMissions = filterTasksByTrader.Lightkeeper.map(
    (mission: IQuests) => {
      if (mission.id === "63966faeea19ac7ed845db2c") {
        return { ...mission, taskRequirements: [] };
      } else {
        return { ...mission };
      }
    }
  );

  const fenceMissions = filterTasksByTrader.Fence.map((mission: IQuests) => {
    return { ...mission, taskRequirements: [] };
  });

  const mechanicRequirements = jaegerMissions.flatMap((mission: IQuests) =>
    mission.taskRequirements
      .filter((req: TTaskRequirements) => req.task.id !== mission.id)
      .map((req: TTaskRequirements) => req.task.id)
  );
  const skierRequirements = peacekeeperMissions.flatMap((mission: IQuests) =>
    mission.taskRequirements
      .filter((req: TTaskRequirements) => req.task.id !== mission.id)
      .map((req: TTaskRequirements) => req.task.id)
  );

  const mechanicRequirementsMissions = mechanicMissions.filter(
    (mission: IQuests) => mechanicRequirements.includes(mission.id)
  );

  const skierRequirementsMissions = skierMissions.filter((mission: IQuests) =>
    skierRequirements.includes(mission.id)
  );

  mechanicRequirementsMissions.forEach((mission: IQuests) => {
    if (mission.id === "5d2495a886f77425cd51e403") {
      jaegerMissions.push({
        ...mission,
        taskRequirements: [],
      });
    }
  });

  skierRequirementsMissions.forEach((missions: IQuests) => {
    if (missions.id === "5a27d2af86f7744e1115b323") {
      peacekeeperMissions.push({
        ...missions,
        taskRequirements: [],
      });
    }
  });

  function missionStructure(
    data: IQuests[],
    parentId = null,
    missionsAdded = new Set()
  ): any {
    const missions = data
      .filter((mission: IQuests) => {
        if (parentId === null) {
          return (mission.taskRequirements.length as 0) === 0;
        } else {
          const hasMatchingTaskReq = mission.taskRequirements.some(
            (req: TTaskRequirements) => {
              return req.task.id === parentId;
            }
          );
          return hasMatchingTaskReq;
        }
      })
      .map((mission: any) => {
        if (missionsAdded.has(mission.id)) {
          return null;
        }

        const children = missionStructure(data, mission.id, missionsAdded);
        missionsAdded.add(mission.id);

        return {
          trader: mission.trader.name,
          id: mission.id,
          name: mission.name,
          attributes: {
            level: mission.minPlayerLevel || 0,
            wikiLink: mission.wikiLink,
            kappaRequired: mission.kappaRequired,
            objectives: mission.objectives,
          },
          children: children.length > 0 ? children : undefined,
        };
      })
      .filter((mission) => mission !== null);

    return missions;
  }

  const Tree_Data = {
    trader: "",
    name: "traders",
    id: "",
    attributes: {
      level: -1,
      wikiLink: "",
      kappaRequired: false,
      objectives: [],
    },
    children: [
      {
        trader: "",
        id: "",
        name: "Prapor",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_prapor-removebg-preview_xm87z4.png",
        },
        children: [
          {
            trader: praporSortMissionsById[30].trader.name,
            name: praporSortMissionsById[30].name,
            id: praporSortMissionsById[30].id,
            attributes: {
              level: praporSortMissionsById[30].minPlayerLevel,
              wikiLink: praporSortMissionsById[30].wikiLink,
              kappaRequired: praporSortMissionsById[30].kappaRequired,
              objectives: praporSortMissionsById[30].objectives,
            },
            children: [
              {
                trader: praporSortMissionsById[31].trader.name,
                name: praporSortMissionsById[31].name,
                id: praporSortMissionsById[31].id,
                attributes: {
                  level: praporSortMissionsById[31].minPlayerLevel,
                  wikiLink: praporSortMissionsById[31].wikiLink,
                  kappaRequired: praporSortMissionsById[31].kappaRequired,
                  objectives: praporSortMissionsById[31].objectives,
                },
                children: [
                  {
                    trader: praporSortMissionsById[10].trader.name,
                    name: praporSortMissionsById[10].name,
                    id: praporSortMissionsById[10].id,
                    attributes: {
                      level: praporSortMissionsById[10].minPlayerLevel,
                      wikiLink: praporSortMissionsById[10].wikiLink,
                      kappaRequired: praporSortMissionsById[10].kappaRequired,
                      objectives: praporSortMissionsById[10].objectives,
                    },
                    children: [
                      {
                        trader: praporSortMissionsById[4].trader.name,
                        name: praporSortMissionsById[4].name,
                        id: praporSortMissionsById[4].id,
                        attributes: {
                          level: praporSortMissionsById[4].minPlayerLevel,
                          wikiLink: praporSortMissionsById[4].wikiLink,
                          kappaRequired:
                            praporSortMissionsById[4].kappaRequired,
                          objectives: praporSortMissionsById[4].objectives,
                        },
                        children: [
                          {
                            trader: praporSortMissionsById[0].trader.name,
                            name: praporSortMissionsById[0].name,
                            id: praporSortMissionsById[0].id,
                            attributes: {
                              level: praporSortMissionsById[0].minPlayerLevel,
                              wikiLink: praporSortMissionsById[0].wikiLink,
                              kappaRequired:
                                praporSortMissionsById[0].kappaRequired,
                              objectives: praporSortMissionsById[0].objectives,
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            trader: praporSortMissionsById[12].trader.name,
            name: praporSortMissionsById[12].name,
            id: praporSortMissionsById[12].id,
            attributes: {
              level: praporSortMissionsById[12].minPlayerLevel,
              wikiLink: praporSortMissionsById[12].wikiLink,
              kappaRequired: praporSortMissionsById[12].kappaRequired,
              objectives: praporSortMissionsById[12].objectives,
            },
            children: [],
          },
          {
            trader: praporSortMissionsById[41].trader.name,
            name: praporSortMissionsById[41].name,
            id: praporSortMissionsById[41].id,
            attributes: {
              level: praporSortMissionsById[41].minPlayerLevel,
              wikiLink: praporSortMissionsById[41].wikiLink,
              kappaRequired: praporSortMissionsById[41].kappaRequired,
              objectives: praporSortMissionsById[41].objectives,
            },
            children: [
              {
                trader: praporSortMissionsById[28].trader.name,
                name: praporSortMissionsById[28].name,
                id: praporSortMissionsById[28].id,
                attributes: {
                  level: praporSortMissionsById[28].minPlayerLevel,
                  wikiLink: praporSortMissionsById[28].wikiLink,
                  kappaRequired: praporSortMissionsById[28].kappaRequired,
                  objectives: praporSortMissionsById[28].objectives,
                },
                children: [],
              },
            ],
          },
          {
            trader: praporSortMissionsById[40].trader.name,
            name: praporSortMissionsById[40].name,
            id: praporSortMissionsById[40].id,
            attributes: {
              level: praporSortMissionsById[40].minPlayerLevel,
              wikiLink: praporSortMissionsById[40].wikiLink,
              kappaRequired: praporSortMissionsById[40].kappaRequired,
              objectives: praporSortMissionsById[40].objectives,
            },
            children: [
              {
                trader: praporSortMissionsById[35].trader.name,
                name: praporSortMissionsById[35].name,
                id: praporSortMissionsById[35].id,
                attributes: {
                  level: praporSortMissionsById[35].minPlayerLevel,
                  wikiLink: praporSortMissionsById[35].wikiLink,
                  kappaRequired: praporSortMissionsById[35].kappaRequired,
                  objectives: praporSortMissionsById[35].objectives,
                },
                children: [],
              },
            ],
          },
          missionStructure(filterTasksByTrader.Prapor, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705512797/home-preview_therapist-removebg-preview_tdf0sw.png",
        },
        name: "Therapist",

        children: [
          {
            trader: therapistSortMissionsById[12].trader.name,
            name: therapistSortMissionsById[12].name,
            id: therapistSortMissionsById[12].id,
            attributes: {
              level: therapistSortMissionsById[12].minPlayerLevel,
              wikiLink: therapistSortMissionsById[12].wikiLink,
              kappaRequired: therapistSortMissionsById[12].kappaRequired,
              objectives: therapistSortMissionsById[12].objectives,
            },
            children: [],
          },
          {
            trader: therapistSortMissionsById[24].trader.name,
            name: therapistSortMissionsById[24].name,
            id: therapistSortMissionsById[24].id,
            attributes: {
              level: therapistSortMissionsById[24].minPlayerLevel,
              wikiLink: therapistSortMissionsById[24].wikiLink,
              kappaRequired: therapistSortMissionsById[24].kappaRequired,
              objectives: therapistSortMissionsById[24].objectives,
            },
            children: [],
          },
          {
            trader: therapistSortMissionsById[25].trader.name,
            name: therapistSortMissionsById[25].name,
            id: therapistSortMissionsById[25].id,
            attributes: {
              level: therapistSortMissionsById[25].minPlayerLevel,
              wikiLink: therapistSortMissionsById[25].wikiLink,
              kappaRequired: therapistSortMissionsById[25].kappaRequired,
              objectives: therapistSortMissionsById[25].objectives,
            },
            children: [],
          },
          {
            trader: therapistSortMissionsById[36].trader.name,
            name: therapistSortMissionsById[36].name,
            id: therapistSortMissionsById[36].id,
            attributes: {
              level: therapistSortMissionsById[36].minPlayerLevel,
              wikiLink: therapistSortMissionsById[36].wikiLink,
              kappaRequired: therapistSortMissionsById[36].kappaRequired,
              objectives: therapistSortMissionsById[36].objectives,
            },
            children: [],
          },
          missionStructure(filterTasksByTrader.Therapist, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_skier-removebg-preview_r4ovom.png",
        },
        name: "Skier",
        children: [
          {
            trader: skierSortMissionsById[13].trader.name,
            name: skierSortMissionsById[13].name,
            id: skierSortMissionsById[13].id,
            attributes: {
              level: skierSortMissionsById[13].minPlayerLevel,
              wikiLink: skierSortMissionsById[13].wikiLink,
              kappaRequired: skierSortMissionsById[13].kappaRequired,
              objectives: skierSortMissionsById[13].objectives,
            },
            children: [
              {
                trader: skierSortMissionsById[11].trader.name,
                name: skierSortMissionsById[11].name,
                id: skierSortMissionsById[11].id,
                attributes: {
                  level: skierSortMissionsById[11].minPlayerLevel,
                  wikiLink: skierSortMissionsById[11].wikiLink,
                  kappaRequired: skierSortMissionsById[11].kappaRequired,
                  objectives: skierSortMissionsById[11].objectives,
                },
                children: [],
              },
            ],
          },
          {
            trader: skierSortMissionsById[35].trader.name,
            name: skierSortMissionsById[35].name,
            id: skierSortMissionsById[35].id,
            attributes: {
              level: skierSortMissionsById[35].minPlayerLevel,
              wikiLink: skierSortMissionsById[35].wikiLink,
              kappaRequired: skierSortMissionsById[35].kappaRequired,
              objectives: skierSortMissionsById[35].objectives,
            },
            children: [],
          },
          missionStructure(filterTasksByTrader.Skier, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_peacemaker-removebg-preview_ozg6qb.png",
        },
        name: "Peacekeeper",
        children: [
          {
            trader: peacekeeperSortMissionsById[18].trader.name,
            name: peacekeeperSortMissionsById[18].name,
            id: peacekeeperSortMissionsById[18].id,
            attributes: {
              level: peacekeeperSortMissionsById[18].minPlayerLevel,
              wikiLink: peacekeeperSortMissionsById[18].wikiLink,
              kappaRequired: peacekeeperSortMissionsById[18].kappaRequired,
              objectives: peacekeeperSortMissionsById[18].objectives,
            },
            children: [
              {
                trader: peacekeeperSortMissionsById[17].trader.name,
                name: peacekeeperSortMissionsById[17].name,
                id: peacekeeperSortMissionsById[17].id,
                attributes: {
                  level: peacekeeperSortMissionsById[17].minPlayerLevel,
                  wikiLink: peacekeeperSortMissionsById[17].wikiLink,
                  kappaRequired: peacekeeperSortMissionsById[17].kappaRequired,
                  objectives: peacekeeperSortMissionsById[17].objectives,
                },
                children: [],
              },
            ],
          },
          missionStructure(filterTasksByTrader.Peacekeeper, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_mechanic-removebg-preview_anyakw.png",
        },
        name: "Mechanic",
        children: [
          {
            trader: mechanicSortMissionsById[37].trader.name,
            name: mechanicSortMissionsById[37].name,
            id: mechanicSortMissionsById[37].id,
            attributes: {
              level: mechanicSortMissionsById[37].minPlayerLevel,
              wikiLink: mechanicSortMissionsById[37].wikiLink,
              kappaRequired: mechanicSortMissionsById[37].kappaRequired,
              objectives: mechanicSortMissionsById[37].objectives,
            },
            children: [
              {
                trader: mechanicSortMissionsById[34].trader.name,
                name: mechanicSortMissionsById[34].name,
                id: mechanicSortMissionsById[34].id,
                attributes: {
                  level: mechanicSortMissionsById[34].minPlayerLevel,
                  wikiLink: mechanicSortMissionsById[34].wikiLink,
                  kappaRequired: mechanicSortMissionsById[34].kappaRequired,
                  objectives: mechanicSortMissionsById[34].objectives,
                },
                children: [
                  {
                    trader: mechanicSortMissionsById[33].trader.name,
                    name: mechanicSortMissionsById[33].name,
                    id: mechanicSortMissionsById[33].id,
                    attributes: {
                      level: mechanicSortMissionsById[33].minPlayerLevel,
                      wikiLink: mechanicSortMissionsById[33].wikiLink,
                      kappaRequired: mechanicSortMissionsById[33].kappaRequired,
                      objectives: mechanicSortMissionsById[33].objectives,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            trader: mechanicSortMissionsById[41].trader.name,
            name: mechanicSortMissionsById[41].name,
            id: mechanicSortMissionsById[41].id,
            attributes: {
              level: mechanicSortMissionsById[41].minPlayerLevel,
              wikiLink: mechanicSortMissionsById[41].wikiLink,
              kappaRequired: mechanicSortMissionsById[41].kappaRequired,
              objectives: mechanicSortMissionsById[41].objectives,
            },
            children: [],
          },
          missionStructure(filterTasksByTrader.Mechanic, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_ragman-removebg-preview_jblvbn.png",
        },
        name: "Ragman",
        children: [
          {
            trader: ragmanSortMissionsById[2].trader.name,
            name: ragmanSortMissionsById[2].name,
            id: ragmanSortMissionsById[2].id,
            attributes: {
              level: ragmanSortMissionsById[2].minPlayerLevel,
              wikiLink: ragmanSortMissionsById[2].wikiLink,
              kappaRequired: ragmanSortMissionsById[2].kappaRequired,
              objectives: ragmanSortMissionsById[2].objectives,
            },
            children: [],
          },
          missionStructure(filterTasksByTrader.Ragman, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_jaeger-removebg-preview_kfnpy8.png",
        },
        name: "Jaeger",
        children: [
          {
            trader: jaegerSortMissionsById[5].trader.name,
            name: jaegerSortMissionsById[5].name,
            id: jaegerSortMissionsById[5].id,
            attributes: {
              level: jaegerSortMissionsById[5].minPlayerLevel,
              wikiLink: jaegerSortMissionsById[5].wikiLink,
              kappaRequired: jaegerSortMissionsById[5].kappaRequired,
              objectives: jaegerSortMissionsById[5].objectives,
            },
            children: [
              {
                trader: jaegerSortMissionsById[6].trader.name,
                name: jaegerSortMissionsById[6].name,
                id: jaegerSortMissionsById[6].id,
                attributes: {
                  level: jaegerSortMissionsById[6].minPlayerLevel,
                  wikiLink: jaegerSortMissionsById[6].wikiLink,
                  kappaRequired: jaegerSortMissionsById[6].kappaRequired,
                  objectives: jaegerSortMissionsById[6].objectives,
                },
                children: [
                  {
                    trader: jaegerSortMissionsById[1].trader.name,
                    name: jaegerSortMissionsById[1].name,
                    id: jaegerSortMissionsById[1].id,
                    attributes: {
                      level: jaegerSortMissionsById[1].minPlayerLevel,
                      wikiLink: jaegerSortMissionsById[1].wikiLink,
                      kappaRequired: jaegerSortMissionsById[1].kappaRequired,
                      objectives: jaegerSortMissionsById[1].objectives,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            trader: jaegerSortMissionsById[17].trader.name,
            name: jaegerSortMissionsById[17].name,
            id: jaegerSortMissionsById[17].id,
            attributes: {
              level: jaegerSortMissionsById[17].minPlayerLevel,
              wikiLink: jaegerSortMissionsById[17].wikiLink,
              kappaRequired: jaegerSortMissionsById[17].kappaRequired,
              objectives: jaegerSortMissionsById[17].objectives,
            },
            children: [
              {
                trader: jaegerSortMissionsById[12].trader.name,
                name: jaegerSortMissionsById[12].name,
                id: jaegerSortMissionsById[12].id,
                attributes: {
                  level: jaegerSortMissionsById[12].minPlayerLevel,
                  wikiLink: jaegerSortMissionsById[12].wikiLink,
                  kappaRequired: jaegerSortMissionsById[12].kappaRequired,
                  objectives: jaegerSortMissionsById[12].objectives,
                },
                children: [],
              },
            ],
          },
          missionStructure(filterTasksByTrader.Jaeger, null)[0],
        ],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_lightkeeper-removebg-preview_gapgam.png",
        },
        name: "Lightkeeper",
        children: [missionStructure(lightkeeperMissions, null)[0]],
      },
      {
        trader: "",
        id: "",
        attributes: {
          level: 0,
          wikiLink: "",
          kappaRequired: false,
          objectives: [],
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_fence-removebg-preview_z7zeun.png",
        },
        name: "Fence",
        children: [
          {
            trader: fenceMissions[1].trader.name,
            name: fenceMissions[1].name,
            id: fenceMissions[1].id,
            attributes: {
              level: fenceMissions[1].minPlayerLevel,
              wikiLink: fenceMissions[1].wikiLink,
              kappaRequired: fenceMissions[1].kappaRequired,
              objectives: fenceMissions[1].objectives,
            },
            children: [],
          },
          missionStructure(fenceMissions, null)[0],
        ],
      },
    ],
  };
  return Tree_Data;
};
