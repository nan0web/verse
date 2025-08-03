import { test } from 'node:test'
import assert from 'node:assert'
import * as main from './index.js'
import * as en from './Reality.en.js'
import * as uk from './Reality.uk.js'
import * as el from './Reality.el.js'

test('Module exports', () => {
  assert.ok(main.en, 'English export exists')
  assert.ok(main.uk, 'Ukrainian export exists')
  assert.ok(main.el, 'Greek export exists')
  assert.deepEqual(main.en, en, 'English re-export matches')
  assert.deepEqual(main.uk, uk, 'Ukrainian re-export matches')
  assert.deepEqual(main.el, el, 'Greek re-export matches')
})