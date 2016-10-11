var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var url = 'mongodb://localhost:27017/ContactList';
var CONTACTS_COLLECTION = "contacts";

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongodb.MongoClient.connect(url, function(err, database) {
if (err) {
    console.log(err);
    process.exit(1);
  }
   db = database;
   app.set('port', process.env.PORT || 8080);
   var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/contactList"
 *    GET: finds all contacts
 */

app.get('/contactList', function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});


app.post('/contact', function(req, res) {
  var newContact = req.body;
  console.log(req.body);
  if (!(req.body.name)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

  db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});
/*app.get('/contactList', function(req, res){
 person1 = {
        name: 'Tim',
        email: 'tim@gmail.com',
        number: 457394759378
    };

    person3 = {
        name: 'Sam',
        email: 'sam@gmail.com',
        number: 457394759378
    };
    person2 = {
        name: 'John',
        email: 'john@gmail.com',
        number: 457394759378
    };

    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});*/

//app.listen(3000);
//console.log('Server running on port 3000 ');
