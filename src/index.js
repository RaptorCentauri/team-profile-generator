import generateTeam from './generateTeam.js'
import generateTeamHTML from './templates/generateTeamHTML.js'
import * as fs from 'fs-extra'

async function init(){
	let team = await generateTeam()
	let teamHTML = generateTeamHTML(team)		
	await fs.outputFile(`../pages/index.html`, teamHTML)
}

init()