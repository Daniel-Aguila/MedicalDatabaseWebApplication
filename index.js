const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// create express router
const router = express.Router();

// create express app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse request data content type application/json
app.use(bodyParser.json());

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// router.get('/', (req, res)=>{
//     res.send('HERE!');
// });

//define root route
app.get('/', (req, res)=>{
    res.render('home', {error: false});
});

// import staff routes
const staffRoutes = require('./src/routes/staff.route');

// create staff routes
app.use('/staff', staffRoutes);

// import offices routes
const officesRoutes = require('./src/routes/offices.route');

// create offices routes
app.use('/offices', officesRoutes);

// //import serviceBooked routes
// const serviceBookedRoutes = require('./src/routes/serviceBooked.route');
// //create serviceBooked routes
// app.use('/api/v1/offices', serviceBookedRoutes);

// import patient routes
const patientRoutes = require('./src/routes/patient.route');

// create patient routes
app.use('/patient', patientRoutes);

// import prescription routes
const prescriptionRoutes = require('./src/routes/prescription.route');

// create prescription routes
app.use('/prescription', prescriptionRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});