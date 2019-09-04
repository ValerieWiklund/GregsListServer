import express from 'express'
import CarService from "../services/CarService"

let _cs = new CarService().Repository

export default class CarController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let cars = await _cs.find()
      res.send(cars)
    } catch (error) { next(error) }
  }

  async getById(req, res, next) {
    try {
      let car = await _cs.findById(req.params.id)
      if (!car) {
        throw new Error("Bad Id")
      }
      res.send(car)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let car = await _cs.create(req.body)
      res.send(car)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let car = await _cs.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (car) {
        return res.send(car)
      }
      throw new Error("Bad Id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _cs.findOneAndRemove({ _id: req.params.id })
      res.send("deleted car")
    } catch (error) { next(error) }
  }


}