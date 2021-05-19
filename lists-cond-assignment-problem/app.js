const app = Vue.createApp({
    data() {
        return {
           tasks: [],
           enteredValue: '', 
           isVisible: true
        };
    },
    methods: {
       addTask(){
          this.tasks.push(this.enteredValue);
          this.enteredValue = '';
       },
       removeTask(idx){
           this.tasks.splice(idx,1);
       },
       visible(){
           this.isVisible = !this.isVisible;
       }
    },
});

app.mount('#assignment')