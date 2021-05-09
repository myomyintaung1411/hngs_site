<template>
  <div class="header_main">
    <header class="header">
      <div class="header_1200 flex_center">
        <div class="logo"></div>
        <div class="menu_list">
          <div class="menu">
            <span
              :class="{ nav_border: active_tab == 1 }"
              @click="TabClick(1)"
              v-scroll-to="'#carousal'"
              >首页</span
            >
            <span
              :class="{ nav_border: active_tab == 2 }"
              @click="TabClick(2)"
              v-scroll-to="'#info_page'"
              >公司信息</span
            >
            <span
              :class="{ nav_border: active_tab == 3 }"
              @click="TabClick(3)"
              v-scroll-to="'#game_card'"
              >游戏</span
            >
            <span
              :class="{ nav_border: active_tab == 4 }"
              @click="TabClick(4)"
              v-scroll-to="'#data_page'"
              >业务</span
            >
            <span
              :class="{ nav_border: active_tab == 5 }"
              @click="TabClick(5)"
              v-scroll-to="'#product_page'"
              >产品</span
            >
            <span
              :class="{ nav_border: active_tab == 5 }"
              @click="openPayment()"
              >付款</span
            >
            <span :class="{ nav_border: active_tab == 5 }" @click="openDraw()"
              >提款</span
            >
          </div>
        </div>
        <div class="login-obj">
          <div class="login_sec">
            <div class="login_btn" @click="openRegister()">注册</div>
            <div
              class="login_btn reg"
              @click="openLogin()"
              v-if="this.$store.state.login"
            >
              已登录
            </div>
            <div class="login_btn reg" @click="openLogin()" v-else>登录</div>
            <!-- <div class="name" v-if="this.$store.state.login == true">
              {{ this.$Global.myLoginInfo.loginName }}
            </div> -->
          </div>
        </div>
        <!-- name -->
        <div class="name" v-if="this.$store.state.login == true">
          {{ this.$Global.myLoginInfo.loginName }}
        </div>
        <!-- name -->
      </div>
    </header>
    <!-- reg -->
    <div class="wrapper" v-if="RegisterDialog">
      <img
        src="../assets/closesearch.png"
        alt=""
        @click="CloseDialog"
        class="close-img"
      />
      <div class="title">华纳公司</div>
      <form class="form" novalidate @submit.prevent="Register">
        <div class="field">
          <input
            type="text"
            required
            autocomplete="off"
            v-model="register.name"
          />
          <label>请输入账号</label>
        </div>

        <div class="field">
          <input
            type="password"
            required
            autocomplete="off"
            v-model="register.pass"
          />
          <label>请输入密码</label>
        </div>

        <div class="field">
          <input
            type="password"
            required
            autocomplete="off"
            v-model="register.checkpass"
          />
          <label>请确认密码</label>
        </div>

        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="register.phone"
          />
          <label>请输入手机号</label>
        </div>

        <div class="field">
          <input type="submit" value="注册账号" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- login -->

    <div class="wrapper" v-if="LoginDialog">
      <img
        src="../assets/closesearch.png"
        alt=""
        @click="CloseLoginDialog"
        class="close-img"
      />
      <div class="title">华纳公司</div>
      <form class="form" novalidate @submit.prevent="Login">
        <div class="field">
          <input
            type="text"
            required
            autocomplete="off"
            v-model="login.username"
          />
          <label>请输入账号</label>
        </div>

        <div class="field">
          <input
            type="password"
            required
            autocomplete="off"
            v-model="login.password"
          />
          <label>请输入密码</label>
        </div>

        <div class="field">
          <input type="submit" value="登录" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- payment -->
    <div class="wrapper" v-if="PaymentDialog">
      <img
        src="../assets/closesearch.png"
        alt=""
        @click="ClosePaymentDialog"
        class="close-img"
      />
      <div class="title">华纳公司</div>
      <form class="form" novalidate @submit.prevent="SumbitPay">
        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="payment.amount"
          />
          <label>请输入转账金额</label>
        </div>

        <div class="field">
          <input type="submit" value="立即支付" />
          <!-- <button class="btn-regi">注册账号</button> -->
        </div>
      </form>
    </div>

    <!-- draw -->
    <!-- <div class="wrapper" v-if="WithdrawDialog">
      <img
        src="../assets/closesearch.png"
        alt=""
        @click="CloseDrawDialog"
        class="close-img"
      />
      <div class="title">华纳公司</div>
      <form class="form" novalidate @submit.prevent="Draw">
        <div class="field">
          <input
            type="text"
            required
            autocomplete="off"
            v-model="withdrawl.bankname"
          />
          <label>请输入银行名称</label>
        </div>

        <div class="field">
          <input
            type="password"
            required
            autocomplete="off"
            v-model="withdrawl.bankaccount"
          />
          <label>请输入银行账户名称</label>
        </div>

        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="withdrawl.bankcard"
          />
          <label>请输入银行账号</label>
        </div>

        <div class="field">
          <input
            type="number"
            required
            autocomplete="off"
            v-model="withdrawl.withdrawmoneyamount"
          />
          <label>请输入取款金额</label>
        </div>

        <div class="field">
          <input type="submit" value="立即取款" />
        
        </div>
      </form>
    </div> -->
    <!-- end of draw payment -->
  </div>
</template>

<script>
import AES from "@/api/aes";
export default {
  data() {
    return {
      active_tab: 1,
      register: {
        name: "",
        pass: "",
        checkpass: "",
        phone: "",
      },
      login: {
        username: "",
        password: "",
      },
      payment: {
        amount: "",
      },
      withdrawl: {
        bankname: "",
        bankaccount: "",
        bankcard: "",
        withdrawmoneyamount: "",
      },
      RegisterDialog: false,
      LoginDialog: false,
      PaymentDialog: false,
      WithdrawDialog: false,
    };
  },
  methods: {
    openRegister() {
      this.RegisterDialog = true;
      this.LoginDialog = false;
      this.PaymentDialog = false;
      // this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
    },
    openLogin() {
      if (this.$store.state.login == true) {
        return this.$message.warning("您已登陆成功");
      }

      this.LoginDialog = true;
      this.RegisterDialog = false;
      this.PaymentDialog = false;
      // this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
    },
    openPayment() {
      if (this.$store.state.login == false)
        return this.$message.warning("请先登录");
      this.PaymentDialog = true;
      this.RegisterDialog = false;
      this.LoginDialog = false;
      //this.WithdrawDialog = false;
      document.body.classList.add("modal-open");
      //  return this.$message.warning("请联系客服")
    },
    openDraw() {
      // if (this.$store.state.login == false)
      //   return this.$message.warning("请先登录");
      // this.WithdrawDialog = true;
      // this.PaymentDialog = false;
      // this.RegisterDialog = false;
      // this.LoginDialog = false;
      // document.body.classList.add("modal-open");
      return this.$message.warning("请联系客服");
    },
    CloseDialog() {
      this.RegisterDialog = false;
      document.body.classList.remove("modal-open");
    },
    CloseLoginDialog() {
      this.LoginDialog = false;
      document.body.classList.remove("modal-open");
    },
    ClosePaymentDialog() {
      this.PaymentDialog = false;
      document.body.classList.remove("modal-open");
      this.payment.amount = "";
    },
    CloseDrawDialog() {
      this.WithdrawDialog = false;
      document.body.classList.remove("modal-open");
      this.withdrawl.bankname = "";
      this.withdrawl.bankaccount = "";
      this.withdrawl.bankcard = "";
      this.withdrawl.withdrawmoneyamount = "";
    },
    TabClick(n) {
      if (n == 1) {
        this.active_tab = 1;
      }
      if (n == 2) {
        this.active_tab = 2;
      }
      if (n == 3) {
        this.active_tab = 3;
      }
      if (n == 4) {
        this.active_tab = 4;
      }
      if (n == 5) {
        this.active_tab = 5;
      }
    },
    Register() {
      // console.log("enter register");
      var en = this.$Global.en;
      if (this.register.name == "") return this.$message.warning("请输入账号");
      if (this.register.pass == "") return this.$message.warning("请输入密码");
      if (this.register.checkpass == "")
        return this.$message.warning("请输入确认密码");
      if (this.register.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.register.pass !== this.register.checkpass)
        return this.$message.warning("两次输入密码不一致");

      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.register.phone
        )
      ) {
        return this.$message.warning("手机号码格式不对");
      }

      if (
        !/\d/.test(this.register.pass) ||
        !/[a-zA-Z]/.test(this.register.pass)
      )
        return this.$message.warning("密码必须包含数字和英文字母");

      var agentName = this.$Global.optioner.Agentname;

      if (agentName == "") {
        return this.$message.warning("您打开的网址链接没有携带ID，无法注册");
      }
      // console.log(agentName, "name of agent is777777777");
      let data = {
        name: this.register.name,
        pw: this.$md5(this.register.pass),
        phone: this.register.phone,
        agent: agentName,
      };
      // console.log(data, "sendStr");
      let endata = AES.encrypt(JSON.stringify(data), en);

      //var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.registerurl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
        //  console.log(msg, "response msg of register is");
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            document.body.classList.remove("modal-open");
            this.register.name = "";
            this.register.pass = "";
            this.register.checkpass = "";
            this.register.phone = "";
            this.RegisterDialog = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    Login() {
      var en = this.$Global.en;
      if (this.$store.state.login == true)
        return this.$message.warning("您已登陆成功");
      if (this.login.username == "") return this.$message.warning("请输入账号");
      if (this.login.password == "") return this.$message.warning("请输入密码");

      let logindata = {
        name: this.login.username,
        pw: this.$md5(this.login.password),
      };
      // console.log(logindata,"sdfsdf");

      let endata = AES.encrypt(JSON.stringify(logindata), en);

      // console.log("login endata isssssssss", endata);

      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log("decryptdata isssssssss", decryptdata, en);

      this.axios
        .post(this.$Global.loginurl, { data: endata })
        .then((res) => {
          var body = res.data;
          //console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", body);
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", msg);
          if (msg.JsonData.code == 200) {
            document.body.classList.remove("modal-open");
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.login.username;
            this.$store.state.myPassword = this.login.password;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            // console.log(
            //   "account and password is -------->",
            //   this.$store.state.myPassword,
            //   this.$store.state.myAccount
            // );
            this.login.username = "";
            this.login.password = "";
            this.LoginDialog = false;
            return this.$message.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$message.error("账号或密码错误");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    SumbitPay() {
      if (this.payment.amount == "")
        return this.$message.warning("付款金额不能为空！");
      if (this.payment.amount < 100)
        return this.$message.warning("付款金额不能少于100元");

      // let paymentEn = this.$Global.paymentEn;

      let data = {
        // name: this.$store.state.myAccount,
        id: this.$Global.myLoginInfo.loginId,
        amount: this.payment.amount,
        agent: 3,
        cb: window.location.href,
      };
      // console.log(data);
      const endata = JSON.stringify(data);
      //1：hngj，2：wl ，3：hngs，4：es, 5: kb, 6: xh "http://103.232.84.90:8081"
      // const headers = {
      //   "Access-Control-Allow-Origin": "http://pay.hn885.com/",
      //   "Content-Type": "application/json;charset=UTF-8",
      //   Accept: "application/json",
      //   "Access-Control-Allow-Credentials": "true",
      // };
      // console.log(endata);
      //console.log(this.$Global.PaymentUrl);
      this.axios
        .post(this.$Global.PaymentUrl, endata)
        .then((res) => {
          // console.log(res);
          var body = res.data;
          //   console.log(body);
          if (body.status == "success") {
            window.open(body.data);
            this.payment.amount = "";
            this.PaymentDialog = false;
            document.body.classList.remove("modal-open");
          } else {
            return this.$message.error(body.msg);
          }
        })
        .catch((e) => {
          //document.body.classList.remove("modal-open");
          console.log(e);
          this.$message.error(e.toString());
        });
    },
    Draw() {
      // if (this.withdrawl.bankname == "")
      //   return this.$message.warning("请输入银行名称");
      // if (this.withdrawl.bankname.length < 4)
      //   return this.$message.warning("银行名称应有四位数");
      // if (this.withdrawl.bankaccount == "")
      //   return this.$message.warning("账户名称不能为空！");
      // if (this.withdrawl.bankaccount.length < 2)
      //   return this.$message.warning("账户名称最少两位数");
      // if (this.withdrawl.bankcard == "")
      //   return this.$message.warning("银行卡号不能为空！");
      // if (this.withdrawl.bankcard.length < 16)
      //   return this.$message.warning("银行卡号至少16位！");
      // if (this.withdrawl.withdrawmoneyamount == "")
      //   return this.$message.warning("请输入取款金额");
      // if (this.withdrawl.withdrawmoneyamount < 100)
      //   return this.$message.warning("取款金额不能少于100元");
      // let data = {
      //   id: this.$Global.myLoginInfo.loginId,
      //   bank_name: this.withdrawl.bankname,
      //   bank_account: this.withdrawl.bankaccount,
      //   bank_card: this.withdrawl.bankcard,
      //   amount: this.withdrawl.withdrawmoneyamount, // $amount,
      // };
      // console.log(data);
      // const endata = JSON.stringify(data);
      // this.axios
      //   .post(this.$Global.Withdrawurl, endata)
      //   .then((res) => {
      //     console.log(res);
      //     var body = res.data;
      //     console.log(body);
      //     if (body.status == "success") {
      //       this.withdrawl.bankname = "";
      //       this.withdrawl.bankaccount = "";
      //       this.withdrawl.bankcard = "";
      //       this.withdrawl.withdrawmoneyamount = "";
      //       this.WithdrawDialog = false;
      //       document.body.classList.remove("modal-open");
      //       return this.$message.success(body.msg);
      //     } else {
      //       return this.$message.error(body.msg);
      //     }
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     return this.$message.error(e.toString());
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.header_main {
  width: 100%;
  position: relative;
}
.header {
  height: 86px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2b2b32;
  z-index: 4;
  width: 100%;
  .header_1200 {
    height: 100%;
    margin: 0 auto;
    width: 1200px;
    // background: red;
  }
  .flex_center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    background-size: contain;
    background-repeat: no-repeat;
    width: 190px;
    height: 60px;
    flex: none;
    cursor: pointer;
    background-image: url(../assets/home/logo.png);
  }
  .menu_list {
    // margin-left: 20px;
    flex: 1 1 0;
    font-size: 16px;
    color: #999;
    // background: green;
    justify-content: space-around;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      cursor: pointer;
    }
  }
  .nav_border {
    color: #ecb351;
    border-bottom: 2px solid #ecb351;
  }
  .menu span:hover {
    color: #ecb351;
    border-bottom: 2px solid #ecb351;
    // transition: 0.5s ease-in-out;
  }
}
.name {
  font-size: 20px;
  color: #000;
  font-weight: bold;
  background: #ecb351;
  padding: 13px 10px;
  border-radius: 22px;
  user-select: none;
}
.login-obj {
  min-width: 330px;
  // background-color: #ccc;
  height: 100%;

  .login_sec {
    display: flex;
    height: 100%;
    width: 100%;
    // background: red;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    .login_btn {
      text-align: center;
      cursor: pointer;
      width: 90px;
      height: 48px;
      font-size: 20px;
      color: #ecb351;
      border-radius: 24px;
      border: 1px solid #ecb351;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
    .reg {
      background: #ecb351;
      color: #000;
      font-weight: bold;
    }
  }
}

// register
/* register */
.close-img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2%;
  top: 1%;
  cursor: pointer;
}

.wrapper {
  position: fixed;
  //   top: -50%;
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  left: 35%;
  top: 200px;
  overflow: hidden;
  pointer-events: auto;
  z-index: 1;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #2b2b32, #8f8058);
}
.wrapper .form {
  padding: 10px 30px 50px 30px;
}
.wrapper .form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper .form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper .form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper .form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.form .field input:focus ~ label,
.form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}
.form .content {
  display: flex;
  width: 100%;
  height: 50px;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
}
.form .content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
.form .content input {
  width: 15px;
  height: 15px;
  background: red;
}
.form .content label {
  color: #262626;
  user-select: none;
  padding-left: 5px;
}
.form .content .pass-link {
  color: "";
}
.form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: 13px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #2b2b32, #8f8058);
  transition: all 0.3s ease;
}
.form .field input[type="submit"]:active {
  transform: scale(0.95);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>