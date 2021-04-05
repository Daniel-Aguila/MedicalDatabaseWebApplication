var dbConn  = require('../../config/db.config');

var User = function(user){
    this.emailAddress   =   user.emailAddress;
    // this.userID         =   user.userID;
    this.doctorID       =   user.doctorID;
    this.phoneNumber    =   user.phoneNumber;
    this.gender         =   user.gender;
    // this.updateby       =   user.updateby;
    // this.updateDate     =   user.updateDate;
    // this.createdDate    =   user.createdDate;
    // this.createdBy      =   user.createdBy;
    this.streetNumber   =   user.streetNumber;
    this.streetName     =   user.streetName;
    this.city           =   user.city;
    this.state          =   user.state;
    // this.zipCode        =   user.zipCode;
    this.aptNum         =   user.aptNum;
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get user by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM user WHERE userID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO user SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}

// update employee
User.updateUser = (id, userReqData, result)=>{
    console.log("Updating User now");
    dbConn.query("UPDATE user SET doctorID=?,emailAddress=?,phoneNumber=?,gender=?,streetNumber=?,streetName=?,city=?,state=?,aptNum=? WHERE userID = ?", 
    [
        //userReqData.userID, 
        userReqData.doctorID,
        userReqData.emailAddress, 
        userReqData.phoneNumber,
        userReqData.gender, 
        // userReqData.updateby,
        // userReqData.updatedate,
        // userReqData.createdDate,
        // userReqData.createdBy, 
        userReqData.streetNumber,
        userReqData.streetName,
        userReqData.city,
        userReqData.state,
        // userReqData.zipCode,
        userReqData.aptNum, id
    ], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(err, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete employee
User.deleteUser = (id, result)=>{
    
    dbConn.query('DELETE FROM user WHERE userID=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(err, err);
        }else{
            console.log("User deleted");
            result(null, res);
        }
    })
}

module.exports = User;