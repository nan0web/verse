/**
 * Квантовий Спостерігач
 * @description Свідомість, що впливає на квантові стани
 */
export class Спостерігач {
    constructor(id: any, рівеньСвідомості?: number);
    id: any;
    рівеньСвідомості: number;
    заплутаніСпостерігачі: Set<any>;
    статиЗаплутаним(іншийСпостерігач: any): void;
}
/**
 * Квантове Явище
 * @description Стан перед спостереженням, де спостерігач впливає на результат
 */
export class Явище {
    constructor(стан: any);
    початковийСтан: any;
    ймовірності: Map<any, number>;
    заплутаніЯвища: Set<any>;
    додатиСтан(стан: any, ймовірність: any): void;
    нормалізуватиЙмовірності(): void;
    статиЗаплутаним(іншеЯвище: any): void;
    колапсувати(спостерігач: any): any;
    хешУнікальне(рядок: any): number;
}
export class Спостереження {
    constructor(стан: any, спостерігач: any);
    стан: any;
    спостерігач: any;
    час: number;
}
export class Потенціал {
    constructor(стан: any);
    стан: any;
    ймовірність: number;
}
export class реa1ьність {
    constructor(спостерігач: any);
    спостерігач: any;
    сприйняття: {};
    спостерігати(явище: any): any;
}
export class реa0ьність {
    суперпозиція: Map<any, any>;
    заплутати(потенціали: any): this;
}
export class б0г extends реa0ьність {
    є: boolean;
    неє: boolean;
}
