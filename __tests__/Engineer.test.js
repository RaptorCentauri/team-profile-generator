import Engineer from '../src/employees/Engineer.js'

describe(`The Engineer`, function () {
	const newEngineerOptions = {
		name: `Cookie Monster`,
		id: 5,
		email: `cookiemonster@sesamestreet.org`,
		github: `cookieCoder89`,
	}

	const newEngineer = new Engineer(newEngineerOptions)

	it(`should be an instance of Engineer`, () => {
		expect(newEngineer).toBeInstanceOf(Engineer)
	})

	it(`should have the name ${newEngineerOptions.name}`, () => {
		expect(newEngineer.name).toBe(newEngineerOptions.name)
	})

	it(`should have an id of ${newEngineerOptions.id}`, () => {
		expect(newEngineer.id).toBe(newEngineerOptions.id)
	})

	it(`should have an email of ${newEngineerOptions.email}`, () => {
		expect(newEngineer.email).toBe(newEngineerOptions.email)
	})

	it(`should have an github profile of ${newEngineerOptions.github}`, () => {
		expect(newEngineer.github).toBe(newEngineerOptions.github)
	})

	it(`should have a role of Engineer`, () => {
		expect(newEngineer.role).toBe(`Engineer`)
	})
})
