var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var nwt=require('nodejs-websocket');
 var server=nwt.createServer(function(conn){
   console.log('new connection success');

   //Used to process the message sent by the receiving client's click
   conn.on('text',function(str){
     console.log(str);

      var data = JSON.parse(str);    
      switch(data.type){
        case 'setname':
          conn.rename=data.name;
          conn.clotime=data.time;
          sendevery(JSON.stringify({
            name: 'Service-Terminal:',
            text: data.name + ' join into chat' ,
            time: data.time,         
          }));
          MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var database1 = db.db("data1");
            var mydb =  [
                { 
                text: data.name + ' join into chat' ,
                time: data.time
               }
               ];
            database1.collection("site").insertMany(mydb, function(err, res) {
                if (err) throw err;
                console.log("Insert documents num: " + res.insertedCount);
                db.close();
            });
          });
           break;
        case 'chat':        
            sendevery(JSON.stringify({
              name: conn.rename,
              time: data.time, 
              text: data.text    
            }));      
            MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              var database1 = db.db("data1");
              var mydb =  [
                  { 
                    name: conn.rename,
                    time: data.time, 
                    text: data.text 
                 }
                 ];
              database1.collection("site").insertMany(mydb, function(err, res) {
                  if (err) throw err;
                  console.log("Insert documents num: " + res.insertedCount);
                  db.close();
              });
            });     
            break;  
        default:
         
            break;
      }
   });

   //Automatically triggered when the user closes the webpage or manually close the webpage connection
   conn.on('close', function() {    

    sendevery(JSON.stringify({
      name: 'Server2',
      text: conn.rename + ' Leave chat',
      time: conn.clotime
    }));
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var database1 = db.db("data1");
      var mydb =  [
          { 
          text: conn.rename + ' leave chat' ,
          time: conn.clotime
         }
         ];
      database1.collection("site").insertMany(mydb, function(err, res) {
          if (err) throw err;
          console.log("Insert documents num: " + res.insertedCount);
          db.close();
      });
    });
   });
     //Send error when client is closed
     conn.on('error',function(err){
         console.log(err);
     })
  }).listen(8888); 
  
  //Circulate the news sendevery update to everyone
  function sendevery(str){
    console.log('Into chat');
    console.log(str);

     //Traverse everyone to send messages
     server.connections.forEach(function(conn) {

      //Send message to client
       conn.sendText(str);
     })
  }
