<template>
  <div>
    <div class="home">
      <!--  -->

      <Banner></Banner>
      <Info></Info>
      <GameCard></GameCard>

      <DataPage></DataPage>
      <Product></Product>
      <!--  -->
      <div class="footer_page">
        <footer>COPYRIGHT © HUANA INTERNATIONAL RESERVED.</footer>
        <div class="sidebar">
          <ul>
            <li class="qq_wx">
              <i class="icon icon-kefu"></i>
              <span>在线客服</span>
              <div class="qqsection">
                <div class="parent">
                  <img src="../assets/home/fix.png" alt="" />
                  <div class="qqtext">Qq:{{ this.qq }}</div>
                  <div class="wxtext">Wx:{{ this.wx }}</div>
                  <div class="phtext">Ph:{{ this.ph }}</div>
                </div>
              </div>
              <!-- <div class="qqparent">
                <div class="qqtext">
                  Qq:{{this.qq}}</div>
                <div class="wxtext">Wx:{{this.wx}}</div>
                <div class="phtext">Ph:10011905757</div>
              </div> -->
            </li>
            <!--  -->
            <li class="app_down">
              <i class="icon icon-app"></i><span>APP下载</span>
              <div class="qrcode_div">
                <img src="../../public/hn18881qr.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard";
import Banner from "../components/Banner";
import Product from "../components/Product";
import DataPage from "../components/DataPage";
import Info from "../components/Info";
// import Footer from "../components/Footer";
import AES from "../api/aes";
import { Base64 } from "js-base64";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    GameCard,
    Banner,
    Product,
    DataPage,
    Info,
  },
  data() {
    return {
      qq: "",
      wx: "",
      ph: "",
    };
  },
  methods: {
    GetAgentdata(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);

      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            this.$Global.optioner.Agentid = msg.JsonData.Id;
            this.$Global.optioner.Agentname = msg.JsonData.name;
            this.qq = msg.JsonData.QQ;
            this.wx = msg.JsonData.WXH;
            this.ph = msg.JsonData.phone;
            this.$Global.optioner.QQ = msg.JsonData.QQ;
            this.$Global.optioner.WX = msg.JsonData.WXH;
            this.$Global.optioner.PH = msg.JsonData.phone;

            // console.log(this.$Global.optioner.Agentname);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    randomString(len, charSet) {
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },
    doEncrypt() {
      let data = {
        acc: this.$store.state.myAccount,
        pwd: this.$md5(this.$store.state.myPassword),
        agent: 3, // 1.hn 2.wl 3.hngs 4.ws 5.kb
      };
      // console.log(data);
      // let data ={
      //   acc:"admin",
      //   pwd:this.$md5("111111")
      // }
      let data1 = Base64.encode(JSON.stringify(data));
      let data2 = data1.substring(0, 8);
      let data3 = data1.substring(8);
      let add8 = data2 + this.randomString(8);
      let token = this.randomString(9) + add8 + data3;
      // console.log(data1, data2, data3, add8, token)
      return token;
    },
    Calcutime() {
      var timestampInSeconds = Math.floor(Date.now() / 1000);
      var date = new Date(timestampInSeconds * 1000);
      var mill = new Date(date).getTime() / 1000;
      return mill;
    },
    //onliine service pic click and go to customer service
    Service() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        let token = this.doEncrypt();
        window.open(`http://kefu.hn885.com?token=${token}`);
      }
    },
  },
  computed: {
    ...mapState({ login: (state) => state.login }),
    ...mapGetters(["loginGetter"]),
  },
  created() {
    // console.log(window.location.href);
    var url = window.location.href;
    //var url = "http://21019.hn232.com";
    // var s = url;
    //  console.log("ss", s);
    var a = url.split(".")[0];
    // console.log("h is", a);
    var userid = a.split("//")[1];
    //  console.log(userid,"a isssssssssssssss")
    this.GetAgentdata(userid);
    // console.log(this.Calcutime());
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #2b2b32;
  width: 100%;
  margin-top: 86px;
  // background: url(https://img2.54ei.com/hn/index/imgs/bg.jpg);
  // background-size: cover;
  position: relative;
}

//footer

.footer_page {
  width: 100%;
  position: relative;
}
footer {
  background-color: #2b2b32;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffc34c;
  font-size: 14px;
}
.sidebar {
  position: fixed;
  bottom: 100px;
  z-index: 998;
  right: 30px;
  ul {
    font-size: 14px;
    color: #fff;

    li:hover {
      span {
        display: block;
      }
      .icon-kefu {
        display: none;
      }
      .qq {
        display: block;
      }
      .wx {
        display: block;
      }
    }
    li {
      width: 50px;
      height: 50px;
      margin-top: 10px;
      text-align: center;
      border-radius: 3px;
      position: relative;
      transition: 0.3s;
      cursor: pointer;
      list-style: none;
      background: #a87c25;
      i {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        font-size: 38px;
      }

      span {
        padding: 8px 5px;
        position: relative;
        z-index: 1;
        line-height: 1;
        display: none;
        font-size: 16px;
      }
      .icon-kefu {
        background: url(../assets/home/ic_kf.svg) no-repeat 50%;
      }
      .icon-app {
        background: url(../assets/home/ic_app.svg) no-repeat 50%;
      }
    }
  }
}
.app_down {
  width: 50px;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  border-radius: 3px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  list-style: none;
  background: #a87c25;
}
.app_down:hover {
  .qrcode_div {
    display: block;
  }
  .icon-app {
    display: none;
  }
}
.qrcode_div {
  position: fixed;
  bottom: 80px;
  z-index: 998;
  right: 100px;
  //   height: 50px;
  //   background: red;
  //   width: 50px;
  display: none;
  img {
    height: 200px;
    width: auto;
  }
}
.qqsection {
  display: none;
  height: auto;
  width: 150px;
  position: fixed;
  right: 100px;
  bottom: 100px;
  //  background: red;
  .parent {
    position: relative;
    img {
      height: auto;
      width: auto;
    }
  }
  .qqtext {
    position: absolute;
    top: 90px;
    left: 20px;
    font-weight: bold;
    font-size: 16px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    text-align: center;
  }
  .wxtext {
    position: absolute;
    top: 160px;
    left: 20px;
    font-weight: bold;
    font-size: 16px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    text-align: center;
  }
  .phtext {
    position: absolute;
    top: 230px;
    left: 20px;
    font-weight: bold;
    font-size: 16px;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    text-align: center;
  }
}
.qq_wx:hover {
  .qqsection {
    display: block;
  }
}
// .qqparent {
//   display: none;
//   height: 280px;
//   width: 150px;
//   position: fixed;
//   right: 100px;
//   bottom: 100px;
//   background: red;
//   background: url(../assets/home/fix.png);
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
//   .qqtext {
//     font-weight: bold;
//     font-size: 17px;
//     white-space: normal;
//     word-wrap: break-word;
//     word-break: break-all;
//     text-align: center;
//     margin-top: 100px;
//   }
//   .wxtext {
//     font-weight: bold;
//     font-size: 17px;
//     white-space: normal;
//     word-wrap: break-word;
//     word-break: break-all;
//     text-align: center;
//     margin-top: 40px;
//   }
//   .phtext {
//     font-weight: bold;
//     font-size: 17px;
//     white-space: normal;
//     word-wrap: break-word;
//     word-break: break-all;
//     text-align: center;
//     margin-top: 40px;
//   }
// }
</style>
