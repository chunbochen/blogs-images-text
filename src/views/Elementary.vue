<template>
  <div class="Elementary">
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
        capabilityName: "初级前端",
        capabilityDescription: "HTML5 CSS3",
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
.about {
  background-color: #ebeef5;
}
</style>
