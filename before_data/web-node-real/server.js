const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
  host: 'redis',
  port: 6379
});




app.get('/',(req, res)=>{
    redisClient.get('numVisits',(err, numVisits)=>{

        numVisitsToDisplay = parseInt(numVisits) + 1;


        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
       res.send(os.hostname +' ===> Number of visits is : ' + numVisitsToDisplay +"  end..." );
        numVisits++;

        redisClient.set('numVisits', numVisits);
    });
});

// os.hostname() 


port = process.env.PORT || 5000

app.listen(port, function() {
    console.log(`web  is listening on port ${port}  Hello  Everyone`);
});


