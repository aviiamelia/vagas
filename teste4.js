var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const id =  req.query.id;
    const updatedUser = req.body
    const reg = data.find(d => id === d.id);
    if(reg.cpf !== req.body.cpf){
        res.status(401).send({error: "Voce não tem autorização para atualizar esse usuário"})
    }
    Object.keys(reg).forEach(key => {
        reg[key] = updatedUser[key];
      });

    res.status(200).send(reg);

};