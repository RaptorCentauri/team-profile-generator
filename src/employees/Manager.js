import Employee from './Employee.js'

class Manager extends Employee {
	constructor({name, id, email, officeNumber}) {
		super({name, id, email})
		this._officeNumber = officeNumber
	}
	
	get officeNumber(){
		return this._officeNumber
	}
	
	get role(){
		return `Manager`
	}
}

export default Manager
