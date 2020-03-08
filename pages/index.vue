<template>
  <v-row justify="center">
    <v-col xl="1" lg="2" md="2" sm="2">
      <v-card flat color="transparent">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="flag=!flag">
            <v-icon>mdi-pencil</v-icon>写点什么吧!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col class="pa-0" xl="5" lg="7" md="9" sm="9">
      <v-row>
        <v-col transition="slide-y-transition" v-show="flag" cols="12">
          <inputbox class="inputbox" @setdata="setdata" />
        </v-col>
        <v-col v-for="(item,index) in $store.state.content.letters.slice((page-1)*sliceN,page*sliceN)" :key="index" cols="12">
          <twittercard :item="item" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="text-center" v-if="Math.ceil($store.state.content.letters.length/sliceN)>1">
        <v-pagination
          light
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
import inputbox from '~/components/inputbox'
import twittercard from '~/components/twittercard'
export default {
  name: 'index',
  components: { twittercard, inputbox },
  data: () => ({
    flag: false,
    page:1,
    sliceN:6,
   
  }),
  methods: {
    setdata(data) {
      console.log(data)
      this.blogs.unshift(data)
    }
  }
}
</script>

<style>
</style>