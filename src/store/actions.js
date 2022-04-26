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


  // async await
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK(context) {
    try {
      const response = await fetchAskList();
      context.commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit('SET_JOBS', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName);
      commit('SET_LIST', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name);
      commit('SET_USER', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchAskItem(id);
      commit('SET_ITEM', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // 기존

  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_ASK(context) {
  //   return fetchAskList()
  //     .then((response) => {
  //       context.commit('SET_ASK', response.data);
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_JOBS({ commit }) {
  //   //디스트럭쳐링
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },  
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then((response) => {
  //       console.log('4');
  //       commit('SET_LIST', response.data); 
  //       return response;
  //     })
  //     .catch((error) => console.log(error));
  // },
  // FETCH_USER({ commit }, name) {
  //   //디스트럭쳐링
  //   return fetchUserInfo(name)
  //     .then(({ data }) => commit('SET_USER', data))
  //     .catch((error) => console.log(error));
  // },
  // FETCH_ITEM({ commit }, id) {
  //   return fetchAskItem(id)
  //     .then(({ data }) => commit('SET_ITEM', data))
  //     .catch((error) => console.log(error));
  // },

  START_SPINNER({ commit }) {
    return commit('START_SPINNER');
  },
  END_SPINNER({ commit }) {
    return commit('END_SPINNER');
  },

};
