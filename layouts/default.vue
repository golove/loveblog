<template>
  <v-app light>
    <!-- <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar dense :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
       <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>-->
      <v-spacer />
      <v-toolbar-title @click="gohome" v-text="title" />

       <v-spacer />
     <!-- <v-text-field
        v-model="searchdata"
        @change="search"
        solo-inverted
        flat
        clearable
        dense
        rounded
        hide-details
        label="seach"
      ></v-text-field> -->

      <v-menu
        v-if="$store.state.user.name"
        :close-on-click="true"
        :offset-y="true"
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            v-on="on"
            depressed
            class="ml-4textcolor--text"
            color="transparent"
            v-text="$store.state.user.name"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in usermenus" :key="index" @click="item.action">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div v-else>
        <v-btn class="mr-4" to="/login" text>login</v-btn>
        <!-- <v-btn depressed class="mr-4 textcolor--text" color="listbgcolor" to="/signup">login</v-btn> -->
      </div>
      <!-- <div>{{$store.state.user.age}}</div> -->
      <v-avatar size="40px">
        <img v-if="$store.state.user.avatar" :src=" $store.state.user.avatar" alt="avatar" />
      </v-avatar>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>-->
      <v-spacer />
    </v-app-bar>
    <v-content class="rowstyle">
      <v-container>
        <nuxt />
      </v-container>
      <blogfoot :item="{author:'Laughter',time:'2020',version:'V4.0'}" />
    </v-content>
    <!-- <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
  
    
  </v-app>
</template>

<script>
import blogfoot from '~/components/blogfoot.vue'
import star from '~/components/star-demo.vue'
import { mapActions, mapMutations } from 'vuex'
export default {
  components: { blogfoot, star },
  data() {
    return {
      searchdata:'',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'manage',
          to: '/manage'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'golove',
      usermenus: [
        { title: '管理中心', action: this.managepath },

        { title: '注销', action: this.userexit }
      ]
    }
  },
  methods: {
    ...mapActions(['getdata', 'userexit', 'userlogin']),
    ...mapMutations(['setdata']),
    gohome() {
      this.$router.push('/')
    },
    managepath() {
      this.$router.push('/manage')
    },
    search() {
      this.searchdata
    }
  },
 
  created() {
    let user = window.sessionStorage.getItem('user')
    if (user) {
      this.userlogin(JSON.parse(user))
    }
    // this.$vuetify.theme.light = true
    if (this.$store.state.content.letters.length < 1) {
      this.getdata({ api: '/api/letters', type: 'letters' })
    }

    //  let res= this.$axios.get('https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302')
    //       .then(console.log(res))
    //  this.backgroundimg = "url('https://img.xjh.me/desktop/bg/nature/63505535_p0.jpg')"

    this.getdata({ api: '/api/dlavatar', type: 'avatars' })
  }
}
</script>
<style  scoped>
.rowstyle {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
}
</style>