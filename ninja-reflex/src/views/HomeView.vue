<template>
  <div class="container justify-content-center">
    <div class="container p-2 mt-2">
      <h1 class="fs-1">Ninja Reflex</h1>
    </div>
    <div class="container p-2">
      <button v-if="!start" @click="startGame" class="btn btn-primary">Start Game</button>
      <button v-if="start" @click="endGame" class="btn btn-danger">End Game</button>
    </div>
    <div v-if='start' class="container border border-3 rounded mt-2" style="width:25pc;">
      <span class="text-primary fs-3 m-1 border border-0 p-1">Total {{ total }}</span> 
      <span class="text-success fs-3 m-1 border border-0 p-1">Hits {{ hits }}</span>
      <span class="text-danger fs-3 m-1 border border-0 p-1">Missed {{ miss }}</span>
    </div>
    <div v-if="total>0 && !start" class="container border border-3 rounded text-center p-5 mt-2" style="width:20pc">
      <h3>Your Score</h3>
      <p class="fs-3 m-1 text-primary p-1">Total {{ total }}</p> 
      <p class="fs-3 m-1 text-success p-1">Hits {{ hits }}</p>
      <p class="fs-3 m-1 text-danger p-1">Missed {{ miss }}</p>
    </div>
    <Box v-if="start" @scoreEvent="increaseScore" @newBox="increaseTotal"></Box>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from "../components/Box.vue"

export default {
  name: 'HomeView',
  components: {
    Box
  },
  data(){
    return {
      start:false,
      hits:0,
      total:0
    }
  },
  methods:{
    startGame(){
      this.start=true
      this.hits=0
      this.total=0
      this.miss=0
    },
    endGame(){
      this.start=false
    },
    increaseScore(){
      this.hits+=1
    },
    increaseTotal(){
      this.total+=1
    }
  },
  computed:{
    miss(){
      return this.total-this.hits
    }
  }
}
</script>
