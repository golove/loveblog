<template>
  <div class="noticebox">
    <div class="noticecontent">
      <div class="msgbox">
        <v-icon color="white">{{item.icon}}</v-icon>重要通知
      </div>
      <span class="d-inline-block text-truncate pl-2">{{item.msg}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
.msgbox {
  background: orange;
  padding: 0px 8px;
  text-align: center;
  min-width: 120px;
  border-radius: 50px;
  color: white;
}
.noticebox {
  width: 100%;
  border-radius: 4px;
  background: rgba(243, 243, 243, 0.5);
  padding: 1%;
}
.noticecontent {
  padding: 10px;
  text-align: center;
  display: flex;
  margin: 0 auto;
  border-radius: 50px;
  color: cyan;
  background: white;
}
</style>