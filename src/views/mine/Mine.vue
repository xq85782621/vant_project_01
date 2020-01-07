<template>
  <div class="mine">
      <header>
          <!-- 上半部分 -->
          <div class="header-top">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
                <span>零洛洛丶</span>
                <span>个人主页</span>
          </div>
                <van-divider />
          <!-- 下半部分 -->
          <div class="header-bottom">
              <!-- <div><van-icon name="records" /></div> -->
              <div>
                <van-icon name="records" color="#1989fa" size='1rem'/>
                <span>订单</span>
              </div>
              <div>
                <van-icon name="balance-pay" color="#1989fa" size='1rem'/>
                <span>钱包</span>
              </div>
              <div>
                <van-icon name="chat-o" color="#1989fa" size='1rem'/>
                <span>消息</span>
              </div>
              <div>
                <van-icon name="setting-o" color="#1989fa" size='1rem'/>
                <span>设置</span>
              </div>
          </div>
      </header>

      <div class="grid">
        <van-grid square>
          <van-grid-item
              v-for="value in 8"
              :key="value"
              icon="photo-o"
              text="文字"
            />
        </van-grid>
      </div>

    

      
  </div>
</template>

<script>

export default {
  name: 'mine',
  components: {
    
  },
  data() {
    return {
      
    }
  }
}
</script>


<style  scoped>

   header {
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     /* height: 4rem; */
     width: 9rem;
     border-radius: 8px;
     background-color: #fff;
     overflow: hidden;
   }

   .grid {
      width: 9rem;
      margin: 1rem auto;
   }

  .header-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
  }

  .header-top img {
    margin-left: 0.25rem;
    height: 1.5rem;
    width: 1.5rem;
    background-color: aqua;
    vertical-align: middle;
    border-radius:60px;
    
  }

  .header-top span:nth-child(2){
    flex:1;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-right: 0px;
    text-align: start;
    font-weight: 550;
    padding: .25rem;
  }

  
  .header-top span:nth-child(3){
    margin-right: .5rem;
    color: #969799;
  }

  .header-top span:nth-child(3):active {
    background-color: rgba(0, 0, 0, .1);
  }

  .header-bottom {
    display: flex;
    justify-content: space-around;
    height:2rem;
    margin-top:5px;
  }

  .header-bottom > div {
    box-sizing: border-box;
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: .2rem  0; */
  }

  .header-bottom > div i {
     box-sizing: border-box;
     /* padding:10px; */
  }

  .header-bottom > div span {
    margin-top: 10px;
  }

   .van-divider {
    margin: 5px 5px;
  }

 
</style>
