<template>
    <div class="container p-2 text-start">
        <div class="container mb-3">
            <h1>Create New Blog</h1>
        </div>
        <div v-if="error">{{ error }}</div>
        <div class="container border">
            <form class="form p-2" @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label class="form-label"><h3>Title:</h3></label>
                    <input type="text" v-model="title" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label class="form-label"><h3>Content:</h3></label>
                    <textarea class="form-control" v-model="body" required></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label"><h3>Tags (hit enter to add a tag)</h3></label>
                    <input class="form-control" 
                    v-model="tag" type="text"
                    @keydown.enter.prevent="handleKeyDown">
                    <div class="d-flex container m-2">
                    <span class="p-1" v-for="tag in tags" :key="tag">
                        #{{ tag }}
                    </span>
                </div>
                </div>
                <div class="mb-3 text-center">
                    <button class="btn btn-primary">Add Post</button>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup(){
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const error = ref(null)
        const router = useRouter()
        
        const handleKeyDown = () => {
            tag.value = tag.value.trim()
            if (!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value=''
        }
        const handleSubmit = async()=>{
            try {
                let res = await fetch('http://localhost:3000/posts',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        title:title.value,
                        body:body.value,
                        tags:tags.value
                    })
                })
                if (!res.ok){
                    throw Error('server error')
                }
                router.push({name:'home'})
            }
            catch (err) {
                error.value=err.message
            }
        }
        return {
            title,
            body,
            tag,
            tags,
            handleKeyDown,
            handleSubmit,
            error
        }
    }
}
</script>

<style>

</style>