require('dotenv').config();
const cors=require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DevicesModel = require('./models/Devices');
const RoutesModel = require('./models/Routes');

const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.post('/addnewdevice', (req, res)=>{
    const newDevice = req.body;
    const document = new DevicesModel(newDevice);

    document.save().then((savedData)=>{
        console.log('Data saved:', savedData);
        res.status(200).json(savedData);
        }).catch((err)=>{
            console.error(err);
            res.status(500).send("Failed");
        })
    })


app.get('/', async (req, res)=>{
    // Find all documents in the collection
    try{
        const routes = await RoutesModel.find().exec();
        res.status(200).json(routes);
    }catch(error){
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/devices', async (req, res)=>{
    console.log('req received');
    try{
        const devices  = await DevicesModel.find().exec();
        res.status(200).json(devices);
    }catch(error){
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})




mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT, (req, res)=>{

        console.log(`Connected to database and server started on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.error("Failed to connect to database: ", error);
});

