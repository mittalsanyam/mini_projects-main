<template>
    <nav class="container text-center m-1 fs-4" >
        <router-link :to="{name:'Home'}" class="m-1 p-1" 
        :class="active==='home'?'navActive':'navTab'" >Home</router-link>
        <router-link :to="{name:'AddProject'}" class="m-1 p-1" 
        :class="active==='addproject'?'navActive':'navTab'" >Add Project</router-link>
    </nav>
</template>
<script>
export default{
    props:['active'],
}
</script>
<style>

.navTab {
    text-decoration: None;
    color:grey;
}
.navActive {
    color:black;
    text-decoration: None;
}
</style>