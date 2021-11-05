import { createSelector } from "reselect";

const homePageState = (state) => state.homePage;

// export const makeSelectUsers = homePage(state).users
export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
);
