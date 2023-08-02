<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" v-on:click="home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="charts">Charts</a>
      </li>
      <li class="nav-item logout">
        <a class="nav-link" v-on:click="logOut">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/");
    },
    charts() {
      this.$router.push("/charts");
    },
  },
};
</script>

<style >
.navbar {
  margin-bottom: 50px;
}

.navbar-nav {
  flex-direction: row !important;
}

.nav-item {
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
}

.navbar li:hover {
  background: #0d6efd99;
  border-radius: 10px;
}

.logout {
  position: absolute;
  right: 20px;
}
</style>