<template>
  <v-card min-height="1080px" flat class="mx-auto overflow-hidden" color="rgba(255,255,255,0)">
    <v-app-bar flat dark color="rgba(255,255,255,0)">
      <v-app-bar-nav-icon @click="changedrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>管理中心</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-text-field solo-inverted flat clearable dense rounded hide-details label="seach"></v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->
    </v-app-bar>
    <navigationdraw ref="draw" :items="navigations" :sflag="true" />

    <!-- <v-col class="d-none d-md-flex" xs="12" sm="12" md="3" lg="2" xl="2">
      <navigationdraw :items="navigations" :sflag="true" />
    </v-col>-->
    <v-row justify="center">
      <v-col class="py-0" xs="12" sm="12" md="7" lg="9" xl="7">
        <!-- <v-tabs class="d-flex d-sm-none d-none d-sm-flex d-md-none" show-arrows>
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab v-for="(item,index) in navigations" :key="index" :to="item.path">
              <b>{{item.title}}</b>
            </v-tab>
        </v-tabs>-->
        <nuxt-child keep-alive />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import navigationdraw from '~/components/navigationdraw.vue'

import systemmsg from '~/components/systemMsg'
import { mapActions } from 'vuex'
export default {
  components: {
    navigationdraw,

    systemmsg
  },
  name: 'user',
  data: () => ({
    sliceN: 10,
    page: 1,
    collectbadge: Number,
    navigations: [
      {
        title: '总览',
        icon: 'mdi-view-dashboard',
        path: '/manage/',
        badge: false
      },
      {
        title: '个人信息',
        icon: 'mdi-information',
        path: '/manage/userinfo',
        content: '6',
        badge: true,
        color: 'rgba(255,50,50,.3)'
      },
      {
        title: '我的文章',
        icon: 'mdi-book',
        path: '/manage/myarticle',
        content: '6',
        badge: true,
        color: 'rgba(50,255,150,.3)'
      },
      {
        title: '我的收藏',
        icon: 'mdi-star',
        path: '/manage/mycollect',
        content: '6',
        badge: true,
        color: 'rgba(60,90,255,.6)'
      },

      {
        title: '上传头像',
        icon: 'mdi-account-circle',
        path: '/manage/uploadavatar',
        badge: false
      }
    ],
    fadedata: [
      {
        title: '系统消息',
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        msg:
          '姬长信API For Docker 一个基于多种编程语言开源免费不限制提供生活常用,出行服务,开发工具,金融服务,通讯服务和公益大数据的平台.!',
        time: '1hr'
      },
      {
        title: '系统消息',
        msg: '恭喜你注册成功!',
        time: '3hr',
        action: 'mdi-account-multiple'
      }
    ],
    page: 1
  }),
  methods: {
    ...mapActions(['getdata', 'userexit', 'userlogin']),
    collectarticle() {
      let C = []
      this.$store.state.content.article.forEach(e => {
        if (e.collect.indexOf(this.$store.state.user.userName) > -1) {
          C.push(e)
        }
      })
    },
    changedrawer() {
      this.$refs.draw.changedrawer()
    }
  },
  activated() {
    if (!this.$store.state.user.id) {
      this.$router.push('/login')
    } else {
      console.log(this.$store.state.user)
    }
  },

  mounted() {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      this.userlogin(JSON.parse(user))
    }
  }
}
</script>
