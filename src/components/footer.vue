<template>
  <footer>
    <p>{{ copyright }}  {{ title }}</p>
  </footer>
</template>

<script type="text/javascript">
  export default {
    props: {
      title: {
        type: String,
      }
    },
    data() {
      return {
        copyright: 'Copyright 2017'
      }
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
