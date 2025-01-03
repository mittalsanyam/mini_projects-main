<template>
    <div class="container p-5 mt-5" id="main">
    </div>
</template>

<script>
export default {
    name: 'Box',
    data(){
        return {
            boxX:0,
            boxY:0,
            box:null,
            timeout:null,
            timer:1000,
            level:0,
        }
    },
    methods:{
        emitScore(){
            this.$emit('scoreEvent')
            this.level+=1
            this.deleteBox()
        },
        createBox(){
            this.box = document.createElement("div")
            this.boxX = Math.floor(Math.random()*50)
            this.boxY = Math.floor(Math.random()*10)
            this.box.className = "box"
            this.box.id = "box"
            this.box.style.left = this.boxX+"pc"
            this.box.style.top = this.boxY+"pc"
            this.box.style.position = "relative"
            this.box.addEventListener("click",this.emitScore)
            document.getElementById("main").appendChild(this.box)
            this.$emit('newBox')
            if (this.level==10){
                this.level=0
                this.timer=this.timer-50
            }
            this.timeout=setTimeout(
                ()=>{
                    this.deleteBox()
                }
            , this.timer);
        },
        deleteBox(){
            clearTimeout(this.timeout)
            if (this.box!=null){
                this.box.remove()
            }
            this.createBox()
        }
    },
    mounted(){
        this.createBox()
    },
    beforeUnmount(){
        clearTimeout(this.timeout)
    }


}
</script>

<style>
.box {
    height: 5pc;
    width: 5pc;
    border-style: solid;
    border-color: green;
    border-width: 0.05pc;
    border-radius: 2.5pc;
    text-align: center;
    background-color: aquamarine;
}
</style>