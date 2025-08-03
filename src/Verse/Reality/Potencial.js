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

export default Potential
