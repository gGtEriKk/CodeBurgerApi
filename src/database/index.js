import { Sequelize } from 'sequelize'
import mongoose from 'mongoose'

// import configDatabase from '../config/database'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(
            'postgresql://postgres:1cEedcE22C5aF6236bfG1**5bB6*e11C@viaduct.proxy.rlwy.net:49551/railway'
        )
        models.map((model) => model.init(this.connection))
            .map(
                model => model.associate && model.associate(this.connection.models)
            )
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb://mongo:15E2F63ah21E-E2dHaEdd1AfF6e6HB25@roundhouse.proxy.rlwy.net:46441'
        )
    }
}

export default new Database()