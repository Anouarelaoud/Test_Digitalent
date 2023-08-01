<template>
  <div v-if="isError" class="alert alert-danger" role="alert">
    {{ error }}
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
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["error"]),
  },
  data() {
    return {
      username: "",
      password: "",
      isError: false,
    };
  },
  methods: {
    async submitLogin() {
      const isLogSucc = await this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password,
      });
      isLogSucc ? this.$router.push("/") : (this.isError = true);
    },
  },
  async created() {
    const username = localStorage.getItem("username");
    username ? this.$router.push("/") : "";
  },
};
</script>

<style>
.login {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  padding: 25px;
}

.login h1 {
  margin-bottom: 50px;
}

.login input {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.login button {
  width: 200px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>