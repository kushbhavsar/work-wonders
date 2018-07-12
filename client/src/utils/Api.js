import axios from "axios";

export default {
  
  getUsers: function() {
    return axios.get("/users");
  },

  getUsers: function(id) {
    return axios.get("/users/" + id);
  },
  saveUsers: function(userData) {
    return axios.post("/users", userData);
  },
  getJobs: function() {
    return axios.get("/jobs");
  },
 /*  review code
  getJobs: function(id) {
    return axios.get("/jobs/" + id);
  },

  */
  deleteJobs: function(id) {
    return axios.delete("/jobs/" + id);
  },
  saveJobs: function(jobData) {
    return axios.post("/jobs", jobData);
  }
};
