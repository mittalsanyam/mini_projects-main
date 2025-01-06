<template>
<div class="container">
    <div class="text-center mb-3">
        <h3>Edit Project</h3>
    </div>
    <form class="card m-2 p-2" @submit.prevent="handleSubmit">
        <div class="p-2 m-2">
            <label class="form-label"><h4>Title</h4></label>
            <input type="text" class="form-control" v-model="title" required>
        </div>
        <div class="p-2 mb-2">
            <label class="form-label"><h4>Details</h4></label>
            <textarea class="form-control" v-model="details" required></textarea> 
        </div>
        <div class="p-2 mb-2 text-center">
            <button class="btn btn-primary">Edit Project</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            title: '',
            details:'',
            url:'http://localhost:3000/projects/'+this.id
        }
    },
    methods:{
        handleSubmit(){
            fetch(
                this.url,
                {
                    method:'PATCH',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        title:this.title,
                        details:this.details,
                    })
                }
            ).then(()=>{
                this.$router.push('/')
            }).catch((err)=>{console.log(err.message)})
        }
    },
    mounted(){
        fetch(this.url)
            .then(res=>res.json())
            .then(data=>{
            this.title = data.title
            this.details = data.details
            })
        
    },
    created(){
        this.$emit('activated','edit')
    }
}
</script>