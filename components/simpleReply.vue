<template>
  <div>
    <v-card-title>
      <v-avatar size="42">
        <v-img class="elevation-6" :src="$store.state.user.avatar?$store.state.user.avatar:''"></v-img>
      </v-avatar>

      <span class="title pl-2 headline">{{$store.state.user.name?$store.state.user.name:''}}</span>
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
        :disabled="btnDisabled && $store.state.user.name ? false:true"
        small
        color="transparent"
        @click="addmsg"
      >评论</v-btn>
    </v-card-actions>

    <v-list color="transparent" three-line>
      <template v-for="(item, index) in item.reply.slice((page-1)*sliceN,sliceN*page)">
        <v-divider :key="index" :inset="true"></v-divider>
        <v-list-item :key="item.title" @click>
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
  <v-list-item-title ><b>{{item.name}}</b>  <b style="opacity: 0.6;
  font-size: 0.8em;">{{new Date(item.time).toLocaleString()}}</b></v-list-item-title>
              <v-list-item-subtitle><b>{{item.reply}}</b></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-col cols="12" class="text-center" v-if="Math.ceil(item.reply.length/sliceN)>1">
        <v-pagination
          light
          circle
          v-model="page"
          :length="Math.ceil(item.reply.length/sliceN)"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </v-col>
    </v-list>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'simpleReply',
  props: { item: Object },
  data: () => ({
    page: 1,
    sliceN: 7,
    btnDisabled: false,
    reply: ''
  }),
  methods: {
    ...mapMutations(['articleEdit']),
    addmsg() {
      if (this.$store.state.user.name) {
        let date = new Date()
        // console.log(this.item)
        let msgItem = {
          articleId: this.item._id,
          userId: this.$store.state.user.id,
          avatar: this.$store.state.user.avatar,
          name: this.$store.state.user.name,
          time: Date.parse(date),
          reply: this.reply.trim(),
          like: 0
        }

        this.$axios
          .post('/api/addArray', { id: this.item._id, reply: msgItem })
          .then(res => {
            this.reply = ''
            this.articleEdit({ data: msgItem, type: 'reply' })
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('你还没登陆呢')
      }
    },
    delmsg(i) {
      let e = this.msgContents.splice(i, 1)[0]
      this.$axios
        .post('/blog/msgDel', e)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
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