<template>
  <footer>
    <p>{{ copyright }}  {{ copytitle }}</p>
  </footer>
</template>

<script type="text/javascript">
  import { bus } from '../main'
  export default {
    props: {
      title: {
        type: String,
      }
    },
    data() {
      return {
        copyright: 'Copyright 2017',
        copytitle: this.title,
      }
    },
    methods: {

    },
    created() {
      bus.$on('change', (data) => {
        this.copytitle = data;
      })
    }
  }
</script>

<style scoped>
footer{
  background: #222;
  padding: 6px;
}
p{
  color: lightGreen;
  text-align: center;
}
</style>
