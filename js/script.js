import {todo} from './data.js'

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo : todo,

        }
    },
    methods: {
        toggleDone(id){
            const item = this.todo.find((el)=>{
                return el.id === id                
            })
            // console.log(item);
            item.done = !item.done
        },
        removeItem(id){
            let index = this.todo.findIndex((el)=> el.id === id)
            // console.log(index);            
            this.todo.splice(index, 1)            
        },

    },
    mounted(){
        // console.log(this.todo);
    }
}).mount('#app')