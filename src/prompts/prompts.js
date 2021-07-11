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
			message: (answers) => `What is ${answers.name}'s id number?`
		},
		{
			name:`email`,
			type:`input`,
			message: (answers) => `What is ${answers.name}'s email?`
		},
		{
			name:`role`,
			type:`list`,
			message: (answers) => `What is ${answers.name}'s role?`,
			choices: [`Manager`, `Engineer`, `Intern`]
		},
		{
			type: `input`,
			name: `officeNumber`,
			message: (answers) => `What is ${answers.name}'s office number?`,
			when: (answers) => answers.role === `Manager`
		},
		{
			type: `input`,
			name: `github`,
			message: (answers) => `What is ${answers.name}'s github profile?`,
			when: (answers) => answers.role === `Engineer`
		},
		{
			type: `input`,
			name: `school`,
			message: (answers) => `What is ${answers.name}'s school?`,
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