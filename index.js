// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// // create express router
// const router = express.Router();

// // create express app
// const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// // setup the server port
// const port = process.env.PORT || 5000;

// // parse request data content type application/x-www-form-rulencoded
// app.use(bodyParser.urlencoded({extended: true}));

// // parse request data content type application/json
// app.use(bodyParser.json());

// // set public folder
// app.use(express.static(path.join(__dirname, 'public')));

// // router.get('/', (req, res)=>{
// //     res.send('HERE!');
// // });

// //define root route
// app.get('/', (req, res)=>{
//     res.render('home', {error: false});
// });

// // import staff routes
// const staffRoutes = require('./src/routes/staff.route');

// // create staff routes
// app.use('/staff', staffRoutes);

// // import offices routes
// const officesRoutes = require('./src/routes/offices.route');

// // create offices routes
// app.use('/offices', officesRoutes);

// // import notifications routes
// const notificationsRoute = require('./src/routes/notifications.route');

// // create notifications routes
// app.use('/api/v1/notifications', notificationsRoute);

// // import vaccinations routes
// const vaccinationsRoute = require('./src/routes/vaccinations.route');

// // create vaccinations routes
// app.use('/api/v1/vaccinations', vaccinationsRoute);

// //import serviceBooked routes
// const serviceBookedRoutes = require('./src/routes/serviceBooked.route');
// //create serviceBooked routes
// app.use('/api/v1/serviceBooked', serviceBookedRoutes);

// //import doctor routes
// const doctorRoutes = require('./src/routes/doctor.route');
// //create doctor routes
// app.use('/api/v1/doctor', doctorRoutes);

// //import company routes
// const companyRoutes = require('./src/routes/company.route');
// //create company routes
// app.use('/api/v1/company', companyRoutes);

// // import patient routes
// const patientRoutes = require('./src/routes/patient.route');

// // create patient routes
// app.use('/patient', patientRoutes);

// // import prescription routes
// const prescriptionRoutes = require('./src/routes/prescription.route');

// // create prescription routes
// app.use('/prescription', prescriptionRoutes);

// // import employee routes
// const userRoutes = require('./src/routes/user.route');
// const serviceRoutes = require('./src/routes/service.route');
// const specialtyRoute = require('./src/routes/specialty.route');
// const invoiceRoute = require('./src/routes/invoice.route');
// const appointmentRoute = require('./src/routes/appointments.route');
// const serviceProvidedRoute = require('./src/routes/serviceProvided.route');
// // create employee routes
// app.use('/api/user', userRoutes);
// app.use('/api/service', serviceRoutes);
// app.use('/api/specialty', specialtyRoute);
// app.use('/api/invoice', invoiceRoute);
// app.use('/api/appointment', appointmentRoute);
// app.use('/api/serviceProvided', serviceProvidedRoute);

// // listen to the port----------------------------------------------------
// app.listen(port, ()=>{
//     console.log(`Express is running at port ${port}`);
// });
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("MySQL Connected...")
    }
})

const PORT = 3002;

//publicDirectory is where you put any css or javascript files for the front end to use
const publicDirectory = path.join(__dirname, './public')
console.log(__dirname)

app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());
//app.use(express.static('medilab'));
app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Running on: ${PORT}`));