import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { to } from "@nan0web/types"
import HumanGender from "./Gender.js"

describe("HumanGender", () => {
	it("should parse gender from name", () => {
		assert.equal(to(Number)(HumanGender.parse("Петруненко Ярослав")), 1)
		assert.equal(to(Number)(HumanGender.parse("Петруненко Володимир Васильович")), 1)
		assert.equal(to(Number)(HumanGender.parse("Василь Петруненко")), 1)
		assert.equal(to(Number)(HumanGender.parse("Петро")), 1)
		assert.equal(to(Number)(HumanGender.parse("Людмила Петруненко")), 0)
		assert.equal(to(Number)(HumanGender.parse("Петруненко Людмила Василівна")), 0)
		assert.equal(to(Number)(HumanGender.parse("Людмила")), 0)
	})
})