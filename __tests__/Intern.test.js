import Intern from '../src/employees/Intern.js'

describe(`The Intern`, function () {
	const newInternOptions = {
		name: `Oscar`,
		id: 3,
		email: `oscar@sesamestreet.org`,
		school: `Trashcan University`,
	}

	const newIntern = new Intern(newInternOptions)

	it(`should be an instance of Intern`, () => {
		expect(newIntern).toBeInstanceOf(Intern)
	})

	it(`should have the name ${newInternOptions.name}`, () => {
		expect(newIntern.name).toBe(newInternOptions.name)
	})

	it(`should have an id of ${newInternOptions.id}`, () => {
		expect(newIntern.id).toBe(newInternOptions.id)
	})

	it(`should have an email of ${newInternOptions.email}`, () => {
		expect(newIntern.email).toBe(newInternOptions.email)
	})

	it(`should have an school of ${newInternOptions.school}`, () => {
		expect(newIntern.school).toBe(newInternOptions.school)
	})

	it(`should have a role of Intern`, () => {
		expect(newIntern.role).toBe(`Intern`)
	})
})
