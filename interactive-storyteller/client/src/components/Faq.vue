<template>
    <div>
    <h2><b>FAQ</b></h2>
      <h3>Need Help? Checkout these most common questions...</h3>
      <hr>

      <div class="container">
        <a href="#whatIs" class="btn btn-primary" data-toggle="collapse">What is Interactive Storyteller?</a>
        <div id="whatIs" style="background: #CED8F6; margin-bottom: 10px" class="collapse show">
          Interactive StoryTeller is a story-writting website. But, these stories are different from your 
          traditional, linear stories. On Interactive Storyteller, the reader chooses the story. Each book written 
          on Interactve Storyteller has any number of different choices within a book that may divert the 
          story being read in another direction.
        </div>
      </div>

      <div class="container">
        <a href="#create" class="btn btn-primary" style="background:#424242" data-toggle="collapse">How do I create/write a book?</a>
        <div id="create" style="background: #F2F2F2; margin-bottom: 10px" class="collapse show">
          To create/write a new book a user must first have an account. If the user does not have an 
          account, then an account must be created. <br> A user with an account must then be signed in 
          so any book created can be associated with their account. <br> To create a book, use this 
          link that further explains the process...
        </div>
      </div>

      <div class="container">
        <a href="#howUse" class="btn btn-primary" data-toggle="collapse">How do I use this website?</a>
        <div id="howUse" style="background: #CED8F6; margin-bottom: 10px" class="collapse show">
          Here is a link on how to use the website...
        </div>
      </div>

      <div class="container">
        <a href="#money" class="btn btn-primary" style="background:#424242" data-toggle="collapse">How much money do I make on my book?</a>
        <div id="money" style="background: #F2F2F2; margin-bottom: 10px" class="collapse show">
          Interavtvive Storyteller is a non-profit application for the enetertainment of the readers/users.
          Once content is published to our website, it becomes property of Interactive Storyteller, though 
          to a specific user. The user agrees to this when using Interactive Storyteller.
        </div>
      </div>

      <div class="container">
        <a href="#who" class="btn btn-primary" data-toggle="collapse">Who is this website for?</a>
        <div id="who" style="background: #CED8F6; margin-bottom: 10px" class="collapse show">
        Interactive Storyteller is for those who desire more freedom of choice 
        in their literature. Users of this site seek a less linear approach to 
        reading and writting stories. This breaks away from traditional stories 
        that follow through to the written end. Interactive Storyteller changes 
        this in that there can be many ends. This may be strongly popular in groups 
        who enjoy fanfiction, speculation, and adventure.
        </div>
      </div>

      <div class="container">
        <a href="#save" class="btn btn-primary" style="background:#424242" data-toggle="collapse">Can I save my book to my computer?</a>
        <div id="save" style="background: #F2F2F2; margin-bottom: 10px" class="collapse show">
          Interactive Storyteller owns all books published to the website. The author (username) is only 
          needed for editorial purposes later, should the author need to edit something within their book. 
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "faq",
  components: {

  }
};
</script>
<!--Source used: https://www.wrappixel.com/bootstrap-vue/ -->
<style scoped>
    p {
      color: #424242;
      text-align: center;
      white-space: normal;
      font-size: 30px;
      font: bold;
      margin-left: 20px;
      margin-right: 20px;
    }
    body {
      background-image: url("https://i.imgur.com/zggt1Bl.jpg");
      background-blend-mode: lighten;
      background-color: #a7a9ad;
      background-position: 400px 200px;
    }
    h2 {
      font-size: 400%;
      color: #FAFAFA;
      padding: 20px;
      background: #3f3f42;
      text-align: center
    }
    h3 {
      color: #FAFAFA;
      padding: 5px;
      background: #3f3f42;
      text-align: center;
    }
    .collapsible {
      color: #FAFAFA;
      background: #424242;
      padding: 5px;
      margin-left: 20px;
    }
    .content {
      color: #424242;
      background: #A4A4A4;
      margin-left: 20px;
    }
</style>