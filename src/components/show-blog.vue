<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h2>Show all blogs</h2>
    <input type="text" class="search-style" v-model='search' placeholder='search in blogs'>
    <div class="single-blog" v-for='post in searchBlogs'>
      <h2 v-rainbow class="blog-title">{{ post.title | touppercase }}</h2>
      <p class="blog-body">{{ post.body |  snippet }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
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
      for(var i = 0; i < 20; i++) {
        this.posts.push(data.body[i]);
        // console.log(i);
      }
    })
  },
  computed: {
    searchBlogs: function() {
      //console.log(this.search);
      if ('' == this.search) {
        return this.posts;
      } else {
        return this.posts.filter((post) => {
          return post.title.match(this.search);
        })
      }
    }
  }
}
</script>

<style media="screen" scoped>
#show-blogs .single-blog{
  background: #ccc;
  height: 50%;
}
#show-blogs .single-blog .blog-title {
  background: #eee;
  font-size: 20px;
  padding: 10px;
}
#show-blogs .single-blog .blog-body {
  padding-bottom: 20px;
}
#show-blogs .search-style {
  width: 99%;
  height: 30px;
  border-style: groove;
}
</style>
