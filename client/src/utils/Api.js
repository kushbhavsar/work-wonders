import axios from "axios";

export default {
  
  getUsers: function() {
    return axios.get("/users/login");
  },
  checkUsers: function (data) {
    console.log(data);
    return axios.post("/login", data);
  },

  updateUsers: function() {
    return axios.put("/users");
  },

  getUsers: function(id) {
    return axios.get("/users/" + id);
  },
  saveUsers: function(userData) {
    return axios.post("/users", userData);
  },

  getJobs: function() {
    return axios.get("/jobs/");
  },
  getJobs: function(id) {
    return axios.get("/jobs/" + id);
  },

  deleteJobs: function(id) {
    return axios.delete("/jobs/" + id);
  },
  saveJobs: function(jobData) {
    return axios.post("/jobs", jobData);
  }
};
