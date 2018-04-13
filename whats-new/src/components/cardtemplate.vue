<template>
  <span @click="navigateTo">
    <md-card md-with-hover >
      <md-ripple>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{carddata.title}}</div>
            <div class="md-subhead">
               <span>
                 <md-icon>star</md-icon>
                  {{carddata.stargazers | formatNumber}}
                </span>
            </div>
          </md-card-header-text>
          <md-card-media>
            <img :src='carddata.avatarUrl' alt="People">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <div>最新版本: {{carddata.version}}
            <span class="new" v-if="carddata.isNew">new</span>
          </div>
          <div>更新时间: {{carddata.updatetime | formatTime}}</div>
        </md-card-content>
      </md-ripple>
    </md-card>
  </span>
</template>

<script>
import MdCardHeader from "../../node_modules/vue-material/src/components/MdCard/MdCardHeader/MdCardHeader.vue";
import MdCardContent from "../../node_modules/vue-material/src/components/MdCard/MdCardContent/MdCardContent.vue";


export default {
  components: {
    MdCardContent,
    MdCardHeader},
  name: "cardtemplate",
  data(){
    return {
      carddata:this.cardData
    }
  },
  props:['cardData'],
  methods:{
    navigateTo: function(){
      window.open(this.carddata.url,'__blank');
    }
  },
  // 对数据进行处理
  filters: {
    formatTime: function (value) {
      if(value === "暂无数据"){
        return value;
      }
      let time = new Date(value);
      let localtime = time.toLocaleString();
      return localtime;
    },
    formatNumber: function (value) {
      let number = value.toLocaleString();
      return number;
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 6px;
    display: inline-block;
    vertical-align: top;
  }
  .new{
    background-color: red;
    color: white;
    padding-left:3px;
    padding-right:3px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
  }
</style>
