<template>
  <div id="data_page">
    <div class="detail-title">
      <h5 class="i18n">业务服务</h5>
      <div>
        <span>[HN GAMING]</span>
        <p>Business service</p>
      </div>
    </div>
    <!-- card section -->
    <div class="detail-list">
      <!-- first two card-->
      <div class="list-box">
        <!-- one -->
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/api.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i>
            </span>
            <div>
              <h5 class="i18n">API接入</h5>
              <p class="i18n">24/7全天候</p>
            </div>
            <!-- btn -->
            <a href="javascript:void(0);" class="detail-services i18n"
              >联系客服</a
            >
          </div>
          <div class="desc">
            将HN真人娱乐城产品介接整合至用户端，均可藉由API整合至客户现有平台。
          </div>
        </div>
        <!-- two -->
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/dn.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">网站建设</h5>
              <p class="i18n">上百款模板挑选</p>
            </div>
          </div>
          <div class="desc">
            为客户提供完整网站包套方案，HN将建置步骤化繁为简，您无需烦恼从何下手设计视觉及版型
          </div>
        </div>
        <!--  -->
      </div>
      <!-- second two card -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/userchat.png"
                draggable="false"
                alt="" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>运营商接入</h5>
              <p>24/7全天候</p>
            </div>
          </div>
          <div class="desc i18n">
            24/7全天候接入保障运营商业务全年平稳运行。
          </div>
        </div>

        <div class="detail-box language">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/language.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>支持多语言</h5>
              <p>全球畅玩，多语言支持</p>
            </div>
          </div>

          <div class="language-imgs">
            <div
              class="imgs_parent"
              v-for="(item, index) in language"
              :key="index"
            >
              <img :src="item.image" alt="" draggable="false" />
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- section three -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/customer.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5 class="i18n">客户遍布亚洲</h5>
              <p class="i18n">1000多家运营商</p>
            </div>
          </div>
          <div class="desc i18n">
            HN GAMING 提供多种独特
            的线上真人游戏。独家提供抢红包功能。玩家随时可以抢红包！
          </div>
        </div>

        <div class="detail-box language">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/chip.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">HN casino</h5>
              <p class="i18n">视讯游戏</p>
            </div>
          </div>

          <div class="language-imgs">
            <div class="imgs_parent" v-for="(item, index) in game" :key="index">
              <img :src="item.image" alt="" draggable="false" />
              <span>{{item.text}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- section four -->
      <div class="list-box">
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img
                src="../assets/home/features.png"
                alt=""
                draggable="false" /><i style="background: #ff4b00"></i
            ></span>
            <div>
              <h5>业务服务</h5>
              <p>彰显客户的品牌格调</p>
            </div>
          </div>
          <div class="desc">
            提供客制化游戏专厅服务，可因应客户要求，量身打造气派别树一帜的游戏专厅。
          </div>
        </div>
        <div class="detail-box api">
          <div class="float-title">
            <span class="icon-imgs"
              ><img src="../assets/home/ai.png" alt="" draggable="false" /><i
                style="background: #ff4b00"
              ></i
            ></span>
            <div>
              <h5 class="i18n">智控咪牌</h5>
              <p class="i18n">互动感直迫真实赌场</p>
            </div>
          </div>
          <div class="desc i18n">
            真人视讯游戏的移动应用程式设有智控咪牌模式，带领玩家进入百家乐的新境界。
          </div>
        </div>
      </div>
      <!-- section four end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: [
        {
          image: require("../assets/home/cn.png"),
          text: "CN",
        },
        {
          image: require("../assets/home/en.png"),
          text: "EN",
        },
        {
          image: require("../assets/home/th.png"),
          text: "TH",
        },
        {
          image: require("../assets/home/tw.png"),
          text: "TW",
        },
        {
          image: require("../assets/home/vn.png"),
          text: "VN",
        },
      ],
      game: [
        {
          image: require("../assets/home/bjl.png"),
          text: "百家乐",
        },
        {
          image: require("../assets/home/lh.png"),
          text: "龙华斗",
        },
        {
          image: require("../assets/home/lp.png"),
          text: "炸金花",
        },
        {
          image: require("../assets/home/nn.png"),
          text: "牛牛",
        },
        {
          image: require("../assets/home/sd.png"),
          text: "推筒子",
        },
        {
          image: require("../assets/home/sz.png"),
          text: "大小点",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#data_page {
  display: block;
  position: relative;
  width: 100%;
  /* background: #ffffff; */
  /* background: url(../imgs/bg.png); */
  background: url(../assets/home/bg.jpg);
  border-bottom: 3px solid #9c7720;
  padding: 50px 0;
  background-size: cover;
  .detail-title {
    display: flex;
    align-items: flex-start;
    position: relative;
    z-index: 1;
    width: 1200px;
    margin: auto;
    margin-bottom: 50px;
    color: #ececec;
    h5 {
      text-transform: uppercase;
      font-size: 30px;
      color: #ffc44c;
    }
  }
}
.detail-list {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: auto;
  .list-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background: red;
    border-radius: 12px;
    width: 270px;

    .api {
      height: 48%;
      //   margin-bottom: 20px;
    }
    .detail-box {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      margin-bottom: 20px;

      //   background: red;
      background-color: rgba(255, 251, 210, 0.15);
      color: #ffffff;
      border: 1px solid rgba(254, 213, 124, 0.15);
      box-sizing: border-box;
      padding: 0 20px;
      border-radius: 12px;
      overflow: hidden;
      .float-title {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 25px 0;
        .icon-imgs {
          display: flex;
          position: relative;
          font-size: 38px;
          color: #ffc44c;
          letter-spacing: 0;
          line-height: 40px;
          padding: 0 11px 0 0;
          margin: 0 8px 0 0;
          img {
            max-width: 100%;
            border: 0;
            vertical-align: middle;
          }
          i {
            display: block;
            position: absolute;
            width: 3px;
            height: 35px;
            top: 0;
            right: 0;
            background: #ff4b00;
          }
        }
        a {
          display: flex;
          align-items: center;
          height: 30px;
          border-radius: 8px;
          box-sizing: border-box;
          background: hsla(0, 0%, 0%, 0.6);
          //   border: 1px solid rgb(155, 119, 31, 0.6);
          box-shadow: 0 13px 15px 0 rgba(0, 0, 0, 0.03);
          backdrop-filter: blur(10px);
          padding: 0 10px;
          margin-left: auto;
          text-decoration: none;
          color: #fff;
          font-size: 15px;
        }
        a:hover {
          color: red;
        }
      }
      .desc {
        margin-bottom: 20px;
      }
    }
  }
}
.detail-box .language {
  height: 48%;
}
.language-imgs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100% !important;
  //   height: 50px;
  //   background: red;
  overflow: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  //   background: red;
  .imgs_parent {
    flex: 0 0 50px;
    // width: 50px;
    // background: green;
    // width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    animation: slide 10s infinite;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 25px;
    animation: bannermove 10s linear infinite;
    cursor: pointer;
    img {
      width: 100%;
      user-select: none;
    }
    span {
      text-align: center;
      padding-top: 3px;
    }
  }
  .imgs_parent:hover {
    span {
      color: red;
    }
  }
}
.language-imgs::-webkit-scrollbar {
  display: none;
}
@keyframes bannermove {
  0% {
    transform: translate(50%, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>