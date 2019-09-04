import express from 'express'
import JobService from "../services/JobService"

let js = new JobService().repository

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
      let job = await _js.findbyId

    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {


    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {


    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {


    } catch (error) { next(error) }

  }




}