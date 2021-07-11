import Manager from '../src/employees/Manager.js'

describe(`The Manager`, function () {
	const newManagerOptions = {
		name: `Kermit`,
		id: 4,
		email: `kermit@sesamestreet.org`,
		officeNumber: 23,
	}

	const newManager = new Manager(newManagerOptions)

	it(`should be an instance of Manager`, () => {
		expect(newManager).toBeInstanceOf(Manager)
	})

	it(`should have the name ${newManagerOptions.name}`, () => {
		expect(newManager.name).toBe(newManagerOptions.name)
	})

	it(`should have an id of ${newManagerOptions.id}`, () => {
		expect(newManager.id).toBe(newManagerOptions.id)
	})

	it(`should have an email of ${newManagerOptions.email}`, () => {
		expect(newManager.email).toBe(newManagerOptions.email)
	})

	it(`should have an office number of ${newManagerOptions.officeNumber}`, () => {
		expect(newManager.officeNumber).toBe(newManagerOptions.officeNumber)
	})

	it(`should have a role of Manager`, () => {
		expect(newManager.role).toBe(`Manager`)
	})
})
