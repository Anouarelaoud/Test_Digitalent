
<template>
  <NavBar />
  <div v-if="isLogged" class="profile-info">
    <h1>Profile informations</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <label for="username">Username</label>
        <input v-model="username" type="text" class="form-control" disabled />
        <label for="email">Email</label>
        <input v-model="email" type="email" class="form-control" disabled />
        <label for="adress">Adress</label>
        <input v-model="adress" type="text" class="form-control" disabled />
      </div>
      <div class="col-md-3">
        <label for="firstName">First name</label>

        <input v-model="firstName" type="text" class="form-control" disabled />
        <label for="lastName">Last name</label>
        <input v-model="lastName" type="text" class="form-control" disabled />
        <label for="phoneNumber">Phone number</label>
        <input
          v-model="phoneNumber"
          type="text"
          class="form-control"
          disabled
        />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
// import axios from "axios";

export default {
  name: "Home",
  components: { NavBar },
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
      isLogged: false,
    };
  },
  async created() {
    let token = localStorage.getItem("token");

    // fetch UserInfo by calling api

    // const response = await axios.get("http://localhost:3000/user", {
    //   headers: {
    //     Authorization: "Bearer" + token,
    //   },
    // });
    // if (response.status !== 200) this.$router.push({ name: "Login" });
    // let user = response.data;

    let user = JSON.parse(localStorage.getItem("user-info"));
    if (token && user) {
      this.isLogged = true;
      this.username = user.username;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.adress = user.adress;
      this.phoneNumber = "0" + parseInt(user.phoneNumber);
    } else this.$router.push({ name: "Login" });
  },
};
</script>
