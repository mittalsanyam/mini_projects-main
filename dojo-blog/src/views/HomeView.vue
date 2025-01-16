<template>
  <div class="container p-2 text-center">
    <div class="container">
      <h1 class="text-start">Home</h1>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="row">
      <div class="col-9">
        <PostList :posts="posts"/>
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
import PostList from '../components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue';
import getPosts from '../composables/getPosts.js'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default {
  name: 'HomeView',
  components:{PostList,LoadingSpinner,TagCloud},
  setup(){
    const {posts,error,load} = getPosts()
    load()
    return {posts,error}
  },
}
</script>
