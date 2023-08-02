
<template>
  <NavBar />
  <div class="profile-info">
    <h1>Profile informations</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <span for="username">Username</span>
        <input v-model="username" type="text" class="form-control" disabled />
        <span for="email">Email</span>
        <input v-model="email" type="email" class="form-control" disabled />
        <span for="adress">Adress</span>
        <input v-model="adress" type="text" class="form-control" disabled />
      </div>
      <div class="col-md-3">
        <span for="firstName">First name</span>

        <input v-model="firstName" type="text" class="form-control" disabled />
        <span for="lastName">Last name</span>
        <input v-model="lastName" type="text" class="form-control" disabled />
        <span for="phoneNumber">Phone number</span>
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", ["user"]),
  },
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

.profile-info span {
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