
const express = require('express');

const app = express();



app.use( (req,res) =>
{
    console.log("request recieved");

    res.json(
         {
            message : "Hello World!"
        }
    )
}
);



//Path parameters --> type-1
app.get( "/:username", (req, res) =>
{
    // eta dekhabe terminal e
    console.log(req.params);

    // eta website e send hbe
    res.send("Hello , I am Fagun")
}
);



//Path parameters --> type-2
app.get( "/:username/:id", (req, res) =>
{
    // eta dekhabe terminal e
    console.log(req.params);

    // eta website e send hbe
    res.send("Hello , I am Fagun")
}
);



// Path parameters --> type-3
app.get( "/:username/:id", (req, res) =>
{
    // eta dekhabe terminal e
    let {username, id} = req.params;
    
    // eta website e send hbe
    res.send(`Welcome to the page of @${username}`)
}
);



//Query String --> type-1
app.get("/search", (req,res) =>
{  
    // show in git bash terminal e
    console.log(req.query);
    // in website
    res.send("no result");
}
);


// Query String --> type-2
app.get("/search", (req,res) =>
{  
    let {q} = req.query;

    res.send(`searh result for query ${q}`);
}
)





const PORT = 5001;

 app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} `);
}
);
