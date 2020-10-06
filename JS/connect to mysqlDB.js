mysqlLoginData = {
  "host" : "255.255.255.255",
  "user" : "root",
  "password" : "password",
  "database" : "myDatabase"
}

function interactWithDB(){

  var connection = mysql.createConnection({
	host : mysqlLoginData.host,
	user : mysqlLoginData.user,
	password : mysqlLoginData.password,
	database : mysqlLoginData.database,
  });
			
  connection.connect(err => {
    if(err) console.log(err);
  });

  connection.query(`SELECT * sampleTable`, (err,rows) => {
      // Do something with data
  });
  setTimeout(function(){
    connection.end();
  },3000);
}
