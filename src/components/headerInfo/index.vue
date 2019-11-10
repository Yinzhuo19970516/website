<template>
  <div class="container">
    <div class="logo">
      <img src="../../img/logo_img.gif">
    </div>
    <div class="nav-right">
      <div class="tips">
        <a>中文</a>
        <a>英文</a>
      </div>
      <div class="header-search">
        <input class="search-input" placeholder="搜索" type="search" name="search"/>
        <label class="search-btn" for="search">
          <i class="icon-search"></i>
        </label>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .container{
    width: 1000px;
    font-family: "宋体",Arial, Helvetica, sans-serif;
    color: #000;
    line-height: 20px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    height:75px;
    justify-content: space-between;
    .nav-right{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .tips{
        display: flex;
        margin-bottom: 5px;
        justify-content: space-between;
        margin-left: 140px;
        a{
          margin-right: 10px;
        }
        & :hover{
          color: #574EF2;
        }
      }
      .header-search{
        width: 200px;
        height: 30px;
        border: 1px solid #E7EBEE;
        input{
          width: 140px;
          height: 100%;
          border: 0;
          outline: none;
          text-indent: 1em;
        }
        .search-btn{
          display: block;
          float: right;
          width: 50px;
          height: 100%;
          border-left: 1px solid #E7EBEE;
          cursor: pointer;
          .icon-search{
            display: block;
            width: 20px;
            height: 20px;
            margin-top: 5px;
            margin-left: 15px;
            background: url('../../img/icon-search.png') center center no-repeat;
            background-size: 100% 100%;
          }
          &:hover {
            background: #574EF2;
            .icon-search {
              background: url('../../img/icon-search-white.png') center center no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }
    };
  }
</style>
