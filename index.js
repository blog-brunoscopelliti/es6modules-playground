
// import default export
// import pow from "modules/math";
//  pow(2, 4);
//  < 16


// import single named export
// import { square } from "modules/math";
//  square(3);
//  < 9


// import default export, and single named export
// import pow, { cubic } from "modules/math";
// cubic(2);
//  < 8
// pow(2, 4);
//  < 16


// import all
// import * as m from 'modules/math';
// m.square(2);
//  < 4
// m.cubic(2);
//  < 8
// m.default(2, 4);
//  < 16


import filter from "modules/filter";
import { square } from "modules/math";

export default function transform(arr) {
    return filter(arr).map(x => square(x));
}
