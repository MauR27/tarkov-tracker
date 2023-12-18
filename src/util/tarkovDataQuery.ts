const tarkovDataQuery = async () => {
  try {
    const response = await fetch("https://api.tarkov.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
            tasks {
              id
              tarkovDataId
              name
              trader {
                id
                name
                imageLink
              }
              map {
                id
                name
              }
              kappaRequired
              lightkeeperRequired
              experience
              wikiLink
              minPlayerLevel
              taskRequirements {
                task {
                  id
                  name
                }
                status
              }
              traderRequirements {
                trader {
                  id
                  name
                }
                value
              }
              objectives {
                id
                description
                type
                maps {
                  id
                  name
                }
                optional
                __typename
                ... on TaskObjectiveBuildItem {
                  item {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                    properties {
                      ... on ItemPropertiesWeapon {
                        defaultPreset {
                          id
                          shortName
                          name
                          link
                          wikiLink
                          image512pxLink
                          gridImageLink
                          baseImageLink
                          iconLink
                          image8xLink
                          backgroundColor
                        }
                      }
                    }
                  }
                  containsAll {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                  }
                  containsCategory {
                    id
                    name
                    normalizedName
                    __typename
                  }
                  attributes {
                    name
                    requirement {
                      compareMethod
                      value
                    }
                  }
                }
                ... on TaskObjectiveExperience {
                  healthEffect {
                    bodyParts
                    effects
                    time {
                      compareMethod
                      value
                    }
                  }
                }
                ... on TaskObjectiveExtract {
                  exitStatus
                  zoneNames
                }
                ... on TaskObjectiveItem {
                  item {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                    properties {
                      ... on ItemPropertiesWeapon {
                        defaultPreset {
                          id
                          shortName
                          name
                          link
                          wikiLink
                          image512pxLink
                          gridImageLink
                          baseImageLink
                          iconLink
                          image8xLink
                          backgroundColor
                        }
                      }
                    }
                  }
                  count
                  foundInRaid
                  dogTagLevel
                  maxDurability
                  minDurability
                }
                ... on TaskObjectiveMark {
                  markerItem {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                  }
                }
                ... on TaskObjectivePlayerLevel {
                  playerLevel
                }
                ... on TaskObjectiveQuestItem {
                  questItem {
                    id
                    name
                  }
                  count
                }
                ... on TaskObjectiveShoot {
                  shotType
                  targetNames
                  count
                  zoneNames
                  bodyParts
                  usingWeapon {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                    properties {
                      ... on ItemPropertiesWeapon {
                        defaultPreset {
                          id
                          shortName
                          name
                          link
                          wikiLink
                          image512pxLink
                          gridImageLink
                          baseImageLink
                          iconLink
                          image8xLink
                          backgroundColor
                        }
                      }
                    }
                  }
                  usingWeaponMods {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                  }
                  wearing {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                  }
                  notWearing {
                    id
                    shortName
                    name
                    link
                    wikiLink
                    image512pxLink
                    gridImageLink
                    baseImageLink
                    iconLink
                    image8xLink
                    backgroundColor
                  }
                  distance {
                    compareMethod
                    value
                  }
                  playerHealthEffect {
                    bodyParts
                    effects
                    time {
                      compareMethod
                      value
                    }
                  }
                  enemyHealthEffect {
                    bodyParts
                    effects
                    time {
                      compareMethod
                      value
                    }
                  }
                }
                ... on TaskObjectiveSkill {
                  skillLevel {
                    name
                    level
                  }
                }
                ... on TaskObjectiveTaskStatus {
                  task {
                    id
                    name
                  }
                  status
                }
                ... on TaskObjectiveTraderLevel {
                  trader {
                    id
                    name
                  }
                  level
                }
              }
            }
            playerLevels {
              level
              exp
            }
        }`,
      }),
    });

    const json = await response.json();
    const { data } = await json;
    return data;
  } catch (error) {
    console.error("Error fetching missions:", error);
  }
};

export default tarkovDataQuery;
