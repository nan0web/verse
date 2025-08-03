import { test } from 'node:test'
import assert from 'node:assert'
import { Παρατηρητής, Δυναμικό, Φαινόμενο, πρα1τικότητα, θ0ός } from './Reality.el.js'

test('Greek Reality Classes', async (t) => {
  await t.test('θ0ός creates world', () => {
    const θεός = new θ0ός()
    const κόσμος = θεός.εμπλέκω([new Δυναμικό('ενέργεια')])
    assert.ok(κόσμος.υπέρθεση.size > 0)
  })

  await t.test('Different consciousness levels produce different observations', () => {
    const φαινόμενο = new Φαινόμενο('κβαντικό')
    φαινόμενο.προσθήκηΚατάστασης('κατάσταση1', 0.5)
    φαινόμενο.προσθήκηΚατάστασης('κατάσταση2', 0.5)
    
    const παρατηρητής1 = new Παρατηρητής('υψηλή', 10)
    const παρατηρητής2 = new Παρατηρητής('χαμηλή', 1)
    
    const πραγματικότητα1 = new πρα1τικότητα(παρατηρητής1)
    const πραγματικότητα2 = new πρα1τικότητα(παρατηρητής2)
    
    const παρατήρηση1 = πραγματικότητα1.παρατηρώ(φαινόμενο)
    const παρατήρηση2 = πραγματικότητα2.παρατηρώ(φαινόμενο)
    
    assert.notStrictEqual(παρατήρηση1.κατάσταση, παρατήρηση2.κατάσταση)
  })
})