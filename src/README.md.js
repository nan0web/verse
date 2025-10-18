import { describe, it, before, beforeEach } from "node:test"
import assert from "node:assert/strict"
import FS from "@nan0web/db-fs"
import { to } from "@nan0web/types"
import { NoConsole } from "@nan0web/log"
import {
	DatasetParser,
	DocsParser,
} from "@nan0web/test"
import {
	Human, HumanContact, HumanGender, HumanName,
	I,
	We,
} from "./index.js"

const fs = new FS()
let pkg

// Load package.json once before tests
before(async () => {
	const doc = await fs.loadDocument("package.json", {})
	pkg = doc || {}
})

let console = new NoConsole()

beforeEach(() => {
	console = new NoConsole()
})

/**
 * Core test suite that also serves as the source for README generation.
 *
 * The block comments inside each `it` block are extracted to build
 * the final `README.md`. Keeping the comments here ensures the
 * documentation stays close to the code.
 */
function testRender() {
	/**
	 * @docs
	 * # @nan0web/verse
	 *
	 * <!-- %PACKAGE_STATUS% -->
	 *
	 * I•We•Meta•Uni•Verse — the foundational layer of human structures in the nan0web ecosystem.
	 *
	 * Verse allows you to model identity, relationships, and communication structures
	 * that align with the real world — from simple contacts to complex human groupings.
	 *
	 * This package includes:
	 * - `Human` models: `Contact`, `Gender`, `Name`, etc.
	 * - `I` – a fundamental identity atom
	 * - `We` – a collective, built from `I`
	 *
	 * ## Installation
	 */
	it("How to install with npm?", () => {
		/**
		 * ```bash
		 * npm install @nan0web/verse
		 * ```
		 */
		assert.equal(pkg.name, "@nan0web/verse")
	})
	/**
	 * @docs
	 */
	it("How to install with pnpm?", () => {
		/**
		 * ```bash
		 * pnpm add @nan0web/verse
		 * ```
		 */
		assert.equal(pkg.name, "@nan0web/verse")
	})
	/**
	 * @docs
	 */
	it("How to install with yarn?", () => {
		/**
		 * ```bash
		 * yarn add @nan0web/verse
		 * ```
		 */
		assert.equal(pkg.name, "@nan0web/verse")
	})

	/**
	 * @docs
	 * ## Usage
	 *
	 * ### Creating HumanContact from string
	 *
	 * `HumanContact` parses strings into standard contact URIs like `mailto:`, `tel:`, or `address:`.
	 */
	it("How to create HumanContact from string?", () => {
		//import { HumanContact } from '@nan0web/verse'
		const contact = HumanContact.from("+1234567890")
		console.info(String(contact)) // ← tel:+1234567890
		assert.equal(console.output()[0][1], "tel:+1234567890")
	})

	/**
	 * @docs
	 * ### Creating HumanGender from a name
	 *
	 * Recognizes gender by name or alias using lists of Ukrainian and international names.
	 */
	it("How to recognize HumanGender from a full name?", () => {
		//import { HumanGender } from '@nan0web/verse'
		const gender = HumanGender.from("Петруненко Ярослав")
		console.info(to(Number)(gender)) // ← 1 (men's)
		assert.equal(console.output()[0][1], 1)
	})

	/**
	 * @docs
	 * ### Working with HumanName
	 *
	 * Helps represent family tree-friendly full names, including aliases.
	 */
	it("How to parse and normalize a name with alias?", () => {
		//import { HumanName } from '@nan0web/verse'
		const name = HumanName.from("Анжелiка")
		console.info(String(name)) // ← Анжеліка(Анжелiка)
		assert.equal(console.output()[0][1], "Анжеліка(Анжелiка)")
	})

	/**
	 * @docs
	 * ### Creating `I` identity
	 *
	 * Simplest atomic unit of identity.
	 */
	it("How to create minimal identity with I?", () => {
		//import { I } from '@nan0web/verse'
		const iAm = new I("Ярослав")
		console.info(String(iAm)) // ← Ярослав
		assert.equal(console.output()[0][1], "Ярослав")
	})

	/**
	 * @docs
	 * ### Grouping identities into `We`
	 *
	 * Simple array wrapper, but typed and verifiable.
	 */
	it("How to create a group identity with We?", () => {
		//import { I, We } from '@nan0web/verse'
		const alice = new I("Alice")
		const bob = new I("Bob")

		const group = new We({ members: [alice, bob] })
		console.info(String(group)) // ← Alice\nBob
		assert.equal(console.output()[0][1], "Alice\nBob")
	})

	/**
	 * @docs
	 * ## API
	 *
	 * ### HumanContact
	 *
	 * Parses strings into contact URIs using known prefixes or smart detection.
	 *
	 * - `from(input)` – creates a HumanContact instance
	 * - `toString()` – returns normalized URI
	 *
	 * ### HumanGender
	 *
	 * Detects gender by name parsing with support for Ukrainian and international name lists.
	 *
	 * - `from(input)` – creates HumanGender by name or number
	 * - `toNumber()` – returns -1 (unknown), 0 (f), 1 (m)
	 * - `toString()` – descriptive string
	 *
	 * ### HumanName
	 *
	 * Parses and sorts full names including alias support.
	 *
	 * - `from(input)` – creates a new HumanName from array or string
	 * - `toString()` – returns full name
	 * - `firstName`, `lastName`, `alias` – getters
	 *
	 * ### I
	 *
	 * Base identity value.
	 *
	 * - `constructor(value)` – stores string value
	 * - `toString()` – returns value
	 *
	 * ### We
	 *
	 * Group of identities.
	 *
	 * - `constructor({ members })` – stores array of `I`
	 * - `toString()` – joins all members with newlines
	 *
	 * ## Playground
	 */
	it("How to try package in CLI?", () => {
		/**
		 * ```bash
		 * # To try out examples and play with the library:
		 * git clone https://github.com/nan0web/verse.git
		 * cd verse
		 * npm install
		 * npm run playground
		 * ```
		 */
		assert.ok(String(pkg.scripts?.playground).includes("node playground"))
	})

	/**
	 * @docs
	 * ## Java•Script
	 */
	it("How is autocompletion enabled?", () => {
		assert.equal(pkg.types, "types/index.d.ts")
		assert.ok(String(pkg.scripts?.build).split(" ").includes("tsc"))
	})

	/**
	 * @docs
	 * ## Contributing
	 */
	it("How to contribute? - [check here](./CONTRIBUTING.md)", async () => {
		assert.equal(pkg.scripts?.precommit, "npm test")
		assert.equal(pkg.scripts?.prepush, "npm test")
		assert.equal(pkg.scripts?.prepare, "husky")
		const text = await fs.loadDocument("CONTRIBUTING.md")
		const str = String(text)
		assert.ok(str.includes("# Contributing"))
	})

	/**
	 * @docs
	 * ## License
	 */
	it("How to license ISC? - [check here](./LICENSE)", async () => {
		const text = await fs.loadDocument("LICENSE")
		assert.ok(String(text).includes("ISC"))
	})
}

describe("README.md testing", testRender)

describe("Rendering README.md", async () => {
	const parser = new DocsParser()
	const text = String(parser.decode(testRender))
	await fs.saveDocument("README.md", text)

	const dataset = DatasetParser.parse(text, pkg.name)
	await fs.saveDocument(".datasets/README.dataset.jsonl", dataset)

	it(`document is rendered [${Intl.NumberFormat("en-US").format(Buffer.byteLength(text))}b]`, async () => {
		const saved = await fs.loadDocument("README.md")
		assert.ok(saved.includes("## License"), "README was not generated")
	})
})
