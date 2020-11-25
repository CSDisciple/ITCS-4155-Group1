<template>
  <div class="home">
  
    <Editor msg="This is where the stories start" />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from "@/components/Editor.vue";

export default {
  name: "home",
  components: {
    Editor,
  
  }
};
</script>
