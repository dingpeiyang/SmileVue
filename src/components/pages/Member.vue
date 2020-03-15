<template>
    <div>
        <div>
            <van-nav-bar  title="会员中心" />
        </div>
        <div class="top">
           <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=378824344,1185609431&fm=26&gp=0.jpg" class="top-img" />
        </div>
        <div class="login">
            <div><van-button type="warning" @click="goLogin">我要登录</van-button></div>
            <div><van-button type="primary" @click="goRegister">我要注册</van-button></div>
        </div>
        <div>
            <van-cell-group>
                <van-cell title="会员卡" is-link />
                <van-cell title="地址管理" is-link  />
                <van-cell title="我的订单" is-link @click="goOrder" />
                <van-cell title="我的收藏" is-link @click="myCollect" />
                <van-cell title="历史足迹" is-link @click="historyTrail"></van-cell>
                <van-cell title="会员权益" is-link />
                <!-- <van-cell title="联系我们" is-link  /> -->
                <van-collapse v-model="activeNames">
                <van-collapse-item title="联系我们" name="1">电话：15538382856</van-collapse-item>
                </van-collapse>
            </van-cell-group>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                    activeNames: []
                }
            },
        methods: {
            goRegister() {
                this.$router.push("/Register")
            },
            goLogin() {
                this.$router.push("/Login")
            },
            goOrder() {
                this.$router.push("/order")
            },
            myCollect() {
                this.$router.push("/collects")
            },
            historyTrail() {
                this.$router.push("/historyTrail")
            }
        }
    }
</script>

<style scoped>
    .top-img{
        width:70px;
        height: 70px;
        border-radius: 50px;
    }
    .top{
        height:5rem;
        text-align: center;
        padding-top:2rem;
        background-color: #EEA2AD;
    }
    .login{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        padding:10px;
    }
    .login div{
        flex:1;
        text-align: center;
    }
</style>