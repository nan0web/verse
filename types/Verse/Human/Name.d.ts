export default HumanName;
declare class HumanName {
    /**
     * @param {*} input
     * @returns {HumanName}
     */
    static from(input: any): HumanName;
    /**
     * @param {string} str
     * @returns {HumanName}
     */
    static parse(str: string): HumanName;
    /**
     * Family tree, as long as you wish.
     * Try to start with name and then the rest of the tree.
     * Use () to separate name and alias.
     * @example ["Robert(Bob)", "Smith"]
     * @example ["Robert", "Bob", "Smith"]
     * @example ["Іван", "Іванович", "Іванов"]
     * @param {string[]} input
     */
    constructor(input: string[]);
    /** @type {string[]} */
    value: string[];
    toString(): string;
}
