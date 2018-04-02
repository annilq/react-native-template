import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";

import { App as AppNavigator } from "../route";

// Start with two routes: The Main screen, with the Login screen on top.
const secondAction = AppNavigator.router.getActionForPathAndParams("Auth");
const initialNavState = AppNavigator.router.getStateForAction(secondAction);
function appstate(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "Login":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "App" }),
        state
      );
      break;
    case "Logout":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

// const initialAuthState = { isLogin: false };

function auth(state = {}, action) {
  switch (action.type) {
    case "Login":
      return { ...state, isLogin: true };
    case "Logout":
      return { ...state, isLogin: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  appstate,
  auth
});

export default AppReducer;
