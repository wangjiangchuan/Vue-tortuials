<template>
  <div id="app">
    <app-header v-bind:title='title' v-on:change='updateTitle($event)'></app-header>
    <img src="./assets/logo.png">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <app-shits v-bind:shits='shits'></app-shits> -->
    <!-- <component v-bind:is='whichform'></component>
    <button type="button" name="button" v-on:click='chooseFormOne()'>Choose Form One</button>
    <button type="button" name="button" v-on:click='chooseFormTwo()'>Choose Form Two</button> -->
    <!-- <blog-add></blog-add> -->
    <!-- <show-blog></show-blog>
    <list-title></list-title> -->
    <!-- <router-view></router-view> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    <app-footer v-bind:title='title'></app-footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Shits from './components/shits.vue'
import FormOne from './components/form-one.vue'
import FormTwo from './components/form-two.vue'
import BlogAdd from './components/blog-add.vue'
import ShowBlog from './components/show-blog.vue'
import ListTile from './components/list-title.vue'
import ProductsListOne from './components/product-one.vue'
import ProductsListTwo from './components/product-two.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Holly Shit!',
      title: 'Holly Shits',
      whichform: 'form-one',
      // shits: [
      //   {name: 'Ryu', speciality: 'Vue Components', show: false, price: 200},
      //   {name: 'Crystal', speciality: 'HTML Wizardry', show: false, price: 100},
      //   {name: 'Hitoshi', speciality: 'Click Events', show: false, price: 50},
      //   {name: 'Tango', speciality: 'Conditionals', show: false, price: 2400},
      //   {name: 'Kami', speciality: 'Webpack', show: false, price: 1200},
      //   {name: 'Yoshi', speciality: 'Data Design', show: false, price: 900},
      // ]
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-shits': Shits,
    'form-one': FormOne,
    'form-two': FormTwo,
    'blog-add': BlogAdd,
    'show-blog': ShowBlog,
    'list-title': ListTile,
    'product-list-one': ProductsListOne,
    'product-list-two': ProductsListTwo
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
