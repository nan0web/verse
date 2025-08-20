import test from "node:test"
import assert from "node:assert/strict"
import Contact from "./Contact.js"

const tests = [
	["test@example.com", "mailto:test@example.com"],
	["+1234567890", "tel:+1234567890"],
	["https://example.com", "https://example.com"],
	["123 Main St", "address:123 Main St"],
]

for (const [input, expected] of tests) {
	test(`Contact.parse(${input})`, () => {
		const contact = Contact.parse(input)
		assert.equal(String(contact), expected)
	})
}

test("Contact default constructor", () => {
	const contact = new Contact()
	assert.equal(contact.type, Contact.ADDRESS)
	assert.equal(contact.value, "")
	assert.equal(contact.toString(), Contact.ADDRESS)
})

test("Contact constructor with string input uses parse", () => {
	const input = Contact.EMAIL + "test@example.com"
	const contact = new Contact(input)
	assert.equal(contact.type, Contact.EMAIL)
	assert.equal(contact.value, "test@example.com")
	assert.equal(contact.toString(), input)
})

test("Contact constructor with object input", () => {
	const props = { type: Contact.TELEPHONE, value: "+1234567890" }
	const contact = new Contact(props)
	assert.equal(contact.type, Contact.TELEPHONE)
	assert.equal(contact.value, "+1234567890")
	assert.equal(contact.toString(), Contact.TELEPHONE + "+1234567890")
})

test("Contact.parse recognizes known prefixes", () => {
	const prefixes = [
		Contact.ADDRESS,
		Contact.EMAIL,
		Contact.FACEBOOK,
		Contact.INSTAGRAM,
		Contact.LINKEDIN,
		Contact.SIGNAL,
		Contact.SKYPE,
		Contact.TELEGRAM,
		Contact.VIBER,
		Contact.WHATSAPP,
		Contact.X,
		Contact.TELEPHONE,
		Contact.WEBSITE,
	]
	for (const prefix of prefixes) {
		const value = "value123"
		const input = prefix + value
		const contact = Contact.parse(input)
		assert.equal(contact.type, prefix)
		assert.equal(contact.value, value)
		assert.equal(contact.toString(), input)
	}
})

test("Contact.parse detects email without prefix", () => {
	const email = "user@example.com"
	const contact = Contact.parse(email)
	assert.equal(contact.type, Contact.EMAIL)
	assert.equal(contact.value, email)
	assert.equal(contact.toString(), Contact.EMAIL + email)
})

test("Contact.parse detects telephone without prefix", () => {
	const phone = "+1 (234) 567-8900"
	const contact = Contact.parse(phone)
	assert.equal(contact.type, Contact.TELEPHONE)
	assert.equal(contact.value, phone)
	assert.equal(contact.toString(), Contact.TELEPHONE + phone)
})

test("Contact.parse detects website without prefix", () => {
	const url = "https://example.com"
	const contact = Contact.parse(url)
	assert.equal(contact.type, Contact.WEBSITE)
	assert.equal(contact.value, "example.com")
	assert.equal(String(contact), url)
})

test("Contact.parse defaults to address for unknown format", () => {
	const address = "123 Main St"
	const contact = Contact.parse(address)
	assert.equal(contact.type, Contact.ADDRESS)
	assert.equal(contact.value, address)
	assert.equal(contact.toString(), Contact.ADDRESS + address)
})

test("Contact.from returns same instance if input is Contact", () => {
	const contact = new Contact({ type: Contact.EMAIL, value: "a@b.com" })
	const result = Contact.from(contact)
	assert.strictEqual(result, contact)
})

test("Contact.from creates new instance if input is not Contact", () => {
	const props = { type: Contact.TELEPHONE, value: "123456" }
	const result = Contact.from(props)
	assert.ok(result instanceof Contact)
	assert.equal(result.type, props.type)
	assert.equal(result.value, props.value)
})
