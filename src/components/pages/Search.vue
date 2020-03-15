<template>
<div>
    <div class="search-bar">
        <van-row>
            <van-col span="3">
                <img :src="locationIcon" width="80%" class="location-icon"/>
            </van-col>
            <van-col span="16">
                <input type="text" class="search-input" @keyup.enter="seek" v-model="input" />
            </van-col>
            <van-col span="5">
                <van-button size="mini" @click="goSearch">查找</van-button>
            </van-col>
        </van-row>
    </div>
    <div>
        <van-list>
            <van-row gutter="20">
                <van-col span="12" v-for="(item , index) in search" :key="index">
                    <div class="goods-info" @click="goGoodsPage()">
                        <div class="goods-image">
                            <img v-lazy="item.image" width="90%" />
                        </div>
                        <div class="goods-name">{{item.name}}</div>
                        <div class="goods-price">￥{{item.price | moneyFilter }}</div>
                    </div>
                </van-col>
            </van-row>
        </van-list>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {toMoney}  from '@/filter/moneyFilter.js'
import { Toast } from 'vant'
    export default {
        name: "Search",
        data() {
            return {
                input: '',
                hotGoods: [],
                locationIcon: require('../../assets/images/location.png')
            }
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }
        },
        computed: {
            search:function() {
                if(!this.input) {

                    return this.hotGoods
                };
                return this.hotGoods.filter(v=>{
                    return v.name.includes(this.input)
                })
            }
        },
        created() {
            axios({
                url:"https://www.studyinghome.com/mock/5e4f562fca6994415ce34130/example/index",
                method:'get',
            })
            .then(res=>{
                if(res.status==200){
                    this.hotGoods = res.data.data.hotGoods
                }
            })
            .catch(error=>{
                Toast(error)
            })
        },
        methods: {
            goGoodsPage() {
                this.$router.push({name:'Goods',query:{goodsId:this.goodsId}})
            },
            goSearch() {
                this.$router.push("/search")
            },
            seek() {
                this.search
            }
        },
    }
</script>

<style scoped>
.goods-name{
        padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
    }
    .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-icon{
        padding-top:.2rem;
        padding-left:.3rem;
    }
</style>