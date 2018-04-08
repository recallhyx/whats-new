<template>
  <span>
    <CardTemplate v-for="data in carddata" v-bind:cardData="data" :key="data.id" ></CardTemplate>
  </span>

</template>

<script>
import CardTemplate from "./cardtemplate.vue";
import {QueryInfoRepository} from '../../utils/axios'
import {toCardDataOnlyRepository} from '../../utils/tool'
export default {
  components: {CardTemplate},
  name: 'vuejs',
  data(){
    return {
      carddata:[],
    }
  },
  mounted: function(){
    let list = ['vue','vue-cli','vue-router','vuex'];
    for(let i = 0,len = list.length;i<len;i++){
      QueryInfoRepository('vuejs',list[i],
        res=>{
          let item = toCardDataOnlyRepository(res);
          this.carddata.push(item);
        },err=>{
          console.error(err);
        })
    }
  }
}
</script>

<style>

</style>
