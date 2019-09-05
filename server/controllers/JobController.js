import express from 'express'
import JobService from "../services/JobService"


let _js = new JobService().Repository

export default class JobController {
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
      let jobs = await _js.find()
      res.send(jobs)
    } catch (error) { next(error) }
  }

  async getById(req, res, next) {
    try {
      let job = await _js.findById(req.params.getById)
      if (!job) {
        throw new Error("Bad Id")
      }
      res.send(job)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      let job = await _js.create(req.body)
      res.send(job)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let job = await _js.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      if (job) {
        return res.send(job)
      }
      throw new Error("Bad Id")
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _js.findOneAndRemove({ _id: req.params.id })
      res.send("job listing deleted")
    } catch (error) { next(error) }

  }




}