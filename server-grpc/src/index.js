import {insertMany, insertOne, getAll, deleteById} from './repository/service.js'

export const mapped_methods = {
    insertMany: insertMany,
    getAll: getAll,
    insertOne: insertOne,
    deleteById: deleteById
}