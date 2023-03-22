export type RootParamsList = {
  groups: undefined;
  newGroup: undefined;
  players: {
    group: string
  }
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootParamsList { }
  }
}