const path = require('path')

function getMessage(req,res){
    res.render('messages',{
        content:"Learning NodeJS",
        title:"message title",
    })
    // res.sendFile(path.join(__dirname,'..','public','images','skimountain.jpg'))
}

function postMessage(req,res){
    if (!req.body.message) {
        return res.status(400).json({
            error: "expecting message params"
        })
    }

    const newMeasage = {
        name: req.body.message
    }
   
    res.send(newMeasage)
}

module.exports={
    getMessage,
    postMessage
}