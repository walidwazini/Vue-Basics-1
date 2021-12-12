const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name1: '',
      name2: '',
    };
  },
  methods:{
    setName1(name){
      this.name1 =  event.target.value
    },

    setName2(event, lastName){
      this.name2 = event.target.value + " " + lastName
    },

    increment(num){
      this.counter = this.counter + num
    }, 
    reset(){
      this.counter = 0
    }
  },
});

app.mount('#events');
