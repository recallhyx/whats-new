<template>
  <span>
    <CardTemplate v-for="data in carddata" v-bind:cardData="data" :key="data.id" ></CardTemplate>
  </span>

</template>

<script>
  import CardTemplate from "./cardtemplate.vue";
  import {QueryInfoRepository} from '../../utils/axios';
  import {toCardDataOnlyRepository} from '../../utils/tool';
  import {CONSTANT_OTHER} from '../../constant/constant'
  export default {
    components: {CardTemplate},
    name: 'other',
    data(){
      return {
        carddata:[],
      }
    },
    mounted: function(){
      let arr = Object.keys(CONSTANT_OTHER);
      for(let i = 0,len = arr.length;i<len;i++){
        let owner = arr[i];
        QueryInfoRepository(owner,CONSTANT_OTHER[owner],
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
