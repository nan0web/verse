import { Observer, Potential, Phenomenon, rea1ity, rea0ity, g0d } from './Reality.en.js'

// 1. World Creation
const god = new g0d()
const initialPotentials = [
	new Potential('energy'),
	new Potential('matter'),
	new Potential('consciousness')
]
const world = god.entangle(initialPotentials)

// 2. Objective reality at different moments
const now = new rea0ity()
const past = new rea0ity()
const future = new rea0ity()

now.entangle([new Potential('present')])
past.entangle([new Potential('memory')])
future.entangle([new Potential('possibility')])

// 3. Interaction of realities
const observer1 = new Observer('human1')
const observer2 = new Observer('human2')

const reality1 = new rea1ity(observer1)
const reality2 = new rea1ity(observer2)

const quantumPhenomenon = new Phenomenon('quantum event')

// Different observations from different realities
const observation1 = reality1.observe(quantumPhenomenon)
const observation2 = reality2.observe(quantumPhenomenon)

console.log('World created:', world)
console.log('Temporal realities:', { now, past, future })
console.log('Cross-reality observations:', { observation1, observation2 })
