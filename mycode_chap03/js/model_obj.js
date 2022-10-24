Vue.createApp({
  data(){
    return {
      unit: {}
    };
  },
  methods: {
    onchange(){
      console.log(`${this.unit.name}:${this.unit.size}`);
    }
  }
}).mount('#app');