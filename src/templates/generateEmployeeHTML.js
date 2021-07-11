function generateEmployeeHTML(employee) {
	
	const specialField = (employee) => {
		let specialField = ``
		switch (employee.role) {
			case `Manager` : specialField = `Office Number: ${employee.officeNumber}`
				break
			case `Engineer` : specialField = `Github Profile: ${employee.github}`
				break
			case `Intern` : specialField = `School: ${employee.email}`
				break 
		}
		return specialField
	}
			
	const employeeHTML = 
	`
	<div>
	<h1>NAME: ${employee.name}</h1>
	<h1>ID: ${employee.id}</h1>
	<h1>Email: ${employee.email}</h1>
	<h1>${specialField(employee)}</h1>
	</div>
	`
	
	return employeeHTML
}

export default generateEmployeeHTML


