const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    jobTitle: { type: String, required: true },
    jobDescription: { type: String, required: true },
    maxPayment: { type: Number, require: true },
    auctionDays: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;
