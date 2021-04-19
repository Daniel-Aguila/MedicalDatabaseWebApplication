const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})


//exports.login = async(req, res) =>{
//    try {
//        const { email, password } = req.body;
//        if(!email || !password){
//            return res.status(400).render('login', {
//                message: 'Please provide an email and password'
//            })
//       }

//        db.query('SELECT * FROM user WHERE emailAddress = ?', [email], async(error, results)=>{
//            console.log(results);
//            //doing the compare() compares the password typed in the login with the password(hashed) in the database
//            if(!results || !(await bcrypt.compare(password, results[0].password))) {
//            //compares if the email is wrong or if the password is wrong
//                res.status(401).render('login', {
//                    message: 'Email or Password is incorrect'
//                })
//            }
//            else{
//                const id = results[0].id;
                
                //every user when they join creates a unique token
//                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
//                    expiresIn: process.env.JWT_EXPIRES_IN
//                });

//                console.log("The token is: " + token);
                
//                const cookieOptions = {
//                    expires: new Date(
//                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//                    ),
//                    httpOnly: true
//                }
//                res.cookie('jwt', token, cookieOptions);
                //res.json({ token });
//                res.status(200).redirect("/");
//            }
//        })

//    } catch(error){
//        console.log(error);
//    }
//}

exports.doctorLogin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })
        }

        db.query('SELECT * FROM user WHERE emailAddress = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('doctorLogin', {
                    message: 'Email or Password is incorrect'
                })
            }
            else{
                const id = results[0].id;
                
                //every user when they join creates a unique token
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);
                
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                //res.json({ token });
                res.status(200).redirect("/");
            }
        })

    } catch(error){
        console.log(error);
    }
}

exports.staffLogin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).render('staffLogin', {
                message: 'Please provide an email and password'
            })
        }

        db.query('SELECT * FROM user WHERE emailAddress = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('login', {
                    message: 'Email or Password is incorrect'
                })
            }
            else{
                const id = results[0].id;
                
                //every user when they join creates a unique token
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);
                
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                //res.json({ token });
                res.status(200).redirect("/");
            }
        })

    } catch(error){
        console.log(error);
    }
}

exports.patientLogin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).render('patientLogin', {
                message: 'Please provide an email and password'
            })
        }

        db.query('SELECT * FROM user WHERE emailAddress = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('login', {
                    message: 'Email or Password is incorrect'
                })
            }
            else{
                const id = results[0].id;
                
                //every user when they join creates a unique token
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);
                
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                //res.json({ token });
                res.status(200).redirect("/");
            }
        })

    } catch(error){
        console.log(error);
    }
}

//exports.register = (req, res) => {
//    console.log(req.body);
exports.logout = async(req, res)=>{
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES + 2 * 1000
        ),
        httpOnly: true
        }
    res.cookie('jwt', 'logout', cookieOptions)

    res.status(200).redirect('/');
}

exports.register = (req, res) => {
    console.log(req.body);
    
    //const name = req.body.name;
    //const email = req.body.email;
    //const password = req.body.password;
    //const passwordConfirm = req.body.passwordConfirm;

    //The line below is the same as the line above because in the html the "name" is the same as our "const names"
    //For example in the html the form input for email is named "email" and since we are naming our const variable
    //"email", we can just follow that logic for all the other variables and the line below is a shorter method of doing
    //the line above
//    const { name, email, phoneNumber, gender, streetName, streetNumber, city, state, zipcode, aptNum, password, passwordConfirm } = req.body;

    //Import database
//    db.query('SELECT emailAddress FROM user WHERE emailAddress = ?', [email], async(error, results) => {
//       if(error){
//            console.log(error);
//        }

//       if(results.length > 0){
//            return res.render('register', {
//                message: 'That email is already in use'
//            })
//        }
//        else if(password !== passwordConfirm){
//            return res.render('register', {
//                message: 'Passwords do not match'
//            });
//        }

        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
//        let hashedPassword = await bcrypt.hash(password, 8);
//        console.log(hashedPassword);

//        db.query('INSERT INTO user SET ?', {name: name, emailAddress: email, phoneNumber: phoneNumber, gender: gender, streetName: streetName, streetNumber: streetNumber, city: city, state: state, zipcode: zipcode, aptNum: aptNum, password: hashedPassword }, (error, results)=>{
//            if(error){
//                console.log(error);
//            }
//            else{
//                console.log(results);
//                return res.render('register', {
//                    message: 'User registered'
//                });
//            }
//        })
//    });
//}

exports.doctorRegister = (req, res) => {
    console.log(req.body);
    const { Speciality, firstName, lastName,email,phoneNumber,gender,streetNumber,streetName, city, state, zipcode, aptNum, password, passwordConfirm } = req.body;
    let hashedPassword = ""
    const isPrimary = true
    //Import database
    db.query('SELECT firstName FROM doctor WHERE firstName = ?', [firstName], async(error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('register', {
                message: 'That email is already in use'
            })
        }
        else if(password !== passwordConfirm){
            return res.render('doctorRegister', {
                message: 'Passwords do not match'
            });
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption

        db.query('INSERT INTO doctor SET ?', {Speciality:Speciality, isPrimary:isPrimary, firstName:firstName, lastName:lastName}, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
            }
        })
    });
    db.query('SELECT emailAddress FROM user WHERE emailAddress = ?', [email], async(error, results) => {

        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
        let hashedPassword1 = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        hashedPassword = hashedPassword1
        db.query('INSERT INTO user SET ?', {emailAddress: email, phoneNumber: phoneNumber, gender: gender, streetName: streetName, streetNumber: streetNumber, city: city, state: state, zipcode: zipcode, aptNum: aptNum, password: hashedPassword }, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('doctorRegister', {
                    message: 'Doctor registered'
                });
            }
        })
    });
}

exports.patientRegister = (req, res) => {
    console.log(req.body);
    const { firstName, lastName,dateOfBirth,bloodType,sex,insurance,email,phoneNumber,gender,streetNumber,streetName, city, state, zipcode, aptNum, password, passwordConfirm } = req.body;

    //Import database
    db.query('SELECT firstName FROM patient WHERE firstName = ?', [firstName], async(error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('register', {
                message: 'That email is already in use'
            })
        }
        else if(password !== passwordConfirm){
            return res.render('patientRegister', {
                message: 'Passwords do not match'
            });
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption

        db.query('INSERT INTO patient SET ?', {firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, bloodType: bloodType, sex: sex, insurance: insurance}, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
            }
        })
    });
    db.query('SELECT emailAddress FROM user WHERE emailAddress = ?', [email], async(error, results) => {

        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO user SET ?', {emailAddress: email, phoneNumber: phoneNumber, gender: gender, streetName: streetName, streetNumber: streetNumber, city: city, state: state, zipcode: zipcode, aptNum: aptNum, password: hashedPassword }, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('patientRegister', {
                    message: 'Patient registered'
                });
            }
        })
    });
}

exports.staffRegister = (req, res) => {
    console.log(req.body);
    const { staffType,firstName, lastName,email,phoneNumber,gender,streetNumber,streetName, city, state, zipcode, aptNum, password, passwordConfirm } = req.body;
    let hashedPassword = ""
    //Import database
    db.query('SELECT email FROM staff WHERE email = ?', [email], async(error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('register', {
                message: 'That email is already in use'
            })
        }
        else if(password !== passwordConfirm){
            return res.render('staffRegister', {
                message: 'Passwords do not match'
            });
        }
        let hashedPassword1 = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        hashedPassword=hashedPassword1
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption

        db.query('INSERT INTO staff SET ?', {staffType: staffType,password:hashedPassword,firstName:firstName,lastName:lastName,streetName:streetName,email:email,streetNumber:streetNumber,city:city,state:state,zipCode:zipcode}, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
            }
        })
    });
    db.query('SELECT emailAddress FROM user WHERE emailAddress = ?', [email], async(error, results) => {

        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption

        db.query('INSERT INTO user SET ?', {emailAddress: email, phoneNumber: phoneNumber, gender: gender,streetNumber: streetNumber, streetName: streetName, city: city, state: state, zipcode: zipcode, aptNum: aptNum, password: hashedPassword }, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('staffRegister', {
                    message: 'Staff registered'
                });
            }
        })
    });
}

//NOTE TO SELF - VERIFY THAT THE LOGINS WORK WITH THE REGISTRATION
//DOCTOR - 
//PATIENT - 
//STAFF -