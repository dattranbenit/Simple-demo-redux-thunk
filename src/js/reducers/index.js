import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });// trong redux; state khong thay doi nen phai tao state moi
  }




  
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  } 



  return state;
}

export default rootReducer;