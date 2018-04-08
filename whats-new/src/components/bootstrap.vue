<template>
  <span>
    <CardTemplate v-for="data in carddata" v-bind:cardData="data" :key="data.title" ></CardTemplate>
  </span>

</template>

<script>
import CardTemplate from "./cardtemplate.vue";
import {QueryInfoWithOwner} from '../../utils/axios'
import {toCardDataWithOwner} from '../../utils/tool'

export default {
  components: {CardTemplate},
  name: 'bootstrap',
  data(){
    return {
      carddata:[]
    }
  },
  mounted:function(){
    QueryInfoWithOwner("twbs",3,
      res=>{
        this.carddata = toCardDataWithOwner(res);
      },err=>{
        console.error(err)
      })
  }

}
</script>

<style>
</style>
