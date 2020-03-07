<template>
  <v-row justify="space-between">
    <v-col xl="12">
      <!-- <carousel :items="pictures" :height="'300px'"></carousel> -->
      <notice
        :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
      ></notice>
    </v-col>
    <v-col class="py-0" cols="12">
      <dividline :item="{icon:'mdi-book',title:'收藏的文章',badge:false }"></dividline>
    </v-col>

    <v-col
      md="12"
      lg="6"
      xl="6"
      sm="6"
      v-for="(item) in $store.state.content.article.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.collect.indexOf($store.state.user.userName)>-1"
      :key="item._id"
    >
      <!-- <v-row justify="center">
      <v-col class="py-0">-->
      <w-card :item="item"></w-card>
      <!-- </v-col>
      </v-row>-->
    </v-col>
    <v-col class="text-center" v-if="Math.ceil($store.state.content.article.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil($store.state.content.article.length/sliceN)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </v-col>

    <v-col class="py-0" cols="12">
      <dividline :item="item2"></dividline>
    </v-col>
    <v-col
      class="py-0"
      :key="index"
      v-for="(item,index) in $store.state.content.article.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.author===$store.state.user.userName"
      lg="3"
      xl="3"
      md="6"
      sm="4"
      xs="6"
    >
      <v-row justify="center">
        <v-col cols="12">
          <h-card :item="item"></h-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import notice from '~/components/notice.vue'
import dividline from '~/components/Dividingline.vue'
import hCard from '~/components/hCard.vue'
import wCard from '~/components/wCard.vue'
export default {
  name: 'manageindex',
  components: { wCard, hCard, dividline, notice },
  data: () => ({
    sliceN: 10,
    page: 1,
    item2: { icon: 'mdi-book', title: '我的文章', badge: false, color: 'red' }
  }),
  methods: {}
}
</script>

<style>
</style>