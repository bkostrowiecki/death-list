import { Action, ActionType } from "./deathList.action";
import uuid from "uuid";
import { DeathListState } from "./deathList.state";

export const deathListReducer = (
  state: DeathListState = {},
  action: Action
) => {
  switch (action.type) {
    case ActionType.ADD_PERSON:
      const id = uuid.v4();
      return {
        ...state,
        [id]: {
          id,
          isDead: false,
          ...action.payload
        }
      };

    case ActionType.DELETE_PERSON:
      const newState = { ...state };
      delete newState[action.payload.id];

      return newState;

    case ActionType.KILL_PERSON:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isDead: true
        }
      };

    case ActionType.REVIVE_PERSON:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isDead: false
        }
      };
  }

  return state;
};
