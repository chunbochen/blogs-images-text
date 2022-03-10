<template>
  <div class="demo">
    <!-- 通用头部组件 -->
    <GeneralPurposeModuleHeader :data="intro"></GeneralPurposeModuleHeader>
  </div>
</template>
<script>
import GeneralPurposeModuleHeader from "../../components/generalPurposeModuleHeader.vue";
export default {
  data() {
    return {
      intro: {
        capabilityName: "案例分析库",
        capabilityDescription: "模块化开发",
        capabilityLabel:
          "CSDN 水香木鱼 案例库",
        img: require("../../assets/diaodumingling.png"),
      },
    };
  },
  components: {
    GeneralPurposeModuleHeader,
  },
};
</script>
<style lang="scss" scoped>
.demo {
  background-color: #ebeef5;
}
</style>
