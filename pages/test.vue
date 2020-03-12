<template>
  <div>
    <!-- <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</span>
      </transition-group>
    </div>

    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">{{ item }}</li>
      </transition-group>
    </div>-->

    <div id="list-complete-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <v-card
          :color="e.color"
          width="80%"
          class="list-complete-item ma-4"
          v-for="(e,i) in items"
          :key="e._id"
          @click="remove(i)"
        >
          <v-card-title>{{e.text}}</v-card-title>
        </v-card>
        <!-- <span
          v-on:click="remove(index)"
          v-for="(item,index) in items"
          v-bind:key="item"
          class="list-complete-item spanstyle"
        >{{ item }}</span>-->
      </transition-group>
    </div>

    <!-- <h3>staggered-fade</h3>
    <div id="staggered-list-demo">
      <input v-model="query" />
      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li
          v-for="(item, index) in computedList"
          v-bind:key="item.msg"
          v-bind:data-index="index"
        >{{ item.msg }}</li>
      </transition-group>
    </div>-->
  </div>
</template>

<script>
// import mixin from '~/static/mixin'
// var Component = Vue.extend({
//   mixins: [mixin]
// })
// var component = new Component()
export default {
  data: () => ({
    // items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    items: [],
    nextNum: 10,
    query: '',
    list: [
      { msg: 'Bruce Lee' },
      { msg: 'Jackie Chan' },
      { msg: 'Chuck Norris' },
      { msg: 'Jet Li' },
      { msg: 'Kung Fury' }
    ]
  }),
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function() {
      this.items.unshift(this.randomIndex())
    },
    remove: function(item) {
      this.items.splice(item, 1)
    },
    shuffle: function() {
      // this.$store.commit('shuffle')
      this.items = _.shuffle(this.items)
    },

    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: '1.6em' }, { complete: done })
      }, delay)
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
    }
  },
  computed: {
    computedList: function() {
      var vm = this
      return this.list.filter(function(item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  created() {
    this.$axios.get('/api/letters').then(res => {
      // console.log(res)
      this.items = res
    })
  }
}
</script>

<style scoped>
/* .list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to */
/* .list-leave-active for below version 2.1.8 */
/* opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
} */

/* flip-list */
/* .flip-list-move {
  transition: transform 1s;
}
.flip-list-leave-active {
  position: absolute;
} */

/* list-complete-item */
.list-complete-item {
  transition: all 3s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.spanstyle {
  width: 900px;
  height: 30px;
  background: yellow;
}
</style>