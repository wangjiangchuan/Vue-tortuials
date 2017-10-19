<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h2>Show all blogs</h2>
    <input type="text" class="search-style" v-model='search' placeholder='search in blogs'>
    <div class="single-blog" v-for='post in searchBlogs'>
      <h2 v-rainbow class="blog-title">{{ post.title | touppercase }}</h2>
    </div>
  </div>
</template>

<script type="text/javascript">
import searchEngine from '../mixins/search.js'
export default {
  data() {
    return {
      posts: [],
      search: '',
    }
  },
  methods: {
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
    .then(function(data) {
      console.log(data);
      for(var i = 0; i < 6; i++) {
        this.posts.push(data.body[i]);
        // console.log(i);
      }
    })
  },
  computed: {
  },
  filters: {
    'touppercase': function(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    'rainbow': {
      // el refersence to the element itself which use v-rainbow
      // binding gives us the infromation about the directive
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    },
    'theme': {
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
    }
  },
  mixins: [searchEngine]
}
</script>

<style media="screen" scoped>
#show-blogs .single-blog{
  background: #eee;
  height: 50%;
}
#show-blogs .single-blog .blog-title {
  background: #eee;
  font-size: 20px;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 0px;
}
/*#show-blogs .single-blog .blog-body {
  padding-bottom: 20px;
}*/
#show-blogs .search-style {
  width: 99%;
  height: 30px;
  border-style: groove;
}
</style>
