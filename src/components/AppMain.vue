<script>
import SingleProject from './SingleProject.vue';
export default {
    components:{
        SingleProject,
    },
    data() {
        return {
            
        }
    },
    methods:{
        changeCurrentPage(){
            this.$emit('update:currentPage');
        },
    },
    created(){
        
    },
    props:{
        projects:{
            typeof: Array,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
}
</script>

<template>
    <main>
        <ul>
            <SingleProject v-for="project in projects"  :key="project.id"
            :name="project.name"
            :project_created_at="project.project_created_at"
            :type="project.type"
            :technologies="project.technologies"
            />
        </ul>

        <a href="#" class="btn btn-primary" @click.prevent="changeCurrentPage()">Load More</a>
    </main>

</template>

<style scoped>

</style>