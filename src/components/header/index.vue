<template>
  <div>
    <div class="hr"></div>
    <div class="container">
      <div class="header-navs">
        <ul class="navs">
          <li v-for="(item,index) in navs" class="nav" @mouseenter="mouseenter1(index)" @mouseleave="mouseleave1(index)">
            <div class="nav-item" :class="{'nav-item-active':activeIndex == index}" @click="tabIndex(index)">{{item.name}}</div>
            <transition name="slide-fade" mode="out-in" appear>
            <ul v-if="item.haveList&&item.list" class="dropdownWrapper" >
              <li class="listName" :class="{'listName-active':obj.haveListName}" v-for='(obj,key) in item.list' @mouseenter="mouseenter2(index,key)" @mouseleave="mouseleave2(index,key)">{{obj.listName}}</li>
            </ul>
              </transition>
          </li>
        </ul>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navs: [
          {name: '实验室概况', haveList: false,
            list: [
              {listName: '实验室介绍',haveListName:false},
              {listName: '实验室公告',haveListName:false},
              {listName: '实验室新闻',haveListName:false},
              {listName: '媒体报道',haveListName:false},
              {listName: '荣誉资质',haveListName:false},
              {listName: '合作伙伴',haveListName:false},
              {listName: '联系我们',haveListName:false},
            ]},
          {name: '研究开发', haveList: false,
            list: [
              {listName: '科研团队',haveListName:false},
              {listName: '科研项目',haveListName:false},
              {listName: '论文专著',haveListName:false},
              {listName: '学术交流',haveListName:false},
            ]},
          {name: '师资队伍',haveList: false,
            list: [
              {listName: '学术带头人',haveListName:false},
              {listName: '教师团队',haveListName:false},
            ]},
          {name: '人才培养', haveList: false,
            list: [
              {listName: '学历培养',haveListName:false},
              {listName: '学位培养',haveListName:false},
            ]},
          {name: '学生天地', haveList: false,
            list: [
              {listName: '学生创新',haveListName:false},
              {listName: '学生作品',haveListName:false},
              {listName: '学生活动',haveListName:false},
              {listName: '学生简介',haveListName:false},
            ]},
          {name: '资源下载', haveList: false}
        ]
      }
    },
    props: {
      activeIndex: Number
    },
    created(){
      console.log(this.activeIndex)
    },
    methods: {
      mouseenter1(index){
        this.navs[index].haveList=true
      },
      mouseleave1(index){
        this.navs[index].haveList=false
      },
      mouseenter2(index,key){
        this.navs[index].list[key].haveListName=true
      },
      mouseleave2(index,key){
        this.navs[index].list[key].haveListName=false
      }
    }
  }
</script>


<style lang="less" scoped>
  .hr{
    height:1px;
    width: 100%;
    background-color: #E7EBEE;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .container {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    .header-navs {
      position: relative;
    }

    .navs {
      height: 88px;
      line-height: 88px;
      margin: 0;
      padding: 0;


      .nav {
        display: inline-block;
        position: relative;

        .nav-item {
          display: block;
          font-size: 18px;
          padding: 0 20px;
          color: #333;

          &:hover {
            color: #574EF2;
            font-weight: bold;
          }
        }
        .nav-item-active{
          color: #574EF2;
          font-weight: bold;
        }
        .nav-item-active:after{
          content: '';
          width:80%;
          height:2px;
          position: absolute;
          background-color: #574ef2;
          top:73px;
          left: 12px;

        }
        .dropdownWrapper{
          position: absolute;
          top:75px;
          z-index:2;
          display: flex;
          width:100px;
          justify-content: center;
          flex-direction: column;
          left:50%;
          background-color: white;
          transform:translate(-50%);
          border: 1px solid #574ef2;
          box-shadow:0px 8px 16px 0px rgba(0,0,0,0.08);
          .listName{
            font-size: 16px;
            text-align: center;
            margin: -20px;
          }
          .listName-active{
            color:#574ef2;
            font-weight: bold;
          }
        }
      }
    }
  }


</style>
