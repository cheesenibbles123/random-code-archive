var mainDatabaseConnectionPool = mysql.createPool({
	connectionLimit : 30,
	host : databaseInfo.host,
	user : databaseInfo.user,
	password : databaseInfo.password,
	database : databaseInfo.database
});

mainDatabaseConnectionPool.query(SQL, (err,rows) => {
  // Insert Code
});
