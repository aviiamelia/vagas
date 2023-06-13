var data =  require("./fakeData");


module.exports = function(req, res) {
    
    const name =  req.query.name;
    const userToBeDeleted = data.find((user)=> user.name === name)
    if(userToBeDeleted.cpf !== req.body.cpf){
        res.status(401).send({error: "Voce não tem autorização para deletar esse"})
    }
    if(!userToBeDeleted){
        res.send("user not found")
    }
    const newData = data.filter((user)=>user !== userToBeDeleted)
    data = newData

    res.status(200).send("success");

};