var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    const name =  req.query.name;
    const found = data.find((user)=> user.name === name)
    if (found){
        if(found.count === undefined){
            found.count = 1
        }else{
            found.count += 1
        }
        res.send(found);
    }
    else{
        return res.status(404).send("User not found")
    }

};
const getUsers = ( req, res, next ) => {
    
    res.status(200).send(data);
    
};

module.exports = {
    getUser,
    getUsers
};