import axios from "axios";
import * as constants from "./constants";
import { fromJS } from 'immutable';
const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articalList: result.articalList,
  recomendList: result.recomendList,
  writerList: result.writerList
});

const addHomeList = (result, nextPage) => ({
  type: constants.ADD_ARTICALE_LIST,
  list: fromJS(result),
  nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get("/api/home.json")
      .then(res => {
        const result = res.data.data;
        const action = changeHomeData(result);
        dispatch(action);
      })
      .catch(e => {});
  };
};

export const getMoreList = (page) => {
  return dispatch => {
    axios
      .get("/api/homeList.json?page="+page)
      .then(res => {
        const result = res.data.data;
        dispatch(addHomeList(result,page+1));
      })
      .catch(e => {});
  };
};

export const toggleTopShow = (show)=>({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})
