<template>
  <div>
    <van-nav-bar title="历史足迹" left-text="返回" left-arrow @click-left="goBack" />
    <div class="wrap" v-for="(item, index) in historytrailyarr" :key="index">
      <img :src="item.image" width="50%" />
      <div class="letter">
        <span class="goods-name">{{item.name}}</span>
        <div>￥{{item.mallPrice}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HistoryTrail",
  data() {
    return {
      historytrailyarr: []
    };
  },
  created() {
    var historyarr = JSON.parse(localStorage.getItem("categorydata"));
    historyarr.map(item => {
      if (this.$store.state.categoryarr.includes(item.goodsId)) {
        this.historytrailyarr.push(item);
      }
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.wrap {
  margin-bottom: 12px;
  background-color: white;
  display: flex;
  justify-content: space-around;
}
.wrap img {
  margin: 8px;
}
.goods-name {
  margin: 20px auto;
  display: block;
}
.wrap .letter {
}
</style>