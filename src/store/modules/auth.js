import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import { BASE_URL } from "../../../config.js";

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
      /*      Login logic if the frontend were to communicate with a backend server that would
              be responsible for creating an access token and sending it in the response               */

      /*const response = await fetch(`${BASE_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username,
          password,
        },
      });
      const { user, token } = response.data;
      if (!token) {
        commit("setError", "Invalid username Or password!");
        return;
      }
      commit("setToken", token);
      commit("setUser", user);
      localStorage.setItem("token", token); */

      /* This is the login that i used */
      const response = await fetch(`${BASE_URL}users`);
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
        commit(
          "setError",
          "Invalid password for username : " + user.username + " !"
        );
        return;
      }
      const token = jwt.sign({ username }, "your_secret_key");
      commit("setToken", token);
      commit("setUser", user);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
      return true;
    } catch (error) {
      commit("setError", error);
    }
  },

  logout({ commit }) {
    commit("setToken", null);
    commit("setUser", null);
    commit("setError", null);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
