<template>
  <div id="app">
    <app-header v-bind:title='title' v-on:change='updateTitle($event)'></app-header>
    <img src="./assets/logo.png">
    <!-- <h1>{{ msg }}</h1> -->
    <app-shits v-bind:shits='shits'></app-shits>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Shits from './components/shits.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Holly Shit!',
      title: 'Holly Shits',
      shits: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Design', show: false},
      ]
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-shits': Shits,
  },
  methods: {
    updateTitle: function(changedTitle) {
      this.title = changedTitle;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app img{
  padding: 0px auto;
}
</style>
