# @nan0web/verse

|Package name|[Status](https://github.com/nan0web/monorepo/blob/main/system.md#написання-сценаріїв)|Documentation|Test coverage|Features|Npm version|
|---|---|---|---|---|---|
 |[@nan0web/verse](https://github.com/nan0web/verse/) |🟢 `98.9%` |🧪 [English 🏴󠁧󠁢󠁥󠁮󠁧󠁿](https://github.com/nan0web/verse/blob/main/README.md)<br />[Українською 🇺🇦](https://github.com/nan0web/verse/blob/main/docs/uk/README.md) |🟢 `95.1%` |✅ d.ts 📜 system.md 🕹️ playground |— |

I•We•Meta•Uni•Verse — the foundational layer of human structures in the nan0web ecosystem.

Verse allows you to model identity, relationships, and communication structures
that align with the real world — from simple contacts to complex human groupings.

This package includes:
- `Human` models: `Contact`, `Gender`, `Name`, etc.
- `I` – a fundamental identity atom
- `We` – a collective, built from `I`

## Installation

How to install with npm?
```bash
npm install @nan0web/verse
```

How to install with pnpm?
```bash
pnpm add @nan0web/verse
```

How to install with yarn?
```bash
yarn add @nan0web/verse
```

## Usage

### Creating HumanContact from string

`HumanContact` parses strings into standard contact URIs like `mailto:`, `tel:`, or `address:`.

How to create HumanContact from string?
```js
import { HumanContact } from '@nan0web/verse'
const contact = HumanContact.from("+1234567890")
console.info(String(contact)) // ← tel:+1234567890
```
### Creating HumanGender from a name

Recognizes gender by name or alias using lists of Ukrainian and international names.

How to recognize HumanGender from a full name?
```js
import { HumanGender } from '@nan0web/verse'
const gender = HumanGender.from("Петруненко Ярослав")
console.info(to(Number)(gender)) // ← 1 (men's)
```
### Working with HumanName

Helps represent family tree-friendly full names, including aliases.

How to parse and normalize a name with alias?
```js
import { HumanName } from '@nan0web/verse'
const name = HumanName.from("Анжелiка")
console.info(String(name)) // ← Анжеліка(Анжелiка)
```
### Creating `I` identity

Simplest atomic unit of identity.

How to create minimal identity with I?
```js
import { I } from '@nan0web/verse'
const iAm = new I("Ярослав")
console.info(String(iAm)) // ← Ярослав
```
### Grouping identities into `We`

Simple array wrapper, but typed and verifiable.

How to create a group identity with We?
```js
import { I, We } from '@nan0web/verse'
const alice = new I("Alice")
const bob = new I("Bob")

const group = new We({ members: [alice, bob] })
console.info(String(group)) // ← Alice\nBob
```
### Overriding static dictionaries

You can override internal static dictionaries such as gender lists or name aliases.
This is useful for customizations, adding support for new languages, or correcting edge cases.

Example:
```js
import { HumanGender, HumanName } from '@nan0web/verse'

// Create custom name class with different dictionaries
class CustomHumanName extends HumanName {
  static MEN = ['Alex', 'John']
  static WOMEN = ['Alexa', 'Jane']
}

// Override the Name reference in HumanGender
HumanGender.Name = CustomHumanName

const gender = HumanGender.from('Alex')
console.log(gender.toNumber()) // ← 1
```

How to override static dictionaries for HumanGender.Name?
```js
// Backup original data
const OriginalName = HumanGender.Name

// Create custom name class
class CustomHumanName extends HumanName {
	static MEN = ["TestMaleName"]
	static WOMEN = ["TestFemaleName"]
}

// Override static dictionary
HumanGender.Name = CustomHumanName

// Test overridden behavior
const gender = HumanGender.from("TestMaleName")
```
## API

### HumanContact

Parses strings into contact URIs using known prefixes or smart detection.

- `from(input)` – creates a HumanContact instance
- `toString()` – returns normalized URI

### HumanGender

Detects gender by name parsing with support for Ukrainian and international name lists.

- `from(input)` – creates HumanGender by name or number
- `toNumber()` – returns -1 (unknown), 0 (f), 1 (m)
- `toString()` – descriptive string
- `Name` static property – reference to HumanName class that can be overridden

### HumanName

Parses and sorts full names including alias support.

- `from(input)` – creates a new HumanName from array or string
- `toString()` – returns full name
- `firstName`, `lastName`, `alias` – getters
- `ALIASES`, `MEN`, `WOMEN` – static arrays that can be overridden

### I

Base identity value.

- `constructor(value)` – stores string value
- `toString()` – returns value

### We

Group of identities.

- `constructor({ members })` – stores array of `I`
- `toString()` – joins all members with newlines

## Playground

How to try package in CLI?
```bash
# To try out examples and play with the library:
git clone https://github.com/nan0web/verse.git
cd verse
npm install
npm run playground
```

## Java•Script

How is autocompletion enabled?

## Contributing

How to contribute? - [check here](./CONTRIBUTING.md)

## License

How to license ISC? - [check here](./LICENSE)
```js
const text = await fs.loadDocument("LICENSE")
```