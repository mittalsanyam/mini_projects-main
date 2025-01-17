<template>
    <div class="container card text-start p-4 mb-3">
        <router-link :to="{name: 'details',params:{'id':post.id}}">
            <h3 class="card-title text-primary">{{ post.title }}</h3>
        </router-link>
        <p style="color: grey;">Created at {{ createdAt }}</p>
        <p> {{ snippet }}</p>
        <div class="d-flex flex-wrap container">
            <span class="p-2 m-1 bg-info-subtle rounded-pill" v-for="tag in post.tags" :key="tag">
                <router-link :to="{name:'tag',params:{'tag':tag}}">#{{ tag }}</router-link>
            </span>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['post'],
    setup(props){
        const snippet = computed(()=>{
            return props.post.body.substring(0,100) + '.....'
        })
        const createdAt = props.post.createdAt.toDate()
        return {
            snippet,createdAt
        }
    }
}
</script>
<style>
div a {
    text-decoration: None;
    font-weight: bold;
}
</style>