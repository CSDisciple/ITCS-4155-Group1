<template>
  <div class="posts">
    <h1>Add Post</h1>
    <div class="form" @submit.prevent="handleSubmitForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="post.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="post.description"
          name="description"
        ></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="savePost">Add</button>
      </div>
       <!-- <div>
        <router-link v-bind:to="{ name: 'Community' }" >
          <button class="btn btn-primary" @click="savePost">
          Add
          </button>
          </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import PostsService from "../../services/PostsService";
export default {
  name: "new-post",
  data() {
    return {
      post: {
        id: null,
        title: "",
        description: "",
      },
    };
  },
  methods: {
    savePost() {
      var data = {
        title: this.post.title,
        description: this.post.description,
      };

      PostsService.create(data)
        .then((response) => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
        this.$router.push({ name: 'Community' });
    },
  },
};
</script>


<style type="text/css">
.posts {
  display: flex;

  flex-flow: column;
  align-items: center;
}
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

