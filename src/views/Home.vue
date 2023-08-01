
<template>
  <NavBar />
  <div class="profile-info">
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
import NavBar from "../components/layout/Navbar";

export default {
  components: { NavBar },
  data() {
    return {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      phoneNumber: "",
    };
  },
  async created() {
    const username = localStorage.getItem("username");
    !username ? this.$router.push("/login") : "";
    const user = await this.$store.dispatch("user/getUser", {
      username: username,
    });
    if (!user) {
      this.$router.push("/login");
      return;
    }
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.adress = user.adress;
    this.phoneNumber = "0" + parseInt(user.phoneNumber);
    this.isLogged = true;
  },
};
</script>

<style>
.profile-info {
  margin-top: 60px;
  padding: 25px;
}

.profile-info h1 {
  margin-bottom: 50px;
}

.profile-info label {
  display: flex;
  margin-bottom: 6px;
}

.profile-info input {
  width: 100%;
  height: 40px;
  padding-left: 5px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
</style>