<template>
  <v-row justify="space-between">
    <v-col xl="12">
      <!-- <carousel :items="pictures" :height="'300px'"></carousel> -->
      <notice
        :item="{icon:'mdi-heart',notice:'通知',msg:'my love xiaofei love you forever,my love xiaofei love you forever,my love xiaofei !!!'}"
      ></notice>
    </v-col>
    <v-col class="py-0" cols="12">
      <dividline :item="{icon:'mdi-book',title:'喜欢的文章',badge:false }"></dividline>
    </v-col>

    <v-col
      md="12"
      lg="6"
      xl="6"
      sm="6"
      v-for="(item) in $store.state.content.letters.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.like.indexOf($store.state.user.name)>-1"
      :key="item._id"
    >
   <twittercard :item='item' :items="[]" />
      <!-- <w-card :item="item"></w-card> -->

    </v-col>
    <v-col class="text-center" v-if="Math.ceil($store.state.content.letters.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil($store.state.content.letters.length/sliceN)"
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
      v-for="(item,index) in $store.state.content.letters.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.author===$store.state.user.name"
    xl="5" lg="9" md="9" sm="9"
    >
      <v-row justify="center">
        <v-col cols="12" >
          <twittercard :item='item' :items="[]" />
          <!-- <h-card :item="item"></h-card> -->
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import notice from '~/components/notice.vue'
import dividline from '~/components/Dividingline.vue'
import twittercard from '~/components/twittercard.vue'
import wCard from '~/components/wCard.vue'
export default {
  name: 'manageindex',
  components: { wCard, twittercard, dividline, notice },
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