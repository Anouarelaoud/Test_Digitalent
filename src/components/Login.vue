<template>
  <div v-if="submitMessage" class="alert alert-danger" role="alert">
    {{ submitMessage }}
  </div>
  <div class="login">
    <h1>Login</h1>
    <form class="form-group" @submit.prevent="submitLogin">
      <input
        v-model="username"
        type="text"
        class="form-control"
        placeholder="Username"
        required
      />
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <button class="btn btn-primary">Login</button>
      <p>
        Create new account ?
        <router-link to="/sign-up">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submitLogin() {
      let baseUrl = `http://localhost:3000/users?username=${this.username}&password=${this.password}`;
      let response = await axios.get(baseUrl);

      //   start

      // let testResponse = {
      //   message: "success",
      //   token:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      //   user: JSON.stringify(response.data[0]),
      // };
      // if (testResponse.message == "success") {
      //   localStorage.setItem("token", testResponse.token);
      //   localStorage.setItem("user-info", testResponse.user);
      //   this.$router.push({ name: "Home" });
      // } else this.throwErrorMessage("User Name or Password is incorrect !");

      //  end

      if (response.status == 200 && response.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(response.data[0]));
        localStorage.setItem(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        );
        this.$router.push({ name: "Home" });
      } else this.throwErrorMessage("User Name or Password is incorrect !");
    },
    throwErrorMessage(message) {
      this.submitStatus = "ERROR";
      this.submitMessage = message;
    },
  },
  mounted() {
    let user = localStorage.getItem("token");
    if (user) this.$router.push({ name: "Home" });
  },
};
</script>
