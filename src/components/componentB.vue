<template>
  <div class="cb">
      <span>组件B(mutations的使用)</span>
            <p>{{$store.state.list}}</p>
      <p>{{$store.getters.maxnum}}</p>
      <p>{{count}}</p>
  </div>
</template>

<script>
// 辅助函数
import { mapState } from 'vuex'
import { mapGetters } from 'vuex' 
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'componentB',
  data () {
    return {

    }
  },
  created(){
      
  },
//   computed:{
//       count(){
//           return this.$store.state.count
//       }
//   }

    // 使用辅助函数可以很方便的将store中的相关数据直接映射到当前实例中
    computed:mapState([
        'count'
    ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cb {
    width: 300px;
    height: 300px;
    background-color: pink;
}
</style>
