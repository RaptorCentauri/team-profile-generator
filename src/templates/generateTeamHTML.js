import generateEmployeeHTML from './generateEmployeeHTML.js'

function generateTeamHTML(employees){
	
	let teamHTML =
	`<!DOCTYPE html>
	<html lang="en">
		<head>
			<title></title>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="css/style.css" rel="stylesheet">
		</head>
		<body>
			${employees.map(employee => generateEmployeeHTML(employee)).join(``)}	
		</body>
	</html>
	`
	
	return teamHTML
	
}

export default generateTeamHTML

