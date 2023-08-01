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
  async getUser({ commit }, { username }) {
    try {
      const response = await fetch(`${BASE_URL}users?username=${username}`);
      const user = await response.json();
      if (!user[0]) commit("setError", "Invalid credentials !");
      commit("setToken", "token");
      commit("setUser", user[0]);
      return user[0];
    } catch (error) {
      commit("setError", "Failed to fetch user !");
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
      const response = await fetch(`${BASE_URL}users`);
      const users = await response.json();
      const finUserByUsername = users.find((u) => u.username === username);
      const finUserByEmail = users.find((u) => u.email === email);

      if (finUserByUsername || finUserByEmail) {
        finUserByUsername
          ? commit("setError", "Username already exist !")
          : commit("setError", "Email already exist !");
        return;
      }

      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        "encryptionKey"
      ).toString();
      await fetch(`${BASE_URL}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password: hashedPassword,
          firstName,
          lastName,
          email,
          adress,
          phoneNumber,
        }),
      });
      return true;
    } catch (error) {
      commit("setError", "Signup failed !");
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
