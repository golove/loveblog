<template>
  <v-hover v-slot:default="{hover}" open-delay="100">
    <v-card max-width="100%" @click="showDetail">
      <v-img
        class="white--text align-end"
        width="auto"
        height="159px"
        :src="item.avatar?item.avatar:'https://i.loli.net/2019/11/03/ShRIkmuvKeCBLgE.jpg'"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
            style="height:100%"
          >{{item.author}}</div>
        </v-expand-transition>
      </v-img>
      <div class="grid_author_avt">
        <v-avatar class="avatar" size="30">
          <img :src="item.avatar" />
        </v-avatar>
      </div>

      <v-card-subtitle class="py-2 d-flex justify-start align-center">
        <div class="dot"></div>
        {{item.author?item.author:'未知作者'}}
        <div class="dot"></div>
        {{item.type?item.type:'未分类'}}
        <div class="dot"></div>
        {{item.sorce?item.sorce:"未知来源"}}
      </v-card-subtitle>

      <v-card-text class="text--primary pb-0">
        <v-list color="transparent" three-line class="pa-0">
          <v-list-item class="pa-0">
            <v-list-item-content class="pa-0">
              <v-list-item-title class="title font-weight-black">{{item.blocks[0].data.text}}</v-list-item-title>

              <v-list-item-subtitle
                class="font-weight-medium"
                v-if="item.blocks[1]"
                v-text="item.blocks[1].data.text"
              ></v-list-item-subtitle>
              <!-- <v-list-item-subtitle
              class="font-weight-medium"
              v-if="item.blocks[2]"
              v-text="item.blocks[2].data.text"
              ></v-list-item-subtitle>-->
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <action :item="item" :flag="false" :disabled="false" />
      <!-- <v-card-actions class="py-0 px-0"> -->

      <!-- <v-btn class="ma-0 pa-0" disabled text>
        <v-icon small>mdi-clock-outline</v-icon>
        {{new Date(item.time).toLocaleDateString()}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="ma-0 pa-0" disabled text>
        <v-icon small>mdi-eye</v-icon>
        {{item.see}}
      </v-btn>
      <v-btn class="ma-0 pa-0" disabled text>
        <v-icon small>mdi-chat-processing</v-icon>
        {{item.reply.length}}
      </v-btn>-->
      <!-- </v-card-actions> -->
    </v-card>
  </v-hover>
</template>




<script>
import action from '~/components/actions.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'hCard',
  props: { item: Object },
  components: { action },
  methods: {
    ...mapMutations(['articleEdit']),
    showDetail() {
      this.$router.push(`/${this.item._id}`)
      this.articleEdit({ data: this.item, type: 'see' })
    }
  }
}
</script>

<style>
.grid_author_avt {
  position: relative;

  display: block;
  width: 100px;
  height: 36px;
  margin-top: -14px;
  margin-left: -10px;
  transform: translateZ(0);
}

.grid_author_avt:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 100px 30px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3NiAzMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzYgMzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjx0aXRsZT5iZ19zb3VyY2VfYmFkZ2VfMTwvdGl0bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTcuNywxMS40Yy0xLjQtMS40LTIuNy0yLjktNC4xLTQuNGMtMC4yLTAuMy0wLjUtMC41LTAuOC0wLjhjLTAuMi0wLjItMC4zLTAuMy0wLjUtMC41bDAsMA0KCUM0OC42LDIuMiw0My41LDAsMzgsMFMyNy40LDIuMiwyMy42LDUuN2wwLDBjLTAuMiwwLjItMC4zLDAuMy0wLjUsMC41Yy0wLjMsMC4zLTAuNSwwLjUtMC44LDAuOGMtMS40LDEuNS0yLjcsMy00LjEsNC40DQoJYy01LDUuMS0xMS43LDYuMS0xOC4zLDYuM1YzMWg5LjRoOC45aDM5LjRoNC45SDc2VjE3LjZDNjkuNCwxNy40LDYyLjcsMTYuNSw1Ny43LDExLjR6Ii8+DQo8L3N2Zz4NCg==);
  top: -3px;
  /* left: 50%; */
  /* transform: translate(-50%,0); */
  z-index: -1;
}
.avatar {
  /* left: 38px; */
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
}

.dot {
  margin: 0px 4px 0px 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fb8c00;
}
.dot:nth-child(2) {
  background: #d81b60;
}
.dot:nth-child(3) {
  background: #00e5ff;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.6;
  position: absolute;
  width: 100%;
}
</style>