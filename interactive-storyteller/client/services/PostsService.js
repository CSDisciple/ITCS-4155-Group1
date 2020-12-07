import Api from '../services/Api'

class PostsService {
  getAll() {
    return Api.get("/posts");
  }

  create(data) {
    return Api.post("/posts", data);
  }

}

export default new PostsService();