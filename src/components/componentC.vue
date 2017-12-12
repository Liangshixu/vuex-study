<template>
  <div class="cc">
      <span>组件C(actions的使用)</span>
      <p>{{$store.state.list}}</p>
      <p>{{$store.getters.maxnum}}</p>
      <input type="text" v-model.number="num">
      <a href="javascript:;" @click="addnum">异步添加</a>
  </div>
</template>

<script>
export default {
  name: 'componentC',
  data () {
    return {
      num:0
    }
  },
  methods:{
    addnum(){
      // 对数据的异步操作使用this.$store.dispatch方法触发actions中定义的方法
      this.$store.dispatch('asyncchange',this.num)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cc {
    width: 300px;
    height: 300px;
    background-color:lightgreen;
}
</style>
