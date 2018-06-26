const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobName: { type: String, required: true },
    jobDesc: { type: String, required: true },
    jobBid: { type: Number, require: true },
    date: { type: Date, default: Date.now }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
