<template>
  <div class="home">
    <router-view/>
    <van-tabbar route>
          <van-tabbar-item  replace to="/home/index" icon="home-o">主页</van-tabbar-item>
          <van-tabbar-item  replace to="/home" icon="friends-o">消息</van-tabbar-item>
          <van-tabbar-item  replace to="/home" icon="setting-o">标签</van-tabbar-item>
          <van-tabbar-item  replace to="/home/mine" icon="contact" info="9">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>


// import HelloWorld from '@/components/HelloWorld.vue'
import { getRequest ,postRequest } from '../util/Request' 
import { async } from 'q'

export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
    }
  },

  methods: {
    async test(){
      let response_userId = await getRequest('/test/userId');
      // 把上一个 ajax 请求的结果当做参数
      let parasm = {
        userId : response_userId.data
      }
      let response_userInfo = await getRequest('/test/userInfo',parasm);
       let parasm2 = {
        userId : response_userInfo.data
      }
       let response_userInfo2 = await getRequest('/test/userInfo');
      return response_userInfo2.data;

    }
  },
  created(){
    // this.test().then((response)=>{
    //   console.log(response)
    // })

    this.test();


    /**
     * pormise 链式调用
     */
    // getRequest('/test/userId').then((response) => {
    //   let params = {
    //     userId : response.data,
    //   }
    //   //上次请求的结果作为这次请求的参数
    //   return getRequest('/test/userInfo',params);
    // }).then((response)=>{
    //   let params = {
    //     userId : response.data,
    //   }
    //   //上次请求的结果作为这次请求的参数
    //    return getRequest('/test/userInfo',params);
    // }).then((response)=>{
    //   console.log(response.data)
    // });

     

    
  }
}
</script>


<style scoped>
 
</style>
