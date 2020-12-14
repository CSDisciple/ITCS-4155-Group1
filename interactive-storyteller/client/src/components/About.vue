<template>
    <div>
      <body>
    <h2><b>About</b></h2>
      <hr>
    
        <p>Interactive Storyteller is a non-profit web-application 
          <br>for the sole purpose of entertaining readers <br>by giving 
          them control of the stories they read.
        </p>
        <img src="https://i.imgur.com/zggt1Bl.jpg" class="pic">
        
        <p><br> Each user-created and AI-created book features choices 
          <br>leading to different outcomes.
        </p> 
        <img src="https://i.imgur.com/KBoK8l5.jpg" class="pic">

        <p><br> We believe in creativity of the user, <br>but 
          we also understand writer's block. <br>
        </p> 
        <img src="https://i.imgur.com/PCaW36P.jpg" class="pic">
 
        <p><br>Our AI can write story for you.
        </p>
        <img src="https://i.imgur.com/7v70vKm.jpg" class="pic">
      <hr>
      </body>
    </div>
</template>

<script>
export default {
  name: "about",
  components: {
    
  
  }
};
</script>

<!--Source used: https://www.w3schools.com/howto/howto_css_rounded_images.asp-->
<!--Source used: https://www.w3schools.com/howto/howto_css_image_center.asp#:~:text=How%20To%20Center%20Images%201%20Add%20HTML%3A%20Example,block%3B%20margin-left%3A%20auto%3B%20margin-right%3A%20...%203%20W3.CSS%20Tutorial-->
<!--Source used: https://www.w3schools.com/html/html_classes.asp#:~:text=HTML%20elements%20can%20belong%20to%20more%20than%20one,be%20styled%20according%20to%20all%20the%20classes%20specified.-->

<style scoped>
    h2 {
      font-size: 400%;
      color: #FAFAFA;
      padding: 20px;
      background: #3f3f42;
      text-align: center
    }
    body {
      background-image: url("https://i.imgur.com/zggt1Bl.jpg");
      background-blend-mode: lighten;
      background-color: #a7a9ad;
      background-position: 400px 200px;
    }
    p {
      font-size: 130%;
      font-weight: bold;
      text-align: center;
    }
    .pic {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      width: 500px;
      border: 5px solid #424242
    }
</style>