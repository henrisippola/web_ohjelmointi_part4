const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
      return authorization.replace('Bearer ', '')
    }
    return null
  }

blogsRouter.get('/', (request, response) => {
    Blog
    .find({})
    .then(blogs => {
        response.json(blogs)
    })
})
  
blogsRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
    .save()
    .then(result => {
        response.status(201).json(result)
    })
})

module.exports = blogsRouter