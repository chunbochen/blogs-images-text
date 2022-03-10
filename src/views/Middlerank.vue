<template>
  <div class="middlerank">
    <!-- 通用头部组件 -->
    <GeneralPurposeModuleHeader :data="intro"></GeneralPurposeModuleHeader>
  </div>
</template>
<script>
import GeneralPurposeModuleHeader from "../components/generalPurposeModuleHeader.vue";
export default {
  data() {
    return {
      intro: {
        capabilityName: "中级前端",
        capabilityDescription: "javaScript typeScript",
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
.middlerank {
  background-color: #ebeef5;
}
</style>
