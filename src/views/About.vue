<template>
  <div class="about">
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
        capabilityName: "关于我",
        capabilityDescription: "个人履历",
        capabilityLabel:
          "花名: 水香木鱼",
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
