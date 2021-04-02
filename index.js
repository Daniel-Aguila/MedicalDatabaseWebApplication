const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import staff routes
const staffRoutes = require('./src/routes/staff.route');

// create staff routes
app.use('/api/v1/staff', staffRoutes);

// import offices routes
const officesRoutes = require('./src/routes/offices.route');

// create offices routes
app.use('/api/v1/offices', officesRoutes);

// import notifications routes
const notificationsRoute = require('./src/routes/notifications.route');

// create notifications routes
app.use('/api/v1/notifications', notificationsRoute);

// import vaccinations routes
const vaccinationsRoute = require('./src/routes/vaccinations.route');

// create vaccinations routes
app.use('/api/v1/vaccinations', vaccinationsRoute);

//import serviceBooked routes
const serviceBookedRoutes = require('./src/routes/serviceBooked.route');
//create serviceBooked routes
app.use('/api/v1/serviceBooked', serviceBookedRoutes);

//import doctor routes
const doctorRoutes = require('./src/routes/doctor.route');
//create doctor routes
app.use('/api/v1/doctor', doctorRoutes);

//import company routes
const companyRoutes = require('./src/routes/company.route');
//create company routes
app.use('/api/v1/company', companyRoutes);

// import patient routes
const patientRoutes = require('./src/routes/patient.route');

// create patient routes
app.use('/api/v1/patient', patientRoutes);

// import prescription routes
const prescriptionRoutes = require('./src/routes/prescription.route');

// create prescription routes
app.use('/api/v1/prescription', prescriptionRoutes);

// import serviceProvided routes
const serviceProvidedRoutes = require('./src/routes/serviceProvided.route');

// create serviceProvided routes
app.use('/api/v1/serviceProvided', serviceProvidedRoutes);

// listen to the port----------------------------------------------------
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});