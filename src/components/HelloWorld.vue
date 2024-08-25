
<script>
import {Alert} from 'vue-tg'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Alert
  }
}
</script>
<template>
  <div><h1>Hello world!</h1>
  <Alert message="Hello telegram"/>
  </div>
 </template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
