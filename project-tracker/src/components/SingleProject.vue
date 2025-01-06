<template>
    <div class="container text-start p-2 mb-3 border border-2 rounded" :class="project.isComplete?'border-success':'border-danger'">
        <div class="d-flex justify-content-between align-items-center">
            <h3 @click="toggleDetails" class="text-capitalize text-wrap" style="cursor: pointer;">{{ project.title }}</h3>
            <div class="fs-5" style="cursor: pointer;">
                <span v-if="!project.isComplete" class="p-1" @click="toggleComplete"><i class="bi bi-check-square-fill text-success"></i></span>
                <span v-else class="p-1" @click="toggleComplete"><i class="bi bi-x-circle text-danger"></i></span>
                <router-link :to="{name:'EditProject',params:{ id: project.id }}">
                    <span class="p-1"><i class="bi bi-pencil"></i></span>
                </router-link>
                <span class="p-1"><i class="bi bi-trash3" @click="deleteProject"></i></span>
            </div>
        </div>
    <div v-if="showDetails" class="card p-3 m-2 fs-5 text-lowercase">
        <p>{{ project.details }}</p>
    </div>
    </div>
</template>

<script>
export default {
    name:'SingleProject',
    props:['project'],
    data(){
        return {
            showDetails:false,
            url:'http://localhost:3000/projects/'+this.project.id
        }
    },
    methods:{
        toggleDetails(){
            this.showDetails=!this.showDetails
        },
        toggleComplete(){
            fetch(
                this.url,
                {
                    method:'PATCH',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({isComplete:!this.project.isComplete})
                }
            ).then(()=>{
                this.$emit('reloadProjects')
            }).catch((err)=>{console.log(err.message)})
        },
        deleteProject(){
            fetch(
                this.url,
                {
                    method:'DELETE'
                }
            ).then(()=>{
                this.$emit('reloadProjects')
            }).catch((err)=>{console.log(err.message)})
        }
    }

}
</script>