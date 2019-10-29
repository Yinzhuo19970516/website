<template>
  <div class="container">
    <home-header class="header"></home-header>
    <div class="content">我是首页</div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '../components/header'
import HomeFooter from '../components/footer'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
