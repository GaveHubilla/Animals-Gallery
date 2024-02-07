<<<<<<< HEAD
const API_KEY = process.env.API_KEY;

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    try {
        res.render("main.ejs");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.post("/pictures", async (req, res) => {
    const category = req.body.category;

    try {
        let apiUrl = "";
        
        // Determine the API URL based on the category
        if (category === "Shiba Pictures") {
            apiUrl = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
        } else if (category === "Cat Pictures") {
            apiUrl = "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true";
        } else if (category === "Bird Pictures") {
            apiUrl = "http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true";
        } else {
            res.status(400).send('Invalid category');
            return;
        }
        const response = await axios.get(apiUrl);
        const images = response.data;
        // Render your EJS template with the array of images
        res.render("index.ejs", { images });
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () =>{
    console.log(`You are now in port ${port}`);
}); 
=======
const API_KEY = process.env.API_KEY;

import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    try {
        res.render("main.ejs");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.post("/pictures", async (req, res) => {
    const category = req.body.category;

    try {
        let apiUrl = "";
        
        // Determine the API URL based on the category
        if (category === "Shiba Pictures") {
            apiUrl = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
        } else if (category === "Cat Pictures") {
            apiUrl = "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true";
        } else if (category === "Bird Pictures") {
            apiUrl = "http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true";
        } else {
            res.status(400).send('Invalid category');
            return;
        }
        const response = await axios.get(apiUrl);
        const images = response.data;
        // Render your EJS template with the array of images
        res.render("index.ejs", { images });
    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () =>{
    console.log(`You are now in port ${port}`);
}); 
>>>>>>> 407885ba5a829158022c4f42083ed831ec2daba1
