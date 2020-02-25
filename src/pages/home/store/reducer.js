import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articalList: [],
  recomendList: [],
  writerList: [],
  articalePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articalList: fromJS(action.articalList),
    recomendList: fromJS(action.recomendList),
    writerList: fromJS(action.writerList)
  });
};

const addArticalList = (state, action) => {
  return state.merge({
    articalList: state.get("articalList").concat(action.list),
    articalePage: action.nextPage
  });
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);

    case constants.ADD_ARTICALE_LIST:
      return addArticalList(state, action);

    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
