<template>
  <div class="box">
    <header class="centers">
      <img src="../../assets/img/logo/png8.png" alt />
      <span style="font-weight: 700;">全品在线</span>
      <i>|</i>
      <span>登录系统</span>
    </header>
    <section class="centers">
      <div>
        <img src="../../assets/img/dagou/png24.png" alt />
        <span>重置密码成功!</span>
      </div>
      <p>{{num}}s跳转</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 4
    };
  },
  mounted() {
    --this.num;
    let set = window.setInterval(() => {
      if (this.num-- <= 1) {
        this.num = 3;
        window.clearInterval(set);
        this.$router.push("/");
      }
    }, 1000);
  }
};
</script>

<style scoped>
header {
  height: 62px;
  background-color: #1b73b0;
  color: #fff;
  font-size: 19px;
}
header img {
  width: 27px;
  height: 32px;
  margin-right: 5px;
}
header i {
  margin: 0 5px;
}
.box {
  background-color: #f5f5f5;
}
section {
  height: 175px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(229, 229, 229, 1);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: column;
}
section div {
  display: flex;
  align-items: center;
  margin-top: -35px;
}
section div img {
  width: 42px;
  height: 42px;
  margin-right: 14px;
}
section p {
  width: 151px;
  height: 33px;
  background: rgba(27, 115, 176, 1);
  border-radius: 4px;
  text-align: center;
  line-height: 33px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  margin-top: 35px;
  cursor: pointer;
}
</style>