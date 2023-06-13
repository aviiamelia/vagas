var data =  require("./fakeData");

module.exports = function(req, res){
    
    const name =  req.query.name;
    const user = data.find((user)=== user.name === name)
    if(user.count){
        res.status(200).send(`Usuário " +  ${name}  + "  foi lido ${user.count} vezes.`);
    }
    else{
        res.status(404).send("User not found")
    }

};