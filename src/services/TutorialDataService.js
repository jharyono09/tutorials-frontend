import Api from "@/services/Api";

class TutorialDataService {
  getAll() {
    return Api().get("/tutorials");
  }

  get(id) {
    return Api().get(`/tutorials/${id}`);
  }

  create(data) {
    return Api().post("/tutorials", data);
  }

  update(id, data) {
    return Api().put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return Api().delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return Api().delete(`/tutorials`);
  }

  findByTitle(title) {
    return Api().get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
