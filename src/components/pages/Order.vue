<template>
    <div>
        <van-nav-bar
            title="我的订单"
            left-text="返回"
            left-arrow
            @click-left="goBack"
         />
        <van-list>
            <van-row gutter="20">
                <van-col span="24" v-for="(item , index) in orderedGoods" :key="index">
                    <div class="f">
                        <!-- <div>
                            <img v-lazy="item.image" width="100%" />
                        </div> -->
                        <div>
                            <div class="goods-name">{{item.name}}</div>
                            <div class="goods-name">数量：{{item.count}}</div>
                            <van-button style="margin-left: 8px" type="info" size="small" @click="goComment">评论</van-button>
                            <van-popup v-model="show">
                                <!-- <van-cell-group>
                                    <van-field v-model="value" placeholder="请评论" />
                                    <van-button size="normal">发表评论</van-button>
                                </van-cell-group> -->
                                <div class="commet">
                                    <input v-model="val" type="text" placeholder="请输入评论">
                                    <van-button @click="sendComment" class="sendCom" size="normal">发表评论</van-button>
                                </div>
                                
                            </van-popup>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </van-list>
    </div>
</template>

<script>
import { Toast } from 'vant'
    export default {
        name: "Order",
        data() {
            return {
                orderedGoods: [],
                show: false,
                val: ""
            }
        },
        created() {
            this.orderedGoods = JSON.parse(localStorage.getItem("ordered"))
            // this.$router.go(0)
        },
        methods: {
            goBack() {
               this.$router.go(-1)
           },
           goComment() {
               this.show = true
               
           },
           sendComment() {
               if(this.val === '') {
                   Toast.fail("不能为空")
               } else {
                   Toast.success("评论成功")
                   this.val = ""
                   this.show = false;
               }
           }
        },
    }
</script>

<style scoped>
.van-row{
    background: white;
}
.f{
    display: flex;
    margin-bottom: 12px;
    border-bottom: 1px solid rgb(236, 234, 234);
    box-shadow: 1px 1px 1px gainsboro;
    padding-bottom: 12px;
}
.goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
       margin-bottom: 8px;
}
.van-popup{
    width: 80%;
    height: 120px;
    background-color: grey
}
.van-popup input{
    width: 100%;
    border-radius: 3px;
    height: 40px;
    margin-bottom: 12px;
    border: none
}
.van-popup .sendCom{
    margin-left: 35%
}
</style>