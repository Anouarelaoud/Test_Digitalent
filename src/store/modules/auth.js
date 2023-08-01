// import jwt from "jsonwebtoken";

import CryptoJS from "crypto-js";
const state = {
  token: null,
  user: null,
  error: null,
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      const user = users.find((u) => u.username === username);

      if (!user) {
        commit("setError", "Invalid username !");
        return;
      }

      user.password = CryptoJS.AES.decrypt(
        user.password,
        "encryptionKey"
      ).toString(CryptoJS.enc.Utf8);

      if (user.password != password) {
        commit("setError", "Invalid password !");
        return;
      }
      // const token = jwt.sign({ username }, "your_secret_key");

      commit("setToken", "token");
      commit("setUser", user);
      localStorage.setItem("username", user.username);
      return true;
    } catch (error) {
      console.log(error);
      commit("setError", error);
    }
  },

  logout({ commit }) {
    commit("setToken", null);
    commit("setUser", null);
    commit("setError", null);
    localStorage.removeItem("username");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
