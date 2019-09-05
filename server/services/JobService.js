import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  hours: { type: Number },
  rate: { type: Number },
  description: { type: String, maxlength: 300 }
},
  { timestamps: true }

)

export default class JobService {
  get Repository() {
    return mongoose.model('job', _model)
  } _
}