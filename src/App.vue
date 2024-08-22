<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios';


export default {
    components:{
      AppHeader,
      AppFooter,
    },
    data() {
        return {
            
        }
    },
    methods:{
      
    },
    created(){
      
    }
}
</script>

<template>
    <div class="container">
        <AppHeader/>
        <router-view></router-view>
        <AppFooter/>
    </div>
</template>

<style lang="scss">
  @use './scss/general.scss';
  
  .container{
    width: 800px;
  }
</style>
