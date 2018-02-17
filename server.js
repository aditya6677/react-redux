const express = require('express');
const jso = require('request');
const app = express();
const port = process.env.PORT || 5000;
app.get('/api', function(req, res){
  jso('https://contesttrackerapi.herokuapp.com/android/',function(err, rsp, bd){
        res.send(JSON.parse(bd));
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
/*

{this.state.users.map(e => (
                        <h2>{e.Name}</h2>
                    ))}

*/