<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.login input,
.sign-up input,
.profile-info input {
  width: 300px;
  height: 40px;
  padding-left: 5px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.login button,
.sign-up button,
.profile-info button {
  width: 200px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
}

.login,
.sign-up {
  margin-top: 60px;
}

.sign-up label,
.profile-info label {
  display: flex;
  margin-left: 25px;
  margin-bottom: 6px;
}

.login h1,
.sign-up h1,
.profile-info h1 {
  margin-bottom: 40px;
}

.navbar {
  margin-bottom: 55px;
}

.nav-item {
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
}

.logout {
  position: absolute;
  right: 20px;
}

.navbar li:hover {
  background: #0d6efd99;
  border-radius: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
