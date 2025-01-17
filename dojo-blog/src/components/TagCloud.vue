<template>
    <div class="container card p-4 mb-3">
        <h3 class="card-title text-primary">Tags</h3>
        <div v-for="tag in tags" :key="tag" class="tag">
            <router-link :to="{name:'tag',params:{tag:tag}}">
                #{{ tag }}
            </router-link>
        </div>
    </div>
</template>

<script>
import useTags from '../composables/useTags.js';

export default {
    props:['posts'],
    setup(props){
        const tags = useTags(props.posts)
        return { tags }
    }
}
</script>
<style>
.tag a{
    color:#ccc;
    text-decoration: none;
}
.tag a.router-link-active {
    color:black
}
</style>