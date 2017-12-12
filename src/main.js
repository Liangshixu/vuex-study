// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  // 1. 用于定义状态(公共数据),类似于Vue实例中的data方法
  state:{
    list:[1,2,3,4,5],
    count:0
  },
  // 2. 用于修改状态,类似于Vue实例中methods
  mutations:{
    change(state,arg){
      state.list.push(arg);
    },
    add(state){
      state.count++
    }
  },
  // 3. 用于获取数据(获取数据之前可以进行一些操作),类似于Vue实例中的过滤器和计算属性
  getters:{
    maxnum(state){
      return `list中的最大值是${Math.max.apply(null,state.list)}`
    }
  },
  // 4. actions和mutations都是定义对数据进行操作的方法,mutations中都是同步方法,mutations中定义异步方法
  // Action 提交的是 mutation，而不是直接变更状态。所以需要修改状态还是需要使用mutations中定义的方法
  actions:{
    asyncchange(context,arg){
      // 延时1秒  
      setTimeout(() => {
        context.commit('change',arg)
      }, 3000)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注入实例
  template: '<App/>',
  components: { App }
})
