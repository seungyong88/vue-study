import { createStore } from "vuex";

export default createStore({
  state: {
    message: "테스트"
  },
  getters: {
    message: state => state.message
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    doUpdate({ commit }, message) {
      // 여기에 비동기 통신 전부 완료 후 commit 
      commit("setMessage", { message });
    }
  },
  modules: {}
});
