import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { doc,getDoc } from "firebase/firestore" 

const getSinglePost = (id)=>{
    const post = ref(null)
    const error = ref(null)
    const load = async() => {
        try {
            let res = await getDoc(doc(projectFirestore,'posts',id))
            if (!res.exists()){
                throw Error('That post does not exists')
            }
            post.value = {...res.data(),id:res.id}
        }
        catch(err){
            error.value = err.message
        }
    }
    return {post,error,load}
}

export default getSinglePost