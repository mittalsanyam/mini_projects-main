import {ref} from 'vue'
import { projectFirestore } from '@/firebase/config'
import { query,collection,getDocs, orderBy } from 'firebase/firestore'
const getPosts = ()=>{
    const posts = ref([])
    const error = ref(null)
    const load = async()=>{
      try {
        const query_ref = query(collection(projectFirestore,'posts'),orderBy('createdAt','desc'))
        const res = await getDocs(query_ref)
        posts.value = res.docs.map(doc=>{
            return {...doc.data(),id: doc.id}
        })
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }
    return {
      posts,
      error,
      load
    }
}

export default getPosts