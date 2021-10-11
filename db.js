const mariadb = require('mariadb');

const pool = mariadb.createPool({
	host: 'localhost',
	user: 'testuser',
	password: 'testpass',
	connectionLimit: 5
});

pool.getConnection()
	.then(conn => {
		console.log("connected ! connection id is " + conn.threadId);
		conn.release();
	})
	.catch(err => {
		console.log("not connected due to error: " + err);
});
