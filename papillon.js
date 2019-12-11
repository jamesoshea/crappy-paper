console.log(Vue);

new Vue({
  el: "#editor",
  data: {
    input: ""
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true });
    }
  },
  mounted() {
    const previouslySavedText = window.localStorage.getItem("papillon-text");
    this.input = previouslySavedText || "";
  },
  methods: {
    update(e) {
      this.input = e.target.value;
      window.localStorage.setItem("papillon-text", e.target.value);
    }
  }
});
