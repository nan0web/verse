import Phenomenon from "./Phenomenon.js"
import { test, assert } from "node:test"

test("Phenomenon state management", (t) => {
  const phen = new Phenomenon("initial")
  
  phen.addState("state1", 0.3)
  phen.addState("state2", 0.7)
  
  t.deepEqual([...phen.probabilities.values()], [1], "Probabilities should normalize correctly")
})

test("Quantum collapse scenarios", (t) => {
  const observer = new Observer("Test", 100)
  const phen = new Phenomenon("initial")
  
  phen.addState("up", 0.5)
  phen.addState("down", 0.5)
  
  const observation = phen.collapse(observer)
  
  t.ok(observation.state === "up" || observation.state === "down", "Collapse should select valid state")
})

test("Entangled phenomena behavior", (t) => {
  const phen1 = new Phenomenon("initial")
  const phen2 = new Phenomenon("initial")
  
  phen1.entangleWith(phen2)
  
  phen1.addState("up", 1)
  phen2.addState("up", 1)
  
  const observer = new Observer("Test", 100)
  const observation = phen1.collapse(observer)
  
  t.equal(observation.state, "up", "Entangled phenomena should collapse to same state")
})