<template>
  <div
    :min-height="maxheight"
    class="wrap"
    v-touch="{
      left: () => swipe('Left'),
      right: () => swipe('Right'),
      up: () => swipe('Up'),
      down: () => swipe('Down')
    }"
  >
    <v-card
      
      :min-height="maxheight"
      :class="flag?'card1_1':''"
      class="card1 mx-auto"
      :color="item.color"
      :dark="!item.tcolor"
    >
      <v-toolbar flat :color="item.color" >
        <v-avatar size="42" color="grey darken-3">
          <v-img class="elevation-6" :src="item.avatar"></v-img>
        </v-avatar>

        <v-toolbar-title class="pl-2 headline">{{item.author}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-toolbar>

      <v-card-text
        :class="tflag?'tstyle':'wstyle'"
        class="textsyle ml-6 pl-12 pr-8 py-0 headline font-weight-bold"
      >{{item.text}}</v-card-text>

      <v-card-text class="ml-6 pl-12 pr-6 py-0" style="opacity:.6">
        <b style="opacity: 0.6;
  font-size: 1em;">{{new Date(item.time).toLocaleString()}}</b>
      </v-card-text>

      <v-card-actions class="justify-space-around" style="opacity:0.7">
        <v-btn icon>
          <v-icon class="mr-1">mdi-heart</v-icon>赞
        </v-btn>
        <v-btn @click="showmsg" icon>
          <v-icon class="mr-1">mdi-message</v-icon>评论
        </v-btn>
        <v-btn icon>
          <v-icon class="mr-1">mdi-share-variant</v-icon>分享
        </v-btn>
        <button @click="showtext" icon>
          <v-icon>{{tflag?'mdi-menu-up':'mdi-menu-down'}}</v-icon>
          {{tflag?'收起':'更多'}}
        </button>
      </v-card-actions>

      <v-list color="transparent" three-line>
        <template v-for="(item, index) in item.reply.slice(0,1 )">
          <v-divider :key="index" :inset="true"></v-divider>
          <v-list-item :key="item.title" @click="showmsg">
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
      </v-list>
      <v-card-actions class="justify-center pa-0"></v-card-actions>
    </v-card>

    <v-card
      :height="maxheight"
      :color="item.color"
      :dark="!item.tcolor"
      class="card2 overflow-hidden"
      :class="flag?'card2_1':''"
    >
      <simplereply @backmsg="backmsg" :item="item" />
    </v-card>
  </div>
</template>

<script>
import simplereply from '~/components/simpleReply.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'twittercard',
  props: { item: Object},
  components: { simplereply },
  data: () => ({
    tflag: false,

    flag: false,

    maxheight: '380px'
  }),

  methods: {
    ...mapMutations(['articleEdit']),
    swipe(direction) {},
    watchnow() {
      this.articleEdit({ data: this.item, type: 'see' })
    },
    showmsg() {
      if (!this.tflag) {
        this.flag = ~this.flag
        setTimeout(() => {
          this.maxheight = '900px'
        }, 600)
      } else {
        this.tflag = false
        setTimeout(() => {
          this.flag = ~this.flag
          setTimeout(() => {
            this.maxheight = '900px'
          }, 600)
        }, 300)
      }
    },
    backmsg() {
      this.maxheight = '380px'
      setTimeout(() => {
        this.flag = !this.flag
      }, 620)
    },
    showtext() {
      this.tflag = !this.tflag
    },
    addmsg() {}
  }
}
</script>

<style scoped>
/* 保证正反面一样大，不然反转会很突兀*/
.wrap {
  position: relative;
  opacity: 0.8;
}
.wrap,
.card1,
.card2 {
  width: 100%;
  transition: all 0.6s;
}

.card1,
.card2 {
  backface-visibility: hidden;
}

.card2 {
  top: 0;

  position: absolute;
  transform: rotateY(180deg);
}
.card2_1 {
  transform: rotateY(0deg);
}
.card1_1 {
  transform: rotateY(180deg);
}
.textsyle {
  transition: all 0.3s;
}
.tstyle {
  max-height: auto;
}
.wstyle {
  max-height: 130px;
  overflow: hidden;
}

</style>