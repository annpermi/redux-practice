import { createSelector } from "reselect";

const userPageState = (state) => state.userPage;

// export const makeSelectUsers = homePage(state).users
export const makeSelectUser = createSelector(
  userPageState,
  (userPage) => userPage.user
);
