<template>
  <nav v-if="isLogged" class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/charts">Charts</a>
      </li>
      <li class="nav-item logout">
        <a class="nav-link" v-on:click="LogOut">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    LogOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    let token = localStorage.getItem("token");
    token ? (this.isLogged = true) : this.$router.push({ name: "Login" });
  },
};
</script>

