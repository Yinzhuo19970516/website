<template>
  <div class="container">
    
    <home-header class="header"></home-header>
    <div class="content">我是首页
      <dialog-bar></dialog-bar>
      <router-view/>

    </div>
    
    <home-button></home-button>
  </div>
</template>

<script>
import HomeHeader from '../components/header'
import HomeButton from '../components/under/index'
import dialogBar from '../components/popper/index'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HomeHeader,
    HomeButton,
    dialogBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container{
    max-width:100%;
    height:100%;
    padding-left:120px;
    padding-right:120px;
    .content{
      height:600px;
    }
  }
</style>
