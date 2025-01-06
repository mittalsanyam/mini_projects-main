<template>
  <div class="container">
    <div class="text-center mb-3">
      <h2>Projects</h2>
    </div>
    <div>
      <FilterProjectsNav @filterProjects="current=$event"/>
    </div>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @reloadProjects="reloadProjects"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '../components/SingleProject.vue'
import FilterProjectsNav from '../components/FilterProjectsNav.vue'
export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterProjectsNav
  },
  data(){
    return {
      projects:[],
      current:'all'
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
    .then((res)=>{return res.json()})
    .then((data)=>{
      localStorage.setItem("projects",JSON.stringify(data))
      this.projects = JSON.parse(localStorage.getItem('projects'))
    })
    .catch((err)=>{console.log(error)})
  },
  created(){
    this.$emit('activated','home')
  },
  methods:{
    reloadProjects(){
      fetch('http://localhost:3000/projects')
    .then((res)=>{return res.json()})
    .then((data)=>{
      localStorage.setItem("projects",JSON.stringify(data))
      this.projects = JSON.parse(localStorage.getItem('projects'))
    })
    .catch((err)=>{console.log(error)})
    }
  },
  computed:{
    filteredProjects(){
      if (this.current==='all'){
        return this.projects
      }
      if (this.current=='completed'){
        return this.projects.filter((project)=>{return project.isComplete})
      }
      if (this.current=='ongoing'){
        return this.projects.filter((project)=>{return !project.isComplete})
      }
    }
  }

}
</script>
