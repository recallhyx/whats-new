<template>
  <span>
    <CardTemplate v-for="data in carddata" v-bind:cardData="data" :key="data.id" ></CardTemplate>
  </span>

</template>

<script>
  import CardTemplate from "./cardtemplate.vue";
  import {QueryInfoWithOwner} from '../../utils/axios'
  import {toCardDataWithOwner} from '../../utils/tool'

  export default {
    components: {CardTemplate},
    name: 'facebook',
    data(){
      return {
        carddata:[]
      }
    },
    mounted:function(){
      QueryInfoWithOwner("facebook",4,
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
