 var pingpp = require('pingpp')('sk_test_1WDKWL584Sq9Kan1KG9GSyLG');
var express =require('express');
var body_parser = require('body-parser');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.json());


var appId = 'app_fffffHuv10mP1SuH';

app.get('/charge', function(req, res) {
  pingpp.charges.create({
        subject: "Your Subject",
        body: "Your Body",
        amount: 100,
        order_no: Date.now(),
        channel: "alipay_pc_direct",
        currency: "cny",
        client_ip: "127.0.0.1",
        app: {id: appId},
        extra: {
          success_url: 'http://121.42.62.149:3000/'
        }
    }, function(err, charge) {
        // YOUR CODE
        console.log(err);
        console.log(charge);
        res.json(charge);
    });
});

app.post('/hook', function(req, res) {
  console.log('this is hook');
  console.log(req.body);
  res.status(200);
  res.send();
})

app.listen(3000, function(){
  console.log('this app is listen in port 3000');
})
