<template>
  <div v-if="isError" class="alert alert-danger" role="alert">
    {{ error }}
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
            @input="validateEmail"
            required
          />
          <p class="error-msg" v-if="!isValidEmail">
            Please enter a valid Email.
          </p>
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
            class="form-control"
            placeholder="Phone number"
            @input="validatePhoneNumber"
            required
          />
          <p class="error-msg" v-if="!isValidPhoneNumber">
            Please enter a valid phone number.
          </p>
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", ["error"]),
  },
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
      isError: false,
      isValidPhoneNumber: true,
      isValidEmail: true,
    };
  },
  methods: {
    validatePhoneNumber() {
      const phoneRegex = /^(06|05)\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/; // Modify this regex based on the desired phone number format
      this.isValidPhoneNumber = phoneRegex.test(this.phoneNumber);
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Modify this regex based on the desired phone number format
      this.isValidEmail = emailRegex.test(this.email);
    },
    async submitSignUp() {
      const isSignupSucc = await this.$store.dispatch("user/signup", {
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        adress: this.adress,
        phoneNumber: this.phoneNumber,
      });
      isSignupSucc ? this.$router.push("/login") : (this.isError = true);
    },
  },
  async created() {
    const username = localStorage.getItem("username");
    username ? this.$router.push("/") : "";
  },
};
</script>

<style>
.sign-up {
  margin-top: 60px;
  padding: 25px;
}

.sign-up h1 {
  margin-bottom: 50px;
}

.sign-up label {
  display: flex;
  margin-bottom: 6px;
}

.sign-up input {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  display: block;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.sign-up button {
  width: 200px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
}

.error-msg {
  color: red;
  text-align: start;
}
</style>