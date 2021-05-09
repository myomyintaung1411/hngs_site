<template>
  <div id="info_page">
    <div class="about_detail">
      <h3>华纳公司</h3>
      <p>
        华纳娱乐平台拥有数百位训练有素的专业荷官、真实的赌场环境、稳定的高端设备、专业的技术支持，保障了平台的稳定运营，给予玩家仿佛置身于现场的绝妙体验。并且支持多平台接入，无论玩家目前身处何处，随时可尽情享受游戏的乐趣。
      </p>
      <a class="game-free" @click="TestPlay()"> </a>
      <h6>游戏网址 : http://hn2209.com</h6>
      <h6>推广网址 : {{ site }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: "",
    };
  },
  methods: {
    TestPlay() {
      window.open("http://hn2209.com/?token=");
    },
  },
  created() {
    this.site = window.location.origin;
  },
};
</script>

<style lang="scss" scoped>
#info_page {
  background-image: url(../assets/home/about_bg.jpg);
  background-repeat: no-repeat;
  height: 465px;
  background-position: center top;
  .about_detail {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 690px;
    padding-top: 90px;
    color: #ffffff;
    // background: red;
    h3 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 14px;
      color: #ffc44c;
    }
    h6 {
      font-size: 15px;
      font-weight: bold;
      color: #ffc44c;
      margin-top: 10px;
    }
    p {
      display: block;
      width: 580px;
      letter-spacing: 0.5px;
      font-size: 20px;
    }
  }
  .game-free {
    position: relative;
    display: block;
    width: 120px;
    height: 40px;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10rem;
    margin-top: 14px;
  }
  .game-free:before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(../assets/home/btn_free_pc_cn.gif);
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
  }
}
</style>