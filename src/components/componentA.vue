<template>
  <div class="ca">
      <span>组件A(state的使用)</span>
      <!-- HTML部分可以直接使用$store.state.的方式获取状态 -->
      <!-- <p>{{$store.state.list}}</p> -->
      <p>{{arr}}</p>

    <input type="text" v-model.number="num">
      <a href="javascript:;" @click="addnum">添加数字</a>
      <p>{{$store.state.count}}</p>
      <button @click="addcount">自增</button>
  </div>
</template>

<script>
export default {
  name: "componentA",
  data() {
    return {
      arr: [],
      num: 0
    };
  },
  created(){
      // JS部分使用this.$store.state.的方式获取状态
      this.arr = this.$store.state.list
  },
  methods: {
    addnum() {
      // 修改store中的状态必须使用this.$store.commit方法,不能直接使用this.$store.state.list = []的赋值方式
      // this.$store.commit方法有两个参数,第一个参数是需要调用的修改状态的方法名称,在store的mutations中定义
      // 第二个参数可选,表示的是第一个参数中这个方法需要传递的参数
      // 例如change方法有形参arg,这里this.num为实参
      this.$store.commit("change", this.num);
    },
    addcount(){
        this.$store.commit("add");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ca {
  width: 300px;
  height: 300px;
  background-color: skyblue;
}
</style>
