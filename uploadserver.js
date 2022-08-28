const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')

const app = express();

// middle ware
app.use(express.static('UserImages')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());

// file upload api
app.post('/saveImage', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/UserImages/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        console.log('uploaded image to /UserImages successfully!');
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

const PORT = 4500;

app.listen(PORT, () => {
    console.log('uploadserver is running at port ' + PORT);
})
