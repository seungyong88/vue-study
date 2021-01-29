const moduleA = {
  namespaced: true,
  getters: {
    test(state, getters, rootState, rootGetters) {
      // 자기 자신의 item 게터 사용: getters['moduleA/item']
      getters.item;
      // 루트의 user 게터 사용
      rootGetters.user;

      return [getters.item, rootGetters.user];
    },
    item() {
      return "getter: moduleA/item";
    }
  },
  actions: {
    test({ dispatch, commit }) {
      // 자시 자신의 update 디스패치하기
      dispatch("update");
      // 루트의 update 디스패치하기
      dispatch("update", null, { root: true });
      // 루트의 update 커밋하기
      commit("update", null, { root: true });
      // 루트에 등록되어 있는 moduleB의 update 커밋하기
      commit("moduleB/update", null, { root: true });
    },
    update() {
      console.log("action: moduleA/update");
    }
  }
};

export default moduleA;
