<template>
  <div>
 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class = "navbar-brand" href ="home.html">
<img src="https://i.imgur.com/ZDPiIXq.png" height = "70" alt = "Interactive Storyteller logo">
</a>
<button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target ="#navbarSupportedContent-555"
aria-controls = "navbarSupportedContent-555" aria-expanded = "false" aria-label = "Toggle navigation">
 <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="home.html">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
	    <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
	    <li class="nav-item">
        <a class="nav-link" href="#">Community</a>
      </li>
	    <li class="nav-item">
        <a class="nav-link" href="#">Create a Story</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <img src="https://i.imgur.com/WD15vcD.png" class="rounded-circle z-depth-0"
            alt="avatar image">
        </a>
        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
          <a class="dropdown-item" href="#">Your profile</a>
          <a class="dropdown-item" href="#">Private messages</a>
          <a class="dropdown-item" href="#">Saved stories</a>
        </div>
      </li>
    </ul>
  </div>
<!--End of Navigation Bar -->
</nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
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


<style scoped>

</style>