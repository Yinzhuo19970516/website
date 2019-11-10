<template>
  <div>
    <div class="hr"></div>
    <div class="container">
      <div class="header-navs">
        <ul class="navs">
          <li v-for="(item,index) in navs" class="nav" @mouseenter="mouseenter1(index)" @mouseleave="mouseleave1(index)">
            <div class="nav-item" :class="{'nav-item-active':activeIndex == index}" @click="tabIndex(index)">{{item.name}}</div>
            <ul v-if="item.haveList&&item.list" class="dropdownWrapper" >
              <li class="listName" :class="{'listName-active':obj.haveListName}" v-for='(obj,key) in item.list' @mouseenter="mouseenter2(index,key)" @mouseleave="mouseleave2(index,key)">{{obj.listName}}</li>
            </ul>
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
          {name: '实验室概况', haveList: false, list: [{listName: '实验室介绍',haveListName:false}, {listName: '研究方向',haveListName:false}]},
          {name: '科学研究', haveList: false},
          {
            name: '学术论文',
            haveList: false,
            list: [{listName: '期刊论文',haveListName:false}, {listName: '会议论文',haveListName:false}, {listName: '荣誉奖励',haveListName:false}, {listName: '专利',haveListName:false}]
          },
          {name: '人员', haveList: false, list: [{listName: '教师',haveListName:false}, {listName: '学生',haveListName:false}, {listName: '毕业生',haveListName:false}]},
          {name: '教学工作', haveList: false},
          {name: '新闻', haveList: false}
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
