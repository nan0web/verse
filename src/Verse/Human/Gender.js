import { typeOf } from "@nan0web/types"
import namesMen from "./names.men.js"
import namesWomen from "./names.women.js"
import HumanName from "./Name.js"

class HumanGender {
	/** @type {number} */
	value
	/**
	 * @param {number | boolean} input
	 */
	constructor(input) {
		this.value = -1
		if (typeOf(Number)(input)) {
			this.value = input < 0 ? -1 : input > 0 ? 1 : 0
		}
		if (typeOf(Boolean)(input)) {
			this.value = Number(input)
		}
	}
	toString() {
		return this.value === 1 ? "men's gender" : this.value === 0 ? "women's gender" : "unknown gender"
	}
	toNumber() {
		return this.value
	}
	/**
	 * @param {string} str
	 * @returns {HumanGender}
	 */
	static parse(str) {
		if ("string" !== typeof str) {
			throw new TypeError("Gender must be parsed from a string (name)")
		}
		if ("1" === str) {
			return new HumanGender(1)
		}
		if ("0" === str) {
			return new HumanGender(0)
		}
		if (["-1", "-", ""].includes(str)) {
			return new HumanGender(-1)
		}
		const name = HumanName.parse(str)
		for (let word of name.value) {
			const [name] = word.split("(")
			const variants = [
				name,
				name.slice(0, 1).toLocaleUpperCase() + name.slice(1),
				name.slice(0, 1).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase(),
			]
			for (const variant of variants) {
				if (namesMen.includes(variant)) {
					return new HumanGender(1)
				}
				if (namesWomen.includes(variant)) {
					return new HumanGender(0)
				}
			}
		}
		return new HumanGender(-1)
	}
}

export default HumanGender
