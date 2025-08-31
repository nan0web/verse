/**
 * Quantum Observer
 * @description Consciousness that collapses wave function
 */
export class Observer {
    constructor(id: any, consciousnessLevel?: number);
    id: any;
    consciousnessLevel: number;
    entangledObservers: Set<any>;
    entangleWith(otherObserver: any): void;
    toString(): string;
}
/**
 * Quantum Phenomenon
 * @description Pre-observed quantum state
 */
export class Phenomenon {
    constructor(state: any);
    initialState: any;
    probabilities: Map<any, number>;
    entangledPhenomena: Set<any>;
    addState(state: any, probability: any): void;
    normalizeProbabilities(): void;
    entangleWith(otherPhenomenon: any): void;
    collapse(observer: any): any;
    uniqueHash(str: any): number;
}
/**
 * Quantum Observation
 * @description Collapsed state from superposition
 */
export class Observation {
    constructor(state: any, observer: any);
    state: any;
    observer: any;
    timestamp: number;
}
/**
 * Quantum Potential
 * @description Possible quantum state
 */
export class Potential {
    constructor(state: any);
    state: any;
    probability: number;
}
/**
 * rea1ity (subjective reality)
 */
export class rea1ity {
    constructor(observer: any);
    observer: any;
    perception: {};
    observe(phenomenon: any): any;
}
/**
 * rea0ity (objective reality)
 */
export class rea0ity {
    superposition: Map<any, any>;
    entangle(potentials: any): this;
}
/**
 * The fundamental nature of existence
 */
export class g0d extends rea0ity {
    is: boolean;
    isnt: boolean;
}
