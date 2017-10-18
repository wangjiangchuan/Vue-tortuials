<template>
  <div id="shits">
    <ul>
      <li v-for='shit in shits' v-on:click='shit.show = !shit.show'>
        <h2>{{ shit.name }}</h2>
        <h3 v-show='shit.show'>{{ shit.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default{
    props: {
      shits: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
      }
    },
    methods: {
      test: function() {
        this.shits;
      }
    }
  }
</script>

<style>
#shits{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
