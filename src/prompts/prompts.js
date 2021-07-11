const teamGeneratorPrompts = {
	
	employee: [
		{
			name:`role`,
			type:`list`,
			message: `What type of employee are you entering?`,
			choices: [`Manager`, `Engineer`, `Intern`]
		},
		{
			name:`name`,
			type:`input`,
			message: (answers) => `What is the ${answers.role}'s name?`
		},
		{
			name:`email`,
			type:`input`,
			message: (answers) => `What is the ${answers.role}'s email?`
		},
		{
			name:`id`,
			type:`input`,
			message: (answers) => `Please enter an id for the ${answers.role}`
		},
		{
			type: `input`,
			name: `officeNumber`,
			message: (answers) => `What is the ${answers.role}'s office number?`,
			when: (answers) => answers.role === `Manager`
		},
		{
			type: `input`,
			name: `github`,
			message: (answers) => `What is the ${answers.role}'s github profile?`,
			when: (answers) => answers.role === `Engineer`
		},
		{
			type: `input`,
			name: `school`,
			message: (answers) => `What is the ${answers.role}'s school?`,
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