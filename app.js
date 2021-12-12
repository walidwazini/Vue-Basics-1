const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      name2: '',
    };
  },
  methods:{
   
    increment(num){
      this.counter = this.counter + num
    }, 
    reset(){
      this.counter = 0
    }
  },
});

app.mount('#events');
