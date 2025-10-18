import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
	Human,
	HumanContact,
	HumanGender,
	HumanName,
	I,
	We,
} from './index.js'

describe('Package exports', () => {
	it('should export all main components', () => {
		assert.ok(Human)
		assert.ok(HumanContact)
		assert.ok(HumanGender)
		assert.ok(HumanName)
		assert.ok(I)
		assert.ok(We)
	})
})
