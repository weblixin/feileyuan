<template>
  <div>
  <ul class="advertise">
    <li class="ad-item">
      <img :src="ad_img" alt="">
    </li>
    <li class="ad-item">
      <img :src="ad_img" alt="">
    </li>
  </ul>

  </div>
</template>

<script>
  export default {
    name: "advertise",
    data() {
      return {
        ad_img: require("../../../../assets/images/home/advertise/ad1.jpg")
      }
    }
  }
</script>

<style scoped>
  .advertise {
    height: 400px;
    margin-bottom: 30px;
  }

  .ad-item {
    border-radius: 5px;
    margin-bottom: 16px;
  }

  .ad-item:last-child {
    margin-bottom: 0;
  }

  .ad-item img {
    width: 100%;
    height: 192px;
    display: block;
  }
</style>