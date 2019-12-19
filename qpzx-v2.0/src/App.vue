<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
.active_red{
  position: absolute;
  left: -80px;
  top: 3px;
  color: red;
}
.active_span{
  position: relative;
}
.ivu-switch.ivu-switch-checked.ivu-switch-default{
  width: 50px!important;
}
.ivu-switch-checked:after{
  left: 31px!important;
}
* {
  margin: 0;
  padding: 0;
  /* box-sizing:unset; */
}
html,
body,
.box,
#app {
  height: 100%;
}
i {
  font-style: normal;
  display: inline-block;
}
ul {
  list-style: none;
}
.centers {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 72px;
}
/*  */
.main-section-top-top label input {
  border: none;
  border: 1px solid #c0c0c0;
  width: 130px;
  height: 25px;
  border-radius: 3px;
  outline: none;
  text-indent: 5px;
  box-sizing: border-box;
  margin-left: 20px;
  margin-right: 55px;
}
/*  */
.contaner {
  margin: 0 44px;
}
.main-section .main-section-bottom {
  width: 100%;
  flex: 1;
  background: #fff;
  border-radius: 10px;
  margin-top: 10px;
  min-height: 690px;
}
.daiban-button {
  border: none;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  width: 88px;
  height: 30px;
  background: #1b73b0;
}
.main-section-top-top {
  font-size: 14px;
  color: #333;
  margin-left: 44px;
}
/*  */
.daiban-selected {
  width: 130px;
  height: 25px;
  outline: none;
  border-color: #c0c0c0;
  border-radius: 3px;
  appearance: none;
  background: url("../src/assets/img/xiala/png24.png") no-repeat scroll right
    center transparent;
  padding-right: 20px;
  background-size: 12px 7px;
  background-position-x: 128px;
  margin-left: 25px;
  margin-right: 55px;
  text-indent: 5px;
}
/*  */
.main-section .main-section-top {
  width: 100%;
  height: 111px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  min-width: 1300px;
}
.main-section {
  display: flex;
  flex-direction: column;
}
.surplus {
  margin: 5px;
}
.main-header ul li span {
  font-size: 16px;
  color: #1b73b0;
}
.main-header ul li i {
  border-left: 2px solid #ee5c5c;
  display: inline-block;
  height: 20px;
  margin: 0 10px 0 20px;
}
.main-header ul li {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.main-header ul {
  display: flex;
}
.main-header {
  height: 48px;
  background: #fff;
  display: flex;
  align-items: center;
  min-height: 48px;
}
</style>
