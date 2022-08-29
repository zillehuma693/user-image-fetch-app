import { v4 as uuidv4 } from "uuid";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
let State = [];
const userReducer = (initialstate = State, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      State = [
        ...State,
        {
          id: uuidv4(),
          title: action.title,
          loading: false,
          images: action.payload,
          error: "",
        },
      ];
      return State;
    default: {
      return initialstate;
    }
  }
};
export default userReducer;
