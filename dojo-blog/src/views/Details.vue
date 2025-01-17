<template>
    <div class="container text-center">
        <div v-if="error" class="container border">
            {{ error }}
        </div>
        <div v-if="post" class="container text-start p-2 mb-3 mt-3">
            <div>
                <h1>{{ post.title }}</h1>
            </div>
            <div class="d-flex container border p-2">
                <span class="p-2 m-1 bg-info-subtle rounded-pill" v-for="tag in post.tags" :key="tag">
                    #{{ tag }}
                </span>
            </div>
            <div class="container border fs-4 p-2 lh-base text-wrap">
                <p> {{ post.body }}</p>
            </div>
            <div class="container p-2 text-center">
                <button @click="handleClick" class="btn btn-danger">Delete Post</button>
            </div>
        </div>
        <div v-else>
            <LoadingSpinner />
        </div>
    </div>
</template>

<script>
import getSinglePost from '@/composables/getSinglePost';
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useRoute, useRouter } from 'vue-router'
import { deleteDoc, doc } from 'firebase/firestore';
import { projectFirestore } from '@/firebase/config';
export default {
    props:['id'],
    components:{LoadingSpinner},
    setup(props){
        const route = useRoute()
        const router = useRouter()
        console.log(route)
        const {post,error,load} = getSinglePost(route.params.id)
        load()
        const handleClick = async ()=>{
            await deleteDoc(doc(projectFirestore,'posts',props.id))
            router.push({name:'home'})
        }
        return {post,error,handleClick}
    }
}
</script>