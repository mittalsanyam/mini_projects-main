<template>
    <div class="container text-center fs-5 m-2 p-3">
        <span class="p-2" :class="filter==='all'?'active':'not-active'" 
        @click="updateFilter('all')">All</span>
        <span class="p-2" :class="filter==='completed'?'active':'not-active'"
        @click="updateFilter('completed')">Completed</span>
        <span class="p-2" :class="filter==='ongoing'?'active':'not-active'"
        @click="updateFilter('ongoing')">Ongoing</span>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                filter:'all'
            }
        },
        methods:{
            updateFilter(by){
                this.filter=by
                this.$emit('filterProjects',by)
            }
        }
    }
</script>
<style>
.not-active {
    cursor: pointer;
    color:darkgrey
}
.active {
    cursor: pointer;
    color:black
}
</style>