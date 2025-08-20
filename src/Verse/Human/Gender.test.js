import { describe, expect, it } from "vitest"
import { to } from "@nan0web/types"
import HumanGender from "./Gender.js"

describe("HumanGender", () => {
	it("should parse gender from name", () => {
		expect(to(Number)(HumanGender.parse("Петруненко Ярослав"))).toBe(1)
		expect(to(Number)(HumanGender.parse("Петруненко Володимир Васильович"))).toBe(1)
		expect(to(Number)(HumanGender.parse("Василь Петруненко"))).toBe(1)
		expect(to(Number)(HumanGender.parse("Петро"))).toBe(1)
		expect(to(Number)(HumanGender.parse("Людмила Петруненко"))).toBe(0)
		expect(to(Number)(HumanGender.parse("Петруненко Людмила Василівна"))).toBe(0)
		expect(to(Number)(HumanGender.parse("Людмила"))).toBe(0)
	})
})
