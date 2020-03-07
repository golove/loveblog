<template>
  <v-card flat class="card1 mx-auto" :color="item.color" dark>
    <v-toolbar flat :color="item.color" dark>
      <v-avatar size="42" color="grey darken-3">
        <v-img class="elevation-6" :src="$store.state.user.imgsrc"></v-img>
      </v-avatar>

      <v-toolbar-title class="pl-2 headline">{{$store.state.user.userName}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-textarea
      class="ml-6 pl-12 pr-8 font-weight-bold headline"
      style="opacity:0.8"
      label="文字最多300字,图片暂不支持!"
      hint="文字最多300字,图片暂不支持!"
      counter
      :background-color="item.color"
      name="blog"
      solo
      flat
      v-model="item.text"
    ></v-textarea>

    <v-card-text class="ml-6 pl-12 pr-6 py-0" style="opacity:.6">{{item.time}}</v-card-text>

    <v-card-actions class="justify-space-around">
      <v-btn icon @click="colorpicker=!colorpicker">
        <v-icon class="mr-1">mdi-heart</v-icon>选择颜色
      </v-btn>
      <v-btn text>
        <v-file-input dense show-size label="File input"></v-file-input>
      </v-btn>
      <v-btn @click="post" icon>
        <v-icon class="mr-1">mdi-send</v-icon>发送
      </v-btn>
    </v-card-actions>
    <v-color-picker hide-canvas hex light v-show="colorpicker" v-model="item.color"></v-color-picker>
  </v-card>
</template>

<script>
export default {
  name: 'inputbox',
  data: () => ({
    swatches: [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#0000FF', '#0000AA', '#000055']
    ],
    colorpicker: false,
    item: {
      text: '',
      author: '',
      avatar: '',
      like: [],
      reply: [],
      flag: 0,
      color: '',
      time: new Date()
    },
    user: {}
  }),
  methods: {
    post() {
      this.item.author = this.$store.state.user.userName
      this.item.avatar = this.$store.state.user.imgsrc
      if (this.item.text !== '') {
        this.$axios
          .post('/api/insert', this.item)
          .then(res => {
            // this.$store.commit('pushdata', {
            //   type: 'article',
            //   data: res.ops[0]
            // })
            this.item.text = ''
          })
          // .get('/api/myletter')
          // .then(res => {
          //   console.log(res)
          // })
          .catch(err => {
            console.log(err)
          })
      }
    },
    chiocepic() {}
  }
}
</script>

<style>
</style>