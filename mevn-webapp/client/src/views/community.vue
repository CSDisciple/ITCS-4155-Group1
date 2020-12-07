<template>

<div class = "Community">

    <!--Bootstrap "jumbotron" -->
    <div class = "jumbotron jumbotron-fluid bg-dark text-white">
        <h1 class = "text-center">See What the Community Is Up To!</h1>
    </div>
    <!--End of "jumbotron" -->  

    <!--Story search bar-->
    <div class = "container" style = "align-items: center;">
        <input id = "commSearch" type="text" placeholder="Search Stories...">
        <input type="submit" value="Search">
    </div>

    <br>

    <!--Criteria selection form for searching-->
    <div class = "container">
    <form id = "commDropForm" class="form-inline" style = "margin: auto;">
            <div class="dropdown">
            <button class = "btn btn-primary dropdown-toggle" type = "button" data-toggle = "dropdown">Genre<span class = "caret"></span></button>
            <ul class = "dropdown-menu">
                <li class = "divider"><a href = "#">Fantasy</a></li>
                <li class = "divider"><a href = "#">Horror</a></li>
                <li class = "divider"><a href = "#">Sci-Fi</a></li>
                <li class = "divider"><a href = "#">Comedy</a></li>
                <li class = "divider"><a href = "#">Sports</a></li>
                <li class = "divider"><a href = "#">Satire</a></li>
                <li class = "divider"><a href = "#">Historical</a></li>
            </ul>
            </div>
        
            &nbsp;
        
            <div class="dropdown">
                <button class = "btn btn-primary dropdown-toggle" type = "button" data-toggle = "dropdown">Tags<span class = "caret"></span></button>
                <ul class = "dropdown-menu">
                    <li class = "divider"><a href = "#">Favorites</a></li>
                    <li class = "divider"><a href = "#">Most Read</a></li>
                    <li class = "divider"><a href = "#">Highest Rated</a></li>
            </ul>
            </div>
        
            &nbsp;

        <div class="dropdown">
            <button class = "btn btn-primary dropdown-toggle" type = "button" data-toggle = "dropdown">Number of Choices<span class = "caret"></span></button>
            <ul class = "dropdown-menu">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5+</li>
            </ul>
        </div>
        
        &nbsp;

        <input type="submit" value="submit">
    </form>
    </div>

    <br>

    <!--Section for Stories to be selected from-->
    <div class="container">
    <div class="card-deck">
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src = "https://imgur.com/glVE9Vz" alt="First Story Image">
            <div class="card-body">
                <h4 class="card-title">Featured Story 1</h4>
                <p class="card-text">The most recommended story for you!</p>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Second Story Image">
            <div class="card-body">
                <h4 class="card-title">Featured Story 2</h4>
                <p class="card-text">See what the community is working on!</p>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="" alt="Third Story Image">
            <div class="card-body">
                <h4 class="card-title">Featured Story 3</h4>
                <p class="card-text">See what the community is working on!</p>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="" alt="Fourth Story Image">
            <div class="card-body">
                <h4 class="card-title">Featured Story 4</h4>
                <p class="card-text">See what the community is working on!</p>
            </div>
        </div>
    </div>

    <!--Forum using PunBB-->
    <div>
        <p><iframe border="0" height="600" src="https://interactivestory.forumotion.com/" width="100%"></iframe></p>
    </div>

</div>

</template>

<script></script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
@import "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
@import "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js";
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
</style>