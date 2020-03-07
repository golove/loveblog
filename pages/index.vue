<template>
  <v-row justify="center">
    <v-col xl="2" lg="3" md="3" sm="3">
      <v-card flat color="transparent">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="flag=!flag">
            <v-icon>mdi-pencil</v-icon>写点什么吧!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col class="pa-0" xl="5" lg="9" md="9" sm="9">
      <v-row>
        <v-col transition="slide-y-transition" v-show="flag" xl="12" lg="12" md="12" sm="12">
          <inputbox class="inputbox" @setdata="setdata" />
        </v-col>
        <v-col v-for="(item,index) in blogs" :key="index" xl="12" lg="12" md="12" sm="12">
          <twittercard :item="item" :items="items" />
        </v-col>
      </v-row>
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
    blogs: [
      {
        name: '箫无韵',
        title: 'twitter',
        text:
          'Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer  in TS because most gotcha edge cases are type invalid as well.Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer  in TS because most gotcha edge cases are type invalid as well.Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer Turns out semicolon-less style is easier and safer  in TS because most gotcha edge cases are type invalid as well.',
        icon: 'mdi-twitter',
        flag: true,
        color: 'cyan',
        time: '2019-12-14',
        avatar:
          'http://yanxuan.nosdn.127.net/8d82e055d343f820b7869b929c8a45e2.jpg',
        like: 12,
        see: 32
      }
    ],

    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Bru2nch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui1oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Br1unch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: '6Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'O3ui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this we5ekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span7 class="grey--text text--lighten-1">4</span7>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift5',
        subtitle:
          "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"
      },

      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try3',
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
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