<template>
    <div class="container p-2">
        <h1>Realtime data</h1>
    </div>
    <div v-for="post in posts" :key="post.id">
        {{ post.title }}
    </div>
</template>
<script>
import { projectFirestore } from '@/firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { ref } from 'vue'

export default {
    setup(){
        const posts = ref([])
        const colref = collection(projectFirestore,'posts')
        const orderRef = orderBy('createdAt','desc')
        const queryref = query(colref,orderRef)
        onSnapshot(queryref,(snap)=>{
            let docs = []
            snap.forEach((doc)=>{
                docs.push({...doc.data(),id:doc.id})
            })
            console.log('documents',docs)
            posts.value=docs
        })
        return {posts}
    }
    
}
</script>