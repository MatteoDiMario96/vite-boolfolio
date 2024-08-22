<script>

export default {
    name:   "ProjectsShow",
    components:{
        
    },
    data() {
        return {
            project: {},
        }
    },
    methods:{
        getSingleProject(id){
            axios.get(`http://127.0.0.1:8000/api/projects/${id}`, {
                params: {
                    
                }
            })
            .then((response) => {
                console.log(response.data);
                this.project = response.data
                // this.project = [...this.projects, ...response.data.results.data];

            })
            .catch((error) => {
                this.$router.push({name: "404-not-found"});
                console.log(error);
            })
            .finally(function () {
                // always executed
            });  
    },
    created(){
        this.getSingleProject(this.$route.params.id);
    },
    props:{
        name:{
            type: String,
            required: true,
        },
        project_created_at:{
            type: String,
            required: true,
        },
        type:{
            type: Object,
            required: true,
        },
        technologies:{
            type: Array,
            required: true,
        },
    },
}
}
</script>

<template>
    <h1>Sono la pagina del progetto singolo</h1>
    <div class="card text-center mt-4">
            <h3 class="card-header">{{ name }}</h3>
            <div class="card-body">
                <div  class="d-flex justify-content-center">
                    <span v-for="(technology,index) in technologies" :key="technology.id">
                        <h5 v-if="index < technologies.length - 1" class="card-title">{{technology.name}}  |-|&nbsp;   </h5>
                        <h5 v-else-if="index < technologies.length" class="card-title"> {{technology.name}} </h5>
                    </span>
                </div>
                <h5 class="card-title">
                    <!-- <em>{{ type.name }}</em>  -->
                </h5>
                <p class="card-text">{{ project_created_at }}</p>
                <router-link :to="{name: 'ProjectsIndex'}" class="btn btn-primary" @click="getSingleProject();">Torna a tutti i progetti</router-link>
            </div>  
        </div>
</template>

<style lang="scss" scoped>
  
</style>
