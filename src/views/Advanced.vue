<template>
  <div class="advanced">
    <!-- 通用头部组件 -->
    <GeneralPurposeModuleHeader :data="intro"></GeneralPurposeModuleHeader>
  </div>
</template>
<script>
import GeneralPurposeModuleHeader from "../components/generalHeader/index.vue";
export default {
  data() {
    return {
      intro: {
        capabilityName: "高级前端",
        capabilityDescription: "VUE",
        capabilityLabel:
          "水香木鱼",
        img: require("../assets/diaodumingling.png"),
      },
    };
  },
  components: {
    GeneralPurposeModuleHeader,
  },
};
</script>
<style lang="scss" scoped>
.advanced {
  background-color: #ebeef5;
}
</style>
