<template>
  <div class="hello">
    <h1>父组件 {{this.$store.state.list}}</h1>
    <div class="c">
      <componentA></componentA>
      <componentB></componentB>
      <componentC></componentC>
    </div>
  </div>
</template>

<script>
import componentA from './componentA'
import componentB from './componentB'
import componentC from './componentC'

export default {
  name: 'Home',
  components:{
    componentA,
    componentB,
    componentC
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c {
  display: flex
}
</style>
