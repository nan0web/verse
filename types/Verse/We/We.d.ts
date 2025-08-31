export default We;
declare class We {
    /**
     * @param {object} input
     * @param {I[]} [input.members]
     */
    constructor(input?: {
        members?: I[] | undefined;
    });
    /** @type {I[]} */
    members: I[];
    toString(): string;
}
import I from "../I/I.js";
