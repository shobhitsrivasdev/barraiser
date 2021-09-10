import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: [],
    totalProjects: [],
  },
  mutations: {
    addDataToProject(state, payload) {
      state.projects.push(payload);
    },
    addProject(state, payload) {
      state.totalProjects.push(payload);
    },
    removeProject(state, payload) {
        state.totalProjects = payload;
    },
  },
  getters: {
    getProject(state) {
      return state.projects;
    },
    getAllProjects(state) {
      return state.totalProjects;
    },
  },
});

export default store;
