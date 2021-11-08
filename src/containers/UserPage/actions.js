//its a function that takes an argument and returns an action
import { ActionTypes } from "./constants";

export const setUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
