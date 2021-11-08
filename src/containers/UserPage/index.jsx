import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setUser } from "./actions";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selectors";
import styled from "styled-components";

const UserContainer = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: #353535;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

function UserPage(props) {
  const { user } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());
  //useParams will give list of params from list there
  const { userId } = useParams();

  const fetchUser = async (id) => {
    const response = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((err) => console.log(err));
    if (response) setUser(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  //fetch single user data
  return (
    <UserContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} alt={user.first_name} />
        </UserImage>
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
    </UserContainer>
  );
}

export default UserPage;
