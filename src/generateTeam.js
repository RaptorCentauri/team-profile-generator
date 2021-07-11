import inquirer from 'inquirer'
import {Manager, Engineer, Intern } from './employees/index.js'
import teamGeneratorPrompts from './prompts/prompts.js'

const EmployeeRole = {Manager, Engineer, Intern}
const {employee, addAnotherEmployee} = teamGeneratorPrompts

async function generateTeam(){
	let team = []
	let addMoreEmployees
	
	do{
		const employeeAnswers = await inquirer.prompt(employee)
		
		const newEmployee = new EmployeeRole[employeeAnswers.role](employeeAnswers)	
		team.push(newEmployee)
			
		const {continueAdding} = await inquirer.prompt(addAnotherEmployee)
		addMoreEmployees = continueAdding
		
	}while(addMoreEmployees)
	
	return team
}

export default generateTeam


