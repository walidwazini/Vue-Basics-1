const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name1: '',
      name2: '',
      confirmedName: ''
    };
  },
  computed: {
    fullname(){
      if(this.name1 === ''){
        return ' '
      }
      return this.name1 + ' ' + 'Leonheart'
    }
  },
  methods:{ 
    outputFullname(){
      if(this.name1 === ''){
        return ' '
      }
      return this.name1 + ' ' + 'Ackerman'
    },
    confirmInput(){
      this.confirmedName = this.name2
    },
   
    submitForm(){
      event.preventDefault()
      alert('Form Submitted!')
      console.log("Submit")
    },
    setName1(event){
      this.name1 =  event.target.value
    },
    resetInput(){
      this.name1 = '' 
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
