<template>
  <div>
    <NavBar />
    <BasicChart class="chart" />
    <AnimatedChart class="chart" />
    <DrillDownChart class="chart" />
  </div>
</template>

<script>
import NavBar from "../components/layout/NavBar";
import BasicChart from "../components/BasicChart";
import AnimatedChart from "../components/AnimatedChart";
import DrillDownChart from "../components/DrillDownChart";

export default {
  components: { NavBar, BasicChart, AnimatedChart, DrillDownChart },
  async created() {
    const isAuth = localStorage.getItem("token");
    !isAuth ? this.$router.push("/login") : "";
  },
};
</script>

<style>
.chart {
  margin-bottom: 150px;
}
</style>