window.addEventListener('load', () => {
    document.getElementByID('button_dance').addEventListener('click', () => {
        let noDance = document.getElementById('number_danceParties').value;
        console.log(noDance);


        //creating the object
        let obj = { "number": noDance };

        //stringify the object
        let jsonData = JSON.stringify(obj);


        //fetch to route noDance -- includes meta-information about information we're sending
        fetch('/noDance   ', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"

            },
            //the request in the body is the most important part 
            body: jsonData

        })
            .then(response => response.json())
            .then(data => { console.log(data) });
        //if it works there should be a console log that says "task success" on the server side 
        //b/c we wrote that in index.js


    });
});

document.getElementById('et-dance-tracker').addEventListener('click', () => {
    //get info on ALL the dance parties we've had so far
    fetch('/getDancing')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dance-info').innerHTML = '';
            for (let i = 0; data.data.length; i++) {
                let string = data.data[i].date + " : " + data.data[i].dances;
                let elt = document.createElement('p');
                elt.innerHTML = string;
                document.getElementById('dance-info').appendChild(elt);
            }
        })
});


//The use of fetch() on the client to make a POST request to your server


//The use of fetch() on the client to make a GET request from your server

//An app.get() route on the server to listen for a GET request from the client to send all of the data that is stored in your database to the client