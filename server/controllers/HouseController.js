import express from 'express'
import HouseService from '../services/HouseService'

let _hs = new HouseService().Repository

export default class HouseController {
  constructor() {
    this.router = express.Router()

  }
}