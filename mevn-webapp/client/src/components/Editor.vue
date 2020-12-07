<template>
  <div>
    <h1>This is where your story begins.</h1>
    <medium-editor id='medium-editor' :content="content" :options="options" />
     <a class="btn btn-primary stretched-link">Save</a>
  </div>
  
</template>

<script>

export default {
  name: "Editor",
  props: {
    msg: String,
  },
  data() {
    return {
      content: "content",
      options: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/vuejs-medium-editor/dist/css/app.a519d05e.css";
@import "../assets/vuejs-medium-editor/dist/css/chunk-vendors.b5c43ffe.css";
@import "../assets/vuejs-medium-editor/src/themes/default.css";
@import "../../node_modules/highlight.js/styles/ocean.css";



template{
background-color: #f5f5f5;
width: 50em;
height: 15em;
border-radius: 15px;
margin: 0 auto;
}

</style>
