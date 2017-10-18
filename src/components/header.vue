<template>
  <header>
    <h1>{{copy_title}}</h1>
    <button type="button" name="button" v-on:click='changeTitle()'></button>
  </header>
</template>

<script>
  import { bus } from '../main'
  export default {
    props: {
      title: {
        type: String,
      }
    },
    data() {
      return {
        copy_title: this.title,
      }
    },
    methods: {
      changeTitle: function() {
        //this.$emit('change', 'hi dudes!');
        this.copy_title = 'hi dudes!';
        bus.$emit('change', 'hi dudes!');

      }
    }
  }
</script>

<style scoped>
header {
  background: lightGreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}

</style>
