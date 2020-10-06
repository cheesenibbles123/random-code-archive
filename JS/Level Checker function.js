function levelchecker(msg,reqlvl){
	var lvlcon = mysql.createConnection({
		host : mysqlLoginData.host,
		user : mysqlLoginData.user,
		password : mysqlLoginData.password,
		database : mysqlLoginData.database,
	});

	lvlcon.connect(err => {
		if(err) console.log(err);
	});
  
	let response = true
  
	lvlcon.query(`SELECT * FROM xp WHERE id='${msg.author.id}'`, (err,rows) => {
  
		if (rows.length < 1){
    
			response = false;
      
		}else if (parseInt(rows[0].level) < reqlvl){
    
			response = false;
      
		}
    
	});
  
	lvlcon.end();
  
	return response;
  
}
