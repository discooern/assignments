const app = Vue.createApp({
  data() {
    return {
      number: 0,
      result: ''
    };
  },
  watch: {
    number(value) {
      if(value < 37) {
        this.result = 'not there yet';
      } else {
        this.result = 'u got it';
      }
    }
  },
 methods: {
   add(num){
     this.number = this.number + num;
   }
 }
});

app.mount('#assignment');