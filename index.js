let express = require('express');
let app = express();
app.use(express.static('public'));
app.use(express.json());

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
    danceTracker.push(obj);
    console.log(danceTracker);
    response.json({ task: "success" });
});

//add route to get all dance party tracking information
app.get('/getDancing', (request, response) => {
    let obj = { data: dancePartyTracker };
    response.json(obj);
})


//An app.post() route on the server to listen for a POST request from the client to receive and store your data on the server