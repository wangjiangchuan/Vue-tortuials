<template>
  <div id="product-list-one">
    <h2>Which shit do you perfer?</h2>
    <ul>
      <li v-for="product in halfprice">
        <span name='name'>{{ product.name }}</span>
        <span name='price'>${{ product.price }}</span>
        <button type="button" name="button" v-on:click='deleteShit()'></button>
      </li>
    </ul>
    <button type="button" name="reducePrice" v-on:click='reducePrice()'>Reduce Price</button>
  </div>
</template>

<script>
export default {
  props: {
    // products: {
    //   type: Array,
    // }
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.shits;
    },
    halfprice() {
      return this.$store.getters.halfprice;
    }
  },
  methods: {
    deleteShit: function() {
      this.$store.state.shits.pop();
    },
    reducePrice: function() {
      // if we do the mutations here directly on the origin value,
      //then there will be errors when strict mode in turned on in store.js using vuex
      //this.$store.mutations.reducePrice;
      this.$store.commit('reducePrice');
    }
  }
}
</script>

<style lang="css" scoped>
#product-list-one {
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;

}

#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

#product-list-one ul{
  padding: 0 auto;
}
.price {
  font-weight: bold;
  color: #E8800C;
}
</style>
