import { fetchNewsList, fetchJobsList, fetchAskList } from '../api';
export default {
  //api 호출만함
  // context.commit으로 뮤테이션에 값을 넘겨야한다.
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((response) => context.commit('SET_NEWS', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((response) => context.commit('SET_ASK', response.data))
      .catch((error) => console.log(error));
  },
  FETCH_JOBS({ commit }) {
    //디스트럭쳐링
    fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch((error) => console.log(error));
  },
};
