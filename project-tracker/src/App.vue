<template>
  <div class="container p-1">
    <h1 class="text-center">
        Project Tracker
    </h1>
  </div>
  <div class="container p-1">
    <Navbar :active="active"/>
  </div>
  <div class="container">
    <router-view @activated="toggleActive"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default{
  components:{Navbar},
  data(){
    return {
      active:"home"
    }
  },
  methods:{
    toggleActive(active){
      this.active=active
    }
  }
}
</script>