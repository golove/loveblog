<template>
  <div>
    <v-card-title>
      <v-avatar size="42" color="grey darken-3">
        <v-img class="elevation-6" :src="$store.state.user.imgsrc?$store.state.user.imgsrc:''"></v-img>
      </v-avatar>

      <span class="title pl-2 headline">{{$store.state.user.userName?$store.state.user.userName:''}}</span>
    </v-card-title>

    <v-text-field
      class="ml-6 pl-12 pr-8 py-0"
      counter
      solo
      flat
      filled
      v-model="reply"
      background-color="rgba(255,255,255,0.1)"
      name="input-7-4"
      label="评论一下吧!"
    />
    <v-card-actions>
      <v-btn small color="transparent" @click="$emit('backmsg')">取消</v-btn>
      <v-btn
        :disabled="btnDisabled && $store.state.user.userName ? false:true"
        small
        color="transparent"
        @click="addmsg"
      >评论</v-btn>
    </v-card-actions>

    <v-list color="transparent" three-line>
      <template v-for="(item, index) in items.slice((page-1)*sliceN,sliceN*page)">
        <v-divider :key="index" :inset="true"></v-divider>
        <v-list-item :key="item.title" @click>
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-col cols="12" class="text-center" v-if="Math.ceil(items.length/sliceN)>1">
        <v-pagination
          light
          circle
          v-model="page"
          :length="Math.ceil(items.length/sliceN)"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'simpleReply',
  props: { items: Array },
  data: () => ({
    page: 1,
    sliceN: 7,
    btnDisabled: false,
    reply: ''
  }),
  methods: {
    addmsg() {}
  },
  computed: {
    lContent() {
      return this.reply.length
    }
  },
  watch: {
    lContent: function(n, o) {
      this.btnDisabled = n > 5
    }
  }
}
</script>

<style>
</style>