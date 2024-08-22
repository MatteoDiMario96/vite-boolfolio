<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    created(){
        
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
</script>

<template>
    <li>
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
                    <em>{{ type.name }}</em> 
                </h5>
                <p class="card-text">{{ project_created_at }}</p>
                <a href="#" class="btn btn-primary">Vedi dettagli</a>
            </div>  
        </div>
    </li>
    
</template>

<style scoped>

</style>