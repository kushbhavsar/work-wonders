import axios from "axios";

export default {
  
  getUsers: function() {
    return axios.get("/api/user");
  },

  getUsers: function(id) {
    return axios.get("/api/user/" + id);
  },
  getJobs: function() {
    return axios.get("/api/jobs/");
  },
  getJobs: function(id) {
    return axios.get("/api/jobs/" + id);
  },

  deleteJobs: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  saveJobs: function(jobData) {
    return axios.post("/api/jobs", jobData);
  }
};
