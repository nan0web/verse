import {
	HumanContact,
	HumanGender,
	HumanName,
	I,
	We,
} from "../src/index.js"

console.log("=== HumanContact Examples ===")
const contacts = [
	"test@example.com",
	"+1234567890",
	"https://example.com",
	"123 Main St",
]

for (const contact of contacts) {
	const parsed = HumanContact.from(contact)
	console.log(String(parsed))
}

console.log("\n=== HumanGender Examples ===")
const names = [
	"Петруненко Ярослав",
	"Людмила Петруненко",
	"Robert(Bob) Smith",
]

for (const name of names) {
	const gender = HumanGender.from(name)
	console.log(`${name} → ${gender.toString()} (${gender.toNumber()})`)
}

console.log("\n=== HumanName Examples ===")
const fullNames = [
	"Анжелiка",
	"Іван Іванович Іванов",
	"Smith John Robert(Bob)",
]

for (const fullName of fullNames) {
	const name = HumanName.from(fullName)
	console.log(`${fullName} → ${name.toString()}`)
	console.log(`  First Name: ${name.firstName}`)
	console.log(`  Last Name: ${name.lastName}`)
	console.log(`  Alias: ${name.alias}`)
}

console.log("\n=== I Identity Examples ===")
const identities = ["Ярослав", "Alice", "Bob"]

for (const id of identities) {
	const identity = new I(id)
	console.log(String(identity))
}

console.log("\n=== We Group Examples ===")
const alice = new I("Alice")
const bob = new I("Bob")
const group = new We({ members: [alice, bob] })

console.log("Group members:")
console.log(String(group))
