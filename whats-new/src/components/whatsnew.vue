<template>
  <div>
    <md-toolbar >
      <h3 class="md-title" style="flex: 1">What's New</h3>
      <md-button class="md-icon-button" @click="navigateTo">
        <md-icon>forward</md-icon>
        <md-tooltip>我的Github</md-tooltip>
      </md-button>
    </md-toolbar>
    <Vuejs></Vuejs>
    <facebook></facebook>
    <angular></angular>
    <BootStrap></BootStrap>
    <Other></Other>
    </div>
</template>

<script>
import {CONSTANT_URL,CONSTANT_TOKEN} from '../../constant/constant'
import {QueryInfoWithOwner,QueryInfoRepository} from '../../utils/axios'
import Vuejs from './vuejs.vue'
import BootStrap from './bootstrap.vue'
import Facebook from "./facebook.vue";
import Angular from './angular.vue'
import Other from './other.vue'
import MdAppContent from "../../node_modules/vue-material/src/components/MdApp/MdAppContent.vue";
export default {
  components:{
    MdAppContent,
    Facebook,
    BootStrap,
    Vuejs,
    Angular,
    Other,
  },
  name: 'whatsnew',
  methods:{
    navigateTo: function(){
      window.open("https://github.com/recallhyx/whats-new",'__blank');
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-app {
    max-height:1920px;
    border: 1px solid rgba(#000, .12);
  }
</style>
