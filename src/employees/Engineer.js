import Employee from './Employee.js'

class Engineer extends Employee {
	constructor({name, id, email, github}) {
		super({name, id, email})
		this._github = github
	}
	
	get github(){
		return this._github
	}
	
	get role(){
		return `Engineer`
	}
}

export default Engineer