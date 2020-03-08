<template>
  <span>
    <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-avatar>
        <v-img v-if="item.avatar" :src="item.avatar"></v-img>
        <v-icon v-else large class="textcolor--text">mdi-account-circle</v-icon>
      </v-list-item-avatar>
      <v-list-item-content class="pa-0">
        <v-list-item-title class="body-2 font-regular">
          <b style="opacity: 0.7;">{{item.name}}</b>
          <b style="opacity: 0.6;
  font-size: 0.8em;">{{new Date(item.time).toLocaleString()}}</b>
        </v-list-item-title>
        <v-list-item-subtitle>
          <b>{{item.reply}}</b>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </span>
</template>

<script>
export default {
  name: 'liveMsg',
  props: { item: Object }
}
</script>

<style scoped>
</style>
