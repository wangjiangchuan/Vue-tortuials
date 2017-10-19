<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h2>Show all blogs</h2>
    <div class="single-blog" v-for='post in posts'>
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
</style>
