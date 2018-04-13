<template>
  <div id="app">
    <whats-new></whats-new>
  </div>
</template>

<script>
import WhatsNew from './components/whatsnew.vue'
import CardTemplate from './components/cardtemplate.vue'
import BootStrap from './components/bootstrap.vue'
import Vuejs from './components/vuejs.vue'
import FaceBook from './components/facebook.vue'
import Angular from './components/angular.vue'
import Other from './components/other.vue'
export default {
  name: 'App',
  components: {
    WhatsNew,
    CardTemplate,
    BootStrap,
    Vuejs,
    FaceBook,
    Angular,
    Other,
  }
}
</script>

<style lang="scss" scoped="">
#app{
  display: flex;
  justify-content: center;
}
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(./assets/fonts/iconfont.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
</style>
