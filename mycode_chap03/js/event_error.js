Vue.createApp({
  data(){
    return {
      path: './images/_wings.jpg'
    };
  },
  methods: {
    onerror(){
      this.path = './images/noimage.jpg';
    }
  }
}).mount('#app');