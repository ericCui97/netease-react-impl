import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../application/Recommend/store/index";
import { reducer as singersReducer } from "../application/Singers/store/index";
import { reducer as rankReducer } from "../application/Rank/store/index";

export default combineReducers({
  rank: rankReducer,
  recommend: recommendReducer,
  singers: singersReducer,
});
