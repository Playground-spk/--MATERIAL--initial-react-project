import { newState } from "../../services/store.service";

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
      case actionType.LOGIN:
        return { ...newState(state), role: "user", token: action.payload.token };
  
      default:
        return state;
    }
  };