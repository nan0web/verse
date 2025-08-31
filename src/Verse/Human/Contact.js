import { Contact } from "@nan0web/co"

class HumanContact extends Contact {
	/**
	 * @param {*} input
	 * @returns {HumanContact}
	 */
	static from(input) {
		if (input instanceof HumanContact) return input
		return new HumanContact(input)
	}
}

export default HumanContact
