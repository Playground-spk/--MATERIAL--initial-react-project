import { newState } from "../../services/store.service";
import { ACTION_TYPE_LOGIN } from "../actionTypes";

const initialState = {
  role: "guest",
  token: null,
  profile: {
    img: "",
    username: "username",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE_LOGIN:
      return { ...newState(state), role: "user", token: action.payload.token };

    default:
      return state;
  }
};
