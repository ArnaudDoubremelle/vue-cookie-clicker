import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count: 0,
      cookiePerSecond: 0
  },
  mutations: {
      incrementCount (state, mount) {
        if (mount > 0) {
          state.count = state.count + mount
        } else {
          state.count++
        }
      },
      decrementCount(state, mount) {
          state.count = state.count - mount
      },
      incrementCookiePerSecond(state, mount) {
          state.cookiePerSecond = state.cookiePerSecond + mount
      }
  },
  actions: {}
});
