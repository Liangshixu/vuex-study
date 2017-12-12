# vuex-study

> Vuex是一个状态管理库,或者说是专为Vue应用程序开发设计的**状态管理模式**,它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

> 注:所谓状态,可以理解成项目中各个组件需要用到的数据。

## 初始化公共状态

``` javascript
1. 安装vuex
npm i vuex --save

2. 入口文件中实例化Store
import Vuex from 'vuex'
var store = new Vuex.Store({
  // 1. 用于定义状态(公共数据),类似于Vue实例中的data方法
  state:{
      msg:'初始化的数据'
  },
  // 2. 用于修改状态,类似于Vue实例中methods
  mutations:{
      change(state,arg){
          // 更改状态
          state.msg = arg
      }
  },
  // 3. 用于获取数据(获取数据之前可以进行一些操作),类似于Vue实例中的过滤器和计算属性
  getters:{
      fixmsg(state){
          return `${state.msg}----处理后的数据`
      }
  },
  // 4. actions和mutations都是定义对数据进行操作的方法,mutations中都是同步方法,mutations中定义异步方法
  // Action 提交的是 mutation，而不是直接变更状态。所以需要修改状态还是需要使用mutations中定义的方法
  actions:{
      asyncchange(context,arg){
          // 异步方法
          setTimeout(() => {
              context.commit('change',arg)
          }, 3000)
      }
  }
})

3. 注入到Vue实例中
new Vue({
    el:'#app',
    store
})
```

## 使用状态

``` javascript
1. 使用state中的数据
JavaScript: this.$store.state.msg
HTML: $store.state.msg

2. 使用getters中的数据
JavaScript: this.$store.getters.fixmsg
HTML: $store.getters.msg
```

## 变更状态(修改数据)

> 状态的变更必须使用mutations中提供的方法进行修改

``` javascript
1. 提交mutations中的变更方法
this.$store.commit('change','我是被修改的数据')

2. 异步提交actions中的变更方法
this.$store.dispatch('asyncchange','我是被异步修改的数据')
```

## 使用辅助函数

> 辅助函数可以直接将`state`,`getters`中的数据映射到Vue组件中的计算属性上,可以将`mutations`,`actions`中的方法映射到组件中的`methods`中

``` javascript
import { mapState } from 'vuex'
import { mapGetters } from 'vuex' 
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

new Vue({
    computed:mapState([
        'count'
    ])
})
// ==>等价于
new Vue({
    computed:{
        count(){
            return this.$store.state['count']
        }
})
```