const express = require('express')
const friendsController = require('../controller/freiends.controller')

const friendsRouter = express.Router();
friendsRouter.get('/',friendsController.getFriendList)
friendsRouter.get('/:id',friendsController.getOneFriend)
friendsRouter.post('/', friendsController.postCreateNewFriend )

module.exports= friendsRouter;