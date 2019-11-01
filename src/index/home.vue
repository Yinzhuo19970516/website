<template>
  <div class="container">
    <home-header class="header"></home-header>
    <div class="content">
      <div class="left-content">
        <h1>{{this.msg}}</h1>
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in imgList" :key="index">
              <img :src="require('../' + item.imgUrl)">
              <div class="banner">
                <div class="title">
                  {{item.title}}
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="right-content">
        <div class="time">{{new Date().toLocaleDateString()}}</div>
        <div class="news">
          <h3 class="title">
            新闻>>>>>>
          </h3>
          <div class="new-content">
          </div>
        </div>
        <div class="notice">
          <h3 class="title">
            通知公告>>>>>>
          </h3>
          <div class="notice-content"></div>
        </div>
      </div>
    </div>
    <div class="search">
      <h2 class="search-title">科学研究</h2>
      <div class="search-content">
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
        <div class="test"></div>
      </div>
    </div>
    <home-footer class="footer"></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/header'
import HomeFooter from '../components/footer'
import dict from '../api/dict'
export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [1, 2, 3, 4, 5],
      msg: 'Welcome to BIT',
      imgList: dict.imgList
    }
  },
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  html{
    min-width: 100%;
    height: 100%;
    font-size: 40px;
  }
  body{
    background: #f7f7f8;
    min-width: 900px;
    height: 100%;
    font-family: Microsoft YaHei;
    font-size: 16px;
  }
  .container{
    box-sizing: border-box;
    min-height: 100%;
    max-width: 1170px;
    width:1170px;
    height:100%;
    margin:auto;
    /*padding-left:160px;*/
    /*padding-right:160px;*/
    .header{
      width: 100%;
    }
    .content{
      display: flex;
      flex-direction: row;
      height: 450px;
      .left-content{
        .swiper{
          width:600px;
          img{
            width:600px;
            height:340px;
          }
        }
      }
      .right-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height:360px;
        .time{
          margin-top: 20px;
        }
      }
    }
    .search{
      height:260px;
      margin-top: 40px;
      width:100%;
      margin-bottom: 20px;
      .search-content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .test{
          width:200px;
          height:200px;
          border: 1px solid black;
          border-radius: 40px;
        }
      }
    }
    .footer{
      width:100%;
    }
  }
</style>
