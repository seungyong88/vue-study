import { createStore } from "vuex";

const moduleA = {
  namespaced: true,
  state : {
    count: 1
  },
  mutations: {
    update: state => state.count += 100
  }
}

const moduleB = {
  namespaced: true,
  state : {
    count: 2
  },
  mutations: {
    update: state => state.count += 200
  }
}


export default createStore({
  state: {
    message: "테스트"
  },
  modules: {
    moduleA, 
    moduleB
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
});
