<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <p><button v-on:click="onClickButton()">Get Poland time</button></p>
  <span>{{ $data.ptime }}</span>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars

import axios from "axios";

export default {
  name: 'App',
  data(){
    return {
      ptime: null
    }
  },
  methods: {
    onClickButton: function () {
      let data = this.$data
      data.ptime = 'Requesting data...'

      axios.get('https://flask-yuki-1.herokuapp.com/poland')
          .then(res =>{
            data.ptime = res.data
          })
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
