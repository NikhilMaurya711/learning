const express = require('express')
const messageController = require('../controller/mssage.controller')

const messageRouter = express.Router();
messageRouter.get('/',messageController.getMessage)

module.exports= messageRouter;