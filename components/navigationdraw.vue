<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    absolute
    clipped
    color="rgba(160,120,225,.9)"
    :mini-variant="miniVariant"
    :disable-resize-watcher="sfalg"
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img
            :src="$store.state.user.imgsrc?$store.state.user.imgsrc:'https://randomuser.me/api/portraits/men/81.jpg'"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1 font-weight-bold">{{$store.state.user.userName}}</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon small>mdi-pencil</v-icon>
            {{$store.state.user.signature?$store.state.user.signature:'自在飞花轻似梦,无边丝雨细如愁'}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.title" :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-badge
          inline
          :content="item.content"
          :value="item.badge"
          :color="item.color"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-badge>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigation',
  props: { items: Array, sfalg: Boolean },
  data: () => ({
    miniVariant: false,
    drawer: true
  }),
  methods: {
    changedrawer() {
      this.drawer = !this.drawer
    },
    changebadge(item) {
      console.log(this.item.badge)
      item.badge = false
    }
  }
}
</script>

<style>
</style>