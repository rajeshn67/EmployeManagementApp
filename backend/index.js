const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes');
const PORT = process.env.PORT;

require('./Models/db');
app.use(cors({ origin: process.env.Fronend_URL || 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use('/api/employees', EmployeeRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})