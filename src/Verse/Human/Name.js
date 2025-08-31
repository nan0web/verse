import names from "./names.js"
import namesMen from "./names.men.js"
import namesWomen from "./names.women.js"

const aliasMap = new Map(names)
const namesList = [...namesMen, ...namesWomen]

function findAlias(word, variants) {
	for (const variant of variants) {
		if (aliasMap.has(variant)) {
			return `${variant}(${aliasMap.get(variant)})`
		}
		for (const [name, variants] of aliasMap) {
			if (variants.includes(variant)) {
				return `${name}(${variant})`
			}
		}
	}
	return word
}

class HumanName {
	/** @type {string[]} */
	value
	/**
	 * Family tree, as long as you wish.
	 * Try to start with name and then the rest of the tree.
	 * Use () to separate name and alias.
	 * @example ["Robert(Bob)", "Smith"]
	 * @example ["Robert", "Bob", "Smith"]
	 * @example ["Іван", "Іванович", "Іванов"]
	 * @param {string[]} input
	 */
	constructor(input) {
		this.value = input
	}
	toString() {
		return this.value.join(" ")
	}

	/**
	 * @param {*} input
	 * @returns {HumanName}
	 */
	static from(input) {
		if (input instanceof HumanName) return input
		if ("string" === typeof input) {
			return this.parse(input)
		}
		return new HumanName(input)
	}

	/**
	 * @param {string} str
	 * @returns {HumanName}
	 */
	static parse(str) {
		const words = String(str).replace(/\s+/g, " ").split(" ")
		const output = []
		for (let word of words) {
			if (word.includes("(")) {
				output.push(word)
				continue
			}
			const variants = [
				word,
				word.slice(0, 1).toLocaleUpperCase() + word.slice(1),
				word.slice(0, 1).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase(),
			]
			output.push(findAlias(word, variants))
		}
		output.sort((a, b) => - namesList.indexOf(a) + namesList.indexOf(b))
		return new HumanName(output)
	}
}

export default HumanName
