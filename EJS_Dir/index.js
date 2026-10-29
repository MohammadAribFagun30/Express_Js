const express = require('express');

const app = express();

const path = require("path");

// to send css and js
// er janno ekta "public" folder lagbe

// app.use(express.static("public"));


// onno dir theke o server chalo hbe
 app.use(express.static(path.join(__dirname, "/public")));


app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.render("home.ejs");
}
);




// app.get("/ig/:username" , (req, res) =>
// {
//     let followers = [
//     "Arif",
//     "Sakib",
//     "Rahim",
//     "Karim",
//     "Nafis",
//     "Tanvir",
//     "Hasan"
// ];

//     let{username} = req.params;
//     res.render(`insta.ejs`,{username , followers} );
// }
// );


app.get("/rolldice", (req, res) => {

    let dicVal = Math.floor(Math.random() * 6) + 1;

    res.render("rolldice.ejs", { dicVal });
});



app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");
    console.log(instaData);


    // browser e jeta search krbo tar data dibe
    let data = instaData[username];  // data te instaData er value ase


    if (data) {
        res.render("animal.ejs", { data });
    }
    else{
        res.render("error.ejs");
    }

}
);



const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} `);
}

);
