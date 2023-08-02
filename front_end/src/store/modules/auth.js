import { BASE_URL } from "../../../config.js";
import axios from "axios";

const state = {
  error: null,
};

const mutations = {
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await axios.post(
        `${BASE_URL}login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      return true;
    } catch (error) {
      commit("setError", error.response.data.error);
      return;
    }
  },

  logout({ commit }) {
    commit("setError", null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
