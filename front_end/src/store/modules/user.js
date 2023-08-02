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
  async getUser({ commit }, { username }) {
    try {
      const response = await axios.post(
        `${BASE_URL}getUser`,
        {
          username,
        },
        {
          withCredentials: true,
        }
      );
      return response.data.user;
    } catch (error) {
      commit("setError", error.response.data.error);
    }
  },

  async signup(
    { commit },
    {
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
      email,
      adress,
      phoneNumber,
    }
  ) {
    if (password != confirmPassword) {
      commit("setError", "Passwords must be matched !");
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}signup`,
        {
          username,
          password,
          firstName,
          lastName,
          email,
          adress,
          phoneNumber,
        },
        {
          withCredentials: true,
        }
      );
      return true;
    } catch (error) {
      commit("setError", error.response.data.error);
      return;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
