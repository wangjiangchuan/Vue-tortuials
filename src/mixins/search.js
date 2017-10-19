export default{
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
