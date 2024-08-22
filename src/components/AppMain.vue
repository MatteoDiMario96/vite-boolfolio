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
    <main class="flex-centered">
        <ul class="list-group ul-projects list-unstyled">
            <SingleProject v-for="project in projects"  :key="project.id"
            :name="project.name"
            :project_created_at="project.project_created_at"
            :type="project.type"
            :technologies="project.technologies"
            />
        </ul>

        <a href="#" class="btn btn-primary w-100  mt-5" @click.prevent="changeCurrentPage()">Load More Results</a>
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