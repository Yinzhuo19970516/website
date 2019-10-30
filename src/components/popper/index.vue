<template>
    <div class="main">
        <div @click="openMask">Sign in</div>
        <dialog-bar v-model="sendVal" type="danger" title="注册" content="一个表单" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>
    </div>
</template>
<script>
import dialogBar from './dialogBar'
export default {
   components:{
        'dialog-bar': dialogBar,
    },
    data(){
        return{
            sendVal: false,
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            console.log('点击了取消');
        },
        clickDanger(){
            console.log('这里是danger回调')
        },
        clickConfirm(){
            console.log('点击了confirm');
        }
    }
}
</script>
<style lang="less" scoped>
</style>