import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  imgUrl: { type: String, default: "https://placehold.it/200x200" },
  price: { type: Number, min: 1 },
  description: { type: String, maxlength: 300 }
},
  { timestamps: true }
)

export default class CarService {
  get Repository() {
    return mongoose.model('car', _model)
  }
}