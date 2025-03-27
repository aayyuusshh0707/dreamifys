const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
