<template>
  <div class="home">
	  
  <!--Bootstrap "jumbotron" -->
<div class = "jumbotron jumbotron-fluid bg-dark text-white">
	<h1 class = "text-center">Try our GPT3 Based Story Creation Tool</h1>
	<p class = "text-center">End writer's block for good!</p>
</div>
<!--End of "jumbotron" -->
 
<!--Bootstrap Cards for Trending stories -->
<h3 class = "text-center">Trending stories</h3>
<br>
<div class = "card-deck">

<!-- First Trending Story -->
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/m8Heqoc.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">The Hunter's Wife</h4>
            <p class="card-text">It was the hunter's first time outside Montana. He woke, stricken still with the hours-old vision of ascending through rose-lit cumulus....</p>
            <a href="story1.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>

<!-- Second Trending Story -->
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/1mY1f0s.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">To Build a Fire</h4>
            <p class="card-text">Day had broken cold and grey, exceedingly cold and grey, when the man turned aside from the main Yukon trail and climbed the high...</p>
            <a href="story6.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>

<!-- Third Trending Story -->
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/sZmU5u5.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Regret</h4>
            <p class="card-text">Mamzelle Aurlie possessed a good strong figure, ruddy cheeks, hair that was changing from brown to gray, and a determined eye. She...</p>
            <a href="story3.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>
	
<!-- Fourth Trending Story -->	
     <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/MVbVJQD.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">The Tell-Tale Heart</h4>
            <p class="card-text">TRUE!-NERVOUS--very, very dreadfully nervous I had been and am! but why will you say that I am mad? The disease had sharpened my senses...</p>
            <a href="story4.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>
	
<!-- Fifth Trending Story -->
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/eCumBC0.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">The Skylight Room</h4>
            <p class="card-text">First Mrs. Parker would show you the double parlours. You would not dare to interrupt her description of their advantages and of the merits...</p>
            <a href="story5.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>	
	  
<!-- Sixth Trending Story -->
     <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top"
            src="https://i.imgur.com/bNbPvte.png"
            alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">The Cactus</h4>
            <p class="card-text">The most notable thing about Time is that it is so purely relative. A large amount of reminiscence is, by common consent, conceded to the drowning...</p>
            <a href="story6.html" class="btn btn-primary stretched-link">Continue reading</a>
          </div>
        </div>
      </div>
	  <!-- End of Trending -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "home",
  components: {
    
  
  }
};
</script>

<style scoped>
@import'../../node_modules/bootstrap/dist/css/bootstrap.css';
.card-deck{
  margin: 0 auto;
  flex-flow: column;
  align-items: center;
}
</style>