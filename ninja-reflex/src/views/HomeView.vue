<template>
  <div class="container p-5">
    <div class="container p-2">
      <h1>Ninja Reflex</h1>
    </div>
    <div class="container p-2">
      <button v-if="!start" @click="startGame" class="btn btn-primary">Start Game</button>
      <button v-if="start" @click="endGame" class="btn btn-danger">End Game</button>
    </div>
    <div v-if='start'>
      Total = {{ total }} Hits = {{ hits }} Miss = {{ miss }}
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
      miss:0,
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
      this.miss=this.total-this.hits
    }
  },
}
</script>
