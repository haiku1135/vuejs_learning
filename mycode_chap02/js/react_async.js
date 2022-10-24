Vue.createApp({
  data(){
    return {
      message: 'hello world'
    };
  },
  mounted(){
    this.message = 'hello vue.js';

    this.$nextTick(() => {
      console.log(this.$el.textContent.includes(this.message));
    });
  }
}).mount('#app');