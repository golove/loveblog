<template>
  <v-row justify="space-between">
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
  name: 'myarticle',
  components: { wCard, hCard },
  data: () => ({
    page: 1,
    sliceN: 12
  })
}
</script>

<style>
</style>