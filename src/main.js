import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export const bus = new Vue();

Vue.use(VueResource)

// directives also have life cycles
Vue.directive('rainbow', {
  // el refersence to the element itself which use v-rainbow
  // binding gives us the infromation about the directive
  bind(el, binding, vnode) {
    el.style.color = '#' + Math.random().toString().slice(2, 8);
  }
})

// in this example, we pass some value when element use v-theme.
Vue.directive('theme', {
  bind(el, binding, vnode) {


    // directive can also pass some arguments, just like v-on:click, click is one argument.
    if (binding.arg == 'column') {
      if (binding.value == 'wide') {
        el.style.maxWidth = "900px";
        el.style.margin = "auto";
      } else if (binding.value == 'narrow') {
        el.style.maxWidth = "600px";
        el.style.margin = "auto";
      }
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
