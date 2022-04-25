import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchAskItem,
} from '../api';
export default {
  //api 호출만함
  // context.commit으로 뮤테이션에 값을 넘겨야한다.
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => {
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => {
        context.commit('SET_ASK', response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    //디스트럭쳐링
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
        return response;
      })
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    //디스트럭쳐링
    fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, id) {
    fetchAskItem(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch((error) => console.log(error));
  },
  START_SPINNER({ commit }) {
    commit('START_SPINNER');
  },
  END_SPINNER({ commit }) {
    commit('END_SPINNER');
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((error) => console.log(error));
  },
};
