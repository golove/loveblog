<template>
  <v-row justify="space-between">
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
  </v-row>
</template>

<script>
import hCard from '~/components/hCard.vue'
import wCard from '~/components/wCard.vue'
export default {
  name: 'mycollect',
  components: { wCard, hCard },
  data: () => ({
    sliceN: 10,
    page: 1
  })
}
</script>

<style>
</style>