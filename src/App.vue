<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

import axios from 'axios';


export default {
    components:{
      AppHeader,
      AppMain,
      AppFooter,
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
        }
    },
    methods:{
      getProjectsPaginate(){
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage,
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.projects = [...this.projects, ...response.data.results.data];

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
        },
        updatePage(){
            this.currentPage += 1;
            this.getProjectsPaginate();
        },
    },
    created(){
      this.getProjectsPaginate();
    }
}
</script>

<template>
    <div class="container">
        <AppHeader/>

        <AppMain
        :projects="projects"
        :currentPage="currentPage"
        @update:currentPage="updatePage"
        />

        <AppFooter/>
    </div>
</template>

<style lang="scss">
  @use './scss/general.scss';
  
  .container{
    width: 800px;
  }
</style>
