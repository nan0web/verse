/**
 * Quantum Observer
 * @description Consciousness that collapses wave function
 */
class Observer {
	constructor(id, consciousnessLevel = 1) {
		this.id = id
		this.consciousnessLevel = consciousnessLevel
		this.entangledObservers = new Set()
	}

	entangleWith(otherObserver) {
		this.entangledObservers.add(otherObserver)
		otherObserver.entangledObservers.add(this)
	}

	toString() {
		return `${this.id} (${this.consciousnessLevel}) [${this.entangledObservers.size} entagles]`
	}
}
/**
 * Quantum Phenomenon
 * @description Pre-observed quantum state
 */
class Phenomenon {
	constructor(state) {
		this.initialState = state
		this.probabilities = new Map([[state, 1]])
		this.entangledPhenomena = new Set()
	}

	addState(state, probability) {
		this.probabilities.set(state, probability)
		this.normalizeProbabilities()
	}

	normalizeProbabilities() {
		let sum = [...this.probabilities.values()].reduce((a, b) => a + b, 0)
		for (let [k, v] of this.probabilities) {
			this.probabilities.set(k, v / sum)
		}
	}

	entangleWith(otherPhenomenon) {
		this.entangledPhenomena.add(otherPhenomenon)
		otherPhenomenon.entangledPhenomena.add(this)
	}

	collapse(observer) {
		// Apply consciousness weighting to probabilities
		const weightedProbs = new Map()
		const weight = 1 + Math.log10(observer.consciousnessLevel)
		for (const [state, prob] of this.probabilities) {
			weightedProbs.set(state, prob * weight)
		}

		// Normalize the weighted probabilities
		const total = Array.from(weightedProbs.values()).reduce((a, b) => a + b, 0)
		const normalized = new Map()
		for (const [state, prob] of weightedProbs) {
			normalized.set(state, prob / total)
		}

		// Handle entanglement: ensure all entangled phenomena agree on a state
		if (this.entangledPhenomena.size > 0) {
			const sharedStates = Array.from(normalized.keys()).filter(state => {
				return Array.from(this.entangledPhenomena).every(phenom => {
					return phenom.probabilities.has(state)
				})
			})

			if (sharedStates.length > 0) {
				// Force all entangled phenomena to collapse to the same state
				const selectedState = sharedStates[0]
				normalized.set(selectedState, 1)
			}
		}

		// Select the state based on normalized probabilities
		let selectedState = this.initialState
		let cumulative = 0
		const random = Math.random()
		for (const [state, prob] of normalized) {
			cumulative += prob
			if (random <= cumulative) {
				selectedState = state
				break
			}
		}

		observer.lastObservation = new Observation(selectedState, observer)
		return observer.lastObservation
	}

	uniqueHash(str) {
		let hash = 0
		for (let i = 0; i < str.length; i++) {
			hash = (hash << 5) - hash + str.charCodeAt(i)
			hash |= 0
		}
		return Math.abs(hash % 100) / 100
	}
}
/**
 * Quantum Observation
 * @description Collapsed state from superposition
 */
class Observation {
	constructor(state, observer) {
		this.state = state
		this.observer = observer
		this.timestamp = Date.now()
	}
}

/**
 * Quantum Potential
 * @description Possible quantum state
 */
class Potential {
	constructor(state) {
		this.state = state
		this.probability = Math.random()
	}
}
/**
 * rea1ity (subjective reality)
 */
class rea1ity {
	constructor(observer) {
		this.observer = observer
		this.perception = {}
	}

	observe(phenomenon) {
		return phenomenon.collapse(this.observer)
	}
}

/**
 * rea0ity (objective reality)
 */
class rea0ity {
	constructor() {
		this.superposition = new Map()
	}

	entangle(potentials) {
		potentials.forEach((p, i) => {
			this.superposition.set(p.probability, p)
			if (i > 0) {
				p.entangleWith(potentials[i - 1])
			}
		})
		return this
	}
}

/**
 * The fundamental nature of existence
 */
class g0d extends rea0ity {
	constructor() {
		super()
		this.is = true
		this.isnt = false
	}
}

export { Observer, Phenomenon, Observation, Potential, rea1ity, rea0ity, g0d }
