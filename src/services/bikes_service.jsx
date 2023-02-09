import http from "../http-common";

class BikeService {
    getAll() {
      return http.get("/bikes");
    }
  
    get(id) {
      return http.get(`/bikes/${id}`);
    }
  
    create(data) {
      return http.post("/bikes", data);
    }
  
    update(id, data) {
      return http.put(`/bikes/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/bikes/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/bikes`);
    }
  
    findByTitle(title) {
      return http.get(`/bikes?title=${title}`);
    }
  }
  
  export default new BikeService();