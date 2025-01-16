<template>
  <div class="container p-2 text-center">
    <div class="container">
      <h1 class="text-start"># {{ tag }}</h1>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="row">
      <div class="col-9">
        <PostList :posts="filteredPosts"/>
      </div>
      <div class="col-3">
        <TagCloud :posts="posts"/>
      </div>
    </div>
    <div v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>
<script>
import PostList from '../components/PostList.vue';
import getPosts from '@/composables/getPosts';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import TagCloud from '@/components/TagCloud.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
    components:{PostList,LoadingSpinner,TagCloud},
    setup(){
        const {posts,error,load} = getPosts()
        load()
        const route = useRoute()
        const filteredPosts = computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(route.params.tag)
            })
        })
        const tag = computed(()=>{
            return route.params.tag
        })
        return {posts,error,filteredPosts,tag}
    },
}

</script>
