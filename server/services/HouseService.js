import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  imgUrl: { type: String, default: "https://placehold.it/ 200x200" },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
},
  { timestamps: true }
)

export default class HouseService {
  get Repository() {
    return mongoose.model("house", _model)
  }
}