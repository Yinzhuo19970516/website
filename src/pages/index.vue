<template>
  <div class="container">
    <header-info class="header-info"></header-info>
    <home-header class="header" :active-index="3"></home-header>

    <div class="content">
      <dialog-bar></dialog-bar>
      <router-view/>

    </div>

    <home-button></home-button>
  </div>
</template>

<script>
import HomeHeader from '../components/header'
import HeaderInfo from '../components/headerInfo'
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
    dialogBar,
    HeaderInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .container{
    width:1000px;
    height:100%;
    margin:auto;
    .header-info{
      margin:0 auto;
    }
    .content{
      height:600px;
    }
  }
</style>
