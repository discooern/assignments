const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
    },
  }
});

app.mount('#user-goals');
