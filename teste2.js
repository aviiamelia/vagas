var data =  require("./fakeData");

module.exports = function(req, res){
  
    const name =  req.body.name;
    const job =  req.body.job;
    // Objetivo da função é cadastrar um novo usuario no banco
    const newUser = {
        name: name,
        job: job,
    }
    data.push(newUser)

    const response = {
        message: "Success",
        data: newUser
    }
    res.status(201).send(response);

};