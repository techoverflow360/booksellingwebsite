// this is the backend code file 

const express = require('express');
const path = require('path');
const multer = require('multer');

const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/Images'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage});

app.post('/upload', upload.array('images', 4), async (req, res) => {
    try {
        console.log(req.files); // This will show the uploaded files information
        
        // If you want to return a response to the client indicating successful upload
        res.status(200).send("Images uploaded successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 3000');
});
