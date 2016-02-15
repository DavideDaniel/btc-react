import express from 'express';

const app = express();

app.use((req,res)=>{
	const HTML = `
	<!DOCTYPE html>
		<html lang="en">
			<head>
			<meta charset="UTF-8">
			<title>Hack Oregon::Behind the Curtain</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
			</head>
			<body>
				<div id="app"></div>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;

		res.end(HTML);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('Server listening on port ', PORT);
});
