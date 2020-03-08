<template>
  <v-row justify="space-between">
    <v-col
      class="py-0"
      :key="index"
      v-for="(item,index) in $store.state.content.letters.slice((page-1)*sliceN,sliceN*page)"
      v-show="item.author===$store.state.user.name"
   xl="5" lg="9" md="9" sm="9"
    >
      <v-row justify="center">
        <v-col cols="12">
          <!-- <h-card :item="item"></h-card> -->
          <twittercard :item='item' :items="[]" />
        </v-col>
      </v-row>
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
  </v-row>
</template>

<script>
import hCard from '~/components/hCard.vue'
import wCard from '~/components/wCard.vue'
import twittercard from '~/components/twittercard.vue'
export default {
  name: 'myletters',
  components: {twittercard, wCard, hCard },
  data: () => ({
    page: 1,
    sliceN: 12
  })
}
</script>

<style>
</style>