
function getMessage(req,res){
    res.send("<ul><li>Hellow world!!!</li></ul>")
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