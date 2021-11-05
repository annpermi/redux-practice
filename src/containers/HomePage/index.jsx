import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import axios from "axios";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const url = "https://reqres.in/api/users";

export default function HomePage(props) {
  const { users } = useSelector(stateSelector);

  const fetchUsers = async () => {
    const response = await axios.get(url).catch((error) => console.log(error));
    console.log(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log({ users });
  return <div>Hello world!</div>;
}
