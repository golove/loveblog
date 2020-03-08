<template>
  <v-row class="alsdjflajs" justify="center">
    <v-col cols="7">
      <v-card flat color="transparent">
        <v-card-actions>
          <!-- <button v-on:click="shuffle">Shuffle</button> -->
          <v-spacer></v-spacer>
          <v-btn @click="flag=!flag">
            <v-icon>mdi-pencil</v-icon>写点什么吧!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col class="pa-0" xl="6" lg="7" md="9" sm="9">
      <v-col v-show="flag" cols="12">
        <inputbox class="inputbox" @setdata="setdata" />
      </v-col>

      <v-col
        v-for="(item,index) in $store.state.content.letters.slice((page-1)*sliceN,page*sliceN)"
        :key="index"
        cols="12"
      >
        <twittercard :n="index" :item="item" />
      </v-col>
    </v-col>
    <v-col
      cols="12"
      class="text-center"
      v-if="Math.ceil($store.state.content.letters.length/sliceN)>1"
    >
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>
import inputbox from '~/components/inputbox'
import twittercard from '~/components/twittercard'
export default {
  name: 'index',
  components: { twittercard, inputbox },
  data: () => ({
    flag: false,
    page: 1,
    sliceN: 6
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
.groupstyle {
  position: relative;
}
.left-enter,
.left-leave-to {
  opacity: 0;
  transform: translateX(90px);
}

.left-enter-active,
.left-leave-active {
  transition: all 0.6s;
}

/* .left-leave-active {
  position: absolute;
} */

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(90px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* .v-enter,
.v-leave-active {
  position: absolute;
} */

.animatess {
  display: inline-block;
  transition: all 1s;
}
.alsdjflajs {
  min-height: 90vh;
}
</style>