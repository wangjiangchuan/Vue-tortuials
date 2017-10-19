import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    shits: [
      {name: 'Ryu', speciality: 'Vue Components', show: false, price: 200},
      {name: 'Crystal', speciality: 'HTML Wizardry', show: false, price: 100},
      {name: 'Hitoshi', speciality: 'Click Events', show: false, price: 50},
      {name: 'Tango', speciality: 'Conditionals', show: false, price: 2400},
      {name: 'Kami', speciality: 'Webpack', show: false, price: 1200},
      {name: 'Yoshi', speciality: 'Data Design', show: false, price: 900},
    ]
  },
  getters: {
    // state here is the parameter that passed to here
    halfprice: state => {
      var halfprice = state.shits.map( shit => {
        var data = {
          name: '**' + shit.name + '**',
          price: shit.price / 2
        }
        //console.log(data);
        return data;
      });
      return halfprice;
    }
  }
})
