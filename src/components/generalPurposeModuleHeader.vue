<template>
  <div class="tky-module">
    <div class="tky-banner">
      <img class="banner-bg" :src="data.img">
      <div class="banner-inner">
        <div class="title">{{ data.capabilityName }}</div>
        <div class="description">{{ data.capabilityDescription }}</div>
        <div class="label">{{ data.capabilityLabel }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cover',
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    
  },
  mounted() {},
}
</script>

<style lang='scss' scoped>
// 封面图
.tky-banner {
  margin-top: 16px;
  height: 320px;
  border-radius: 2px;
  position: relative;
  padding: 96px 0 0;
  background-color: #edf1f4;

  .banner-bg {
    position: absolute;
    right: 0;
    top: 0;
    height: 320px;
    width: 100%;
  }

  .banner-inner {
    z-index: 1;
    position: relative;
    left: 104px;
    .title {
      line-height: 56px;
      font-size: 40px;
      font-family: PingFangSC-Bold, PingFang SC;
      font-weight: bold;
      color: #fff;
    }
    .description {
      width: 50%;
      font-size: 24px;
      line-height: 33px;
      margin-top: 8px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #fff;
    }
    .label {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #fff;

      margin-top: 17px;
    }
  }
}
</style>