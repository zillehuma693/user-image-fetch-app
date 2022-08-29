const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const fetchUsersSuccess = (users, data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    title: data,
    payload: users,
  };
};

