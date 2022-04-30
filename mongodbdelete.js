var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("data1");
    //var whereStr = { type: "en" };  // 查询条件
    //dbo.collection("site").deleteMany(whereStr, function(err, obj)
    dbo.collection("site").deleteMany(function(err, obj) {
        if (err) throw err;
        //console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});