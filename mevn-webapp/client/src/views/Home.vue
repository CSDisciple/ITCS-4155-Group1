<template>
  <div class="home">
  
    <HelloWorld msg="This is where the stories start" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  
  }
};
</script>
