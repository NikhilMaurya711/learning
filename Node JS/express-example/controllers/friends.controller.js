const friendModel= require('../model/friends.model')

function postFriend(req, res) {

    if (!req.body.name) {
        return res.status(400).json({
            error: "expecting name params"
        })
    }

    const newFriend = {
        name: req.body.name,
        id: friendModel.length
    }
    friendModel.push(newFriend)
    res.status(201).send(newFriend)

}

function getFriends (req, res){
    res.send(friendModel)
}

function getFriend(req, res) {
    // console.log();
    const frndId = +req.params.id
    const friend = friendModel[frndId]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "friend not found"
        })
    }
    // res.send(s)
}


module.exports = {
    getFriends,
    getFriend,
    postFriend
}