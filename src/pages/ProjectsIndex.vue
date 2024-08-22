<script>
import SingleProject from './components/SingleProject.vue';
import axios from 'axios';
export default {
    components:{
        SingleProject,
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
            .catch((error) => {
                this.$router.push({name: "404-not-found"});
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
        // changeCurrentPage(){
        //     this.$emit('update:currentPage');
        // },
    },
    created(){
        this.getProjectsPaginate();
    },
    props:{

    },
}
</script>

<template>
    <main class="flex-centered">
        <ul class="list-group ul-projects list-unstyled">
            <router-link  v-for="project in projects"  :key="project.id"
            >
                <SingleProject
                :id="project.id"
                :name="project.name"
                :project_created_at="project.project_created_at"
                :type="project.type"
                :technologies="project.technologies"/>
            </router-link>

            <button class="btn btn-primary mt-5" @click.prevent="updatePage()">Load more</button>
        </ul>

        
        
    </main>

</template>

<style lang="scss" scoped>
    .flex-centered{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .ul-projects{
        width: 100%;
    }
</style>
