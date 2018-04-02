import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";

import { App as AppNavigator } from "../route";

// Start with two routes: The Main screen, with the Login screen on top.
const action = AppNavigator.router.getActionForPathAndParams("Auth");
const initialNavState = AppNavigator.router.getStateForAction(action);
function routerState(state = initialNavState, action) {
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

function appState(state = { isLogin: false, loaderVisible: false }, action) {
  switch (action.type) {
    case "showloader":
      return { ...state, loaderVisible: true };
    case "hideloader":
      return { ...state, loaderVisible: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  routerState,
  appState
});

export default AppReducer;
