let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.json());

//DB - 1 - Connect to the Mongo DB app
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://caitycroft:fpkccqcft6yhnMDB@cluster0.iltflrd.mongodb.net/?retryWrites=true&w=majority");
db.on("ready", () => {
    console.log("Database connected!");
});
db.connect();

//DB - 2 - add values to the DB

//Change these two lines below to a key:value pair -- consult quickmongo documentation
// danceTracker.push(obj);
// console.log(danceTracker);
db.push("danceTrackerData", obj);



let danceTracker = [];

app.get('/', (request, response) => {
    response.send("Howdy!");
});

app.listen(5000, () => {
    console.log("app is listening at localhost:5000");
});

//2. add a route on the server that is listening for a post request
app.post('/noDanceParties', (request, response) => {
    console.log(request.body);
    response.json({ task: "success" });
    let CurrentDate = Date.now();
    let obj = {
        date: CurrentDate,
        dance: request.body.number,
    }
    // danceTracker.push(obj);
    // console.log(danceTracker);
    response.json({ task: "success" });
});

//add route to get all dance party tracking information
app.get('/getDancing', (request, response) => {
    //DB - 3 - fetch from the DB
    db.get("danceTrackerData").then(danceData => {
        let obj = { data: dancePartyTracker };
        response.json(obj);

    }
    )

})


//An app.post() route on the server to listen for a POST request from the client to receive and store your data on the server