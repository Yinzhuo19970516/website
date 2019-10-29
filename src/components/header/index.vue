<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item class="name">数字媒体研究所</el-menu-item>
      <el-submenu index="1">
        <template slot="title">实验室概况</template>
        <el-menu-item index="1-1" @click="goToExample">实验室介绍</el-menu-item>
        <el-menu-item index="1-2">研究方向</el-menu-item>
      </el-submenu >
      <el-menu-item index="2">科学研究</el-menu-item>
      <el-submenu index="3">
        <template slot="title">学术论文</template>
        <el-menu-item index="3-1">期刊论文</el-menu-item>
        <el-menu-item index="3-2">会议论文</el-menu-item>
        <el-menu-item index="3-3">荣誉奖励</el-menu-item>
        <el-menu-item index="3-4">专利</el-menu-item>
      </el-submenu >
      <el-submenu  index="4">
        <template slot="title">人员</template>
        <el-menu-item index="4-1">教师</el-menu-item>
        <el-menu-item index="4-2">学生</el-menu-item>
        <el-menu-item index="4-3">毕业生</el-menu-item>
      </el-submenu >
      <el-menu-item index="5">教学工作</el-menu-item>
      <el-menu-item index="6">新闻</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(123, key, keyPath)
    },
    goToExample () {
      this.$router.push({name: 'example'})
    }
  }
}
</script>

<style lang="less" scoped>
  .name{
    font-size:20px;
    font-weight:bold;
    color:#333333;
  }
</style>
