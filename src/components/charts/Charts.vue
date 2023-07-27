<template>
  <NavBar />
  <BasicChart class="chart" />
  <AnimatedChart class="chart" />
  <DrillDownChart class="chart" />
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import BasicChart from "@/components/charts/BasicChart";
import AnimatedChart from "@/components/charts/AnimatedChart";
import DrillDownChart from "@/components/charts/DrillDownChart";

export default {
  name: "Charts",
  components: { NavBar, BasicChart, AnimatedChart, DrillDownChart },
};
</script>

<style>
.chart {
  margin-bottom: 150px;
}
</style>