const app = Vue.createApp({
    data(){
        return {
            text:'',
            ans:0,
        }
    },
    methods:{
        input(X){
            this.text=this.text+X
        },
        calculate(){
            this.ans=eval(this.text)
        },
        clear(){
            this.text=''
            this.ans=0
        }
    }

})

app.mount('#app')