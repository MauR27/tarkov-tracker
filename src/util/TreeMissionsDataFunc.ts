import { ITreeData } from "@/lib/TreeObjectOptions";
import tarkovDataQuery from "./tarkovDataQuery";

export const treeDataFunc: any = async () => {
  const { tasks } = await tarkovDataQuery();
  const filterTasksByTrader = tasks.reduce((acc: any, mission: any) => {
    const traderName = mission.trader.name;

    if (!acc[traderName]) {
      acc[traderName] = [];
    }

    acc[traderName].push(mission);

    return acc;
  }, {});

  console.log(filterTasksByTrader.Mechanic);

  const treeStructure: ITreeData = {
    taskRequired: "",
    id: "",
    trader: "",
    name: "Traders",
    attributes: {
      level: -1,
      kappaRequired: false,
      objectives: [],
      wikiLink: "",
    },
    children: [
      {
        taskRequired: "",
        id: "",
        trader: "",
        name: "Prapor",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_prapor-removebg-preview_xm87z4.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Prapor[27].id,
            trader: "Prapor",
            name: filterTasksByTrader.Prapor[27].name,
            attributes: {
              level: filterTasksByTrader.Prapor[27].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[27].kappaRequired,
              objectives: filterTasksByTrader.Prapor[27].objectives,
              wikiLink: filterTasksByTrader.Prapor[27].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Prapor[42].id,
                trader: "Prapor",
                name: filterTasksByTrader.Prapor[42].name,
                attributes: {
                  level: filterTasksByTrader.Prapor[42].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Prapor[42].kappaRequired,
                  objectives: filterTasksByTrader.Prapor[42].objectives,
                  wikiLink: filterTasksByTrader.Prapor[42].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Prapor[43].id,
                    trader: "Prapor",
                    name: filterTasksByTrader.Prapor[43].name,
                    attributes: {
                      level: filterTasksByTrader.Prapor[43].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Prapor[43].kappaRequired,
                      objectives: filterTasksByTrader.Prapor[43].objectives,
                      wikiLink: filterTasksByTrader.Prapor[43].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Prapor[44].id,
                        trader: "Prapor",
                        name: filterTasksByTrader.Prapor[44].name,
                        attributes: {
                          level: filterTasksByTrader.Prapor[44].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Prapor[44].kappaRequired,
                          objectives: filterTasksByTrader.Prapor[44].objectives,
                          wikiLink: filterTasksByTrader.Prapor[44].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Prapor[45].id,
                            trader: "Prapor",
                            name: filterTasksByTrader.Prapor[45].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Prapor[45].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Prapor[45].kappaRequired,
                              objectives:
                                filterTasksByTrader.Prapor[45].objectives,
                              wikiLink: filterTasksByTrader.Prapor[45].wikiLink,
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
            taskRequired:
              "To unlock this quest, you also need to complete, Spa Tour - Part 7 from Peacekeeper",
            id: filterTasksByTrader.Prapor[28].id,
            trader: "Prapor",
            name: filterTasksByTrader.Prapor[28].name,
            attributes: {
              level: filterTasksByTrader.Prapor[28].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[28].kappaRequired,
              objectives: filterTasksByTrader.Prapor[28].objectives,
              wikiLink: filterTasksByTrader.Prapor[28].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Chemical - Part 4 from Skier or Out of Curiosity from Therapist",
            trader: "Prapor",
            id: filterTasksByTrader.Prapor[13].id,
            name: filterTasksByTrader.Prapor[13].name,
            attributes: {
              level: filterTasksByTrader.Prapor[13].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[13].kappaRequired,
              objectives: filterTasksByTrader.Prapor[13].objectives,
              wikiLink: filterTasksByTrader.Prapor[13].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Chemical - Part 3 from Skier",
            trader: "Prapor",
            id: filterTasksByTrader.Prapor[14].id,
            name: filterTasksByTrader.Prapor[14].name,
            attributes: {
              level: filterTasksByTrader.Prapor[14].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[14].kappaRequired,
              objectives: filterTasksByTrader.Prapor[14].objectives,
              wikiLink: filterTasksByTrader.Prapor[14].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Chemical - Part 1 from Skier",
            trader: "Prapor",
            id: filterTasksByTrader.Prapor[12].id,
            name: filterTasksByTrader.Prapor[12].name,
            attributes: {
              level: filterTasksByTrader.Prapor[12].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[12].kappaRequired,
              objectives: filterTasksByTrader.Prapor[12].objectives,
              wikiLink: filterTasksByTrader.Prapor[12].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Prapor[39].id,
                trader: "Prapor",
                name: filterTasksByTrader.Prapor[39].name,
                attributes: {
                  level: filterTasksByTrader.Prapor[39].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Prapor[39].kappaRequired,
                  objectives: filterTasksByTrader.Prapor[39].objectives,
                  wikiLink: filterTasksByTrader.Prapor[39].wikiLink,
                },
                children: [],
              },
            ],
          },
          {
            taskRequired: "",
            trader: "Prapor",
            id: filterTasksByTrader.Prapor[0].id,
            name: filterTasksByTrader.Prapor[0].name,
            attributes: {
              level: filterTasksByTrader.Prapor[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Prapor[0].kappaRequired,
              objectives: filterTasksByTrader.Prapor[0].objectives,
              wikiLink: filterTasksByTrader.Prapor[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                trader: "Prapor",
                id: filterTasksByTrader.Prapor[1].id,
                name: filterTasksByTrader.Prapor[1].name,
                attributes: {
                  level: filterTasksByTrader.Prapor[1].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Prapor[1].kappaRequired,
                  objectives: filterTasksByTrader.Prapor[1].objectives,
                  wikiLink: filterTasksByTrader.Prapor[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    trader: "Prapor",
                    id: filterTasksByTrader.Prapor[2].id,
                    name: filterTasksByTrader.Prapor[2].name,
                    attributes: {
                      level: filterTasksByTrader.Prapor[2].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Prapor[2].kappaRequired,
                      objectives: filterTasksByTrader.Prapor[2].objectives,
                      wikiLink: filterTasksByTrader.Prapor[2].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        trader: "Prapor",
                        id: filterTasksByTrader.Prapor[3].id,
                        name: filterTasksByTrader.Prapor[3].name,
                        attributes: {
                          level: filterTasksByTrader.Prapor[3].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Prapor[3].kappaRequired,
                          objectives: filterTasksByTrader.Prapor[3].objectives,
                          wikiLink: filterTasksByTrader.Prapor[3].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            trader: "Prapor",
                            id: filterTasksByTrader.Prapor[4].id,
                            name: filterTasksByTrader.Prapor[4].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Prapor[4].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Prapor[4].kappaRequired,
                              objectives:
                                filterTasksByTrader.Prapor[4].objectives,
                              wikiLink: filterTasksByTrader.Prapor[4].wikiLink,
                            },
                            children: [],
                          },
                          {
                            taskRequired: "",
                            trader: "Prapor",
                            id: filterTasksByTrader.Prapor[6].id,
                            name: filterTasksByTrader.Prapor[6].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Prapor[6].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Prapor[6].kappaRequired,
                              objectives:
                                filterTasksByTrader.Prapor[6].objectives,
                              wikiLink: filterTasksByTrader.Prapor[6].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                trader: "Prapor",
                                id: filterTasksByTrader.Prapor[7].id,
                                name: filterTasksByTrader.Prapor[7].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Prapor[7]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Prapor[7].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Prapor[7].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Prapor[7].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Prapor[8].id,
                                    trader: "Prapor",
                                    name: filterTasksByTrader.Prapor[8].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Prapor[8]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Prapor[8]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Prapor[8]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Prapor[8].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Prapor[9].id,
                                        trader: "Prapor",
                                        name: filterTasksByTrader.Prapor[9]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Prapor[9]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Prapor[9]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Prapor[9]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Prapor[9]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Prapor[11]
                                              .id,
                                            trader: "Prapor",
                                            name: filterTasksByTrader.Prapor[11]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Prapor[11]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Prapor[11]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Prapor[11]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Prapor[11]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Prapor[17].id,
                                                trader: "Prapor",
                                                name: filterTasksByTrader
                                                  .Prapor[17].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Prapor[17]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Prapor[17].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Prapor[17].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Prapor[17].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Prapor[20].id,
                                                    trader: "Prapor",
                                                    name: filterTasksByTrader
                                                      .Prapor[20].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Prapor[20]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Prapor[20]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Prapor[20]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Prapor[20].wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Prapor[36].id,
                                                        trader: "Prapor",
                                                        name: filterTasksByTrader
                                                          .Prapor[36].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Prapor[36]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Prapor[36]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Prapor[36]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Prapor[36]
                                                              .wikiLink,
                                                        },
                                                        children: [
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Prapor[38].id,
                                                            trader: "Prapor",
                                                            name: filterTasksByTrader
                                                              .Prapor[38].name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Prapor[38]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Prapor[38]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Prapor[38]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Prapor[38]
                                                                  .wikiLink,
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
                                            taskRequired: "",
                                            id: filterTasksByTrader.Prapor[15]
                                              .id,
                                            trader: "Prapor",
                                            name: filterTasksByTrader.Prapor[15]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Prapor[15]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Prapor[15]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Prapor[15]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Prapor[15]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Prapor[31].id,
                                                trader: "Prapor",
                                                name: filterTasksByTrader
                                                  .Prapor[31].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Prapor[31]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Prapor[31].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Prapor[31].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Prapor[31].wikiLink,
                                                },
                                                children: [],
                                              },
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Prapor[46].id,
                                                trader: "Prapor",
                                                name: filterTasksByTrader
                                                  .Prapor[46].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Prapor[46]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Prapor[46].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Prapor[46].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Prapor[46].wikiLink,
                                                },
                                                children: [],
                                              },
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Prapor[18].id,
                                                trader: "Prapor",
                                                name: filterTasksByTrader
                                                  .Prapor[18].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Prapor[18]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Prapor[18].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Prapor[18].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Prapor[18].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Prapor[21].id,
                                                    trader: "Prapor",
                                                    name: filterTasksByTrader
                                                      .Prapor[21].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Prapor[21]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Prapor[21]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Prapor[21]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Prapor[21].wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Prapor[26].id,
                                                        trader: "Prapor",
                                                        name: filterTasksByTrader
                                                          .Prapor[26].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Prapor[26]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Prapor[26]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Prapor[26]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Prapor[26]
                                                              .wikiLink,
                                                        },
                                                        children: [
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Prapor[29].id,
                                                            trader: "Prapor",
                                                            name: filterTasksByTrader
                                                              .Prapor[29].name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Prapor[29]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Prapor[29]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Prapor[29]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Prapor[29]
                                                                  .wikiLink,
                                                            },
                                                            children: [
                                                              {
                                                                taskRequired:
                                                                  "",
                                                                id: filterTasksByTrader
                                                                  .Prapor[30]
                                                                  .id,
                                                                trader:
                                                                  "Prapor",
                                                                name: filterTasksByTrader
                                                                  .Prapor[30]
                                                                  .name,
                                                                attributes: {
                                                                  level:
                                                                    filterTasksByTrader
                                                                      .Prapor[30]
                                                                      .minPlayerLevel,
                                                                  kappaRequired:
                                                                    filterTasksByTrader
                                                                      .Prapor[30]
                                                                      .kappaRequired,
                                                                  objectives:
                                                                    filterTasksByTrader
                                                                      .Prapor[30]
                                                                      .objectives,
                                                                  wikiLink:
                                                                    filterTasksByTrader
                                                                      .Prapor[30]
                                                                      .wikiLink,
                                                                },
                                                                children: [
                                                                  {
                                                                    taskRequired:
                                                                      "",
                                                                    id: filterTasksByTrader
                                                                      .Prapor[32]
                                                                      .id,
                                                                    trader:
                                                                      "Prapor",
                                                                    name: filterTasksByTrader
                                                                      .Prapor[32]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Prapor[32]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Prapor[32]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Prapor[32]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Prapor[32]
                                                                            .wikiLink,
                                                                      },
                                                                    children: [
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Prapor[49]
                                                                          .id,
                                                                        trader:
                                                                          "Prapor",
                                                                        name: filterTasksByTrader
                                                                          .Prapor[49]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Prapor[49]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Prapor[49]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Prapor[49]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Prapor[49]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [],
                                                                      },

                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Prapor[47]
                                                                          .id,
                                                                        trader:
                                                                          "Prapor",
                                                                        name: filterTasksByTrader
                                                                          .Prapor[47]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Prapor[47]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Prapor[47]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Prapor[47]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Prapor[47]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Prapor[48]
                                                                          .id,
                                                                        trader:
                                                                          "Prapor",
                                                                        name: filterTasksByTrader
                                                                          .Prapor[48]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Prapor[48]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Prapor[48]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Prapor[48]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Prapor[48]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Prapor[33]
                                                                          .id,
                                                                        trader:
                                                                          "Prapor",
                                                                        name: filterTasksByTrader
                                                                          .Prapor[33]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Prapor[33]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Prapor[33]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Prapor[33]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Prapor[33]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Prapor[34]
                                                                                .id,
                                                                              trader:
                                                                                "Prapor",
                                                                              name: filterTasksByTrader
                                                                                .Prapor[34]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Prapor[34]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Prapor[34]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Prapor[34]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Prapor[34]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    taskRequired:
                                                                                      "",
                                                                                    id: filterTasksByTrader
                                                                                      .Prapor[35]
                                                                                      .id,
                                                                                    trader:
                                                                                      "Prapor",
                                                                                    name: filterTasksByTrader
                                                                                      .Prapor[35]
                                                                                      .name,
                                                                                    attributes:
                                                                                      {
                                                                                        level:
                                                                                          filterTasksByTrader
                                                                                            .Prapor[35]
                                                                                            .minPlayerLevel,
                                                                                        kappaRequired:
                                                                                          filterTasksByTrader
                                                                                            .Prapor[35]
                                                                                            .kappaRequired,
                                                                                        objectives:
                                                                                          filterTasksByTrader
                                                                                            .Prapor[35]
                                                                                            .objectives,
                                                                                        wikiLink:
                                                                                          filterTasksByTrader
                                                                                            .Prapor[35]
                                                                                            .wikiLink,
                                                                                      },
                                                                                    children:
                                                                                      [],
                                                                                  },
                                                                                ],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    taskRequired:
                                                                      "",
                                                                    id: filterTasksByTrader
                                                                      .Prapor[41]
                                                                      .id,
                                                                    trader:
                                                                      "Prapor",
                                                                    name: filterTasksByTrader
                                                                      .Prapor[41]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Prapor[41]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Prapor[41]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Prapor[41]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Prapor[41]
                                                                            .wikiLink,
                                                                      },
                                                                    children:
                                                                      [],
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                taskRequired:
                                                                  "",
                                                                id: filterTasksByTrader
                                                                  .Prapor[37]
                                                                  .id,
                                                                trader:
                                                                  "Prapor",
                                                                name: filterTasksByTrader
                                                                  .Prapor[37]
                                                                  .name,
                                                                attributes: {
                                                                  level:
                                                                    filterTasksByTrader
                                                                      .Prapor[37]
                                                                      .minPlayerLevel,
                                                                  kappaRequired:
                                                                    filterTasksByTrader
                                                                      .Prapor[37]
                                                                      .kappaRequired,
                                                                  objectives:
                                                                    filterTasksByTrader
                                                                      .Prapor[37]
                                                                      .objectives,
                                                                  wikiLink:
                                                                    filterTasksByTrader
                                                                      .Prapor[37]
                                                                      .wikiLink,
                                                                },
                                                                children: [
                                                                  {
                                                                    taskRequired:
                                                                      "To unlock this quest, you also need to complete, Kings of the Rooftops from Prapor and The Punisher - Part 6 from Prapor",
                                                                    trader:
                                                                      "Prapor",
                                                                    id: filterTasksByTrader
                                                                      .Prapor[40]
                                                                      .id,
                                                                    name: filterTasksByTrader
                                                                      .Prapor[40]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Prapor[40]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Prapor[40]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Prapor[40]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Prapor[40]
                                                                            .wikiLink,
                                                                      },
                                                                    children:
                                                                      [],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Prapor[23].id,
                                                        trader: "Prapor",
                                                        name: filterTasksByTrader
                                                          .Prapor[23].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Prapor[23]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Prapor[23]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Prapor[23]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Prapor[23]
                                                              .wikiLink,
                                                        },
                                                        children: [
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Prapor[24].id,
                                                            trader: "Prapor",
                                                            name: filterTasksByTrader
                                                              .Prapor[24].name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Prapor[24]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Prapor[24]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Prapor[24]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Prapor[24]
                                                                  .wikiLink,
                                                            },
                                                            children: [],
                                                          },
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Prapor[22].id,
                                                            trader: "Prapor",
                                                            name: filterTasksByTrader
                                                              .Prapor[22].name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Prapor[22]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Prapor[22]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Prapor[22]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Prapor[22]
                                                                  .wikiLink,
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
                                        ],
                                      },
                                    ],
                                  },

                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Prapor[10].id,
                                    trader: "Prapor",
                                    name: filterTasksByTrader.Prapor[10].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Prapor[10]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Prapor[10]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Prapor[10]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Prapor[10].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Prapor[16].id,
                                        trader: "Prapor",
                                        name: filterTasksByTrader.Prapor[16]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Prapor[16]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Prapor[16]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Prapor[16]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Prapor[16]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Prapor[19]
                                              .id,
                                            trader: "Prapor",
                                            name: filterTasksByTrader.Prapor[19]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Prapor[19]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Prapor[19]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Prapor[19]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Prapor[19]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Prapor[25].id,
                                                trader: "Prapor",
                                                name: filterTasksByTrader
                                                  .Prapor[25].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Prapor[25]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Prapor[25].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Prapor[25].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Prapor[25].wikiLink,
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
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Prapor[5].id,
                    trader: "Prapor",
                    name: filterTasksByTrader.Prapor[5].name,
                    attributes: {
                      level: filterTasksByTrader.Prapor[5].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Prapor[5].kappaRequired,
                      objectives: filterTasksByTrader.Prapor[5].objectives,
                      wikiLink: filterTasksByTrader.Prapor[5].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        taskRequired: "",
        id: "",
        trader: "Therapist",
        name: "Therapist",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705512797/home-preview_therapist-removebg-preview_tdf0sw.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Therapist[36].id,
            trader: "Therapist",
            name: filterTasksByTrader.Therapist[36].name,
            attributes: {
              level: filterTasksByTrader.Therapist[36].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Therapist[36].kappaRequired,
              objectives: filterTasksByTrader.Therapist[36].objectives,
              wikiLink: filterTasksByTrader.Therapist[36].wikiLink,
            },
            children: [],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Therapist[8].id,
            trader: "Therapist",
            name: filterTasksByTrader.Therapist[8].name,
            attributes: {
              level: filterTasksByTrader.Therapist[8].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Therapist[8].kappaRequired,
              objectives: filterTasksByTrader.Therapist[8].objectives,
              wikiLink: filterTasksByTrader.Therapist[8].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Chemical - Part 4 from Skier or Big Customer from Prapor",
            id: filterTasksByTrader.Therapist[12].id,
            trader: "Therapist",
            name: filterTasksByTrader.Therapist[12].name,
            attributes: {
              level: filterTasksByTrader.Therapist[12].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Therapist[12].kappaRequired,
              objectives: filterTasksByTrader.Therapist[12].objectives,
              wikiLink: filterTasksByTrader.Therapist[12].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Chemical - Part 3 from Skier",
            id: filterTasksByTrader.Therapist[11].id,
            trader: "Therapist",
            name: filterTasksByTrader.Therapist[11].name,
            attributes: {
              level: filterTasksByTrader.Therapist[11].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Therapist[11].kappaRequired,
              objectives: filterTasksByTrader.Therapist[11].objectives,
              wikiLink: filterTasksByTrader.Therapist[11].wikiLink,
            },
            children: [],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Therapist[0].id,
            trader: "Therapist",
            name: filterTasksByTrader.Therapist[0].name,
            attributes: {
              level: filterTasksByTrader.Therapist[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Therapist[0].kappaRequired,
              objectives: filterTasksByTrader.Therapist[0].objectives,
              wikiLink: filterTasksByTrader.Therapist[0].wikiLink,
            },

            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Therapist[1].id,
                trader: "Therapist",
                name: filterTasksByTrader.Therapist[1].name,
                attributes: {
                  level: filterTasksByTrader.Therapist[1].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Therapist[1].kappaRequired,
                  objectives: filterTasksByTrader.Therapist[1].objectives,
                  wikiLink: filterTasksByTrader.Therapist[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Therapist[2].id,
                    trader: "Therapist",
                    name: filterTasksByTrader.Therapist[2].name,
                    attributes: {
                      level: filterTasksByTrader.Therapist[2].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Therapist[2].kappaRequired,
                      objectives: filterTasksByTrader.Therapist[2].objectives,
                      wikiLink: filterTasksByTrader.Therapist[2].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Therapist[5].id,
                        trader: "Therapist",
                        name: filterTasksByTrader.Therapist[5].name,
                        attributes: {
                          level:
                            filterTasksByTrader.Therapist[5].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Therapist[5].kappaRequired,
                          objectives:
                            filterTasksByTrader.Therapist[5].objectives,
                          wikiLink: filterTasksByTrader.Therapist[5].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Therapist[6].id,
                            trader: "Therapist",
                            name: filterTasksByTrader.Therapist[6].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Therapist[6].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Therapist[6].kappaRequired,
                              objectives:
                                filterTasksByTrader.Therapist[6].objectives,
                              wikiLink:
                                filterTasksByTrader.Therapist[6].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Therapist[7].id,
                                trader: "Therapist",
                                name: filterTasksByTrader.Therapist[7].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Therapist[7]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Therapist[7]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Therapist[7].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Therapist[7].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[9].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[9].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[9]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[9]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[9]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[9]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Therapist[28]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[28]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[28]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[28]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[28]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[28]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Therapist[29].id,
                                            trader: "Therapist",
                                            name: filterTasksByTrader
                                              .Therapist[29].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Therapist[29].minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Therapist[29].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Therapist[29].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Therapist[29].wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired:
                                                  "To unlock this quest, you also need to complete, Rigged Game from Skier and Chemistry Closet from Mechanic",
                                                id: filterTasksByTrader
                                                  .Therapist[30].id,
                                                trader: "Therapist",
                                                name: filterTasksByTrader
                                                  .Therapist[30].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Therapist[30]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Therapist[30]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Therapist[30].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Therapist[30].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[10].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[10]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[10]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[10]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[10]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[10]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },

                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[13].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[13]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[13]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[13]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[13]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[13]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Therapist[14]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[14]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[14]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[14]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[14]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[14]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Therapist[15].id,
                                            trader: "Therapist",
                                            name: filterTasksByTrader
                                              .Therapist[15].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Therapist[15].minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Therapist[15].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Therapist[15].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Therapist[15].wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Therapist[19]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[19]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[19]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[19]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[19]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[19]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired:
                                              "To unlock this quest, you also need to complete, Cease Fire! from Jaeger",
                                            id: filterTasksByTrader
                                              .Therapist[21].id,
                                            trader: "Therapist",
                                            name: filterTasksByTrader
                                              .Therapist[21].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Therapist[21].minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Therapist[21].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Therapist[21].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Therapist[21].wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[16].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[16]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[16]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[16]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[16]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[16]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired:
                                          "To unlock this quest, you also need to complete, Kind of Sabotage from Skier or Supply Plans from Therapist",
                                        id: filterTasksByTrader.Therapist[18]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[18]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[18]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[18]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[18]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[18]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[17].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[17]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[17]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[17]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[17]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[17]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Therapist[20]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[20]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[20]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[20]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[20]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[20]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Therapist[22].id,
                                    trader: "Therapist",
                                    name: filterTasksByTrader.Therapist[22]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Therapist[22]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Therapist[22]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Therapist[22]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Therapist[22]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Therapist[24]
                                          .id,
                                        trader: "Therapist",
                                        name: filterTasksByTrader.Therapist[24]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Therapist[24]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Therapist[24]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Therapist[24]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Therapist[24]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Therapist[31].id,
                                            trader: "Therapist",
                                            name: filterTasksByTrader
                                              .Therapist[31].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Therapist[31].minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Therapist[31].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Therapist[31].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Therapist[31].wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Therapist[32].id,
                                                trader: "Therapist",
                                                name: filterTasksByTrader
                                                  .Therapist[32].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Therapist[32]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Therapist[32]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Therapist[32].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Therapist[32].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Therapist[25].id,
                                            trader: "Therapist",
                                            name: filterTasksByTrader
                                              .Therapist[25].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Therapist[25].minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Therapist[25].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Therapist[25].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Therapist[25].wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Therapist[23].id,
                                                trader: "Therapist",
                                                name: filterTasksByTrader
                                                  .Therapist[23].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Therapist[23]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Therapist[23]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Therapist[23].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Therapist[23].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Therapist[33].id,
                                                    trader: "Therapist",
                                                    name: filterTasksByTrader
                                                      .Therapist[33].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Therapist[33]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Therapist[33]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Therapist[33]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Therapist[33]
                                                          .wikiLink,
                                                    },
                                                    children: [],
                                                  },
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Therapist[34].id,
                                                    trader: "Therapist",
                                                    name: filterTasksByTrader
                                                      .Therapist[34].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Therapist[34]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Therapist[34]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Therapist[34]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Therapist[34]
                                                          .wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired:
                                                          "To unlock this quest, you also need to complete, Health Care Privacy - Part 5 from Therapist",
                                                        id: filterTasksByTrader
                                                          .Therapist[35].id,
                                                        trader: "Therapist",
                                                        name: filterTasksByTrader
                                                          .Therapist[35].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Therapist[35]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Therapist[35]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Therapist[35]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Therapist[35]
                                                              .wikiLink,
                                                        },
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Therapist[27].id,
                                                    trader: "Therapist",
                                                    name: filterTasksByTrader
                                                      .Therapist[27].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Therapist[27]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Therapist[27]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Therapist[27]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Therapist[27]
                                                          .wikiLink,
                                                    },
                                                    children: [],
                                                  },
                                                ],
                                              },
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Therapist[26].id,
                                                trader: "Therapist",
                                                name: filterTasksByTrader
                                                  .Therapist[26].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Therapist[26]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Therapist[26]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Therapist[26].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Therapist[26].wikiLink,
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
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Therapist[3].id,
                    trader: "Therapist",
                    name: filterTasksByTrader.Therapist[3].name,
                    attributes: {
                      level: filterTasksByTrader.Therapist[3].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Therapist[3].kappaRequired,
                      objectives: filterTasksByTrader.Therapist[3].objectives,
                      wikiLink: filterTasksByTrader.Therapist[3].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Therapist[4].id,
                        trader: "Therapist",
                        name: filterTasksByTrader.Therapist[4].name,
                        attributes: {
                          level:
                            filterTasksByTrader.Therapist[4].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Therapist[4].kappaRequired,
                          objectives:
                            filterTasksByTrader.Therapist[4].objectives,
                          wikiLink: filterTasksByTrader.Therapist[4].wikiLink,
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
        taskRequired: "",
        id: "",
        trader: "Skier",
        name: "Skier",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_skier-removebg-preview_r4ovom.png",
        },
        children: [
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Out of Curiosity from Therapist or Big Customer from Prapor",
            id: filterTasksByTrader.Skier[12].id,
            trader: "Skier",
            name: filterTasksByTrader.Skier[12].name,
            attributes: {
              level: filterTasksByTrader.Skier[12].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Skier[12].kappaRequired,
              objectives: filterTasksByTrader.Skier[12].objectives,
              wikiLink: filterTasksByTrader.Skier[12].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Anesthesia from Prapor",
            id: filterTasksByTrader.Skier[17].id,
            trader: "Skier",
            name: filterTasksByTrader.Skier[17].name,
            attributes: {
              level: filterTasksByTrader.Skier[17].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Skier[17].kappaRequired,
              objectives: filterTasksByTrader.Skier[17].objectives,
              wikiLink: filterTasksByTrader.Skier[17].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Skier[35].id,
                trader: "Skier",
                name: filterTasksByTrader.Skier[35].name,
                attributes: {
                  level: filterTasksByTrader.Skier[35].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Skier[35].kappaRequired,
                  objectives: filterTasksByTrader.Skier[35].objectives,
                  wikiLink: filterTasksByTrader.Skier[35].wikiLink,
                },
                children: [],
              },
            ],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Pharmacist from Therapist",
            id: filterTasksByTrader.Skier[13].id,
            trader: "Skier",
            name: filterTasksByTrader.Skier[13].name,
            attributes: {
              level: filterTasksByTrader.Skier[13].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Skier[13].kappaRequired,
              objectives: filterTasksByTrader.Skier[13].objectives,
              wikiLink: filterTasksByTrader.Skier[13].wikiLink,
            },
            children: [],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Skier[0].id,
            trader: "Skier",
            name: filterTasksByTrader.Skier[0].name,
            attributes: {
              level: filterTasksByTrader.Skier[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Skier[0].kappaRequired,
              objectives: filterTasksByTrader.Skier[0].objectives,
              wikiLink: filterTasksByTrader.Skier[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Skier[1].id,
                trader: "Skier",
                name: filterTasksByTrader.Skier[1].name,
                attributes: {
                  level: filterTasksByTrader.Skier[1].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Skier[1].kappaRequired,
                  objectives: filterTasksByTrader.Skier[1].objectives,
                  wikiLink: filterTasksByTrader.Skier[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Skier[2].id,
                    trader: "Skier",
                    name: filterTasksByTrader.Skier[2].name,
                    attributes: {
                      level: filterTasksByTrader.Skier[2].minPlayerLevel,
                      kappaRequired: filterTasksByTrader.Skier[2].kappaRequired,
                      objectives: filterTasksByTrader.Skier[2].objectives,
                      wikiLink: filterTasksByTrader.Skier[2].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Skier[4].id,
                        trader: "Skier",
                        name: filterTasksByTrader.Skier[4].name,
                        attributes: {
                          level: filterTasksByTrader.Skier[4].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Skier[4].kappaRequired,
                          objectives: filterTasksByTrader.Skier[4].objectives,
                          wikiLink: filterTasksByTrader.Skier[4].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Skier[5].id,
                            trader: "Skier",
                            name: filterTasksByTrader.Skier[5].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Skier[5].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Skier[5].kappaRequired,
                              objectives:
                                filterTasksByTrader.Skier[5].objectives,
                              wikiLink: filterTasksByTrader.Skier[5].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Skier[8].id,
                                trader: "Skier",
                                name: filterTasksByTrader.Skier[8].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Skier[8].minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Skier[8].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Skier[8].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Skier[8].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Skier[9].id,
                                    trader: "Skier",
                                    name: filterTasksByTrader.Skier[9].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Skier[9]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Skier[9]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Skier[9].objectives,
                                      wikiLink:
                                        filterTasksByTrader.Skier[9].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Skier[10].id,
                                        trader: "Skier",
                                        name: filterTasksByTrader.Skier[10]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Skier[10]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Skier[10]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Skier[10]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Skier[10]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Skier[11]
                                              .id,
                                            trader: "Skier",
                                            name: filterTasksByTrader.Skier[11]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Skier[11]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Skier[11]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Skier[11]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Skier[11]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired:
                                                  "To unlock this quest, you also need to complete, Big Customer from Prapor or Out of Curiosity from Therapist",
                                                id: filterTasksByTrader
                                                  .Skier[14].id,
                                                trader: "Skier",

                                                name: filterTasksByTrader
                                                  .Skier[14].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Skier[14].minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Skier[14].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Skier[14].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Skier[14].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Skier[18]
                                              .id,
                                            trader: "Skier",
                                            name: filterTasksByTrader.Skier[18]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Skier[18]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Skier[18]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Skier[18]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Skier[18]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Skier[19].id,
                                                trader: "Skier",
                                                name: filterTasksByTrader
                                                  .Skier[19].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Skier[19].minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Skier[19].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Skier[19].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Skier[19].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Skier[20].id,
                                                    trader: "Skier",
                                                    name: filterTasksByTrader
                                                      .Skier[20].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Skier[20]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Skier[20]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Skier[20].objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Skier[20].wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Skier[21].id,
                                                        trader: "Skier",
                                                        name: filterTasksByTrader
                                                          .Skier[21].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Skier[21]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Skier[21]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Skier[21]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Skier[21]
                                                              .wikiLink,
                                                        },
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Skier[27].id,
                                                    trader: "Skier",
                                                    name: filterTasksByTrader
                                                      .Skier[27].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Skier[27]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Skier[27]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Skier[27].objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Skier[27].wikiLink,
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
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Skier[3].id,
                    trader: "Skier",
                    name: filterTasksByTrader.Skier[3].name,
                    attributes: {
                      level: filterTasksByTrader.Skier[3].minPlayerLevel,
                      kappaRequired: filterTasksByTrader.Skier[3].kappaRequired,
                      objectives: filterTasksByTrader.Skier[3].objectives,
                      wikiLink: filterTasksByTrader.Skier[3].wikiLink,
                    },
                    children: [],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Skier[6].id,
                    trader: "Skier",
                    name: filterTasksByTrader.Skier[6].name,
                    attributes: {
                      level: filterTasksByTrader.Skier[6].minPlayerLevel,
                      kappaRequired: filterTasksByTrader.Skier[6].kappaRequired,
                      objectives: filterTasksByTrader.Skier[6].objectives,
                      wikiLink: filterTasksByTrader.Skier[6].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Skier[7].id,
                        trader: "Skier",
                        name: filterTasksByTrader.Skier[7].name,
                        attributes: {
                          level: filterTasksByTrader.Skier[7].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Skier[7].kappaRequired,
                          objectives: filterTasksByTrader.Skier[7].objectives,
                          wikiLink: filterTasksByTrader.Skier[7].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Skier[16].id,
                            trader: "Skier",
                            name: filterTasksByTrader.Skier[16].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Skier[16].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Skier[16].kappaRequired,
                              objectives:
                                filterTasksByTrader.Skier[16].objectives,
                              wikiLink: filterTasksByTrader.Skier[16].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Skier[28].id,
                                trader: "Skier",
                                name: filterTasksByTrader.Skier[28].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Skier[28]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Skier[28].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Skier[28].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Skier[28].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired:
                                      "To unlock this quest, you also need to complete, Getting Acquainted from Mechanic",
                                    id: filterTasksByTrader.Skier[34].id,
                                    trader: "Skier",
                                    name: filterTasksByTrader.Skier[34].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Skier[34]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Skier[34]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Skier[34]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Skier[34].wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Skier[25].id,
                            trader: "Skier",
                            name: filterTasksByTrader.Skier[25].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Skier[25].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Skier[25].kappaRequired,
                              objectives:
                                filterTasksByTrader.Skier[25].objectives,
                              wikiLink: filterTasksByTrader.Skier[25].wikiLink,
                            },
                            children: [],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Skier[15].id,
                            trader: "Skier",
                            name: filterTasksByTrader.Skier[15].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Skier[15].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Skier[15].kappaRequired,
                              objectives:
                                filterTasksByTrader.Skier[15].objectives,
                              wikiLink: filterTasksByTrader.Skier[15].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Skier[22].id,
                                trader: "Skier",
                                name: filterTasksByTrader.Skier[22].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Skier[22]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Skier[22].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Skier[22].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Skier[22].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Skier[23].id,
                                    trader: "Skier",
                                    name: filterTasksByTrader.Skier[23].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Skier[23]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Skier[23]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Skier[23]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Skier[23].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Skier[33].id,
                                        trader: "Skier",
                                        name: filterTasksByTrader.Skier[33]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Skier[33]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Skier[33]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Skier[33]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Skier[33]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Skier[30].id,
                                        trader: "Skier",
                                        name: filterTasksByTrader.Skier[30]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Skier[30]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Skier[30]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Skier[30]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Skier[30]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Skier[31]
                                              .id,
                                            trader: "Skier",
                                            name: filterTasksByTrader.Skier[31]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Skier[31]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Skier[31]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Skier[31]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Skier[31]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Skier[32].id,
                                                trader: "Skier",
                                                name: filterTasksByTrader
                                                  .Skier[32].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Skier[32].minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Skier[32].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Skier[32].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Skier[32].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Skier[26].id,
                                        trader: "Skier",
                                        name: filterTasksByTrader.Skier[26]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Skier[26]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Skier[26]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Skier[26]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Skier[26]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Skier[29]
                                              .id,
                                            trader: "Skier",
                                            name: filterTasksByTrader.Skier[29]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Skier[29]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Skier[29]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Skier[29]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Skier[29]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Skier[24].id,
                                        trader: "Skier",
                                        name: filterTasksByTrader.Skier[24]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Skier[24]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Skier[24]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Skier[24]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Skier[24]
                                              .wikiLink,
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
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        taskRequired: "",
        id: "",
        trader: "Peacekeeper",
        name: "Peacekeeper",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513116/home-preview_peacemaker-removebg-preview_ozg6qb.png",
        },
        children: [
          {
            taskRequired:
              "To unlock this quest, you also need to complete, The Huntsman Path - Forest Cleaning from Jaeger",
            id: filterTasksByTrader.Peacekeeper[41].id,
            trader: "Peacekeeper",
            name: filterTasksByTrader.Peacekeeper[41].name,
            attributes: {
              level: filterTasksByTrader.Peacekeeper[41].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Peacekeeper[41].kappaRequired,
              objectives: filterTasksByTrader.Peacekeeper[41].objectives,
              wikiLink: filterTasksByTrader.Peacekeeper[41].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Peacekeeper[42].id,
                trader: "Peacekeeper",
                name: filterTasksByTrader.Peacekeeper[42].name,
                attributes: {
                  level: filterTasksByTrader.Peacekeeper[42].minPlayerLevel,
                  kappaRequired:
                    filterTasksByTrader.Peacekeeper[42].kappaRequired,
                  objectives: filterTasksByTrader.Peacekeeper[42].objectives,
                  wikiLink: filterTasksByTrader.Peacekeeper[42].wikiLink,
                },
                children: [],
              },
            ],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Lend-Lease - Part 1 from Skier",
            id: filterTasksByTrader.Peacekeeper[36].id,
            trader: "Peacekeeper",
            name: filterTasksByTrader.Peacekeeper[36].name,
            attributes: {
              level: filterTasksByTrader.Peacekeeper[36].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Peacekeeper[36].kappaRequired,
              objectives: filterTasksByTrader.Peacekeeper[36].objectives,
              wikiLink: filterTasksByTrader.Peacekeeper[36].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Peacekeeper[37].id,
                trader: "Peacekeeper",
                name: filterTasksByTrader.Peacekeeper[37].name,
                attributes: {
                  level: filterTasksByTrader.Peacekeeper[37].minPlayerLevel,
                  kappaRequired:
                    filterTasksByTrader.Peacekeeper[37].kappaRequired,
                  objectives: filterTasksByTrader.Peacekeeper[37].objectives,
                  wikiLink: filterTasksByTrader.Peacekeeper[37].wikiLink,
                },
                children: [],
              },
            ],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Friend From the West - Part 2 from Skier",
            id: filterTasksByTrader.Peacekeeper[0].id,
            trader: "Peacekeeper",
            name: filterTasksByTrader.Peacekeeper[0].name,
            attributes: {
              level: filterTasksByTrader.Peacekeeper[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Peacekeeper[0].kappaRequired,
              objectives: filterTasksByTrader.Peacekeeper[0].objectives,
              wikiLink: filterTasksByTrader.Peacekeeper[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Peacekeeper[1].id,
                trader: "Peacekeeper",
                name: filterTasksByTrader.Peacekeeper[1].name,
                attributes: {
                  level: filterTasksByTrader.Peacekeeper[1].minPlayerLevel,
                  kappaRequired:
                    filterTasksByTrader.Peacekeeper[1].kappaRequired,
                  objectives: filterTasksByTrader.Peacekeeper[1].objectives,
                  wikiLink: filterTasksByTrader.Peacekeeper[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Peacekeeper[2].id,
                    trader: "Peacekeeper",
                    name: filterTasksByTrader.Peacekeeper[2].name,
                    attributes: {
                      level: filterTasksByTrader.Peacekeeper[2].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Peacekeeper[2].kappaRequired,
                      objectives: filterTasksByTrader.Peacekeeper[2].objectives,
                      wikiLink: filterTasksByTrader.Peacekeeper[2].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Peacekeeper[3].id,
                        trader: "Peacekeeper",
                        name: filterTasksByTrader.Peacekeeper[3].name,
                        attributes: {
                          level:
                            filterTasksByTrader.Peacekeeper[3].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Peacekeeper[3].kappaRequired,
                          objectives:
                            filterTasksByTrader.Peacekeeper[3].objectives,
                          wikiLink: filterTasksByTrader.Peacekeeper[3].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Peacekeeper[4].id,
                            trader: "Peacekeeper",
                            name: filterTasksByTrader.Peacekeeper[4].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Peacekeeper[4]
                                  .minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Peacekeeper[4]
                                  .kappaRequired,
                              objectives:
                                filterTasksByTrader.Peacekeeper[4].objectives,
                              wikiLink:
                                filterTasksByTrader.Peacekeeper[4].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Peacekeeper[6].id,
                                trader: "Peacekeeper",
                                name: filterTasksByTrader.Peacekeeper[6].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Peacekeeper[6]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Peacekeeper[6]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Peacekeeper[6]
                                      .objectives,
                                  wikiLink:
                                    filterTasksByTrader.Peacekeeper[6].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[29].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[29]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[29]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[29]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[29]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[29]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Peacekeeper[5].id,
                                trader: "Peacekeeper",
                                name: filterTasksByTrader.Peacekeeper[5].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Peacekeeper[5]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Peacekeeper[5]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Peacekeeper[5]
                                      .objectives,
                                  wikiLink:
                                    filterTasksByTrader.Peacekeeper[5].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[9].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[9]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[9]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[9]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[9]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[9]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Peacekeeper[8]
                                          .id,
                                        trader: "Peacekeeper",
                                        name: filterTasksByTrader.Peacekeeper[8]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Peacekeeper[8]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Peacekeeper[8]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Peacekeeper[8]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Peacekeeper[8]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Peacekeeper[11].id,
                                            trader: "Peacekeeper",
                                            name: filterTasksByTrader
                                              .Peacekeeper[11].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Peacekeeper[11]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Peacekeeper[11]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Peacekeeper[11].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Peacekeeper[11].wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Peacekeeper[15].id,
                                                trader: "Peacekeeper",
                                                name: filterTasksByTrader
                                                  .Peacekeeper[15].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Peacekeeper[15]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Peacekeeper[15]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Peacekeeper[15]
                                                      .objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Peacekeeper[15].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Peacekeeper[13].id,
                                                    trader: "Peacekeeper",
                                                    name: filterTasksByTrader
                                                      .Peacekeeper[13].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Peacekeeper[13]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Peacekeeper[13]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Peacekeeper[13]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Peacekeeper[13]
                                                          .wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Peacekeeper[14].id,
                                                        trader: "Peacekeeper",
                                                        name: filterTasksByTrader
                                                          .Peacekeeper[14].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Peacekeeper[14]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Peacekeeper[14]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Peacekeeper[14]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Peacekeeper[14]
                                                              .wikiLink,
                                                        },
                                                        children: [
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Peacekeeper[18]
                                                              .id,
                                                            trader:
                                                              "Peacekeeper",
                                                            name: filterTasksByTrader
                                                              .Peacekeeper[18]
                                                              .name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[18]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[18]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[18]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[18]
                                                                  .wikiLink,
                                                            },
                                                            children: [
                                                              {
                                                                taskRequired:
                                                                  "",
                                                                id: filterTasksByTrader
                                                                  .Peacekeeper[20]
                                                                  .id,
                                                                trader:
                                                                  "Peacekeeper",
                                                                name: filterTasksByTrader
                                                                  .Peacekeeper[20]
                                                                  .name,
                                                                attributes: {
                                                                  level:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[20]
                                                                      .minPlayerLevel,
                                                                  kappaRequired:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[20]
                                                                      .kappaRequired,
                                                                  objectives:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[20]
                                                                      .objectives,
                                                                  wikiLink:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[20]
                                                                      .wikiLink,
                                                                },
                                                                children: [
                                                                  {
                                                                    taskRequired:
                                                                      "",
                                                                    id: filterTasksByTrader
                                                                      .Peacekeeper[19]
                                                                      .id,
                                                                    trader:
                                                                      "Peacekeeper",
                                                                    name: filterTasksByTrader
                                                                      .Peacekeeper[19]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[19]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[19]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[19]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[19]
                                                                            .wikiLink,
                                                                      },
                                                                    children: [
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Peacekeeper[23]
                                                                          .id,
                                                                        trader:
                                                                          "Peacekeeper",
                                                                        name: filterTasksByTrader
                                                                          .Peacekeeper[23]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[23]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[23]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[23]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[23]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Peacekeeper[24]
                                                                                .id,
                                                                              trader:
                                                                                "Peacekeeper",
                                                                              name: filterTasksByTrader
                                                                                .Peacekeeper[24]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[24]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[24]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[24]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[24]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [],
                                                                            },
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Peacekeeper[21]
                                                                                .id,
                                                                              trader:
                                                                                "Peacekeeper",
                                                                              name: filterTasksByTrader
                                                                                .Peacekeeper[21]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[21]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[21]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[21]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[21]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    taskRequired:
                                                                                      "",
                                                                                    id: filterTasksByTrader
                                                                                      .Peacekeeper[26]
                                                                                      .id,
                                                                                    trader:
                                                                                      "Peacekeeper",
                                                                                    name: filterTasksByTrader
                                                                                      .Peacekeeper[26]
                                                                                      .name,
                                                                                    attributes:
                                                                                      {
                                                                                        level:
                                                                                          filterTasksByTrader
                                                                                            .Peacekeeper[26]
                                                                                            .minPlayerLevel,
                                                                                        kappaRequired:
                                                                                          filterTasksByTrader
                                                                                            .Peacekeeper[26]
                                                                                            .kappaRequired,
                                                                                        objectives:
                                                                                          filterTasksByTrader
                                                                                            .Peacekeeper[26]
                                                                                            .objectives,
                                                                                        wikiLink:
                                                                                          filterTasksByTrader
                                                                                            .Peacekeeper[26]
                                                                                            .wikiLink,
                                                                                      },
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          taskRequired:
                                                                                            "",
                                                                                          id: filterTasksByTrader
                                                                                            .Peacekeeper[39]
                                                                                            .id,
                                                                                          trader:
                                                                                            "Peacekeeper",
                                                                                          name: filterTasksByTrader
                                                                                            .Peacekeeper[39]
                                                                                            .name,
                                                                                          attributes:
                                                                                            {
                                                                                              level:
                                                                                                filterTasksByTrader
                                                                                                  .Peacekeeper[39]
                                                                                                  .minPlayerLevel,
                                                                                              kappaRequired:
                                                                                                filterTasksByTrader
                                                                                                  .Peacekeeper[39]
                                                                                                  .kappaRequired,
                                                                                              objectives:
                                                                                                filterTasksByTrader
                                                                                                  .Peacekeeper[39]
                                                                                                  .objectives,
                                                                                              wikiLink:
                                                                                                filterTasksByTrader
                                                                                                  .Peacekeeper[39]
                                                                                                  .wikiLink,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                taskRequired:
                                                                                                  "",
                                                                                                id: filterTasksByTrader
                                                                                                  .Peacekeeper[40]
                                                                                                  .id,
                                                                                                trader:
                                                                                                  "Peacekeeper",
                                                                                                name: filterTasksByTrader
                                                                                                  .Peacekeeper[40]
                                                                                                  .name,
                                                                                                attributes:
                                                                                                  {
                                                                                                    level:
                                                                                                      filterTasksByTrader
                                                                                                        .Peacekeeper[40]
                                                                                                        .minPlayerLevel,
                                                                                                    kappaRequired:
                                                                                                      filterTasksByTrader
                                                                                                        .Peacekeeper[40]
                                                                                                        .kappaRequired,
                                                                                                    objectives:
                                                                                                      filterTasksByTrader
                                                                                                        .Peacekeeper[40]
                                                                                                        .objectives,
                                                                                                    wikiLink:
                                                                                                      filterTasksByTrader
                                                                                                        .Peacekeeper[40]
                                                                                                        .wikiLink,
                                                                                                  },
                                                                                                children:
                                                                                                  [],
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                ],
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
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Peacekeeper[30]
                                                              .id,
                                                            trader:
                                                              "Peacekeeper",
                                                            name: filterTasksByTrader
                                                              .Peacekeeper[30]
                                                              .name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[30]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[30]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[30]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[30]
                                                                  .wikiLink,
                                                            },
                                                            children: [],
                                                          },
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Peacekeeper[12]
                                                              .id,
                                                            trader:
                                                              "Peacekeeper",
                                                            name: filterTasksByTrader
                                                              .Peacekeeper[12]
                                                              .name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[12]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[12]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[12]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Peacekeeper[12]
                                                                  .wikiLink,
                                                            },
                                                            children: [
                                                              {
                                                                taskRequired:
                                                                  "",
                                                                id: filterTasksByTrader
                                                                  .Peacekeeper[10]
                                                                  .id,
                                                                trader:
                                                                  "Peacekeeper",
                                                                name: filterTasksByTrader
                                                                  .Peacekeeper[10]
                                                                  .name,
                                                                attributes: {
                                                                  level:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[10]
                                                                      .minPlayerLevel,
                                                                  kappaRequired:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[10]
                                                                      .kappaRequired,
                                                                  objectives:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[10]
                                                                      .objectives,
                                                                  wikiLink:
                                                                    filterTasksByTrader
                                                                      .Peacekeeper[10]
                                                                      .wikiLink,
                                                                },
                                                                children: [
                                                                  {
                                                                    taskRequired:
                                                                      "",
                                                                    id: filterTasksByTrader
                                                                      .Peacekeeper[7]
                                                                      .id,
                                                                    trader:
                                                                      "Peacekeeper",
                                                                    name: filterTasksByTrader
                                                                      .Peacekeeper[7]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[7]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[7]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[7]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Peacekeeper[7]
                                                                            .wikiLink,
                                                                      },
                                                                    children: [
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Peacekeeper[16]
                                                                          .id,
                                                                        trader:
                                                                          "Peacekeeper",
                                                                        name: filterTasksByTrader
                                                                          .Peacekeeper[16]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[16]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[16]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[16]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Peacekeeper[16]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Peacekeeper[33]
                                                                                .id,
                                                                              trader:
                                                                                "Peacekeeper",
                                                                              name: filterTasksByTrader
                                                                                .Peacekeeper[33]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[33]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[33]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[33]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[33]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [],
                                                                            },
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Peacekeeper[38]
                                                                                .id,
                                                                              trader:
                                                                                "Peacekeeper",
                                                                              name: filterTasksByTrader
                                                                                .Peacekeeper[38]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[38]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[38]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[38]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Peacekeeper[38]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
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
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Peacekeeper[35].id,
                                            trader: "Peacekeeper",
                                            name: filterTasksByTrader
                                              .Peacekeeper[35].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Peacekeeper[35]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Peacekeeper[35]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Peacekeeper[35].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Peacekeeper[35].wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },

                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[27].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[27]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[27]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[27]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[27]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[27]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Peacekeeper[17].id,
                                trader: "Peacekeeper",
                                name: filterTasksByTrader.Peacekeeper[17].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Peacekeeper[17]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Peacekeeper[17]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Peacekeeper[17]
                                      .objectives,
                                  wikiLink:
                                    filterTasksByTrader.Peacekeeper[17]
                                      .wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[22].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[22]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[22]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[22]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[22]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[22]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[25].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[25]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[25]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[25]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[25]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[25]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },

                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Peacekeeper[28].id,
                                    trader: "Peacekeeper",
                                    name: filterTasksByTrader.Peacekeeper[28]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Peacekeeper[28]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Peacekeeper[28]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Peacekeeper[28]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Peacekeeper[28]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired:
                                          "To unlock this quest, you also need to complete, Wet Job - Part 5 from Peacekeeper",
                                        id: filterTasksByTrader.Peacekeeper[34]
                                          .id,
                                        trader: "Peacekeeper",
                                        name: filterTasksByTrader
                                          .Peacekeeper[34].name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Peacekeeper[34]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Peacekeeper[34]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Peacekeeper[34]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Peacekeeper[34]
                                              .wikiLink,
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
                    ],
                  },
                ],
              },
              {
                taskRequired:
                  "To unlock this quest, you also need to complete, Anesthesia from Prapor",
                id: filterTasksByTrader.Peacekeeper[31].id,
                trader: "Peacekeeper",
                name: filterTasksByTrader.Peacekeeper[31].name,
                attributes: {
                  level: filterTasksByTrader.Peacekeeper[31].minPlayerLevel,
                  kappaRequired:
                    filterTasksByTrader.Peacekeeper[31].kappaRequired,
                  objectives: filterTasksByTrader.Peacekeeper[31].objectives,
                  wikiLink: filterTasksByTrader.Peacekeeper[31].wikiLink,
                },
                children: [
                  {
                    taskRequired:
                      "To unlock this quest, you also need to complete, Colleagues - Part 3 from Therapist or The Huntsman Path - Sadist from Jaeger",
                    id: filterTasksByTrader.Peacekeeper[32].id,
                    trader: "Peacekeeper",
                    name: filterTasksByTrader.Peacekeeper[32].name,
                    attributes: {
                      level: filterTasksByTrader.Peacekeeper[32].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Peacekeeper[32].kappaRequired,
                      objectives:
                        filterTasksByTrader.Peacekeeper[32].objectives,
                      wikiLink: filterTasksByTrader.Peacekeeper[32].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        taskRequired: "",
        id: "",
        trader: "Mechanic",
        name: "Mechanic",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_mechanic-removebg-preview_anyakw.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Mechanic[55].id,
            trader: "Mechanic",
            name: filterTasksByTrader.Mechanic[55].name,
            attributes: {
              level: filterTasksByTrader.Mechanic[55].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Mechanic[55].kappaRequired,
              objectives: filterTasksByTrader.Mechanic[55].objectives,
              wikiLink: filterTasksByTrader.Mechanic[55].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Mechanic[56].id,
                trader: "Mechanic",
                name: filterTasksByTrader.Mechanic[56].name,
                attributes: {
                  level: filterTasksByTrader.Mechanic[56].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Mechanic[56].kappaRequired,
                  objectives: filterTasksByTrader.Mechanic[56].objectives,
                  wikiLink: filterTasksByTrader.Mechanic[56].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[57].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[57].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[57].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[57].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[57].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[57].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Mechanic[60].id,
            trader: "Mechanic",
            name: filterTasksByTrader.Mechanic[60].name,
            attributes: {
              level: filterTasksByTrader.Mechanic[60].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Mechanic[60].kappaRequired,
              objectives: filterTasksByTrader.Mechanic[60].objectives,
              wikiLink: filterTasksByTrader.Mechanic[60].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Mechanic[53].id,
                trader: "Mechanic",
                name: filterTasksByTrader.Mechanic[53].name,
                attributes: {
                  level: filterTasksByTrader.Mechanic[53].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Mechanic[53].kappaRequired,
                  objectives: filterTasksByTrader.Mechanic[53].objectives,
                  wikiLink: filterTasksByTrader.Mechanic[53].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[51].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[51].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[51].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[51].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[51].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[51].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Mechanic[54].id,
                        trader: "Mechanic",
                        name: filterTasksByTrader.Mechanic[54].name,
                        attributes: {
                          level:
                            filterTasksByTrader.Mechanic[54].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Mechanic[54].kappaRequired,
                          objectives:
                            filterTasksByTrader.Mechanic[54].objectives,
                          wikiLink: filterTasksByTrader.Mechanic[54].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[48].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[48].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[48].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[48].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[48].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[48].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[52].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[52].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[52]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[52]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[52].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[52].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[49].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[49].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[49]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[49]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[49]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[49]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Mechanic[50].id,
                                        trader: "Mechanic",
                                        name: filterTasksByTrader.Mechanic[50]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Mechanic[50]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Mechanic[50]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Mechanic[50]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Mechanic[50]
                                              .wikiLink,
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
                    ],
                  },
                ],
              },
            ],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Wet Job - Part 6 from Peacekeeper",
            id: filterTasksByTrader.Mechanic[47].id,
            trader: "Mechanic",
            name: filterTasksByTrader.Mechanic[47].name,
            attributes: {
              level: filterTasksByTrader.Mechanic[47].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Mechanic[47].kappaRequired,
              objectives: filterTasksByTrader.Mechanic[47].objectives,
              wikiLink: filterTasksByTrader.Mechanic[47].wikiLink,
            },
            children: [],
          },
          {
            taskRequired:
              "To unlock this quest, you also need to complete, Anesthesia from Prapor and Colleagues - Part 1 from Therapist",
            id: filterTasksByTrader.Mechanic[33].id,
            trader: "Mechanic",
            name: filterTasksByTrader.Mechanic[33].name,
            attributes: {
              level: filterTasksByTrader.Mechanic[33].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Mechanic[33].kappaRequired,
              objectives: filterTasksByTrader.Mechanic[33].objectives,
              wikiLink: filterTasksByTrader.Mechanic[33].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Mechanic[68].id,
                trader: "Mechanic",
                name: filterTasksByTrader.Mechanic[68].name,
                attributes: {
                  level: filterTasksByTrader.Mechanic[68].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Mechanic[68].kappaRequired,
                  objectives: filterTasksByTrader.Mechanic[68].objectives,
                  wikiLink: filterTasksByTrader.Mechanic[68].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[69].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[69].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[69].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[69].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[69].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[69].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Mechanic[0].id,
            trader: "Mechanic",
            name: filterTasksByTrader.Mechanic[0].name,
            attributes: {
              level: filterTasksByTrader.Mechanic[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Mechanic[0].kappaRequired,
              objectives: filterTasksByTrader.Mechanic[0].objectives,
              wikiLink: filterTasksByTrader.Mechanic[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Mechanic[1].id,
                trader: "Mechanic",
                name: filterTasksByTrader.Mechanic[1].name,
                attributes: {
                  level: filterTasksByTrader.Mechanic[1].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Mechanic[1].kappaRequired,
                  objectives: filterTasksByTrader.Mechanic[1].objectives,
                  wikiLink: filterTasksByTrader.Mechanic[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[3].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[3].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[3].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[3].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[3].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[3].wikiLink,
                    },
                    children: [
                      {
                        taskRequired:
                          "To unlock this quest, you also need to complete, Gunsmith - Part 3 from Mechanic",
                        id: filterTasksByTrader.Mechanic[5].id,
                        trader: "Mechanic",
                        name: filterTasksByTrader.Mechanic[5].name,
                        attributes: {
                          level: filterTasksByTrader.Mechanic[5].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Mechanic[5].kappaRequired,
                          objectives:
                            filterTasksByTrader.Mechanic[5].objectives,
                          wikiLink: filterTasksByTrader.Mechanic[5].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[6].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[6].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[6].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[6].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[6].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[6].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[15].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[15].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[15]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[15]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[15].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[15].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[23].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[23].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[23]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[23]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[23]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[23]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Mechanic[28].id,
                                        trader: "Mechanic",
                                        name: filterTasksByTrader.Mechanic[28]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Mechanic[28]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Mechanic[28]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Mechanic[28]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Mechanic[28]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Mechanic[29]
                                              .id,
                                            trader: "Mechanic",
                                            name: filterTasksByTrader
                                              .Mechanic[29].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Mechanic[29]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Mechanic[29]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Mechanic[29]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Mechanic[29]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Mechanic[31].id,
                                                trader: "Mechanic",
                                                name: filterTasksByTrader
                                                  .Mechanic[31].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Mechanic[31]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Mechanic[31]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Mechanic[31].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Mechanic[31].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Mechanic[32].id,
                                                    trader: "Mechanic",
                                                    name: filterTasksByTrader
                                                      .Mechanic[32].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Mechanic[32]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Mechanic[32]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Mechanic[32]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Mechanic[32]
                                                          .wikiLink,
                                                    },
                                                    children: [
                                                      {
                                                        taskRequired: "",
                                                        id: filterTasksByTrader
                                                          .Mechanic[34].id,
                                                        trader: "Mechanic",
                                                        name: filterTasksByTrader
                                                          .Mechanic[34].name,
                                                        attributes: {
                                                          level:
                                                            filterTasksByTrader
                                                              .Mechanic[34]
                                                              .minPlayerLevel,
                                                          kappaRequired:
                                                            filterTasksByTrader
                                                              .Mechanic[34]
                                                              .kappaRequired,
                                                          objectives:
                                                            filterTasksByTrader
                                                              .Mechanic[34]
                                                              .objectives,
                                                          wikiLink:
                                                            filterTasksByTrader
                                                              .Mechanic[34]
                                                              .wikiLink,
                                                        },
                                                        children: [
                                                          {
                                                            taskRequired: "",
                                                            id: filterTasksByTrader
                                                              .Mechanic[36].id,
                                                            trader: "Mechanic",
                                                            name: filterTasksByTrader
                                                              .Mechanic[36]
                                                              .name,
                                                            attributes: {
                                                              level:
                                                                filterTasksByTrader
                                                                  .Mechanic[36]
                                                                  .minPlayerLevel,
                                                              kappaRequired:
                                                                filterTasksByTrader
                                                                  .Mechanic[36]
                                                                  .kappaRequired,
                                                              objectives:
                                                                filterTasksByTrader
                                                                  .Mechanic[36]
                                                                  .objectives,
                                                              wikiLink:
                                                                filterTasksByTrader
                                                                  .Mechanic[36]
                                                                  .wikiLink,
                                                            },
                                                            children: [
                                                              {
                                                                taskRequired:
                                                                  "",
                                                                id: filterTasksByTrader
                                                                  .Mechanic[40]
                                                                  .id,
                                                                trader:
                                                                  "Mechanic",
                                                                name: filterTasksByTrader
                                                                  .Mechanic[40]
                                                                  .name,
                                                                attributes: {
                                                                  level:
                                                                    filterTasksByTrader
                                                                      .Mechanic[40]
                                                                      .minPlayerLevel,
                                                                  kappaRequired:
                                                                    filterTasksByTrader
                                                                      .Mechanic[40]
                                                                      .kappaRequired,
                                                                  objectives:
                                                                    filterTasksByTrader
                                                                      .Mechanic[40]
                                                                      .objectives,
                                                                  wikiLink:
                                                                    filterTasksByTrader
                                                                      .Mechanic[40]
                                                                      .wikiLink,
                                                                },
                                                                children: [
                                                                  {
                                                                    taskRequired:
                                                                      "",
                                                                    id: filterTasksByTrader
                                                                      .Mechanic[41]
                                                                      .id,
                                                                    trader:
                                                                      "Mechanic",
                                                                    name: filterTasksByTrader
                                                                      .Mechanic[41]
                                                                      .name,
                                                                    attributes:
                                                                      {
                                                                        level:
                                                                          filterTasksByTrader
                                                                            .Mechanic[41]
                                                                            .minPlayerLevel,
                                                                        kappaRequired:
                                                                          filterTasksByTrader
                                                                            .Mechanic[41]
                                                                            .kappaRequired,
                                                                        objectives:
                                                                          filterTasksByTrader
                                                                            .Mechanic[41]
                                                                            .objectives,
                                                                        wikiLink:
                                                                          filterTasksByTrader
                                                                            .Mechanic[41]
                                                                            .wikiLink,
                                                                      },
                                                                    children: [
                                                                      {
                                                                        taskRequired:
                                                                          "",
                                                                        id: filterTasksByTrader
                                                                          .Mechanic[43]
                                                                          .id,
                                                                        trader:
                                                                          "Mechanic",
                                                                        name: filterTasksByTrader
                                                                          .Mechanic[43]
                                                                          .name,
                                                                        attributes:
                                                                          {
                                                                            level:
                                                                              filterTasksByTrader
                                                                                .Mechanic[43]
                                                                                .minPlayerLevel,
                                                                            kappaRequired:
                                                                              filterTasksByTrader
                                                                                .Mechanic[43]
                                                                                .kappaRequired,
                                                                            objectives:
                                                                              filterTasksByTrader
                                                                                .Mechanic[43]
                                                                                .objectives,
                                                                            wikiLink:
                                                                              filterTasksByTrader
                                                                                .Mechanic[43]
                                                                                .wikiLink,
                                                                          },
                                                                        children:
                                                                          [
                                                                            {
                                                                              taskRequired:
                                                                                "",
                                                                              id: filterTasksByTrader
                                                                                .Mechanic[44]
                                                                                .id,
                                                                              trader:
                                                                                "Mechanic",
                                                                              name: filterTasksByTrader
                                                                                .Mechanic[44]
                                                                                .name,
                                                                              attributes:
                                                                                {
                                                                                  level:
                                                                                    filterTasksByTrader
                                                                                      .Mechanic[44]
                                                                                      .minPlayerLevel,
                                                                                  kappaRequired:
                                                                                    filterTasksByTrader
                                                                                      .Mechanic[44]
                                                                                      .kappaRequired,
                                                                                  objectives:
                                                                                    filterTasksByTrader
                                                                                      .Mechanic[44]
                                                                                      .objectives,
                                                                                  wikiLink:
                                                                                    filterTasksByTrader
                                                                                      .Mechanic[44]
                                                                                      .wikiLink,
                                                                                },
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    taskRequired:
                                                                                      "",
                                                                                    id: filterTasksByTrader
                                                                                      .Mechanic[45]
                                                                                      .id,
                                                                                    trader:
                                                                                      "Mechanic",
                                                                                    name: filterTasksByTrader
                                                                                      .Mechanic[45]
                                                                                      .name,
                                                                                    attributes:
                                                                                      {
                                                                                        level:
                                                                                          filterTasksByTrader
                                                                                            .Mechanic[45]
                                                                                            .minPlayerLevel,
                                                                                        kappaRequired:
                                                                                          filterTasksByTrader
                                                                                            .Mechanic[45]
                                                                                            .kappaRequired,
                                                                                        objectives:
                                                                                          filterTasksByTrader
                                                                                            .Mechanic[45]
                                                                                            .objectives,
                                                                                        wikiLink:
                                                                                          filterTasksByTrader
                                                                                            .Mechanic[45]
                                                                                            .wikiLink,
                                                                                      },
                                                                                    children:
                                                                                      [
                                                                                        {
                                                                                          taskRequired:
                                                                                            "",
                                                                                          id: filterTasksByTrader
                                                                                            .Mechanic[61]
                                                                                            .id,
                                                                                          trader:
                                                                                            "Mechanic",
                                                                                          name: filterTasksByTrader
                                                                                            .Mechanic[61]
                                                                                            .name,
                                                                                          attributes:
                                                                                            {
                                                                                              level:
                                                                                                filterTasksByTrader
                                                                                                  .Mechanic[61]
                                                                                                  .minPlayerLevel,
                                                                                              kappaRequired:
                                                                                                filterTasksByTrader
                                                                                                  .Mechanic[61]
                                                                                                  .kappaRequired,
                                                                                              objectives:
                                                                                                filterTasksByTrader
                                                                                                  .Mechanic[61]
                                                                                                  .objectives,
                                                                                              wikiLink:
                                                                                                filterTasksByTrader
                                                                                                  .Mechanic[61]
                                                                                                  .wikiLink,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              {
                                                                                                taskRequired:
                                                                                                  "",
                                                                                                id: filterTasksByTrader
                                                                                                  .Mechanic[62]
                                                                                                  .id,
                                                                                                trader:
                                                                                                  "Mechanic",
                                                                                                name: filterTasksByTrader
                                                                                                  .Mechanic[62]
                                                                                                  .name,
                                                                                                attributes:
                                                                                                  {
                                                                                                    level:
                                                                                                      filterTasksByTrader
                                                                                                        .Mechanic[62]
                                                                                                        .minPlayerLevel,
                                                                                                    kappaRequired:
                                                                                                      filterTasksByTrader
                                                                                                        .Mechanic[62]
                                                                                                        .kappaRequired,
                                                                                                    objectives:
                                                                                                      filterTasksByTrader
                                                                                                        .Mechanic[62]
                                                                                                        .objectives,
                                                                                                    wikiLink:
                                                                                                      filterTasksByTrader
                                                                                                        .Mechanic[62]
                                                                                                        .wikiLink,
                                                                                                  },
                                                                                                children:
                                                                                                  [
                                                                                                    {
                                                                                                      taskRequired:
                                                                                                        "",
                                                                                                      id: filterTasksByTrader
                                                                                                        .Mechanic[63]
                                                                                                        .id,
                                                                                                      trader:
                                                                                                        "Mechanic",
                                                                                                      name: filterTasksByTrader
                                                                                                        .Mechanic[63]
                                                                                                        .name,
                                                                                                      attributes:
                                                                                                        {
                                                                                                          level:
                                                                                                            filterTasksByTrader
                                                                                                              .Mechanic[63]
                                                                                                              .minPlayerLevel,
                                                                                                          kappaRequired:
                                                                                                            filterTasksByTrader
                                                                                                              .Mechanic[63]
                                                                                                              .kappaRequired,
                                                                                                          objectives:
                                                                                                            filterTasksByTrader
                                                                                                              .Mechanic[63]
                                                                                                              .objectives,
                                                                                                          wikiLink:
                                                                                                            filterTasksByTrader
                                                                                                              .Mechanic[63]
                                                                                                              .wikiLink,
                                                                                                        },
                                                                                                      children:
                                                                                                        [
                                                                                                          {
                                                                                                            taskRequired:
                                                                                                              "",
                                                                                                            id: filterTasksByTrader
                                                                                                              .Mechanic[64]
                                                                                                              .id,
                                                                                                            trader:
                                                                                                              "Mechanic",
                                                                                                            name: filterTasksByTrader
                                                                                                              .Mechanic[64]
                                                                                                              .name,
                                                                                                            attributes:
                                                                                                              {
                                                                                                                level:
                                                                                                                  filterTasksByTrader
                                                                                                                    .Mechanic[64]
                                                                                                                    .minPlayerLevel,
                                                                                                                kappaRequired:
                                                                                                                  filterTasksByTrader
                                                                                                                    .Mechanic[64]
                                                                                                                    .kappaRequired,
                                                                                                                objectives:
                                                                                                                  filterTasksByTrader
                                                                                                                    .Mechanic[64]
                                                                                                                    .objectives,
                                                                                                                wikiLink:
                                                                                                                  filterTasksByTrader
                                                                                                                    .Mechanic[64]
                                                                                                                    .wikiLink,
                                                                                                              },
                                                                                                            children:
                                                                                                              [
                                                                                                                {
                                                                                                                  taskRequired:
                                                                                                                    "",
                                                                                                                  id: filterTasksByTrader
                                                                                                                    .Mechanic[67]
                                                                                                                    .id,
                                                                                                                  trader:
                                                                                                                    "Mechanic",
                                                                                                                  name: filterTasksByTrader
                                                                                                                    .Mechanic[67]
                                                                                                                    .name,
                                                                                                                  attributes:
                                                                                                                    {
                                                                                                                      level:
                                                                                                                        filterTasksByTrader
                                                                                                                          .Mechanic[67]
                                                                                                                          .minPlayerLevel,
                                                                                                                      kappaRequired:
                                                                                                                        filterTasksByTrader
                                                                                                                          .Mechanic[67]
                                                                                                                          .kappaRequired,
                                                                                                                      objectives:
                                                                                                                        filterTasksByTrader
                                                                                                                          .Mechanic[67]
                                                                                                                          .objectives,
                                                                                                                      wikiLink:
                                                                                                                        filterTasksByTrader
                                                                                                                          .Mechanic[67]
                                                                                                                          .wikiLink,
                                                                                                                    },
                                                                                                                  children:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        taskRequired:
                                                                                                                          "",
                                                                                                                        id: filterTasksByTrader
                                                                                                                          .Mechanic[65]
                                                                                                                          .id,
                                                                                                                        trader:
                                                                                                                          "Mechanic",
                                                                                                                        name: filterTasksByTrader
                                                                                                                          .Mechanic[65]
                                                                                                                          .name,
                                                                                                                        attributes:
                                                                                                                          {
                                                                                                                            level:
                                                                                                                              filterTasksByTrader
                                                                                                                                .Mechanic[65]
                                                                                                                                .minPlayerLevel,
                                                                                                                            kappaRequired:
                                                                                                                              filterTasksByTrader
                                                                                                                                .Mechanic[65]
                                                                                                                                .kappaRequired,
                                                                                                                            objectives:
                                                                                                                              filterTasksByTrader
                                                                                                                                .Mechanic[65]
                                                                                                                                .objectives,
                                                                                                                            wikiLink:
                                                                                                                              filterTasksByTrader
                                                                                                                                .Mechanic[65]
                                                                                                                                .wikiLink,
                                                                                                                          },
                                                                                                                        children:
                                                                                                                          [
                                                                                                                            {
                                                                                                                              taskRequired:
                                                                                                                                "",
                                                                                                                              id: filterTasksByTrader
                                                                                                                                .Mechanic[66]
                                                                                                                                .id,
                                                                                                                              trader:
                                                                                                                                "Mechanic",
                                                                                                                              name: filterTasksByTrader
                                                                                                                                .Mechanic[66]
                                                                                                                                .name,
                                                                                                                              attributes:
                                                                                                                                {
                                                                                                                                  level:
                                                                                                                                    filterTasksByTrader
                                                                                                                                      .Mechanic[66]
                                                                                                                                      .minPlayerLevel,
                                                                                                                                  kappaRequired:
                                                                                                                                    filterTasksByTrader
                                                                                                                                      .Mechanic[66]
                                                                                                                                      .kappaRequired,
                                                                                                                                  objectives:
                                                                                                                                    filterTasksByTrader
                                                                                                                                      .Mechanic[66]
                                                                                                                                      .objectives,
                                                                                                                                  wikiLink:
                                                                                                                                    filterTasksByTrader
                                                                                                                                      .Mechanic[66]
                                                                                                                                      .wikiLink,
                                                                                                                                },
                                                                                                                              children:
                                                                                                                                [],
                                                                                                                            },
                                                                                                                          ],
                                                                                                                      },
                                                                                                                    ],
                                                                                                                },
                                                                                                              ],
                                                                                                          },
                                                                                                        ],
                                                                                                    },
                                                                                                  ],
                                                                                              },
                                                                                            ],
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                ],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
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
                        taskRequired: "",
                        id: filterTasksByTrader.Mechanic[8].id,
                        trader: "Mechanic",
                        name: filterTasksByTrader.Mechanic[8].name,
                        attributes: {
                          level: filterTasksByTrader.Mechanic[8].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Mechanic[8].kappaRequired,
                          objectives:
                            filterTasksByTrader.Mechanic[8].objectives,
                          wikiLink: filterTasksByTrader.Mechanic[8].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[12].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[12].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[12].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[12].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[12].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[12].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[21].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[21].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[21]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[21]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[21].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[21].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[25].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[25].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[25]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[25]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[25]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[25]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[24].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[24].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[24]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[24]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[24]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[24]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Mechanic[26].id,
                                        trader: "Mechanic",
                                        name: filterTasksByTrader.Mechanic[26]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Mechanic[26]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Mechanic[26]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Mechanic[26]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Mechanic[26]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[10].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[10].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[10]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[10]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[10].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[10].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[17].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[17].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[17]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[17]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[17]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[17]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Mechanic[19].id,
                                        trader: "Mechanic",
                                        name: filterTasksByTrader.Mechanic[19]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Mechanic[19]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Mechanic[19]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Mechanic[19]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Mechanic[19]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            taskRequired:
                              "To unlock this quest, you also need to complete, Gunsmith - Part 3 from Mechanic",
                            id: filterTasksByTrader.Mechanic[14].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[14].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[14].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[14].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[14].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[14].wikiLink,
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[4].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[4].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[4].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[4].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[4].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[4].wikiLink,
                    },
                    children: [],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[7].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[7].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[7].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[7].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[7].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[7].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Mechanic[9].id,
                        trader: "Mechanic",
                        name: filterTasksByTrader.Mechanic[9].name,
                        attributes: {
                          level: filterTasksByTrader.Mechanic[9].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Mechanic[9].kappaRequired,
                          objectives:
                            filterTasksByTrader.Mechanic[9].objectives,
                          wikiLink: filterTasksByTrader.Mechanic[9].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[16].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[16].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[16].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[16].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[16].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[16].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[20].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[20].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[20]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[20]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[20].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[20].wikiLink,
                                },
                                children: [],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[18].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[18].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[18]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[18]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[18].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[18].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[35].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[35].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[35]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[35]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[35]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[35]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[42].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[42].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[42]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[42]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[42]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[42]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[46].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[46].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[46]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[46]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[46]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[46]
                                          .wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },

                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[27].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[27].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[27]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[27]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[27].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[27].wikiLink,
                                },
                                children: [],
                              },
                            ],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[11].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[11].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[11].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[11].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[11].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[11].wikiLink,
                            },
                            children: [],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Mechanic[13].id,
                            trader: "Mechanic",
                            name: filterTasksByTrader.Mechanic[13].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Mechanic[13].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Mechanic[13].kappaRequired,
                              objectives:
                                filterTasksByTrader.Mechanic[13].objectives,
                              wikiLink:
                                filterTasksByTrader.Mechanic[13].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Mechanic[22].id,
                                trader: "Mechanic",
                                name: filterTasksByTrader.Mechanic[22].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Mechanic[22]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Mechanic[22]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Mechanic[22].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Mechanic[22].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired:
                                      "To unlock this quest, you also need to complete, Corporate Secrets from Mechanic",
                                    id: filterTasksByTrader.Mechanic[39].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[39].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[39]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[39]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[39]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[39]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Mechanic[37].id,
                                        trader: "Mechanic",
                                        name: filterTasksByTrader.Mechanic[37]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Mechanic[37]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Mechanic[37]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Mechanic[37]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Mechanic[37]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Mechanic[38]
                                              .id,
                                            trader: "Mechanic",
                                            name: filterTasksByTrader
                                              .Mechanic[38].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Mechanic[38]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Mechanic[38]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Mechanic[38]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Mechanic[38]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Mechanic[30].id,
                                    trader: "Mechanic",
                                    name: filterTasksByTrader.Mechanic[30].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Mechanic[30]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Mechanic[30]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Mechanic[30]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Mechanic[30]
                                          .wikiLink,
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
                    taskRequired: "",
                    id: filterTasksByTrader.Mechanic[2].id,
                    trader: "Mechanic",
                    name: filterTasksByTrader.Mechanic[2].name,
                    attributes: {
                      level: filterTasksByTrader.Mechanic[2].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Mechanic[2].kappaRequired,
                      objectives: filterTasksByTrader.Mechanic[2].objectives,
                      wikiLink: filterTasksByTrader.Mechanic[2].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        taskRequired: "",
        id: "",
        trader: "Ragman",
        name: "Ragman",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_ragman-removebg-preview_jblvbn.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Ragman[32].id,
            trader: "Ragman",
            name: filterTasksByTrader.Ragman[32].name,
            attributes: {
              level: filterTasksByTrader.Ragman[32].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Ragman[32].kappaRequired,
              objectives: filterTasksByTrader.Ragman[32].objectives,
              wikiLink: filterTasksByTrader.Ragman[32].wikiLink,
            },
            children: [],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Ragman[0].id,
            trader: "Ragman",
            name: filterTasksByTrader.Ragman[0].name,
            attributes: {
              level: filterTasksByTrader.Ragman[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Ragman[0].kappaRequired,
              objectives: filterTasksByTrader.Ragman[0].objectives,
              wikiLink: filterTasksByTrader.Ragman[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Ragman[1].id,
                trader: "Ragman",
                name: filterTasksByTrader.Ragman[1].name,
                attributes: {
                  level: filterTasksByTrader.Ragman[1].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Ragman[1].kappaRequired,
                  objectives: filterTasksByTrader.Ragman[1].objectives,
                  wikiLink: filterTasksByTrader.Ragman[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Ragman[9].id,
                    trader: "Ragman",
                    name: filterTasksByTrader.Ragman[9].name,
                    attributes: {
                      level: filterTasksByTrader.Ragman[9].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Ragman[9].kappaRequired,
                      objectives: filterTasksByTrader.Ragman[9].objectives,
                      wikiLink: filterTasksByTrader.Ragman[9].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Ragman[7].id,
                        trader: "Ragman",
                        name: filterTasksByTrader.Ragman[7].name,
                        attributes: {
                          level: filterTasksByTrader.Ragman[7].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Ragman[7].kappaRequired,
                          objectives: filterTasksByTrader.Ragman[7].objectives,
                          wikiLink: filterTasksByTrader.Ragman[7].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Ragman[6].id,
                            trader: "Ragman",
                            name: filterTasksByTrader.Ragman[6].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Ragman[6].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Ragman[6].kappaRequired,
                              objectives:
                                filterTasksByTrader.Ragman[6].objectives,
                              wikiLink: filterTasksByTrader.Ragman[6].wikiLink,
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Ragman[4].id,
                        trader: "Ragman",
                        name: filterTasksByTrader.Ragman[4].name,
                        attributes: {
                          level: filterTasksByTrader.Ragman[4].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Ragman[4].kappaRequired,
                          objectives: filterTasksByTrader.Ragman[4].objectives,
                          wikiLink: filterTasksByTrader.Ragman[4].wikiLink,
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Ragman[10].id,
                    trader: "Ragman",
                    name: filterTasksByTrader.Ragman[10].name,
                    attributes: {
                      level: filterTasksByTrader.Ragman[10].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Ragman[10].kappaRequired,
                      objectives: filterTasksByTrader.Ragman[10].objectives,
                      wikiLink: filterTasksByTrader.Ragman[10].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Ragman[5].id,
                        trader: "Ragman",
                        name: filterTasksByTrader.Ragman[5].name,
                        attributes: {
                          level: filterTasksByTrader.Ragman[5].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Ragman[5].kappaRequired,
                          objectives: filterTasksByTrader.Ragman[5].objectives,
                          wikiLink: filterTasksByTrader.Ragman[5].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Ragman[11].id,
                            trader: "Ragman",
                            name: filterTasksByTrader.Ragman[11].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Ragman[11].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Ragman[11].kappaRequired,
                              objectives:
                                filterTasksByTrader.Ragman[11].objectives,
                              wikiLink: filterTasksByTrader.Ragman[11].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Ragman[24].id,
                                trader: "Ragman",
                                name: filterTasksByTrader.Ragman[24].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Ragman[24]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Ragman[24]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Ragman[24].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Ragman[24].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Ragman[25].id,
                                    trader: "Ragman",
                                    name: filterTasksByTrader.Ragman[25].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Ragman[25]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Ragman[25]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Ragman[25]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Ragman[25].wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Ragman[27].id,
                                trader: "Ragman",
                                name: filterTasksByTrader.Ragman[27].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Ragman[27]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Ragman[27]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Ragman[27].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Ragman[27].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Ragman[33].id,
                                    trader: "Ragman",
                                    name: filterTasksByTrader.Ragman[33].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Ragman[33]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Ragman[33]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Ragman[33]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Ragman[33].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Ragman[38].id,
                                        trader: "Ragman",
                                        name: filterTasksByTrader.Ragman[38]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Ragman[38]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Ragman[38]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Ragman[38]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Ragman[38]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Ragman[39]
                                              .id,
                                            trader: "Ragman",
                                            name: filterTasksByTrader.Ragman[39]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Ragman[39]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Ragman[39]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Ragman[39]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Ragman[39]
                                                  .wikiLink,
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
                            taskRequired: "",
                            id: filterTasksByTrader.Ragman[14].id,
                            trader: "Ragman",
                            name: filterTasksByTrader.Ragman[14].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Ragman[14].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Ragman[14].kappaRequired,
                              objectives:
                                filterTasksByTrader.Ragman[14].objectives,
                              wikiLink: filterTasksByTrader.Ragman[14].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Ragman[15].id,
                                trader: "Ragman",
                                name: filterTasksByTrader.Ragman[15].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Ragman[15]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Ragman[15]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Ragman[15].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Ragman[15].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Ragman[19].id,
                                    trader: "Ragman",
                                    name: filterTasksByTrader.Ragman[16].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Ragman[16]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Ragman[16]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Ragman[16]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Ragman[16].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Ragman[17].id,
                                        trader: "Ragman",
                                        name: filterTasksByTrader.Ragman[17]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Ragman[17]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Ragman[17]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Ragman[17]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Ragman[17]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Ragman[18]
                                              .id,
                                            trader: "Ragman",
                                            name: filterTasksByTrader.Ragman[18]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Ragman[18]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Ragman[18]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Ragman[18]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Ragman[18]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Ragman[34]
                                              .id,
                                            trader: "Ragman",
                                            name: filterTasksByTrader.Ragman[34]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Ragman[34]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Ragman[34]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Ragman[34]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Ragman[34]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Ragman[36].id,
                                                trader: "Ragman",
                                                name: filterTasksByTrader
                                                  .Ragman[36].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Ragman[36]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Ragman[36].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Ragman[36].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Ragman[36].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Ragman[23].id,
                                        trader: "Ragman",
                                        name: filterTasksByTrader.Ragman[23]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Ragman[23]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Ragman[23]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Ragman[23]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Ragman[23]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Ragman[30]
                                              .id,
                                            trader: "Ragman",
                                            name: filterTasksByTrader.Ragman[30]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Ragman[30]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Ragman[30]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Ragman[30]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Ragman[30]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Ragman[21].id,
                                    trader: "Ragman",
                                    name: filterTasksByTrader.Ragman[21].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Ragman[21]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Ragman[21]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Ragman[21]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Ragman[21].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Ragman[27].id,
                                        trader: "Ragman",
                                        name: filterTasksByTrader.Ragman[22]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Ragman[22]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Ragman[22]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Ragman[22]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Ragman[22]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Ragman[29].id,
                                        trader: "Ragman",
                                        name: filterTasksByTrader.Ragman[29]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Ragman[29]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Ragman[29]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Ragman[29]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Ragman[29]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Ragman[19].id,
                                trader: "Ragman",
                                name: filterTasksByTrader.Ragman[19].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Ragman[19]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Ragman[19]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Ragman[19].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Ragman[19].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Ragman[28].id,
                                    trader: "Ragman",
                                    name: filterTasksByTrader.Ragman[28].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Ragman[28]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Ragman[28]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Ragman[28]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Ragman[28].wikiLink,
                                    },
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Ragman[13].id,
                            trader: "Ragman",
                            name: filterTasksByTrader.Ragman[13].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Ragman[13].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Ragman[13].kappaRequired,
                              objectives:
                                filterTasksByTrader.Ragman[13].objectives,
                              wikiLink: filterTasksByTrader.Ragman[13].wikiLink,
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                taskRequired: "",
                id: filterTasksByTrader.Ragman[2].id,
                trader: "Ragman",
                name: filterTasksByTrader.Ragman[2].name,
                attributes: {
                  level: filterTasksByTrader.Ragman[2].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Ragman[2].kappaRequired,
                  objectives: filterTasksByTrader.Ragman[2].objectives,
                  wikiLink: filterTasksByTrader.Ragman[2].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Ragman[8].id,
                    trader: "Ragman",
                    name: filterTasksByTrader.Ragman[8].name,
                    attributes: {
                      level: filterTasksByTrader.Ragman[8].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Ragman[8].kappaRequired,
                      objectives: filterTasksByTrader.Ragman[8].objectives,
                      wikiLink: filterTasksByTrader.Ragman[8].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
              {
                taskRequired: "",
                id: filterTasksByTrader.Ragman[3].id,
                trader: "Ragman",
                name: filterTasksByTrader.Ragman[3].name,
                attributes: {
                  level: filterTasksByTrader.Ragman[3].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Ragman[3].kappaRequired,
                  objectives: filterTasksByTrader.Ragman[3].objectives,
                  wikiLink: filterTasksByTrader.Ragman[3].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Ragman[12].id,
                    trader: "Ragman",
                    name: filterTasksByTrader.Ragman[12].name,
                    attributes: {
                      level: filterTasksByTrader.Ragman[12].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Ragman[12].kappaRequired,
                      objectives: filterTasksByTrader.Ragman[12].objectives,
                      wikiLink: filterTasksByTrader.Ragman[12].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Ragman[31].id,
                        trader: "Ragman",
                        name: filterTasksByTrader.Ragman[31].name,
                        attributes: {
                          level: filterTasksByTrader.Ragman[31].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Ragman[31].kappaRequired,
                          objectives: filterTasksByTrader.Ragman[31].objectives,
                          wikiLink: filterTasksByTrader.Ragman[31].wikiLink,
                        },
                        children: [],
                      },
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Ragman[20].id,
                        trader: "Ragman",
                        name: filterTasksByTrader.Ragman[20].name,
                        attributes: {
                          level: filterTasksByTrader.Ragman[20].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Ragman[20].kappaRequired,
                          objectives: filterTasksByTrader.Ragman[20].objectives,
                          wikiLink: filterTasksByTrader.Ragman[20].wikiLink,
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
        taskRequired: "",
        id: "",
        trader: "Jaeger",
        name: "Jaeger",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_jaeger-removebg-preview_kfnpy8.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Jaeger[37].id,
            trader: "Jaeger",
            name: filterTasksByTrader.Jaeger[37].name,
            attributes: {
              level: filterTasksByTrader.Jaeger[37].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Jaeger[37].kappaRequired,
              objectives: filterTasksByTrader.Jaeger[37].objectives,
              wikiLink: filterTasksByTrader.Jaeger[37].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[51].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[51].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[51].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[51].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[51].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[51].wikiLink,
                },
                children: [],
              },
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[52].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[52].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[52].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[52].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[52].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[52].wikiLink,
                },
                children: [],
              },
            ],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Jaeger[32].id,
            trader: "Jaeger",
            name: filterTasksByTrader.Jaeger[32].name,
            attributes: {
              level: filterTasksByTrader.Jaeger[32].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Jaeger[32].kappaRequired,
              objectives: filterTasksByTrader.Jaeger[32].objectives,
              wikiLink: filterTasksByTrader.Jaeger[32].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[41].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[41].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[41].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[41].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[41].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[41].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Jaeger[42].id,
                    trader: "Jaeger",
                    name: filterTasksByTrader.Jaeger[42].name,
                    attributes: {
                      level: filterTasksByTrader.Jaeger[42].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Jaeger[42].kappaRequired,
                      objectives: filterTasksByTrader.Jaeger[42].objectives,
                      wikiLink: filterTasksByTrader.Jaeger[42].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Jaeger[8].id,
            trader: "Jaeger",
            name: filterTasksByTrader.Jaeger[8].name,
            attributes: {
              level: filterTasksByTrader.Jaeger[8].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Jaeger[8].kappaRequired,
              objectives: filterTasksByTrader.Jaeger[8].objectives,
              wikiLink: filterTasksByTrader.Jaeger[8].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[31].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[31].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[31].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[31].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[31].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[31].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Jaeger[40].id,
                    trader: "Jaeger",
                    name: filterTasksByTrader.Jaeger[40].name,
                    attributes: {
                      level: filterTasksByTrader.Jaeger[40].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Jaeger[40].kappaRequired,
                      objectives: filterTasksByTrader.Jaeger[40].objectives,
                      wikiLink: filterTasksByTrader.Jaeger[40].wikiLink,
                    },
                    children: [],
                  },
                ],
              },
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[9].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[9].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[9].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[9].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[9].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[9].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Jaeger[10].id,
                    trader: "Jaeger",
                    name: filterTasksByTrader.Jaeger[10].name,
                    attributes: {
                      level: filterTasksByTrader.Jaeger[10].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Jaeger[10].kappaRequired,
                      objectives: filterTasksByTrader.Jaeger[10].objectives,
                      wikiLink: filterTasksByTrader.Jaeger[10].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Jaeger[11].id,
                        trader: "Jaeger",
                        name: filterTasksByTrader.Jaeger[11].name,
                        attributes: {
                          level: filterTasksByTrader.Jaeger[11].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Jaeger[11].kappaRequired,
                          objectives: filterTasksByTrader.Jaeger[11].objectives,
                          wikiLink: filterTasksByTrader.Jaeger[11].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Jaeger[12].id,
                            trader: "Jaeger",
                            name: filterTasksByTrader.Jaeger[12].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Jaeger[12].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Jaeger[12].kappaRequired,
                              objectives:
                                filterTasksByTrader.Jaeger[12].objectives,
                              wikiLink: filterTasksByTrader.Jaeger[12].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Jaeger[13].id,
                                trader: "Jaeger",
                                name: filterTasksByTrader.Jaeger[13].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Jaeger[13]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Jaeger[13]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Jaeger[13].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Jaeger[13].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[29].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[29].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[29]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[29]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[29]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[29].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[43].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[43]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[43]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[43]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[43]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[43]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[44]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[44]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[44]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[44]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[44]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[44]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[35].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[35].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[35]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[35]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[35]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[35].wikiLink,
                                    },
                                    children: [],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[15].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[15].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[15]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[15]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[15]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[15].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[16].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[16]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[16]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[16]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[16]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[16]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[22]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[22]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[22]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[22]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[22]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[22]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[23].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[23].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[23]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[23]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[23]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[23].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[17].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[17]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[17]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[17]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[17]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[17]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[49]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[49]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[49]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[49]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[49]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[49]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[20].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[20]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[20]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[20]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[20]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[20]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[27].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[27]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[27]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[27]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[27]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[27]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[47]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[47]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[47]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[47]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[47]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[47]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[48]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[48]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[48]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[48]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[48]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[48]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[18].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[18]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[18]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[18]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[18]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[18]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[28]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[28]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[28]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[28]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[28]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[28]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[19]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[19]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[19]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[19]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[19]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[19]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[26]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[26]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[26]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[26]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[26]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[26]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[21]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[21]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[21]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[21]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[21]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[21]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[36]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[36]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[36]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[36]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[36]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[36]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[38]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[38]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[38]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[38]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[38]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[38]
                                                  .wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Jaeger[50].id,
                                                trader: "Jaeger",
                                                name: filterTasksByTrader
                                                  .Jaeger[50].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Jaeger[50]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Jaeger[50].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Jaeger[50].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Jaeger[50].wikiLink,
                                                },
                                                children: [],
                                              },
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Jaeger[39].id,
                                                trader: "Jaeger",
                                                name: filterTasksByTrader
                                                  .Jaeger[39].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Jaeger[39]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Jaeger[39].kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Jaeger[39].objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Jaeger[39].wikiLink,
                                                },
                                                children: [],
                                              },
                                            ],
                                          },
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[46]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[46]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[46]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[46]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[46]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[46]
                                                  .wikiLink,
                                            },
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Jaeger[14].id,
                                trader: "Jaeger",
                                name: filterTasksByTrader.Jaeger[14].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Jaeger[14]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Jaeger[14]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Jaeger[14].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Jaeger[14].wikiLink,
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Jaeger[24].id,
                        trader: "Jaeger",
                        name: filterTasksByTrader.Jaeger[24].name,
                        attributes: {
                          level: filterTasksByTrader.Jaeger[24].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Jaeger[24].kappaRequired,
                          objectives: filterTasksByTrader.Jaeger[24].objectives,
                          wikiLink: filterTasksByTrader.Jaeger[24].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Jaeger[30].id,
                            trader: "Jaeger",
                            name: filterTasksByTrader.Jaeger[30].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Jaeger[30].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Jaeger[30].kappaRequired,
                              objectives:
                                filterTasksByTrader.Jaeger[30].objectives,
                              wikiLink: filterTasksByTrader.Jaeger[30].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Jaeger[34].id,
                                trader: "Jaeger",
                                name: filterTasksByTrader.Jaeger[34].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Jaeger[34]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Jaeger[34]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Jaeger[34].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Jaeger[34].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[33].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[33].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[33]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[33]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[33]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[33].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[45].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[45]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[45]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[45]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[45]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[45]
                                              .wikiLink,
                                        },
                                        children: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Jaeger[25].id,
                            trader: "Jaeger",
                            name: filterTasksByTrader.Jaeger[25].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Jaeger[25].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Jaeger[25].kappaRequired,
                              objectives:
                                filterTasksByTrader.Jaeger[25].objectives,
                              wikiLink: filterTasksByTrader.Jaeger[25].wikiLink,
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                taskRequired: "",
                id: filterTasksByTrader.Jaeger[0].id,
                trader: "Jaeger",
                name: filterTasksByTrader.Jaeger[0].name,
                attributes: {
                  level: filterTasksByTrader.Jaeger[0].minPlayerLevel,
                  kappaRequired: filterTasksByTrader.Jaeger[0].kappaRequired,
                  objectives: filterTasksByTrader.Jaeger[0].objectives,
                  wikiLink: filterTasksByTrader.Jaeger[0].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Jaeger[1].id,
                    trader: "Jaeger",
                    name: filterTasksByTrader.Jaeger[1].name,
                    attributes: {
                      level: filterTasksByTrader.Jaeger[1].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Jaeger[1].kappaRequired,
                      objectives: filterTasksByTrader.Jaeger[1].objectives,
                      wikiLink: filterTasksByTrader.Jaeger[1].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Jaeger[2].id,
                        trader: "Jaeger",
                        name: filterTasksByTrader.Jaeger[2].name,
                        attributes: {
                          level: filterTasksByTrader.Jaeger[2].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Jaeger[2].kappaRequired,
                          objectives: filterTasksByTrader.Jaeger[2].objectives,
                          wikiLink: filterTasksByTrader.Jaeger[2].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Jaeger[3].id,
                            trader: "Jaeger",
                            name: filterTasksByTrader.Jaeger[3].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Jaeger[3].minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Jaeger[3].kappaRequired,
                              objectives:
                                filterTasksByTrader.Jaeger[3].objectives,
                              wikiLink: filterTasksByTrader.Jaeger[3].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Jaeger[4].id,
                                trader: "Jaeger",
                                name: filterTasksByTrader.Jaeger[4].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Jaeger[4]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Jaeger[4].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Jaeger[4].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Jaeger[4].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Jaeger[5].id,
                                    trader: "Jaeger",
                                    name: filterTasksByTrader.Jaeger[5].name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Jaeger[5]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Jaeger[5]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Jaeger[5]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Jaeger[5].wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Jaeger[6].id,
                                        trader: "Jaeger",
                                        name: filterTasksByTrader.Jaeger[6]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Jaeger[6]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Jaeger[6]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Jaeger[6]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Jaeger[6]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader.Jaeger[7]
                                              .id,
                                            trader: "Jaeger",
                                            name: filterTasksByTrader.Jaeger[7]
                                              .name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader.Jaeger[7]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader.Jaeger[7]
                                                  .kappaRequired,
                                              objectives:
                                                filterTasksByTrader.Jaeger[7]
                                                  .objectives,
                                              wikiLink:
                                                filterTasksByTrader.Jaeger[7]
                                                  .wikiLink,
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
                        ],
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
        taskRequired: "",
        id: "",
        trader: "Fence",
        name: "Fence",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_fence-removebg-preview_z7zeun.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Fence[1].id,
            trader: "Fence",
            name: filterTasksByTrader.Fence[1].name,
            attributes: {
              level: filterTasksByTrader.Fence[1].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Fence[1].kappaRequired,
              objectives: filterTasksByTrader.Fence[1].objectives,
              wikiLink: filterTasksByTrader.Fence[1].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Fence[2].id,
                trader: "Fence",
                name: filterTasksByTrader.Fence[2].name,
                attributes: {
                  level: 1,
                  kappaRequired: filterTasksByTrader.Fence[2].kappaRequired,
                  objectives: filterTasksByTrader.Fence[2].objectives,
                  wikiLink: filterTasksByTrader.Fence[2].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Fence[3].id,
                    trader: "Fence",
                    name: filterTasksByTrader.Fence[3].name,
                    attributes: {
                      level: 1,
                      kappaRequired: filterTasksByTrader.Fence[3].kappaRequired,
                      objectives: filterTasksByTrader.Fence[3].objectives,
                      wikiLink: filterTasksByTrader.Fence[3].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Fence[4].id,
                        trader: "Fence",
                        name: filterTasksByTrader.Fence[4].name,
                        attributes: {
                          level: 1,
                          kappaRequired:
                            filterTasksByTrader.Fence[4].kappaRequired,
                          objectives: filterTasksByTrader.Fence[4].objectives,
                          wikiLink: filterTasksByTrader.Fence[4].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Fence[5].id,
                            trader: "Fence",
                            name: filterTasksByTrader.Fence[5].name,
                            attributes: {
                              level: 1,
                              kappaRequired:
                                filterTasksByTrader.Fence[5].kappaRequired,
                              objectives:
                                filterTasksByTrader.Fence[5].objectives,
                              wikiLink: filterTasksByTrader.Fence[5].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Fence[6].id,
                                trader: "Fence",
                                name: filterTasksByTrader.Fence[6].name,
                                attributes: {
                                  level: 1,
                                  kappaRequired:
                                    filterTasksByTrader.Fence[6].kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Fence[6].objectives,
                                  wikiLink:
                                    filterTasksByTrader.Fence[6].wikiLink,
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
            ],
          },
          {
            taskRequired: "",
            id: filterTasksByTrader.Fence[0].id,
            trader: "Fence",
            name: filterTasksByTrader.Fence[0].name,
            attributes: {
              level: filterTasksByTrader.Fence[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Fence[0].kappaRequired,
              objectives: filterTasksByTrader.Fence[0].objectives,
              wikiLink: filterTasksByTrader.Fence[0].wikiLink,
            },
            children: [],
          },
        ],
      },
      {
        taskRequired: "",
        id: "",
        trader: "Lightkeeper",
        name: "Lightkeeper",
        attributes: {
          level: 0,
          kappaRequired: false,
          objectives: [],
          wikiLink: "",
          traderImage:
            "https://res.cloudinary.com/dky8ozvbq/image/upload/v1705513115/home-preview_lightkeeper-removebg-preview_gapgam.png",
        },
        children: [
          {
            taskRequired: "",
            id: filterTasksByTrader.Lightkeeper[0].id,
            trader: "Lightkeeper",
            name: filterTasksByTrader.Lightkeeper[0].name,
            attributes: {
              level: filterTasksByTrader.Lightkeeper[0].minPlayerLevel,
              kappaRequired: filterTasksByTrader.Lightkeeper[0].kappaRequired,
              objectives: filterTasksByTrader.Lightkeeper[0].objectives,
              wikiLink: filterTasksByTrader.Lightkeeper[0].wikiLink,
            },
            children: [
              {
                taskRequired: "",
                id: filterTasksByTrader.Lightkeeper[1].id,
                trader: "Lightkeeper",
                name: filterTasksByTrader.Lightkeeper[1].name,
                attributes: {
                  level: filterTasksByTrader.Lightkeeper[1].minPlayerLevel,
                  kappaRequired:
                    filterTasksByTrader.Lightkeeper[1].kappaRequired,
                  objectives: filterTasksByTrader.Lightkeeper[1].objectives,
                  wikiLink: filterTasksByTrader.Lightkeeper[1].wikiLink,
                },
                children: [
                  {
                    taskRequired: "",
                    id: filterTasksByTrader.Lightkeeper[2].id,
                    trader: "Lightkeeper",
                    name: filterTasksByTrader.Lightkeeper[2].name,
                    attributes: {
                      level: filterTasksByTrader.Lightkeeper[2].minPlayerLevel,
                      kappaRequired:
                        filterTasksByTrader.Lightkeeper[2].kappaRequired,
                      objectives: filterTasksByTrader.Lightkeeper[2].objectives,
                      wikiLink: filterTasksByTrader.Lightkeeper[2].wikiLink,
                    },
                    children: [
                      {
                        taskRequired: "",
                        id: filterTasksByTrader.Lightkeeper[4].id,
                        trader: "Lightkeeper",
                        name: filterTasksByTrader.Lightkeeper[4].name,
                        attributes: {
                          level:
                            filterTasksByTrader.Lightkeeper[4].minPlayerLevel,
                          kappaRequired:
                            filterTasksByTrader.Lightkeeper[4].kappaRequired,
                          objectives:
                            filterTasksByTrader.Lightkeeper[4].objectives,
                          wikiLink: filterTasksByTrader.Lightkeeper[4].wikiLink,
                        },
                        children: [
                          {
                            taskRequired: "",
                            id: filterTasksByTrader.Lightkeeper[3].id,
                            trader: "Lightkeeper",
                            name: filterTasksByTrader.Lightkeeper[3].name,
                            attributes: {
                              level:
                                filterTasksByTrader.Lightkeeper[3]
                                  .minPlayerLevel,
                              kappaRequired:
                                filterTasksByTrader.Lightkeeper[3]
                                  .kappaRequired,
                              objectives:
                                filterTasksByTrader.Lightkeeper[3].objectives,
                              wikiLink:
                                filterTasksByTrader.Lightkeeper[3].wikiLink,
                            },
                            children: [
                              {
                                taskRequired: "",
                                id: filterTasksByTrader.Lightkeeper[5].id,
                                trader: "Lightkeeper",
                                name: filterTasksByTrader.Lightkeeper[5].name,
                                attributes: {
                                  level:
                                    filterTasksByTrader.Lightkeeper[5]
                                      .minPlayerLevel,
                                  kappaRequired:
                                    filterTasksByTrader.Lightkeeper[5]
                                      .kappaRequired,
                                  objectives:
                                    filterTasksByTrader.Lightkeeper[5]
                                      .objectives,
                                  wikiLink:
                                    filterTasksByTrader.Lightkeeper[5].wikiLink,
                                },
                                children: [
                                  {
                                    taskRequired: "",
                                    id: filterTasksByTrader.Lightkeeper[6].id,
                                    trader: "Lightkeeper",
                                    name: filterTasksByTrader.Lightkeeper[6]
                                      .name,
                                    attributes: {
                                      level:
                                        filterTasksByTrader.Lightkeeper[6]
                                          .minPlayerLevel,
                                      kappaRequired:
                                        filterTasksByTrader.Lightkeeper[6]
                                          .kappaRequired,
                                      objectives:
                                        filterTasksByTrader.Lightkeeper[6]
                                          .objectives,
                                      wikiLink:
                                        filterTasksByTrader.Lightkeeper[6]
                                          .wikiLink,
                                    },
                                    children: [
                                      {
                                        taskRequired: "",
                                        id: filterTasksByTrader.Lightkeeper[7]
                                          .id,
                                        trader: "Lightkeeper",
                                        name: filterTasksByTrader.Lightkeeper[7]
                                          .name,
                                        attributes: {
                                          level:
                                            filterTasksByTrader.Lightkeeper[7]
                                              .minPlayerLevel,
                                          kappaRequired:
                                            filterTasksByTrader.Lightkeeper[7]
                                              .kappaRequired,
                                          objectives:
                                            filterTasksByTrader.Lightkeeper[7]
                                              .objectives,
                                          wikiLink:
                                            filterTasksByTrader.Lightkeeper[7]
                                              .wikiLink,
                                        },
                                        children: [
                                          {
                                            taskRequired: "",
                                            id: filterTasksByTrader
                                              .Lightkeeper[8].id,
                                            trader: "Lightkeeper",
                                            name: filterTasksByTrader
                                              .Lightkeeper[8].name,
                                            attributes: {
                                              level:
                                                filterTasksByTrader
                                                  .Lightkeeper[8]
                                                  .minPlayerLevel,
                                              kappaRequired:
                                                filterTasksByTrader
                                                  .Lightkeeper[8].kappaRequired,
                                              objectives:
                                                filterTasksByTrader
                                                  .Lightkeeper[8].objectives,
                                              wikiLink:
                                                filterTasksByTrader
                                                  .Lightkeeper[8].wikiLink,
                                            },
                                            children: [
                                              {
                                                taskRequired: "",
                                                id: filterTasksByTrader
                                                  .Lightkeeper[9].id,
                                                trader: "Lightkeeper",
                                                name: filterTasksByTrader
                                                  .Lightkeeper[9].name,
                                                attributes: {
                                                  level:
                                                    filterTasksByTrader
                                                      .Lightkeeper[9]
                                                      .minPlayerLevel,
                                                  kappaRequired:
                                                    filterTasksByTrader
                                                      .Lightkeeper[9]
                                                      .kappaRequired,
                                                  objectives:
                                                    filterTasksByTrader
                                                      .Lightkeeper[9]
                                                      .objectives,
                                                  wikiLink:
                                                    filterTasksByTrader
                                                      .Lightkeeper[9].wikiLink,
                                                },
                                                children: [
                                                  {
                                                    taskRequired: "",
                                                    id: filterTasksByTrader
                                                      .Lightkeeper[10].id,
                                                    trader: "Lightkeeper",
                                                    name: filterTasksByTrader
                                                      .Lightkeeper[10].name,
                                                    attributes: {
                                                      level:
                                                        filterTasksByTrader
                                                          .Lightkeeper[10]
                                                          .minPlayerLevel,
                                                      kappaRequired:
                                                        filterTasksByTrader
                                                          .Lightkeeper[10]
                                                          .kappaRequired,
                                                      objectives:
                                                        filterTasksByTrader
                                                          .Lightkeeper[10]
                                                          .objectives,
                                                      wikiLink:
                                                        filterTasksByTrader
                                                          .Lightkeeper[10]
                                                          .wikiLink,
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
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return treeStructure;
};
