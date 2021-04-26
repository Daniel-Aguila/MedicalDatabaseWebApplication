const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})


exports.login = async(req, res) =>{
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
}

exports.doctorLogin = async(req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).render('doctorLogin', {
                message: 'Please provide an email and password'
            })
        }
        
        db.query('SELECT * FROM doctor WHERE email = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('doctorLogin', {
                    message: 'Email or Password is incorrect'
                })
            }
            else{
                const id = results[0].doctorID;
                console.log(id);
                
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
                res.status(200).redirect("/login/homePageDoctor");
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

        db.query('SELECT * FROM staff WHERE email = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('staffLogin', {
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
                res.status(200).redirect("/login/homePageStaff");
            }
        })

    } catch(error){
        console.log(error);
    }
}

exports.infoGet = async(req, res) => {
    if (req.cookies.jwt) {
        try {
            // console.log(req.cookies);
            const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
            // const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            console.log("runs");
            if (decoded) {
                console.log("DECODED!");
                console.log("exporting json");
                console.log(decoded); // bar
                res.json(decoded);
            }
        }
        catch(error) {
            console.log(error);
        }
    }
}

exports.getUser = async(req, res, next) => {
    if (req.cookies.jwt) {
        try {
            // console.log(req.cookies);
            const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
            // const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            console.log("runs");
            if (decoded) {
                console.log("DECODED!");
/*                if (decoded.type != "patient") {
                    throw error = "Not a patient";
                }*/
                console.log(decoded); // bar
                // res.json(decoded);
                return next();
            }
        }
        catch(error) {
            console.log(error);
            res.redirect('/');
        }
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

        db.query('SELECT * FROM patient WHERE email = ?', [email], async(error, results)=>{
            console.log(results);
            //doing the compare() compares the password typed in the login with the password(hashed) in the database
            if(!results || !(await bcrypt.compare(password, results[0].password))) {
            //compares if the email is wrong or if the password is wrong
                res.status(401).render('patientLogin', {
                    message: 'Email or Password is incorrect'
                })
            }
            else{
                const id = results[0].patientID;
                console.log("THIS IS THE ID: ",id);
                //every user when they join creates a unique token
                const token = jwt.sign({id: id, type: "patient"}, process.env.JWT_SECRET, {
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
                res.status(200).redirect("/patient/home");
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
}

exports.doctorRegister = (req, res) => {
    console.log(req.body);
    const { Speciality, firstName, isPrimary, lastName,email,phoneNumber,gender,streetNumber,streetName, city, state, zipcode, aptNum, password, passwordConfirm } = req.body;
    let hashedPassword = ""
    let is_Primary = false
    if(isPrimary === "T" || isPrimary === "t"){
        is_Primary = true
    }
    else if(isPrimary === "F" || isPrimary === "f"){
        is_Primary = false
    }
    else{
        
        return res.render('doctorRegister', {
            message: 'Invalid input for primary physician'
        })
    }
    
    //Import database
    db.query('SELECT firstName FROM doctor WHERE firstName = ?', [firstName], async(error, results) => {
        if(error){
            console.log(error);
        }

        // if(results.length > 0){
        //     return res.render('doctorRegister', {
        //         message: 'That email is already in use'
        //     })
        // }
        else if(password !== passwordConfirm){
            return res.render('doctorRegister', {
                message: 'Passwords do not match'
            });
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
        let hashedPassword1 = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        hashedPassword = hashedPassword1
        db.query('INSERT INTO doctor SET ?', {Speciality:Speciality, isPrimary:is_Primary, firstName:firstName, lastName:lastName, email:email, password:hashedPassword}, (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
            }
        })
    });
    db.query('SELECT emailAddress FROM user WHERE emailAddress = ?', [email], async(error, results) => {
        if(results){
            return res.render('doctorRegister', {
                message: 'Invalid email'
            });
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
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
    let hashedPassword = ""
    let shouldSeeSpecialist = 1
    //Import database
    db.query('SELECT firstName FROM patient WHERE firstName = ?', [firstName], async(error, results) => {
        if(error){
            console.log(error);
        }

        if(results.length > 0){
            return res.render('patientRegister', {
                message: 'That email is already in use'
            });
        }
        else if(password !== passwordConfirm){
            return res.render('patientRegister', {
                message: 'Passwords do not match'
            });
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
        let hashedPassword1 = await bcrypt.hash(password, 8);
        console.log(hashedPassword1);
        hashedPassword = hashedPassword1
        db.query('INSERT INTO patient SET ?', {firstName: firstName, lastName: lastName, dateOfBirth: dateOfBirth, bloodType: bloodType, sex: sex, insurance: insurance, email:email, password:hashedPassword, shouldSeeSpecialist:shouldSeeSpecialist}, (error, results)=>{
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

exports.patientDetails = (req,res)=>{
    console.log(req.body);
    const { firstName, lastName,dateOfBirth,bloodType,sex,insurance,email,password, passwordConfirm, oldEmail} = req.body;
    if(password){
    let hashedPassword=""
    }
    console.log('SELECT email FROM patient WHERE email = ?', [oldEmail]);
    db.query('SELECT email FROM patient WHERE email = ?', [oldEmail], async(error, results) => {
        if(error){
            console.log(error);
        }
        if(password){
            if(password !== passwordConfirm){
                return res.render('patientDetails', {
                    message: 'Passwords do not match'
                });
            }
        }
        //we are using await because it can take a bit to encrypt some passwords
        //we are using 8 rounds of encryption
        if(password){
        let hashedPassword1 = await bcrypt.hash(password, 8);
        console.log(hashedPassword1);
        hashedPassword = hashedPassword1
        }
        if(firstName){
        db.query('UPDATE patient SET firstName = ? WHERE email=?',[firstName,oldEmail], (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('patientDetails', {
                    message: 'Updated Patient Details'
                });
            }
        })
    }
        if(dateOfBirth){
            db.query('UPDATE patient SET dateOfBirth = ? WHERE email=?', [dateOfBirth,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }
        if(bloodType){
            db.query('UPDATE patient SET bloodType = ? WHERE email=?',[bloodType,oldEmail],(error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }
        if(sex){
            db.query('UPDATE patient SET sex=? WHERE email=?', [sex,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }
        if(insurance){
            db.query('UPDATE patient SET insurance=? WHERE email=?',[insurance,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }
        if(email){
            db.query('UPDATE patient SET email = ? WHERE email=?', [email,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
            oldEmail=email
        }
        if(password){
            db.query('UPDATE patient SET password = ? WHERE email=?', [hashedPassword,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }
    });
}

//doctor edit their schedule
exports.doctorChangeWorkSched = (req,res)=>{
    console.log(req.body);
    const {state, office, startTime, endTime} = req.body;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

    if(state){
        db.query('UPDATE doctorSchedule SET officeID = ? WHERE doctorID = ?', [office, decoded.id], (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('doctorEditSchedule', {   
                    message: 'Updated work sched successfully'
                });
            }
        });
    }

       /* if(dateOfBirth){
            db.query('UPDATE patient SET dateOfBirth = ? WHERE email=?', [dateOfBirth,oldEmail], (error, results)=>{
                if(error){
                    console.log(error);
                }
                else{
                    console.log(results);
                    return res.render('patientDetails', {
                        message: 'Updated Patient Details'
                    });
                }
            })
        }*/

  
} 

exports.staffChangeAvailVacc = (req,res)=>{
    console.log(req.body);
    const {office, vaccineAvailable} = req.body;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);

    if(office){
        db.query('UPDATE offices SET vaccineAvailable = ? WHERE officeID = ?', [vaccineAvailable, office], (error, results)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log(results);
                return res.render('staffChangeVaccine', {   
                    message: 'Updated vaccines # successfully'
                });
            }
        });
    }
} 