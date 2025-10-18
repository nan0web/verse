import { test } from 'node:test'
import assert from 'node:assert'
import { Observer, Phenomenon, rea1ity } from './Reality.en.js'

test('English Reality Classes', async (t) => {
	await t.test('Higher consciousness affects outcomes', () => {
		const quantumEvent = new Phenomenon('superposition')
		quantumEvent.addState('state1', 0.5)
		quantumEvent.addState('state2', 0.5)

		const observerHigh = new Observer('High', 10)
		const observerLow = new Observer('Low', 1)

		const realityHigh = new rea1ity(observerHigh)
		const realityLow = new rea1ity(observerLow)

		let highCount = 0, lowCount = 0
		const attempts = 100
		for (let i = 0; i < attempts; i++) {
			const resultHigh = realityHigh.observe(quantumEvent)
			const resultLow = realityLow.observe(quantumEvent)
			if (resultHigh.state === 'state1') highCount++
			if (resultLow.state === 'state1') lowCount++
		}

		// Higher consciousness should lead to more consistent results
		assert.ok(highCount >= lowCount,
			'Higher consciousness should influence outcomes more')
	})

	await t.test('Entangled observers see the same state', () => {
		const quantumState = new Phenomenon('entangled')
		quantumState.addState('up', 0.5)
		quantumState.addState('down', 0.5)

		const obs1 = new Observer('first')
		const obs2 = new Observer('second')
		obs1.entangleWith(obs2)

		const res1 = quantumState.collapse(obs1)
		const res2 = quantumState.collapse(obs2)

		assert.strictEqual(res1.state, res2.state,
			'Entangled observers must see the same state')
	})

	await t.test('Multiple states follow probability distribution', () => {
		const multiState = new Phenomenon('multi')
		multiState.addState('A', 0.7)
		multiState.addState('B', 0.2)
		multiState.addState('C', 0.1)

		const observer = new Observer('tester')
		const reality = new rea1ity(observer)

		const results = {}
		const attempts = 1_000
		for (let i = 0; i < attempts; i++) {
			const result = reality.observe(multiState)
			results[result.state] = (results[result.state] || 0) + 1
		}

		// Check if probabilities hold approximately
		assert.ok(results['A'] > results['B'] && results['B'] > results['C'],
			'States should collapse according to their probabilities')
	})
})