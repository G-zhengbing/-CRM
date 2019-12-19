<template>
  <div class="dabox" ref="message" :class="{display:hideMessage}">
    <div class="warning" v-if="classify.type == 'warning'">
      <img src="../../assets/img/gantanhao/png24.png" alt />
      <span>{{classify.text}}</span>
    </div>
    <div ref="message" class="success" v-if="classify.type == 'success'">
      <img src="../../assets/img/dagou/png24.png" alt />
      <span>{{classify.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["classify"],
  data() {
    return {
      isShow: true,
      hideMessage: true
    };
  },
  mounted() {
    this.$refs.message.addEventListener("webkitAnimationEnd", () => {
      this.$refs.message.style.display = "none";
      if(this.$refs.message.style.display == "none"){
        this.hideMessage = false
      }
    });
  },
  methods: {}
};
</script>

<style scoped>
.display{
  display: block!important;
}
.success {
  font-size: 15px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  display: flex;
  align-items: center;
  animation: runing2 3s linear;
}
.success img {
  width: 22px;
  height: 22px;
  margin-right: 7px;
}

@keyframes runing2 {
  0% {
    margin: 0;
  }
  100% {
    margin: 0;
  }
}

/*  */
.dabox {
  position: absolute;
  top: 86px;
}
.warning {
  width: 228px;
  height: 30px;
  background: rgba(252, 245, 220, 1);
  border: 1px solid rgba(238, 92, 92, 1);
  border-radius: 4px;
  line-height: 30px;
  font-size: 10px;
  color: rgba(238, 92, 92, 1);
  display: flex;
  transform: scale(0.83);
  align-items: center;
  animation: runing 3s linear;
}
.warning img {
  width: 12px;
  height: 12px;
  margin: 0 10px 0 8px;
}
@keyframes runing {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -100px;
  }
}
</style>