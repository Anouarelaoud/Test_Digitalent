<template>
  <CanvasJSChart :options="options" />
</template>

<script>
export default {
  name: "BasicChart",
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        title: {
          text: "Basic Chart",
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "product 1", y: 10 },
              { label: "product 2", y: 15 },
              { label: "product 3", y: 25 },
              { label: "product 4", y: 30 },
              { label: "product 5", y: 28 },
              { label: "product 6", y: 10 },
              { label: "product 7", y: 15 },
              { label: "product 8", y: 25 },
              { label: "product 9", y: 30 },
              { label: "product 10", y: 28 },
            ],
          },
        ],
      },
    };
  },
};
</script>