//its a function that takes an argument and returns an action
import { ActionTypes } from "./constants";

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
