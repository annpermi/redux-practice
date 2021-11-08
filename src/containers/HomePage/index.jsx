import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import axios from "axios";
import { setUsers } from "./actions";
import UsersList from "./UsersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

//reduxDispatcher
const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
});

const url = "https://reqres.in/api/users";

export default function HomePage(props) {
  const { users } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await axios.get(url).catch((error) => console.log(error));

    setUser(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log({ users });

  return <UsersList />;
}
