<template>
  <div class="posts">
    <div v-if="posts.length > 0" class="table-wrap">
      <table>
        <tr>
          <td>Title</td>
          <td>Description</td>
        </tr>
        <tr v-for="post in posts" v-bind:key="post">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
        </tr>
      </table>
      <div>
        <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary">Add Post</router-link>
      </div>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="btn btn-primary"
        >Add Post</router-link
      >
    </div>
  </div>
</template>

<script>
import PostsService from "../../services/PostsService";
export default {
  name: "community",
  data() {
    return {
      posts: [],
      currentPost: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrievePosts() {
      PostsService.getAll()
        .then((response) => {
          this.posts = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrievePosts();
  },
};
</script>

<style type="text/css">
.table-wrap {
  display: flex;
  flex-flow: column;
  align-items: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
