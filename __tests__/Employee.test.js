import Employee from '../src/employees/Employee.js'

describe(`The Employee`, function () {
	const newEmployeeOptions = {
		name: `Big Bird`,
		id: 7,
		email: `bigbird@sesamestreet.org`,
	}

	const newEmployee = new Employee(newEmployeeOptions)

	it(`should be an instance of Employee`, () => {
		expect(newEmployee).toBeInstanceOf(Employee)
	})

	it(`should have the name ${newEmployeeOptions.name}`, () => {
		expect(newEmployee.name).toBe(newEmployeeOptions.name)
	})

	it(`should have an id of ${newEmployeeOptions.id}`, () => {
		expect(newEmployee.id).toBe(newEmployeeOptions.id)
	})

	it(`should have an email of ${newEmployeeOptions.email}`, () => {
		expect(newEmployee.email).toBe(newEmployeeOptions.email)
	})

	it(`should have a role of Employee`, () => {
		expect(newEmployee.role).toBe(`Employee`)
	})
})
