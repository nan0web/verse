import { typeOf } from "@nan0web/types"

class Contact {
	static ADDRESS = "address:"
	static EMAIL = "mailto:"

	static FACEBOOK = "https://www.facebook.com/"
	static INSTAGRAM = "https://www.instagram.com/"
	static LINKEDIN = "https://www.linkedin.com/in/"
	static SIGNAL = "https://signal.me/#p/"
	static SKYPE = "skype:"
	static TELEGRAM = "https://t.me/"
	static VIBER = "viber://chat?number="
	static WHATSAPP = "https://wa.me/"
	static X = "https://x.com/"

	static TELEPHONE = "tel:"
	static WEBSITE = "https://"

	/** @type {string} */
	type
	/** @type {string} */
	value

	/**
	 * @param {object | string} props
	 * @param {string} [props.type=Contact.ADDRESS]
	 * @param {string} [props.value=""]
	 */
	constructor(props = {}) {
		if ("string" === typeof props) {
			props = Contact.parse(props)
		}
		const {
			type = Contact.ADDRESS,
			value = "",
		} = props
		this.type = String(type)
		this.value = String(value)
	}
	toString() {
		return this.type + this.value
	}
	/**
	 * @param {string} input
	 * @returns {Contact}
	 */
	static parse(input) {
		const props = String(input)
		let value = props
		let type
		if (typeOf(Number)(props)) {
			type = String(type)
		}
		type = Object.values(Contact).find(str => props.startsWith(str)) ?? ""
		if (type) {
			value = props.slice((type ?? "").length)
		} else {
			if (/^[a-z0-9\._\-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(props)) {
				type = Contact.EMAIL
			}
			else if (/^[\+\-\(\)\s\d]{6,}$/.test(props)) {
				type = Contact.TELEPHONE
			}
			else if (/^https?:\/\//.test(props)) {
				type = Contact.WEBSITE
			}
			else {
				type = Contact.ADDRESS
			}
		}
		return new Contact({ type, value })
	}
	static from(props) {
		if (props instanceof Contact) return props
		return new this(props)
	}
}

export default Contact
