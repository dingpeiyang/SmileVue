<template>
    <div>
        <van-nav-bar
            title="我的收藏"
            left-text="返回"
            left-arrow
            @click-left="goBack"
         />
        <!-- <van-list>
            <van-row gutter="20">
                <van-col span="24" v-for="(item , index) in collectdGoods" :key="index">
                    <div>
                        <div>
                            <img v-lazy="item.IMAGE1" width="60%" />
                        </div>
                        <div class="goods-name">{{item.NAME}}</div>
                        <div>价格：{{item.PRESENT_PRICE}}</div>
                    </div>
                </van-col>
            </van-row>
        </van-list> -->
        <div class="collects" v-for="(item , index) in collectdGoods" :key="index">
            <div class="image">
                <img :src="item.IMAGE1" alt="图片">
            </div>
            <div class="character">
                <div class="goods-name">{{item.NAME}}</div>
                <div style="color:red">价格：{{item.PRESENT_PRICE}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Collects',
        data() {
            return {
                collectdGoods: []
            }
        },
        created() {
            this.collectdGoods = JSON.parse(localStorage.getItem("collected"))
        },
        methods: {
            goBack() {
               this.$router.go(-1)
           },
        }
    }
</script>

<style scoped>
    .collects{
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .collects .image{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100px;
        height: 100px;
        /* flex-grow: 1; */
    }
    .image img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
    .collects .character{
        /* flex-grow: 2; */
        padding-left: 12px;
        padding-top: 8px;
    }
    .collects .character .goods-name{
        padding-bottom: 7px;
        font-size: 16px;
    }
</style>