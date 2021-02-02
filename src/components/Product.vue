<template>
  <div id="product_page">
    <h3 class="i18n">产品展示</h3>
    <span>丰富的游戏产品与种类</span>

    <ul>
      <li v-for="(item, index) in upperdiv" :key="index">
        <div class="product_list">
          <a style="user-select: none"
            ><img :src="item.image" draggable="false"
          /></a>
          <h4>{{ item.title }}</h4>
          <p>
            {{ item.subtitle }}
          </p>
        </div>
      </li>
    </ul>
    <!-- second div -->
    <ul>
      <li v-for="(item, index) in belowdiv" :key="index">
        <div class="product_list">
          <a style="user-select: none"><img :src="item.image" /></a>
          <h4>{{ item.title }}</h4>
          <p>
            {{ item.subtitle }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upperdiv: [
        {
          image: require("../assets/product/33.png"),
          title: "百家乐",
          subtitle:
            "荷官会派出「庄家」和「闲家」两份牌，百家乐口诀技巧：见庄跟庄，见闲跟闲，见跳跟跳，损三暂停，亏五赢六，止于五五。",
        },
        {
          image: require("../assets/product/22.png"),
          title: "龙虎",
          subtitle:
            "以牌面大小来决定输赢的桌牌游戏。 牌面大小区分花色，再比点数，K为最大牌，A为最小",
        },
        {
          image: require("../assets/product/33.png"),
          title: "庄闲牛",
          subtitle:
            "庄闲牛玩法和牛牛类似，只发2门牌，可以投注闲牛或庄牛，赔率和牛牛一致。",
        },
        {
          image: require("../assets/product/22.png"),
          title: "牛牛",
          subtitle:
            "牛牛，又名斗牛，可同时多人进行的简单押分类棋牌游戏，每局游戏系统自动洗牌后将5张牌均匀分给给各位玩家。玩家拿到牌后根据一定的游戏规则进行",
        },
      ],
      belowdiv: [
        {
          image: require("../assets/product/1.png"),
          title: "大小",
          subtitle:
            "骰宝（Sic Bo）一般称为赌大小，是一种用骰子赌博的方法。骰宝是由各闲家向庄家下注。每次下注前，庄家先把三颗骰子从器皿中丢下摇晃。当各闲家下",
        },
        {
          image: require("../assets/product/33.png"),
          title: "推筒子",
          subtitle:
            "推筒子是一款二八杠游戏，又称疯狂牌九，是利用中国传统游戏麻将中单一色筒子牌（一筒到九筒，每一种花色 4 张牌，一共 36 张牌），外加白板 4 张牌",
        },
        {
          image: require("../assets/product/1.png"),
          title: "炸金花",
          subtitle:
            "游戏中分为红.黑两大区域以及豹子,顺金,金花,顺子,对子特殊牌型区域，共3个顺序.下注结束后展示红.黑两方牌.展示结束后，按照牌型规则进行大小比较.",
        },
        {
          image: require("../assets/product/22.png"),
          title: "单双",
          subtitle:
            "单双也是一种用骰子娱乐的游戏，庄家先把二颗骰子放在的器皿内从上丢下，根据最终的骰点相加判断单双。",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#product_page {
  background: #ffffff;
  background-image: url(https://img2.54ei.com/hn/index/imgs/product_bg.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  height: 920px;
  h3 {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    padding-top: 66px;
    margin-bottom: 14px;
    color: #ffc44c;
    // background: red;
  }
  span {
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 20px;
    display: block;
    margin-bottom: 50px;
    color: #ececec;
  }
  ul {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    background: red;
    li {
      float: left;
      width: 25%;
      padding-right: 1%;
      padding-left: 1%;
      padding-bottom: 2%;
      // background: green;
      list-style: none;
    }
  }
  .product_list {
    display: block;
    position: relative;
    width: 100%;
    height: 305px;
    /* background-color: rgba(128, 128, 128, 0.1); */
    background-color: rgba(255, 251, 210, 0.15);
    color: #ffffff;
    border: 1px solid rgba(254, 213, 124, 0.15);
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 12px;
    overflow: hidden;
    a {
      background-color: transparent;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    img {
      margin-top: 16px;
      margin-bottom: 16px;
      vertical-align: middle;
      text-align: center;
      max-width: 100%;
    }
    h4 {
      margin-bottom: 14px;
      /* color: #ffc44c; */
      color: #e4b148;
      text-align: center;
    }
    p {
      letter-spacing: 0.5px;
      font-size: 14px;
      display: -webkit-box;
      word-break: break-all;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      orientation: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      font-weight: bold;
    }
  }
}
</style>