const models = require('../models/friendsData.model.js')

function getFriendList (req,res){
    res.json(models)
}

function postCreateNewFriend(req,res) {

    const newFriend = {
        name:req.body.name,
        id:models.length
    }

    models.push(newFriend);

    res.json(newFriend);
}

function getOneFriend(req,res){
    const id = Number(req.params.id)
    const friend = models[id];
    if(friend){ 
    res.status(200).json(friend)
    }else{
        res.status(400).json({
            error:"Friend does not exist"
        })
    }
}

module.exports={
    getFriendList,
    getOneFriend,
    postCreateNewFriend
}