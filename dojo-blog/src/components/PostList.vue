<template>
    <div class="container">
        <div v-for="post in posts" :id="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'
export default {
    props:['posts'],
    components:{SinglePost},
    setup(props){
        
    }
        
}
</script>

<style>

</style>