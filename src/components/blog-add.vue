<template>
  <div id="add-blog">
    <h3>Add a new Blog Post</h3>
    <form>
      <label>Blog Title:</label>
      <input type="text" name="blog-name" v-model.lazy='blog.title' required>
      <label>Blog Content:</label>
      <textarea name="blog-content" v-model.lazy='blog.content'></textarea>
      <div id="checkoutboxes">
        <label>Ninjas</label>
        <input type="checkbox" name="" value="ninjas" v-model='blog.categories'>
        <label>Wizards</label>
        <input type="checkbox" name="" value="wizards" v-model='blog.categories'>
        <label>Mario</label>
        <input type="checkbox" name="" value="mario" v-model='blog.categories'>
        <label>Cheese</label>
        <input type="checkbox" name="" value="cheese" v-model='blog.categories'>
      </div>
      <div id="select">
        <label>Author</label>
        <select name="selectbox" v-model='blog.author'>
          <option v-for='author in authors'>{{ author }}</option>
        </select>
      </div>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title:{{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for='category in blog.categories'>{{ category }}</li>
      </ul>
      <label>Author:</label>
      <p>{{ blog.author }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        blog: {
          title: '',
          content: '',
          categories: [],
          author: '',
        },
        blogTitle: '',
        blogContent: '',
        authors: ['Sally', 'Ryu', 'Snow White', 'Siri'],
      }
    },
    methods: {

    },
    components: {

    }
  }
</script>

<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type='text'], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkoutboxes input{
  display: inline-block;
  margin: 10px;
}
#checkoutboxes label {
  display: inline-block;
  margin: 5px;
}
#preview ul{
  text-align: center;
  list-style-type: none;
}
#select label{
  display: inline-block;
  margin-right: 10px;
}
</style>
