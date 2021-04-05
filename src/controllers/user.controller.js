
const UserModel = require('../models/user.model.js');

// get all user list
exports.getUserList = (req, res)=> {
    //console.log('here all users list');
    UserModel.getAllUsers((err, user) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Users', user);
        res.send(user)
    })
}

// get user by ID
exports.getUserByID = (req, res)=>{
    //console.log('get emp by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single user data',user);
        res.send(user);
    })
}

// create new user
exports.createNewUser = (req, res) =>{
    console.log("createNewUser");
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}

// update user
exports.updateUser = (req, res)=>{
    console.log("Update a user");
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, User)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

// delete User
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, User)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'User deleted successully!'});
    })
}