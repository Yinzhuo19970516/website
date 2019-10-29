<template>
  <div class="wrapfooter">
    <div class="footer">
      <div class="footer_left">
        北京理工大学 版权所有 地址：北京海淀区中关村南大街5号 邮编：100081 <br>
        服务邮箱：(网页内容)Webmaster@bit.edu.cn (网络服务)service@bit.edu.cn <br>
        京ICP备10019879号  京公网安备110402430044号
      </div>
      <div class="footer_right">
        <p>快速链接：</p>
        <ul>
          <li><a href="http://ss.bit.edu.cn">            网站首页
          </a></li>

          <li><a href="http://www.bit.edu.cn">            北理工主页
          </a></li>

          <li class="last"><a href="http://webpub2.info.bit.edu.cn/cms/index.jsp">            北理工网站维护处
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  .wrapfooter {
    width: 100%;
    height: 101px;
    background-image: linear-gradient(135deg, #6B8FFE 0%, #574EF2 100%);
  }
  .footer {
    width: 1000px;
    height: 101px;
    margin: 0 auto;
    color: #fff;
    position: relative;
  }
  .footer_left {
    width: 500px;
    height: 91px;
    float: left;
    line-height: 30px;
    padding-top: 10px;
    font-size: 13px;
    font-family: "微软雅黑";
    color: #fff;
  }
  .footer_right {
    width: 395px;
    height: 101px;
    float: right;
    padding: 0 0 0 105px;
  }
  .footer_right p {
    height: 43px;
    line-height: 43px;
    font-size: 13px;
    font-family: "微软雅黑";
    color: #fff;
  }
  .footer_right ul {
    overflow: hidden;
  }
  .footer_right ul li {
    float: left;
    margin: 0 48px 0 0;
  }
  .footer_right ul li a {
    font-size: 13px;
    font-family: "微软雅黑";
    color: #fff;
  }
  .footer_right ul li.last {
    margin: 0px;
  }
</style>
