<template>
  <div v-if="submitMessage" class="alert alert-danger" role="alert">
    {{ submitMessage }}
  </div>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <form class="form-group" @submit.prevent="submitSignUp">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Username"
            required
          />
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
          <label for="confirmPassword">Confirm Password</label>
          <input
            v-model="confirmPassword"
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            required
          />
          <label for="email">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="lastName">Last name</label>
          <input
            v-model="lastName"
            type="text"
            class="form-control"
            placeholder="Last name"
            required
          />
          <label for="firstName">First name</label>
          <input
            v-model="firstName"
            type="text"
            class="form-control"
            placeholder="First name"
            required
          />

          <label for="adress">Adress</label>
          <input
            v-model="adress"
            type="text"
            class="form-control"
            placeholder="Adress"
            required
          />
          <label for="phoneNumber">Phone number</label>
          <input
            v-model="phoneNumber"
            type="number"
            class="form-control"
            placeholder="Phone number"
            required
          />
        </div>
        <div class="col-md-3"></div>
      </div>
      <button class="btn btn-primary">Sign Up</button>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      phoneNumber: "",
    };
  },
  methods: {
    async submitSignUp() {
      if (this.password == this.confirmPassword) {
        let baseUrl = "http://localhost:3000/users";
        let response = await axios.post(baseUrl, {
          username: this.username,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          adress: this.adress,
          phoneNumber: this.phoneNumber,
        });
        response.status == 201 ? this.$router.push({ name: "Login" }) : "";
      } else this.throwErrorMessage("Passwords must be matched !");
    },
    throwErrorMessage(msg) {
      this.submitStatus = "ERROR";
      this.submitMessage = msg;
    },
  },
};
</script>

