<template>
  <div id="app">
    <app-header v-bind:title='title' v-on:change='updateTitle($event)'></app-header>
    <img src="./assets/logo.png">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <app-shits v-bind:shits='shits'></app-shits> -->
    <component v-bind:is='whichform'></component>
    <button type="button" name="button" v-on:click='chooseFormOne()'>Choose Form One</button>
    <button type="button" name="button" v-on:click='chooseFormTwo()'>Choose Form Two</button>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Shits from './components/shits.vue'
import FormOne from './components/form-one.vue'
import FormTwo from './components/form-two.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Holly Shit!',
      title: 'Holly Shits',
      whichform: 'form-one',
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
    'form-one': FormOne,
    'form-two': FormTwo,
  },
  methods: {
    updateTitle: function(changedTitle) {
      this.title = changedTitle;
    },
    chooseFormOne: function() {
      this.whichform = 'form-one';
    },
    chooseFormTwo: function() {
      this.whichform = 'form-two';
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
