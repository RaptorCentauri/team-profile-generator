const teamGeneratorPrompts = {
	
	employee: [
		{
			name:`name`,
			type:`input`,
			message: `What is the employee's name?`
		},
		{
			name:`id`,
			type:`input`,
			message: `What is the employee's id number?`
		},
		{
			name:`email`,
			type:`input`,
			message: `What is the employee's email?`
		},
		{
			name:`role`,
			type:`list`,
			message: `What is the employee's role?`,
			choices: [`Manager`, `Engineer`, `Intern`]
		},
		{
			type: `input`,
			name: `officeNumber`,
			message: `What is the employee's office number?`,
			when: (answers) => answers.role === `Manager`
		},
		{
			type: `input`,
			name: `github`,
			message: `What is the employee's github profile?`,
			when: (answers) => answers.role === `Engineer`
		},
		{
			type: `input`,
			name: `school`,
			message: `What is the employee's school?`,
			when: (answers) => answers.role === `Intern`
		}
	],

	addAnotherEmployee: [
		{
			type: `confirm`,
			name: `continueAdding`,
			message: `Would you like to add another employee?`
		}
	]
}

export default teamGeneratorPrompts