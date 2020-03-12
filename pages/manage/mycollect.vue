<template>
  <v-row>
    <h2>开发中...</h2>
    <!-- <v-col
      md="12"
      lg="6"
      xl="6"
      sm="6"
    v-for="(item) in $store.state.content.letters.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.like.indexOf($store.state.user.name)>-1"
      :key="item._id"
    >
     <twittercard :item='item' :items="[]" />
   
    </v-col>
    <v-col class="text-center" v-if="Math.ceil($store.state.content.letters.length/sliceN)>1">
      <v-pagination
        circle
        v-model="page"
        :length="Math.ceil($store.state.content.letters.length/sliceN)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </v-col>-->
  </v-row>
</template>

<script>
// import hCard from '~/components/hCard.vue'
// import wCard from '~/components/wCard.vue'
// import twittercard from '~/components/twittercard.vue'
export default {
  name: 'mycollect',
  components: { twittercard, wCard, hCard },
  data: () => ({
    sliceN: 10,
    page: 1
  })
}
</script>

<style>
</style>