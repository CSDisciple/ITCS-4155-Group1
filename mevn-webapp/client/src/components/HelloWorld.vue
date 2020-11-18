<template>
  <div>
    <h1>This is where the stories start</h1>
    <medium-editor id='medium-editor' :content="content" :options="options" />
  </div>
  
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      content: "",
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



#medium-editor{
background-color: #f5f5f5;
width: 50em;
height: 15em;
border-radius: 15px;
margin: 0 auto;
}

</style>
