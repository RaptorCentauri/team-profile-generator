import Employee from './Employee.js'

class Intern extends Employee {
	constructor({name, id, email, school}) {
		super({name, id, email})
		this._school = school
	}
	
	get school(){
		return this._school
	}
	
	get role(){
		return `Intern`
	}
}

export default Intern