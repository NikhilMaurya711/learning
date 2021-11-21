const express = require('express')

const messageController = require('../controllers/message.controller')

const messageRouter = express.Router();

messageRouter.post('/', messageController.postMessage)
messageRouter.get('/', messageController.getMessage)

module.exports = messageRouter;

