export interface Action {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  ADD_PERSON,
  DELETE_PERSON,
  KILL_PERSON,
  REVIVE_PERSON
}
