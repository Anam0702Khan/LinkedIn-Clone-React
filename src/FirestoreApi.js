import { firestore } from "./Firebase";
import {addDoc, collection, onSnapshot} from 'firebase/firestore'
import {toast} from 'react-toastify'

let dbRef = collection(firestore, "posts") //posts is the collection name over here

export const PostStatus = (status) => {
    console.log('Status:', status);
    if (status === undefined || status === null) {
        console.log('Invalid data: status is undefined or null');
        return;
    }

    let object = {
        status : status
    }
    addDoc(dbRef,object)
    .then((res) => {
        toast.success('Document has been added successfully')
    })
    .catch((err) => console.log('error',err))
}

export const getPosts = (setAllStatus) => {
    onSnapshot(dbRef,(response) => {
       setAllStatus(response.docs.map((docs) => {
            return {...docs.data() , id: docs.id}
        }));
    })
}
